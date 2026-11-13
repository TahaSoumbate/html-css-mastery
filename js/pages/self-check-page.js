/*
 * self-check-page.js — F. Corrections / Self-Check
 * ------------------------------------------------
 *   #/self-check          an index of all 100 self-checks with their progress
 *   #/project/12/check    the correction for one project:
 *                         expected HTML and CSS, the tickable checklist
 *                         (functional, responsive, accessibility), common
 *                         mistakes, the model solution (closed by default and
 *                         only loaded when opened) and the completion button.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;
  const CATEGORY_TITLES = { functional: "Functional checks", responsive: "Responsive checks", accessibility: "Accessibility checks" };
  const CATEGORY_ICONS = { functional: "check", responsive: "grid", accessibility: "eye" };

  /* ---------- Index: #/self-check ---------- */

  function checkRow(project) {
    const check = progress.tickStats(project.number);
    const done = progress.isComplete(project.number);
    return el(
      "li",
      { "data-number": project.number },
      el(
        "a",
        { class: "check-row", href: "#/project/" + project.number + "/check" },
        ui.statusIcon(project.number),
        el("span", null, el("span", { class: "project-row__number" }, "#" + project.paddedNumber), " ", project.title),
        el(
          "span",
          { class: "check-row__meta" },
          el("span", null, check.ticked + "/" + check.total + " checks ticked"),
          done ? el("span", { class: "badge badge--success" }, "Completed") : null
        )
      )
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.selfCheckIndex = {
    nav: "self-check",
    title: "Self-Check",
    render: function (main, route, ctx) {
      const levelSelect = el(
        "select",
        { class: "select", id: "check-level" },
        el("option", { value: "all" }, "All levels"),
        catalog.levels().map(function (level) { return el("option", { value: level.id }, level.name); })
      );
      const statusSelect = el(
        "select",
        { class: "select", id: "check-status" },
        el("option", { value: "all" }, "All projects"),
        el("option", { value: "started" }, "Self-check started, not completed"),
        el("option", { value: "not-completed" }, "Not completed"),
        el("option", { value: "completed", }, "Completed")
      );
      const count = el("p", { class: "results-count", "aria-live": "polite" });

      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Self-Check" }],
          eyebrow: "Corrections",
          title: "Self-Check",
          lead: "One correction for every project: what a good solution contains, a checklist to test your work, common mistakes and a model solution. Build first in VS Code — then check here."
        })
      );
      main.appendChild(
        el(
          "form",
          { class: "filters", "aria-label": "Filter self-checks", onSubmit: function (event) { event.preventDefault(); } },
          el(
            "div",
            { class: "filters__row" },
            el("div", { class: "field" }, el("label", { for: "check-level" }, "Level"), levelSelect),
            el("div", { class: "field" }, el("label", { for: "check-status" }, "Status"), statusSelect)
          )
        )
      );
      main.appendChild(el("div", { class: "results-bar" }, count));

      let groupsNode = el("div");
      main.appendChild(groupsNode);
      main.appendChild(ui.backLinks());

      function build() {
        let shown = 0;
        const node = el(
          "div",
          null,
          catalog.levels().map(function (level) {
            if (levelSelect.value !== "all" && levelSelect.value !== level.id) return null;
            const rows = catalog.byLevel(level.id).filter(function (project) {
              const done = progress.isComplete(project.number);
              switch (statusSelect.value) {
                case "completed": return done;
                case "not-completed": return !done;
                case "started": return !done && progress.tickStats(project.number).started;
                default: return true;
              }
            });
            shown += rows.length;
            if (!rows.length) return null;
            return el(
              "section",
              { class: "section card", "aria-labelledby": "checks-" + level.id },
              el("div", { class: "section__head" }, el("h2", { id: "checks-" + level.id }, level.name), el("p", { class: "section__note" }, "Projects " + level.range[0] + "–" + level.range[1])),
              el("ul", { class: "project-list" }, rows.map(checkRow))
            );
          })
        );
        count.textContent = "Showing " + shown + " of " + catalog.count() + " self-checks";
        if (!shown) {
          node.appendChild(ui.emptyState("Nothing here yet", "No projects match this filter."));
        }
        return node;
      }

      function refresh() {
        groupsNode = ui.swap(groupsNode, build());
      }

      levelSelect.addEventListener("change", refresh);
      statusSelect.addEventListener("change", refresh);
      ctx.subscribe(refresh);
      refresh();
    }
  };

  /* ---------- One project: #/project/12/check ---------- */

  function checklistCard(project) {
    const items = project.selfCheck;
    const countText = el("span", { id: "check-count" });
    const meterSlot = el("div");

    function update() {
      const stats = progress.tickStats(project.number);
      countText.textContent = stats.ticked + " of " + stats.total + " checked";
      meterSlot.replaceChildren(ui.meter({ value: stats.total ? Math.round((stats.ticked / stats.total) * 100) : 0, label: "Checklist progress", valueText: stats.ticked + " of " + stats.total, showHead: false, size: "sm" }));
    }

    const clearButton = el("button", { type: "button", class: "button button--ghost button--small" }, ui.icon("reset", "icon--sm"), "Clear my ticks");
    const boxes = [];

    const groups = catalog.CHECK_CATEGORIES.map(function (category) {
      const groupItems = items.filter(function (item) { return item.category === category; });
      if (!groupItems.length) return null;
      return el(
        "fieldset",
        { class: "fieldset check-group" },
        el("legend", null, ui.icon(CATEGORY_ICONS[category]), CATEGORY_TITLES[category]),
        el(
          "ul",
          { class: "check-list" },
          groupItems.map(function (item) {
            const id = "check-" + item.id;
            const input = el("input", { type: "checkbox", id: id, checked: progress.isTicked(project.number, item.id) });
            input.addEventListener("change", function () {
              progress.setTick(project.number, item.id, input.checked);
            });
            boxes.push({ input: input, id: item.id });
            return el("li", null, el("label", { class: "check-item", for: id }, input, el("span", { class: "check-item__text" }, ui.richText(item.text))));
          })
        )
      );
    });

    clearButton.addEventListener("click", function () {
      boxes.forEach(function (box) {
        if (box.input.checked) {
          box.input.checked = false;
          progress.setTick(project.number, box.id, false);
        }
      });
      ui.toast("Ticks cleared for project " + project.number + ".", "info");
    });

    const card = el(
      "section",
      { class: "card", "aria-labelledby": "checklist-title" },
      el("div", { class: "section__head" }, el("h2", { id: "checklist-title" }, "Self-check checklist"), el("p", { class: "section__note", "aria-live": "polite" }, countText)),
      meterSlot,
      el("p", { class: "small muted", style: { "margin-top": "0.75rem" } }, "Open your project in the browser and do each check. Tick it when your project passes. Ticks are saved automatically."),
      groups,
      el("div", { class: "button-row", style: { "margin-top": "1rem" } }, clearButton)
    );

    update();
    return {
      node: card,
      update: function () {
        boxes.forEach(function (box) {
          box.input.checked = progress.isTicked(project.number, box.id);
        });
        update();
      }
    };
  }

  function completionBox(project) {
    const done = progress.isComplete(project.number);
    const next = catalog.get(project.number + 1);
    return el(
      "section",
      { class: "completion-box", "data-complete": String(done), "aria-labelledby": "completion-title" },
      el("h2", { id: "completion-title" }, ui.icon(done ? "trophy" : "done"), done ? "Project completed" : "Completion"),
      ui.completionControl(project),
      next ? el("p", { class: "small", style: { "margin-top": "1rem", "margin-bottom": "0" } }, "Next up: ", el("a", { href: "#/project/" + next.number }, "#" + next.paddedNumber + " " + next.title)) : el("p", { class: "small mb-0", style: { "margin-top": "1rem" } }, "This is the final project. Well done for getting here.")
    );
  }

  HCM.pages.selfCheckProject = {
    nav: "self-check",
    title: function (route) {
      const project = catalog.get(route.params.number);
      return project ? "Self-check: " + project.title : "Self-check not found";
    },
    render: function (main, route, ctx) {
      const project = catalog.get(route.params.number);
      if (!project) {
        main.appendChild(ui.pageHeader({ title: "Self-check not found", lead: "There is no project number " + route.params.number + "." }));
        main.appendChild(el("a", { class: "button button--primary", href: "#/self-check" }, "See all self-checks"));
        return;
      }
      const correction = project.correction || { expectedHtml: [], expectedCss: [] };

      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Self-Check", href: "#/self-check" }, { label: "Project " + project.number }],
          eyebrow: "Self-check · Project " + project.paddedNumber + " · " + project.levelName,
          title: "Self-check: " + project.title,
          lead: "Compare your finished project with what a good solution contains, then test it with the checklist."
        })
      );

      main.appendChild(
        ui.callout(
          "warning",
          "warning",
          "Build it before you check it",
          el(
            "p",
            null,
            "Open VS Code and build this project on your own first. This page describes the expected structure and includes a model solution, which give the answers away. ",
            el("a", { href: "#/project/" + project.number }, "Read the project brief")
          )
        )
      );

      const checklist = checklistCard(project);
      let completion = completionBox(project);

      const solutionBody = el("div", { class: "disclosure__body stack" });
      const solution = el(
        "details",
        { class: "solution-panel disclosure", id: "model-solution" },
        el("summary", null, ui.icon("code"), "Show the model solution (spoilers)"),
        solutionBody
      );
      let solutionLoaded = false;
      solution.addEventListener("toggle", function () {
        if (solution.open && !solutionLoaded) {
          solutionLoaded = true;
          HCM.solutions.render(project.number, solutionBody);
        }
      });

      main.appendChild(
        el(
          "div",
          { class: "stack", style: { "margin-top": "2rem" } },
          el(
            "section",
            { "aria-labelledby": "expected-title" },
            el("h2", { id: "expected-title" }, "What a correct solution contains"),
            el(
              "div",
              { class: "two-col" },
              el("div", { class: "card" }, el("h3", { class: "card__title" }, "Expected HTML"), el("ul", { class: "tidy-list" }, correction.expectedHtml.map(function (item) { return el("li", null, ui.richText(item)); }))),
              el("div", { class: "card" }, el("h3", { class: "card__title" }, "Expected CSS"), el("ul", { class: "tidy-list" }, correction.expectedCss.map(function (item) { return el("li", null, ui.richText(item)); })))
            )
          ),
          checklist.node,
          el(
            "section",
            { "aria-labelledby": "mistakes-title" },
            el("h2", { id: "mistakes-title" }, "Common mistakes"),
            el(
              "ul",
              { class: "mistake-list" },
              project.commonMistakes.map(function (item) {
                return el(
                  "li",
                  { class: "mistake" },
                  el("p", null, el("span", { class: "mistake__label" }, "Mistake: "), ui.richText(item.mistake)),
                  el("p", null, el("span", { class: "mistake__label" }, "Fix: "), ui.richText(item.fix))
                );
              })
            )
          ),
          el("section", { "aria-labelledby": "solution-title" }, el("h2", { id: "solution-title" }, "Model solution"), el("p", { class: "small muted" }, "Hidden until you open it. Look only after you've finished and checked your own version."), solution),
          completion
        )
      );

      main.appendChild(
        el(
          "nav",
          { class: "pager", "aria-label": "Brief and next self-check" },
          el("a", { class: "pager__link", href: "#/project/" + project.number }, el("small", null, "← Back to the brief"), "#" + project.paddedNumber + " " + project.title),
          catalog.get(project.number + 1)
            ? el("a", { class: "pager__link pager__link--next", href: "#/project/" + (project.number + 1) + "/check" }, el("small", null, "Next self-check →"), "#" + catalog.get(project.number + 1).paddedNumber + " " + catalog.get(project.number + 1).title)
            : null
        )
      );
      main.appendChild(ui.backLinks(el("a", { href: "#/self-check" }, "← Back to all self-checks")));

      ctx.subscribe(function (event) {
        if (event.number !== undefined && event.number !== project.number) {
          return;
        }
        checklist.update();
        completion = ui.swap(completion, completionBox(project));
      });
    }
  };
})(window.HCM = window.HCM || {});
