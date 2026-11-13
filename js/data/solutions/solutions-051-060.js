/*
 * Model solutions for projects 51–60 (core solutions: the hardest part of each project).
 */
HCM.solutions.register(51, {
  scope: "core",
  notes: [
    "Core: the bento featured block and the best-sellers scroller.",
    "Tiles span different rows and columns on a 4-column grid; spans reset at smaller widths.",
    "The scroller is focusable and labelled, and snaps to each card."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Featured – Northbound Outdoor</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="featured" aria-labelledby="featured-title">
      <h1 id="featured-title">This season</h1>
      <div class="bento">
        <a class="tile tile--big" href="new-in.html"><img src="images/sample-landscape.svg" width="800" height="500" alt=""><span>New in: summit collection</span></a>
        <a class="tile tile--wide" href="packs.html"><img src="images/sample-product.svg" width="600" height="450" alt=""><span>Packs</span></a>
        <a class="tile" href="camp.html"><img src="images/sample-building.svg" width="600" height="450" alt=""><span>Camp</span></a>
        <a class="tile tile--tall" href="sale.html"><img src="images/sample-dish.svg" width="600" height="450" alt=""><span>Sale −30%</span></a>
        <a class="tile" href="kids.html"><img src="images/sample-avatar.svg" width="400" height="400" alt=""><span>Kids</span></a>
        <a class="tile tile--wide" href="guides.html"><img src="images/sample-landscape.svg" width="800" height="500" alt=""><span>Trail guides</span></a>
      </div>
    </section>
    <section aria-labelledby="best-title">
      <h2 id="best-title">Best sellers</h2>
      <ul class="scroller" tabindex="0" aria-label="Best sellers, scroll sideways">
        <li><img src="images/sample-product.svg" width="600" height="450" alt="Teal day pack"><h3>Day Pack</h3><p>€59</p></li>
        <li><img src="images/sample-product.svg" width="600" height="450" alt="Trek bottle"><h3>Trek Bottle</h3><p>€24</p></li>
        <li><img src="images/sample-product.svg" width="600" height="450" alt="Rain shell"><h3>Rain Shell</h3><p>€129</p></li>
        <li><img src="images/sample-product.svg" width="600" height="450" alt="Camp stove"><h3>Camp Stove</h3><p>€79</p></li>
        <li><img src="images/sample-product.svg" width="600" height="450" alt="Head torch"><h3>Head Torch</h3><p>€35</p></li>
      </ul>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --promo: #b91c1c; --ink: #0f172a; --gap: 1rem; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--ink); }
main { max-width: 76rem; margin: 0 auto; }
img { display: block; width: 100%; height: 100%; object-fit: cover; }

.bento { display: grid; grid-template-columns: 1fr; grid-auto-rows: minmax(10rem, auto); gap: var(--gap); }

.tile { position: relative; overflow: hidden; border-radius: 1rem; color: #ffffff; }
.tile::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 60%); }
.tile span { position: absolute; left: 1rem; bottom: 1rem; z-index: 1; font-size: 1.25rem; font-weight: 800; }
.tile:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }

@media (min-width: 560px) {
  .bento { grid-template-columns: repeat(2, 1fr); }
  .tile--big { grid-column: span 2; }
}

@media (min-width: 900px) {
  .bento { grid-template-columns: repeat(4, 1fr); }
  .tile--big { grid-column: span 2; grid-row: span 2; }
  .tile--wide { grid-column: span 2; }
  .tile--tall { grid-row: span 2; }
}

.scroller {
  display: flex;
  gap: var(--gap);
  margin: 0;
  padding: 0 0 1rem;
  overflow-x: auto;
  list-style: none;
  scroll-snap-type: x mandatory;
}

.scroller li { flex: 0 0 min(70%, 15rem); scroll-snap-align: start; }
.scroller img { height: auto; aspect-ratio: 4 / 3; border-radius: 0.75rem; }
.scroller h3 { margin: 0.5rem 0 0; font-size: 1rem; }
.scroller p { margin: 0; font-weight: 800; color: var(--promo); }
.scroller:focus-visible { outline: 3px solid var(--ink); outline-offset: 4px; }
` }
  ]
});

HCM.solutions.register(52, {
  scope: "core",
  notes: [
    "Core: the CSS-only collapsible sidebar and the custom-property bar chart.",
    "The checkbox comes before `.app`, so `#collapse:checked ~ .app` changes the grid.",
    "Each bar reads its height from an inline `--value`, and the same data is in a hidden table."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Overview – Metricly</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <input class="vh" type="checkbox" id="collapse">
  <div class="app">
    <nav class="side" aria-label="Main">
      <label class="toggle" for="collapse"><span aria-hidden="true">☰</span><span class="label">Collapse sidebar</span></label>
      <ul>
        <li><a href="overview.html" aria-current="page"><span aria-hidden="true">▣</span><span class="label">Overview</span></a></li>
        <li><a href="reports.html"><span aria-hidden="true">▤</span><span class="label">Reports</span></a></li>
        <li><a href="team.html"><span aria-hidden="true">◉</span><span class="label">Team</span></a></li>
      </ul>
    </nav>
    <main class="main">
      <h1>Overview</h1>
      <ul class="kpis">
        <li><p>Active users</p><data value="4210">4,210</data><span class="trend trend--up">12%</span></li>
        <li><p>Churn</p><data value="2.1">2.1%</data><span class="trend trend--down">3%</span></li>
      </ul>
      <figure class="chart">
        <figcaption>Monthly sign-ups</figcaption>
        <div class="bars" aria-hidden="true">
          <span style="--value: 35"></span><span style="--value: 48"></span><span style="--value: 52"></span><span style="--value: 61"></span>
          <span style="--value: 58"></span><span style="--value: 70"></span><span style="--value: 76"></span><span style="--value: 90"></span>
        </div>
        <table class="vh"><caption>Monthly sign-ups</caption><tbody><tr><th scope="row">Jan</th><td>35</td></tr><tr><th scope="row">Feb</th><td>48</td></tr><tr><th scope="row">Mar</th><td>52</td></tr><tr><th scope="row">Apr</th><td>61</td></tr><tr><th scope="row">May</th><td>58</td></tr><tr><th scope="row">Jun</th><td>70</td></tr><tr><th scope="row">Jul</th><td>76</td></tr><tr><th scope="row">Aug</th><td>90</td></tr></tbody></table>
      </figure>
    </main>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f1f5f9; }

