/*
 * Model solutions for projects 71–80 (core solutions: the hardest part of each project).
 */
HCM.solutions.register(71, {
  scope: "core",
  notes: [
    "Core: the seat map and the flight timeline.",
    "An empty middle grid column makes the aisle, so every row stays aligned.",
    "Taken seats are disabled checkboxes with \"taken\" in their labels and a ✕ — not just grey."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Choose seats – Skyline Air</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="booking">
    <h1>Lisbon to Berlin</h1>
    <article class="flight">
      <p class="time"><time datetime="2026-07-10T07:40">07:40</time><span>LIS</span></p>
      <div class="route" aria-label="3 h 20 min, 1 stop"><span class="stop" style="--at: 45%"></span></div>
      <p class="time"><time datetime="2026-07-10T13:00">13:00</time><span>BER</span></p>
    </article>
    <fieldset class="seatmap">
      <legend>Choose your seat</legend>
      <div class="seats">
        <input class="vh" type="checkbox" id="s1a"><label for="s1a">1A<span class="vh">, window</span></label>
        <input class="vh" type="checkbox" id="s1b"><label for="s1b">1B<span class="vh">, middle</span></label>
        <input class="vh" type="checkbox" id="s1c" disabled><label for="s1c">1C<span class="vh">, aisle, taken</span></label>
        <span class="aisle" aria-hidden="true"></span>
        <input class="vh" type="checkbox" id="s1d"><label for="s1d">1D<span class="vh">, aisle</span></label>
        <input class="vh" type="checkbox" id="s1e" checked><label for="s1e">1E<span class="vh">, middle</span></label>
        <input class="vh" type="checkbox" id="s1f" disabled><label for="s1f">1F<span class="vh">, window, taken</span></label>
        <input class="vh" type="checkbox" id="s2a"><label class="exit" for="s2a">2A<span class="vh">, window, exit row</span></label>
        <input class="vh" type="checkbox" id="s2b"><label class="exit" for="s2b">2B<span class="vh">, middle, exit row</span></label>
        <input class="vh" type="checkbox" id="s2c"><label class="exit" for="s2c">2C<span class="vh">, aisle, exit row</span></label>
        <span class="aisle" aria-hidden="true"></span>
        <input class="vh" type="checkbox" id="s2d" disabled><label class="exit" for="s2d">2D<span class="vh">, aisle, exit row, taken</span></label>
        <input class="vh" type="checkbox" id="s2e"><label class="exit" for="s2e">2E<span class="vh">, middle, exit row</span></label>
        <input class="vh" type="checkbox" id="s2f"><label class="exit" for="s2f">2F<span class="vh">, window, exit row</span></label>
      </div>
      <p class="legend"><span class="key key--free"></span> Free <span class="key key--sel"></span> Selected <span class="key key--taken">✕</span> Taken</p>
    </fieldset>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0c4a6e; }
.booking { max-width: 34rem; margin: 0 auto; }

.flight { display: grid; grid-template-columns: auto 1fr auto; gap: 1rem; align-items: center; padding: 1rem; border-radius: 0.75rem; background: #f0f9ff; }
.time { display: grid; margin: 0; font-weight: 800; text-align: center; }
.time span { font-weight: 400; font-size: 0.85rem; }
.route { position: relative; height: 2px; background: #0284c7; }
.route::before, .route::after { content: ""; position: absolute; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: #0284c7; }
.route::before { left: 0; } .route::after { right: 0; }
.stop { position: absolute; top: -5px; left: var(--at); width: 12px; height: 12px; border: 2px solid #0284c7; border-radius: 50%; background: #ffffff; }

.seatmap { margin-top: 1.5rem; border: 1px solid #bae6fd; border-radius: 0.75rem; }
.seats { display: grid; grid-template-columns: repeat(3, 1fr) 1.5rem repeat(3, 1fr); gap: 0.4rem; }
.seats label { display: grid; place-items: center; min-width: 32px; min-height: 40px; border: 2px solid #0284c7; border-radius: 0.4rem 0.4rem 0.8rem 0.8rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; }
.seats .exit { border-style: double; border-width: 4px; }
.seats input:checked + label { background: #0284c7; color: #ffffff; }
.seats input:focus-visible + label { outline: 3px solid #0c4a6e; outline-offset: 2px; }
.seats input:disabled + label { border-color: #94a3b8; color: #94a3b8; cursor: not-allowed; background: repeating-linear-gradient(45deg, #f1f5f9 0 4px, #e2e8f0 4px 8px); }
.seats input:disabled + label::after { content: "✕"; }

.legend { display: flex; flex-wrap: wrap; gap: 0.5rem 1rem; align-items: center; font-size: 0.85rem; }
.key { display: inline-grid; place-items: center; width: 1rem; height: 1rem; border: 2px solid #0284c7; border-radius: 0.25rem; font-size: 0.6rem; }
.key--sel { background: #0284c7; }
.key--taken { border-color: #94a3b8; color: #64748b; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});

HCM.solutions.register(72, {
  scope: "core",
  notes: [
    "Core: four demos (steps() loader, 3D flip, hover lift, text shimmer) and the global pause switch.",
    "`body:has(#pause:checked)` pauses every running animation in one rule.",
    "Each tile tweaks timing through `--duration`, so the keyframes are reused."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CSS animation showcase</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>CSS animation showcase</h1>
    <label class="pause"><input type="checkbox" id="pause"> Pause all animations</label>
    <div class="grid">
      <figure class="demo"><div class="dots" aria-hidden="true"><span></span><span></span><span></span></div><figcaption>Stepped loader — <code>steps(4)</code></figcaption></figure>
      <figure class="demo"><button class="flip" type="button" aria-label="Flip card demo"><span class="flip__inner"><span class="flip__face">Front</span><span class="flip__face flip__face--back">Back</span></span></button><figcaption>3D flip — <code>backface-visibility</code></figcaption></figure>
      <figure class="demo"><a class="lift" href="#demo-3">Hover or focus me</a><figcaption>Lift — <code>transform</code> transition</figcaption></figure>
      <figure class="demo" id="demo-3"><p class="shimmer">Shimmer</p><figcaption>Text shimmer — <code>background-clip: text</code></figcaption></figure>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #f8fafc; background: #0f172a; }
main { max-width: 70rem; margin: 0 auto; }
.pause { display: inline-flex; gap: 0.5rem; margin-bottom: 1.5rem; }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: 1rem; }
.demo { --duration: 1.2s; display: grid; gap: 1rem; place-items: center; min-height: 12rem; margin: 0; padding: 1rem; overflow: hidden; border-radius: 1rem; background: #1e293b; }
figcaption { font-size: 0.85rem; color: #cbd5e1; text-align: center; }

.dots { display: flex; gap: 0.4rem; }
.dots span { width: 0.8rem; height: 0.8rem; border-radius: 50%; background: #5eead4; animation: blink var(--duration) steps(4) infinite; }
.dots span:nth-child(2) { animation-delay: 0.3s; }
.dots span:nth-child(3) { animation-delay: 0.6s; }
@keyframes blink { 0% { opacity: 0.2; } 50% { opacity: 1; } 100% { opacity: 0.2; } }

.flip { width: 8rem; height: 5rem; padding: 0; border: 0; background: none; perspective: 600px; color: inherit; font: inherit; cursor: pointer; }
.flip__inner { position: relative; display: block; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.6s ease; }
.flip:hover .flip__inner, .flip:focus-visible .flip__inner { transform: rotateY(180deg); }
.flip__face { position: absolute; inset: 0; display: grid; place-items: center; border-radius: 0.75rem; background: #7c3aed; backface-visibility: hidden; }
.flip__face--back { background: #0f766e; transform: rotateY(180deg); }

.lift { padding: 0.75rem 1.25rem; border-radius: 0.5rem; background: #f8fafc; color: #0f172a; text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease; }
.lift:hover, .lift:focus-visible { transform: translateY(-6px); box-shadow: 0 10px 0 #5eead4; }

.shimmer { margin: 0; font-size: 2.5rem; font-weight: 900; color: transparent; background: linear-gradient(90deg, #64748b 0 40%, #f8fafc 50%, #64748b 60% 100%) 0 0 / 300% 100%; -webkit-background-clip: text; background-clip: text; animation: shimmer calc(var(--duration) * 2) linear infinite; }
@keyframes shimmer { from { background-position: 100% 0; } to { background-position: 0 0; } }

body:has(#pause:checked) * { animation-play-state: paused !important; }
:focus-visible { outline: 3px solid #5eead4; outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
` }
  ]
});

HCM.solutions.register(73, {
  scope: "core",
  notes: [
    "Core: layered tokens and the button component with documented variants and states.",
    "Primitive tokens hold raw values; semantic tokens give them a purpose components can rely on.",
    "Utilities sit in the last layer, so they win without `!important`."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Buttons – Component library</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="docs">
    <h1>Component library</h1>
    <section aria-labelledby="buttons-title">
      <h2 id="buttons-title">Button</h2>
      <h3>Variants</h3>
      <div class="row">
        <button class="btn" type="button">Primary</button>
        <button class="btn btn--secondary" type="button">Secondary</button>
        <button class="btn btn--danger" type="button">Delete</button>
      </div>
      <h3>States</h3>
      <div class="row">
        <button class="btn" type="button">Default</button>
        <button class="btn is-hover" type="button">Hover</button>
        <button class="btn is-focus" type="button">Focus</button>
        <button class="btn" type="button" disabled>Disabled</button>
      </div>
      <pre><code>&lt;button class="btn btn--secondary" type="button"&gt;Save draft&lt;/button&gt;</code></pre>
      <p><strong>Do:</strong> use one primary button per view. <strong>Don't:</strong> use danger for non-destructive actions.</p>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
@layer tokens, base, components, utilities;

@layer tokens {
  :root {
    /* Primitive tokens: raw values */
    --teal-700: #0f766e; --teal-800: #115e59;
    --red-700: #b91c1c; --slate-900: #0f172a; --slate-500: #64748b; --white: #ffffff;
    --radius-2: 0.5rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;

    /* Semantic tokens: purpose */
    --color-action: var(--teal-700);
    --color-action-hover: var(--teal-800);
    --color-danger: var(--red-700);
    --color-text: var(--slate-900);
    --color-focus: var(--slate-900);
  }
}

@layer base {
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--color-text); }
  .docs { max-width: 48rem; margin: 0 auto; }
  .row { display: flex; flex-wrap: wrap; gap: var(--space-3); }
  pre { overflow-x: auto; padding: var(--space-4); border-radius: var(--radius-2); background: #f1f5f9; }
}

@layer components {
  .btn {
    min-height: 44px;
    padding: var(--space-2) var(--space-4);
    border: 2px solid var(--color-action);
    border-radius: var(--radius-2);
    background: var(--color-action);
    color: var(--white);
    font: inherit;
    font-weight: 700;
    cursor: pointer;
  }
  .btn:hover, .btn.is-hover { background: var(--color-action-hover); border-color: var(--color-action-hover); }
  .btn:focus-visible, .btn.is-focus { outline: 3px solid var(--color-focus); outline-offset: 3px; }
  .btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn--secondary { background: var(--white); color: var(--color-action); }
  .btn--secondary:hover { background: #f0fdfa; color: var(--color-action-hover); }
  .btn--danger { background: var(--color-danger); border-color: var(--color-danger); }
}

@layer utilities {
  .u-full { width: 100%; }
}
` }
  ]
});

HCM.solutions.register(74, {
  scope: "core",
  notes: [
    "Core: the cart page — a real table that reflows into cards, plus a summary placed with grid areas.",
    "Each quantity field's label includes the product name.",
    "On mobile the summary comes first; on desktop it moves to the right."
  ],
  files: [
    { name: "cart.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your basket – Northbound</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header"><a class="logo" href="index.html">Northbound</a><a class="basket" href="cart.html" aria-current="page">Basket <span class="badge">2</span></a></header>
  <main class="cart">
    <nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li aria-current="page">Basket</li></ol></nav>
    <h1>Your basket</h1>
    <div class="cart__layout">
      <table class="items">
        <caption class="vh">Items in your basket</caption>
        <thead><tr><th scope="col">Product</th><th scope="col">Price</th><th scope="col">Quantity</th><th scope="col" class="num">Total</th></tr></thead>
        <tbody>
          <tr><th scope="row">Day Pack 20 L</th><td data-label="Price">€59.00</td><td data-label="Quantity"><label class="vh" for="q1">Quantity of Day Pack 20 L</label><input id="q1" type="number" min="0" max="10" value="1"></td><td data-label="Total" class="num">€59.00</td></tr>
          <tr><th scope="row">Trail Bottle</th><td data-label="Price">€24.00</td><td data-label="Quantity"><label class="vh" for="q2">Quantity of Trail Bottle</label><input id="q2" type="number" min="0" max="10" value="2"></td><td data-label="Total" class="num">€48.00</td></tr>
        </tbody>
        <tfoot><tr><th scope="row" colspan="3">Subtotal</th><td class="num">€107.00</td></tr></tfoot>
      </table>
      <aside class="summary"><h2>Summary</h2><p>Total <strong>€107.00</strong></p><a class="button" href="checkout.html">Go to checkout</a></aside>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
a { color: inherit; }

.site-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e2e8f0; }
.logo { font-weight: 800; text-decoration: none; }
.basket { position: relative; padding-right: 1.5rem; }
.badge { position: absolute; top: -0.6rem; right: 0; min-width: 1.3rem; border-radius: 999px; background: #0f766e; color: #ffffff; font-size: 0.75rem; text-align: center; }

.cart { max-width: 64rem; margin: 0 auto; padding: 1.5rem 1rem; }
.breadcrumb ol { display: flex; gap: 0.5rem; margin: 0; padding: 0; list-style: none; font-size: 0.9rem; }
.breadcrumb li + li::before { content: "/ "; }

.cart__layout { display: grid; gap: 1.5rem; grid-template-areas: "summary" "items"; }
.items { grid-area: items; width: 100%; border-collapse: collapse; }
.summary { grid-area: summary; padding: 1.25rem; border-radius: 0.75rem; background: #f0fdfa; }

.items th, .items td { padding: 0.75rem; border-bottom: 1px solid #e2e8f0; text-align: left; }
.num { text-align: right; font-variant-numeric: tabular-nums; }
.items input { width: 4.5rem; min-height: 40px; padding: 0 0.5rem; font: inherit; }
.button { display: block; padding: 0.75rem; border-radius: 0.5rem; background: #0f766e; color: #ffffff; text-align: center; font-weight: 700; text-decoration: none; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 699px) {
  .items thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  .items, .items tbody, .items tfoot, .items tr, .items th, .items td { display: block; }
  .items tr { margin-bottom: 1rem; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 0.75rem; }
  .items td { display: flex; justify-content: space-between; border: 0; }
  .items td::before { content: attr(data-label); font-weight: 700; }
}

@media (min-width: 900px) {
  .cart__layout { grid-template-columns: 1fr 18rem; grid-template-areas: "items summary"; align-items: start; }
  .summary { position: sticky; top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(75, {
  scope: "core",
  notes: [
    "Core: the theming system — semantic tokens that switch with `prefers-color-scheme`.",
    "Components only use semantic tokens, so nothing needs a separate dark rule.",
    "`color-scheme` makes native controls and scrollbars match the theme."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>Flowboard – Home</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header"><a class="logo" href="index.html">Flowboard</a><nav aria-label="Main"><a href="index.html" aria-current="page">Home</a> <a href="features.html">Features</a> <a href="pricing.html">Pricing</a> <a href="blog.html">Blog</a></nav></header>
  <main>
    <section class="hero">
      <h1>Plan work in light or dark</h1>
      <p>Follows your system theme automatically.</p>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="images/sample-landscape.svg">
        <img src="images/sample-building.svg" width="600" height="450" alt="The Flowboard app showing a weekly plan">
      </picture>
      <a class="button" href="signup.html">Start free</a>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  color-scheme: light dark;
  --color-bg: #ffffff;
  --color-surface: #f5f3ff;
  --color-text: #1e1b4b;
  --color-muted: #4c4a6b;
  --color-accent: #6d28d9;
  --color-on-accent: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f0d1a;
    --color-surface: #1c1830;
    --color-text: #ede9fe;
    --color-muted: #c4b5fd;
    --color-accent: #c4b5fd;
    --color-on-accent: #1e1b4b;
  }
}

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: var(--color-text); background: var(--color-bg); }
a { color: var(--color-accent); }
a:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
img { display: block; max-width: 100%; height: auto; border-radius: 1rem; }

.site-header { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; padding: 1rem; background: var(--color-surface); }
.site-header nav a { margin-left: 0.75rem; }
.site-header [aria-current="page"] { font-weight: 800; }
.logo { font-weight: 800; color: var(--color-text); text-decoration: none; }

.hero { display: grid; gap: 1.5rem; max-width: 50rem; margin: 0 auto; padding: 3rem 1rem; text-align: center; justify-items: center; }
.hero h1 { margin: 0; font-size: clamp(2rem, 6vw, 3.25rem); }
.hero p { margin: 0; color: var(--color-muted); }
.button { padding: 0.75rem 1.5rem; border-radius: 999px; background: var(--color-accent); color: var(--color-on-accent); font-weight: 700; text-decoration: none; }
` }
  ]
});

HCM.solutions.register(76, {
  scope: "core",
  notes: [
    "Core: the fluid type scale, the asymmetric 12-column hero and the animated link underline.",
    "Each step of the type scale is a `clamp()` token, so headings resize smoothly.",
    "The underline grows from a zero-width gradient on hover and on keyboard focus."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Fold & Field – Digital agency</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="hero grid-12">
      <p class="hero__kicker">Digital agency · Lisbon</p>
      <h1 class="hero__title">We design calm products for busy people.</h1>
      <p class="hero__intro">Strategy, design and front-end development for teams who care about details.</p>
      <p class="hero__links"><a class="link" href="work.html">See our work</a> <a class="link" href="contact.html">Start a project</a></p>
      <img class="hero__image" src="images/sample-landscape.svg" width="800" height="500" alt="">
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --step-0: clamp(1rem, 0.95rem + 0.25vw, 1.15rem);
  --step-1: clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem);
  --step-2: clamp(1.45rem, 1.25rem + 1vw, 1.95rem);
  --step-3: clamp(1.8rem, 1.4rem + 2vw, 2.8rem);
  --step-4: clamp(2.3rem, 1.6rem + 3.5vw, 4.2rem);
  --step-5: clamp(2.8rem, 1.6rem + 6vw, 6rem);
  --space-s: 1rem; --space-m: 2rem; --space-l: 4rem;
  --ink: #111111; --paper: #f7f5f0; --accent: #c2410c;
}

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: var(--step-0); line-height: 1.6; color: var(--ink); background: var(--paper); }
img { display: block; width: 100%; height: auto; }

.grid-12 { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: var(--space-s); padding: var(--space-l) var(--space-s); }
.grid-12 > * { grid-column: 1 / -1; }

.hero__kicker { font-size: var(--step-0); text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); }
.hero__title { margin: 0; font-size: var(--step-5); line-height: 0.98; letter-spacing: -0.03em; }
.hero__intro { font-size: var(--step-1); max-width: 34ch; }
.hero__image { margin-top: var(--space-m); border-radius: 0.5rem; }

.link {
  margin-right: var(--space-s);
  color: inherit;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(currentColor 0 0) 0 100% / 0 2px no-repeat;
  transition: background-size 0.3s ease;
}
.link:hover, .link:focus-visible { background-size: 100% 2px; }
.link:focus-visible { outline: 3px solid var(--accent); outline-offset: 4px; }

@media (min-width: 768px) {
  .hero__kicker { grid-column: 2 / 6; }
  .hero__title { grid-column: 2 / 11; }
  .hero__intro { grid-column: 7 / 12; }
  .hero__links { grid-column: 7 / 12; }
  .hero__image { grid-column: 1 / 9; }
}

@media (prefers-reduced-motion: reduce) { .link { transition: none; } }
` }
  ]
});

HCM.solutions.register(77, {
  scope: "core",
  notes: [
    "Core: one project list rendered in three layouts chosen by radio inputs.",
    "Shared card styles come first; each layout only overrides what changes.",
    "The reading order never changes, only the visual arrangement."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Work – Iris Moreno</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="work">
    <h1>Selected work</h1>
    <fieldset class="switcher"><legend>Layout</legend>
      <label><input type="radio" name="view" id="view-grid" checked> Grid</label>
      <label><input type="radio" name="view" id="view-list"> List</label>
      <label><input type="radio" name="view" id="view-spotlight"> Spotlight</label>
    </fieldset>
    <ul class="projects">
      <li class="project"><img src="images/sample-landscape.svg" width="800" height="500" alt=""><div><h2><a href="case-ridge.html">Ridge Outdoor</a></h2><p class="meta">2026 · Art direction</p><p class="summary">A calmer storefront for a hiking brand.</p></div></li>
      <li class="project"><img src="images/sample-building.svg" width="600" height="450" alt=""><div><h2><a href="case-casa.html">Casa Verde</a></h2><p class="meta">2025 · Web design</p><p class="summary">Booking flow for a family restaurant.</p></div></li>
      <li class="project"><img src="images/sample-dish.svg" width="600" height="450" alt=""><div><h2><a href="case-pantry.html">Pantry</a></h2><p class="meta">2025 · Branding</p><p class="summary">A recipe app with a warm identity.</p></div></li>
    </ul>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #18181b; background: #fafafa; }
.work { max-width: 72rem; margin: 0 auto; }
.switcher { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border: 0; padding: 0; }
.switcher legend { font-weight: 700; }

/* Shared card styles */
.projects { display: grid; gap: 1.5rem; margin: 0; padding: 0; list-style: none; }
.project img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 0.5rem; }
.project h2 { margin: 0.75rem 0 0.25rem; font-size: 1.2rem; }
.project a { color: inherit; }
.meta { margin: 0; color: #52525b; font-size: 0.9rem; }
.summary { margin: 0.25rem 0 0; }

/* Grid (default) */
@media (min-width: 700px) { .projects { grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); } }
.work:has(#view-grid:checked) .summary { display: none; }

/* List */
.work:has(#view-list:checked) .projects { grid-template-columns: 1fr; gap: 0.75rem; }
.work:has(#view-list:checked) .project { display: grid; grid-template-columns: 6rem 1fr; gap: 1rem; align-items: center; }
.work:has(#view-list:checked) .project h2 { margin-top: 0; }

/* Spotlight */
@media (min-width: 700px) {
  .work:has(#view-spotlight:checked) .projects { grid-template-columns: repeat(2, 1fr); }
  .work:has(#view-spotlight:checked) .project:first-child { grid-column: 1 / -1; display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; align-items: end; }
  .work:has(#view-spotlight:checked) .project:first-child h2 { font-size: 2rem; }
}
` }
  ]
});

HCM.solutions.register(78, {
  scope: "core",
  notes: [
    "Core: the lesson view — captioned video, transcript, and a syllabus sidebar with lesson states.",
    "The current lesson uses `aria-current=\"step\"`; every state is also written in text.",
    "`<progress>` is styled for both WebKit and Firefox."
  ],
  files: [
    { name: "lesson.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lesson 4: Grid areas – Layout Bootcamp</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="lesson">
    <section class="player">
      <h1>Lesson 4: Grid areas</h1>
      <video controls preload="metadata" poster="images/sample-landscape.svg" width="800" height="500">
        <source src="video/lesson-4.mp4" type="video/mp4">
        <track kind="captions" src="video/lesson-4-en.vtt" srclang="en" label="English" default>
      </video>
      <details class="transcript"><summary>Read the transcript</summary><p>In this lesson we name areas and place items into them…</p></details>
      <label for="notes">Your notes</label>
      <textarea id="notes" rows="4"></textarea>
    </section>
    <aside class="syllabus" aria-labelledby="syllabus-title">
      <h2 id="syllabus-title">Module 2: Grid</h2>
      <label for="course-progress">Course progress: 40%</label>
      <progress id="course-progress" max="100" value="40">40%</progress>
      <ol>
        <li class="done"><a href="lesson-1.html">Tracks <span>(completed)</span></a></li>
        <li class="done"><a href="lesson-2.html">Gaps <span>(completed)</span></a></li>
        <li class="current"><a href="lesson-4.html" aria-current="step">Grid areas <span>(current)</span></a></li>
        <li class="locked"><a href="lesson-5.html">Subgrid <span>(not started)</span></a></li>
      </ol>
    </aside>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1e1b4b; background: #faf5ff; }
.lesson { display: grid; gap: 1.5rem; max-width: 80rem; margin: 0 auto; padding: 1.5rem 1rem; }
video { display: block; width: 100%; height: auto; border-radius: 0.75rem; background: #000000; }
.transcript { margin: 1rem 0; }
textarea { width: 100%; padding: 0.5rem; border: 1px solid #6b7280; border-radius: 0.5rem; font: inherit; }

.syllabus { padding: 1.25rem; border-radius: 0.75rem; background: #ffffff; }
.syllabus ol { margin: 1rem 0 0; padding: 0; list-style: none; }
.syllabus li a { display: block; padding: 0.6rem 0.75rem 0.6rem 2rem; border-radius: 0.5rem; color: inherit; text-decoration: none; position: relative; }
.syllabus li a::before { position: absolute; left: 0.6rem; }
.done a::before { content: "✓"; color: #15803d; }
.current a { background: #ede9fe; font-weight: 700; }
.current a::before { content: "▶"; color: #6d28d9; }
.locked a { color: #6b7280; }
.locked a::before { content: "○"; }
.syllabus li span { font-size: 0.8rem; font-weight: 400; color: #6b7280; }

progress { width: 100%; height: 0.75rem; appearance: none; border: 0; border-radius: 999px; background: #ede9fe; }
progress::-webkit-progress-bar { border-radius: 999px; background: #ede9fe; }
progress::-webkit-progress-value { border-radius: 999px; background: #6d28d9; }
progress::-moz-progress-bar { border-radius: 999px; background: #6d28d9; }

@media (min-width: 1024px) {
  .lesson { grid-template-columns: minmax(0, 1fr) 20rem; align-items: start; }
  .syllabus { position: sticky; top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(79, {
  scope: "core",
  notes: [
    "Core: logical-property layout, the hover/focus image swap and the `:target` quick view.",
    "Every margin, padding and offset uses logical properties, so `dir=\"rtl\"` mirrors cleanly.",
    "The swap also triggers on `:focus-within`, so keyboard users see the second image."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Summer collection – Atelier Nord</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="collection">
    <h1>Summer collection</h1>
    <ul class="products">
      <li class="product">
        <div class="product__media"><img src="images/sample-product.svg" width="600" height="450" alt="Linen shirt, folded"><img class="alt" src="images/sample-landscape.svg" width="800" height="500" alt=""></div>
        <h2><a href="linen-shirt.html">Linen shirt</a></h2>
        <p>€89</p>
        <a class="quick" href="#qv-1">Quick view<span class="vh">: Linen shirt</span></a>
      </li>
    </ul>
    <div id="qv-1" class="quickview" role="dialog" aria-label="Quick view: Linen shirt">
      <a class="quickview__close" href="#">Close</a>
      <img src="images/sample-product.svg" width="600" height="450" alt="Linen shirt, folded">
      <div><h2>Linen shirt</h2><p>€89</p><label for="size">Size</label><select id="size"><option>S</option><option>M</option><option>L</option></select><button type="button">Add to bag</button></div>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1c1917; background: #fafaf9; }
.collection { max-inline-size: 76rem; margin-inline: auto; padding-block: 2rem; padding-inline: 1rem; }
img { display: block; inline-size: 100%; block-size: auto; }

.products { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 0; padding: 0; list-style: none; }
.product h2 { margin-block: 0.5rem 0; font-size: 1rem; }
.product p { margin-block: 0; }
.product a { color: inherit; }

.product__media { display: grid; }
.product__media img { grid-area: 1 / 1; aspect-ratio: 3 / 4; object-fit: cover; }
.product__media .alt { opacity: 0; transition: opacity 0.3s ease; }
.product:hover .alt, .product:focus-within .alt { opacity: 1; }

.quick { display: inline-block; margin-block-start: 0.5rem; padding-inline: 0.75rem; border-inline-start: 3px solid #1c1917; }

.quickview { display: none; position: fixed; inset: 0; z-index: 40; gap: 1rem; padding: 3rem 1rem 1rem; overflow-y: auto; background: #ffffff; }
.quickview:target { display: grid; align-content: start; }
.quickview__close { position: absolute; inset-block-start: 1rem; inset-inline-end: 1rem; font-weight: 700; }
.quickview select, .quickview button { display: block; inline-size: 100%; min-block-size: 44px; margin-block-start: 0.5rem; font: inherit; }
.quickview button { border: 0; background: #1c1917; color: #ffffff; font-weight: 700; }

:focus-visible { outline: 3px solid #c2410c; outline-offset: 2px; }
.vh { position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 900px) {
  .products { grid-template-columns: repeat(4, 1fr); }
  .quickview { inset-block: 10vh; inset-inline: 15vw; grid-template-columns: 1fr 1fr; border-radius: 1rem; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35); }
}
` }
  ]
});

HCM.solutions.register(80, {
  scope: "core",
  notes: [
    "Core: the accessible transfer form and the date-grouped transaction table.",
    "The currency symbol is a positioned prefix, never part of the input's value.",
    "Contrast ratios for the main colour pairs are written as CSS comments."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Transfer money – Harbour Bank (practice)</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="bank">
    <h1>Transfer money</h1>
    <form class="transfer" action="confirm.html" method="post">
      <div class="field"><label for="from">From</label><select id="from"><option>Current •••• 4821</option><option>Savings •••• 1177</option></select></div>
      <div class="field"><label for="to">To</label><select id="to"><option>Savings •••• 1177</option><option>Current •••• 4821</option></select></div>
      <div class="field">
        <label for="amount">Amount</label>
        <div class="money"><span class="money__prefix" aria-hidden="true">€</span><input id="amount" type="number" min="0.01" step="0.01" inputmode="decimal" aria-describedby="amount-help" required></div>
        <p id="amount-help" class="help">In euros, up to two decimals.</p>
      </div>
      <div class="field"><label for="ref">Reference</label><input id="ref" maxlength="18"></div>
      <button type="submit">Review transfer</button>
    </form>
    <div class="history">
      <table>
        <caption>Recent transactions</caption>
        <thead><tr><th scope="col">Description</th><th scope="col" class="num">Amount</th></tr></thead>
        <tbody>
          <tr class="group"><th colspan="2" scope="rowgroup"><time datetime="2026-06-03">3 June</time></th></tr>
          <tr><td>Grocer's</td><td class="num">−€42.10</td></tr>
          <tr><td>Refund</td><td class="num">+€15.00</td></tr>
        </tbody>
        <tbody>
          <tr class="group"><th colspan="2" scope="rowgroup"><time datetime="2026-06-02">2 June</time></th></tr>
          <tr><td>Rent</td><td class="num">−€850.00</td></tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
/*
  Contrast (checked in DevTools):
  #0b2545 on #ffffff  ≈ 15:1   body text
  #1d4ed8 on #ffffff  ≈ 6.7:1  links and focus
  #475569 on #ffffff  ≈ 7.6:1  helper text
*/
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0b2545; background: #ffffff; }
.bank { display: grid; gap: 2rem; max-width: 64rem; margin: 0 auto; padding: 2rem 1rem; }

.transfer { display: grid; gap: 1rem; padding: 1.5rem; border: 1px solid #cbd5e1; border-radius: 0.75rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
label { font-weight: 700; }
input, select, button { min-height: 48px; font: inherit; }
input, select { width: 100%; padding: 0 0.75rem; border: 2px solid #475569; border-radius: 0.5rem; background: #ffffff; color: inherit; }
.money { position: relative; }
.money__prefix { position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); font-weight: 700; }
.money input { padding-left: 2rem; font-variant-numeric: tabular-nums; }
.help { margin: 0; color: #475569; font-size: 0.9rem; }
button { border: 0; border-radius: 0.5rem; background: #1d4ed8; color: #ffffff; font-weight: 700; }
:focus-visible { outline: 3px solid #1d4ed8; outline-offset: 3px; }

.history { max-height: 24rem; overflow: auto; border: 1px solid #cbd5e1; border-radius: 0.75rem; }
table { width: 100%; border-collapse: separate; border-spacing: 0; }
caption { padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
th, td { padding: 0.6rem 1rem; border-bottom: 1px solid #e2e8f0; text-align: left; background: #ffffff; }
.num { text-align: right; font-variant-numeric: tabular-nums; }
.group th { position: sticky; top: 0; background: #e0e7ff; }

@media (min-width: 900px) { .bank { grid-template-columns: 1fr 1fr; align-items: start; } .bank h1 { grid-column: 1 / -1; } }
` }
  ]
});
