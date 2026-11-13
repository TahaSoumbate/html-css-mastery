/*
 * site.js — small site-wide settings
 * ----------------------------------
 * dailyTasks: the default daily practice checklist. Ticks are saved per day
 * and reset when the calendar date changes. Keep the ids stable: saved ticks
 * refer to them.
 * motivation: one line is shown on the dashboard, a different one each day.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};

HCM.data.site = {
  name: "HTML & CSS Mastery",
  tagline: "100 Practice Projects",
  dailyTasks: [
    { id: "open-vscode", label: "Open VS Code" },
    { id: "choose-project", label: "Choose a project" },
    { id: "read-requirements", label: "Read the requirements" },
    { id: "build-html", label: "Build the HTML structure" },
    { id: "write-css", label: "Write the CSS" },
    { id: "test-responsive", label: "Test the responsive layout" },
    { id: "self-check", label: "Complete the self-check" },
    { id: "save-work", label: "Save my work" }
  ],
  motivation: [
    "Every layout you build by hand is one you'll never need to look up again.",
    "Small, finished projects beat big, abandoned ones.",
    "Write the HTML first. Good structure makes the CSS easier.",
    "Test at 360 pixels before you call it done.",
    "Today's bug is tomorrow's instinct.",
    "One project at a time. One saved file at a time.",
    "Semantic HTML is a gift to everyone who reads your code later — including you.",
    "If it works with a keyboard, it works for more people.",
    "Aim for finished first. Then make it better.",
    "Most layout surprises are the box model. Check it first.",
    "Read the requirements twice. Build once.",
    "Progress is a habit, not a mood.",
    "You learn CSS by wrestling with it a little every day.",
    "Ship the page. Then polish it."
  ]
};
