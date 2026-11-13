/*
 * solutions.js — model solutions, loaded only when you ask for them
 * -----------------------------------------------------------------
 * Solutions live in js/data/solutions/, ten projects per file. They are not
 * loaded with the page. When you open a solution, this file adds a normal
 * <script src="…"> tag for the right file. Classic script tags work from a
 * file:// address (fetch() does not), and a broken solution file can only
 * break its own solution panel — never the rest of the site.
 *
 * Each solution file calls:
 *   HCM.solutions.register(18, { scope: "full", notes: [...], files: [{ name, language, code }] });
 */
(function (HCM) {
  "use strict";

  const ui = HCM.ui;
  const el = ui.el;
  const registry = Object.create(null);
  const loading = Object.create(null); // file path -> Promise

  function register(number, solution) {
    if (!solution || !Array.isArray(solution.files) || solution.files.length === 0) {
      console.warn("[HTML & CSS Mastery] Solution " + number + " has no files and was ignored.");
      return;
    }
    registry[number] = {
      scope: solution.scope === "core" ? "core" : "full",
      title: typeof solution.title === "string" ? solution.title : "",
      notes: Array.isArray(solution.notes) ? solution.notes : [],
      files: solution.files.map(function (file) {
        return { name: String(file.name), language: String(file.language || "text"), code: String(file.code).replace(/^\n/, "") };
      })
    };
  }

  function loadFile(path) {
    if (!loading[path]) {
      loading[path] = new Promise(function (resolve, reject) {
        const script = document.createElement("script");
        script.src = path;
        script.onload = function () {
          resolve();
        };
        script.onerror = function () {
          delete loading[path];
          script.remove();
          reject(new Error("The file " + path + " could not be loaded. Check that it exists."));
        };
        document.head.appendChild(script);
      });
    }
    return loading[path];
  }

  /** Resolves with the solution for a project, loading its file if needed. */
  function load(number) {
    if (registry[number]) {
      return Promise.resolve(registry[number]);
    }
    const project = HCM.catalog.get(number);
    if (!project) {
      return Promise.reject(new Error("Unknown project " + number + "."));
    }
    const path = project.modelSolution.file;
    return loadFile(path).then(function () {
      if (!registry[number]) {
        throw new Error("No model solution for project " + number + " was found in " + path + ". The file may contain a typo — open the browser console (F12) for details.");
      }
      return registry[number];
    });
  }

  /** Builds a preview document: the CSS is inlined and image paths point at assets/images. */
  function previewDocument(solution) {
    const htmlFile = solution.files.find(function (file) { return file.language === "html"; });
    if (!htmlFile) {
      return null;
    }
    const css = solution.files
      .filter(function (file) { return file.language === "css"; })
      .map(function (file) { return file.code; })
      .join("\n");
    const imageBase = new URL("assets/images/", document.baseURI).href;
    let html = htmlFile.code.replace(/<link[^>]+rel="stylesheet"[^>]*>/gi, "<style>\n" + css + "\n</style>");
    html = html.replace(/(src|srcset|poster|href)="images\//g, "$1=\"" + imageBase);
    html = html.replace(/(,\s*)images\//g, "$1" + imageBase); // later candidates inside srcset
    html = html.replace(/url\((["']?)images\//g, "url($1" + imageBase);
    return html;
  }

  /** Fills `container` with the solution's notes, code blocks and preview. */
  function render(number, container) {
    container.replaceChildren(el("p", { class: "muted" }, "Loading the model solution…"));
    load(number).then(
      function (solution) {
        const parts = [];
        parts.push(
          ui.callout(
            "info",
            "info",
            solution.scope === "full" ? "A complete model solution" : "A focused model solution",
            el(
              "p",
              null,
              solution.scope === "full"
                ? "This is one good way to build the project — not the only one. Compare structure and ideas rather than copying line by line."
                : "Bigger projects get a solution for their hardest part, so it stays readable. Use it to compare your approach to the core layout and components."
            )
          )
        );
        if (solution.notes.length) {
          parts.push(el("h3", { class: "mt-0" }, "Why it's built this way"));
          parts.push(el("ul", { class: "tidy-list" }, solution.notes.map(function (note) { return el("li", null, ui.richText(note)); })));
        }
        solution.files.forEach(function (file) {
          parts.push(
            el(
              "div",
              { class: "code-file" },
              el("div", { class: "code-file__head" }, el("span", null, file.name), ui.copyButton(function () { return file.code; }, "Copy " + file.name)),
              el("pre", { class: "code-block", tabindex: "0", "aria-label": file.name + " source code" }, el("code", null, file.code))
            )
          );
        });
        const doc = previewDocument(solution);
        if (doc) {
          const frameSlot = el("div", { class: "solution-preview-slot" });
          const button = el("button", { type: "button", class: "button button--secondary" }, ui.icon("eye"), "Show a live preview");
          button.addEventListener("click", function () {
            if (frameSlot.firstChild) {
              frameSlot.replaceChildren();
              button.lastChild.textContent = "Show a live preview";
              return;
            }
            const frame = el("iframe", {
              class: "solution-preview",
              title: "Preview of the model solution for project " + number,
              // No "allow-scripts": the preview can never run code. "allow-same-origin"
              // only lets it load the sample images from this folder.
              sandbox: "allow-same-origin"
            });
            frame.srcdoc = doc;
            frameSlot.replaceChildren(frame);
            button.lastChild.textContent = "Hide the preview";
          });
          parts.push(el("div", { class: "button-row", style: { "margin-top": "1rem" } }, button));
          parts.push(el("p", { class: "small muted" }, "The preview shows the first HTML file only. Links between pages don't work inside it."));
          parts.push(frameSlot);
        }
        container.replaceChildren.apply(container, parts);
      },
      function (error) {
        container.replaceChildren(ui.callout("warning", "warning", "The model solution couldn't be shown", el("p", null, error.message)));
      }
    );
  }

  HCM.solutions = {
    register: register,
    load: load,
    render: render,
    previewDocument: previewDocument,
    isLoaded: function (number) {
      return Boolean(registry[number]);
    }
  };
})(window.HCM = window.HCM || {});
