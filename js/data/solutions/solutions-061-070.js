/*
 * Model solutions for projects 61–70 (core solutions: the hardest part of each project).
 */
HCM.solutions.register(61, {
  scope: "core",
  notes: [
    "Core: radio-driven tabs that keep native keyboard support (arrow keys move between tabs).",
    "`:has()` on the wrapper shows the matching panel, so the HTML order is flexible.",
    "Hidden panels use `display: none`, so screen readers skip them."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Product details – Trail Bottle</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Trail Bottle 750 ml</h1>
    <div class="tabs">
      <div class="tablist">
        <input class="vh" type="radio" name="tabs" id="tab-1" checked><label for="tab-1">Description</label>
        <input class="vh" type="radio" name="tabs" id="tab-2"><label for="tab-2">Specs</label>
        <input class="vh" type="radio" name="tabs" id="tab-3"><label for="tab-3">Reviews</label>
        <input class="vh" type="radio" name="tabs" id="tab-4"><label for="tab-4">Shipping</label>
      </div>
      <section class="panel panel-1"><h2>Description</h2><p>Keeps drinks cold for 24 hours and hot for 12.</p></section>
      <section class="panel panel-2"><h2>Specs</h2><p>750 ml · 380 g · Stainless steel.</p></section>
      <section class="panel panel-3"><h2>Reviews</h2><p>Rated 4.6 out of 5 by 128 customers.</p></section>
      <section class="panel panel-4"><h2>Shipping</h2><p>Free delivery over €40.</p></section>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
/*
  Why radios instead of ARIA tabs? Real ARIA tabs need JavaScript to manage focus
  and selection. Radios give us arrow-key navigation and a checked state for free,
  and screen readers announce them honestly as "radio button, 2 of 4".
*/
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
main { max-width: 44rem; margin: 0 auto; }

.tablist { display: flex; gap: 0.25rem; overflow-x: auto; border-bottom: 2px solid #e5e7eb; }
.tablist label { flex: none; padding: 0.75rem 1rem; border-bottom: 3px solid transparent; margin-bottom: -2px; cursor: pointer; color: #4b5563; }
.tablist input:checked + label { border-color: #0f766e; color: #0f766e; font-weight: 700; }
.tablist input:focus-visible + label { outline: 3px solid #0f766e; outline-offset: -3px; }

.panel { display: none; padding: 1rem 0; }
.panel h2 { margin-top: 0; font-size: 1.15rem; }
.tabs:has(#tab-1:checked) .panel-1,
.tabs:has(#tab-2:checked) .panel-2,
.tabs:has(#tab-3:checked) .panel-3,
.tabs:has(#tab-4:checked) .panel-4 { display: block; animation: fade 0.2s ease; }

@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .panel { animation: none !important; } }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});

HCM.solutions.register(62, {
  scope: "core",
  notes: [
    "Core: an exclusive accordion with a rotating chevron and progressive height animation.",
    "Sharing `name=\"settings\"` means opening one panel closes the others.",
    "The height animation only runs where `interpolate-size` is supported; elsewhere panels open instantly."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Settings – Notebook</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="settings">
    <h1>Settings</h1>
    <details name="settings" open>
      <summary>Profile</summary>
      <div class="content"><label for="dn">Display name</label><input id="dn" value="Sam"></div>
    </details>
    <details name="settings">
      <summary>Notifications</summary>
      <div class="content"><label><input type="checkbox" checked> Email me a weekly summary</label></div>
    </details>
    <details name="settings">
      <summary>Privacy</summary>
      <div class="content"><label><input type="checkbox"> Show my profile publicly</label></div>
    </details>
    <details name="settings" class="danger">
      <summary>Danger zone</summary>
      <div class="content"><p><strong>Warning:</strong> deleting your account removes all notes permanently.</p><button type="button">Delete account</button></div>
    </details>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f9fafb; }
.settings { max-width: 40rem; margin: 0 auto; }

details { margin-bottom: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.75rem; background: #ffffff; }

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 0.75rem 1rem;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker { display: none; }
summary::after { content: ""; width: 0.6rem; height: 0.6rem; border-right: 2px solid currentColor; border-bottom: 2px solid currentColor; transform: rotate(45deg); transition: transform 0.2s ease; }
details[open] > summary::after { transform: rotate(225deg); }
summary:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; border-radius: 0.75rem; }

.content { padding: 0 1rem 1rem; }
.content input:not([type="checkbox"]) { display: block; width: 100%; min-height: 44px; margin-top: 0.25rem; padding: 0 0.75rem; border: 1px solid #6b7280; border-radius: 0.5rem; font: inherit; }

.danger { border-color: #dc2626; }
.danger summary { color: #b91c1c; }
.danger button { min-height: 44px; padding: 0 1rem; border: 0; border-radius: 0.5rem; background: #b91c1c; color: #ffffff; font: inherit; font-weight: 700; }

@supports (interpolate-size: allow-keywords) {
  :root { interpolate-size: allow-keywords; }
  details::details-content { height: 0; overflow: hidden; transition: height 0.3s ease, content-visibility 0.3s allow-discrete; }
  details[open]::details-content { height: auto; }
}

@media (prefers-reduced-motion: reduce) {
  summary::after { transition: none; }
  details::details-content { transition: none; }
}
` }
  ]
});

HCM.solutions.register(63, {
  scope: "core",
  notes: [
    "Core: variant alerts driven by one custom property, the toast stack and the badge.",
    "Only the error alert uses `role=\"alert\"`; toasts sit in a polite `role=\"status\"` region.",
    "The bell's accessible name includes the unread count."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Notifications – Component set</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Notification components</h1>
    <div class="alert alert--info"><strong>Info:</strong> Your export is being prepared.</div>
    <div class="alert alert--success"><strong>Success:</strong> Settings saved.</div>
    <div class="alert alert--warning"><strong>Warning:</strong> Your trial ends in 3 days.</div>
    <div class="alert alert--error" role="alert"><strong>Error:</strong> The payment didn't go through.</div>

    <button class="bell" type="button" aria-label="Notifications, 3 unread"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z M10 20a2 2 0 0 0 4 0"/></svg><span class="badge" aria-hidden="true">3</span></button>
  </main>
  <div class="toasts" role="status">
    <p class="toast" style="--i: 0">Draft saved</p>
    <p class="toast" style="--i: 1">Invite sent to Ana</p>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
main { max-width: 40rem; margin: 0 auto; }

.alert { --tone: #2563eb; margin-bottom: 0.75rem; padding: 0.75rem 1rem; border-left: 5px solid var(--tone); border-radius: 0.5rem; background: color-mix(in srgb, var(--tone) 10%, white); }
.alert--success { --tone: #15803d; }
.alert--warning { --tone: #b45309; }
.alert--error { --tone: #b91c1c; }

.bell { position: relative; width: 3rem; height: 3rem; border: 1px solid #d1d5db; border-radius: 50%; background: #ffffff; font-size: 1.3rem; cursor: pointer; animation: wiggle 0.6s ease 2; }
.bell:focus-visible { outline: 3px solid #2563eb; outline-offset: 2px; }
.bell { display: inline-grid; place-items: center; }
.bell svg { width: 1.4rem; height: 1.4rem; fill: none; stroke: #111827; stroke-width: 2; stroke-linejoin: round; }
.badge { position: absolute; top: -0.25rem; right: -0.25rem; min-width: 1.4rem; padding: 0 0.3rem; border-radius: 999px; background: #b91c1c; color: #ffffff; font-size: 0.75rem; font-weight: 800; line-height: 1.4rem; }

.toasts { position: fixed; right: 1rem; bottom: 1rem; z-index: 50; display: grid; gap: 0.5rem; }
.toast { position: relative; margin: 0; padding: 0.75rem 1rem 1rem; overflow: hidden; border-radius: 0.5rem; background: #111827; color: #ffffff; animation: slide-in 0.4s ease both; animation-delay: calc(var(--i) * 0.4s); }
.toast::after { content: ""; position: absolute; left: 0; bottom: 0; height: 4px; width: 100%; background: #5eead4; transform-origin: left; animation: shrink 5s linear both; animation-delay: calc(var(--i) * 0.4s); }

@keyframes slide-in { from { opacity: 0; transform: translateX(2rem); } to { opacity: 1; transform: none; } }
@keyframes shrink { to { transform: scaleX(0); } }
@keyframes wiggle { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(12deg); } 75% { transform: rotate(-12deg); } }

@media (max-width: 599px) { .toasts { left: 1rem; } }
@media (prefers-reduced-motion: reduce) { .bell, .toast, .toast::after { animation: none; } }
` }
  ]
});

HCM.solutions.register(64, {
  scope: "core",
  notes: [
    "Core: the overlapping avatar and the checkbox toggle switches.",
    "A negative top margin of half the avatar's height creates the overlap while keeping it in the flow.",
    "Switches are real checkboxes, so Space toggles them and their state is announced."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Profile – Sam Rivera</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="profile">
    <img class="cover" src="images/sample-landscape.svg" width="800" height="500" alt="">
    <div class="identity">
      <img class="avatar" src="images/sample-avatar.svg" width="128" height="128" alt="Sam Rivera">
      <h1>Sam Rivera</h1>
      <dl class="stats"><div><dt>Posts</dt><dd>48</dd></div><div><dt>Followers</dt><dd>1,204</dd></div><div><dt>Following</dt><dd>310</dd></div></dl>
    </div>
    <form class="settings">
      <h2>Settings</h2>
      <label class="switch-row"><span>Email notifications</span><input class="switch" type="checkbox" checked></label>
      <label class="switch-row"><span>Private profile</span><input class="switch" type="checkbox"></label>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f3f4f6; }
.profile { max-width: 56rem; margin: 0 auto; }

.cover { display: block; width: 100%; height: 12rem; object-fit: cover; }
.identity { padding: 0 1rem; text-align: center; }
.avatar { display: block; width: 8rem; height: 8rem; margin: -4rem auto 0; border: 4px solid #f3f4f6; border-radius: 50%; position: relative; }
.identity h1 { margin: 0.5rem 0; }

.stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 2rem; margin: 0; }
.stats div { display: flex; flex-direction: column-reverse; }
.stats dd { margin: 0; font-size: 1.3rem; font-weight: 800; }
.stats dt { color: #6b7280; font-size: 0.85rem; }

.settings { margin: 1.5rem 1rem; padding: 1.25rem; border-radius: 0.75rem; background: #ffffff; }
.switch-row { display: flex; justify-content: space-between; align-items: center; min-height: 48px; }

.switch {
  appearance: none;
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  margin: 0;
  border-radius: 999px;
  background: #9ca3af;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.switch::before {
  content: "";
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: #ffffff;
  transition: transform 0.2s ease;
}

.switch:checked { background: #0f766e; }
.switch:checked::before { transform: translateX(1.25rem); }
.switch:focus-visible { outline: 3px solid #0f766e; outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) { .switch, .switch::before { transition: none; } }
` }
  ]
});

HCM.solutions.register(65, {
  scope: "core",
  notes: [
    "Core: precise number presentation and native budget meters.",
    "`tabular-nums` plus right alignment lines amounts up digit by digit.",
    "Meters set `low`, `high` and `optimum`, so the browser warns when a budget is overspent."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>June spending – Pocket</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>June spending</h1>
    <div class="table-wrap">
      <table>
        <caption>Transactions</caption>
        <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col" class="num">Amount</th></tr></thead>
        <tbody>
          <tr><td><time datetime="2026-06-01">1 Jun</time></td><td>Salary</td><td class="num">+2,450.00</td></tr>
          <tr data-type="debit"><td><time datetime="2026-06-02">2 Jun</time></td><td>Groceries</td><td class="num">−84.30</td></tr>
          <tr data-type="debit"><td><time datetime="2026-06-03">3 Jun</time></td><td>Train pass</td><td class="num">−120.00</td></tr>
        </tbody>
        <tfoot><tr><th scope="row" colspan="2">Balance change</th><td class="num">+2,245.70</td></tr></tfoot>
      </table>
    </div>
    <h2>Budgets</h2>
    <div class="budget"><label for="b-food">Food: €184 of €250</label><meter id="b-food" min="0" max="250" low="200" high="240" optimum="100" value="184"></meter></div>
    <div class="budget"><label for="b-fun">Going out: €145 of €120</label><meter id="b-fun" min="0" max="120" low="90" high="110" optimum="40" value="120"></meter></div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
main { max-width: 48rem; margin: 0 auto; }

.table-wrap { overflow-x: auto; border-radius: 0.75rem; background: #ffffff; }
table { width: 100%; min-width: 26rem; border-collapse: collapse; }
caption { padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
th, td { padding: 0.6rem 1rem; border-top: 1px solid #e2e8f0; text-align: left; }
.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
tr[data-type="debit"] .num { color: #b91c1c; }
tfoot th, tfoot td { font-weight: 800; }

.budget { margin-bottom: 1rem; }
.budget label { display: block; font-weight: 600; }
meter { width: 100%; height: 1rem; }
meter::-webkit-meter-bar { border-radius: 999px; background: #e2e8f0; }
meter::-webkit-meter-optimum-value { background: #15803d; border-radius: 999px; }
meter::-webkit-meter-suboptimum-value { background: #b45309; border-radius: 999px; }
meter::-webkit-meter-even-less-good-value { background: #b91c1c; border-radius: 999px; }
meter::-moz-meter-bar { border-radius: 999px; }
` }
  ]
});

HCM.solutions.register(66, {
  scope: "core",
  notes: [
    "Core: row selection, sort indicators, the edit drawer and pagination.",
    "`tr:has(input:checked)` highlights a whole row when its checkbox is ticked.",
    "Sort arrows come from `aria-sort`, so the visual and the exposed state always agree."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Articles – Admin</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="admin">
    <h1>Articles</h1>
    <div class="toolbar"><button class="toolbar__bulk" type="button" disabled>Delete selected</button></div>
    <div class="table-wrap">
      <table class="data">
        <caption class="vh">All articles</caption>
        <thead><tr><th scope="col"><span class="vh">Select</span></th><th scope="col" aria-sort="ascending">Title</th><th scope="col" class="col-author">Author</th><th scope="col">Status</th><th scope="col"><span class="vh">Actions</span></th></tr></thead>
        <tbody>
          <tr><td><input type="checkbox" id="row-1"><label for="row-1" class="vh">Select 'Spring recipes'</label></td><td>Spring recipes</td><td class="col-author">Ana</td><td>Published</td><td><a href="#edit-1">Edit<span class="vh"> 'Spring recipes'</span></a></td></tr>
          <tr><td><input type="checkbox" id="row-2" checked><label for="row-2" class="vh">Select 'Grid basics'</label></td><td>Grid basics</td><td class="col-author">Tom</td><td>Draft</td><td><a href="#edit-2">Edit<span class="vh"> 'Grid basics'</span></a></td></tr>
        </tbody>
      </table>
    </div>
    <nav class="pager" aria-label="Pagination"><a href="page-1.html" aria-current="page">1</a><a href="page-2.html">2</a><a href="page-2.html">Next</a></nav>
    <aside id="edit-1" class="drawer" aria-label="Edit article"><a class="drawer__close" href="#">Close</a><h2>Edit 'Spring recipes'</h2><label for="t1">Title</label><input id="t1" value="Spring recipes"></aside>
    <aside id="edit-2" class="drawer" aria-label="Edit article"><a class="drawer__close" href="#">Close</a><h2>Edit 'Grid basics'</h2><label for="t2">Title</label><input id="t2" value="Grid basics"></aside>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
.admin { max-width: 64rem; margin: 0 auto; }

.toolbar { margin-bottom: 1rem; }
.toolbar__bulk { min-height: 40px; padding: 0 1rem; border: 0; border-radius: 0.5rem; background: #b91c1c; color: #ffffff; font: inherit; }
.toolbar__bulk:disabled { opacity: 0.5; cursor: not-allowed; }

.table-wrap { overflow-x: auto; border-radius: 0.75rem; background: #ffffff; }
.data { width: 100%; border-collapse: collapse; }
.data th, .data td { padding: 0.6rem 1rem; border-top: 1px solid #e2e8f0; text-align: left; }
.data tr:has(input:checked) { background: #e0f2fe; }
.data [aria-sort="ascending"]::after { content: " ▲"; }
.data [aria-sort="descending"]::after { content: " ▼"; }

.pager { display: flex; gap: 0.5rem; margin-top: 1rem; }
.pager a { padding: 0.4rem 0.8rem; border: 1px solid #cbd5e1; border-radius: 0.4rem; color: inherit; }
.pager [aria-current="page"] { background: #0f172a; color: #ffffff; }

.drawer { position: fixed; inset: 0 0 0 auto; z-index: 30; width: min(100%, 24rem); padding: 1.5rem; background: #ffffff; box-shadow: -20px 0 40px rgba(15, 23, 42, 0.2); transform: translateX(100%); visibility: hidden; transition: transform 0.25s ease, visibility 0.25s; }
.drawer:target { transform: none; visibility: visible; }
.drawer input { width: 100%; min-height: 44px; padding: 0 0.75rem; border: 1px solid #64748b; border-radius: 0.5rem; font: inherit; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 767px) { .col-author { display: none; } }
@media (prefers-reduced-motion: reduce) { .drawer { transition: none; } }
` }
  ]
});

HCM.solutions.register(67, {
  scope: "core",
  notes: [
    "Core: the three-column docs layout with independently sticky sidebars.",
    "`align-self: start` lets sidebars stick instead of stretching to the row height.",
    "Code lines are numbered with a CSS counter on per-line spans."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Installation – Kit docs</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="top"><p class="logo">Kit docs</p></header>
  <div class="docs">
    <nav class="side side--left" aria-label="Documentation"><ul><li><a href="intro.html">Introduction</a></li><li><a href="install.html" aria-current="page">Installation</a></li><li><a href="config.html">Configuration</a></li></ul></nav>
    <main class="article">
      <h1>Installation</h1>
      <h2 id="download">Download</h2>
      <p>Copy the kit folder into your project.</p>
      <div class="callout callout--note"><strong>Note:</strong> no build step is required.</div>
      <h2 id="link">Link the stylesheet</h2>
      <pre class="code"><code><span class="line">&lt;link rel="stylesheet" href="kit/kit.css"&gt;</span><span class="line">&lt;link rel="stylesheet" href="styles.css"&gt;</span></code></pre>
      <div class="callout callout--warning"><strong>Warning:</strong> load kit.css before your own styles.</div>
    </main>
    <nav class="side side--right" aria-label="On this page"><ul><li><a href="#download">Download</a></li><li><a href="#link">Link the stylesheet</a></li></ul></nav>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111827; }
.top { position: sticky; top: 0; z-index: 10; height: 3.5rem; padding: 0 1rem; display: flex; align-items: center; background: #ffffff; border-bottom: 1px solid #e5e7eb; }
.logo { margin: 0; font-weight: 800; }

.docs { display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 80rem; margin: 0 auto; padding: 1.5rem 1rem; }
.side ul { margin: 0; padding: 0; list-style: none; }
.side a { display: block; padding: 0.3rem 0; color: #374151; }
.side a[aria-current="page"] { color: #4f46e5; font-weight: 700; }
.side--right { display: none; }

.article { min-width: 0; }
.article h2 { scroll-margin-top: 4.5rem; }

.code { counter-reset: line; overflow-x: auto; padding: 1rem; border-radius: 0.5rem; background: #0f172a; color: #e2e8f0; }
.code .line { display: block; white-space: pre; }
.code .line::before { counter-increment: line; content: counter(line); display: inline-block; width: 2rem; margin-right: 1rem; text-align: right; color: #64748b; }

.callout { margin: 1rem 0; padding: 0.75rem 1rem; border-left: 4px solid; border-radius: 0.4rem; }
.callout--note { border-color: #2563eb; background: #eff6ff; }
.callout--warning { border-color: #b45309; background: #fffbeb; }

@media (min-width: 768px) {
  .docs { grid-template-columns: 14rem minmax(0, 1fr); }
  .side--left { position: sticky; top: 4.5rem; align-self: start; max-height: calc(100vh - 5rem); overflow: auto; }
}

@media (min-width: 1280px) {
  .docs { grid-template-columns: 16rem minmax(0, 1fr) 14rem; }
  .side--right { display: block; position: sticky; top: 4.5rem; align-self: start; max-height: calc(100vh - 5rem); overflow: auto; }
}
` }
  ]
});

HCM.solutions.register(68, {
  scope: "core",
  notes: [
    "Core: media grids that adapt to 1–4 images, the sticky tab bar and the follow button state.",
    "`:has(> :nth-child(n):last-child)` counts the images, so no extra classes are needed.",
    "`aria-pressed` exposes the follow state and drives its style."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Iris Moreno (@iris) – Profile</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="feed">
    <h1>Iris Moreno</h1>
    <button class="follow" type="button" aria-pressed="false">Follow</button>
    <button class="follow" type="button" aria-pressed="true">Following</button>
    <nav class="tabs" aria-label="Profile sections"><a href="posts.html" aria-current="page">Posts</a><a href="replies.html">Replies</a><a href="media.html">Media</a></nav>
    <article class="post"><p>Two from this morning.</p><time datetime="2026-06-02T08:15">2 h ago</time>
      <div class="media"><img src="images/sample-landscape.svg" width="800" height="500" alt="Misty ridge at dawn"><img src="images/sample-building.svg" width="600" height="450" alt="Farmhouse in morning light"></div>
    </article>
    <article class="post"><p>Studio day.</p><time datetime="2026-06-01T15:00">Yesterday</time>
      <div class="media"><img src="images/sample-avatar.svg" width="400" height="400" alt="Self-portrait"><img src="images/sample-product.svg" width="600" height="450" alt="Camera bottle prop"><img src="images/sample-dish.svg" width="600" height="450" alt="Lunch on the desk"></div>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
.feed { max-width: 38rem; margin: 0 auto; padding: 1rem; }

.follow { min-height: 40px; padding: 0 1.25rem; border: 2px solid #0f172a; border-radius: 999px; background: #0f172a; color: #ffffff; font: inherit; font-weight: 700; }
.follow[aria-pressed="true"] { background: #ffffff; color: #0f172a; }

.tabs { position: sticky; top: 0; z-index: 5; display: flex; margin: 1rem -1rem; background: #ffffff; border-bottom: 1px solid #e2e8f0; }
.tabs a { flex: 1; padding: 0.75rem; text-align: center; color: inherit; text-decoration: none; }
.tabs [aria-current="page"] { font-weight: 800; box-shadow: inset 0 -3px 0 #0f766e; }

.post { padding: 1rem 0; border-bottom: 1px solid #e2e8f0; }
.post p { margin: 0 0 0.25rem; }
.post time { font-size: 0.85rem; color: #64748b; }

.media { display: grid; gap: 4px; margin-top: 0.75rem; border-radius: 1rem; overflow: hidden; }
.media img { display: block; width: 100%; height: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.media:has(> :nth-child(2):last-child) { grid-template-columns: 1fr 1fr; }
.media:has(> :nth-child(2):last-child) img { aspect-ratio: 1; }
.media:has(> :nth-child(3):last-child) { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
.media:has(> :nth-child(3):last-child) img:first-child { grid-row: span 2; aspect-ratio: auto; }
.media:has(> :nth-child(3):last-child) img:not(:first-child) { aspect-ratio: 4 / 3; }
.media:has(> :nth-child(4):last-child) { grid-template-columns: 1fr 1fr; }
.media:has(> :nth-child(4):last-child) img { aspect-ratio: 4 / 3; }
` }
  ]
});

HCM.solutions.register(69, {
  scope: "core",
  notes: [
    "Core: facets with counts, removable chips and highlighted matches.",
    "The facet panel uses `<details open>`; its summary is only shown below 900px.",
    "`overflow-wrap: anywhere` stops long result URLs breaking the layout."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Search results for "grid layout" – Library</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="search-page">
    <form role="search" action="search.html"><label for="q">Search the library</label><input id="q" name="q" value="grid layout"></form>
    <p class="count">128 results for "grid layout"</p>
    <ul class="chips"><li>PDF <a href="search.html?q=grid+layout">Remove filter: PDF</a></li></ul>
    <div class="layout">
      <details class="facets" open>
        <summary>Filters (1 active)</summary>
        <fieldset><legend>Type</legend>
          <label class="facet"><input type="checkbox" checked> PDF <span class="facet__count">42</span></label>
          <label class="facet"><input type="checkbox"> Article <span class="facet__count">71</span></label>
          <label class="facet"><input type="checkbox"> Video <span class="facet__count">15</span></label>
        </fieldset>
      </details>
      <ol class="results">
        <li><article><h2><a href="docs/grid-guide.html">A practical guide to <mark>grid layout</mark></a></h2><p class="url">library.example/docs/a-practical-guide-to-css-grid-layout-for-editorial-websites</p><p>Learn how <mark>grid</mark> tracks and areas build magazine pages.</p></article></li>
        <li><article><h2><a href="docs/subgrid.html">Subgrid and aligned cards</a></h2><p class="url">library.example/docs/subgrid</p><p>Aligning card rows with a shared <mark>grid</mark>.</p></article></li>
      </ol>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
.search-page { max-width: 64rem; margin: 0 auto; }

form[role="search"] label { display: block; font-weight: 700; }
#q { width: 100%; min-height: 44px; padding: 0 0.75rem; border: 1px solid #6b7280; border-radius: 0.5rem; font: inherit; }
.count { font-weight: 600; }

.chips { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; list-style: none; }
.chips li { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0.75rem; border-radius: 999px; background: #e0e7ff; }
.chips a { font-size: 0; color: #3730a3; }
.chips a::before { content: "×"; font-size: 1.2rem; }

.layout { display: grid; gap: 1.5rem; }
.facets fieldset { border: 0; padding: 0; }
.facet { display: flex; align-items: center; gap: 0.5rem; min-height: 40px; }
.facet__count { margin-left: auto; font-variant-numeric: tabular-nums; color: #4b5563; }

.results { margin: 0; padding: 0; list-style: none; }
.results h2 { margin: 0; font-size: 1.1rem; }
.url { margin: 0; font-size: 0.85rem; color: #15803d; overflow-wrap: anywhere; }
mark { background: #fde68a; color: #111827; }

@media (min-width: 900px) {
  .layout { grid-template-columns: 15rem 1fr; }
  .facets > summary { display: none; }
}
` }
  ]
});

HCM.solutions.register(70, {
  scope: "core",
  notes: [
    "Core: the list-and-map split view and the listing card with ribbon and facts.",
    "The map column is sticky and viewport-tall, so it stays in view as the list scrolls.",
    "The rotated ribbon is clipped by the card's `overflow: hidden`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Homes for sale in Porto – Doorstep</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="split">
    <section class="list" aria-labelledby="list-title">
      <h1 id="list-title">Homes for sale in Porto</h1>
      <article class="listing">
        <div class="listing__media"><img src="images/sample-building.svg" width="600" height="450" alt="White house with red roof"><p class="price">€385,000</p><p class="ribbon">For sale</p></div>
        <h2>Rua das Flores 12</h2>
        <dl class="facts"><div><dt>Bedrooms</dt><dd>3</dd></div><div><dt>Bathrooms</dt><dd>2</dd></div><div><dt>Area</dt><dd>120 m²</dd></div></dl>
      </article>
      <article class="listing">
        <div class="listing__media"><img src="images/sample-building.svg" width="600" height="450" alt="Cottage near a tree"><p class="price">€240,000</p><p class="ribbon ribbon--sold">Sold</p></div>
        <h2>Travessa do Sol 4</h2>
        <dl class="facts"><div><dt>Bedrooms</dt><dd>2</dd></div><div><dt>Bathrooms</dt><dd>1</dd></div><div><dt>Area</dt><dd>78 m²</dd></div></dl>
      </article>
    </section>
    <div class="map" role="img" aria-label="Map placeholder showing listing locations">Map</div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
.split { display: grid; }
.map { order: -1; display: grid; place-items: center; height: 14rem; background: repeating-linear-gradient(45deg, #e2e8f0 0 10px, #f1f5f9 10px 20px); font-weight: 800; color: #475569; }
.list { padding: 1rem; display: grid; gap: 1rem; align-content: start; }
.list h1 { margin: 0; font-size: 1.5rem; }

.listing { position: relative; overflow: hidden; border: 1px solid #e2e8f0; border-radius: 0.75rem; }
.listing__media { position: relative; }
.listing__media img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; }
.price { position: absolute; left: 0.75rem; bottom: 0.75rem; margin: 0; padding: 0.2rem 0.6rem; border-radius: 0.4rem; background: rgba(15, 23, 42, 0.85); color: #ffffff; font-weight: 800; }
.ribbon { position: absolute; top: 1rem; right: -2.5rem; width: 10rem; margin: 0; padding: 0.25rem 0; background: #0f766e; color: #ffffff; text-align: center; font-weight: 700; transform: rotate(45deg); }
.ribbon--sold { background: #b91c1c; }
.listing h2 { margin: 0.75rem 1rem 0; font-size: 1.1rem; }

.facts { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; margin: 0.5rem 1rem 1rem; }
.facts div { display: flex; flex-direction: column-reverse; }
.facts dt { font-size: 0.8rem; color: #64748b; }
.facts dd { margin: 0; font-weight: 800; }

@media (min-width: 1024px) {
  .split { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .map { order: 0; position: sticky; top: 0; height: 100vh; }
}
` }
  ]
});
