/*
 * topics-page.js — D. HTML & CSS Topic Index  (#/topics)
 * ------------------------------------------------------
 * A searchable index of 15 HTML and 29 CSS topics. Each topic shows a short
 * description, its difficulty and the projects that practise it. This is an
 * index, not a tutorial: follow a topic into the projects that use it.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;
  const SHOWN = 5;

  function topicCard(topic) {
    const projects = catalog.byTopic(topic.id);
    const stats = progress.topicStats(topic.id);
    const level = catalog.level(topic.difficulty);
    return el(
      "li",
      { "data-topic": topic.id },
      el(
        "article",
        { class: "topic-card", "aria-labelledby": "topic-" + topic.id },
        el(
          "div",
          { class: "meta-row" },
          el("span", { class: "badge badge--" + topic.category }, topic.category.toUpperCase()),
          level ? el("span", { class: "badge badge--" + level.id }, level.name) : null,
          el("span", { class: "meta" }, stats.completed + "/" + stats.total + " done")
        ),
        el("h3", { id: "topic-" + topic.id }, topic.name),
        el("p", { class: "topic-card__desc" }, ui.richText(topic.description)),
        el("h4", { class: "small mb-0" }, "Related projects (" + projects.length + ")"),
        el(
          "ul",
          { class: "topic-card__links" },
          projects.slice(0, SHOWN).map(function (project) {
            return el("li", null, ui.statusIcon(project.number), " ", el("a", { href: "#/project/" + project.number }, "#" + project.paddedNumber + " " + project.title));
          })
        ),
        el("p", { class: "topic-card__foot mb-0" }, el("a", { href: "#/projects?topic=" + topic.id }, projects.length > SHOWN ? "See all " + projects.length + " in the library →" : "Open in the library →"))
      )
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.topics = {
    nav: "topics",
    title: "Topic Index",
    render: function (main, route, ctx) {
      const search = el("input", { class: "input", id: "topic-search", type: "search", placeholder: "e.g. grid, labels, shadows", autocomplete: "off" });
      const category = el(
        "select",
        { class: "select", id: "topic-category" },
        el("option", { value: "all" }, "All topics"),
        el("option", { value: "html" }, "HTML topics"),
        el("option", { value: "css" }, "CSS topics")
      );
      const count = el("p", { class: "results-count", "aria-live": "polite" });
      const empty = ui.emptyState("No topics match", "Try a shorter word, such as \"grid\" or \"form\".");
      empty.hidden = true;

      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Topic Index" }],
          eyebrow: "Index",
          title: "HTML & CSS Topic Index",
          lead: "Every topic the projects practise, with a one-line summary and the projects that use it. Pick a topic you want to strengthen and build its projects."
        })
      );
      main.appendChild(
        el(
          "form",
          { class: "filters", role: "search", "aria-label": "Filter topics", onSubmit: function (event) { event.preventDefault(); } },
          el(
            "div",
            { class: "filters__row" },
            el("div", { class: "field" }, el("label", { for: "topic-search" }, "Search topics"), el("div", { class: "input-icon" }, ui.icon("search"), search)),
            el("div", { class: "field" }, el("label", { for: "topic-category" }, "Show"), category)
          )
        )
      );
      main.appendChild(el("div", { class: "results-bar" }, count));

      const groups = ["html", "css"].map(function (cat) {
        const items = catalog.topics(cat).map(function (topic) {
          return { topic: topic, node: topicCard(topic) };
        });
        const heading = el("h2", { id: "topics-" + cat }, cat === "html" ? "HTML topics" : "CSS topics");
        const listNode = el("ul", { class: "topic-grid" }, items.map(function (item) { return item.node; }));
        const section = el("section", { class: "section", "aria-labelledby": "topics-" + cat }, el("div", { class: "section__head" }, heading), listNode);
        main.appendChild(section);
        return { category: cat, items: items, section: section, list: listNode };
      });
      main.appendChild(empty);
      main.appendChild(ui.backLinks());

      function apply() {
        const q = catalog.normaliseText(search.value).trim();
        const terms = q ? q.split(/\s+/) : [];
        let shown = 0;
        groups.forEach(function (group) {
          let visibleInGroup = 0;
          group.items.forEach(function (item) {
            const haystack = catalog.normaliseText(item.topic.name + " " + item.topic.description + " " + item.topic.id);
            const match = (category.value === "all" || category.value === group.category) && terms.every(function (term) { return haystack.indexOf(term) !== -1; });
            item.node.hidden = !match;
            if (match) visibleInGroup += 1;
          });
          group.section.hidden = visibleInGroup === 0;
          shown += visibleInGroup;
        });
        const total = catalog.topics().length;
        count.textContent = shown === total ? "Showing all " + total + " topics" : "Showing " + shown + " of " + total + " topics";
        empty.hidden = shown > 0;
      }

      search.addEventListener("input", apply);
      category.addEventListener("change", apply);

      ctx.subscribe(function () {
        groups.forEach(function (group) {
          group.items.forEach(function (item) {
            const fresh = topicCard(item.topic);
            fresh.hidden = item.node.hidden;
            item.node = ui.swap(item.node, fresh);
          });
        });
      });

      apply();
    }
  };
})(window.HCM = window.HCM || {});
