/*
 * Model solutions for projects 21–30 (complete solutions).
 */
HCM.solutions.register(21, {
  scope: "full",
  notes: [
    "Flex-basis values give the form a wider column and let both columns wrap naturally.",
    "Required status is written in each label, not just shown with an asterisk.",
    "`resize: vertical` stops the textarea from breaking the layout sideways."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact us – Brightside Studio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="contact">
      <div class="contact__info">
        <h1>Get in touch</h1>
        <address>Brightside Studio<br>22 Harbour Road<br>Bristol BS1 5TY</address>
        <p><a href="tel:+441170000000">+44 117 000 0000</a></p>
        <p>Monday to Friday, 9:00–17:30</p>
      </div>
      <form class="contact__form" action="thanks.html" method="post">
        <div class="field"><label for="name">Name (required)</label><input id="name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="email">Email (required)</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>
        <div class="field">
          <label for="subject">Subject (required)</label>
          <select id="subject" name="subject" required>
            <option value="">Choose a subject</option>
            <option>New project</option><option>Existing project</option><option>Something else</option>
          </select>
        </div>
        <div class="field"><label for="message">Message (required)</label><textarea id="message" name="message" rows="6" required></textarea></div>
        <button type="submit">Send message</button>
      </form>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111827; background: #fff7ed; }

.contact { display: flex; flex-wrap: wrap; gap: 2rem; max-width: 64rem; margin-inline: auto; }
.contact__info { flex: 1 1 16rem; }
.contact__form { flex: 2 1 24rem; padding: 1.5rem; border-radius: 0.75rem; background: #ffffff; }

address { font-style: normal; }
a { color: #c2410c; }

.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
label { font-weight: 600; }

input, select, textarea, button { font: inherit; }

input, select, textarea {
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #78716c;
  border-radius: 0.5rem;
}

textarea { min-height: 8rem; resize: vertical; }

input:focus-visible, select:focus-visible, textarea:focus-visible, button:focus-visible { outline: 3px solid #c2410c; outline-offset: 2px; }

button { min-height: 44px; padding: 0.6rem 1.5rem; border: 0; border-radius: 0.5rem; background: #c2410c; color: #ffffff; font-weight: 700; cursor: pointer; }
` }
  ]
});

HCM.solutions.register(22, {
  scope: "full",
  notes: [
    "`repeat(auto-fit, minmax(15rem, 1fr))` creates 1, 2 or 3 columns with no media queries.",
    "Icons use `currentColor`, so one `color` on the wrapper recolours them all.",
    "Every selector is a single class, keeping specificity flat."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Why choose Tasklight</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="features" aria-labelledby="features-title">
      <h2 id="features-title" class="features__title">Why choose Tasklight</h2>
      <p class="features__intro">Small tools that save you an hour a day.</p>
      <ul class="features__list">
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12l4 4 10-10"/></svg></span>
          <h3 class="feature__title">Quick capture</h3>
          <p class="feature__text">Add a task in two keystrokes.</p>
        </li>
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span>
          <h3 class="feature__title">Smart reminders</h3>
          <p class="feature__text">Nudges at the moment you need them.</p>
        </li>
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 3L5 14h6l-1 7 8-11h-6z"/></svg></span>
          <h3 class="feature__title">Fast everywhere</h3>
          <p class="feature__text">Opens instantly, even offline.</p>
        </li>
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="4" width="16" height="16" rx="3"/></svg></span>
          <h3 class="feature__title">Tidy boards</h3>
          <p class="feature__text">Group tasks the way you think.</p>
        </li>
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7z"/></svg></span>
          <h3 class="feature__title">Private by design</h3>
          <p class="feature__text">Your data stays on your device.</p>
        </li>
        <li class="feature">
          <span class="feature__icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 18h16M7 14l3-3 3 3 4-5"/></svg></span>
          <h3 class="feature__title">Weekly review</h3>
          <p class="feature__text">See what you finished at a glance.</p>
        </li>
      </ul>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 3rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #0f172a; background: #f8fafc; }

.features { max-width: 72rem; margin-inline: auto; text-align: center; }
.features__title { margin: 0; font-size: 2rem; }
.features__intro { margin: 0.5rem 0 2.5rem; color: #475569; }

.features__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.feature { padding: 1.5rem; border-radius: 1rem; background: #ffffff; text-align: left; }

.feature__icon {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: #7c3aed;
  background: #ede9fe;
}

.feature__icon svg { width: 1.5rem; height: 1.5rem; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

.feature__title { margin: 1rem 0 0.25rem; font-size: 1.1rem; }
.feature__text { margin: 0; color: #475569; }
` }
  ]
});

HCM.solutions.register(23, {
  scope: "full",
  notes: [
    "Each testimonial is a `<figure>`: the quote in `<blockquote>`, the person in `<figcaption>`.",
    "The big quotation mark is decorative `::before` content positioned behind the text.",
    "Flex items stretch, so all cards share the tallest card's height."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>What our customers say</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="testimonials">
      <h2>What our customers say</h2>
      <div class="testimonials__list">
        <figure class="testimonial">
          <blockquote><p>Setup took five minutes and the team adopted it the same day.</p></blockquote>
          <figcaption><img src="images/sample-avatar.svg" width="48" height="48" alt=""><span><strong>Priya Shah</strong><br>Studio manager</span></figcaption>
        </figure>
        <figure class="testimonial">
          <blockquote><p>The weekly review alone has changed how I plan. I finally finish what I start, and I can see it.</p></blockquote>
          <figcaption><img src="images/sample-avatar.svg" width="48" height="48" alt=""><span><strong>Tom Becker</strong><br>Freelance writer</span></figcaption>
        </figure>
        <figure class="testimonial">
          <blockquote><p>Fast, calm and private. Exactly what I wanted.</p></blockquote>
          <figcaption><img src="images/sample-avatar.svg" width="48" height="48" alt=""><span><strong>Ana Lopes</strong><br>Teacher</span></figcaption>
        </figure>
      </div>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 3rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1e293b; background: #f1f5f9; }

.testimonials { max-width: 72rem; margin-inline: auto; }
.testimonials h2 { text-align: center; }

.testimonials__list { display: flex; flex-wrap: wrap; gap: 1.5rem; }

.testimonial {
  position: relative;
  flex: 1 1 18rem;
  margin: 0;
  padding: 2.5rem 1.5rem 1.5rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.testimonial::before {
  content: "“" / "";
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  font-family: Georgia, serif;
  font-size: 6rem;
  line-height: 1;
  color: #ccfbf1;
}

.testimonial blockquote { position: relative; margin: 0 0 1.25rem; font-size: 1.05rem; }
.testimonial blockquote p { margin: 0; }

figcaption { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; }
figcaption img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
` }
  ]
});

HCM.solutions.register(24, {
  scope: "full",
  notes: [
    "A `::after` layer with `inset: 0` adds a dark gradient behind the place name.",
    "The lift uses `transform`, which is smoother than animating `top`.",
    "`:focus-within` makes the card react when its link has keyboard focus."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Destination – Lisbon</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="destination">
      <div class="destination__media">
        <img src="images/sample-landscape.svg" width="800" height="500" alt="Hills above the river at sunset">
        <h2 class="destination__name">Lisbon</h2>
      </div>
      <div class="destination__body">
        <dl class="facts">
          <div><dt>Best time</dt><dd>May–Sep</dd></div>
          <div><dt>Flight</dt><dd>2 h 30</dd></div>
          <div><dt>Currency</dt><dd>Euro</dd></div>
        </dl>
        <a class="destination__link" href="lisbon.html">Explore<span class="visually-hidden"> Lisbon</span></a>
      </div>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #e2e8f0; }

.destination {
  max-width: 24rem;
  margin-inline: auto;
  overflow: hidden;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.destination:hover, .destination:focus-within {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.2);
}

.destination__media { position: relative; }
.destination__media img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; }

.destination__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent 60%);
}

.destination__name {
  position: absolute;
  left: 1.25rem;
  bottom: 1rem;
  z-index: 1;
  margin: 0;
  font-size: 2rem;
  color: #ffffff;
}

.destination__body { padding: 1.25rem; }

.facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin: 0 0 1rem; }
.facts dt { font-size: 0.75rem; text-transform: uppercase; color: #64748b; }
.facts dd { margin: 0; font-weight: 700; }

.destination__link { color: #0369a1; font-weight: 700; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 359px) { .facts { grid-template-columns: 1fr; } }

@media (prefers-reduced-motion: reduce) {
  .destination, .destination:hover, .destination:focus-within { transition: none; transform: none; }
}
` }
  ]
});

HCM.solutions.register(25, {
  scope: "full",
  notes: [
    "All three pages link the same `styles.css` and share an identical header.",
    "Only `aria-current=\"page\"` changes between the pages' navigation.",
    "The skip link is hidden until it receives keyboard focus."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sam Rivera – Front-end learner</title>
  <meta name="description" content="Sam Rivera's personal website: projects, notes and contact.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="index.html">Sam Rivera</a>
      <nav aria-label="Main">
        <ul class="nav">
          <li><a href="index.html" aria-current="page">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main id="main" class="container">
    <section class="hero">
      <h1>Hi, I'm Sam. I build small, careful websites.</h1>
      <p>I'm learning HTML and CSS one project at a time.</p>
      <a class="button" href="projects.html">See my projects</a>
    </section>
  </main>
  <footer class="site-footer"><div class="container"><p>© 2026 Sam Rivera</p></div></footer>
</body>
</html>
` },
    { name: "about.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About – Sam Rivera</title>
  <meta name="description" content="About Sam Rivera and the skills Sam is learning.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="index.html">Sam Rivera</a>
      <nav aria-label="Main">
        <ul class="nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html" aria-current="page">About</a></li>
          <li><a href="projects.html">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main id="main" class="container">
    <h1>About me</h1>
    <p>I studied graphic design and now I'm learning to build what I design.</p>
    <h2>Skills I'm practising</h2>
    <ul><li>Semantic HTML</li><li>Flexbox and Grid</li><li>Accessible forms</li></ul>
  </main>
  <footer class="site-footer"><div class="container"><p>© 2026 Sam Rivera</p></div></footer>
</body>
</html>
` },
    { name: "projects.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Projects – Sam Rivera</title>
  <meta name="description" content="Practice projects built by Sam Rivera.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="index.html">Sam Rivera</a>
      <nav aria-label="Main">
        <ul class="nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html" aria-current="page">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main id="main" class="container">
    <h1>Projects</h1>
    <ul class="cards">
      <li class="card"><h2>Profile card</h2><p>The box model, one card at a time.</p></li>
      <li class="card"><h2>Recipe page</h2><p>Lists, figures and readable text.</p></li>
      <li class="card"><h2>Newsletter form</h2><p>Labels and built-in validation.</p></li>
    </ul>
  </main>
  <footer class="site-footer"><div class="container"><p>© 2026 Sam Rivera</p></div></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --color-text: #1f2937;
  --color-muted: #4b5563;
  --color-accent: #0f766e;
  --color-surface: #f0fdfa;
  --font-body: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --space: 1rem;
}

*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: var(--font-body); line-height: 1.6; color: var(--color-text); }

.container { max-width: 64rem; margin-inline: auto; padding-inline: var(--space); }

.skip-link { position: absolute; left: var(--space); top: -4rem; padding: 0.5rem 1rem; background: var(--color-accent); color: #ffffff; }
.skip-link:focus { top: var(--space); }

.site-header { border-bottom: 1px solid #e5e7eb; }
.site-header__inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; padding-block: var(--space); }
.logo { font-weight: 800; color: var(--color-text); text-decoration: none; }

.nav { display: flex; gap: var(--space); margin: 0; padding: 0; list-style: none; }
.nav a { color: var(--color-muted); text-decoration: none; padding: 0.5rem 0; }
.nav a[aria-current="page"] { color: var(--color-accent); font-weight: 700; border-bottom: 3px solid var(--color-accent); }

main { padding-block: calc(var(--space) * 3); }

.hero h1 { font-size: clamp(2rem, 5vw, 3rem); margin-top: 0; }
.button { display: inline-block; padding: 0.7rem 1.4rem; border-radius: 0.5rem; background: var(--color-accent); color: #ffffff; font-weight: 700; text-decoration: none; }

.cards { display: flex; flex-wrap: wrap; gap: var(--space); margin: 0; padding: 0; list-style: none; }
.card { flex: 1 1 16rem; padding: calc(var(--space) * 1.5); border-radius: 0.75rem; background: var(--color-surface); }
.card h2 { margin-top: 0; font-size: 1.15rem; }

.site-footer { padding-block: var(--space); color: var(--color-muted); border-top: 1px solid #e5e7eb; }
a:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
` }
  ]
});

HCM.solutions.register(26, {
  scope: "full",
  notes: [
    "Base CSS is written for phones; the two `min-width` queries only add layout.",
    "The dish cards use Grid; the about block uses Flexbox — each tool for its job.",
    "A single spacing scale (`--space-1` … `--space-6`) is used everywhere."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Casa Verde – Restaurant</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <p class="logo">Casa Verde</p>
    <nav aria-label="Main">
      <ul class="nav"><li><a href="#about">About</a></li><li><a href="#menu">Menu</a></li><li><a href="#visit">Visit</a></li></ul>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1>Seasonal plates, slow evenings</h1>
      <a class="button" href="#menu">See the menu</a>
    </section>
    <section class="about" id="about">
      <img src="images/sample-building.svg" width="600" height="450" alt="Our whitewashed restaurant with a red roof">
      <div><h2>About us</h2><p>A family kitchen cooking with what the season brings.</p></div>
    </section>
    <section class="menu" id="menu">
      <h2>From the menu</h2>
      <ul class="dishes">
        <li><article class="dish"><img src="images/sample-dish.svg" width="600" height="450" alt="Tomato tart with basil"><h3>Tomato tart</h3><p>€9</p></article></li>
        <li><article class="dish"><img src="images/sample-dish.svg" width="600" height="450" alt="Grilled vegetables on a plate"><h3>Grilled garden plate</h3><p>€14</p></article></li>
        <li><article class="dish"><img src="images/sample-dish.svg" width="600" height="450" alt="Lemon pudding with berries"><h3>Lemon pudding</h3><p>€7</p></article></li>
      </ul>
    </section>
    <section class="visit" id="visit">
      <div><h2>Find us</h2><address>Rua das Flores 12<br>Porto</address></div>
      <table>
        <caption>Opening hours</caption>
        <tbody>
          <tr><th scope="row">Tue–Fri</th><td>18:00–23:00</td></tr>
          <tr><th scope="row">Sat–Sun</th><td>12:00–23:00</td></tr>
          <tr><th scope="row">Mon</th><td>Closed</td></tr>
        </tbody>
      </table>
    </section>
  </main>
  <footer class="site-footer"><p>© 2026 Casa Verde</p></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 1rem;
  --space-4: 1.5rem; --space-5: 2rem; --space-6: 3rem;
  --green: #166534;
  --cream: #fefce8;
}

*, *::before, *::after { box-sizing: border-box; }

/* Base: small screens */
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1c1917; background: var(--cream); }
img { display: block; max-width: 100%; height: auto; border-radius: 0.75rem; }
section { padding: var(--space-6) var(--space-3); }

.site-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-2); padding: var(--space-3); }
.logo { margin: 0; font-weight: 800; color: var(--green); }
.nav { display: flex; flex-wrap: wrap; gap: var(--space-2); margin: 0; padding: 0; list-style: none; }
.nav a { display: block; padding: var(--space-2) var(--space-3); min-height: 44px; color: inherit; }

.hero { text-align: center; background: var(--green); color: #ffffff; }
.button { display: block; padding: var(--space-3); border-radius: 0.5rem; background: #ffffff; color: var(--green); font-weight: 700; text-decoration: none; }

.about { display: flex; flex-direction: column; gap: var(--space-4); }

.dishes { display: grid; gap: var(--space-4); margin: 0; padding: 0; list-style: none; }
.dish h3 { margin: var(--space-2) 0 0; }
.dish p { margin: 0; font-weight: 700; color: var(--green); }

.visit { display: grid; gap: var(--space-4); }
address { font-style: normal; }
table { border-collapse: collapse; }
caption { text-align: left; font-weight: 700; }
th, td { padding: var(--space-2) var(--space-3); border-bottom: 1px solid #d6d3d1; text-align: left; }

.site-footer { padding: var(--space-3); text-align: center; }

/* Tablet */
@media (min-width: 768px) {
  .button { display: inline-block; padding: var(--space-3) var(--space-5); }
  .about { flex-direction: row; align-items: center; }
  .about img { flex: 1 1 50%; }
  .about div { flex: 1 1 50%; }
  .dishes { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  section { max-width: 70rem; margin-inline: auto; }
  .dishes { grid-template-columns: repeat(3, 1fr); }
  .visit { grid-template-columns: 1fr 1fr; }
}
` }
  ]
});

HCM.solutions.register(27, {
  scope: "full",
  notes: [
    "`minmax(0, 1fr)` stops long words from widening the main column.",
    "The featured card is the same `.post-card` plus a small modifier.",
    "Excerpts are clamped to three lines with the line-clamp properties."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Layout Notes – Blog</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="masthead"><p class="logo">Layout Notes</p></header>
  <div class="page">
    <main>
      <h1 class="visually-hidden">Latest posts</h1>
      <article class="post-card post-card--featured">
        <img src="images/sample-landscape.svg" width="800" height="500" alt="">
        <div class="post-card__body">
          <h2><a href="grid-areas.html">Grid areas finally made sense</a></h2>
          <time datetime="2026-04-02">2 April 2026</time>
          <p class="post-card__excerpt">Named areas turned my messy dashboard into something I can read at a glance. Here is the exact process I used, from paper sketch to final CSS, with every mistake I made on the way.</p>
        </div>
      </article>
      <ul class="posts">
        <li><article class="post-card"><img src="images/sample-dish.svg" width="600" height="450" alt=""><div class="post-card__body"><h2><a href="clamp.html">Fluid type with clamp()</a></h2><time datetime="2026-03-28">28 March 2026</time><p class="post-card__excerpt">Three values, one line, and headings that scale smoothly across every screen size without a single media query.</p></div></article></li>
        <li><article class="post-card"><img src="images/sample-building.svg" width="600" height="450" alt=""><div class="post-card__body"><h2><a href="forms.html">Forms that explain themselves</a></h2><time datetime="2026-03-20">20 March 2026</time><p class="post-card__excerpt">Labels, hints and the pseudo-class that waits before showing an error.</p></div></article></li>
      </ul>
    </main>
    <aside class="sidebar">
      <nav aria-label="Categories"><h2>Categories</h2><ul><li><a href="css.html">CSS</a></li><li><a href="html.html">HTML</a></li><li><a href="a11y.html">Accessibility</a></li></ul></nav>
      <form class="newsletter" action="subscribe.html" method="post">
        <h2>Newsletter</h2>
        <label for="nl-email">Email</label>
        <input id="nl-email" type="email" name="email" autocomplete="email" required>
        <button type="submit">Subscribe</button>
      </form>
    </aside>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111827; background: #f9fafb; }
img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }

.masthead { padding: 1rem; border-bottom: 1px solid #e5e7eb; }
.logo { margin: 0; font-weight: 800; }

.page { display: grid; gap: 2rem; max-width: 76rem; margin: 0 auto; padding: 2rem 1rem; }

.posts { display: grid; gap: 1.5rem; margin: 1.5rem 0 0; padding: 0; list-style: none; }

.post-card { overflow: hidden; border-radius: 0.75rem; background: #ffffff; }
.post-card__body { padding: 1.25rem; }
.post-card h2 { margin: 0 0 0.25rem; font-size: 1.2rem; }
.post-card h2 a { color: inherit; text-decoration: none; }
.post-card h2 a:hover { text-decoration: underline; }
.post-card time { font-size: 0.85rem; color: #6b7280; }

.post-card__excerpt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  margin: 0.5rem 0 0;
}

.sidebar { display: grid; gap: 1.5rem; align-content: start; }
.sidebar h2 { font-size: 1rem; }
.newsletter { display: grid; gap: 0.5rem; padding: 1rem; border-radius: 0.75rem; background: #ecfeff; }
.newsletter input, .newsletter button { min-height: 44px; font: inherit; border-radius: 0.5rem; }
.newsletter input { border: 1px solid #6b7280; padding: 0 0.75rem; }
.newsletter button { border: 0; background: #0e7490; color: #ffffff; font-weight: 700; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 768px) {
  .post-card--featured { display: grid; grid-template-columns: 1fr 1fr; }
  .post-card--featured img { height: 100%; aspect-ratio: auto; }
}

@media (min-width: 1024px) {
  .page { grid-template-columns: minmax(0, 1fr) 18rem; }
  .posts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
` }
  ]
});

HCM.solutions.register(28, {
  scope: "full",
  notes: [
    "`clamp()` mixes `rem` and `vw`, so the heading scales smoothly and still respects zoom.",
    "`auto-fill` keeps empty tracks; switch to `auto-fit` to see the difference with two cards.",
    "Each card link has visually hidden text so its name is unique."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sam Rivera – Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <h1>Sam Rivera</h1>
    <p>Front-end developer who loves tidy CSS and fast, accessible pages.</p>
    <ul class="chips" aria-label="Skills">
      <li>HTML</li><li>CSS Grid</li><li>Flexbox</li><li>Accessibility</li><li>Responsive design</li>
    </ul>
  </header>
  <main>
    <section class="projects" aria-labelledby="work">
      <h2 id="work">Selected work</h2>
      <div class="grid">
        <article class="project">
          <img src="images/sample-landscape.svg" width="800" height="500" alt="">
          <h3>Weather App</h3>
          <p>A calm forecast layout with a fluid type scale.</p>
          <ul class="chips"><li>Grid</li><li>clamp()</li></ul>
          <p class="links"><a href="weather/index.html">Live demo<span class="visually-hidden"> of Weather App</span></a> <a href="weather/source.html">Source code<span class="visually-hidden"> of Weather App</span></a></p>
        </article>
        <article class="project">
          <img src="images/sample-dish.svg" width="600" height="450" alt="">
          <h3>Recipe Box</h3>
          <p>Printable recipe cards with clean lists.</p>
          <ul class="chips"><li>Lists</li><li>Print CSS</li></ul>
          <p class="links"><a href="recipes/index.html">Live demo<span class="visually-hidden"> of Recipe Box</span></a> <a href="recipes/source.html">Source code<span class="visually-hidden"> of Recipe Box</span></a></p>
        </article>
        <article class="project">
          <img src="images/sample-building.svg" width="600" height="450" alt="">
          <h3>House Hunt</h3>
          <p>Listing cards with structured facts.</p>
          <ul class="chips"><li>Flexbox</li><li>dl</li></ul>
          <p class="links"><a href="houses/index.html">Live demo<span class="visually-hidden"> of House Hunt</span></a> <a href="houses/source.html">Source code<span class="visually-hidden"> of House Hunt</span></a></p>
        </article>
      </div>
    </section>
    <section class="contact"><h2>Let's work together</h2><a href="mailto:sam@example.com">sam@example.com</a></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #e2e8f0; background: #0f172a; }
img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 0.5rem; }
a { color: #5eead4; }

.hero, .projects, .contact { max-width: 72rem; margin: 0 auto; padding: 3rem 1rem; }
.hero h1 { margin: 0; font-size: clamp(2rem, 1rem + 5vw, 4rem); line-height: 1.1; }

.chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; padding: 0; list-style: none; }
.chips li { display: inline-flex; align-items: center; padding: 0.2rem 0.75rem; border-radius: 999px; background: #1e293b; font-size: 0.85rem; }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); gap: 1.5rem; }

.project {
  padding: 1rem;
  border: 1px solid #334155;
  border-radius: 0.75rem;
  background: #111c31;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project:hover, .project:focus-within { transform: translateY(-4px); border-color: #5eead4; }
.project h3 { margin: 1rem 0 0.25rem; }
.links { display: flex; gap: 1rem; }

a:focus-visible { outline: 3px solid #5eead4; outline-offset: 3px; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (prefers-reduced-motion: reduce) { .project { transition: none; } }
` }
  ]
});

HCM.solutions.register(29, {
  scope: "full",
  notes: [
    "Each product card is a flex column, so `margin-top: auto` lines buttons up across a row.",
    "The page grid only gains its 16rem filter column from 1024px.",
    "The list heading is visually hidden but still available to screen readers."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Backpacks – Trail Shop</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="shop">
    <nav aria-label="Breadcrumb" class="breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="bags.html">Bags</a></li><li aria-current="page">Backpacks</li></ol></nav>
    <header class="shop__head">
      <h1>Backpacks</h1>
      <p>12 products</p>
      <div class="sort"><label for="sort">Sort by</label><select id="sort"><option>Most popular</option><option>Price: low to high</option><option>Price: high to low</option></select></div>
    </header>
    <div class="listing">
      <aside class="filters">
        <form action="backpacks.html">
          <fieldset><legend>Brand</legend>
            <label><input type="checkbox" name="brand" value="ridge"> Ridge</label>
            <label><input type="checkbox" name="brand" value="summit"> Summit</label>
            <label><input type="checkbox" name="brand" value="valley"> Valley</label>
          </fieldset>
          <label for="price">Maximum price</label>
          <input id="price" type="range" min="20" max="200" value="120">
          <p class="range-values"><span>€20</span><span>€200</span></p>
          <button type="submit">Apply filters</button>
        </form>
      </aside>
      <section>
        <h2 class="visually-hidden">Products</h2>
        <ul class="products">
          <li><article class="product"><img src="images/sample-product.svg" width="600" height="450" alt="Teal 20 litre day pack"><h3>Day Pack 20 L</h3><p>Rated 4.6 out of 5</p><p class="price">€59</p><button type="button">Add to basket</button></article></li>
          <li><article class="product"><img src="images/sample-product.svg" width="600" height="450" alt="Grey roll-top pack"><h3>Roll-top Commuter Pack with Laptop Sleeve</h3><p>Rated 4.2 out of 5</p><p class="price">€89</p><button type="button">Add to basket</button></article></li>
          <li><article class="product"><img src="images/sample-product.svg" width="600" height="450" alt="Large trekking pack"><h3>Trek 45 L</h3><p>Rated 4.8 out of 5</p><p class="price">€149</p><button type="button">Add to basket</button></article></li>
        </ul>
      </section>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f9fafb; }
.shop { max-width: 80rem; margin: 0 auto; padding: 1.5rem 1rem; }

.breadcrumb ol { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0; padding: 0; list-style: none; font-size: 0.9rem; }
.breadcrumb li + li::before { content: "/"; margin-right: 0.5rem; color: #9ca3af; }

.shop__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem 1.5rem; }
.sort { margin-left: auto; display: flex; gap: 0.5rem; align-items: center; }
select, button, input { font: inherit; }
select { min-height: 44px; }

.listing { display: grid; gap: 1.5rem; }

.filters { padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.filters fieldset { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin: 0 0 1rem; border: 0; padding: 0; }
.filters legend { font-weight: 700; margin-bottom: 0.5rem; }
.filters input[type="range"] { width: 100%; }
.range-values { display: flex; justify-content: space-between; margin: 0 0 1rem; font-size: 0.85rem; }

.products { display: grid; grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)); gap: 1rem; margin: 0; padding: 0; list-style: none; }

.product { display: flex; flex-direction: column; height: 100%; padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.product img { width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; }
.product h3 { margin: 0.75rem 0 0.25rem; font-size: 1rem; }
.product p { margin: 0; }
.price { font-weight: 800; margin-top: 0.5rem; }
.product button, .filters button { min-height: 44px; margin-top: auto; border: 0; border-radius: 0.5rem; background: #1d4ed8; color: #ffffff; font-weight: 700; }
.product button { margin-top: auto; }
.product .price { margin-bottom: 1rem; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 1024px) {
  .listing { grid-template-columns: 16rem 1fr; align-items: start; }
  .filters fieldset { grid-template-columns: 1fr; }
}
` }
  ]
});

HCM.solutions.register(30, {
  scope: "full",
  notes: [
    "The radios come before `.plans`, so `#yearly:checked ~ .plans` can swap every price.",
    "Radios are hidden visually but stay focusable; their labels show the focus ring.",
    "The featured card only scales from 1024px, where there is room around it."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pricing – Tasklight</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="pricing">
      <h2>Simple pricing</h2>
      <input class="visually-hidden" type="radio" name="billing" id="monthly" checked>
      <label class="switch switch--left" for="monthly">Monthly</label>
      <input class="visually-hidden" type="radio" name="billing" id="yearly">
      <label class="switch switch--right" for="yearly">Yearly</label>
      <div class="plans">
        <article class="plan">
          <h3>Starter</h3>
          <p class="price price--monthly">$5 <span>per month</span></p>
          <p class="price price--yearly">$48 <span>per year</span></p>
          <ul><li>3 boards</li><li>Email support</li></ul>
        </article>
        <article class="plan plan--featured">
          <p class="badge">Most popular</p>
          <h3>Team</h3>
          <p class="price price--monthly">$12 <span>per month</span></p>
          <p class="price price--yearly">$115 <span>per year</span></p>
          <ul><li>Unlimited boards</li><li>Shared spaces</li><li>Priority support</li></ul>
        </article>
        <article class="plan">
          <h3>Business</h3>
          <p class="price price--monthly">$29 <span>per month</span></p>
          <p class="price price--yearly">$278 <span>per year</span></p>
          <ul><li>Everything in Team</li><li>Admin controls</li></ul>
        </article>
      </div>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 3rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }

.pricing { max-width: 64rem; margin: 0 auto; text-align: center; }

.switch { display: inline-block; min-height: 44px; padding: 0.6rem 1.25rem; border: 2px solid #4338ca; cursor: pointer; font-weight: 700; color: #4338ca; }
.switch--left { border-radius: 999px 0 0 999px; }
.switch--right { border-radius: 0 999px 999px 0; margin-left: -2px; }
input:checked + .switch { background: #4338ca; color: #ffffff; }
input:focus-visible + .switch { outline: 3px solid #0f172a; outline-offset: 3px; }

.plans { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 2rem; text-align: left; }
.plan { flex: 1 1 16rem; padding: 1.5rem; border: 2px solid #e2e8f0; border-radius: 1rem; background: #ffffff; }
.plan--featured { border-color: #4338ca; }
.badge { display: inline-block; margin: 0 0 0.5rem; padding: 0.1rem 0.6rem; border-radius: 999px; background: #e0e7ff; color: #3730a3; font-weight: 700; font-size: 0.8rem; }

.price { font-size: 2rem; font-weight: 800; margin: 0.25rem 0 1rem; }
.price span { font-size: 0.9rem; font-weight: 400; color: #64748b; }
.price--yearly { display: none; }
#yearly:checked ~ .plans .price--yearly { display: block; }
#yearly:checked ~ .plans .price--monthly { display: none; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 1024px) {
  .plans { flex-wrap: nowrap; align-items: center; padding: 1rem; }
  .plan--featured { transform: scale(1.05); }
}
` }
  ]
});
