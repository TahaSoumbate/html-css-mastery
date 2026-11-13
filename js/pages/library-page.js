/*
 * library-page.js — B. Project Library  (#/projects)
 * --------------------------------------------------
 * All 100 projects with search, filters (difficulty, HTML topic, CSS topic,
 * status) and sorting. Every control works together with the others, and
 * the current choices are remembered in preferences.js.
 *
 * Links such as #/projects?topic=css-grid or ?level=advanced (used by the
 * Topic Index and Learning Path) start the library with that filter applied.
 *
 * Cards are built once; filtering only reorders and hides them, so typing in
 * the search box stays fast and never loses focus.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;
  const prefs = HCM.prefs;

  const SORT_LABELS = {
    "number-asc": "Number: 1 → 100",
    "number-desc": "Number: 100 → 1",
    "difficulty-asc": "Difficulty: easiest first",
    "difficulty-desc": "Difficulty: hardest first"
  };

  /** Keeps saved filter values only if they still exist in the data. */
  function cleanState(state) {
    const clean = Object.assign(prefs.defaultLibrary(), state);
    if (clean.level !== "all" && !catalog.level(clean.level)) clean.level = "all";
    const html = catalog.topic(clean.htmlTopic);
    if (clean.htmlTopic !== "all" && (!html || html.category !== "html")) clean.htmlTopic = "all";
    const css = catalog.topic(clean.cssTopic);
    if (clean.cssTopic !== "all" && (!css || css.category !== "css")) clean.cssTopic = "all";
    return clean;
  }

  /** A filter link (?topic=…, ?level=…, ?status=…, ?q=…) replaces the saved filters. */
  function stateFromQuery(query) {
    const keys = Object.keys(query || {});
    if (!keys.length) {
      return null;
    }
    const state = prefs.defaultLibrary();
    const topic = catalog.topic(query.topic);
    if (topic) {
      state[topic.category === "html" ? "htmlTopic" : "cssTopic"] = topic.id;
    }
    if (catalog.level(query.level)) {
      state.level = query.level;
    }
    if (query.status === "completed" || query.status === "not-completed") {
      state.status = query.status;
    }
    if (typeof query.q === "string") {
      state.q = query.q.slice(0, 120);
    }
    return state;
  }

  function isDefault(state) {
    const d = prefs.defaultLibrary();
    return state.q === d.q && state.level === d.level && state.htmlTopic === d.htmlTopic && state.cssTopic === d.cssTopic && state.status === d.status && state.sort === d.sort;
  }

  function select(id, label, options, value) {
    const control = el(
      "select",
      { class: "select", id: id },
      options.map(function (option) {
        return el("option", { value: option.value, selected: option.value === value }, option.label);
      })
    );
    return { field: el("div", { class: "field" }, el("label", { for: id }, label), control), control: control };
  }

  function topicOptions(category, allLabel) {
    return [{ value: "all", label: allLabel }].concat(
      catalog.topics(category).map(function (topic) {
        return { value: topic.id, label: topic.name + " (" + catalog.byTopic(topic.id).length + ")" };
      })
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.library = {
    nav: "library",
    title: "Project Library",
    render: function (main, route, ctx) {
      const fromLink = stateFromQuery(route.query);
      let state = cleanState(fromLink || prefs.library());
      if (fromLink) {
        prefs.setLibrary(state);
      }

      /* ----- Controls ----- */
      const search = el("input", {
        class: "input",
        id: "library-search",
        type: "search",
        value: state.q,
        placeholder: "Title, skill, topic or number (e.g. 42)",
        autocomplete: "off"
      });
      const searchField = el(
        "div",
        { class: "field" },
        el("label", { for: "library-search" }, "Search projects"),
        el("div", { class: "input-icon" }, ui.icon("search"), search)
      );
      const level = select(
        "filter-level",
        "Difficulty",
        [{ value: "all", label: "All levels" }].concat(
          catalog.levels().map(function (lvl) {
            return { value: lvl.id, label: lvl.name + " (" + lvl.range[0] + "–" + lvl.range[1] + ")" };
          })
        ),
        state.level
      );
      const htmlTopic = select("filter-html", "HTML topic", topicOptions("html", "All HTML topics"), state.htmlTopic);
      const cssTopic = select("filter-css", "CSS topic", topicOptions("css", "All CSS topics"), state.cssTopic);
      const status = select(
        "filter-status",
        "Status",
        [
          { value: "all", label: "All projects" },
          { value: "not-completed", label: "Not completed" },
          { value: "completed", label: "Completed" }
        ],
        state.status
      );
      const sort = select(
        "filter-sort",
        "Sort by",
        Object.keys(SORT_LABELS).map(function (value) {
          return { value: value, label: SORT_LABELS[value] };
        }),
        state.sort
      );
      const clearButton = el("button", { type: "button", class: "button button--secondary" }, ui.icon("reset"), "Clear filters");

      const form = el(
        "form",
        { class: "filters", role: "search", "aria-label": "Filter projects" },
        searchField,
        el("div", { class: "filters__row" }, level.field, htmlTopic.field, cssTopic.field, status.field, sort.field)
      );
      form.addEventListener("submit", function (event) {
        event.preventDefault();
      });

      const count = el("p", { class: "results-count", "aria-live": "polite", id: "results-count" });
      const grid = el("ul", { class: "card-grid", "aria-label": "Projects" });
      const empty = ui.emptyState(
        "No projects match",
        "Try a different word, or clear the filters to see all 100 projects.",
        el("button", { type: "button", class: "button button--primary", onClick: function () { clearAll(); } }, "Clear filters")
      );
      empty.hidden = true;

      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Project Library" }],
          eyebrow: "Library",
          title: "Project Library",
          lead: "All 100 projects. Search by name, skill, topic or number, and combine the filters to find your next build."
        })
      );
      main.appendChild(form);
      main.appendChild(el("div", { class: "results-bar" }, count, clearButton));
      main.appendChild(grid);
      main.appendChild(empty);
      main.appendChild(ui.backLinks());

      /* ----- Cards (built once) ----- */
      const items = new Map();
      catalog.all().forEach(function (project) {
        items.set(project.number, el("li", null, ui.projectCard(project, { headingLevel: 2 })));
      });

      function readControls() {
        return cleanState({
          q: search.value,
          level: level.control.value,
          htmlTopic: htmlTopic.control.value,
          cssTopic: cssTopic.control.value,
          status: status.control.value,
          sort: sort.control.value
        });
      }

      function passes(project) {
        if (state.level !== "all" && project.levelId !== state.level) return false;
        if (state.htmlTopic !== "all" && project.topics.indexOf(state.htmlTopic) === -1) return false;
        if (state.cssTopic !== "all" && project.topics.indexOf(state.cssTopic) === -1) return false;
        if (state.status === "completed" && !progress.isComplete(project.number)) return false;
        if (state.status === "not-completed" && progress.isComplete(project.number)) return false;
        return catalog.matches(project, state.q);
      }

      function sorter(a, b) {
        switch (state.sort) {
          case "number-desc":
            return b.number - a.number;
          case "difficulty-asc":
            return catalog.difficultyScore(a) - catalog.difficultyScore(b) || a.number - b.number;
          case "difficulty-desc":
            return catalog.difficultyScore(b) - catalog.difficultyScore(a) || a.number - b.number;
          default:
            return a.number - b.number;
        }
      }

      function apply() {
        state = readControls();
        prefs.setLibrary(state);
        const visible = catalog.all().filter(passes).sort(sorter);
        grid.replaceChildren.apply(
          grid,
          visible.map(function (project) {
            return items.get(project.number);
          })
        );
        const total = catalog.count();
        count.textContent = visible.length === total ? "Showing all " + total + " projects" : "Showing " + visible.length + " of " + total + " projects";
        empty.hidden = visible.length > 0;
        grid.hidden = visible.length === 0;
        clearButton.disabled = isDefault(state);
      }

      function clearAll() {
        const d = prefs.defaultLibrary();
        search.value = d.q;
        level.control.value = d.level;
        htmlTopic.control.value = d.htmlTopic;
        cssTopic.control.value = d.cssTopic;
        status.control.value = d.status;
        sort.control.value = d.sort;
        apply();
        search.focus();
      }

      search.addEventListener("input", apply);
      [level, htmlTopic, cssTopic, status, sort].forEach(function (item) {
        item.control.addEventListener("change", apply);
      });
      clearButton.addEventListener("click", clearAll);

      // Completion changed (here or in another tab): refresh card badges, then re-filter.
      ctx.subscribe(function () {
        catalog.all().forEach(function (project) {
          ui.updateProjectCard(items.get(project.number).firstChild, project);
        });
        apply();
      });

      apply();
    }
  };
})(window.HCM = window.HCM || {});
