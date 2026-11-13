/*
 * Model solutions for projects 91–100 (core solutions: the hardest part of each project).
 */
HCM.solutions.register(91, {
  scope: "core",
  notes: [
    "Core: the funnel visual and the cohort colour scale.",
    "Funnel widths come from `--value`; `clip-path` gives each step sloped sides.",
    "Cohort cells declare a solid fallback before the `color-mix()` scale."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Funnels – Metricly</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <h1>Sign-up funnel</h1>
    <ol class="funnel">
      <li style="--value: 100"><span>Visited pricing</span><strong>10,000</strong></li>
      <li style="--value: 62"><span>Started sign-up</span><strong>6,200 (62%)</strong></li>
      <li style="--value: 41"><span>Verified email</span><strong>4,100 (66%)</strong></li>
      <li style="--value: 18"><span>Created a project</span><strong>1,800 (44%)</strong></li>
    </ol>
    <div class="table-wrap">
      <table class="cohort">
        <caption>Weekly retention by sign-up cohort</caption>
        <thead><tr><th scope="col">Cohort</th><th scope="col">Week 1</th><th scope="col">Week 2</th><th scope="col">Week 3</th></tr></thead>
        <tbody>
          <tr><th scope="row">1 May</th><td style="--pct: 80">80%</td><td style="--pct: 52">52%</td><td style="--pct: 38">38%</td></tr>
          <tr><th scope="row">8 May</th><td style="--pct: 76">76%</td><td style="--pct: 47">47%</td><td style="--pct: 20">20%</td></tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
/*
  Naming: BEM-ish blocks (.funnel, .cohort), state via attributes,
  data passed in with custom properties (--value, --pct).
*/
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
.page { max-width: 60rem; margin: 0 auto; padding: 2rem 1rem; }

.funnel { display: grid; gap: 0.4rem; margin: 0 0 2rem; padding: 0; list-style: none; }
.funnel li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: calc(var(--value) * 1%);
  min-width: 15rem;
  margin-inline: auto;
  padding: 0.75rem 1.5rem;
  background: #4f46e5;
  color: #ffffff;
  clip-path: polygon(0 0, 100% 0, calc(100% - 0.75rem) 100%, 0.75rem 100%);
}

.table-wrap { overflow-x: auto; }
.cohort { width: 100%; min-width: 24rem; border-collapse: collapse; }
.cohort caption { text-align: left; font-weight: 700; padding-bottom: 0.5rem; }
.cohort th, .cohort td { padding: 0.6rem; border: 2px solid #ffffff; text-align: center; font-variant-numeric: tabular-nums; }
.cohort td {
  background: #c7d2fe;
  /* Capped at 60% of the accent so dark text keeps enough contrast. */
  background: color-mix(in srgb, #4f46e5 calc(var(--pct) * 0.6%), #ffffff);
}
` }
  ]
});

HCM.solutions.register(92, {
  scope: "core",
  notes: [
    "Core: one ambitious composition — overlapping image and headline plus a vertical title.",
    "Both items sit on shared lines of a 16-column grid; `z-index` keeps the text on top.",
    "Mobile has its own simple composition rather than leftover stacking."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tide Lines – Issue 4</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="spread">
      <p class="vertical" aria-hidden="true">Issue 4</p>
      <img class="spread__image" src="images/sample-landscape.svg" width="800" height="500" alt="Dark hills against an orange evening sky">
      <h1 class="spread__title">Where the land runs out</h1>
      <p class="spread__text">A photo essay from the far edge of the coast, where roads stop and the light takes over.</p>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, "Times New Roman", serif; color: #f5f5f4; background: #1c1917; }
img { display: block; width: 100%; height: 100%; object-fit: cover; }

.spread {
  display: grid;
  grid-template-columns: [full-start] 1rem [content-start] repeat(14, minmax(0, 1fr)) [content-end] 1rem [full-end];
  grid-template-rows: auto auto auto;
  row-gap: 1rem;
  padding-block: 2rem;
}

.vertical { grid-column: content-start / span 2; grid-row: 1; margin: 0; font-family: system-ui, sans-serif; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: #fb923c; }
.spread__image { grid-column: full; grid-row: 2; aspect-ratio: 4 / 3; }
.spread__title { grid-column: content; grid-row: 3; margin: 0; font-size: clamp(2.5rem, 9vw, 6rem); line-height: 0.95; }
.spread__text { grid-column: content; grid-row: 4; margin: 0; font-size: 1.15rem; max-width: 40ch; }

@media (min-width: 900px) {
  .spread { grid-template-rows: 4rem 18rem 10rem auto; row-gap: 0; }
  .vertical { grid-column: 2 / 3; grid-row: 1 / 4; writing-mode: vertical-rl; transform: rotate(180deg); align-self: end; }
  .spread__image { grid-column: 4 / 17; grid-row: 1 / 4; aspect-ratio: auto; }
  .spread__title { grid-column: 3 / 11; grid-row: 3 / 5; z-index: 1; align-self: start; text-shadow: 0 2px 20px rgba(0, 0, 0, 0.6); }
  .spread__text { grid-column: 11 / 16; grid-row: 4; padding-top: 1.5rem; }
}
` }
  ]
});

