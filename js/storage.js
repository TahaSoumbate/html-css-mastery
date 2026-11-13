/*
 * storage.js — safe access to the browser's localStorage
 * ------------------------------------------------------
 * Every saved value goes through this file. It:
 *   - keeps every key name in one place (KEYS), all starting with "htmlCssMastery_";
 *   - never lets a storage error crash the page (private windows, blocked storage
 *     and a full disk all throw errors in some browsers);
 *   - keeps a copy in memory, so the current visit keeps working even when the
 *     browser refuses to save;
 *   - sets damaged data aside as "<key>_backup" instead of silently deleting it.
 *
 * Nothing here ever calls localStorage.clear(): other websites opened from your
 * disk can share the same storage area, and their data must stay untouched.
 */
(function (HCM) {
  "use strict";

  const PREFIX = "htmlCssMastery_";
  const BACKUP_SUFFIX = "_backup";

  // All keys this website writes. Reset and import only ever touch keys from this list.
  const KEYS = Object.freeze({
    completedProjects: PREFIX + "completedProjects",
    selfChecks: PREFIX + "selfChecks",
    practiceHistory: PREFIX + "practiceHistory",
    dailyChecklist: PREFIX + "dailyChecklist",
    theme: PREFIX + "theme",
    uiPreferences: PREFIX + "uiPreferences"
  });

  const memory = Object.create(null); // copies of everything written during this visit
  const unsaved = Object.create(null); // keys whose last write failed
  const listeners = [];
  const quarantined = [];
  let lastProblem = null;

  const available = probe();
  if (!available) {
    lastProblem = "unavailable";
  }

  /** Checks once whether localStorage can be written and read back. */
  function probe() {
    try {
      const testKey = PREFIX + "__probe__";
      window.localStorage.setItem(testKey, "1");
      const ok = window.localStorage.getItem(testKey) === "1";
      window.localStorage.removeItem(testKey);
      return ok;
    } catch (error) {
      console.warn("[HTML & CSS Mastery] localStorage is not available. Progress will last only until this tab closes.", error);
      return false;
    }
  }

  function report(kind, error) {
    lastProblem = kind;
    console.warn("[HTML & CSS Mastery] Storage problem (" + kind + "):", error);
    listeners.forEach(function (listener) {
      try {
        listener(kind, error);
      } catch (listenerError) {
        console.error(listenerError);
      }
    });
  }

  /** Returns the saved text for a key, or null when nothing is saved. */
  function getRaw(key) {
    if (available && !unsaved[key]) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        report("read-failed", error);
      }
    }
    return key in memory ? memory[key] : null;
  }

  /** Saves text under a key. Returns true when the browser accepted it. */
  function setRaw(key, value) {
    memory[key] = value;
    if (!available) {
      return false;
    }
    try {
      window.localStorage.setItem(key, value);
      delete unsaved[key];
      return true;
    } catch (error) {
      unsaved[key] = true;
      report("write-failed", error);
      return false;
    }
  }

  function remove(key) {
    delete memory[key];
    delete unsaved[key];
    if (!available) {
      return;
    }
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      report("write-failed", error);
    }
  }

  /**
   * Reads a JSON value safely.
   *   normalise(parsed) -> returns a clean value, or null when the data is unusable
   *   makeDefault()     -> returns a fresh empty value
   * Unreadable data is copied to "<key>_backup" and replaced by the default.
   */
  function readJSON(key, normalise, makeDefault) {
    const raw = getRaw(key);
    if (raw === null || raw === undefined) {
      return makeDefault();
    }
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      quarantine(key, raw, "it is not valid JSON");
      return makeDefault();
    }
    let value = parsed;
    if (typeof normalise === "function") {
      try {
        value = normalise(parsed);
      } catch (error) {
        console.error(error);
        value = null;
      }
    }
    if (value === null || value === undefined) {
      quarantine(key, raw, "it does not have the expected shape");
      return makeDefault();
    }
    return value;
  }

  function writeJSON(key, value) {
    return setRaw(key, JSON.stringify(value));
  }

  function quarantine(key, raw, reason) {
    console.warn(
      "[HTML & CSS Mastery] Saved data in \"" + key + "\" was ignored because " + reason +
        ". A copy was kept as \"" + key + BACKUP_SUFFIX + "\"."
    );
    if (quarantined.indexOf(key) === -1) {
      quarantined.push(key);
    }
    setRaw(key + BACKUP_SUFFIX, raw);
  }

  /** Small helper shared by the normalise functions in other files. */
  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  HCM.storage = {
    KEYS: KEYS,
    PREFIX: PREFIX,
    BACKUP_SUFFIX: BACKUP_SUFFIX,
    isAvailable: function () {
      return available;
    },
    lastProblem: function () {
      return lastProblem;
    },
    onProblem: function (listener) {
      listeners.push(listener);
    },
    /** Keys whose saved data was damaged and set aside during this visit. */
    quarantined: function () {
      return quarantined.slice();
    },
    getRaw: getRaw,
    setRaw: setRaw,
    remove: remove,
    readJSON: readJSON,
    writeJSON: writeJSON,
    isPlainObject: isPlainObject
  };
})(window.HCM = window.HCM || {});
