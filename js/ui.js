/*
 * ui.js — shared building blocks for every page
 * ---------------------------------------------
 * el() builds DOM elements from plain values. Text always goes in through
 * textContent, never innerHTML, so a hint like "use <header>" shows the tag as
 * text instead of creating an element. Data strings may mark code with
 * backticks (`<nav>`); richText() turns those parts into <code> elements.
 */
(function (HCM) {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";

  /* ---------- DOM helpers ---------- */

  function append(parent, children) {
    children.forEach(function (child) {
      if (child === null || child === undefined || child === false) {
        return;
      }
      if (Array.isArray(child)) {
        append(parent, child);
      } else if (child instanceof Node) {
        parent.appendChild(child);
      } else {
        parent.appendChild(document.createTextNode(String(child)));
      }
    });
  }

  /**
   * el("a", { class: "button", href: "#/" }, "Home")
   *   - attributes with null/undefined/false are skipped, true becomes an empty attribute
   *   - onClick / onInput / … add event listeners
   *   - style: { "--value": "40%" } sets style properties
   */
  function el(tag, attrs) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (name) {
        const value = attrs[name];
        if (value === null || value === undefined || value === false) {
          return;
        }
        if (name === "class") {
          node.className = value;
        } else if (name === "text") {
          node.textContent = value;
        } else if (name.indexOf("on") === 0 && typeof value === "function") {
          node.addEventListener(name.slice(2).toLowerCase(), value);
        } else if (name === "style" && typeof value === "object") {
          Object.keys(value).forEach(function (property) {
            node.style.setProperty(property, value[property]);
          });
        } else if (value === true) {
          node.setAttribute(name, "");
        } else {
          node.setAttribute(name, String(value));
        }
      });
    }
    append(node, Array.prototype.slice.call(arguments, 2));
    return node;
  }

  /** An icon from the sprite in index.html. */
  function icon(name, extraClass) {
    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", "icon" + (extraClass ? " " + extraClass : ""));
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const use = document.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#i-" + name);
    svg.appendChild(use);
    return svg;
  }

  /** Text where `backtick parts` become <code>. Returns an array of nodes. */
  function richText(text) {
    const parts = String(text || "").split("`");
    return parts.map(function (part, index) {
      return index % 2 === 1 ? el("code", null, part) : document.createTextNode(part);
    });
  }

  /** Replaces a node and keeps keyboard focus on the matching control inside the new one. */
  function swap(oldNode, newNode) {
    const active = document.activeElement;
    let key = null;
    if (active && oldNode.contains(active)) {
      key = active.getAttribute("data-focus-key") || active.id || null;
    }
    oldNode.replaceWith(newNode);
    if (key) {
      const selector = "[data-focus-key=\"" + key + "\"], [id=\"" + key + "\"]";
      const target = newNode.matches(selector) ? newNode : newNode.querySelector(selector);
      if (target) {
        target.focus({ preventScroll: true });
      }
    }
    return newNode;
  }

  /* ---------- Formatting ---------- */

  function pad3(number) {
    return String(number).padStart(3, "0");
  }

  function formatMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    if (hours === 0) return rest + " min";
    if (rest === 0) return hours + " h";
    return hours + " h " + rest + " min";
  }

  function formatDate(value, options) {
    if (!value) {
      return "date unknown";
    }
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "date unknown";
    }
    return date.toLocaleDateString(undefined, options || { year: "numeric", month: "short", day: "numeric" });
  }

  function plural(count, one, many) {
    return count + " " + (count === 1 ? one : many || one + "s");
  }

  /* ---------- Small components ---------- */

  function levelBadge(level) {
    if (!level) return null;
    return el("span", { class: "badge badge--" + level.id }, level.name);
  }

  function complexity(value) {
    const dots = [1, 2, 3].map(function (n) {
      return el("span", { class: "complexity__dot" + (n <= value ? " is-on" : "") });
    });
    const labels = { 1: "lighter", 2: "moderate", 3: "demanding" };
    return el(
      "span",
      { class: "meta complexity", title: "Complexity " + value + " of 3 within its level" },
      el("span", { class: "complexity", "aria-hidden": "true" }, dots),
      el("span", null, labels[value] || "")
    );
  }

  /** "Completed", "In progress · 3/7 checked" or "Not started". */
  function statusBadge(number) {
    const progress = HCM.progress;
    if (progress.isComplete(number)) {
      return el("span", { class: "badge badge--success" }, icon("check"), "Completed");
    }
    const check = progress.tickStats(number);
    if (check.started) {
      return el("span", { class: "badge badge--progress" }, "In progress · " + check.ticked + "/" + check.total + " checked");
    }
    return el("span", { class: "badge" }, "Not started");
  }

  function statusIcon(number) {
    const progress = HCM.progress;
    if (progress.isComplete(number)) {
      return el("span", { class: "status-icon status-icon--done", title: "Completed" }, icon("done"), el("span", { class: "visually-hidden" }, "Completed: "));
    }
    if (progress.tickStats(number).started) {
      return el("span", { class: "status-icon status-icon--progress", title: "In progress" }, icon("half"), el("span", { class: "visually-hidden" }, "In progress: "));
    }
    return el("span", { class: "status-icon", title: "Not started" }, icon("todo"), el("span", { class: "visually-hidden" }, "Not started: "));
  }

  /**
   * An animated progress bar. It is drawn at 0 and grows to its value on the
   * next frames, so the width transition in CSS plays.
   * (A div with role="progressbar" is used because the native <progress>
   * element can't be animated or styled the same way in every browser.)
   */
  function meter(options) {
    const value = Math.max(0, Math.min(100, Math.round(options.value || 0)));
    const valueText = options.valueText || value + "%";
    const bar = el("span", { class: "meter__bar" });
    const track = el(
      "span",
      {
        class: "meter__track",
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": value,
        "aria-valuetext": valueText,
        "aria-label": options.label
      },
      bar
    );
    const classes = ["meter"];
    if (options.size) classes.push("meter--" + options.size);
    if (options.tone) classes.push("meter--" + options.tone);
    const node = el(
      "div",
      { class: classes.join(" ") },
      options.showHead === false
        ? null
        : el("div", { class: "meter__head" }, el("span", { class: "meter__label" }, options.label), el("span", { class: "meter__value" }, valueText)),
      track
    );
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        bar.style.width = value + "%";
      });
    });
    return node;
  }

  function topicChips(project, limit) {
    const topics = project.topicObjects;
    const shown = typeof limit === "number" ? topics.slice(0, limit) : topics;
    const items = shown.map(function (topic) {
      return el("li", null, el("span", { class: "chip" }, topic.name));
    });
    if (shown.length < topics.length) {
      items.push(el("li", null, el("span", { class: "chip", title: topics.slice(shown.length).map(function (t) { return t.name; }).join(", ") }, "+" + (topics.length - shown.length) + " more")));
    }
    return el("ul", { class: "chip-list", "aria-label": "Topics" }, items);
  }

  /** The project card used in the library, dashboard and topic pages. */
  function projectCard(project, options) {
    const settings = options || {};
    const heading = "h" + (settings.headingLevel || 2);
    const card = el(
      "article",
      { class: "project-card", "data-number": project.number, "data-complete": String(project.completed) },
      el(
        "div",
        { class: "project-card__top" },
        el("span", { class: "project-card__number" }, "#" + project.paddedNumber),
        levelBadge(project.level),
        el("span", { class: "project-card__status" }, statusBadge(project.number))
      ),
      el(heading, { class: "project-card__title" }, el("a", { href: "#/project/" + project.number }, project.title)),
      el("p", { class: "project-card__desc" }, richText(project.shortDescription)),
      el(
        "p",
        { class: "project-card__skills" },
        el("strong", null, "Skills: "),
        project.skills.map(function (skill, index) {
          return [index ? " · " : null, richText(skill)];
        })
      ),
      topicChips(project, 4),
      el(
        "div",
        { class: "project-card__foot" },
        el("span", { class: "meta-row" }, el("span", { class: "meta" }, icon("clock", "icon--sm"), formatMinutes(project.estimatedMinutes)), complexity(project.complexity)),
        el(
          "a",
          { class: "button button--secondary button--small", href: "#/project/" + project.number },
          "View project",
          el("span", { class: "visually-hidden" }, ": " + project.title)
        )
      )
    );
    return card;
  }

  /** Refreshes the status parts of an existing card after progress changes. */
  function updateProjectCard(card, project) {
    card.setAttribute("data-complete", String(project.completed));
    const slot = card.querySelector(".project-card__status");
    if (slot) {
      slot.replaceChildren(statusBadge(project.number));
    }
  }

  function breadcrumb(items) {
    return el(
      "nav",
      { class: "breadcrumb", "aria-label": "Breadcrumb" },
      el(
        "ol",
        null,
        items.map(function (item, index) {
          const last = index === items.length - 1;
          return el("li", null, last || !item.href ? el("span", { "aria-current": last ? "page" : null }, item.label) : el("a", { href: item.href }, item.label));
        })
      )
    );
  }

  function pageHeader(options) {
    return el(
      "header",
      { class: "page-header" },
      options.crumbs ? breadcrumb(options.crumbs) : null,
      options.eyebrow ? el("p", { class: "eyebrow" }, options.eyebrow) : null,
      el("h1", null, options.title),
      options.lead ? el("p", { class: "lead" }, options.lead) : null,
      options.after || null
    );
  }

  function backLinks(extra) {
    return el(
      "nav",
      { class: "back-links", "aria-label": "Back" },
      el("a", { href: "#/" }, "← Back to dashboard"),
      extra || null
    );
  }

  function emptyState(title, text, action) {
    return el("div", { class: "empty-state" }, icon("search", "icon--lg"), el("h2", null, title), el("p", null, text), action || null);
  }

  function callout(tone, iconName, title, body) {
    return el(
      "div",
      { class: "callout" + (tone ? " callout--" + tone : "") },
      icon(iconName),
      el("div", { class: "callout__body" }, title ? el("p", { class: "callout__title" }, title) : null, body)
    );
  }

  /* ---------- Toasts ---------- */

  const toastRegion = document.getElementById("toast-region");

  /** A short message that also gets read out by screen readers (the region is role="status"). */
  function toast(message, tone) {
    if (!toastRegion) {
      return;
    }
    const kind = tone || "success";
    const item = el("div", { class: "toast toast--" + kind }, icon(kind === "success" ? "done" : kind === "warning" ? "warning" : "info"), el("p", { class: "toast__text" }, message));
    toastRegion.appendChild(item);
    while (toastRegion.children.length > 3) {
      toastRegion.firstElementChild.remove();
    }
    window.setTimeout(function () {
      item.classList.add("is-leaving");
      window.setTimeout(function () {
        item.remove();
      }, 300);
    }, 4500);
  }

  /* ---------- Confirmation dialog ---------- */

  /**
   * Opens the shared native <dialog>. Resolves to true when confirmed.
   *   options.title, options.body (text, node or array of nodes)
   *   options.confirmLabel, options.cancelLabel, options.tone ("primary" | "danger")
   *   options.acknowledge: text of a checkbox that must be ticked before confirming
   */
  function confirmDialog(options) {
    const dialog = document.getElementById("confirm-dialog");
    if (!dialog || typeof dialog.showModal !== "function") {
      const plainBody = typeof options.body === "string" ? options.body : "";
      return Promise.resolve(window.confirm(options.title + (plainBody ? "\n\n" + plainBody : "")));
    }
    const titleNode = document.getElementById("confirm-dialog-title");
    const bodyNode = document.getElementById("confirm-dialog-body");
    const ack = document.getElementById("confirm-dialog-ack");
    const ackInput = document.getElementById("confirm-dialog-ack-input");
    const ackText = document.getElementById("confirm-dialog-ack-text");
    const confirmButton = document.getElementById("confirm-dialog-confirm");
    const cancelButton = document.getElementById("confirm-dialog-cancel");
    const opener = document.activeElement;

    titleNode.textContent = options.title;
    bodyNode.replaceChildren();
    append(bodyNode, [typeof options.body === "string" ? el("p", null, options.body) : options.body]);
    confirmButton.textContent = options.confirmLabel || "Confirm";
    cancelButton.textContent = options.cancelLabel || "Cancel";
    confirmButton.className = "button button--" + (options.tone || "primary");

    ackInput.checked = false;
    if (options.acknowledge) {
      ack.hidden = false;
      ackText.textContent = options.acknowledge;
      confirmButton.disabled = true;
    } else {
      ack.hidden = true;
      confirmButton.disabled = false;
    }
    function onAck() {
      confirmButton.disabled = !ackInput.checked;
    }
    ackInput.addEventListener("change", onAck);

    return new Promise(function (resolve) {
      function onClose() {
        dialog.removeEventListener("close", onClose);
        ackInput.removeEventListener("change", onAck);
        resolve(dialog.returnValue === "confirm");
        if (opener && typeof opener.focus === "function" && document.contains(opener)) {
          opener.focus();
        }
      }
      dialog.addEventListener("close", onClose);
      dialog.returnValue = "";
      dialog.showModal();
      cancelButton.focus();
    });
  }

  /* ---------- Clipboard ---------- */

  function legacyCopy(text) {
    const area = el("textarea", { readonly: true, "aria-hidden": "true", style: { position: "fixed", top: "-1000px", opacity: "0" } });
    area.value = text;
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    area.remove();
    return ok;
  }

  /** Copies text; uses the Clipboard API where allowed and an older method otherwise. */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        if (!legacyCopy(text)) throw new Error("Copy failed");
      });
    }
    return legacyCopy(text) ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
  }

  function copyButton(getText, label) {
    const button = el("button", { type: "button", class: "button button--ghost button--small" }, icon("copy", "icon--sm"), el("span", null, label || "Copy"));
    button.addEventListener("click", function () {
      copyText(getText()).then(
        function () {
          toast("Copied to the clipboard.", "info");
        },
        function () {
          toast("Your browser blocked copying. Select the text and press Ctrl+C instead.", "warning");
        }
      );
    });
    return button;
  }

  /* ---------- Completion control (project brief and self-check pages) ---------- */

  /**
   * Status line + "Mark as completed" / "Mark as not completed" button.
   * Asks first when progress.shouldConfirmCompletion() says so, and always
   * before un-completing. Announces the result in a toast.
   */
  function completionControl(project) {
    const progress = HCM.progress;
    const number = project.number;
    const done = progress.isComplete(number);
    const check = progress.tickStats(number);

    const button = el(
      "button",
      { type: "button", class: "button " + (done ? "button--secondary" : "button--primary"), "data-focus-key": "complete-" + number },
      icon(done ? "reset" : "check"),
      done ? "Mark as not completed" : "Mark as completed"
    );

    button.addEventListener("click", function () {
      const isDone = progress.isComplete(number);
      let ask = Promise.resolve(true);
      if (isDone) {
        ask = confirmDialog({
          title: "Mark project " + number + " as not completed?",
          body: [
            el("p", null, "\"" + project.title + "\" will move back to your list of projects to do."),
            el("p", null, "Its completion date (" + formatDate(progress.completedAt(number)) + ") is removed. Your self-check ticks are kept.")
          ],
          confirmLabel: "Mark as not completed"
        });
      } else {
        const rule = progress.shouldConfirmCompletion(number);
        if (rule.confirm) {
          ask = confirmDialog({
            title: "Mark project " + number + " as completed?",
            body: [
              el("p", null, "You've ticked " + rule.ticked + " of " + rule.total + " self-check items for \"" + project.title + "\"."),
              el("p", null, "You can mark it as completed anyway, or finish the self-check first.")
            ],
            confirmLabel: "Mark as completed",
            cancelLabel: "Not yet"
          });
        }
      }
      ask.then(function (ok) {
        if (!ok) {
          return;
        }
        const nowDone = !isDone;
        progress.setComplete(number, nowDone);
        const stats = progress.stats();
        if (nowDone) {
          toast("Project " + number + " marked as completed — " + stats.completed + " of " + stats.total + " done (" + stats.percent + "%).");
        } else {
          toast("Project " + number + " marked as not completed. " + stats.completed + " of " + stats.total + " done.", "info");
        }
      });
    });

    const statusText = done
      ? el("p", { class: "mb-0" }, icon("done"), " ", el("strong", null, "Completed"), " on " + formatDate(progress.completedAt(number)) + ".")
      : el(
          "p",
          { class: "mb-0" },
          check.all
            ? "Every self-check item is ticked — ready to mark as completed."
            : "Not completed yet. Tick the self-check items first, or mark it completed anyway."
        );

    return el("div", { class: "completion-control stack" }, statusText, el("div", { class: "button-row" }, button));
  }

  HCM.ui = {
    completionControl: completionControl,
    el: el,
    append: append,
    icon: icon,
    richText: richText,
    swap: swap,
    pad3: pad3,
    formatMinutes: formatMinutes,
    formatDate: formatDate,
    plural: plural,
    levelBadge: levelBadge,
    complexity: complexity,
    statusBadge: statusBadge,
    statusIcon: statusIcon,
    meter: meter,
    topicChips: topicChips,
    projectCard: projectCard,
    updateProjectCard: updateProjectCard,
    breadcrumb: breadcrumb,
    pageHeader: pageHeader,
    backLinks: backLinks,
    emptyState: emptyState,
    callout: callout,
    toast: toast,
    confirm: confirmDialog,
    copyText: copyText,
    copyButton: copyButton
  };
})(window.HCM = window.HCM || {});
