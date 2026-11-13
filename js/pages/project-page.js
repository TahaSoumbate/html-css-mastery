/*
 * project-page.js — one project brief  (#/project/12)
 * ---------------------------------------------------
 * Everything needed to build the project in VS Code: objective, suggested
 * folder, skills and topics, step-by-step instructions, required HTML and CSS,
 * measurable requirements and hints (each hidden until you open it).
 * The self-check, mistakes and model solution live on the self-check page,
 * so the answers stay out of sight while you build.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;

  function richList(items, className) {
    return el("ul", { class: className || "tidy-list" }, items.map(function (item) { return el("li", null, ui.richText(item)); }));
  }

  function section(id, title, body) {
    return el("section", { "aria-labelledby": id }, el("h2", { id: id }, title), body);
  }

  function progressCard(project) {
    const check = progress.tickStats(project.number);
    return el(
      "section",
      { class: "card", "aria-labelledby": "progress-title" },
      el("h2", { class: "card__title", id: "progress-title" }, "Your progress"),
      el("p", { class: "mb-0" }, ui.statusBadge(project.number)),
      check.total
        ? ui.meter({ value: Math.round((check.ticked / check.total) * 100), label: "Self-check", valueText: check.ticked + " of " + check.total + " ticked", size: "sm" })
        : null,
      ui.completionControl(project),
      el("p", { class: "mb-0" }, el("a", { class: "button button--ghost", href: "#/project/" + project.number + "/check" }, ui.icon("checklist"), "Open the self-check"))
    );
  }

  function workflowCard() {
    return el(
      "section",
      { class: "card", "aria-labelledby": "workflow-title" },
      el("h2", { class: "card__title", id: "workflow-title" }, "How to work on it"),
      el(
        "ol",
        { class: "small mb-0" },
        el("li", null, "Create the project folder on your computer."),
        el("li", null, "Open it in VS Code and build the HTML, then the CSS."),
        el("li", null, "Open your index.html in a browser and test at 360px and 1280px."),
        el("li", null, "Come back here and complete the self-check."),
        el("li", null, "Mark the project as completed.")
      )
    );
  }

  function pager(project) {
    const prev = catalog.get(project.number - 1);
    const next = catalog.get(project.number + 1);
    return el(
      "nav",
      { class: "pager", "aria-label": "Previous and next project" },
      prev ? el("a", { class: "pager__link", href: "#/project/" + prev.number }, el("small", null, "← Previous project"), "#" + prev.paddedNumber + " " + prev.title) : null,
      next ? el("a", { class: "pager__link pager__link--next", href: "#/project/" + next.number }, el("small", null, "Next project →"), "#" + next.paddedNumber + " " + next.title) : null
    );
  }

  function notFound(main, number) {
    main.appendChild(ui.pageHeader({ title: "Project not found", lead: "There is no project number " + number + ". Projects are numbered 1 to 100." }));
    main.appendChild(el("a", { class: "button button--primary", href: "#/projects" }, "Open the project library"));
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.project = {
    nav: "library",
    title: function (route) {
      const project = catalog.get(route.params.number);
      return project ? "Project " + project.number + ": " + project.title : "Project not found";
    },
    render: function (main, route, ctx) {
      const project = catalog.get(route.params.number);
      if (!project) {
        notFound(main, route.params.number);
        return;
      }

      const folder = project.folderName;
      const statusSlot = el("span", null, ui.statusBadge(project.number));

      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Project Library", href: "#/projects" }, { label: "Project " + project.number }],
          eyebrow: "Project " + project.paddedNumber + " · " + project.levelName,
          title: project.title,
          lead: ui.richText(project.shortDescription),
          after: el(
            "div",
            { class: "meta-row", style: { "margin-top": "1rem" } },
            ui.levelBadge(project.level),
            ui.complexity(project.complexity),
            el("span", { class: "meta" }, ui.icon("clock", "icon--sm"), "About " + ui.formatMinutes(project.estimatedMinutes)),
            statusSlot
          )
        })
      );

      const mainCol = el(
        "div",
        { class: "brief-main" },
        el("section", { "aria-label": "Objective" }, ui.callout(null, "target", "Objective", el("p", null, ui.richText(project.objective)))),
        section(
          "setup-title",
          "Set up your files",
          el(
            "div",
            { class: "stack" },
            el(
              "div",
              { class: "folder-name" },
              ui.icon("folder"),
              el("code", null, folder + "/"),
              ui.copyButton(function () { return folder; }, "Copy folder name")
            ),
            el("p", { class: "small mb-0" }, "Create this folder anywhere you keep your practice work, then add ", el("code", null, "index.html"), " and ", el("code", null, "styles.css"), " inside it (multi-page projects need more HTML files).")
          )
        ),
        section(
          "skills-title",
          "Skills and topics",
          el(
            "div",
            { class: "two-col" },
            el("div", null, el("h3", null, "Skills covered"), richList(project.skills, "tidy-list tidy-list--checks")),
            el(
              "div",
              null,
              el("h3", null, "Topics"),
              el(
                "ul",
                { class: "chip-list" },
                project.topicObjects.map(function (topic) {
                  return el("li", null, el("a", { class: "chip", href: "#/projects?topic=" + topic.id, title: "More projects about " + topic.name }, topic.name));
                })
              )
            )
          )
        ),
        section(
          "steps-title",
          "Step-by-step instructions",
          el("ol", { class: "steps-list" }, project.steps.map(function (step) { return el("li", null, ui.richText(step)); }))
        ),
        section(
          "required-title",
          "What to use",
          el(
            "div",
            { class: "two-col" },
            el("div", { class: "card" }, el("h3", { class: "card__title" }, "Required HTML elements"), richList(project.requiredHtml)),
            el("div", { class: "card" }, el("h3", { class: "card__title" }, "Required CSS techniques"), richList(project.requiredCss))
          )
        ),
        section(
          "requirements-title",
          "Requirements",
          el(
            "div",
            { class: "three-col" },
            el("div", { class: "card" }, el("h3", { class: "card__title" }, "Functional"), richList(project.functionalRequirements)),
            el("div", { class: "card" }, el("h3", { class: "card__title" }, "Responsive"), richList(project.responsiveRequirements)),
            el("div", { class: "card" }, el("h3", { class: "card__title" }, "Accessibility"), richList(project.accessibilityRequirements))
          )
        ),
        section(
          "hints-title",
          "Hints",
          el(
            "div",
            null,
            el("p", { class: "small muted" }, "Stuck? Open one hint at a time. They point you in the right direction without giving the answer away."),
            project.hints.map(function (hint, index) {
              return el(
                "details",
                { class: "disclosure disclosure--hint" },
                el("summary", null, ui.icon("bulb"), "Hint " + (index + 1) + " of " + project.hints.length),
                el("div", { class: "disclosure__body" }, el("p", null, ui.richText(hint)))
              );
            })
          )
        ),
        el(
          "section",
          { class: "card card--accent", "aria-labelledby": "next-title" },
          el("h2", { id: "next-title", class: "card__title" }, "Finished building it?"),
          el("p", null, "Check your work against the project's self-check list, compare with the common mistakes, and only then peek at the model solution."),
          el("div", { class: "button-row" }, el("a", { class: "button button--primary", href: "#/project/" + project.number + "/check" }, ui.icon("checklist"), "Go to the self-check"))
        )
      );

      let progressNode = progressCard(project);
      const aside = el("aside", { class: "brief-aside", "aria-label": "Project progress" }, progressNode, workflowCard());

      main.appendChild(el("div", { class: "brief-layout" }, mainCol, aside));
      main.appendChild(pager(project));
      main.appendChild(ui.backLinks(el("a", { href: "#/projects" }, "← Back to the library")));

      ctx.subscribe(function (event) {
        if (event.number !== undefined && event.number !== project.number && event.type !== "external") {
          return;
        }
        statusSlot.replaceChildren(ui.statusBadge(project.number));
        progressNode = ui.swap(progressNode, progressCard(project));
      });
    }
  };
})(window.HCM = window.HCM || {});
