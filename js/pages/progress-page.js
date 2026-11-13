/*
 * progress-page.js — E. Progress Tracker  (#/progress)
 * ----------------------------------------------------
 * Totals, progress by level and by topic, daily practice activity, the
 * completed-project history, and the backup / reset tools.
 * Reset deletes project completion, self-check ticks and practice history
 * only — never the theme, interface settings or today's checklist.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const catalog = HCM.catalog;
  const progress = HCM.progress;
  const ACTIVITY_DAYS = 35;

  function statsBlock() {
    const stats = progress.stats();
    const streak = progress.streak();
    return el(
      "section",
      { "aria-labelledby": "totals-title" },
      el("h2", { id: "totals-title", class: "visually-hidden" }, "Totals"),
      el(
        "dl",
        { class: "stat-grid stat-grid--5" },
        el("div", { class: "stat" }, el("dt", null, "Completed"), el("dd", null, String(stats.completed))),
        el("div", { class: "stat" }, el("dt", null, "Remaining"), el("dd", null, String(stats.remaining))),
        el("div", { class: "stat" }, el("dt", null, "Overall progress"), el("dd", null, stats.percent + "%")),
        el("div", { class: "stat" }, el("dt", null, "Practice days"), el("dd", null, String(progress.practiceDays()))),
        el("div", { class: "stat" }, el("dt", null, "Current streak"), el("dd", null, ui.plural(streak, "day")))
      ),
      el("div", { class: "card", style: { "margin-top": "1rem" } }, ui.meter({ value: stats.percent, label: "Overall progress", valueText: stats.completed + " of " + stats.total + " projects · " + stats.percent + "%", size: "lg" }))
    );
  }

  function levelsBlock() {
    return el(
      "section",
      { class: "section card", "aria-labelledby": "by-level-title" },
      el("div", { class: "section__head" }, el("h2", { id: "by-level-title" }, "Progress by level"), el("a", { class: "small", href: "#/path" }, "Learning path")),
      el(
        "ul",
        { class: "level-list" },
        catalog.levels().map(function (level) {
          const stats = progress.levelStats(level.id);
          return el("li", null, ui.meter({ value: stats.percent, label: level.name + " (projects " + level.range[0] + "–" + level.range[1] + ")", valueText: stats.completed + "/" + stats.total + " · " + stats.percent + "%", tone: level.id }));
        })
      )
    );
  }

  function topicTable(category) {
    const label = category === "html" ? "HTML" : "CSS";
    return el(
      "div",
      { class: "table-wrap" },
      el(
        "table",
        { class: "data-table" },
        el("caption", null, label + " topics"),
        el("thead", null, el("tr", null, el("th", { scope: "col" }, "Topic"), el("th", { scope: "col", class: "num" }, "Done"), el("th", { scope: "col" }, "Progress"))),
        el(
          "tbody",
          null,
          catalog.topics(category).map(function (topic) {
            const stats = progress.topicStats(topic.id);
            return el(
              "tr",
              null,
              el("th", { scope: "row" }, el("a", { href: "#/projects?topic=" + topic.id }, topic.name)),
              el("td", { class: "num" }, stats.completed + "/" + stats.total),
              el("td", null, ui.meter({ value: stats.percent, label: topic.name + " progress", valueText: stats.percent + "%", showHead: false, size: "sm" }))
            );
          })
        )
      )
    );
  }

  function topicsBlock() {
    return el(
      "section",
      { class: "section", "aria-labelledby": "by-topic-title" },
      el("div", { class: "section__head" }, el("h2", { id: "by-topic-title" }, "Progress by topic"), el("p", { class: "section__note" }, "Based on the projects that practise each topic")),
      el("div", { class: "two-col" }, topicTable("html"), topicTable("css"))
    );
  }

  function activityLevel(day) {
    const score = day.tasks + day.completed * 3;
    if (score === 0) return 0;
    if (score <= 3) return 1;
    if (score <= 7) return 2;
    return 3;
  }

  function activityBlock() {
    const days = progress.activity(ACTIVITY_DAYS);
    const active = days.filter(function (day) { return activityLevel(day) > 0; }).length;
    return el(
      "section",
      { class: "section card", "aria-labelledby": "activity-title" },
      el("div", { class: "section__head" }, el("h2", { id: "activity-title" }, "Daily practice activity"), el("p", { class: "section__note" }, "Last " + ACTIVITY_DAYS + " days")),
      el("p", null, "You practised on " + ui.plural(active, "day") + " out of the last " + ACTIVITY_DAYS + ". A day counts when you tick a daily task or complete a project."),
      el(
        "ol",
        { class: "activity", "aria-label": "Practice activity, oldest day first" },
        days.map(function (day) {
          const label = ui.formatDate(day.date, { weekday: "short", month: "short", day: "numeric" }) + ": " + ui.plural(day.tasks, "daily task") + ", " + ui.plural(day.completed, "project") + " completed" + (day.isToday ? " (today)" : "");
          return el("li", { class: "activity__day" + (day.isToday ? " is-today" : ""), "data-level": activityLevel(day), title: label }, el("span", { class: "visually-hidden" }, label));
        })
      ),
      el(
        "div",
        { class: "activity-legend", "aria-hidden": "true" },
        "Less",
        el("span", { "data-level": "0" }),
        el("span", { "data-level": "1" }),
        el("span", { "data-level": "2" }),
        el("span", { "data-level": "3" }),
        "More"
      )
    );
  }

  function historyBlock() {
    const history = progress.completionHistory();
    const recent = history.slice(0, 5);
    return el(
      "section",
      { class: "section", "aria-labelledby": "history-title" },
      el("h2", { id: "history-title" }, "Completed projects"),
      history.length
        ? el(
            "div",
            { class: "stack" },
            el("h3", null, "Recently completed"),
            el(
              "ul",
              { class: "recent-list" },
              recent.map(function (entry) {
                return el("li", { class: "recent-item" }, ui.icon("done"), el("a", { href: "#/project/" + entry.number }, "#" + entry.project.paddedNumber + " " + entry.project.title), el("time", { datetime: entry.at || null }, ui.formatDate(entry.at)));
              })
            ),
            el("h3", null, "Full history"),
            el(
              "div",
              { class: "table-wrap" },
              el(
                "table",
                { class: "data-table" },
                el("caption", { class: "visually-hidden" }, "All completed projects, most recent first"),
                el("thead", null, el("tr", null, el("th", { scope: "col" }, "Project"), el("th", { scope: "col" }, "Level"), el("th", { scope: "col" }, "Completed on"))),
                el(
                  "tbody",
                  null,
                  history.map(function (entry) {
                    return el(
                      "tr",
                      null,
                      el("td", null, el("a", { href: "#/project/" + entry.number }, "#" + entry.project.paddedNumber + " " + entry.project.title)),
                      el("td", null, ui.levelBadge(entry.project.level)),
                      el("td", null, el("time", { datetime: entry.at || null }, ui.formatDate(entry.at)))
                    );
                  })
                )
              )
            )
          )
        : el("p", { class: "muted" }, "No completed projects yet. Mark a project as completed on its brief or self-check page and it will appear here.")
    );
  }

  /* ---------- Backup and reset ---------- */

  function exportProgress() {
    const data = progress.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = el("a", { href: url, download: "html-css-mastery-progress-" + progress.todayKey() + ".json" });
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 2000);
    ui.toast("Progress exported. Keep the file somewhere safe.", "info");
  }

  function importProgress(file, input) {
    const reader = new FileReader();
    reader.onload = function () {
      let parsed;
      try {
        parsed = progress.parseImport(String(reader.result));
      } catch (error) {
        ui.toast(error.message, "warning");
        input.value = "";
        return;
      }
      const s = parsed.summary;
      ui.confirm({
        title: "Replace your progress with this backup?",
        body: [
          el("p", null, "The backup" + (s.exportedAt ? " from " + ui.formatDate(s.exportedAt) : "") + " contains:"),
          el(
            "ul",
            null,
            el("li", null, ui.plural(s.completed, "completed project")),
            el("li", null, "self-check ticks for " + ui.plural(s.selfCheckProjects, "project")),
            el("li", null, ui.plural(s.historyDays, "day") + " of practice history")
          ),
          el("p", null, "Your current progress will be replaced. Theme and interface settings are not affected.")
        ],
        confirmLabel: "Replace my progress"
      }).then(function (ok) {
        input.value = "";
        if (!ok) return;
        progress.applyImport(parsed.data);
        ui.toast("Backup imported: " + ui.plural(s.completed, "completed project") + ".");
      });
    };
    reader.onerror = function () {
      ui.toast("The file couldn't be read.", "warning");
      input.value = "";
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    const s = progress.resetSummary();
    ui.confirm({
      title: "Reset all progress?",
      tone: "danger",
      body: [
        el("p", null, "This permanently deletes from this browser:"),
        el(
          "ul",
          null,
          el("li", null, "completion of " + ui.plural(s.completed, "project")),
          el("li", null, "self-check ticks for " + ui.plural(s.selfCheckProjects, "project")),
          el("li", null, ui.plural(s.historyDays, "day") + " of practice history")
        ),
        el("p", null, "Kept: your theme, library filters, sidebar setting and today's daily checklist."),
        el("p", null, el("strong", null, "Tip: "), "export your progress first if you might want it back.")
      ],
      confirmLabel: "Reset progress",
      acknowledge: "I understand this can't be undone"
    }).then(function (ok) {
      if (!ok) return;
      progress.reset();
      ui.toast("Progress reset. Your theme and settings were kept.", "info");
    });
  }

  function toolsBlock() {
    const exportButton = el("button", { type: "button", class: "button button--secondary" }, ui.icon("download"), "Export progress");
    exportButton.addEventListener("click", exportProgress);

    const fileInput = el("input", { type: "file", accept: "application/json,.json", id: "import-file" });
    fileInput.addEventListener("change", function () {
      if (fileInput.files && fileInput.files[0]) {
        importProgress(fileInput.files[0], fileInput);
      }
    });
    const importLabel = el("label", { class: "button button--secondary file-button", for: "import-file" }, ui.icon("upload"), "Import progress", fileInput);

    const resetButton = el("button", { type: "button", class: "button button--danger", id: "reset-progress" }, ui.icon("reset"), "Reset progress");
    resetButton.addEventListener("click", resetProgress);

    return el(
      "section",
      { class: "section", "aria-labelledby": "tools-title" },
      el("h2", { id: "tools-title" }, "Back up and reset"),
      el(
        "div",
        { class: "two-col" },
        el(
          "div",
          { class: "card" },
          el("h3", { class: "card__title" }, "Backup"),
          el("p", null, "Progress is saved in this browser only. Export it to a file to move it to another browser or keep a copy."),
          el("div", { class: "button-row" }, exportButton, importLabel)
        ),
        el(
          "div",
          { class: "card danger-zone" },
          el("h3", { class: "card__title" }, "Danger zone"),
          el("p", null, "Start over by deleting project completion, self-check ticks and practice history. Your theme and settings stay."),
          el("div", { class: "button-row" }, resetButton)
        )
      )
    );
  }

  HCM.pages = HCM.pages || {};
  HCM.pages.progress = {
    nav: "progress",
    title: "Progress Tracker",
    render: function (main, route, ctx) {
      main.appendChild(
        ui.pageHeader({
          crumbs: [{ label: "Dashboard", href: "#/" }, { label: "Progress Tracker" }],
          eyebrow: "Progress",
          title: "Progress Tracker",
          lead: "Everything you've finished, how you're doing in each level and topic, and your practice rhythm."
        })
      );
      const parts = {
        stats: statsBlock(),
        levels: levelsBlock(),
        topics: topicsBlock(),
        activity: activityBlock(),
        history: historyBlock()
      };
      main.appendChild(parts.stats);
      main.appendChild(parts.levels);
      main.appendChild(parts.activity);
      main.appendChild(parts.history);
      main.appendChild(parts.topics);
      main.appendChild(toolsBlock());
      main.appendChild(ui.backLinks());

      ctx.subscribe(function (event) {
        if (event.type === "checklist" || event.type === "newday") {
          parts.stats = ui.swap(parts.stats, statsBlock());
          parts.activity = ui.swap(parts.activity, activityBlock());
          return;
        }
        parts.stats = ui.swap(parts.stats, statsBlock());
        parts.levels = ui.swap(parts.levels, levelsBlock());
        parts.topics = ui.swap(parts.topics, topicsBlock());
        parts.activity = ui.swap(parts.activity, activityBlock());
        parts.history = ui.swap(parts.history, historyBlock());
      });
    }
  };
})(window.HCM = window.HCM || {});
