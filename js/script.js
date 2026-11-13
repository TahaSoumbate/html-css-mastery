/*
 * script.js — starts the website
 * ------------------------------
 * Runs last. It checks that the data loaded correctly, shows a notice when
 * something needs attention (broken data file, blocked storage, damaged saved
 * data), keeps the daily checklist in step with the calendar, and starts the router.
 */
(function (HCM) {
  "use strict";

  const notices = document.getElementById("app-notices");
  const main = document.getElementById("main");

  // If a core file failed to load, explain that instead of showing a blank page.
  const required = ["catalog", "storage", "progress", "ui", "router"];
  const missing = required.filter(function (name) {
    return !HCM[name];
  });
  if (missing.length) {
    main.textContent = "";
    const box = document.createElement("div");
    box.className = "notice notice--danger";
    box.innerHTML = "<p class=\"notice__title\">The website couldn't start.</p><p></p>";
    box.lastChild.textContent = "These parts didn't load: " + missing.join(", ") + ". Check that every file inside the js folder is present, then reload the page.";
    main.appendChild(box);
    return;
  }

  const ui = HCM.ui;
  const el = ui.el;
  const shown = Object.create(null);

  function notice(id, tone, title, body) {
    if (shown[id]) {
      return;
    }
    shown[id] = true;
    notices.appendChild(el("div", { class: "notice notice--" + tone, role: tone === "danger" ? "alert" : null }, el("p", { class: "notice__title" }, title), body));
  }

  function fileName(path) {
    return String(path || "").split("/").slice(-3).join("/");
  }

  // 1. Scripts that threw an error while loading (for example a typo in a data file).
  const loadErrors = (window.HCM_LOAD_ERRORS || []).slice();
  if (loadErrors.length) {
    notice(
      "load-errors",
      "danger",
      "A script file has an error",
      el(
        "ul",
        null,
        loadErrors.slice(0, 5).map(function (item) {
          return el("li", null, (item.file ? fileName(item.file) + (item.line ? " (line " + item.line + ")" : "") + ": " : "") + item.message);
        })
      )
    );
  }

  // 2. Data checks: counts, numbering, required fields, corrections.
  const report = HCM.catalog.validate();
  if (report.errors.length) {
    console.group("[HTML & CSS Mastery] Data problems");
    report.errors.forEach(function (message) { console.error(message); });
    console.groupEnd();
    notice(
      "data-errors",
      "warning",
      "Some project data has problems (" + report.errors.length + ")",
      [
        el("ul", null, report.errors.slice(0, 5).map(function (message) { return el("li", null, message); })),
        report.errors.length > 5 ? el("p", null, "…and " + (report.errors.length - 5) + " more. Open the browser console (F12) to see them all.") : null
      ]
    );
  }
  if (report.warnings.length) {
    console.group("[HTML & CSS Mastery] Data warnings");
    report.warnings.forEach(function (message) { console.warn(message); });
    console.groupEnd();
  }

  // 3. Storage problems.
  const storageNotice = function () {
    notice(
      "storage",
      "warning",
      "Your progress can't be saved in this browser",
      el("p", null, "The browser is blocking local storage (for example in a private window or because of a privacy setting). Everything still works, but your progress will be lost when you close this tab.")
    );
  };
  if (!HCM.storage.isAvailable()) {
    storageNotice();
  }
  HCM.storage.onProblem(function (kind) {
    if (kind === "write-failed") {
      storageNotice();
    }
  });
  if (HCM.storage.quarantined().length) {
    notice(
      "damaged",
      "info",
      "Some saved data was damaged and has been set aside",
      el("p", null, "It couldn't be read, so it was copied to a backup key in your browser's storage and replaced with fresh data: " + HCM.storage.quarantined().join(", ") + ".")
    );
  }

  // 4. Reset the daily checklist when the date changes while the tab stays open.
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      HCM.progress.checkDate();
    }
  });
  window.addEventListener("focus", function () {
    HCM.progress.checkDate();
  });
  window.setInterval(function () {
    HCM.progress.checkDate();
  }, 60 * 1000);

  // 5. Start.
  const loading = document.getElementById("loading-message");
  if (loading) {
    loading.remove();
  }
  HCM.router.start();
})(window.HCM = window.HCM || {});
