/*
 * progress.js — everything you have done, and the maths behind it
 * ---------------------------------------------------------------
 * Owns four saved values (see storage.js for the key names):
 *   completedProjects  { v: 1, items: { "12": "2026-10-31T14:02:11.000Z" } }
 *   selfChecks         { v: 1, items: { "12": ["f-1a2b3c", "a-9x8y7z"] } }
 *   practiceHistory    { v: 1, days: { "2026-10-31": { tasks: 6, completed: [12] } } }
 *   dailyChecklist     { v: 1, date: "2026-10-31", done: ["open-vscode", …] }
 *
 * Every change follows the same three steps: update the state in memory, save
 * that one key, then tell subscribers (pages, sidebar, toasts) what changed.
 * Pages never write to storage themselves.
 */
(function (HCM) {
  "use strict";

  const storage = HCM.storage;
  const catalog = HCM.catalog;
  const KEYS = storage.KEYS;
  const isPlainObject = storage.isPlainObject;
  const TOTAL = catalog.TOTAL;
  const HISTORY_DAYS_KEPT = 400;
  const DATE_KEY = /^\d{4}-\d{2}-\d{2}$/;
  const TICK_ID = /^[fra]-[a-z0-9]{1,13}$/;
  const tasks = (HCM.data.site && HCM.data.site.dailyTasks) || [];
  const taskIds = tasks.map(function (task) { return task.id; });
  const listeners = [];

  /* ---------- Dates ---------- */

  /**
   * The local calendar date as "YYYY-MM-DD".
   * Built from getFullYear/getMonth/getDate so it follows the computer's own
   * time zone; toISOString() would use UTC and "change day" at the wrong hour.
   */
  function dateKey(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return date.getFullYear() + "-" + month + "-" + day;
  }

  function todayKey() {
    return dateKey(new Date());
  }

  function isProjectNumber(value) {
    return Number.isInteger(value) && value >= 1 && value <= TOTAL;
  }

  function unique(list) {
    return list.filter(function (item, index) {
      return list.indexOf(item) === index;
    });
  }

  /* ---------- Normalisers: validate saved data before using it ---------- */

  function normaliseCompleted(raw) {
    if (!isPlainObject(raw) || !isPlainObject(raw.items)) {
      return null;
    }
    const items = {};
    Object.keys(raw.items).forEach(function (key) {
      const number = Number(key);
      const value = raw.items[key];
      if (!isProjectNumber(number)) {
        return;
      }
      if (typeof value === "string" && !Number.isNaN(Date.parse(value))) {
        items[number] = new Date(value).toISOString();
      } else if (value === true || value === null) {
        items[number] = null; // completed, date unknown
      }
    });
    return { v: 1, items: items };
  }

  function normaliseSelfChecks(raw) {
    if (!isPlainObject(raw) || !isPlainObject(raw.items)) {
      return null;
    }
    const items = {};
    Object.keys(raw.items).forEach(function (key) {
      const number = Number(key);
      const list = raw.items[key];
      if (!isProjectNumber(number) || !Array.isArray(list)) {
        return;
      }
      const clean = unique(list.filter(function (id) {
        return typeof id === "string" && TICK_ID.test(id);
      })).slice(0, 20);
      if (clean.length) {
        items[number] = clean;
      }
    });
    return { v: 1, items: items };
  }

  function normaliseHistory(raw) {
    if (!isPlainObject(raw) || !isPlainObject(raw.days)) {
      return null;
    }
    const days = {};
    Object.keys(raw.days)
      .filter(function (key) { return DATE_KEY.test(key); })
      .sort()
      .slice(-HISTORY_DAYS_KEPT)
      .forEach(function (key) {
        const entry = raw.days[key];
        if (!isPlainObject(entry)) {
          return;
        }
        const taskCount = Number.isInteger(entry.tasks) ? Math.max(0, Math.min(entry.tasks, taskIds.length)) : 0;
        const completed = Array.isArray(entry.completed) ? unique(entry.completed.filter(isProjectNumber)) : [];
        if (taskCount > 0 || completed.length > 0) {
          days[key] = { tasks: taskCount, completed: completed };
        }
      });
    return { v: 1, days: days };
  }

  function normaliseDaily(raw) {
    if (!isPlainObject(raw) || typeof raw.date !== "string" || !DATE_KEY.test(raw.date)) {
      return null;
    }
    const done = Array.isArray(raw.done)
      ? unique(raw.done.filter(function (id) { return taskIds.indexOf(id) !== -1; }))
      : [];
    return { v: 1, date: raw.date, done: done };
  }

  function emptyCompleted() { return { v: 1, items: {} }; }
  function emptySelfChecks() { return { v: 1, items: {} }; }
  function emptyHistory() { return { v: 1, days: {} }; }
  function emptyDaily() { return { v: 1, date: todayKey(), done: [] }; }

  /* ---------- State ---------- */

  let completed = {};
  let selfChecks = {};
  let history = {};
  let daily = emptyDaily();

  function loadCompleted() { completed = storage.readJSON(KEYS.completedProjects, normaliseCompleted, emptyCompleted).items; }
  function loadSelfChecks() { selfChecks = storage.readJSON(KEYS.selfChecks, normaliseSelfChecks, emptySelfChecks).items; }
  function loadHistory() { history = storage.readJSON(KEYS.practiceHistory, normaliseHistory, emptyHistory).days; }
  function loadDaily() { daily = storage.readJSON(KEYS.dailyChecklist, normaliseDaily, emptyDaily); }

  function saveCompleted() { storage.writeJSON(KEYS.completedProjects, { v: 1, items: completed }); }
  function saveSelfChecks() { storage.writeJSON(KEYS.selfChecks, { v: 1, items: selfChecks }); }
  function saveHistory() { storage.writeJSON(KEYS.practiceHistory, { v: 1, days: history }); }
  function saveDaily() { storage.writeJSON(KEYS.dailyChecklist, daily); }

  loadCompleted();
  loadSelfChecks();
  loadHistory();
  loadDaily();

  /* ---------- Events ---------- */

  function emit(event) {
    listeners.slice().forEach(function (listener) {
      try {
        listener(event);
      } catch (error) {
        console.error(error);
      }
    });
  }

  /** Calls fn(event) after every change. Returns a function that stops listening. */
  function subscribe(fn) {
    listeners.push(fn);
    return function unsubscribe() {
      const index = listeners.indexOf(fn);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  }

  /* ---------- Practice history ---------- */

  /** Changes one day's history entry; empty days are removed instead of saved. */
  function updateDay(key, change) {
    const entry = history[key] || { tasks: 0, completed: [] };
    change(entry);
    if (entry.tasks > 0 || entry.completed.length > 0) {
      history[key] = entry;
    } else {
      delete history[key];
    }
    const keys = Object.keys(history).sort();
    while (keys.length > HISTORY_DAYS_KEPT) {
      delete history[keys.shift()];
    }
    saveHistory();
  }

  function isActiveDay(key) {
    const entry = history[key];
    return Boolean(entry && (entry.tasks > 0 || entry.completed.length > 0));
  }

  /** The last `count` days, oldest first, for the activity grid. */
  function activity(count) {
    const days = [];
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    for (let offset = count - 1; offset >= 0; offset -= 1) {
      const day = new Date(today);
      day.setDate(today.getDate() - offset);
      const key = dateKey(day);
      const entry = history[key];
      days.push({
        key: key,
        date: day,
        tasks: entry ? entry.tasks : 0,
        completed: entry ? entry.completed.length : 0,
        isToday: offset === 0
      });
    }
    return days;
  }

  /** Consecutive practice days ending today (or yesterday, if today has no activity yet). */
  function streak() {
    const day = new Date();
    day.setHours(12, 0, 0, 0);
    if (!isActiveDay(dateKey(day))) {
      day.setDate(day.getDate() - 1);
    }
    let count = 0;
    while (isActiveDay(dateKey(day))) {
      count += 1;
      day.setDate(day.getDate() - 1);
    }
    return count;
  }

  function practiceDays() {
    return Object.keys(history).filter(isActiveDay).length;
  }

  /* ---------- Completion ---------- */

  function isComplete(number) {
    return Object.prototype.hasOwnProperty.call(completed, number) && catalog.get(number) !== null;
  }

  function completedNumbers() {
    return Object.keys(completed)
      .map(Number)
      .filter(function (number) { return catalog.get(number) !== null; })
      .sort(function (a, b) { return a - b; });
  }

  function completedAt(number) {
    return isComplete(number) ? completed[number] : null;
  }

  /** Marks a project complete (true) or not complete (false). Returns true when something changed. */
  function setComplete(number, done) {
    number = Number(number);
    if (!catalog.get(number) || isComplete(number) === Boolean(done)) {
      return false;
    }
    if (done) {
      completed[number] = new Date().toISOString();
    } else {
      delete completed[number];
    }
    saveCompleted();
    updateDay(todayKey(), function (entry) {
      entry.completed = entry.completed.filter(function (n) { return n !== number; });
      if (done) {
        entry.completed.push(number);
      }
    });
    emit({ type: "completion", number: number, completed: Boolean(done) });
    return true;
  }

  function percent(part, whole) {
    return whole > 0 ? Math.round((part / whole) * 100) : 0;
  }

  /** Overall progress: (completed / 100) × 100. */
  function stats() {
    const done = completedNumbers().length;
    return { total: TOTAL, completed: done, remaining: TOTAL - done, percent: percent(done, TOTAL) };
  }

  function levelStats(levelId) {
    const projects = catalog.byLevel(levelId);
    const done = projects.filter(function (project) { return isComplete(project.number); }).length;
    return { total: projects.length, completed: done, remaining: projects.length - done, percent: percent(done, projects.length) };
  }

  function topicStats(topicId) {
    const projects = catalog.byTopic(topicId);
    const done = projects.filter(function (project) { return isComplete(project.number); }).length;
    return { total: projects.length, completed: done, percent: percent(done, projects.length) };
  }

  /** Continue Learning: the first project, in number order, that is not complete (or null). */
  function nextProject() {
    const all = catalog.all();
    for (let i = 0; i < all.length; i += 1) {
      if (!isComplete(all[i].number)) {
        return all[i];
      }
    }
    return null;
  }

  /** The level of the next project; null when everything is complete. */
  function currentLevel() {
    const next = nextProject();
    return next ? next.level : null;
  }

  /** Completed projects, most recent first. Projects with an unknown date go last. */
  function completionHistory(limit) {
    const list = completedNumbers().map(function (number) {
      return { number: number, at: completed[number], project: catalog.get(number) };
    });
    list.sort(function (a, b) {
      if (a.at === b.at) return b.number - a.number;
      if (!a.at) return 1;
      if (!b.at) return -1;
      return a.at < b.at ? 1 : -1;
    });
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  /* ---------- Self-check ticks ---------- */

  function checklistIds(number) {
    const project = catalog.get(number);
    return project ? project.selfCheck.map(function (item) { return item.id; }) : [];
  }

  /** Ticked item ids that still exist in the project's current checklist. */
  function ticks(number) {
    const valid = checklistIds(number);
    return (selfChecks[number] || []).filter(function (id) { return valid.indexOf(id) !== -1; });
  }

  function isTicked(number, id) {
    return ticks(number).indexOf(id) !== -1;
  }

  function setTick(number, id, on) {
    number = Number(number);
    if (checklistIds(number).indexOf(id) === -1) {
      return;
    }
    const list = (selfChecks[number] || []).filter(function (item) { return item !== id; });
    if (on) {
      list.push(id);
    }
    if (list.length) {
      selfChecks[number] = list;
    } else {
      delete selfChecks[number];
    }
    saveSelfChecks();
    emit({ type: "selfcheck", number: number });
  }

  function tickStats(number) {
    const total = checklistIds(number).length;
    const ticked = ticks(number).length;
    return { ticked: ticked, total: total, all: total > 0 && ticked === total, started: ticked > 0 };
  }

  /**
   * Decides whether "Mark as completed" should ask for confirmation first.
   *
   * Default rule: ask when the self-check checklist isn't fully ticked, so a
   * project is only "done" when you've checked your work (or chosen to skip it).
   * This is the one place to change if you prefer another rule — for example
   * always asking, or never asking for Beginner projects.
   */
  function shouldConfirmCompletion(number) {
    const check = tickStats(number);
    return { confirm: !check.all, ticked: check.ticked, total: check.total };
  }

  /* ---------- Daily checklist ---------- */

  /** Starts a fresh checklist when the calendar date has changed. Returns true if it did. */
  function ensureToday() {
    const today = todayKey();
    if (daily.date === today) {
      return false;
    }
    daily = { v: 1, date: today, done: [] };
    saveDaily();
    return true;
  }

  function checklist() {
    ensureToday();
    return tasks.map(function (task) {
      return { id: task.id, label: task.label, done: daily.done.indexOf(task.id) !== -1 };
    });
  }

  function toggleTask(id, done) {
    if (taskIds.indexOf(id) === -1) {
      return;
    }
    const startedNewDay = ensureToday();
    daily.done = daily.done.filter(function (item) { return item !== id; });
    if (done) {
      daily.done.push(id);
    }
    saveDaily();
    const count = daily.done.length;
    updateDay(daily.date, function (entry) {
      entry.tasks = count;
    });
    if (startedNewDay) {
      emit({ type: "newday" });
    }
    emit({ type: "checklist", id: id, done: Boolean(done) });
  }

  /** Called when the tab becomes visible again: resets the checklist after midnight. */
  function checkDate() {
    if (ensureToday()) {
      emit({ type: "newday" });
    }
  }

  /* ---------- Reset ---------- */

  /** What a reset would delete, for the confirmation dialog. */
  function resetSummary() {
    return {
      completed: completedNumbers().length,
      selfCheckProjects: Object.keys(selfChecks).length,
      historyDays: practiceDays()
    };
  }

  /**
   * Deletes project completion, self-check ticks and practice history — and
   * nothing else. Theme, interface preferences and today's checklist stay.
   */
  function reset() {
    [KEYS.completedProjects, KEYS.selfChecks, KEYS.practiceHistory].forEach(function (key) {
      storage.remove(key);
      storage.remove(key + storage.BACKUP_SUFFIX);
    });
    completed = {};
    selfChecks = {};
    history = {};
    emit({ type: "reset" });
  }

  /* ---------- Export and import (backups) ---------- */

  function exportData() {
    return {
      app: "html-css-mastery",
      format: 1,
      exportedAt: new Date().toISOString(),
      completedProjects: { v: 1, items: completed },
      selfChecks: { v: 1, items: selfChecks },
      practiceHistory: { v: 1, days: history },
      dailyChecklist: daily
    };
  }

  /**
   * Reads a backup file's text. Returns the cleaned data and a summary, or
   * throws an Error with a friendly message. Nothing is saved yet.
   */
  function parseImport(text) {
    let raw;
    try {
      raw = JSON.parse(text);
    } catch (error) {
      throw new Error("This file isn't valid JSON, so it can't be a progress backup.");
    }
    if (!isPlainObject(raw) || raw.app !== "html-css-mastery") {
      throw new Error("This file isn't an HTML & CSS Mastery progress backup.");
    }
    const cleanCompleted = normaliseCompleted(raw.completedProjects);
    if (!cleanCompleted) {
      throw new Error("The backup has no readable completion data.");
    }
    const cleanChecks = normaliseSelfChecks(raw.selfChecks) || emptySelfChecks();
    const cleanHistory = normaliseHistory(raw.practiceHistory) || emptyHistory();
    const cleanDaily = normaliseDaily(raw.dailyChecklist);
    const data = { completed: cleanCompleted.items, selfChecks: cleanChecks.items, history: cleanHistory.days, daily: cleanDaily };
    return {
      data: data,
      summary: {
        completed: Object.keys(data.completed).length,
        selfCheckProjects: Object.keys(data.selfChecks).length,
        historyDays: Object.keys(data.history).length,
        exportedAt: typeof raw.exportedAt === "string" ? raw.exportedAt : null
      }
    };
  }

  /** Replaces current progress with data returned by parseImport(). */
  function applyImport(data) {
    completed = data.completed;
    selfChecks = data.selfChecks;
    history = data.history;
    if (data.daily && data.daily.date === todayKey()) {
      daily = data.daily;
      saveDaily();
    }
    saveCompleted();
    saveSelfChecks();
    saveHistory();
    emit({ type: "import" });
  }

  /* ---------- Other tabs ---------- */

  // When another tab saves progress, reload that part and tell the page.
  window.addEventListener("storage", function (event) {
    const reloaders = {};
    reloaders[KEYS.completedProjects] = loadCompleted;
    reloaders[KEYS.selfChecks] = loadSelfChecks;
    reloaders[KEYS.practiceHistory] = loadHistory;
    reloaders[KEYS.dailyChecklist] = loadDaily;
    if (event.key === null) {
      loadCompleted();
      loadSelfChecks();
      loadHistory();
      loadDaily();
      emit({ type: "external" });
    } else if (reloaders[event.key]) {
      reloaders[event.key]();
      emit({ type: "external", key: event.key });
    }
  });

  HCM.progress = {
    subscribe: subscribe,
    dateKey: dateKey,
    todayKey: todayKey,
    isComplete: isComplete,
    completedAt: completedAt,
    setComplete: setComplete,
    stats: stats,
    levelStats: levelStats,
    topicStats: topicStats,
    nextProject: nextProject,
    currentLevel: currentLevel,
    completionHistory: completionHistory,
    ticks: ticks,
    isTicked: isTicked,
    setTick: setTick,
    tickStats: tickStats,
    shouldConfirmCompletion: shouldConfirmCompletion,
    checklist: checklist,
    toggleTask: toggleTask,
    checkDate: checkDate,
    activity: activity,
    streak: streak,
    practiceDays: practiceDays,
    resetSummary: resetSummary,
    reset: reset,
    exportData: exportData,
    parseImport: parseImport,
    applyImport: applyImport
  };
})(window.HCM = window.HCM || {});