HCM.solutions.register(93, {
  scope: "core",
  notes: [
    "Core: the contact form with an error summary, plus focus, target-size and forced-colours support.",
    "Each error-summary link points at a field id, so activating it moves focus there.",
    "Outlines (not box shadows) are used for focus, because forced-colours mode keeps outlines."
  ],
  files: [
    { name: "contact.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Error: Contact us – Clearpath Consulting</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header"><a href="index.html">Clearpath</a><nav aria-label="Main"><a href="services.html">Services</a> <a href="contact.html" aria-current="page">Contact</a> <a href="accessibility.html">Accessibility</a></nav></header>
  <main id="main" class="page">
    <h1>Contact us</h1>
    <div class="error-summary" role="alert" aria-labelledby="error-title" tabindex="-1">
      <h2 id="error-title">There are 2 problems</h2>
      <ul><li><a href="#email">Enter an email address, like name@example.com</a></li><li><a href="#message">Enter a message</a></li></ul>
    </div>
    <form action="sent.html" method="post" novalidate>
      <div class="field"><label for="name">Name</label><input id="name" autocomplete="name" value="Sam"></div>
      <div class="field field--error"><label for="email">Email</label><p class="hint" id="email-hint">We'll only use this to reply.</p><p class="error" id="email-error">Enter an email address, like name@example.com</p><input id="email" type="email" autocomplete="email" aria-invalid="true" aria-describedby="email-hint email-error"></div>
      <div class="field field--error"><label for="message">Message</label><p class="error" id="message-error">Enter a message</p><textarea id="message" rows="5" aria-invalid="true" aria-describedby="message-error"></textarea></div>
      <button type="submit">Send message</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: 1.125rem; line-height: 1.6; color: #0b0c0c; background: #ffffff; }
a { color: #1d4ed8; }

.skip-link { position: absolute; left: 1rem; top: -5rem; padding: 0.75rem 1rem; background: #0b0c0c; color: #ffffff; }
.skip-link:focus { top: 1rem; }

.site-header { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; padding: 1rem; border-bottom: 1px solid #b1b4b6; }
.site-header nav a { display: inline-block; min-height: 44px; padding: 0.6rem 0.5rem; }
[aria-current="page"] { font-weight: 800; }

.page { max-width: 44rem; margin: 0 auto; padding: 2rem 1rem; }
.error-summary { margin-bottom: 2rem; padding: 1rem 1.25rem; border: 4px solid #b10e1e; }
.error-summary h2 { margin-top: 0; }
.error-summary a { color: #b10e1e; font-weight: 700; }

.field { margin-bottom: 1.5rem; }
.field--error { padding-left: 1rem; border-left: 4px solid #b10e1e; }
label { display: block; font-weight: 700; }
.hint { margin: 0; color: #505a5f; }
.error { margin: 0.25rem 0; color: #b10e1e; font-weight: 700; }
input, textarea, button { font: inherit; }
input, textarea { width: 100%; min-height: 44px; padding: 0.5rem; border: 2px solid #0b0c0c; }
.field--error input, .field--error textarea { border-color: #b10e1e; }
button { min-height: 44px; min-width: 44px; padding: 0.5rem 1.25rem; border: 2px solid transparent; background: #00703c; color: #ffffff; font-weight: 700; }

:focus-visible { outline: 3px solid #ffdd00; outline-offset: 0; box-shadow: 0 0 0 6px #0b0c0c; }

@media (forced-colors: active) {
  :focus-visible { outline: 3px solid CanvasText; box-shadow: none; }
  button { border-color: ButtonText; }
  .error-summary, .field--error { border-color: CanvasText; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
` }
  ]
});

HCM.solutions.register(94, {
  scope: "core",
  notes: [
    "Core: one token system with a `.theme-portal` context, plus progressive scroll-driven reveals.",
    "The portal overrides only tokens; the button and card components are shared.",
    "Reveals run only where `animation-timeline` is supported; elsewhere content is simply visible."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Studio Kite – Work and client portal</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="showcase">
      <h1>We make brands feel alive</h1>
      <article class="card reveal"><h2>Kite Coffee</h2><p>Identity and packaging.</p><a class="button" href="work/kite.html">View project</a></article>
      <article class="card reveal"><h2>North Line</h2><p>Website and campaign.</p><a class="button" href="work/north.html">View project</a></article>
    </section>
    <section class="theme-portal portal">
      <h2>Client portal</h2>
      <div class="portal__grid">
        <article class="card"><h3>Website relaunch</h3><label for="p1">Progress: 60%</label><progress id="p1" max="100" value="60">60%</progress><p>Status: In review</p></article>
        <article class="card"><h3>Brand refresh</h3><label for="p2">Progress: 25%</label><progress id="p2" max="100" value="25">25%</progress><p>Status: In progress</p></article>
        <article class="card"><h3>Messages</h3><p>2 unread</p><a class="button" href="portal/messages.html">Open messages</a></article>
      </div>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --color-bg: #fff7ed; --color-text: #1c1917; --color-accent: #ea580c; --color-surface: #ffffff;
  --space: 1.5rem; --radius: 1.25rem; --font-size-heading: clamp(2.5rem, 7vw, 5rem);
}

/* Portal context: denser and calmer, same components */
.theme-portal {
  --color-bg: #f8fafc; --color-accent: #4338ca; --space: 1rem; --radius: 0.6rem; --font-size-heading: 1.75rem;
  background: var(--color-bg);
}

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--color-text); background: var(--color-bg); }

.showcase, .portal { display: grid; gap: var(--space); padding: calc(var(--space) * 2) 1rem; }
.showcase h1, .portal > h2 { margin: 0; font-size: var(--font-size-heading); line-height: 1; }

.card { padding: var(--space); border-radius: var(--radius); background: var(--color-surface); }
.button { display: inline-block; padding: 0.6rem 1.2rem; border-radius: var(--radius); background: var(--color-accent); color: #ffffff; font-weight: 700; text-decoration: none; }
.button:focus-visible { outline: 3px solid var(--color-text); outline-offset: 3px; }
progress { width: 100%; accent-color: var(--color-accent); }

.portal__grid { display: grid; gap: var(--space); }
@media (min-width: 900px) { .portal__grid { grid-template-columns: repeat(3, 1fr); } }

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .reveal { animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% cover 30%; }
    @keyframes reveal { from { opacity: 0; transform: translateY(3rem) scale(0.96); } to { opacity: 1; transform: none; } }
  }
}
` }
  ]
});

HCM.solutions.register(95, {
  scope: "core",
  notes: [
    "Core: the component API pattern — zero-specificity bases, custom-property variants and layered utilities.",
    "Variants and sizes only change custom properties, so any combination works.",
    "A utility in the last layer beats a component without `!important`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Button API – Tide components</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="ref">
    <h1>Button</h1>
    <div class="row">
      <button class="btn" type="button">Primary</button>
      <button class="btn btn--danger" type="button">Delete</button>
      <button class="btn btn--danger btn--lg" type="button">Delete (large)</button>
      <button class="btn btn--sm u-full" type="button">Small, full width</button>
    </div>
    <div class="table-wrap">
      <table>
        <caption>Button API</caption>
        <thead><tr><th scope="col">Class or property</th><th scope="col">What it does</th></tr></thead>
        <tbody>
          <tr><td><code>.btn</code></td><td>Base button</td></tr>
          <tr><td><code>.btn--danger</code></td><td>Sets <code>--btn-bg</code> to the danger colour</td></tr>
          <tr><td><code>.btn--sm</code>, <code>.btn--lg</code></td><td>Change <code>--btn-pad</code> and <code>--btn-size</code></td></tr>
          <tr><td><code>--btn-bg</code>, <code>--btn-fg</code></td><td>Colours you can override per instance</td></tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
@layer tokens, base, components, variants, utilities;

@layer tokens {
  :root { --action: #0f766e; --danger: #b91c1c; --on-color: #ffffff; --radius: 0.5rem; }
}

@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
  .ref { max-width: 48rem; margin: 0 auto; }
  .row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem; }
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 0.5rem; border-bottom: 1px solid #e2e8f0; text-align: left; }
}

@layer components {
  :where(.btn) {
    --btn-bg: var(--action);
    --btn-fg: var(--on-color);
    --btn-pad: 0.6em 1.1em;
    --btn-size: 1rem;
    min-height: 44px;
    padding: var(--btn-pad);
    border: 2px solid transparent;
    border-radius: var(--radius);
    background: var(--btn-bg);
    color: var(--btn-fg);
    font: inherit;
    font-size: var(--btn-size);
    font-weight: 700;
    cursor: pointer;
  }
  :where(.btn):focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
}

@layer variants {
  :where(.btn--danger) { --btn-bg: var(--danger); }
  :where(.btn--sm) { --btn-pad: 0.35em 0.8em; --btn-size: 0.875rem; }
  :where(.btn--lg) { --btn-pad: 0.8em 1.5em; --btn-size: 1.15rem; }
}

@layer utilities {
  .u-full { width: 100%; }
}

@media (forced-colors: active) {
  .btn { border-color: ButtonText; }
}
` }
  ]
});

HCM.solutions.register(96, {
  scope: "core",
  notes: [
    "Core: the messages layout — conversation list and thread scroll independently on desktop.",
    "On small screens `:target` swaps the list for the chosen thread.",
    "Sent bubbles use `margin-inline-start: auto`, so they also work in right-to-left languages."
  ],
  files: [
    { name: "messages.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Messages – Swapshop</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="messages">
    <h1 class="vh">Messages</h1>
    <nav class="list" aria-label="Conversations">
      <ul>
        <li><a href="#thread-1">Ana Lopes — Vintage lamp</a></li>
        <li><a href="#thread-2">Tom Becker — Road bike</a></li>
      </ul>
    </nav>
    <section id="thread-1" class="thread" aria-label="Conversation with Ana Lopes">
      <a class="back" href="#">Back to conversations</a>
      <h2>Ana Lopes <span class="badge">Verified seller</span></h2>
      <ol class="bubbles">
        <li class="bubble"><p>Hi! Is the lamp still available?</p><p class="meta">You · <time datetime="2026-06-02T10:01">10:01</time></p></li>
        <li class="bubble bubble--sent"><p>Yes, it is. You can collect it on Saturday.</p><p class="meta">Ana · <time datetime="2026-06-02T10:05">10:05</time></p></li>
      </ol>
      <form class="reply" action="send.html" method="post"><label for="reply-1">Reply to Ana</label><textarea id="reply-1" rows="2"></textarea><button type="submit">Send</button></form>
    </section>
    <section id="thread-2" class="thread" aria-label="Conversation with Tom Becker">
      <a class="back" href="#">Back to conversations</a>
      <h2>Tom Becker</h2>
      <ol class="bubbles"><li class="bubble"><p>Does the bike come with lights?</p><p class="meta">You · <time datetime="2026-06-01T18:20">Yesterday</time></p></li></ol>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
a { color: #1d4ed8; }

.list ul { margin: 0; padding: 0; list-style: none; }
.list a { display: block; padding: 1rem; border-bottom: 1px solid #e5e7eb; color: inherit; text-decoration: none; }
.thread { display: none; padding: 1rem; }
.thread:target { display: block; }
.messages:has(.thread:target) .list { display: none; }

.badge { padding: 0.1rem 0.5rem; border-radius: 999px; background: #dcfce7; color: #166534; font-size: 0.75rem; }
.bubbles { display: grid; gap: 0.5rem; margin: 0; padding: 0; list-style: none; }
.bubble { max-inline-size: 75%; padding: 0.6rem 0.9rem; border-radius: 1rem; background: #f3f4f6; }
.bubble p { margin: 0; }
.bubble--sent { margin-inline-start: auto; background: #1d4ed8; color: #ffffff; }
.meta { font-size: 0.75rem; opacity: 0.8; }
.reply { display: grid; gap: 0.5rem; margin-top: 1rem; }
.reply textarea, .reply button { font: inherit; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 768px) {
  .messages { display: grid; grid-template-columns: 20rem 1fr; height: 100vh; }
  .list { overflow: auto; border-right: 1px solid #e5e7eb; }
  .messages:has(.thread:target) .list { display: block; }
  .thread { overflow: auto; }
  .thread:target { display: block; }
  .messages:not(:has(.thread:target)) #thread-1 { display: block; }
  .back { display: none; }
}
` }
  ]
});

HCM.solutions.register(97, {
  scope: "core",
  notes: [
    "Core: nested `<details>` navigation, the compact density switch and status indicators.",
    "Compact mode is one class on the shell that overrides spacing tokens.",
    "Statuses combine shape, colour and text so they never rely on colour alone."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>System health – Admin console</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="shell compact">
    <nav class="nav" aria-label="Admin">
      <label for="org">Organisation</label>
      <select id="org"><option>Harbour Group</option><option>North Ltd</option></select>
      <details><summary>People</summary><ul><li><a href="users.html">Users</a></li><li><a href="roles.html">Roles</a></li></ul></details>
      <details open><summary>Monitoring</summary><ul><li><a href="audit.html">Audit log</a></li><li><a href="health.html" aria-current="page">System health</a></li></ul></details>
    </nav>
    <main class="main">
      <h1>System health</h1>
      <ul class="services">
        <li class="status status--ok"><span>API</span><span>Operational</span></li>
        <li class="status status--degraded"><span>Search</span><span>Degraded</span></li>
        <li class="status status--outage"><span>Exports</span><span>Outage</span></li>
      </ul>
      <table>
        <caption>Audit log</caption>
        <thead><tr><th scope="col">Time</th><th scope="col">Actor</th><th scope="col">Action</th></tr></thead>
        <tbody><tr><td><time datetime="2026-06-02T09:14:22Z">09:14:22</time></td><td>j.diaz</td><td>Changed role of a.lopes to Admin</td></tr></tbody>
      </table>
    </main>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --space-1: 0.5rem; --space-2: 1rem; --space-3: 1.5rem; --font: 1rem; }
.compact { --space-1: 0.25rem; --space-2: 0.6rem; --space-3: 1rem; --font: 0.9rem; }

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
.shell { display: grid; font-size: var(--font); }

.nav { padding: var(--space-2); background: #111827; color: #f9fafb; }
.nav select { display: block; width: 100%; margin: var(--space-1) 0 var(--space-2); min-height: 40px; font: inherit; }
.nav details { margin-bottom: var(--space-1); }
.nav summary { padding: var(--space-1); font-weight: 700; cursor: pointer; }
.nav ul { margin: 0; padding: 0 0 0 var(--space-2); list-style: none; }
.nav a { display: block; padding: var(--space-1); color: #d1d5db; }
.nav [aria-current="page"] { color: #ffffff; font-weight: 700; background: #1f2937; }

.main { padding: var(--space-3); overflow-x: auto; }
.services { display: grid; gap: var(--space-1); margin: 0 0 var(--space-3); padding: 0; list-style: none; }
.status { display: flex; justify-content: space-between; padding: var(--space-1) var(--space-2); border: 1px solid #e5e7eb; border-radius: 0.4rem; }
.status span:last-child::before { margin-right: 0.4rem; }
.status--ok span:last-child::before { content: "●"; color: #15803d; }
.status--degraded span:last-child::before { content: "▲"; color: #b45309; }
.status--outage span:last-child::before { content: "■"; color: #b91c1c; }

table { width: 100%; border-collapse: collapse; }
caption { text-align: left; font-weight: 700; padding-bottom: var(--space-1); }
th, td { padding: var(--space-1) var(--space-2); border-bottom: 1px solid #e5e7eb; text-align: left; }

@media (min-width: 1024px) { .shell { grid-template-columns: 15rem 1fr; min-height: 100vh; } }
` }
  ]
});

HCM.solutions.register(98, {
  scope: "core",
  notes: [
    "Core: the settings page — a sticky section nav beside grouped forms from the shared system.",
    "The same `.field` and `.button` components are used across marketing and app pages.",
    "Below 1024px the section nav becomes a horizontal scroller above the forms."
  ],
  files: [
    { name: "settings.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Settings – Flowboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="app-header"><a href="index.html">Flowboard</a><a href="dashboard.html">Dashboard</a></header>
  <main class="settings">
    <h1>Settings</h1>
    <nav class="settings__nav" aria-label="Settings sections"><a href="#profile">Profile</a><a href="#notifications">Notifications</a><a href="#security">Security</a></nav>
    <div class="settings__forms">
      <form id="profile" class="panel"><h2>Profile</h2>
        <div class="field"><label for="n">Name</label><input id="n" autocomplete="name" value="Sam Rivera"></div>
        <div class="field"><label for="e">Email</label><input id="e" type="email" autocomplete="email" value="sam@example.com"></div>
        <button class="button" type="submit">Save profile</button>
      </form>
      <form id="notifications" class="panel"><h2>Notifications</h2>
        <label class="check"><input type="checkbox" checked> Weekly summary</label>
        <label class="check"><input type="checkbox"> Mentions only</label>
        <button class="button" type="submit">Save notifications</button>
      </form>
      <form id="security" class="panel"><h2>Security</h2>
        <div class="field"><label for="pw">New password</label><input id="pw" type="password" autocomplete="new-password" minlength="12"></div>
        <button class="button" type="submit">Change password</button>
      </form>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --accent: #6d28d9; --ink: #1e1b4b; --line: #ddd6fe; --space: 1rem; --radius: 0.6rem; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--ink); background: #faf5ff; }

.app-header { display: flex; justify-content: space-between; padding: var(--space); background: #ffffff; border-bottom: 1px solid var(--line); }
.app-header a { color: var(--ink); font-weight: 700; }

.settings { display: grid; gap: var(--space); max-width: 64rem; margin: 0 auto; padding: calc(var(--space) * 2) var(--space); }
.settings h1 { margin: 0; }
.settings__nav { display: flex; gap: 0.5rem; overflow-x: auto; }
.settings__nav a { flex: none; padding: 0.5rem 1rem; border-radius: 999px; background: #ede9fe; color: var(--ink); }
.settings__forms { display: grid; gap: var(--space); }

.panel { padding: calc(var(--space) * 1.5); border-radius: var(--radius); background: #ffffff; scroll-margin-top: var(--space); }
.panel h2 { margin-top: 0; }
.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: var(--space); }
.field label { font-weight: 700; }
.field input { min-height: 44px; padding: 0 0.75rem; border: 1px solid #6b7280; border-radius: var(--radius); font: inherit; }
.check { display: flex; gap: 0.5rem; align-items: center; min-height: 44px; }
.button { min-height: 44px; padding: 0 1.25rem; border: 0; border-radius: var(--radius); background: var(--accent); color: #ffffff; font: inherit; font-weight: 700; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

@media (min-width: 1024px) {
  .settings { grid-template-columns: 14rem 1fr; align-items: start; }
  .settings h1 { grid-column: 1 / -1; }
  .settings__nav { position: sticky; top: var(--space); flex-direction: column; overflow: visible; }
}
` }
  ]
});

HCM.solutions.register(99, {
  scope: "core",
  notes: [
    "Core: three commerce components (product card, price, rating) and a brand theme switch.",
    "The price component says \"Was\" and \"Now\" for screen readers and uses `<data>` for values.",
    "Brand B only changes tokens, so every component re-skins with no new CSS."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Commerce components – Storefront system</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="docs">
    <h1>Commerce components</h1>
    <div class="themes">
      <section aria-labelledby="brand-a"><h2 id="brand-a">Brand A</h2>
        <article class="product-card">
          <img src="images/sample-product.svg" width="600" height="450" alt="Teal water bottle">
          <h3 class="product-card__name">Trail Bottle</h3>
          <p class="rating"><span aria-hidden="true">★★★★☆</span> <span>4.2 out of 5</span></p>
          <p class="price"><del class="price__was"><span class="vh">Was </span><data value="30">€30</data></del> <ins class="price__now"><span class="vh">Now </span><data value="24">€24</data></ins></p>
        </article>
      </section>
      <section class="brand-b" aria-labelledby="brand-b"><h2 id="brand-b">Brand B</h2>
        <article class="product-card">
          <img src="images/sample-product.svg" width="600" height="450" alt="Teal water bottle">
          <h3 class="product-card__name">Trail Bottle</h3>
          <p class="rating"><span aria-hidden="true">★★★★☆</span> <span>4.2 out of 5</span></p>
          <p class="price"><del class="price__was"><span class="vh">Was </span><data value="30">€30</data></del> <ins class="price__now"><span class="vh">Now </span><data value="24">€24</data></ins></p>
        </article>
      </section>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
@layer tokens, base, components, utilities;

@layer tokens {
  :root {
    --font-display: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --color-text: #0f172a; --color-surface: #ffffff; --color-sale: #b91c1c; --color-rating: #b45309;
    --card-radius: 0.75rem; --card-pad: 1rem;
  }
  .brand-b {
    --font-display: Georgia, "Times New Roman", serif;
    --color-sale: #7c2d12; --color-rating: #4338ca;
    --card-radius: 0; --card-pad: 1.5rem;
  }
}

@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--color-text); background: #f1f5f9; }
  .docs { max-width: 56rem; margin: 0 auto; }
  .themes { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr)); }
}

@layer components {
  .product-card { padding: var(--card-pad); border-radius: var(--card-radius); background: var(--color-surface); }
  .product-card img { display: block; width: 100%; height: auto; border-radius: calc(var(--card-radius) / 2); }
  .product-card__name { margin: 0.75rem 0 0.25rem; font-family: var(--font-display); }
  .rating { margin: 0; color: var(--color-rating); }
  .price { margin: 0.5rem 0 0; }
  .price__was { color: #64748b; }
  .price__now { text-decoration: none; font-size: 1.4rem; font-weight: 800; color: var(--color-sale); }
}

@layer utilities {
  .vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
}
` }
  ]
});

HCM.solutions.register(100, {
  scope: "core",
  notes: [
    "Core: a production-ready starter for your capstone, with tokens, layers, page shell, 404 page and preference support.",
    "Fluid type and space scales mean no horizontal scroll from 320px to 2560px.",
    "Print, reduced-motion and forced-colours rules are in place before any page is built."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Larch & Co – Furniture made to last</title>
  <meta name="description" content="Handmade oak furniture from a small workshop in Bristol.">
  <meta property="og:title" content="Larch & Co – Furniture made to last">
  <meta property="og:description" content="Handmade oak furniture from a small workshop in Bristol.">
  <meta property="og:image" content="images/sample-building.svg">
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container cluster">
      <a class="logo" href="index.html">Larch &amp; Co</a>
      <nav aria-label="Main"><ul class="cluster"><li><a href="index.html" aria-current="page">Home</a></li><li><a href="collection.html">Collection</a></li><li><a href="workshop.html">Workshop</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero"><div class="container stack">
      <h1>Furniture made to last a lifetime</h1>
      <p>Solid oak, made by hand, delivered across the UK.</p>
      <a class="button" href="collection.html">Browse the collection</a>
    </div></section>
  </main>
  <footer class="site-footer"><div class="container"><p>© 2026 Larch &amp; Co · <a href="accessibility.html">Accessibility</a></p></div></footer>
</body>
</html>
` },
    { name: "404.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page not found – Larch & Co</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="main" class="container stack page-404">
    <h1>We can't find that page</h1>
    <p>It may have moved, or the link may have a typo.</p>
    <a class="button" href="index.html">Go to the home page</a>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
@layer reset, tokens, base, layout, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  body, h1, h2, h3, p, ul { margin: 0; }
  img { display: block; max-width: 100%; height: auto; }
}

@layer tokens {
  :root {
    --oak-900: #3b2a1a; --oak-600: #8a5a2b; --paper: #fbf8f3; --ink: #1f1a14; --white: #ffffff;
    --color-bg: var(--paper); --color-text: var(--ink); --color-accent: var(--oak-600); --color-focus: var(--oak-900);
    --step-0: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
    --step-1: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
    --step-4: clamp(2.2rem, 1.5rem + 3.5vw, 4rem);
    --space-s: clamp(0.75rem, 0.7rem + 0.3vw, 1rem);
    --space-m: clamp(1.5rem, 1.2rem + 1vw, 2.25rem);
    --space-l: clamp(3rem, 2.2rem + 3vw, 5rem);
  }
}

@layer base {
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: var(--step-0); line-height: 1.6; color: var(--color-text); background: var(--color-bg); }
  h1 { font-size: var(--step-4); line-height: 1.05; }
  a { color: var(--color-accent); }
  :focus-visible { outline: 3px solid var(--color-focus); outline-offset: 3px; }
}

@layer layout {
  .container { width: min(100% - 2 * var(--space-s), 72rem); margin-inline: auto; }
  .stack > * + * { margin-block-start: var(--space-s); }
  .cluster { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-s); }
}

@layer components {
  .skip-link { position: absolute; left: var(--space-s); top: -5rem; padding: 0.75rem 1rem; background: var(--color-text); color: var(--white); }
  .skip-link:focus { top: var(--space-s); }
  .site-header { padding-block: var(--space-s); border-bottom: 1px solid #e7dccb; }
  .site-header .cluster { justify-content: space-between; }
  .site-header ul { padding: 0; list-style: none; }
  .site-header a { display: inline-block; min-height: 44px; padding-block: 0.6rem; }
  [aria-current="page"] { font-weight: 800; }
  .logo { font-weight: 800; color: var(--color-text); text-decoration: none; }
  .hero { padding-block: var(--space-l); }
  .button { display: inline-block; padding: 0.75em 1.5em; border-radius: 0.4rem; background: var(--color-text); color: var(--white); font-weight: 700; text-decoration: none; }
  .site-footer { padding-block: var(--space-m); border-top: 1px solid #e7dccb; }
  .page-404 { padding-block: var(--space-l); }
}

@layer utilities {
  .visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
}

@media (forced-colors: active) {
  .button { border: 2px solid ButtonText; }
}

@media print {
  .site-header, .site-footer, .skip-link { display: none; }
  body { background: #ffffff; color: #000000; }
  a[href]::after { content: " (" attr(href) ")"; }
}
` }
  ]
});
