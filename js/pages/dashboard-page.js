/*
 * dashboard-page.js — A. Home / Dashboard  (#/)
 * ---------------------------------------------
 * Totals, the overall progress bar, current level, Continue Learning, the
 * daily practice checklist, recently completed projects and level progress.
 * Every section is rebuilt from progress.js data, so it updates by itself
 * when a project is completed (here or in another tab).
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const progress = HCM.progress;
  const catalog = HCM.catalog;
  const site = HCM.data.site || {};

  /** A different motivational line each calendar day. */
  function motivationForToday() {
    const lines = site.motivation || [];
    if (!lines.length) return "";
    const now = new Date();
    const dayNumber = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
    return lines[Math.abs(dayNumber) % lines.length];
  }

  function statsSection() {
    const stats = progress.stats();
    return el(
      "section",
      { class: "dashboard-stats", "aria-labelledby": "stats-heading" },
      el("h2", { id: "stats-heading", class: "visually-hidden" }, "Your numbers"),
      el(
        "dl",
        { class: "stat-grid" },
        el("div", { class: "stat" }, el("dt", null, "Total projects"), el("dd", null, String(stats.total))),
        el("div", { class: "stat" }, el("dt", null, "Completed"), el("dd", null, String(stats.completed))),
        el("div", { class: "stat" }, el("dt", null, "Remaining"), el("dd", null, String(stats.remaining))),
        el("div", { class: "stat" }, el("dt", null, "Overall progress"), el("dd", null, stats.percent + "%"))
      ),
      el(
        "div",
        { class: "card", style: { "margin-top": "1rem" } },
        ui.meter({ value: stats.percent, label: "Overall progress", valueText: stats.completed + " of " + stats.total + " projects · " + stats.percent + "%", size: "lg" })
      )
    );
  }

  function continueSection() {
    const next = progress.nextProject();
    const level = progress.currentLevel();
    const stats = progress.stats();

    if (!next && stats.completed < stats.total) {
      return el(
        "section",
        { class: "card", "aria-labelledby": "continue-heading" },
        el("h2", { id: "continue-heading" }, "Project data didn't load"),
        el("p", null, "The project files couldn't be read, so there's nothing to continue yet. Check the notice at the top of the page.")
      );
    }

    if (!next) {
      return el(
        "section",
        { class: "card card--accent congrats", "aria-labelledby": "continue-heading" },
        ui.icon("trophy"),
        el("h2", { id: "continue-heading" }, "Congratulations — all 100 projects are complete!"),
        el("p", null, "You've built every project from your first profile card to the final master project. Revisit any brief to rebuild it faster, or export your progress as a keepsake."),
        el("div", { class: "button-row", style: { "justify-content": "center" } }, el("a", { class: "button button--primary", href: "#/progress" }, "See your progress history"))
      );
    }

    const levelStats = progress.levelStats(level.id);
    return el(
      "section",
      { class: "card card--accent", "aria-labelledby": "continue-heading" },
      el("div", { class: "section__head" }, el("h2", { id: "continue-heading" }, "Continue learning"), ui.levelBadge(level)),
      el(
        "p",
        { class: "muted" },
        "Current level: ",
        el("strong", null, level.name),
        " — " + levelStats.completed + " of " + levelStats.total + " projects done (" + levelStats.percent + "%)."
      ),
      el(
        "div",
        { class: "next-project" },
        el("p", { class: "eyebrow" }, "Next recommended project · #" + next.paddedNumber),
        el("h3", null, el("a", { href: "#/project/" + next.number }, next.title)),
        el("p", null, ui.richText(next.objective)),
        el("div", { class: "meta-row" }, el("span", { class: "meta" }, ui.icon("clock", "icon--sm"), ui.formatMinutes(next.estimatedMinutes)), ui.complexity(next.complexity), ui.statusBadge(next.number))
      ),
      el(
        "div",
        { class: "button-row" },
        el("a", { class: "button button--primary", href: "#/project/" + next.number }, ui.icon("arrow-right"), stats.completed === 0 ? "Start with project " + next.number : "Continue learning"),
        el("a", { class: "button button--secondary", href: "#/projects" }, "Browse all projects")
      )
    );
  }

  function checklistSection() {
    const items = progress.checklist();
    const done = items.filter(function (item) { return item.done; }).length;
    return el(
      "section",
      { class: "card", "aria-labelledby": "daily-heading", id: "daily-practice" },
      el(
        "div",
        { class: "section__head" },
        el("h2", { id: "daily-heading" }, "Today's practice"),
        el("p", { class: "section__note", id: "daily-count" }, done + " of " + items.length + " done")
      ),
      el(
        "fieldset",
        { class: "fieldset mb-0" },
        el("legend", { class: "visually-hidden" }, "Daily practice checklist"),
        el(
          "ul",
          { class: "check-list check-list--daily" },
          items.map(function (item) {
            const input = el("input", { type: "checkbox", id: "task-" + item.id, "data-focus-key": "task-" + item.id, checked: item.done });
            input.addEventListener("change", function () {
              progress.toggleTask(item.id, input.checked);
            });
            return el("li", null, el("label", { class: "check-item", for: "task-" + item.id }, input, el("span", { class: "check-item__text" }, item.label)));
          })
        )
      ),
      el("p", { class: "small muted", style: { "margin-top": "0.75rem", "margin-bottom": "0" } }, "The checklist starts fresh each day. Your project progress is never affected.")
    );
  }

  function recentSection() {
    const recent = progress.completionHistory(5);
    return el(
      "section",
      { class: "card", "aria-labelledby": "recent-heading" },
      el("div", { class: "section__head" }, el("h2", { id: "recent-heading" }, "Recently completed"), recent.length ? el("a", { class: "small", href: "#/progress" }, "Full history") : null),
      recent.length
        ? el(
            "ul",
            { class: "recent-list" },
            recent.map(function (entry) {
              return el(
                "li",
                { class: "recent-item" },
                ui.icon("done"),
                el("a", { href: "#/project/" + entry.number }, "#" + entry.project.paddedNumber + " " + entry.project.title),
                el("time", { datetime: entry.at || null }, ui.formatDate(entry.at))
              );
            })
          )
        : el("p", { class: "muted mb-0" }, "Nothing completed yet. When you mark a project as completed, it appears here.")
    );
  }

  function levelsSection() {
    return el(
      "section",
      { class: "card", "aria-labelledby": "levels-heading" },
      el("div", { class: "section__head" }, el("h2", { id: "levels-heading" }, "Progress by level"), el("a", { class: "small", href: "#/path" }, "Learning path")),
      el(
        "ul",
        { class: "level-list" },
        catalog.levels().map(function (level) {
          const stats = progress.levelStats(level.id);
          return el(
            "li",
            null,
            ui.meter({
              value: stats.percent,
              label: level.name + " (" + level.range[0] + "–" + level.range[1] + ")",
              valueText: stats.completed + "/" + stats.total + " · " + stats.percent + "%",
              tone: level.id
            })
          );
        })
      )
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.dashboard = {
    nav: "dashboard",
    title: "Dashboard",
    render: function (main, route, ctx) {
      const parts = {
        stats: statsSection(),
        cont: continueSection(),
        recent: recentSection(),
        checklist: checklistSection(),
        levels: levelsSection()
      };

      main.appendChild(
        el(
          "div",
          { class: "hero" },
          el(
            "div",
            null,
            el("p", { class: "eyebrow" }, "Dashboard"),
            el("h1", null, "HTML & CSS Mastery"),
            el("p", { class: "lead" }, "100 hands-on projects to build yourself in VS Code — from a single profile card to complete professional websites."),
            el("p", { class: "hero__quote", style: { "margin-top": "1rem" } }, motivationForToday())
          )
        )
      );
      main.appendChild(parts.stats);
      main.appendChild(
        el(
          "div",
          { class: "dashboard-grid" },
          el("div", { class: "dashboard-col" }, parts.cont, parts.recent),
          el("div", { class: "dashboard-col" }, parts.checklist, parts.levels)
        )
      );

      function rebuild(name, builder) {
        parts[name] = ui.swap(parts[name], builder());
      }

      ctx.subscribe(function (event) {
        if (event.type === "checklist" || event.type === "newday") {
          rebuild("checklist", checklistSection);
          return;
        }
        if (event.type === "selfcheck") {
          rebuild("cont", continueSection);
          return;
        }
        rebuild("stats", statsSection);
        rebuild("cont", continueSection);
        rebuild("recent", recentSection);
        rebuild("checklist", checklistSection);
        rebuild("levels", levelsSection);
      });
    }
  };
})(window.HCM = window.HCM || {});
