/*
 * path-page.js — C. Learning Path / Levels  (#/path)
 * --------------------------------------------------
 * The four levels in order, each with its description, learning objectives,
 * key HTML and CSS skills, completion and project list. The recommended order
 * is shown clearly, but every project stays open — nothing is locked.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;

  function levelStatus(stats) {
    if (stats.completed === 0) return el("span", { class: "badge" }, "Not started");
    if (stats.completed === stats.total) return el("span", { class: "badge badge--success" }, ui.icon("check"), "Complete");
    return el("span", { class: "badge badge--progress" }, "In progress");
  }

  function list(title, items) {
    return el("div", null, el("h3", null, title), el("ul", { class: "tidy-list" }, items.map(function (item) { return el("li", null, ui.richText(item)); })));
  }

  function levelPanel(level, index, currentId) {
    const stats = progress.levelStats(level.id);
    const isCurrent = level.id === currentId;
    const projects = catalog.byLevel(level.id);
    return el(
      "li",
      null,
      el(
        "section",
        { class: "level-panel level-panel--" + level.id, "aria-labelledby": "level-" + level.id, id: "level-" + level.id + "-panel" },
        el(
          "div",
          { class: "level-panel__head" },
          el("span", { class: "level-panel__step", "aria-hidden": "true" }, String(index + 1)),
          el(
            "div",
            { class: "level-panel__title" },
            el("p", { class: "eyebrow mb-0" }, "Level " + (index + 1) + " of 4 · Projects " + level.range[0] + "–" + level.range[1] + " · " + projects.length + " projects"),
            el("h2", { id: "level-" + level.id }, level.name),
            el("p", null, level.description)
          ),
          el("div", { class: "meta-row" }, levelStatus(stats), isCurrent ? el("span", { class: "badge badge--" + level.id }, "You are here") : null)
        ),
        ui.meter({ value: stats.percent, label: level.name + " completion", valueText: stats.completed + " of " + stats.total + " projects · " + stats.percent + "%", tone: level.id }),
        el("div", { class: "level-columns" }, list("Learning objectives", level.objectives), list("Key HTML skills", level.htmlSkills), list("Key CSS skills", level.cssSkills)),
        el(
          "details",
          { class: "disclosure", style: { "margin-top": "1.5rem" }, open: isCurrent },
          el("summary", null, "Show the " + projects.length + " projects in this level"),
          el(
            "div",
            { class: "disclosure__body" },
            el(
              "ol",
              { class: "project-list project-list--columns", start: level.range[0] },
              projects.map(function (project) {
                return el(
                  "li",
                  null,
                  el(
                    "a",
                    { class: "project-row", href: "#/project/" + project.number },
                    ui.statusIcon(project.number),
                    el("span", { class: "project-row__number" }, "#" + project.paddedNumber),
                    el("span", { class: "project-row__title" }, project.title),
                    el("span", { class: "project-row__meta" }, ui.formatMinutes(project.estimatedMinutes))
                  )
                );
              })
            ),
            el("p", { class: "small mb-0" }, el("a", { href: "#/projects?level=" + level.id }, "Open these " + projects.length + " projects in the library"))
          )
        )
      )
    );
  }

  function build() {
    const current = progress.currentLevel();
    return el(
      "ol",
      { class: "level-steps", "aria-label": "Levels in recommended order" },
      catalog.levels().map(function (level, index) {
        return levelPanel(level, index, current ? current.id : null);
      })
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.path = {
    nav: "path",
    title: "Learning Path",
    render: function (main, route, ctx) {
      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Learning Path" }],
          eyebrow: "Learning path",
          title: "Learning Path",
          lead: "Four levels of 25 projects. Each level builds on the one before, so going in order is the smoothest climb — but every project is open whenever you want it."
        })
      );
      main.appendChild(
        el(
          "div",
          { style: { "margin-bottom": "1.5rem" } },
          ui.callout("info", "info", "Nothing is locked", el("p", null, "Jump ahead to any project that interests you. The \"You are here\" level simply marks where your first unfinished project is."))
        )
      );
      let steps = build();
      main.appendChild(steps);
      main.appendChild(ui.backLinks());
      ctx.subscribe(function (event) {
        if (event.type === "completion" || event.type === "reset" || event.type === "import" || event.type === "external" || event.type === "selfcheck") {
          steps = ui.swap(steps, build());
        }
      });
    }
  };
})(window.HCM = window.HCM || {});
