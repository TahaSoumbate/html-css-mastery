# HTML & CSS Mastery: 100 Practice Projects

A practice platform for people who already know the basics of HTML and CSS. It gives you 100 projects to build yourself in VS Code, from a single profile card to complete multi-page websites. For each project you get a brief with step-by-step instructions, measurable requirements, hints, a self-check correction and a model solution. Your progress is tracked as you go.

It is not a tutorial site or an online editor. You write all the code on your own computer. The site tells you what to build and helps you check it.

Everything runs offline. Nothing is downloaded from the internet and there is no account.

## Open the site

Double-click `index.html` to open the website in your browser.

## What's in the folder

```
html-css-mastery/
├── index.html            the website (open this)
├── README.md             this guide
├── css/styles.css        all styling, including light and dark themes
├── assets/images/        icon and sample images used by the model solutions
└── js/
    ├── data/             project briefs, corrections, levels, topics, model solutions
    ├── pages/            one file per page of the site
    └── *.js              site behaviour (storage, progress, theme, navigation)
```

Built with HTML, CSS and plain JavaScript only. No frameworks, libraries, fonts or build tools.

## Find a project to build

- **Dashboard** shows your next recommended project. **Continue learning** always opens the first project, in number order, that you haven't completed.
- **Project Library** lists all 100 projects. You can:
  - search by title, skill, topic or number (type `42` or `#42`)
  - filter by difficulty, HTML topic, CSS topic and status, all at the same time
  - sort by number or by difficulty
  - press **Clear filters** to start over

  The library remembers your filters until you clear them.
- **Learning Path** shows the four levels in order: Beginner (1–25), Intermediate (26–50), Advanced (51–75) and Mastery (76–100). Each level lists its objectives, key skills and projects. Nothing is locked — open any project whenever you like.
- **Topic Index** lists 44 HTML and CSS topics. Each one shows a short summary and the projects that practise it. Select **See all … in the library** to show those projects in the Project Library.

## Work on a project

1. Open the project's brief. It shows the objective, a suggested folder name, the steps, the HTML and CSS you must use, and the requirements.
2. Create the folder on your computer (the **Copy folder name** button copies the name). Then add `index.html` and `styles.css` to it.
3. Build the project in VS Code, then open your `index.html` in a browser. Test it at a phone width (about 360px) and a desktop width.
4. Stuck? Open the hints one at a time. They point you in a direction without giving the answer away.
5. Select **Go to the self-check** when you're done.

## Check your work

Each project has a **Self-Check** page with:

- what a correct solution contains, in HTML and in CSS
- a checklist of functional, responsive and accessibility checks — each one says what to do and what you should see
- common mistakes for that project, each with a fix
- a model solution

The self-check page shows the expected answers, so build the project before you open it. Your ticks are saved as you go. **Clear my ticks** removes them for that project.

The model solution stays closed until you select **Show the model solution**. For projects 1–50 it's a complete solution. For the larger projects, 51–100, it covers the hardest part of the project. **Show a live preview** renders it on the page; links between pages don't work inside the preview.

## Mark a project as completed

Select **Mark as completed** on the project's brief or on its self-check page.

- If you haven't ticked every self-check item, the site asks you to confirm first.
- To undo it, select **Mark as not completed**. This removes the completion date but keeps your ticks.

The dashboard, the progress bars and the project cards update straight away, and a short message confirms the change.

## Track your progress

**Progress Tracker** shows:

- projects completed and remaining, and your overall percentage (completed ÷ 100)
- progress for each level and for each topic
- your daily practice over the last 35 days, and your current streak
- every completed project with its date

The **Today's practice** checklist on the dashboard starts fresh every day at midnight (your computer's time). Clearing it never affects project progress, and a day counts as a practice day when you tick a task or complete a project.

## Where your progress is saved

Progress is saved in your browser on this computer only. It stays there when you close and reopen the browser. It does not follow you to another browser or computer — use a backup for that.

You'll lose your progress if you:

- use a private or incognito window (the site shows a notice, and progress lasts only until you close the window)
- clear your browser's site data
- open the site in a different browser

If saved data becomes damaged, the site sets it aside, starts fresh and tells you on screen.

## Back up your progress

1. Open **Progress Tracker**.
2. Select **Export progress**. Your browser saves a file named like `html-css-mastery-progress-2026-10-31.json`.

