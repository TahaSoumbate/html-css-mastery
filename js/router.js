/*
 * router.js — moving between pages, plus the sidebar and mobile menu
 * ------------------------------------------------------------------
 * The site is one HTML page. The part of the address after "#" picks the page:
 *   #/                    dashboard
 *   #/projects            project library (optional ?level=…&topic=…&status=…)
 *   #/project/12          project brief
 *   #/project/12/check    self-check for project 12
 *   #/path  #/topics  #/self-check  #/progress
 * Changing only the "#" part never reloads the page and needs no server, so it
 * works from a file:// address. Back and Forward work as usual.
 * After each page change, focus moves to the page's <h1> so screen-reader
 * users hear where they are.
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const progress = HCM.progress;
  const pages = (HCM.pages = HCM.pages || {});
  const SITE_NAME = "HTML & CSS Mastery";
  const SIMPLE_ROUTES = {
    dashboard: "dashboard",
    projects: "library",
    path: "path",
    topics: "topics",
    "self-check": "selfCheckIndex",
    progress: "progress"
  };

  let cleanups = [];
  let current = null;
  let firstRender = true;

  pages.notFound = {
    nav: null,
    title: "Page not found",
    render: function (main) {
      main.appendChild(ui.pageHeader({ title: "Page not found", lead: "There's no page at this address. The link may have a typo." }));
      main.appendChild(
        el(
          "div",
          { class: "button-row" },
          el("a", { class: "button button--primary", href: "#/" }, "Go to the dashboard"),
          el("a", { class: "button button--secondary", href: "#/projects" }, "Open the project library")
        )
      );
    }
  };

  function safeDecode(value) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      return "";
    }
  }

  function parseQuery(text) {
    const query = {};
    if (!text) {
      return query;
    }
    text.split("&").forEach(function (pair) {
      const index = pair.indexOf("=");
      const key = safeDecode(index === -1 ? pair : pair.slice(0, index));
      const value = safeDecode(index === -1 ? "" : pair.slice(index + 1).replace(/\+/g, " "));
      if (key) {
        query[key] = value;
      }
    });
    return query;
  }

  /** Reads the address. Returns null for plain in-page anchors such as "#main". */
  function parseHash() {
    const hash = window.location.hash || "";
    if (hash === "" || hash === "#" || hash === "#/") {
      return { name: "dashboard", params: {}, query: {} };
    }
    if (hash.indexOf("#/") !== 0) {
      return null;
    }
    let path = hash.slice(2);
    let queryText = "";
    const questionMark = path.indexOf("?");
    if (questionMark !== -1) {
      queryText = path.slice(questionMark + 1);
      path = path.slice(0, questionMark);
    }
    const parts = path.split("/").filter(Boolean).map(safeDecode);
    const query = parseQuery(queryText);

    if (parts[0] === "project" && /^\d{1,3}$/.test(parts[1] || "")) {
      const number = Number(parts[1]);
      if (parts.length === 2) {
        return { name: "project", params: { number: number }, query: query };
      }
      if (parts.length === 3 && parts[2] === "check") {
        return { name: "selfCheckProject", params: { number: number }, query: query };
      }
    }
    if (parts.length === 1 && Object.prototype.hasOwnProperty.call(SIMPLE_ROUTES, parts[0])) {
      return { name: SIMPLE_ROUTES[parts[0]], params: {}, query: query };
    }
    return { name: "notFound", params: {}, query: query };
  }

  function errorView(error) {
    return el(
      "div",
      null,
      ui.pageHeader({ title: "Something went wrong", lead: "This page couldn't be shown. The rest of the site still works." }),
      el("p", null, "If you recently edited a data file, open the browser console (F12) for details."),
      el("pre", { class: "code-block" }, String(error && error.message ? error.message : error)),
      el("a", { class: "button button--primary", href: "#/" }, "Go to the dashboard")
    );
  }

  function runCleanups() {
    cleanups.forEach(function (cleanup) {
      try {
        cleanup();
      } catch (error) {
        console.error(error);
      }
    });
    cleanups = [];
  }

  function setActiveNav(name) {
    document.querySelectorAll(".nav-link").forEach(function (link) {
      if (name && link.getAttribute("data-nav") === name) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function render(options) {
    const settings = options || {};
    let route = parseHash();
    if (!route) {
      // A plain anchor such as "#main" (skip link): stay on the current page.
      if (current) {
        return;
      }
      route = { name: "dashboard", params: {}, query: {} };
    }
    runCleanups();

    const page = Object.prototype.hasOwnProperty.call(pages, route.name) ? pages[route.name] : pages.notFound;
    const main = document.getElementById("main");
    const scrollY = window.scrollY;
    const ctx = {
      route: route,
      onCleanup: function (fn) {
        cleanups.push(fn);
      },
      /** Subscribe to progress changes for as long as this page is shown. */
      subscribe: function (fn) {
        cleanups.push(progress.subscribe(fn));
      }
    };

    main.replaceChildren();
    let title = page.title;
    try {
      page.render(main, route, ctx);
      title = typeof page.title === "function" ? page.title(route) : page.title;
    } catch (error) {
      console.error(error);
      main.replaceChildren(errorView(error));
      title = "Something went wrong";
    }

    current = route;
    document.title = (title ? title + " – " : "") + SITE_NAME;
    setActiveNav(page.nav || null);
    closeMenu(false);

    if (settings.keepScroll) {
      window.scrollTo(0, scrollY);
    } else {
      window.scrollTo(0, 0);
      if (!firstRender) {
        const heading = main.querySelector("h1");
        if (heading) {
          heading.setAttribute("tabindex", "-1");
          heading.focus({ preventScroll: true });
        }
      }
    }
    firstRender = false;
  }

  /* ---------- Sidebar footer: overall progress and Continue Learning ---------- */

  const sidebarFooter = document.getElementById("sidebar-footer");

  function renderSidebarFooter() {
    if (!sidebarFooter) {
      return;
    }
    const stats = progress.stats();
    const next = progress.nextProject();
    sidebarFooter.replaceChildren(
      el(
        "div",
        { class: "sidebar-progress" },
        el("div", { class: "sidebar-progress__label" }, el("span", null, "Overall progress"), el("strong", null, stats.percent + "%")),
        ui.meter({ value: stats.percent, label: "Overall progress", valueText: stats.completed + " of " + stats.total + " projects", showHead: false, size: "sm" })
      ),
      el("p", { class: "sidebar-rail-percent", "aria-hidden": "true", title: "Overall progress" }, stats.percent + "%"),
      !next && stats.completed < stats.total
        ? null
        : next
        ? el(
            "a",
            { class: "sidebar-continue", href: "#/project/" + next.number, title: "Continue: #" + next.paddedNumber + " " + next.title },
            ui.icon("arrow-right"),
            el("span", { class: "sidebar-continue__text" }, el("span", { class: "sidebar-continue__eyebrow" }, "Continue learning"), "#" + next.paddedNumber + " " + next.title)
          )
        : el(
            "a",
            { class: "sidebar-continue", href: "#/progress", title: "All 100 projects completed" },
            ui.icon("trophy"),
            el("span", { class: "sidebar-continue__text" }, el("span", { class: "sidebar-continue__eyebrow" }, "All done"), "100 of 100 projects completed")
          )
    );
  }

  /* ---------- Mobile menu ---------- */

  const nav = document.getElementById("site-nav");
  const menuButton = document.getElementById("menu-toggle");

  function setMenuIcon(open) {
    const use = menuButton && menuButton.querySelector("use");
    if (use) {
      use.setAttribute("href", open ? "#i-close" : "#i-menu");
    }
  }

  function openMenu() {
    nav.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    setMenuIcon(true);
    const link = nav.querySelector("a[aria-current='page']") || nav.querySelector("a");
    if (link) {
      link.focus();
    }
  }

  function closeMenu(returnFocus) {
    if (!nav || !nav.classList.contains("is-open")) {
      return;
    }
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    setMenuIcon(false);
    if (returnFocus) {
      menuButton.focus();
    }
  }

  if (nav && menuButton) {
    menuButton.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeMenu(true);
      } else {
        openMenu();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu(true);
      }
    });
    document.addEventListener("click", function (event) {
      if (nav.classList.contains("is-open") && !nav.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu(false);
      }
    });
  }

  /* ---------- Collapsible sidebar (tablet and desktop) ---------- */

  const root = document.documentElement;
  const sidebarButton = document.getElementById("sidebar-toggle");
  const wideQuery = window.matchMedia ? window.matchMedia("(min-width: 1024px)") : null;
  const mobileQuery = window.matchMedia ? window.matchMedia("(max-width: 767.98px)") : null;

  /** "full" or "rail": the saved choice, or the default for the current width. */
  function effectiveSidebar() {
    const mode = HCM.prefs.sidebar();
    if (mode === "expanded") return "full";
    if (mode === "collapsed") return "rail";
    return wideQuery && !wideQuery.matches ? "rail" : "full";
  }

  function applySidebar() {
    const state = effectiveSidebar();
    root.setAttribute("data-sidebar", state);
    if (sidebarButton) {
      const full = state === "full";
      sidebarButton.setAttribute("aria-expanded", String(full));
      const label = full ? "Collapse the sidebar to icons" : "Expand the sidebar";
      sidebarButton.setAttribute("title", label);
      sidebarButton.querySelector(".visually-hidden").textContent = label;
    }
  }

  if (sidebarButton) {
    sidebarButton.addEventListener("click", function () {
      HCM.prefs.setSidebar(effectiveSidebar() === "full" ? "collapsed" : "expanded");
      applySidebar();
    });
  }

  function onMediaChange(query, fn) {
    if (!query) return;
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", fn);
    } else if (typeof query.addListener === "function") {
      query.addListener(fn);
    }
  }

  onMediaChange(wideQuery, applySidebar);
  onMediaChange(mobileQuery, function () {
    closeMenu(false);
  });

  HCM.router = {
    start: function () {
      applySidebar();
      renderSidebarFooter();
      progress.subscribe(renderSidebarFooter);
      window.addEventListener("hashchange", function () {
        render();
      });
      render();
    },
    /** Shows the current page again with fresh data, keeping the scroll position. */
    refresh: function () {
      render({ keepScroll: true });
    },
    current: function () {
      return current;
    }
  };
})(window.HCM = window.HCM || {});
