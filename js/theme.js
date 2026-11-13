/*
 * theme.js — light and dark theme
 * -------------------------------
 * The small script in <head> already applied the right theme before the page
 * was drawn. This file wires up the toggle button, saves the choice and keeps
 * following the operating system's setting until the person makes a choice.
 * All colours live in CSS custom properties (css/styles.css, section 1);
 * switching theme only changes the data-theme attribute on <html>.
 */
(function (HCM) {
  "use strict";

  const storage = HCM.storage;
  const KEY = storage.KEYS.theme;
  const root = document.documentElement;
  const systemQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const button = document.getElementById("theme-toggle");

  function savedChoice() {
    const value = storage.getRaw(KEY);
    return value === "light" || value === "dark" ? value : null;
  }

  function systemTheme() {
    return systemQuery && systemQuery.matches ? "dark" : "light";
  }

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (!button) {
      return;
    }
    const next = theme === "dark" ? "light" : "dark";
    const label = "Switch to " + next + " theme";
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    const use = button.querySelector("use");
    if (use) {
      use.setAttribute("href", theme === "dark" ? "#i-sun" : "#i-moon");
    }
    const text = button.querySelector(".theme-toggle__text");
    if (text) {
      text.textContent = next === "dark" ? "Dark" : "Light";
    }
  }

  function toggle() {
    const next = current() === "dark" ? "light" : "dark";
    storage.setRaw(KEY, next);
    apply(next);
    return next;
  }

  if (systemQuery) {
    const followSystem = function () {
      if (!savedChoice()) {
        apply(systemTheme());
      }
    };
    if (typeof systemQuery.addEventListener === "function") {
      systemQuery.addEventListener("change", followSystem);
    } else if (typeof systemQuery.addListener === "function") {
      systemQuery.addListener(followSystem);
    }
  }

  // Another open tab changed the theme.
  window.addEventListener("storage", function (event) {
    if (event.key === KEY) {
      apply(savedChoice() || systemTheme());
    }
  });

  if (button) {
    button.addEventListener("click", toggle);
  }
  apply(savedChoice() || systemTheme());

  HCM.theme = {
    current: current,
    toggle: toggle,
    savedChoice: savedChoice
  };
})(window.HCM = window.HCM || {});