To restore it, select **Import progress** and choose the file. The site shows what the backup contains and asks before it replaces anything. If the file isn't a valid backup, nothing changes.

## Reset your progress

> **Warning:** resetting can't be undone. Export a backup first if you might want your progress back.

1. Open **Progress Tracker** and select **Reset progress**.
2. Read the list of what will be deleted, tick **I understand this can't be undone**, then select **Reset progress** in the dialog.

Reset deletes project completion, self-check ticks and practice history. It keeps your theme, your library filters, your sidebar setting and today's checklist. It never touches data from other websites.

## Change the look

- **Theme:** the button in the top-right corner switches between light and dark. Until you choose, the site follows your system's setting.
- **Sidebar:** on tablets and desktops, the button in the top-left corner collapses the sidebar to icons. The site remembers your choice.
- **Motion:** if your system is set to reduce motion, animations and transitions are turned off.

## Browser support

Tested in Google Chrome and Microsoft Edge on Windows 11. Firefox and Safari have not been tested.

Use an up-to-date browser. JavaScript must be on — if it's off, the page tells you.

In Chrome and Edge, every page you open from your disk shares one storage area. This site only reads and writes its own entries, which all start with `htmlCssMastery_`.

## Edit or add project definitions

All project content lives in `js/data/`. Open the files in VS Code, edit, save, then reload the site.

| File | Contains |
|---|---|
| `projects-1-beginner.js` … `projects-4-mastery.js` | project briefs, 25 per file |
| `corrections-1-beginner.js` … `corrections-4-mastery.js` | the self-check for each project, keyed by project number |
| `solutions/solutions-001-010.js` … `solutions-091-100.js` | model solutions, 10 per file |
| `levels.js` | the four levels and their number ranges |
| `topics.js` | the Topic Index |
| `site.js` | the daily checklist tasks and the dashboard's motivational lines |

### Rules the site checks

The site checks the data every time it opens. If something is wrong, a notice at the top lists the problems, and the browser console (F12) shows all of them.

- There must be exactly 100 projects, numbered 1 to 100, with no gaps or duplicates.
- A project's `difficulty` must match the level its number belongs to (for example, 26–50 is `intermediate`).
- Each brief needs every field below, with 3–5 steps and at least 2 hints.
- Each correction needs `expectedHtml` and `expectedCss`, 5–10 checks in total (at least one in each group), and at least 3 common mistakes, each with `mistake` and `fix` text.
- Every topic in a brief must be an `id` from `topics.js`.

### Brief fields

| Field | Example |
|---|---|
| `id` | `"p018-newsletter-subscription-form"` — also gives the suggested folder name |
| `number` | `18` |
| `title` | `"Newsletter Subscription Form"` |
| `difficulty` | `"beginner"`, `"intermediate"`, `"advanced"` or `"mastery"` |
| `complexity` | `1`, `2` or `3` — how demanding it is within its level |
| `shortDescription`, `objective` | one sentence each |
| `skills`, `topics` | lists of text; topics are ids from `topics.js` |
| `estimatedMinutes` | `60` |
| `requiredHtml`, `requiredCss` | lists of text |
| `steps` | 3–5 concrete tasks |
| `functionalRequirements`, `responsiveRequirements`, `accessibilityRequirements` | lists of measurable requirements |
| `hints` | 2 or more |

Put code between backticks inside the text, like `` "Use a `<label>` for every input" ``, and it appears as code on the site. Inside a JavaScript string, write a double quote as `\"`.

### Correction fields

```js
18: {
  expectedHtml: ["`<label for=\"email\">` paired with the email input."],
  expectedCss: ["`:focus-visible` outline on the input and button."],
  checks: {
    functional: ["Submit with the field empty: the browser shows a message."],
    responsive: ["At 360px: no horizontal scrollbar."],
    accessibility: ["Press Tab: every control shows a focus outline."]
  },
  commonMistakes: [
    { mistake: "Placeholder text used as the only label.", fix: "Keep a real `<label>`." }
  ]
}
```

Saved ticks are linked to each checklist item's exact text. If you reword an item, its tick resets; reordering items keeps them.

### Model solutions

Each solution file calls `HCM.solutions.register(number, { scope, notes, files })`, where `files` lists the HTML and CSS as text. A solution only loads when someone opens it, so a mistake in one solution file affects only the 10 solutions in that file. If a solution can't be shown, its panel explains why.
