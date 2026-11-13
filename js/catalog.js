/*
 * catalog.js — one tidy view of all project data
 * ----------------------------------------------
 * The data files only hold plain objects:
 *   HCM.data.projects     project briefs (projects-*.js)
 *   HCM.data.corrections  self-check corrections keyed by project number (corrections-*.js)
 *   HCM.data.levels       the four levels
 *   HCM.data.topics       the topic index
 * This file joins them. HCM.catalog.get(12) returns one object with all twenty
 * project fields, so pages never need to know which file a fact lives in.
 * Nothing is copied into two places: mistakes and the checklist come from the
 * correction, the completion status is read live from progress.js.
 *
 * validate() checks the data every time the site starts (and in the Node test),
 * so a typo in a data file shows up as a clear message instead of a broken page.
 */
(function (HCM) {
  "use strict";

  const data = HCM.data || (HCM.data = {});
  const TOTAL = 100;
  const CHECK_CATEGORIES = ["functional", "responsive", "accessibility"];
  const CATEGORY_PREFIX = { functional: "f", responsive: "r", accessibility: "a" };

  const levels = Array.isArray(data.levels) ? data.levels.slice() : [];
  const topics = Array.isArray(data.topics) ? data.topics.slice() : [];
  const corrections = data.corrections || {};
  const rawProjects = Array.isArray(data.projects) ? data.projects.slice() : [];
  rawProjects.sort(function (a, b) {
    return a.number - b.number;
  });

  const levelById = new Map();
  levels.forEach(function (level, index) {
    level.index = index;
    levelById.set(level.id, level);
  });

  const topicById = new Map();
  topics.forEach(function (topic) {
    topicById.set(topic.id, topic);
  });

  function pad3(number) {
    return String(number).padStart(3, "0");
  }

  function levelForNumber(number) {
    for (let i = 0; i < levels.length; i += 1) {
      if (number >= levels[i].range[0] && number <= levels[i].range[1]) {
        return levels[i];
      }
    }
    return null;
  }

  /**
   * Stable id for a checklist item: a short hash of its text (djb2).
   * Saved ticks therefore survive reordering; rewriting an item's text resets only that tick.
   */
  function hashText(text) {
    let hash = 5381;
    for (let i = 0; i < text.length; i += 1) {
      hash = ((hash << 5) + hash + text.charCodeAt(i)) >>> 0;
    }
    return hash.toString(36);
  }

  function buildChecklist(correction) {
    const items = [];
    CHECK_CATEGORIES.forEach(function (category) {
      const list = correction && correction.checks && Array.isArray(correction.checks[category]) ? correction.checks[category] : [];
      list.forEach(function (text) {
        items.push({ id: CATEGORY_PREFIX[category] + "-" + hashText(String(text)), category: category, text: String(text) });
      });
    });
    return items;
  }

  /** Solutions are grouped ten per file: 1–10, 11–20, … */
  function solutionFile(number) {
    const start = Math.floor((number - 1) / 10) * 10 + 1;
    return "js/data/solutions/solutions-" + pad3(start) + "-" + pad3(start + 9) + ".js";
  }

  /** Lower-case text without accents, for forgiving search. */
  function normaliseText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }

  function assemble(brief) {
    const correction = corrections[brief.number] || null;
    const level = levelForNumber(brief.number);
    const topicObjects = (brief.topics || []).map(function (id) {
      return topicById.get(id);
    }).filter(Boolean);
    const selfCheck = buildChecklist(correction);
    const searchText = normaliseText(
      [
        brief.title,
        brief.shortDescription,
        brief.objective,
        (brief.skills || []).join(" "),
        topicObjects.map(function (topic) { return topic.name + " " + topic.id; }).join(" "),
        level ? level.name : ""
      ].join(" ")
    );

    return Object.freeze({
      // 1–16: from the brief
      id: brief.id,
      number: brief.number,
      title: brief.title,
      difficulty: brief.difficulty,
      complexity: brief.complexity,
      shortDescription: brief.shortDescription,
      objective: brief.objective,
      skills: brief.skills || [],
      topics: brief.topics || [],
      estimatedMinutes: brief.estimatedMinutes,
      requiredHtml: brief.requiredHtml || [],
      requiredCss: brief.requiredCss || [],
      steps: brief.steps || [],
      functionalRequirements: brief.functionalRequirements || [],
      responsiveRequirements: brief.responsiveRequirements || [],
      accessibilityRequirements: brief.accessibilityRequirements || [],
      hints: brief.hints || [],
      // 17–18: from the correction
      commonMistakes: correction && Array.isArray(correction.commonMistakes) ? correction.commonMistakes : [],
      selfCheck: selfCheck,
      // 19: the code itself is loaded only when someone opens the solution
      modelSolution: { available: true, scope: brief.number <= 50 ? "full" : "core", file: solutionFile(brief.number) },
      // 20: always read live, never stored in the data files
      get completed() {
        return HCM.progress ? HCM.progress.isComplete(this.number) : false;
      },
      // Helpers used by the pages
      level: level,
      levelId: level ? level.id : null,
      levelName: level ? level.name : "",
      correction: correction,
      topicObjects: topicObjects,
      folderName: String(brief.id || "").replace(/^p/, ""),
      paddedNumber: pad3(brief.number),
      searchText: searchText
    });
  }

  const projects = [];
  const byNumber = new Map();
  rawProjects.forEach(function (brief) {
    if (!brief || typeof brief.number !== "number" || byNumber.has(brief.number)) {
      return;
    }
    const project = assemble(brief);
    projects.push(project);
    byNumber.set(project.number, project);
  });

  const projectsByTopic = new Map();
  topics.forEach(function (topic) {
    projectsByTopic.set(topic.id, []);
  });
  projects.forEach(function (project) {
    project.topics.forEach(function (id) {
      if (projectsByTopic.has(id)) {
        projectsByTopic.get(id).push(project);
      }
    });
  });

  /**
   * True when a project matches a search query.
   * "12" or "#12" finds project 12; other words must all appear somewhere in
   * the title, description, objective, skills, topics or level name.
   */
  function matches(project, query) {
    const q = normaliseText(query).trim();
    if (!q) {
      return true;
    }
    const numberMatch = q.match(/^#?0*(\d{1,3})$/);
    if (numberMatch) {
      return project.number === Number(numberMatch[1]);
    }
    return q.split(/\s+/).every(function (term) {
      return project.searchText.indexOf(term) !== -1;
    });
  }

  /** Difficulty order: level first, then complexity inside the level, then number. */
  function difficultyScore(project) {
    const levelIndex = project.level ? project.level.index : 9;
    return levelIndex * 10 + (project.complexity || 0);
  }

  /* ---------- Data validation ---------- */

  const BRIEF_TEXT_FIELDS = ["id", "title", "difficulty", "shortDescription", "objective"];
  const BRIEF_LIST_FIELDS = [
    "skills",
    "topics",
    "requiredHtml",
    "requiredCss",
    "steps",
    "functionalRequirements",
    "responsiveRequirements",
    "accessibilityRequirements",
    "hints"
  ];

  function isFilledString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isFilledList(value) {
    return Array.isArray(value) && value.length > 0 && value.every(isFilledString);
  }

  function validate() {
    const errors = [];
    const warnings = [];
    const seenNumbers = new Map();
    const seenIds = new Map();

    if (levels.length !== 4) {
      errors.push("Expected 4 levels but found " + levels.length + " (check js/data/levels.js).");
    }
    if (rawProjects.length !== TOTAL) {
      errors.push("Expected " + TOTAL + " projects but found " + rawProjects.length + ". A project data file may be missing or broken.");
    }

    rawProjects.forEach(function (brief, index) {
      const label = "Project " + (brief && brief.number !== undefined ? brief.number : "at position " + index);
      if (!brief || typeof brief !== "object") {
        errors.push(label + " is not an object.");
        return;
      }
      if (!Number.isInteger(brief.number) || brief.number < 1 || brief.number > TOTAL) {
        errors.push(label + " has an invalid number.");
      }
      if (seenNumbers.has(brief.number)) {
        errors.push("Duplicate project number " + brief.number + ".");
      }
      seenNumbers.set(brief.number, true);
      if (seenIds.has(brief.id)) {
        errors.push("Duplicate project id \"" + brief.id + "\".");
      }
      seenIds.set(brief.id, true);

      BRIEF_TEXT_FIELDS.forEach(function (field) {
        if (!isFilledString(brief[field])) {
          errors.push(label + ": \"" + field + "\" is missing or empty.");
        }
      });
      BRIEF_LIST_FIELDS.forEach(function (field) {
        if (!isFilledList(brief[field])) {
          errors.push(label + ": \"" + field + "\" must be a non-empty list of text.");
        }
      });
      if (Array.isArray(brief.steps) && (brief.steps.length < 3 || brief.steps.length > 5)) {
        errors.push(label + ": needs 3–5 steps (has " + brief.steps.length + ").");
      }
      if (Array.isArray(brief.hints) && brief.hints.length < 2) {
        errors.push(label + ": needs at least 2 hints.");
      }
      if (!Number.isInteger(brief.complexity) || brief.complexity < 1 || brief.complexity > 3) {
        errors.push(label + ": \"complexity\" must be 1, 2 or 3.");
      }
      if (!(typeof brief.estimatedMinutes === "number" && brief.estimatedMinutes > 0)) {
        errors.push(label + ": \"estimatedMinutes\" must be a positive number.");
      }
      const level = levelForNumber(brief.number);
      if (level && brief.difficulty !== level.id) {
        errors.push(label + ": difficulty is \"" + brief.difficulty + "\" but its number belongs to \"" + level.id + "\".");
      }
      (brief.topics || []).forEach(function (id) {
        if (!topicById.has(id)) {
          errors.push(label + ": unknown topic \"" + id + "\".");
        }
      });

      const correction = corrections[brief.number];
      if (!correction) {
        errors.push(label + ": no correction found (check the corrections files).");
        return;
      }
      if (!isFilledList(correction.expectedHtml) || !isFilledList(correction.expectedCss)) {
        errors.push(label + ": correction needs \"expectedHtml\" and \"expectedCss\" lists.");
      }
      const checklist = buildChecklist(correction);
      if (checklist.length < 5 || checklist.length > 10) {
        errors.push(label + ": self-check needs 5–10 items (has " + checklist.length + ").");
      }
      CHECK_CATEGORIES.forEach(function (category) {
        if (!correction.checks || !isFilledList(correction.checks[category])) {
          errors.push(label + ": correction needs at least one " + category + " check.");
        }
      });
      const ids = new Set(checklist.map(function (item) { return item.id; }));
      if (ids.size !== checklist.length) {
        errors.push(label + ": two self-check items have the same text.");
      }
      const mistakes = correction.commonMistakes;
      if (!Array.isArray(mistakes) || mistakes.length < 3) {
        errors.push(label + ": needs at least 3 common mistakes.");
      } else {
        mistakes.forEach(function (item, i) {
          if (!item || !isFilledString(item.mistake) || !isFilledString(item.fix)) {
            errors.push(label + ": common mistake " + (i + 1) + " needs \"mistake\" and \"fix\" text.");
          }
        });
      }
    });

    for (let n = 1; n <= TOTAL; n += 1) {
      if (!seenNumbers.has(n)) {
        errors.push("Project " + n + " is missing.");
      }
    }

    levels.forEach(function (level) {
      const count = projects.filter(function (p) { return p.levelId === level.id; }).length;
      if (count !== 25) {
        errors.push("Level \"" + level.name + "\" should have 25 projects but has " + count + ".");
      }
    });

    Object.keys(corrections).forEach(function (key) {
      if (!seenNumbers.has(Number(key))) {
        warnings.push("Correction " + key + " has no matching project.");
      }
    });

    topics.forEach(function (topic) {
      const count = (projectsByTopic.get(topic.id) || []).length;
      if (count < 2) {
        warnings.push("Topic \"" + topic.name + "\" is used by only " + count + " project(s).");
      }
    });

    return { ok: errors.length === 0, errors: errors, warnings: warnings };
  }

  HCM.catalog = {
    TOTAL: TOTAL,
    CHECK_CATEGORIES: CHECK_CATEGORIES,
    all: function () {
      return projects.slice();
    },
    count: function () {
      return projects.length;
    },
    get: function (number) {
      return byNumber.get(Number(number)) || null;
    },
    levels: function () {
      return levels.slice();
    },
    level: function (id) {
      return levelById.get(id) || null;
    },
    levelForNumber: levelForNumber,
    byLevel: function (id) {
      return projects.filter(function (project) {
        return project.levelId === id;
      });
    },
    topics: function (category) {
      return category ? topics.filter(function (topic) { return topic.category === category; }) : topics.slice();
    },
    topic: function (id) {
      return topicById.get(id) || null;
    },
    byTopic: function (id) {
      return (projectsByTopic.get(id) || []).slice();
    },
    matches: matches,
    normaliseText: normaliseText,
    difficultyScore: difficultyScore,
    solutionFile: solutionFile,
    pad3: pad3,
    validate: validate
  };
})(window.HCM = window.HCM || {});
