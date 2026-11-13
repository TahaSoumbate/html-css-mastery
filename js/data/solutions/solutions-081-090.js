/*
 * Model solutions for projects 81–90 (core solutions: the hardest part of each project).
 */
HCM.solutions.register(81, {
  scope: "core",
  notes: [
    "Core: the emergency notice and the appointment form, built accessibility-first.",
    "Body text is 1.125rem with about 15:1 contrast; every target is at least 48px.",
    "Errors are written next to their fields and linked with `aria-describedby`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Request an appointment – Riverside Clinic</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <aside class="emergency" aria-label="Emergency">
    <p><strong>Medical emergency?</strong> Call <a href="tel:112">112</a> now. Do not use this form.</p>
  </aside>
  <a class="skip-link" href="#main">Skip to main content</a>
  <main id="main" class="page">
    <h1>Request an appointment</h1>
    <form action="requested.html" method="post">
      <fieldset>
        <legend>About you</legend>
        <div class="field"><label for="name">Full name</label><input id="name" autocomplete="name" required></div>
        <div class="field field--error">
          <label for="dob">Date of birth</label>
          <input id="dob" type="date" required aria-invalid="true" aria-describedby="dob-error">
          <p class="error" id="dob-error">Enter your date of birth, for example 14 March 1980.</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Your appointment</legend>
        <div class="field"><label for="reason">What do you need help with?</label><textarea id="reason" rows="4" required></textarea></div>
        <fieldset class="choices"><legend>Preferred time</legend>
          <label><input type="radio" name="time" value="morning" checked> Morning</label>
          <label><input type="radio" name="time" value="afternoon"> Afternoon</label>
        </fieldset>
      </fieldset>
      <button type="submit">Send request</button>
    </form>
    <h2>Patient resources</h2>
    <ul><li><a href="docs/patient-guide.pdf">Patient guide (PDF, 1.2 MB)</a></li></ul>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: 1.125rem; line-height: 1.6; color: #0b1f33; background: #ffffff; }
a { color: #0b4f8a; }

.emergency { padding: 1rem; background: #fde8e8; border-bottom: 3px solid #9b1c1c; }
.emergency p { max-width: 50rem; margin: 0 auto; }
.emergency a { font-weight: 800; color: #7f1515; }

.skip-link { position: absolute; left: 1rem; top: -5rem; padding: 0.75rem 1rem; background: #0b1f33; color: #ffffff; }
.skip-link:focus { top: 1rem; }

.page { max-width: 50rem; margin: 0 auto; padding: 2rem 1rem; }
fieldset { margin: 0 0 1.5rem; padding: 1.25rem; border: 2px solid #c9d6e3; border-radius: 0.75rem; }
legend { font-weight: 800; }
.choices { border: 0; padding: 0.5rem 0 0; display: flex; gap: 1.5rem; }
.choices label { display: flex; gap: 0.5rem; align-items: center; min-height: 48px; font-weight: 400; }

.field { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 1.25rem; }
label { font-weight: 700; }
input, textarea, button { font: inherit; }
input:not([type="radio"]), textarea { min-height: 48px; padding: 0.5rem 0.75rem; border: 2px solid #3b4f63; border-radius: 0.5rem; }
input[type="radio"] { width: 1.5rem; height: 1.5rem; accent-color: #0b4f8a; }

.field--error input { border-color: #9b1c1c; }
.error { margin: 0; color: #9b1c1c; font-weight: 600; }

button { min-height: 48px; padding: 0 1.5rem; border: 0; border-radius: 0.5rem; background: #0b4f8a; color: #ffffff; font-weight: 800; }
:focus-visible { outline: 4px solid #e8a317; outline-offset: 2px; }
` }
  ]
});

HCM.solutions.register(82, {
  scope: "core",
  notes: [
    "Core: the sticky snapping category nav, the basket and the delivery/pickup switch.",
    "On mobile the basket becomes a fixed bottom bar, and the page gets matching bottom padding.",
    "`:has(#pickup:checked)` removes the delivery fee line with no JavaScript."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Casa Verde – Order online</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="order">
    <main class="menu">
      <h1>Casa Verde</h1>
      <nav class="categories" aria-label="Menu categories"><a href="#starters">Starters</a><a href="#mains">Mains</a><a href="#desserts">Desserts</a><a href="#drinks">Drinks</a></nav>
      <section id="starters"><h2>Starters</h2><p>Tomato tart · €9</p><p>Soup of the day · €6</p></section>
      <section id="mains"><h2>Mains</h2><p>Garden risotto · €15</p><p>Grilled fish · €18</p></section>
      <section id="desserts"><h2>Desserts</h2><p>Lemon pudding · €7</p></section>
      <section id="drinks"><h2>Drinks</h2><p>Lemonade · €3</p></section>
    </main>
    <aside class="basket" aria-label="Your basket">
      <fieldset class="mode"><legend>Order type</legend>
        <label><input type="radio" name="mode" id="delivery" checked> Delivery</label>
        <label><input type="radio" name="mode" id="pickup"> Pickup</label>
      </fieldset>
      <dl class="lines"><dt>Tomato tart</dt><dd>€9.00</dd><dt class="fee">Delivery fee</dt><dd class="fee">€2.50</dd><dt>Total</dt><dd>€11.50</dd></dl>
      <a class="button" href="checkout.html">Checkout</a>
    </aside>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #14532d; background: #fefce8; }
.menu { padding: 1rem 1rem 9rem; }

.categories { position: sticky; top: 0; z-index: 5; display: flex; gap: 0.5rem; margin: 0 -1rem; padding: 0.5rem 1rem; overflow-x: auto; scroll-snap-type: x proximity; background: #fefce8; border-bottom: 1px solid #d9f99d; }
.categories a { flex: none; scroll-snap-align: start; padding: 0.5rem 1rem; border-radius: 999px; background: #dcfce7; color: inherit; text-decoration: none; font-weight: 700; }
section { scroll-margin-top: 4rem; padding: 1rem 0; }

.basket { position: fixed; left: 0; right: 0; bottom: 0; z-index: 10; padding: 1rem; background: #14532d; color: #ffffff; }
.mode { display: flex; gap: 1rem; margin: 0 0 0.5rem; padding: 0; border: 0; }
.mode legend { font-weight: 700; }
.lines { display: grid; grid-template-columns: 1fr auto; gap: 0.25rem 1rem; margin: 0 0 0.75rem; }
.lines dd { margin: 0; text-align: right; }
.button { display: block; padding: 0.75rem; border-radius: 0.5rem; background: #facc15; color: #14532d; text-align: center; font-weight: 800; text-decoration: none; }

.order:has(#pickup:checked) .fee { display: none; }
:focus-visible { outline: 3px solid #facc15; outline-offset: 2px; }

@media (min-width: 1024px) {
  .order { display: grid; grid-template-columns: 1fr 20rem; gap: 2rem; max-width: 76rem; margin: 0 auto; align-items: start; }
  .menu { padding-bottom: 2rem; }
  .basket { position: sticky; top: 1rem; left: auto; right: auto; bottom: auto; border-radius: 0.75rem; margin-top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(83, {
  scope: "core",
  notes: [
    "Core: the subgrid comparison and the print stylesheet for the trip summary.",
    "Each card spans five shared rows and uses `subgrid`, so matching rows line up across cards.",
    "Without subgrid support the cards simply stack, which is still readable."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Compare stays – Wayfarer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header"><a href="index.html">Wayfarer</a></header>
  <main class="page">
    <h1>Compare stays in Porto</h1>
    <div class="compare">
      <article class="stay"><h2>Rio Guesthouse</h2><p class="price">€95 / night</p><p>Rated 4.6 out of 5</p><p>Old town, 5 min to the river</p><ul><li>Breakfast</li><li>Wi-Fi</li></ul></article>
      <article class="stay"><h2>Azulejo Apartments</h2><p class="price">€120 / night</p><p>Rated 4.8 out of 5</p><p>Quiet street near the metro, 10 minutes from the centre</p><ul><li>Kitchen</li><li>Wi-Fi</li><li>Washing machine</li><li>Balcony</li></ul></article>
      <article class="stay"><h2>Harbour Hostel</h2><p class="price">€40 / night</p><p>Rated 4.2 out of 5</p><p>Riverside</p><ul><li>Shared kitchen</li></ul></article>
    </div>
    <p>Full details: <a href="stays/porto.html">stays/porto.html</a></p>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
.site-header { padding: 1rem; background: #0f172a; }
.site-header a { color: #ffffff; font-weight: 800; }
.page { max-width: 70rem; margin: 0 auto; padding: 2rem 1rem; }

.compare { display: grid; gap: 1rem; }
.stay { padding: 1.25rem; border-radius: 0.75rem; background: #ffffff; }
.stay h2 { margin: 0; font-size: 1.15rem; }
.stay p { margin: 0; }
.stay ul { margin: 0; padding-left: 1.2rem; }
.price { font-size: 1.4rem; font-weight: 800; }

@supports (grid-template-rows: subgrid) {
  @media (min-width: 900px) {
    .compare { grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(5, auto); column-gap: 1rem; row-gap: 0; }
    .stay { display: grid; grid-row: span 5; grid-template-rows: subgrid; row-gap: 0.75rem; }
  }
}

@media print {
  .site-header { display: none; }
  body { background: #ffffff; color: #000000; }
  .stay { break-inside: avoid; border: 1px solid #000000; }
  a[href]::after { content: " (" attr(href) ")"; }
}
` }
  ]
});

HCM.solutions.register(84, {
  scope: "core",
  notes: [
    "Core: the listing component and its compact modifier, plus the mortgage range inputs.",
    "The modifier changes layout only; colours, type and spacing come from the base class.",
    "Range inputs are styled for both WebKit and Firefox, with `<output>` showing example values."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Results – Doorstep</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="page">
    <h1>Homes in Porto</h1>
    <article class="listing"><img src="images/sample-building.svg" width="600" height="450" alt="Townhouse with red roof"><div class="listing__body"><h2>Rua das Flores 12</h2><p class="listing__price">€385,000</p><p>3 bedrooms · 2 bathrooms · 120 m²</p></div></article>
    <article class="listing listing--compact"><img src="images/sample-building.svg" width="600" height="450" alt="Small cottage"><div class="listing__body"><h2>Travessa do Sol 4</h2><p class="listing__price">€240,000</p><p>2 bedrooms · 78 m²</p></div></article>
    <form class="mortgage">
      <h2>Estimate your mortgage</h2>
      <label for="price">Price</label>
      <input id="price" type="range" min="100000" max="800000" step="5000" value="385000">
      <p class="range"><span>€100k</span><output for="price">€385,000</output><span>€800k</span></p>
      <label for="term">Term (years)</label>
      <input id="term" type="range" min="10" max="35" value="25">
      <p class="range"><span>10</span><output for="term">25 years</output><span>35</span></p>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
.page { display: grid; gap: 1.5rem; max-width: 48rem; margin: 0 auto; padding: 2rem 1rem; }

.listing { overflow: hidden; border: 1px solid #e2e8f0; border-radius: 0.75rem; background: #ffffff; }
.listing img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; object-fit: cover; }
.listing__body { padding: 1rem; }
.listing h2 { margin: 0; font-size: 1.1rem; }
.listing__price { margin: 0.25rem 0; font-size: 1.3rem; font-weight: 800; color: #0f766e; }
.listing p { margin-bottom: 0; }

.listing--compact { display: grid; grid-template-columns: 7rem 1fr; }
.listing--compact img { height: 100%; aspect-ratio: auto; }
.listing--compact .listing__price { font-size: 1rem; }

.mortgage { padding: 1.25rem; border-radius: 0.75rem; background: #f0fdfa; }
.mortgage label { display: block; margin-top: 1rem; font-weight: 700; }
.range { display: flex; justify-content: space-between; margin: 0.25rem 0 0; font-size: 0.9rem; }
output { font-weight: 800; }

input[type="range"] { width: 100%; height: 2rem; margin: 0; appearance: none; background: transparent; }
input[type="range"]::-webkit-slider-runnable-track { height: 0.5rem; border-radius: 999px; background: #99f6e4; }
input[type="range"]::-webkit-slider-thumb { appearance: none; width: 1.5rem; height: 1.5rem; margin-top: -0.5rem; border-radius: 50%; background: #0f766e; }
input[type="range"]::-moz-range-track { height: 0.5rem; border-radius: 999px; background: #99f6e4; }
input[type="range"]::-moz-range-thumb { width: 1.5rem; height: 1.5rem; border: 0; border-radius: 50%; background: #0f766e; }
input[type="range"]:focus-visible { outline: 3px solid #0f172a; outline-offset: 2px; }
` }
  ]
});

HCM.solutions.register(85, {
  scope: "core",
  notes: [
    "Core: the 12-column widget grid, an SVG sparkline and the `color-mix()` heatmap.",
    "Widgets are container-aware, so the KPI layout depends on the widget's own width.",
    "Every visual has a text alternative: an `aria-label` summary and a data table."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Operations – Control room</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="widgets">
    <h1 class="w-12">Operations</h1>
    <section class="widget w-4"><div class="kpi">
      <div><h2>Requests / min</h2><p class="value">12.4k</p><p class="change">▲ 8% vs last hour</p></div>
      <svg class="spark" viewBox="0 0 100 30" role="img" aria-label="Requests rising steadily over the last hour"><polyline points="0,25 15,22 30,24 45,18 60,15 75,12 100,6"/></svg>
    </div></section>
    <section class="widget w-8">
      <h2>Errors by hour (today)</h2>
      <div class="heatmap" aria-hidden="true">
        <span style="--level: 1"></span><span style="--level: 2"></span><span style="--level: 4"></span><span style="--level: 9"></span><span style="--level: 6"></span><span style="--level: 3"></span><span style="--level: 2"></span><span style="--level: 1"></span>
      </div>
      <table class="vh"><caption>Errors by hour</caption><tbody><tr><th scope="row">00–03</th><td>1</td></tr><tr><th scope="row">03–06</th><td>2</td></tr><tr><th scope="row">06–09</th><td>4</td></tr><tr><th scope="row">09–12</th><td>9</td></tr><tr><th scope="row">12–15</th><td>6</td></tr><tr><th scope="row">15–18</th><td>3</td></tr><tr><th scope="row">18–21</th><td>2</td></tr><tr><th scope="row">21–24</th><td>1</td></tr></tbody></table>
    </section>
    <section class="widget w-12">
      <h2>Service status</h2>
      <ul class="status"><li class="ok">● API — operational</li><li class="degraded">▲ Search — degraded</li><li class="outage">■ Exports — outage</li></ul>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --accent: #2563eb; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #e2e8f0; background: #0b1220; }

.widgets { display: grid; grid-template-columns: 1fr; gap: 1rem; max-width: 90rem; margin: 0 auto; padding: 1.5rem 1rem; }
.widget { container-type: inline-size; padding: 1rem; border-radius: 0.75rem; background: #111a2e; }
.widget h2 { margin: 0 0 0.5rem; font-size: 0.95rem; color: #94a3b8; }

.kpi { display: grid; gap: 0.5rem; }
.value { margin: 0; font-size: 2rem; font-weight: 800; }
.change { margin: 0; color: #4ade80; }
.spark { width: 100%; height: 3rem; }
.spark polyline { fill: none; stroke: #60a5fa; stroke-width: 2; stroke-linejoin: round; }
@container (min-width: 22rem) { .kpi { grid-template-columns: 1fr 1fr; align-items: center; } }

.heatmap { display: grid; grid-template-columns: repeat(8, minmax(1.5rem, 1fr)); gap: 3px; overflow-x: auto; }
.heatmap span { aspect-ratio: 1; border-radius: 3px; background: #1e3a8a; background: color-mix(in srgb, var(--accent) calc(var(--level) * 10%), #111a2e); }

.status { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; margin: 0; padding: 0; list-style: none; }
.ok { color: #4ade80; } .degraded { color: #fbbf24; } .outage { color: #f87171; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 700px) { .widgets { grid-template-columns: repeat(6, 1fr); } .w-4, .w-8, .w-12 { grid-column: span 6; } .w-4 { grid-column: span 3; } }
@media (min-width: 1100px) { .widgets { grid-template-columns: repeat(12, 1fr); } .w-4 { grid-column: span 4; } .w-8 { grid-column: span 8; } .w-12 { grid-column: span 12; } }
.w-12 { grid-column: 1 / -1; }
` }
  ]
});

HCM.solutions.register(86, {
  scope: "core",
  notes: [
    "Core: the token tiers and the four intrinsic layout primitives.",
    "The switcher flips from row to column when its container is narrower than 30rem — no media query.",
    "Layers keep utilities strongest without `!important`, and there are no ID selectors."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Layout primitives – Tide design system</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="stack docs">
    <h1>Layout primitives</h1>
    <section class="stack"><h2>Stack</h2><div class="stack demo"><p>One</p><p>Two</p><p>Three</p></div><p><strong>Use for:</strong> vertical rhythm between siblings.</p></section>
    <section class="stack"><h2>Cluster</h2><ul class="cluster demo"><li>Tag</li><li>Another tag</li><li>Third</li></ul></section>
    <section class="stack"><h2>Sidebar</h2><div class="with-sidebar demo"><div class="sidebar-part">Side</div><div class="main-part">Main content wraps below when space runs out.</div></div></section>
    <section class="stack"><h2>Switcher</h2><div class="switcher demo"><div>A</div><div>B</div><div>C</div></div></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
@layer reset, tokens, base, layout, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  body, h1, h2, p, ul { margin: 0; }
  ul { padding: 0; list-style: none; }
}

@layer tokens {
  :root {
    --blue-700: #1d4ed8; --slate-100: #f1f5f9; --slate-900: #0f172a;
    --color-text: var(--slate-900);
    --color-surface: var(--slate-100);
    --color-accent: var(--blue-700);
    --space-s: clamp(0.75rem, 0.7rem + 0.25vw, 1rem);
    --space-m: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
    --step-0: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
    --step-3: clamp(1.8rem, 1.4rem + 2vw, 2.6rem);
  }
}

@layer base {
  body { padding: var(--space-m); font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: var(--step-0); color: var(--color-text); }
  h1 { font-size: var(--step-3); }
}

@layer layout {
  .stack > * + * { margin-block-start: var(--space-s); }
  .cluster { display: flex; flex-wrap: wrap; gap: var(--space-s); align-items: center; }
  .with-sidebar { display: flex; flex-wrap: wrap; gap: var(--space-s); }
  .with-sidebar > .sidebar-part { flex-basis: 12rem; flex-grow: 1; }
  .with-sidebar > .main-part { flex-basis: 0; flex-grow: 999; min-inline-size: 55%; }
  .switcher { display: flex; flex-wrap: wrap; gap: var(--space-s); }
  .switcher > * { flex-grow: 1; flex-basis: calc((30rem - 100%) * 999); }
}

@layer components {
  .docs { max-inline-size: 60rem; margin-inline: auto; }
  .demo > *, .demo { padding: var(--space-s); border-radius: 0.5rem; background: var(--color-surface); }
  .demo > * { background: #ffffff; border: 1px solid #cbd5e1; }
}

@layer utilities {
  .u-accent { color: var(--color-accent); }
}
` }
  ]
});

HCM.solutions.register(87, {
  scope: "core",
  notes: [
    "Core: the front page with story weights, typographic roles and complete metadata.",
    "Role classes (kicker, headline sizes, standfirst) keep typography consistent across pages.",
    "Open Graph tags use `property`, not `name`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Long View – Ideas worth your time</title>
  <meta name="description" content="Long-form stories about cities, craft and the people who keep them going.">
  <meta property="og:title" content="The Long View">
  <meta property="og:description" content="Long-form stories about cities, craft and the people who keep them going.">
  <meta property="og:image" content="images/sample-landscape.svg">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="masthead"><a class="masthead__name" href="index.html">The Long View</a></header>
  <main class="front">
    <h1 class="vh">Front page</h1>
    <article class="story story--lead">
      <img src="images/sample-landscape.svg" width="800" height="500" alt="Lighthouse on a cliff at dusk">
      <p class="kicker">Long read</p>
      <h2 class="headline-xl"><a href="lighthouse.html">The last lighthouse keepers</a></h2>
      <p class="standfirst">Three people still climb 120 steps every night.</p>
      <p class="byline">Iris Moreno</p>
    </article>
    <article class="story story--secondary"><p class="kicker">Cities</p><h2 class="headline-m"><a href="gardens.html">A city of tiny gardens</a></h2><p class="byline">Tom Becker</p></article>
    <article class="story story--secondary"><p class="kicker">Craft</p><h2 class="headline-m"><a href="bread.html">The night bakers</a></h2><p class="byline">Ana Lopes</p></article>
    <section class="briefs" aria-labelledby="briefs-title"><h2 id="briefs-title" class="kicker">In brief</h2><ul><li><a href="brief-1.html">Night trains return to the north</a></li><li><a href="brief-2.html">Library opens on Sundays</a></li></ul></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --serif: Georgia, "Times New Roman", serif; --sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; --ink: #111111; --accent: #9a3412; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: var(--serif); color: var(--ink); background: #fbfaf7; }
img { display: block; width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
a:hover, a:focus-visible { text-decoration: underline; }

.masthead { padding: 1rem; text-align: center; border-bottom: 3px double var(--ink); }
.masthead__name { font-size: clamp(2rem, 7vw, 4rem); font-weight: 700; }

/* Typographic roles */
.kicker { margin: 0.75rem 0 0.25rem; font-family: var(--sans); font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); }
.headline-xl { margin: 0; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.05; }
.headline-m { margin: 0; font-size: 1.35rem; line-height: 1.2; }
.standfirst { margin: 0.5rem 0; font-size: 1.2rem; color: #44403c; }
.byline { margin: 0; font-family: var(--sans); font-size: 0.85rem; }

.front { display: grid; gap: 1.5rem; max-width: 80rem; margin: 0 auto; padding: 1.5rem 1rem; }
.story--secondary, .briefs { border-top: 1px solid #d6d3d1; padding-top: 0.75rem; }
.briefs ul { margin: 0; padding-left: 1rem; }

@media (min-width: 768px) {
  .front { grid-template-columns: 2fr 1fr; }
  .story--lead { grid-row: span 3; }
}
@media (min-width: 1200px) {
  .front { grid-template-columns: 1fr 2fr 1fr; }
  .story--lead { grid-column: 2; grid-row: 1 / span 3; }
}

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});

HCM.solutions.register(88, {
  scope: "core",
  notes: [
    "Core: colour choices recolour an inline SVG through custom properties set with `:has()`.",
    "Summary lines exist for every option and only the chosen ones are shown.",
    "A CSS counter adds up the extras' prices with no JavaScript."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Build your bike – Velo Nord</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <form class="config">
      <h1>Build your bike</h1>
      <figure class="preview">
        <svg class="bike" viewBox="0 0 200 120" role="img" aria-label="Bike preview in the selected colour">
          <circle class="wheel" cx="45" cy="85" r="28"/><circle class="wheel" cx="155" cy="85" r="28"/>
          <path class="frame" d="M45 85 L85 40 L140 40 L155 85 L100 85 Z M85 40 L100 85"/>
        </svg>
        <figcaption>Preview</figcaption>
      </figure>
      <fieldset><legend>Colour</legend>
        <label><input type="radio" name="colour" id="color-teal" checked> Teal</label>
        <label><input type="radio" name="colour" id="color-red"> Red</label>
        <label><input type="radio" name="colour" id="color-ink"> Ink</label>
      </fieldset>
      <fieldset><legend>Extras</legend>
        <label><input type="checkbox" id="x-lights" class="priced" style="--price: 40"> Lights (+€40)</label>
        <label><input type="checkbox" id="x-rack" class="priced" style="--price: 60"> Rack (+€60)</label>
      </fieldset>
      <aside class="summary" aria-labelledby="summary-title">
        <h2 id="summary-title">Your bike</h2>
        <ul>
          <li data-option="color-teal">Teal frame</li><li data-option="color-red">Red frame</li><li data-option="color-ink">Ink frame</li>
          <li data-option="x-lights">Lights</li><li data-option="x-rack">Rack</li>
        </ul>
        <p class="extras-total">Extras total: </p>
      </aside>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
.config { --frame: #0f766e; display: grid; gap: 1.25rem; max-width: 60rem; margin: 0 auto; counter-reset: extras; }

.config:has(#color-red:checked) { --frame: #b91c1c; }
.config:has(#color-ink:checked) { --frame: #1e293b; }

.preview { margin: 0; padding: 1rem; border-radius: 1rem; background: #f1f5f9; text-align: center; }
.bike { width: 100%; max-width: 24rem; }
.frame { fill: none; stroke: var(--frame); stroke-width: 6; stroke-linejoin: round; transition: stroke 0.3s ease; }
.wheel { fill: none; stroke: #334155; stroke-width: 4; }

fieldset { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 0.75rem; }
legend { font-weight: 800; }
label { display: flex; gap: 0.4rem; align-items: center; min-height: 44px; }

/* Sum checked extras with a CSS counter */
.priced:checked { counter-increment: extras var(--price); }
.extras-total::after { content: "€" counter(extras); font-weight: 800; }

.summary { padding: 1rem; border-radius: 0.75rem; background: #ecfeff; }
.summary [data-option] { display: none; }
.config:has(#color-teal:checked) [data-option="color-teal"],
.config:has(#color-red:checked) [data-option="color-red"],
.config:has(#color-ink:checked) [data-option="color-ink"],
.config:has(#x-lights:checked) [data-option="x-lights"],
.config:has(#x-rack:checked) [data-option="x-rack"] { display: list-item; }

@media (min-width: 1024px) {
  .config { grid-template-columns: 1fr 22rem; }
  .preview, .summary { grid-column: 2; }
  .preview { grid-row: 2 / span 2; position: sticky; top: 1rem; }
}

@media (prefers-reduced-motion: reduce) { .frame { transition: none; } }
` }
  ]
});

HCM.solutions.register(89, {
  scope: "core",
  notes: [
    "Core: the billing overview — status badges, usage meters and an honest cancel option.",
    "Cancel sits next to Upgrade with equal weight; only the destructive step uses danger styling.",
    "Meter labels state both the value and the limit."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Billing – Metricly</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="billing">
    <h1>Billing</h1>
    <section class="card">
      <h2>Growth plan <span class="status status--active">Active</span></h2>
      <p>Renews on <time datetime="2026-07-01">1 July 2026</time> for €49.</p>
      <p class="actions"><a class="button" href="plans.html">Change plan</a> <a class="button button--plain" href="cancel.html">Cancel subscription</a></p>
    </section>
    <section class="card">
      <h2>Usage this month</h2>
      <label for="seats">Seats: 12 of 15</label><meter id="seats" min="0" max="15" low="11" high="14" optimum="5" value="12"></meter>
      <label for="storage">Storage: 46 GB of 50 GB</label><meter id="storage" min="0" max="50" low="35" high="45" optimum="10" value="46"></meter>
    </section>
    <section class="card">
      <h2>Invoices</h2>
      <table>
        <thead><tr><th scope="col">Date</th><th scope="col">Amount</th><th scope="col">Status</th><th scope="col"><span class="vh">Download</span></th></tr></thead>
        <tbody>
          <tr><td>1 Jun 2026</td><td>€49.00</td><td><span class="status status--active">Paid</span></td><td><a href="invoices/2026-06.pdf">PDF<span class="vh"> for 1 June 2026</span></a></td></tr>
          <tr><td>1 May 2026</td><td>€49.00</td><td><span class="status status--due">Past due</span></td><td><a href="invoices/2026-05.pdf">PDF<span class="vh"> for 1 May 2026</span></a></td></tr>
        </tbody>
      </table>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f3f4f6; }
.billing { display: grid; gap: 1rem; max-width: 52rem; margin: 0 auto; padding: 2rem 1rem; }
.card { padding: 1.25rem; border-radius: 0.75rem; background: #ffffff; }
.card h2 { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-top: 0; font-size: 1.15rem; }

.status { padding: 0.1rem 0.6rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700; }
.status--active { background: #dcfce7; color: #166534; }
.status--due { background: #fef3c7; color: #92400e; }
.status--cancelled { background: #e5e7eb; color: #374151; }

.actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.button { display: inline-block; padding: 0.6rem 1.2rem; border: 2px solid #4338ca; border-radius: 0.5rem; background: #4338ca; color: #ffffff; font-weight: 700; text-decoration: none; }
.button--plain { background: #ffffff; color: #4338ca; }
.button--danger { border-color: #b91c1c; background: #b91c1c; }

label { display: block; margin-top: 0.75rem; font-weight: 600; }
meter { width: 100%; height: 1rem; }

table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.6rem; border-bottom: 1px solid #e5e7eb; text-align: left; }
:focus-visible { outline: 3px solid #4338ca; outline-offset: 2px; }
.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 699px) {
  thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  table, tbody, tr, td { display: block; }
  tr { padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb; }
  td { border: 0; padding: 0.15rem 0; }
}
` }
  ]
});

HCM.solutions.register(90, {
  scope: "core",
  notes: [
    "Core: the snapping kanban board and the timeline placed by custom properties.",
    "Columns are headed lists, so each card's column is clear to screen readers.",
    "`grid-column: var(--start) / var(--end)` turns task dates into placement."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Website relaunch – Board</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="project">
    <h1>Website relaunch</h1>
    <div class="board" tabindex="0" aria-label="Board, scroll sideways">
      <section class="column"><h2>To do</h2><ul>
        <li class="task"><span class="label" data-label="design">Design</span><p>Moodboard</p><p class="meta"><abbr title="Ana Lopes">AL</abbr> · due <time datetime="2026-06-10">10 Jun</time></p></li>
      </ul></section>
      <section class="column"><h2>In progress</h2><ul>
        <li class="task"><span class="label" data-label="dev">Dev</span><p>Header component</p><p class="meta"><abbr title="Tom Becker">TB</abbr> · 2/5 done</p></li>
      </ul></section>
      <section class="column"><h2>Review</h2><ul>
        <li class="task"><span class="label" data-label="bug">Bug</span><p>Menu focus order</p><p class="meta"><abbr title="Priya Shah">PS</abbr></p></li>
      </ul></section>
      <section class="column"><h2>Done</h2><ul>
        <li class="task"><span class="label" data-label="design">Design</span><p>Colour tokens</p></li>
      </ul></section>
    </div>
    <h2>Timeline (2 weeks)</h2>
    <div class="timeline-wrap">
      <ol class="timeline">
        <li class="bar" style="--start: 1; --end: 5">Moodboard</li>
        <li class="bar" style="--start: 3; --end: 9">Header component</li>
        <li class="bar" style="--start: 8; --end: 15">QA and launch</li>
      </ol>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f3f4f6; }
.project { max-width: 90rem; margin: 0 auto; padding: 1.5rem 1rem; }
abbr { text-decoration: none; }

.board { display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 1rem; scroll-snap-type: x mandatory; }
.board:focus-visible { outline: 3px solid #4f46e5; outline-offset: 4px; }
.column { flex: 0 0 min(85%, 18rem); scroll-snap-align: start; padding: 0.75rem; border-radius: 0.75rem; background: #e5e7eb; }
.column h2 { margin: 0 0 0.5rem; font-size: 0.95rem; }
.column ul { display: grid; gap: 0.5rem; margin: 0; padding: 0; list-style: none; }
.task { padding: 0.75rem; border-radius: 0.5rem; background: #ffffff; }
.task p { margin: 0.25rem 0 0; }
.meta { font-size: 0.8rem; color: #4b5563; }

.label { padding: 0.1rem 0.5rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700; }
.label[data-label="design"] { background: #ede9fe; color: #5b21b6; }
.label[data-label="dev"] { background: #dbeafe; color: #1e40af; }
.label[data-label="bug"] { background: #fee2e2; color: #991b1b; }

.timeline-wrap { overflow-x: auto; }
.timeline { display: grid; grid-template-columns: repeat(14, minmax(3rem, 1fr)); gap: 0.4rem 0; min-width: 42rem; margin: 0; padding: 0.5rem 0; list-style: none; background: repeating-linear-gradient(90deg, transparent 0 calc(100% / 14 - 1px), #d1d5db calc(100% / 14 - 1px) calc(100% / 14)); }
.bar { grid-column: var(--start) / var(--end); padding: 0.4rem 0.6rem; border-radius: 0.4rem; background: #4f46e5; color: #ffffff; font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
` }
  ]
});
