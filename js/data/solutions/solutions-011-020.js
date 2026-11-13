/*
 * Model solutions for projects 11–20 (complete solutions).
 */
HCM.solutions.register(11, {
  scope: "full",
  notes: [
    "The current page is marked with `aria-current=\"page\"` and styled through that attribute.",
    "Padding sits on the links, so the whole 44px area is clickable.",
    "`flex-wrap` lets the links drop under the logo on narrow screens."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home – Studio Nord</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <a class="logo" href="index.html">Studio Nord</a>
    <nav aria-label="Main">
      <ul class="nav">
        <li><a href="index.html" aria-current="page">Home</a></li>
        <li><a href="work.html">Work</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome to Studio Nord</h1>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
main { padding: 2rem 1rem; }

.site-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.logo { font-weight: 800; font-size: 1.25rem; color: #111827; text-decoration: none; }

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav a {
  display: block;
  min-height: 44px;
  padding: 0.65rem 0.75rem;
  border-radius: 0.4rem;
  text-decoration: none;
}

/* Link states in LVHA order */
.nav a:link { color: #374151; }
.nav a:visited { color: #374151; }
.nav a:hover { background: #f3f4f6; color: #111827; }
.nav a:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; }
.nav a:active { background: #e5e7eb; }

.nav a[aria-current="page"] {
  color: #0f766e;
  font-weight: 700;
  box-shadow: inset 0 -3px 0 #0f766e;
}

@media (max-width: 599px) {
  .site-header { flex-direction: column; align-items: flex-start; }
}
` }
  ]
});

HCM.solutions.register(12, {
  scope: "full",
  notes: [
    "Every colour and space comes from custom properties on `:root`.",
    "`flex: 1 1 15rem` lets the features wrap from three columns to one without media queries.",
    "The hero button is an in-page link to the call-to-action section."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Plantly – Keep your plants alive</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <p class="logo">Plantly</p>
  </header>
  <main>
    <section class="hero">
      <div>
        <h1>Never forget to water again</h1>
        <p>Plantly reminds you when each plant needs care.</p>
        <a class="button" href="#start">Start your free trial</a>
      </div>
    </section>
    <section class="features" aria-labelledby="features-title">
      <h2 id="features-title" class="features__title">Why people love it</h2>
      <article class="feature"><h3>Smart reminders</h3><p>Schedules based on each plant's needs.</p></article>
      <article class="feature"><h3>Light checker</h3><p>Find the best spot in your home.</p></article>
      <article class="feature"><h3>Care diary</h3><p>Track growth with notes and photos.</p></article>
    </section>
    <section class="cta" id="start">
      <h2>Ready to grow?</h2>
      <a class="button button--light" href="signup.html">Create your account</a>
    </section>
  </main>
  <footer class="site-footer"><p>© 2026 Plantly</p></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --color-primary: #15803d;
  --color-text: #14231a;
  --color-surface: #f0fdf4;
  --color-light: #ffffff;
  --space: 1rem;
}

*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: var(--color-text); }

.site-header, .site-footer { padding: var(--space); }
.logo { margin: 0; font-weight: 800; color: var(--color-primary); }

.hero {
  display: grid;
  place-items: center;
  min-height: 60vh;
  padding: calc(var(--space) * 2);
  text-align: center;
  background: var(--color-surface);
}

.hero h1 { font-size: clamp(2rem, 6vw, 3.25rem); margin: 0 0 var(--space); }

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-light);
  font-weight: 700;
  text-decoration: none;
}

.button:focus-visible { outline: 3px solid var(--color-text); outline-offset: 3px; }
.button--light { background: var(--color-light); color: var(--color-primary); }

.features {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space) * 1.5);
  max-width: 64rem;
  margin: 0 auto;
  padding: calc(var(--space) * 3) var(--space);
}

.features__title { flex-basis: 100%; text-align: center; }
.feature { flex: 1 1 15rem; padding: var(--space); border-radius: 0.75rem; background: var(--color-surface); }

.cta {
  padding: calc(var(--space) * 3) var(--space);
  text-align: center;
  background: var(--color-primary);
  color: var(--color-light);
}
` }
  ]
});

HCM.solutions.register(13, {
  scope: "full",
  notes: [
    "`aspect-ratio: 1` and `object-fit: cover` make every thumbnail the same square.",
    "`overflow: hidden` on the figure keeps the hover zoom inside its frame.",
    "Columns grow from 1 to 3 with two `min-width` media queries."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gallery – Weekend walks</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="gallery-section">
      <h2>Weekend walks</h2>
      <ul class="gallery">
        <li><figure><img src="images/sample-landscape.svg" width="800" height="500" alt="Mountains at sunset"><figcaption>Ridge at dusk</figcaption></figure></li>
        <li><figure><img src="images/sample-building.svg" width="600" height="450" alt="A small white house with a red roof"><figcaption>The farmhouse</figcaption></figure></li>
        <li><figure><img src="images/sample-dish.svg" width="600" height="450" alt="A tart on a white plate"><figcaption>Lunch stop</figcaption></figure></li>
        <li><figure><img src="images/sample-avatar.svg" width="400" height="400" alt="My walking partner smiling"><figcaption>Walking partner</figcaption></figure></li>
        <li><figure><img src="images/sample-product.svg" width="600" height="450" alt="A teal water bottle"><figcaption>Essential kit</figcaption></figure></li>
        <li><figure><img src="images/sample-landscape.svg" width="800" height="500" alt="Hills fading into orange sky"><figcaption>Last light</figcaption></figure></li>
        <li><figure><img src="images/sample-building.svg" width="600" height="450" alt="A cottage beside a tree"><figcaption>Cottage</figcaption></figure></li>
        <li><figure><img src="images/sample-dish.svg" width="600" height="450" alt="Tomatoes and basil on pastry"><figcaption>Picnic</figcaption></figure></li>
        <li><figure><img src="images/sample-landscape.svg" width="800" height="500" alt="A green valley below dark peaks"><figcaption>The valley</figcaption></figure></li>
      </ul>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }

.gallery-section { max-width: 70rem; margin-inline: auto; }

.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

figure { margin: 0; overflow: hidden; border-radius: 0.75rem; background: #f3f4f6; }

figure img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.3s ease;
}

figure:hover img { transform: scale(1.05); }
figcaption { padding: 0.5rem 0.75rem; font-size: 0.9rem; }

@media (min-width: 600px) { .gallery { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px) { .gallery { grid-template-columns: repeat(3, 1fr); } }

@media (prefers-reduced-motion: reduce) {
  figure img { transition: none; }
}
` }
  ]
});

HCM.solutions.register(14, {
  scope: "full",
  notes: [
    "Gradient and photo are layered in one `background` declaration — the first layer is on top.",
    "`scroll-margin-top` stops headings hiding at the very top after a jump.",
    "Smooth scrolling only applies when the visitor hasn't asked for reduced motion."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My hobbies – Sam Rivera</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body id="top">
  <header class="page-header">
    <h1>Things I love doing</h1>
    <nav aria-label="Table of contents">
      <ul class="toc">
        <li><a href="#hiking">Hiking</a></li>
        <li><a href="#baking">Baking</a></li>
        <li><a href="#photography">Photography</a></li>
        <li><a href="#chess">Chess</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="hiking" class="hobby hobby--photo">
      <h2>Hiking</h2>
      <p>Long walks with a flask of tea and no signal.</p>
    </section>
    <section id="baking" class="hobby">
      <h2>Baking</h2>
      <p>Sourdough on Saturdays, tarts when friends visit.</p>
      <img src="images/sample-dish.svg" width="600" height="450" alt="A homemade tomato tart">
    </section>
    <blockquote class="quote"><p>Do more of what makes you curious.</p></blockquote>
    <section id="photography" class="hobby">
      <h2>Photography</h2>
      <p>Mostly landscapes, mostly at sunset.</p>
      <img src="images/sample-landscape.svg" width="800" height="500" alt="Mountains at sunset">
    </section>
    <section id="chess" class="hobby">
      <h2>Chess</h2>
      <p>Slow games, terrible openings, great endgames.</p>
    </section>
  </main>
  <footer class="page-footer"><a href="#top">Back to top</a></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1f2937; }
img { display: block; max-width: 100%; height: auto; border-radius: 0.5rem; }

.page-header {
  padding: 3rem 1rem 2rem;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #0f766e);
}

.toc { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1.25rem; margin: 0; padding: 0; list-style: none; }
.toc a { color: #ffffff; font-weight: 600; }

.hobby { max-width: 48rem; margin: 0 auto; padding: 2.5rem 1rem; scroll-margin-top: 1rem; }

.hobby--photo {
  max-width: none;
  color: #ffffff;
  background:
    linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)),
    url("images/sample-landscape.svg") center / cover no-repeat;
}

.quote {
  margin: 0;
  padding: 3rem 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
  background: radial-gradient(circle at center, #fef3c7, #fde68a);
}

.page-footer { padding: 2rem 1rem; text-align: center; }
` }
  ]
});

HCM.solutions.register(15, {
  scope: "full",
  notes: [
    "The card is a flex column; `margin-top: auto` pins the button to the bottom.",
    "Ticks are decorative `::before` content with empty alternative text.",
    "Hierarchy comes from size, weight and colour: price, then plan name, then muted details."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pro plan – Pricing</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="plan">
      <h2 class="plan__name">Pro</h2>
      <p class="plan__price">$12<span class="plan__period"> per month</span></p>
      <p class="plan__desc">Everything a freelancer needs.</p>
      <ul class="plan__features">
        <li>Unlimited projects</li>
        <li>50 GB storage</li>
        <li>Custom domain</li>
        <li>Priority email support</li>
        <li>Version history for 90 days</li>
      </ul>
      <a class="plan__button" href="signup.html?plan=pro">Choose Pro</a>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: #0f172a;
  background: #eef2ff;
}

.plan {
  display: flex;
  flex-direction: column;
  max-width: 22rem;
  min-height: 30rem;
  margin-inline: auto;
  padding: 2rem;
  border-radius: 1rem;
  background: #ffffff;
}

.plan__name { margin: 0; font-size: 1.25rem; color: #4338ca; }
.plan__price { margin: 0.5rem 0 0; font-size: 2.75rem; font-weight: 800; }
.plan__period { font-size: 1rem; font-weight: 400; color: #64748b; }
.plan__desc { margin: 0.25rem 0 1.5rem; color: #64748b; }

.plan__features { margin: 0 0 1.5rem; padding: 0; list-style: none; }
.plan__features li { position: relative; padding-left: 1.75rem; }
.plan__features li + li { margin-top: 0.5rem; }
.plan__features li::before {
  content: "✓" / "";
  position: absolute;
  left: 0;
  font-weight: 800;
  color: #4338ca;
}

.plan__button {
  margin-top: auto;
  padding: 0.85rem;
  border-radius: 0.6rem;
  background: #4338ca;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
}

.plan__button:hover { background: #3730a3; }
.plan__button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
` }
  ]
});

HCM.solutions.register(16, {
  scope: "full",
  notes: [
    "Each `<meter>` has its own `<label>`, so the value is announced with a name.",
    "One `.panel` class gives every section the same padding, border and radius.",
    "From 900px a `18rem 1fr` grid creates the sidebar layout."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Alex Chen – Student profile</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="profile">
    <header class="panel profile__intro">
      <img src="images/sample-avatar.svg" width="160" height="160" alt="Alex Chen">
      <h1>Alex Chen</h1>
      <p>Web Design · Year 2</p>
      <a href="mailto:alex@example.com">alex@example.com</a>
    </header>
    <div class="profile__main">
      <section class="panel">
        <h2>Grades</h2>
        <div class="table-wrap">
          <table>
            <caption>Grades for this school year</caption>
            <thead><tr><th scope="col">Subject</th><th scope="col">Term 1</th><th scope="col">Term 2</th><th scope="col">Average</th></tr></thead>
            <tbody>
              <tr><th scope="row">HTML</th><td>88</td><td>92</td><td>90</td></tr>
              <tr><th scope="row">CSS</th><td>81</td><td>89</td><td>85</td></tr>
              <tr><th scope="row">Design</th><td>76</td><td>84</td><td>80</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="panel">
        <h2>Skills</h2>
        <div class="skill"><label for="skill-html">HTML – 90%</label><meter id="skill-html" min="0" max="100" value="90">90%</meter></div>
        <div class="skill"><label for="skill-css">CSS – 75%</label><meter id="skill-css" min="0" max="100" value="75">75%</meter></div>
        <div class="skill"><label for="skill-a11y">Accessibility – 60%</label><meter id="skill-a11y" min="0" max="100" value="60">60%</meter></div>
      </section>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f3f4f6; }

.profile { display: grid; gap: 1.5rem; max-width: 64rem; margin-inline: auto; }
.profile__main { display: grid; gap: 1.5rem; }

.panel { padding: 1.5rem; border: 1px solid #d1d5db; border-radius: 0.75rem; background: #ffffff; }
.panel h2 { margin-top: 0; }

.profile__intro { text-align: center; }
.profile__intro img { display: block; margin: 0 auto 1rem; border-radius: 50%; }
.profile__intro h1 { margin: 0; }

.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
caption { text-align: left; font-weight: 700; padding-bottom: 0.5rem; }
th, td { padding: 0.5rem; border-bottom: 1px solid #e5e7eb; text-align: left; }
thead th { background: #ecfeff; }
td { text-align: right; font-variant-numeric: tabular-nums; }

.skill + .skill { margin-top: 1rem; }
.skill label { display: block; font-weight: 600; }
meter { width: 100%; height: 1rem; }

@media (min-width: 900px) {
  .profile { grid-template-columns: 18rem 1fr; align-items: start; }
}
` }
  ]
});

HCM.solutions.register(17, {
  scope: "full",
  notes: [
    "`<details>`/`<summary>` give keyboard support with no JavaScript.",
    "The default marker is hidden in all browsers and replaced with `::after`.",
    "`details[open]` changes the icon and highlights the open question."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FAQ – Northside Bikes</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="faq">
    <h1>Frequently asked questions</h1>
    <section>
      <h2>Repairs</h2>
      <details><summary>How long does a service take?</summary><p>Most services are ready within two working days.</p></details>
      <details><summary>Do I need to book?</summary><p>Booking is recommended but walk-ins are welcome before 11:00.</p></details>
      <details><summary>Can you fix electric bikes?</summary><p>Yes — we service most electric bike motors and batteries.</p></details>
    </section>
    <section>
      <h2>Orders</h2>
      <details><summary>Do you deliver?</summary><p>We deliver within 20 km for a flat fee.</p></details>
      <details><summary>Can I return a bike?</summary><p>Unused bikes can be returned within 30 days.</p></details>
      <details><summary>Do you offer gift cards?</summary><p>Yes, in any amount from €10.</p></details>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111827; }

.faq { max-width: 44rem; margin-inline: auto; }

details { border-bottom: 1px solid #d1d5db; border-left: 4px solid transparent; }

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 44px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}

summary::-webkit-details-marker { display: none; }
summary::after { content: "+"; font-size: 1.4rem; line-height: 1; color: #0f766e; }
summary:focus-visible { outline: 3px solid #0f766e; outline-offset: -3px; }

details[open] { border-left-color: #0f766e; background: #f0fdfa; }
details[open] summary::after { content: "−"; }
details p { margin: 0; padding: 0 1rem 1rem; }
` }
  ]
});

HCM.solutions.register(18, {
  scope: "full",
  notes: [
    "`type=\"email\"` and `required` let the browser do the validation.",
    "`:user-invalid` only shows errors after someone has interacted with a field.",
    "`flex-wrap` puts the field and button on one row only when there's room."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Subscribe – The Weekly Layout</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="signup">
      <h2>The Weekly Layout</h2>
      <p>One short CSS tip in your inbox every Friday.</p>
      <form class="signup__form" action="subscribe.html" method="post">
        <div class="signup__row">
          <div class="field">
            <label for="email">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required>
          </div>
          <button type="submit">Subscribe</button>
        </div>
        <div class="consent">
          <input id="consent" name="consent" type="checkbox" required>
          <label for="consent">I agree to receive the newsletter.</label>
        </div>
      </form>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f8fafc; }

.signup {
  max-width: 28rem;
  margin-inline: auto;
  padding: 1.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  background: #ffffff;
}

.signup h2 { margin-top: 0; }

.signup__row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: flex-end; }
.field { display: flex; flex: 1 1 14rem; flex-direction: column; gap: 0.25rem; }
label { font-weight: 600; }

input[type="email"], button {
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font: inherit;
}

input[type="email"] { width: 100%; border: 1px solid #64748b; }
button { flex: 1 1 8rem; border: 0; background: #0f766e; color: #ffffff; font-weight: 700; cursor: pointer; }
button:hover { background: #115e59; }

input:focus-visible, button:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; }
input:user-invalid { border-color: #b91c1c; outline-color: #b91c1c; }

.consent { display: flex; gap: 0.5rem; align-items: flex-start; margin-top: 1rem; }
.consent label { font-weight: 400; }
.consent input { width: 1.2rem; height: 1.2rem; margin-top: 0.2rem; accent-color: #0f766e; }
` }
  ]
});

HCM.solutions.register(19, {
  scope: "full",
  notes: [
    "Standard `autocomplete` tokens let password managers fill the form.",
    "`display: grid; place-items: center` on a full-height `<main>` centres the card.",
    "`font: inherit` makes inputs and buttons use the page font."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign in – Notebook</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <form class="login" action="dashboard.html" method="post">
      <h1>Sign in</h1>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="username" required>
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" minlength="8" required>
      </div>
      <div class="row">
        <label class="remember"><input type="checkbox" name="remember"> Remember me</label>
        <a href="reset-password.html">Forgotten your password?</a>
      </div>
      <button type="submit">Sign in</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #e0e7ff; }

main { display: grid; place-items: center; min-height: 100vh; padding: 1rem; }

.login {
  width: 100%;
  max-width: 24rem;
  padding: 2rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
}

.login h1 { margin-top: 0; }

.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
label { font-weight: 600; }

input, button { font: inherit; }

input[type="email"], input[type="password"] {
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #64748b;
  border-radius: 0.5rem;
}

.row { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.5rem; margin-bottom: 1.25rem; font-size: 0.9rem; }
.remember { font-weight: 400; display: flex; gap: 0.4rem; align-items: center; }
.row a { color: #3730a3; }

button {
  width: 100%;
  min-height: 44px;
  border: 0;
  border-radius: 0.5rem;
  background: #3730a3;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

input:focus-visible, button:focus-visible, a:focus-visible { outline: 3px solid #3730a3; outline-offset: 2px; }
` }
  ]
});

HCM.solutions.register(20, {
  scope: "full",
  notes: [
    "Two `<fieldset>`s group the form; each `<legend>` is read before its controls.",
    "Radios share one `name`, so only one account type can be chosen.",
    "`aria-describedby` connects the password rule to the password field."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Create an account – Notebook</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <form class="register" action="welcome.html" method="post">
      <h1>Create your account</h1>
      <fieldset>
        <legend>Your details</legend>
        <div class="name-row">
          <div class="field"><label for="first">First name</label><input id="first" name="first" autocomplete="given-name" required></div>
          <div class="field"><label for="last">Last name</label><input id="last" name="last" autocomplete="family-name" required></div>
        </div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="dob">Date of birth</label><input id="dob" name="dob" type="date" required></div>
        <div class="field">
          <label for="country">Country</label>
          <select id="country" name="country" required>
            <option value="">Choose a country</option>
            <option>Portugal</option><option>Spain</option><option>United Kingdom</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Account</legend>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" autocomplete="new-password" minlength="10" aria-describedby="password-help" required>
          <p id="password-help" class="help">At least 10 characters.</p>
        </div>
        <fieldset class="choices">
          <legend>Account type</legend>
          <label><input type="radio" name="type" value="personal" checked> Personal</label>
          <label><input type="radio" name="type" value="business"> Business</label>
        </fieldset>
        <label class="terms"><input type="checkbox" name="terms" required> I accept the terms of use</label>
      </fieldset>
      <button type="submit">Create account</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f9fafb; }

.register { max-width: 36rem; margin-inline: auto; }

fieldset { margin: 0 0 1.5rem; padding: 1.25rem; border: 1px solid #d1d5db; border-radius: 0.75rem; background: #ffffff; }
legend { padding: 0 0.5rem; font-weight: 700; color: #0f766e; }

.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
label { font-weight: 600; }

input:not([type="radio"]):not([type="checkbox"]), select {
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #6b7280;
  border-radius: 0.5rem;
  font: inherit;
}

input:user-invalid, select:user-invalid { border-color: #b91c1c; }
input:focus-visible, select:focus-visible, button:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; }

.help { margin: 0; font-size: 0.875rem; color: #4b5563; }
.choices { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; padding: 0.75rem 1rem; }
.choices legend { color: #111827; font-weight: 600; }
.choices label, .terms { font-weight: 400; display: flex; gap: 0.4rem; align-items: center; }
input[type="radio"], input[type="checkbox"] { width: 1.2rem; height: 1.2rem; accent-color: #0f766e; }

button { width: 100%; min-height: 44px; border: 0; border-radius: 0.5rem; background: #0f766e; color: #ffffff; font: inherit; font-weight: 700; cursor: pointer; }

.name-row { display: grid; gap: 0 1rem; }
@media (min-width: 600px) { .name-row { grid-template-columns: 1fr 1fr; } }
` }
  ]
});