.app { display: grid; grid-template-columns: 1fr; }
.side { padding: 0.75rem; background: #0f172a; color: #e2e8f0; }
.side ul { display: flex; gap: 0.25rem; margin: 0; padding: 0; list-style: none; }
.side a, .toggle { display: flex; gap: 0.75rem; align-items: center; min-height: 44px; padding: 0.5rem 0.75rem; border-radius: 0.5rem; color: inherit; text-decoration: none; cursor: pointer; }
.side a[aria-current="page"] { background: #1e293b; color: #5eead4; }
.toggle { display: none; }
.main { padding: 1.5rem 1rem; }

.kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: 1rem; margin: 0 0 1.5rem; padding: 0; list-style: none; }
.kpis li { padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.kpis p { margin: 0; color: #475569; }
.kpis data { display: block; font-size: 1.6rem; font-weight: 800; }
.trend--up::before { content: "▲ "; color: #15803d; }
.trend--down::before { content: "▼ "; color: #b91c1c; }

.chart { margin: 0; padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.bars { display: flex; align-items: flex-end; gap: 0.5rem; height: 12rem; }
.bars span { flex: 1; height: calc(var(--value) * 1%); border-radius: 0.3rem 0.3rem 0 0; background: #0f766e; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
#collapse:focus-visible ~ .app .toggle { outline: 3px solid #5eead4; outline-offset: 2px; }

@media (min-width: 768px) {
  .app { grid-template-columns: 15rem 1fr; min-height: 100vh; transition: grid-template-columns 0.25s ease; }
  .side ul { flex-direction: column; }
  .toggle { display: flex; }
  #collapse:checked ~ .app { grid-template-columns: 4.5rem 1fr; }
  #collapse:checked ~ .app .label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
}

@media (prefers-reduced-motion: reduce) { .app { transition: none; } }
` }
  ]
});

HCM.solutions.register(53, {
  scope: "core",
  notes: [
    "Core: the conic-gradient donut and the container-aware card.",
    "Segment boundaries are calculated from `--a`, `--b` and `--c`, so the data lives in one place.",
    "`container-type: inline-size` lets the card move its legend based on its own width."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Traffic sources – Analytics</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="dashboard">
    <h1>Analytics</h1>
    <fieldset class="range">
      <legend>Date range</legend>
      <input class="vh" type="radio" name="range" id="r7"><label for="r7">7 days</label>
      <input class="vh" type="radio" name="range" id="r30" checked><label for="r30">30 days</label>
      <input class="vh" type="radio" name="range" id="r90"><label for="r90">90 days</label>
    </fieldset>
    <section class="card sources">
      <figure class="donut-figure">
        <div class="donut" style="--a: 50; --b: 30; --c: 20" aria-hidden="true"></div>
        <figcaption>
          <h2>Traffic sources</h2>
          <ul class="legend">
            <li><span class="dot dot--a"></span>Search — 50%</li>
            <li><span class="dot dot--b"></span>Social — 30%</li>
            <li><span class="dot dot--c"></span>Direct — 20%</li>
          </ul>
        </figcaption>
      </figure>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root { --c1: #0f766e; --c2: #7c3aed; --c3: #f59e0b; }
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
.dashboard { display: grid; gap: 1.5rem; max-width: 60rem; margin: 0 auto; }

.range { display: flex; flex-wrap: wrap; gap: 0; padding: 0; border: 0; }
.range legend { width: 100%; margin-bottom: 0.5rem; font-weight: 700; }
.range label { padding: 0.5rem 1rem; border: 2px solid #0f766e; margin-left: -2px; cursor: pointer; }
.range input:checked + label { background: #0f766e; color: #ffffff; }
.range input:focus-visible + label { outline: 3px solid #0f172a; outline-offset: 2px; }

.card { container-type: inline-size; padding: 1.25rem; border-radius: 1rem; background: #ffffff; }
.donut-figure { display: grid; gap: 1rem; justify-items: center; margin: 0; }

.donut {
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(
    var(--c1) 0 calc(var(--a) * 1%),
    var(--c2) 0 calc((var(--a) + var(--b)) * 1%),
    var(--c3) 0
  );
  mask: radial-gradient(circle, transparent 52%, #000000 53%);
}

.legend { margin: 0; padding: 0; list-style: none; }
.legend li { display: flex; align-items: center; gap: 0.5rem; }
.dot { width: 0.8rem; height: 0.8rem; border-radius: 50%; }
.dot--a { background: var(--c1); } .dot--b { background: var(--c2); } .dot--c { background: var(--c3); }

@container (min-width: 30rem) {
  .donut-figure { grid-template-columns: auto 1fr; align-items: center; justify-items: start; }
}

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});

HCM.solutions.register(54, {
  scope: "core",
  notes: [
    "Core: CSS-only step switching and an indicator that follows the active step.",
    "`:not(:has(fieldset:target))` shows step 1 when there is no hash in the address.",
    "The indicator states are set from the form with `:has()`, so no JavaScript is needed."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Checkout – Practice shop</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="checkout">
    <h1>Checkout</h1>
    <form action="done.html" method="post">
      <ol class="steps">
        <li class="s1"><span class="num">1</span><span class="name">Account</span></li>
        <li class="s2"><span class="num">2</span><span class="name">Shipping</span></li>
        <li class="s3"><span class="num">3</span><span class="name">Payment</span></li>
        <li class="s4"><span class="num">4</span><span class="name">Review</span></li>
      </ol>
      <fieldset id="step-1"><legend>Account</legend>
        <label for="em">Email</label><input id="em" type="email" autocomplete="email">
        <p class="nav"><a class="next" href="#step-2">Next: Shipping</a></p>
      </fieldset>
      <fieldset id="step-2"><legend>Shipping</legend>
        <label for="ad">Address</label><input id="ad" autocomplete="street-address">
        <p class="nav"><a href="#step-1">Back</a> <a class="next" href="#step-3">Next: Payment</a></p>
      </fieldset>
      <fieldset id="step-3"><legend>Payment</legend>
        <p class="note">Practice form — use example values only.</p>
        <label for="nm">Name on card (example)</label><input id="nm">
        <p class="nav"><a href="#step-2">Back</a> <a class="next" href="#step-4">Next: Review</a></p>
      </fieldset>
      <fieldset id="step-4"><legend>Review</legend>
        <dl><dt>Email</dt><dd>sam@example.com</dd><dt>Ship to</dt><dd>14 Mill Lane, Leeds</dd></dl>
        <p class="nav"><a href="#step-3">Back</a> <button type="submit">Place practice order</button></p>
      </fieldset>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f9fafb; }
.checkout { max-width: 40rem; margin: 0 auto; }

fieldset { display: none; padding: 1.25rem; border: 1px solid #d1d5db; border-radius: 0.75rem; background: #ffffff; animation: step-in 0.25s ease; }
fieldset:target { display: block; }
form:not(:has(fieldset:target)) #step-1 { display: block; }
@keyframes step-in { from { opacity: 0; transform: translateY(0.5rem); } to { opacity: 1; transform: none; } }

legend { font-weight: 800; }
label { display: block; margin-top: 0.5rem; font-weight: 600; }
input { width: 100%; min-height: 44px; padding: 0 0.75rem; border: 1px solid #6b7280; border-radius: 0.5rem; font: inherit; }
.nav { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; margin: 1.25rem 0 0; }
.nav a, button { display: inline-flex; align-items: center; min-height: 44px; padding: 0 1rem; border-radius: 0.5rem; font: inherit; font-weight: 700; }
.next, button { border: 0; background: #4f46e5; color: #ffffff; text-decoration: none; }
.note { padding: 0.5rem; background: #fef3c7; border-radius: 0.4rem; }

.steps { display: flex; justify-content: space-between; margin: 0 0 1.5rem; padding: 0; list-style: none; }
.steps li { display: flex; align-items: center; gap: 0.4rem; color: #6b7280; }
.num { display: grid; place-items: center; width: 2rem; height: 2rem; border: 2px solid currentColor; border-radius: 50%; font-weight: 800; }
.name { display: none; }

/* Current step */
form:not(:has(fieldset:target)) .s1,
form:has(#step-1:target) .s1, form:has(#step-2:target) .s2,
form:has(#step-3:target) .s3, form:has(#step-4:target) .s4 { color: #4f46e5; font-weight: 700; }

/* Completed steps */
form:has(#step-2:target) .s1,
form:has(#step-3:target) :is(.s1, .s2),
form:has(#step-4:target) :is(.s1, .s2, .s3) { color: #15803d; }
form:has(#step-2:target) .s1 .num::after,
form:has(#step-3:target) :is(.s1, .s2) .num::after,
form:has(#step-4:target) :is(.s1, .s2, .s3) .num::after { content: " ✓"; }

@media (min-width: 480px) { .name { display: inline; } }
@media (max-width: 479px) { .nav a, button { flex: 1 1 100%; justify-content: center; } }
@media (prefers-reduced-motion: reduce) { fieldset { animation: none; } }
` }
  ]
});

HCM.solutions.register(55, {
  scope: "core",
  notes: [
    "Core: the named-line breakout grid and the drop cap.",
    "Children default to the `content` track; figures opt into `wide` or `full`.",
    "`initial-letter` is added only inside `@supports`, with a `::first-letter` fallback."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Last Lighthouse Keepers – Feature</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="article">
      <header>
        <p class="kicker">Long read</p>
        <h1>The last lighthouse keepers</h1>
        <p class="standfirst">On a rocky coast, three people still climb 120 steps every night.</p>
        <p class="byline">By Iris Moreno · 12 min read</p>
      </header>
      <figure class="full"><img src="images/sample-landscape.svg" width="800" height="500" alt="Cliffs and sea at sunset"></figure>
      <p class="opening">The wind arrives before the light does. By six o'clock Marta has checked the lens twice and the logbook once.</p>
      <p>Most lighthouses were automated decades ago, but this one keeps a small crew for the weather station.</p>
      <aside class="pull"><p>“You don't keep a light. It keeps you.”</p></aside>
      <p>Her shift begins with a climb and ends with a careful note about the sea.</p>
      <figure class="wide"><img src="images/sample-building.svg" width="600" height="450" alt="The keeper's white cottage"><figcaption>The keeper's cottage, built in 1891.</figcaption></figure>
      <p>Visitors ask whether it is lonely. Marta says it is the least lonely job she has had.</p>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: 1.15rem; line-height: 1.7; color: #1c1917; background: #fafaf9; }
img { display: block; width: 100%; height: auto; }

.article {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [wide-start] minmax(0, 6rem)
    [content-start] min(65ch, 100% - 2rem) [content-end]
    minmax(0, 6rem) [wide-end]
    minmax(1rem, 1fr) [full-end];
}

.article > * { grid-column: content; }
.article > .wide { grid-column: wide; }
.article > .full { grid-column: full; }
figure { margin: 2rem 0; }
figcaption { font-family: system-ui, sans-serif; font-size: 0.85rem; color: #57534e; padding: 0.5rem 1rem 0; }

.kicker { font-family: system-ui, sans-serif; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #b45309; }
h1 { font-size: clamp(2.2rem, 7vw, 4rem); line-height: 1.05; margin: 0; text-wrap: balance; }
.standfirst { font-size: 1.35rem; color: #44403c; }
.byline { font-family: system-ui, sans-serif; font-size: 0.9rem; }
p { hyphens: auto; }

.opening::first-letter { float: left; margin: 0.1em 0.1em 0 0; font-size: 4.2em; line-height: 0.8; font-weight: 700; color: #b45309; }
@supports (initial-letter: 3) {
  .opening::first-letter { float: none; margin: 0 0.15em 0 0; font-size: inherit; line-height: inherit; initial-letter: 3; }
}

.pull { margin: 1rem 0; padding-left: 1rem; border-left: 4px solid #b45309; font-size: 1.5rem; font-style: italic; }
.pull p { margin: 0; }

@media (min-width: 1200px) {
  .pull { grid-column: wide-start / content-start; grid-row: span 2; padding: 0 1rem 0 0; border: 0; border-right: 4px solid #b45309; font-size: 1.2rem; text-align: right; }
}
` }
  ]
});

HCM.solutions.register(56, {
  scope: "core",
  notes: [
    "Core: explicit placement, caption overlap in one cell, and filtering with `:has()`.",
    "Image and caption both take `grid-area: 1 / 1`, so the caption sits on the image.",
    "When a filter is active, spans reset and dense packing removes holes."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gallery wall – Spring show</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="gallery">
    <h1>Spring show</h1>
    <fieldset class="filters">
      <legend>Show</legend>
      <label><input type="radio" name="type" id="f-all" checked> All</label>
      <label><input type="radio" name="type" id="f-painting"> Painting</label>
      <label><input type="radio" name="type" id="f-photo"> Photo</label>
    </fieldset>
    <ul class="wall">
      <li class="feature" data-type="painting"><figure><img src="images/sample-landscape.svg" width="800" height="500" alt="Mountains painted in orange and blue"><figcaption>Evening Ridge — oil</figcaption></figure></li>
      <li class="tall" data-type="photo"><figure><img src="images/sample-avatar.svg" width="400" height="400" alt="Portrait of a woman"><figcaption>Marta — photo</figcaption></figure></li>
      <li data-type="photo"><figure><img src="images/sample-building.svg" width="600" height="450" alt="White farmhouse"><figcaption>Farmhouse — photo</figcaption></figure></li>
      <li class="wide" data-type="painting"><figure><img src="images/sample-dish.svg" width="600" height="450" alt="Still life of a tart"><figcaption>Still Life — acrylic</figcaption></figure></li>
      <li data-type="photo"><figure><img src="images/sample-product.svg" width="600" height="450" alt="Teal bottle on a table"><figcaption>Object 4 — photo</figcaption></figure></li>
    </ul>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #fafaf9; }
.gallery { max-width: 76rem; margin: 0 auto; }
.filters { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border: 0; padding: 0; }
.filters legend { font-weight: 700; margin-bottom: 0.25rem; }

.wall { display: grid; grid-template-columns: repeat(2, 1fr); grid-auto-rows: 10rem; gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
.wall li { min-height: 0; }
.wall .feature { grid-column: span 2; grid-row: span 2; }

figure { display: grid; height: 100%; margin: 0; }
figure > * { grid-area: 1 / 1; }
figure img { width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem; }
figcaption { z-index: 1; align-self: end; margin: 0.5rem; padding: 0.25rem 0.6rem; border-radius: 0.4rem; background: rgba(17, 24, 39, 0.8); color: #ffffff; font-size: 0.85rem; justify-self: start; }

@media (min-width: 700px) {
  .wall { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 8rem; }
  .wall .feature { grid-column: 1 / 4; grid-row: 1 / 4; }
  .wall .tall { grid-row: span 3; grid-column: span 1; }
  .wall .wide { grid-column: span 3; grid-row: span 2; }
  .wall li:not(.feature, .tall, .wide) { grid-column: span 2; grid-row: span 2; }
}

/* Filtering */
.gallery:has(#f-painting:checked) .wall li:not([data-type="painting"]),
.gallery:has(#f-photo:checked) .wall li:not([data-type="photo"]) { display: none; }

.gallery:has(#f-painting:checked, #f-photo:checked) .wall { grid-auto-flow: dense; }
.gallery:has(#f-painting:checked, #f-photo:checked) .wall li { grid-column: span 2; grid-row: span 2; }
` }
  ]
});

HCM.solutions.register(57, {
  scope: "core",
  notes: [
    "Core: the radio-driven gallery and the colour swatches.",
    "All large images share one grid cell; the checked radio decides which is opaque.",
    "Swatch names live in visually hidden text inside each label."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Day Pack 20 L – Northbound</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="product">
    <section class="gallery" aria-label="Product images">
      <input class="vh" type="radio" name="view" id="img-1" checked>
      <input class="vh" type="radio" name="view" id="img-2">
      <input class="vh" type="radio" name="view" id="img-3">
      <div class="stage">
        <img class="img-1" src="images/sample-product.svg" width="600" height="450" alt="Day pack, front view">
        <img class="img-2" src="images/sample-landscape.svg" width="800" height="500" alt="Day pack on a mountain trail">
        <img class="img-3" src="images/sample-building.svg" width="600" height="450" alt="Day pack beside a cabin">
      </div>
      <div class="thumbs">
        <label for="img-1"><img src="images/sample-product.svg" width="120" height="90" alt=""><span class="vh">Front view</span></label>
        <label for="img-2"><img src="images/sample-landscape.svg" width="120" height="75" alt=""><span class="vh">On the trail</span></label>
        <label for="img-3"><img src="images/sample-building.svg" width="120" height="90" alt=""><span class="vh">Beside a cabin</span></label>
      </div>
    </section>
    <form class="buy" action="basket.html">
      <h1>Day Pack 20 L</h1>
      <p class="price">€59</p>
      <fieldset class="swatches"><legend>Colour</legend>
        <label><input class="vh" type="radio" name="colour" value="teal" checked><span class="swatch" style="--swatch: #0f766e"></span><span class="vh">Teal</span></label>
        <label><input class="vh" type="radio" name="colour" value="rust"><span class="swatch" style="--swatch: #c2410c"></span><span class="vh">Rust</span></label>
        <label><input class="vh" type="radio" name="colour" value="ink"><span class="swatch" style="--swatch: #1e293b"></span><span class="vh">Ink</span></label>
      </fieldset>
      <label for="qty">Quantity</label>
      <input id="qty" type="number" min="1" max="10" value="1">
      <button type="submit">Add to basket</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
.product { display: grid; gap: 2rem; max-width: 70rem; margin: 0 auto; }
img { display: block; width: 100%; height: auto; }

.stage { display: grid; border-radius: 1rem; overflow: hidden; background: #f1f5f9; }
.stage img { grid-area: 1 / 1; aspect-ratio: 4 / 3; object-fit: cover; opacity: 0; transition: opacity 0.3s ease; }
#img-1:checked ~ .stage .img-1,
#img-2:checked ~ .stage .img-2,
#img-3:checked ~ .stage .img-3 { opacity: 1; }

.thumbs { display: flex; gap: 0.5rem; margin-top: 0.75rem; overflow-x: auto; }
.thumbs label { flex: 0 0 5rem; border: 3px solid transparent; border-radius: 0.5rem; overflow: hidden; cursor: pointer; }
#img-1:checked ~ .thumbs [for="img-1"],
#img-2:checked ~ .thumbs [for="img-2"],
#img-3:checked ~ .thumbs [for="img-3"] { border-color: #0f766e; }
#img-1:focus-visible ~ .thumbs [for="img-1"],
#img-2:focus-visible ~ .thumbs [for="img-2"],
#img-3:focus-visible ~ .thumbs [for="img-3"] { outline: 3px solid #0f172a; outline-offset: 2px; }

.buy { display: grid; gap: 0.75rem; align-content: start; }
.buy h1 { margin: 0; }
.price { margin: 0; font-size: 1.75rem; font-weight: 800; }
.swatches { display: flex; gap: 0.75rem; border: 0; padding: 0; }
.swatches legend { font-weight: 700; margin-bottom: 0.5rem; }
.swatch { display: block; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--swatch); cursor: pointer; }
.swatches input:checked + .swatch { outline: 3px solid #0f172a; outline-offset: 3px; }
.swatches input:focus-visible + .swatch { outline: 3px dashed #0f766e; outline-offset: 3px; }
#qty, button { min-height: 44px; font: inherit; border-radius: 0.5rem; }
#qty { padding: 0 0.75rem; border: 1px solid #64748b; }
button { border: 0; background: #0f766e; color: #ffffff; font-weight: 700; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 1024px) {
  .product { grid-template-columns: 3fr 2fr; align-items: start; }
  .buy { position: sticky; top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(58, {
  scope: "core",
  notes: [
    "Core: the hover and focus-within mega panels with a delayed close.",
    "Panels hide with `visibility` and `opacity`, which can transition and still reveal on focus.",
    "Below 1024px the panels become a simple stacked list."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Northbound Outdoor</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <a class="logo" href="index.html">Northbound</a>
    <nav aria-label="Main">
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__top" href="hiking.html">Hiking</a>
          <div class="panel">
            <div><h3>Footwear</h3><ul><li><a href="boots.html">Boots</a></li><li><a href="trail-shoes.html">Trail shoes</a></li></ul></div>
            <div><h3>Packs</h3><ul><li><a href="day-packs.html">Day packs</a></li><li><a href="trek-packs.html">Trekking packs</a></li></ul></div>
            <div><h3>Navigation</h3><ul><li><a href="maps.html">Maps</a></li><li><a href="compasses.html">Compasses</a></li></ul></div>
            <a class="promo" href="sale.html">Summer sale: up to 30% off</a>
          </div>
        </li>
        <li class="menu__item">
          <a class="menu__top" href="camping.html">Camping</a>
          <div class="panel">
            <div><h3>Shelter</h3><ul><li><a href="tents.html">Tents</a></li><li><a href="tarps.html">Tarps</a></li></ul></div>
            <div><h3>Sleep</h3><ul><li><a href="bags.html">Sleeping bags</a></li><li><a href="mats.html">Mats</a></li></ul></div>
            <div><h3>Kitchen</h3><ul><li><a href="stoves.html">Stoves</a></li><li><a href="cookware.html">Cookware</a></li></ul></div>
            <a class="promo" href="guides.html">Read our camping guides</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <main><h1>Welcome</h1><p>Page content sits below the header.</p></main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
main { padding: 2rem 1rem; }
a { color: inherit; }
a:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; }

.site-header { position: relative; z-index: 20; display: flex; flex-wrap: wrap; gap: 1rem 2rem; align-items: flex-start; padding: 1rem; background: #ffffff; border-bottom: 1px solid #e2e8f0; }
.logo { font-weight: 800; text-decoration: none; }

.menu, .panel ul { margin: 0; padding: 0; list-style: none; }
.menu__top { display: block; padding: 0.5rem 0; font-weight: 700; }
.panel h3 { margin: 0.5rem 0 0.25rem; font-size: 0.85rem; text-transform: uppercase; color: #64748b; }
.panel a { display: block; padding: 0.3rem 0; }
.promo { margin-top: 0.5rem; padding: 1rem; border-radius: 0.5rem; background: #ecfdf5; font-weight: 700; }

@media (min-width: 1024px) {
  .site-header { align-items: center; }
  .menu { display: flex; gap: 1.5rem; }
  .menu__top { padding: 1rem 0; }

  .panel {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 16rem;
    gap: 2rem;
    padding: 1.5rem 2rem;
    background: #ffffff;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s ease, visibility 0s linear 0.15s;
  }

  .menu__item:hover > .panel,
  .menu__item:focus-within > .panel {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.15s, 0s;
  }
}

@media (prefers-reduced-motion: reduce) { .panel { transition: none; } }
` }
  ]
});

HCM.solutions.register(59, {
  scope: "core",
  notes: [
    "Core: one `rise-in` keyframe staggered with `--delay`, plus float and gradient loops.",
    "`animation-fill-mode: both` hides elements during their delay, then keeps the final state.",
    "Reduced-motion users get the final state immediately."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Orbit – Plan your launch</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="hero">
      <div class="hero__text">
        <h1 class="reveal" style="--delay: 0">Plan your launch in one calm place</h1>
        <p class="reveal" style="--delay: 1">Roadmaps, checklists and notes that move with your team.</p>
        <p class="reveal actions" style="--delay: 2"><a class="button" href="signup.html">Start free</a> <a class="button button--ghost" href="tour.html">Take the tour</a></p>
      </div>
      <svg class="art" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
        <circle cx="100" cy="100" r="70" fill="#a5b4fc"/>
        <circle cx="100" cy="100" r="40" fill="#4f46e5"/>
        <circle cx="160" cy="50" r="12" fill="#f472b6"/>
      </svg>
      <a class="scroll-cue" href="#features">Scroll to features</a>
    </section>
    <section id="features" class="features"><h2>Features</h2></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }

.hero {
  position: relative;
  display: grid;
  gap: 2rem;
  align-items: center;
  min-height: 90vh;
  padding: 3rem 1.5rem 5rem;
  overflow: hidden;
  background: linear-gradient(120deg, #eef2ff, #fdf2f8, #ecfeff, #eef2ff);
  background-size: 300% 300%;
  animation: gradient-shift 20s ease infinite alternate;
}

.hero h1 { margin: 0; font-size: clamp(2.2rem, 6vw, 4rem); line-height: 1.05; }
.button { display: inline-block; padding: 0.8rem 1.5rem; border-radius: 999px; background: #4f46e5; color: #ffffff; font-weight: 700; text-decoration: none; }
.button--ghost { background: transparent; color: #4f46e5; box-shadow: inset 0 0 0 2px #4f46e5; }

.reveal {
  animation: rise-in 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  animation-delay: calc(var(--delay) * 120ms);
}

.art { width: min(18rem, 70vw); margin-inline: auto; animation: float 6s ease-in-out infinite alternate; }

.scroll-cue { position: absolute; left: 50%; bottom: 1.5rem; transform: translateX(-50%); color: #4f46e5; font-weight: 700; }
.features { padding: 4rem 1.5rem; }

@keyframes rise-in { from { opacity: 0; transform: translateY(1.5rem); } to { opacity: 1; transform: none; } }
@keyframes float { from { transform: translateY(0); } to { transform: translateY(-1rem); } }
@keyframes gradient-shift { from { background-position: 0% 50%; } to { background-position: 100% 50%; } }

@media (min-width: 900px) { .hero { grid-template-columns: 1.2fr 1fr; } }

@media (prefers-reduced-motion: reduce) {
  .hero, .reveal, .art { animation: none; }
}
` }
  ]
});

HCM.solutions.register(60, {
  scope: "core",
  notes: [
    "Core: the sticky comparison table, focusable tooltips and the mobile reflow.",
    "Tooltips are linked with `aria-describedby` and show on hover and keyboard focus.",
    "Under 768px each row becomes a labelled block using `data-label`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Compare plans – Metricly</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Compare plans</h1>
    <div class="wrap">
      <table>
        <caption>What each plan includes</caption>
        <thead><tr><th scope="col">Feature</th><th scope="col">Basic</th><th scope="col" class="hl">Growth</th><th scope="col">Scale</th></tr></thead>
        <tbody>
          <tr>
            <th scope="row">Seats</th>
            <td data-label="Basic">3</td><td data-label="Growth" class="hl">15</td><td data-label="Scale">Unlimited</td>
          </tr>
          <tr>
            <th scope="row">Data retention
              <button class="info" type="button" aria-describedby="tip-retention">ⓘ<span class="vh">About data retention</span></button>
              <span class="tip" role="tooltip" id="tip-retention">How long raw events are kept before being summarised.</span>
            </th>
            <td data-label="Basic">30 days</td><td data-label="Growth" class="hl">1 year</td><td data-label="Scale">3 years</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
main { max-width: 60rem; margin: 0 auto; }

.wrap { max-height: 70vh; overflow: auto; border: 1px solid #cbd5e1; border-radius: 0.75rem; }
table { width: 100%; border-collapse: separate; border-spacing: 0; }
caption { padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
th, td { padding: 0.75rem 1rem; border-bottom: 1px solid #e2e8f0; text-align: left; background: #ffffff; }
thead th { position: sticky; top: 0; z-index: 2; background: #0f172a; color: #ffffff; }
.hl { box-shadow: inset 3px 0 0 #4f46e5, inset -3px 0 0 #4f46e5; }
thead .hl { background: #4f46e5; }

th[scope="row"] { position: relative; }
.info { width: 1.75rem; height: 1.75rem; margin-left: 0.25rem; border: 0; border-radius: 50%; background: #e0e7ff; color: #3730a3; cursor: help; }
.info:focus-visible { outline: 3px solid #3730a3; outline-offset: 2px; }
.tip { position: absolute; left: 1rem; top: 100%; z-index: 3; width: 16rem; padding: 0.5rem 0.75rem; border-radius: 0.5rem; background: #0f172a; color: #ffffff; font-weight: 400; font-size: 0.85rem; visibility: hidden; }
.info:hover + .tip, .info:focus-visible + .tip { visibility: visible; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 767px) {
  .wrap { max-height: none; overflow: visible; border: 0; }
  thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  table, tbody, tr, th, td { display: block; }
  tr { margin-bottom: 1rem; border: 1px solid #cbd5e1; border-radius: 0.75rem; overflow: hidden; }
  td { display: flex; justify-content: space-between; gap: 1rem; }
  td::before { content: attr(data-label); font-weight: 700; }
  .hl { box-shadow: inset 4px 0 0 #4f46e5; }
}
` }
  ]
});
