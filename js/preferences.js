/*
 * preferences.js — small interface settings
 * -----------------------------------------
 * Remembers how you like the interface: the library's search, filters and sort
 * order, and whether the sidebar is collapsed. Saved under
 * "htmlCssMastery_uiPreferences". Resetting progress never touches this key.
 */
(function (HCM) {
  "use strict";

  const storage = HCM.storage;
  const KEY = storage.KEYS.uiPreferences;
  const SIDEBAR_MODES = ["auto", "expanded", "collapsed"];
  const STATUSES = ["all", "completed", "not-completed"];
  const SORTS = ["number-asc", "number-desc", "difficulty-asc", "difficulty-desc"];
  const ID_PATTERN = /^[a-z0-9-]{1,40}$/;

  function defaultLibrary() {
    return { q: "", level: "all", htmlTopic: "all", cssTopic: "all", status: "all", sort: "number-asc" };
  }

  function makeDefault() {
    return { v: 1, sidebar: "auto", library: defaultLibrary() };
  }

  function normaliseLibrary(raw) {
    const clean = defaultLibrary();
    if (!storage.isPlainObject(raw)) {
      return clean;
    }
    if (typeof raw.q === "string") {
      clean.q = raw.q.slice(0, 120);
    }
    ["level", "htmlTopic", "cssTopic"].forEach(function (name) {
      if (typeof raw[name] === "string" && ID_PATTERN.test(raw[name])) {
        clean[name] = raw[name];
      }
    });
    if (STATUSES.indexOf(raw.status) !== -1) {
      clean.status = raw.status;
    }
    if (SORTS.indexOf(raw.sort) !== -1) {
      clean.sort = raw.sort;
    }
    return clean;
  }

  function normalise(raw) {
    if (!storage.isPlainObject(raw)) {
      return null;
    }
    const clean = makeDefault();
    if (SIDEBAR_MODES.indexOf(raw.sidebar) !== -1) {
      clean.sidebar = raw.sidebar;
    }
    clean.library = normaliseLibrary(raw.library);
    return clean;
  }

  let state = storage.readJSON(KEY, normalise, makeDefault);

  function save() {
    storage.writeJSON(KEY, state);
  }

  HCM.prefs = {
    SORTS: SORTS,
    defaultLibrary: defaultLibrary,
    sidebar: function () {
      return state.sidebar;
    },
    setSidebar: function (mode) {
      if (SIDEBAR_MODES.indexOf(mode) !== -1) {
        state.sidebar = mode;
        save();
      }
    },
    library: function () {
      return Object.assign({}, state.library);
    },
    setLibrary: function (value) {
      state.library = normaliseLibrary(value);
      save();
    }
  };
})(window.HCM = window.HCM || {});
