/*
 * Model solutions for projects 31–40 (complete solutions).
 */
HCM.solutions.register(31, {
  scope: "full",
  notes: [
    "After `appearance: none`, checkboxes and radios are rebuilt with borders, a `:checked` fill and a focus ring.",
    "Error messages come after their inputs, so `input:user-invalid ~ .error` can reveal them.",
    "`::file-selector-button` makes the file input's button match the other buttons."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact support – Fieldwork</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <form class="form" action="sent.html" method="post" enctype="multipart/form-data">
      <h1>Contact support</h1>
      <fieldset>
        <legend>Your details</legend>
        <div class="field">
          <label for="name">Full name</label>
          <input id="name" name="name" autocomplete="name" required aria-describedby="name-error">
          <p class="error" id="name-error">Please enter your name.</p>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required aria-describedby="email-error">
          <p class="error" id="email-error">Enter an email address like name@example.com.</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Your request</legend>
        <div class="field">
          <label for="reason">Reason</label>
          <div class="select"><select id="reason" name="reason" required aria-describedby="reason-error">
            <option value="">Choose a reason</option><option>Billing</option><option>Technical problem</option><option>Feedback</option>
          </select></div>
          <p class="error" id="reason-error">Choose a reason.</p>
        </div>
        <fieldset class="choices">
          <legend>Preferred contact</legend>
          <label><input type="radio" name="contact" value="email" checked> Email</label>
          <label><input type="radio" name="contact" value="phone"> Phone</label>
        </fieldset>
        <div class="field">
          <label for="file">Screenshot (PNG or JPG)</label>
          <input id="file" name="file" type="file" accept=".png,.jpg,.jpeg">
        </div>
        <label class="consent"><input type="checkbox" name="consent" required> I agree to be contacted about this request.</label>
      </fieldset>
      <button type="submit">Send request</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f3f4f6; }

.form { max-width: 36rem; margin-inline: auto; }
fieldset { margin: 0 0 1.25rem; padding: 1.25rem; border: 1px solid #d1d5db; border-radius: 0.75rem; background: #ffffff; }
legend { font-weight: 700; }
.choices { padding: 0.75rem 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; }

.field { display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 1rem; }
label { font-weight: 600; }

input, select, button { font: inherit; color: inherit; }

input[type="text"], input:not([type]), input[type="email"], select {
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #6b7280;
  border-radius: 0.5rem;
  background: #ffffff;
}

/* Custom select arrow */
select { appearance: none; padding-right: 2.5rem; }
.select { position: relative; }
.select::after {
  content: "";
  position: absolute;
  right: 1rem;
  top: 50%;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 2px solid #374151;
  border-bottom: 2px solid #374151;
  transform: translateY(-70%) rotate(45deg);
  pointer-events: none;
}

/* Custom checkbox and radio */
input[type="checkbox"], input[type="radio"] {
  appearance: none;
  display: inline-grid;
  place-content: center;
  width: 1.4rem;
  height: 1.4rem;
  margin: 0;
  border: 2px solid #374151;
  background: #ffffff;
  vertical-align: middle;
}

input[type="checkbox"] { border-radius: 0.3rem; }
input[type="radio"] { border-radius: 50%; }
input[type="checkbox"]::before, input[type="radio"]::before { content: ""; width: 0.7rem; height: 0.7rem; transform: scale(0); transition: transform 0.1s; background: #0f766e; }
input[type="checkbox"]::before { clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0, 43% 62%); }
input[type="radio"]::before { border-radius: 50%; }
input:checked::before { transform: scale(1); }

.choices label, .consent { display: flex; gap: 0.5rem; align-items: center; font-weight: 400; }

input::file-selector-button {
  margin-right: 0.75rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  background: #e5e7eb;
  font-weight: 600;
  cursor: pointer;
}

:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px; }

.error { display: none; margin: 0; color: #b91c1c; font-size: 0.875rem; }
input:user-invalid, select:user-invalid { border-color: #b91c1c; }
input:user-invalid ~ .error { display: block; }
.select:has(select:user-invalid) ~ .error { display: block; }

button { min-height: 44px; padding: 0.6rem 1.5rem; border: 0; border-radius: 0.5rem; background: #0f766e; color: #ffffff; font-weight: 700; cursor: pointer; }
` }
  ]
});

HCM.solutions.register(32, {
  scope: "full",
  notes: [
    "`grid-column: 1 / -1` lets wide fields span both columns whatever the column count.",
    "The section nav is sticky only from 1024px, where there is room beside the form.",
    "Input types (url, number, month) give the right keyboard and validation for free."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Apply – Junior Front-end Developer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="layout">
    <nav class="form-nav" aria-label="Form sections">
      <ol><li><a href="#personal">Personal details</a></li><li><a href="#experience">Experience</a></li><li><a href="#skills">Skills</a></li><li><a href="#documents">Documents</a></li></ol>
    </nav>
    <form action="applied.html" method="post" enctype="multipart/form-data">
      <h1>Junior Front-end Developer</h1>
      <fieldset id="personal"><legend>Personal details</legend>
        <div class="fields">
          <div class="field"><label for="fn">First name</label><input id="fn" autocomplete="given-name" required></div>
          <div class="field"><label for="ln">Last name</label><input id="ln" autocomplete="family-name" required></div>
          <div class="field"><label for="em">Email</label><input id="em" type="email" autocomplete="email" required></div>
          <div class="field"><label for="ph">Phone</label><input id="ph" type="tel" autocomplete="tel"></div>
          <div class="field field--wide"><label for="addr">Address</label><input id="addr" autocomplete="street-address"></div>
        </div>
      </fieldset>
      <fieldset id="experience"><legend>Experience</legend>
        <div class="fields">
          <div class="field"><label for="years">Years of experience</label><input id="years" type="number" min="0" max="50" required></div>
          <div class="field"><label for="start">Available from</label><input id="start" type="month"></div>
          <div class="field field--wide"><label for="site">Portfolio URL</label><input id="site" type="url" placeholder="e.g. example.com/portfolio"></div>
        </div>
      </fieldset>
      <fieldset id="skills"><legend>Skills</legend>
        <div class="checks">
          <label><input type="checkbox" name="skills" value="html"> HTML</label>
          <label><input type="checkbox" name="skills" value="css"> CSS</label>
          <label><input type="checkbox" name="skills" value="a11y"> Accessibility</label>
          <label><input type="checkbox" name="skills" value="design"> UI design</label>
        </div>
      </fieldset>
      <fieldset id="documents"><legend>Documents</legend>
        <div class="fields">
          <div class="field field--wide"><label for="cv">CV (PDF)</label><input id="cv" type="file" accept=".pdf" required></div>
          <div class="field field--wide"><label for="letter">Cover letter</label><textarea id="letter" rows="6"></textarea></div>
        </div>
      </fieldset>
      <button type="submit">Send application</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f8fafc; }
.layout { max-width: 72rem; margin: 0 auto; padding: 2rem 1rem; }

.form-nav { display: none; }
.form-nav ol { margin: 0; padding-left: 1.25rem; }
.form-nav a { color: #1d4ed8; }

fieldset { margin: 0 0 1.5rem; padding: 1.25rem; border: 1px solid #cbd5e1; border-radius: 0.75rem; background: #ffffff; scroll-margin-top: 1rem; }
legend { font-weight: 700; padding: 0 0.25rem; }

.fields { display: grid; grid-template-columns: 1fr; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.field--wide { grid-column: 1 / -1; }
label { font-weight: 600; }

input, textarea, button { font: inherit; }
input:not([type="checkbox"]):not([type="file"]), textarea { width: 100%; min-height: 44px; padding: 0.5rem 0.75rem; border: 1px solid #64748b; border-radius: 0.5rem; }
textarea { resize: vertical; }

.checks { display: flex; flex-wrap: wrap; gap: 0.75rem 1.5rem; }
.checks label { font-weight: 400; display: flex; gap: 0.4rem; align-items: center; }

button { min-height: 44px; padding: 0.6rem 1.5rem; border: 0; border-radius: 0.5rem; background: #1d4ed8; color: #ffffff; font-weight: 700; }
:focus-visible { outline: 3px solid #1d4ed8; outline-offset: 2px; }

@media (min-width: 700px) {
  .fields { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .layout { display: grid; grid-template-columns: 14rem 1fr; gap: 2rem; align-items: start; }
  .form-nav { display: block; position: sticky; top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(33, {
  scope: "full",
  notes: [
    "In your project each `srcset` entry is a different exported file; here they point to the sample so the preview works.",
    "`sizes` tells the browser how wide each thumbnail is shown at each breakpoint.",
    "Only the `<img>` inside `<picture>` carries `alt`; images below the fold are lazy-loaded."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Coastline – Photo gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <picture class="hero">
      <source media="(min-width: 800px)" srcset="images/sample-landscape.svg">
      <source media="(max-width: 799px)" srcset="images/sample-building.svg">
      <img src="images/sample-landscape.svg" width="800" height="500" alt="The coastline at sunset with dark hills">
    </picture>
    <h1>Coastline</h1>
    <ul class="gallery">
      <li><figure><img src="images/sample-landscape.svg"
        srcset="images/sample-landscape.svg 480w, images/sample-landscape.svg 960w, images/sample-landscape.svg 1600w"
        sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
        width="800" height="500" alt="Hills above the bay"><figcaption>The bay</figcaption></figure></li>
      <li><figure><img src="images/sample-building.svg"
        srcset="images/sample-building.svg 480w, images/sample-building.svg 960w"
        sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
        width="600" height="450" alt="A white cottage near the cliffs"><figcaption>Cliff cottage</figcaption></figure></li>
      <li><figure><img src="images/sample-dish.svg"
        srcset="images/sample-dish.svg 480w, images/sample-dish.svg 960w"
        sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
        width="600" height="450" alt="Lunch at the harbour cafe"><figcaption>Harbour lunch</figcaption></figure></li>
      <li><figure><img src="images/sample-landscape.svg" loading="lazy"
        srcset="images/sample-landscape.svg 480w, images/sample-landscape.svg 960w, images/sample-landscape.svg 1600w"
        sizes="(min-width: 900px) 66vw, 100vw"
        width="800" height="500" alt="The headland in evening light"><figcaption>Headland</figcaption></figure></li>
      <li><figure><img src="images/sample-building.svg" loading="lazy"
        srcset="images/sample-building.svg 480w, images/sample-building.svg 960w"
        sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
        width="600" height="450" alt="Lighthouse keeper's house"><figcaption>Keeper's house</figcaption></figure></li>
    </ul>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; }
main { max-width: 75rem; margin: 0 auto; padding: 1rem; }

img { display: block; max-width: 100%; height: auto; }
.hero img { width: 100%; border-radius: 0.75rem; }

.gallery { display: grid; grid-template-columns: 1fr; grid-auto-flow: dense; gap: 1rem; margin: 0; padding: 0; list-style: none; }
figure { margin: 0; }
.gallery img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 0.5rem; }
figcaption { font-size: 0.875rem; padding-top: 0.25rem; }

@media (min-width: 600px) { .gallery { grid-template-columns: repeat(2, 1fr); } }

@media (min-width: 900px) {
  .gallery { grid-template-columns: repeat(3, 1fr); }
  .gallery li:nth-child(4n) { grid-column: span 2; }
  .gallery li:nth-child(4n) img { aspect-ratio: auto; height: 100%; }
}
` }
  ]
});

HCM.solutions.register(34, {
  scope: "full",
  notes: [
    "`100vh` is the fallback; `100svh` follows the visible screen on mobile browsers.",
    "The gradient is listed first, so it sits on top of the photo.",
    "Step numbers are generated with a CSS counter."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Wayfarer – Travel agency</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="hero">
      <h1>Find your next horizon</h1>
      <form class="search" action="results.html">
        <div><label for="where">Where to?</label><input id="where" name="where" required></div>
        <div><label for="when">When</label><input id="when" name="when" type="date"></div>
        <div><label for="guests">Guests</label><input id="guests" name="guests" type="number" min="1" max="12" value="2"></div>
        <button type="submit">Search trips</button>
      </form>
    </section>
    <section class="section">
      <h2>Popular destinations</h2>
      <ul class="destinations">
        <li><img src="images/sample-landscape.svg" width="800" height="500" alt="Mountains at dusk"><h3>Dolomites</h3></li>
        <li><img src="images/sample-building.svg" width="600" height="450" alt="Village house"><h3>Alentejo</h3></li>
        <li><img src="images/sample-dish.svg" width="600" height="450" alt="Local tart"><h3>Naples</h3></li>
      </ul>
    </section>
    <section class="section">
      <h2>How it works</h2>
      <ol class="steps"><li>Tell us where and when.</li><li>Pick a trip you love.</li><li>Pack your bag.</li></ol>
    </section>
    <section class="section">
      <h2>What travellers say</h2>
      <blockquote><p>Everything just worked. Rated 5 out of 5.</p><cite>— Maria, Lisbon</cite></blockquote>
    </section>
  </main>
  <footer class="footer">
    <nav aria-label="Company"><h2>Company</h2><ul><li><a href="about.html">About</a></li><li><a href="jobs.html">Jobs</a></li></ul></nav>
    <nav aria-label="Help"><h2>Help</h2><ul><li><a href="faq.html">FAQ</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
    <nav aria-label="Legal"><h2>Legal</h2><ul><li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li></ul></nav>
    <p class="footer__copy">© 2026 Wayfarer</p>
  </footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #0f172a; }
img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 0.75rem; }

.hero {
  display: grid;
  align-content: center;
  gap: 2rem;
  min-height: 100vh;
  min-height: 100svh;
  padding: 2rem 1rem;
  color: #ffffff;
  background: linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url("images/sample-landscape.svg") center / cover;
}

.hero h1 { margin: 0; font-size: clamp(2.25rem, 7vw, 4.5rem); text-align: center; }

.search { display: grid; gap: 0.75rem; width: 100%; max-width: 60rem; margin-inline: auto; padding: 1rem; border-radius: 1rem; background: #ffffff; color: #0f172a; }
.search div { display: flex; flex-direction: column; }
.search input, .search button { min-height: 44px; font: inherit; border-radius: 0.5rem; }
.search input { border: 1px solid #64748b; padding: 0 0.75rem; }
.search button { border: 0; background: #ea580c; color: #ffffff; font-weight: 700; }

.section { max-width: 70rem; margin: 0 auto; padding: 3rem 1rem; }
.destinations { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1.5rem; margin: 0; padding: 0; list-style: none; }

.steps { counter-reset: step; display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.steps li { counter-increment: step; display: flex; gap: 1rem; align-items: center; }
.steps li::before { content: counter(step); display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: #ffedd5; color: #9a3412; font-weight: 800; }

.footer { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: 1.5rem; padding: 2rem 1rem; background: #0f172a; color: #e2e8f0; }
.footer h2 { font-size: 1rem; }
.footer ul { margin: 0; padding: 0; list-style: none; }
.footer a { color: #fdba74; }
.footer__copy { grid-column: 1 / -1; margin: 0; }

@media (min-width: 1024px) {
  .search { grid-template-columns: 2fr 1fr 1fr auto; align-items: end; }
}
` }
  ]
});

HCM.solutions.register(35, {
  scope: "full",
  notes: [
    "The clip is muted (required for autoplay), plays once and has a poster fallback.",
    "Video, overlay and content are stacked with positioning and `z-index`.",
    "Reduced-motion users see the poster image instead of the video."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ironworks Gym</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="hero">
      <video class="hero__video" autoplay muted playsinline poster="images/sample-landscape.svg">
        <source src="video/warmup-5s.mp4" type="video/mp4">
      </video>
      <div class="hero__content">
        <h1>Train stronger. Together.</h1>
        <a class="button" href="#join">Join today</a>
      </div>
    </section>
    <section class="section">
      <h2>Classes</h2>
      <ul class="cards">
        <li class="card"><h3>Power Hour</h3><p>Mon 18:00 · Advanced · Coach Lee</p></li>
        <li class="card"><h3>Mobility</h3><p>Tue 07:00 · All levels · Coach Ana</p></li>
        <li class="card"><h3>Kettlebells</h3><p>Thu 19:00 · Intermediate · Coach Tom</p></li>
        <li class="card"><h3>Spin</h3><p>Sat 10:00 · All levels · Coach Mia</p></li>
      </ul>
    </section>
    <section class="section">
      <h2>Trainers</h2>
      <ul class="trainers">
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Coach Lee"><h3>Lee</h3></li>
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Coach Ana"><h3>Ana</h3></li>
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Coach Tom"><h3>Tom</h3></li>
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Coach Mia"><h3>Mia</h3></li>
      </ul>
    </section>
    <section class="section" id="join">
      <h2>Join</h2>
      <form class="join" action="welcome.html" method="post">
        <label for="name">Name</label><input id="name" autocomplete="name" required>
        <label for="mail">Email</label><input id="mail" type="email" autocomplete="email" required>
        <label for="plan">Plan</label>
        <select id="plan" required><option value="">Choose a plan</option><option>Monthly</option><option>Yearly</option></select>
        <button type="submit">Start membership</button>
      </form>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #f8fafc; background: #0b0b0f; }
h1, h2, h3 { text-transform: uppercase; font-weight: 900; letter-spacing: 0.02em; }

.hero { position: relative; display: grid; place-items: center; min-height: 80vh; overflow: hidden; isolation: isolate; text-align: center; }

.hero__video, .hero::after { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero__video { z-index: -2; object-fit: cover; }
.hero::after { content: ""; z-index: -1; background: rgba(0, 0, 0, 0.6); }

.hero__content { padding: 1rem; }
.hero h1 { font-size: clamp(2.5rem, 9vw, 6rem); line-height: 1; margin: 0 0 1.5rem; }

.button { display: inline-block; padding: 0.9rem 2rem; background: #facc15; color: #0b0b0f; font-weight: 900; text-decoration: none; text-transform: uppercase; }
.button:focus-visible, button:focus-visible { outline: 3px solid #ffffff; outline-offset: 3px; }

.section { max-width: 72rem; margin: 0 auto; padding: 3rem 1rem; }
.cards, .trainers { display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.cards { grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); }
.card { padding: 1.25rem; border-left: 6px solid #facc15; background: #18181b; }

.trainers { grid-template-columns: 1fr; }
.trainers img { width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; }

.join { display: grid; gap: 0.5rem; max-width: 28rem; }
.join input, .join select, .join button { min-height: 44px; font: inherit; }
.join button { margin-top: 1rem; border: 0; background: #facc15; color: #0b0b0f; font-weight: 900; }

@media (min-width: 600px) { .trainers { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .trainers { grid-template-columns: repeat(4, 1fr); } }

@media (prefers-reduced-motion: reduce) {
  .hero__video { display: none; }
  .hero { background: url("images/sample-landscape.svg") center / cover; }
}
` }
  ]
});

HCM.solutions.register(36, {
  scope: "full",
  notes: [
    "The `<track>` element adds captions; replace the sample paths with your own video and .vtt file.",
    "`scroll-margin-top` matches the sticky header's height so headings stay visible.",
    "Each module is an independent `<details>` with an ordered list of lessons."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CSS Layout Bootcamp – Online course</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <p class="logo">Layout Bootcamp</p>
    <nav aria-label="Sections"><ul><li><a href="#curriculum">Curriculum</a></li><li><a href="#instructor">Instructor</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></nav>
  </header>
  <main>
    <section class="hero">
      <div>
        <h1>Master CSS layout in six weeks</h1>
        <p>Flexbox, Grid and responsive design, one project at a time.</p>
        <a class="button" href="#pricing">Enrol now</a>
      </div>
      <video controls preload="metadata" poster="images/sample-landscape.svg" width="800" height="500">
        <source src="video/preview.mp4" type="video/mp4">
        <track kind="captions" src="video/preview-en.vtt" srclang="en" label="English" default>
      </video>
    </section>
    <section id="curriculum" class="section">
      <h2>Curriculum</h2>
      <ol class="modules">
        <li><details><summary>Module 1: The box model</summary><ol class="lessons"><li><span>Sizing</span><span>12 min</span></li><li><span>Spacing</span><span>9 min</span></li></ol></details></li>
        <li><details><summary>Module 2: Flexbox</summary><ol class="lessons"><li><span>Direction and wrap</span><span>14 min</span></li><li><span>Alignment</span><span>11 min</span></li></ol></details></li>
        <li><details><summary>Module 3: Grid</summary><ol class="lessons"><li><span>Tracks</span><span>15 min</span></li><li><span>Areas</span><span>13 min</span></li></ol></details></li>
      </ol>
    </section>
    <section id="instructor" class="section instructor">
      <img src="images/sample-avatar.svg" width="400" height="400" alt="Instructor Dana Park">
      <div><h2>Your instructor</h2><p>Dana Park has taught front-end development for ten years.</p></div>
    </section>
    <section id="pricing" class="section"><h2>Pricing</h2><p class="price">€149 one-time</p></section>
    <section id="faq" class="section"><h2>FAQ</h2><details><summary>Do I need experience?</summary><p>Basic HTML is enough.</p></details></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1e1b4b; background: #faf5ff; }
img, video { display: block; max-width: 100%; height: auto; border-radius: 0.75rem; }

.site-header { position: sticky; top: 0; z-index: 10; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.25rem 1rem; padding: 0.5rem 1rem; background: #ffffff; border-bottom: 1px solid #e9d5ff; }
.logo { margin: 0; font-weight: 800; }
.site-header ul { display: flex; flex-wrap: wrap; gap: 0.25rem 1rem; margin: 0; padding: 0; list-style: none; font-size: 0.9rem; }
.site-header a { color: #6b21a8; }

.section { max-width: 64rem; margin: 0 auto; padding: 3rem 1rem; scroll-margin-top: 4.5rem; }

.hero { display: grid; gap: 2rem; max-width: 72rem; margin: 0 auto; padding: 3rem 1rem; align-items: center; }
.hero h1 { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; margin-top: 0; }
.button { display: inline-block; padding: 0.75rem 1.5rem; border-radius: 0.5rem; background: #7e22ce; color: #ffffff; font-weight: 700; text-decoration: none; }

.modules { display: grid; gap: 0.75rem; margin: 0; padding: 0; list-style: none; }
details { border: 1px solid #e9d5ff; border-radius: 0.5rem; background: #ffffff; }
summary { padding: 0.75rem 1rem; font-weight: 700; cursor: pointer; }
.lessons { margin: 0; padding: 0 1rem 1rem 2.25rem; }
.lessons li { display: flex; justify-content: space-between; gap: 1rem; }
.lessons li span:last-child { color: #6b7280; white-space: nowrap; }

.instructor { display: grid; gap: 1.5rem; align-items: center; }
.instructor img { width: 10rem; border-radius: 50%; }
.price { font-size: 2rem; font-weight: 800; }

@media (min-width: 900px) {
  .hero { grid-template-columns: 7fr 5fr; }
  .instructor { grid-template-columns: auto 1fr; }
}
` }
  ]
});

HCM.solutions.register(37, {
  scope: "full",
  notes: [
    "The HTML order (lead, secondary, opinion, most read) makes sense without CSS.",
    "Three area maps rearrange the same regions at mobile, 768px and 1200px.",
    "Headline sizes create a clear hierarchy: lead > secondary > briefs."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Daily Grid – News</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="masthead">
    <h1>The Daily Grid</h1>
    <nav aria-label="Sections"><ul><li><a href="world.html">World</a></li><li><a href="tech.html">Tech</a></li><li><a href="culture.html">Culture</a></li><li><a href="sport.html">Sport</a></li></ul></nav>
  </header>
  <main class="front">
    <article class="lead">
      <img src="images/sample-landscape.svg" width="800" height="500" alt="Storm clouds over the mountains">
      <h2><a href="story-1.html">Mountain towns prepare for the warmest summer on record</a></h2>
      <p>Councils are opening cooling centres and changing water schedules.</p>
      <time datetime="2026-06-02T07:30">2 June, 07:30</time>
    </article>
    <section class="secondary" aria-labelledby="tech-h">
      <h2 id="tech-h">Technology</h2>
      <article><h3><a href="story-2.html">Browsers agree on a new layout feature</a></h3><time datetime="2026-06-02T06:10">06:10</time></article>
      <article><h3><a href="story-3.html">Libraries lend laptops for summer courses</a></h3><time datetime="2026-06-01T18:45">Yesterday</time></article>
    </section>
    <section class="opinion" aria-labelledby="op-h">
      <h2 id="op-h">Opinion</h2>
      <article><h3><a href="story-4.html">Why slow websites cost more than you think</a></h3><time datetime="2026-06-01T12:00">Yesterday</time></article>
    </section>
    <section class="mostread" aria-labelledby="mr-h">
      <h2 id="mr-h">Most read</h2>
      <ol>
        <li><a href="story-1.html">Warmest summer on record</a></li>
        <li><a href="story-5.html">The return of the night train</a></li>
        <li><a href="story-6.html">A city of tiny gardens</a></li>
      </ol>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: Georgia, "Times New Roman", serif; color: #111111; background: #fbfaf7; }
a { color: inherit; text-decoration: none; }
a:hover, a:focus-visible { text-decoration: underline; }
img { display: block; width: 100%; height: auto; }

.masthead { padding: 1rem; text-align: center; border-bottom: 3px double #111111; }
.masthead h1 { margin: 0; font-size: clamp(2rem, 6vw, 3.5rem); }
.masthead ul { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin: 0.5rem 0 0; padding: 0; list-style: none; font-family: system-ui, sans-serif; }

.front {
  display: grid;
  gap: 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
  grid-template-areas: "lead" "secondary" "mostread" "opinion";
}

.lead { grid-area: lead; }
.secondary { grid-area: secondary; }
.opinion { grid-area: opinion; }
.mostread { grid-area: mostread; }

.lead h2 { font-size: clamp(1.6rem, 4vw, 2.6rem); line-height: 1.1; }
.secondary h3, .opinion h3 { font-size: 1.15rem; }
section h2 { font-family: system-ui, sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; border-top: 2px solid #111111; padding-top: 0.5rem; }
time { font-family: system-ui, sans-serif; font-size: 0.8rem; color: #555555; }

@media (min-width: 768px) {
  .front {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "lead secondary" "opinion mostread";
  }
}

@media (min-width: 1200px) {
  .front {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "secondary lead mostread" "secondary lead opinion";
  }
  .secondary, .opinion { border-left: 1px solid #d4d4d4; padding-left: 1rem; }
}
` }
  ]
});

HCM.solutions.register(38, {
  scope: "full",
  notes: [
    "The shell is one grid with named areas; only `<main>` scrolls on desktop.",
    "`min-height: 0` on `<main>` lets the grid item shrink and scroll.",
    "Order statuses always include their word, not just a colour."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dashboard – Shopdesk Admin</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app">
    <aside class="side">
      <p class="logo">Shopdesk</p>
      <nav aria-label="Admin"><ul><li><a href="index.html" aria-current="page">Dashboard</a></li><li><a href="orders.html">Orders</a></li><li><a href="products.html">Products</a></li><li><a href="settings.html">Settings</a></li></ul></nav>
    </aside>
    <header class="top">
      <form action="search.html" role="search"><label for="q" class="visually-hidden">Search orders</label><input id="q" type="search" placeholder="Search orders"></form>
      <p>Signed in as Jo</p>
    </header>
    <main class="main">
      <h1>Dashboard</h1>
      <ul class="stats">
        <li><p>Revenue</p><p class="stat">€12,480</p></li>
        <li><p>Orders</p><p class="stat">318</p></li>
        <li><p>Customers</p><p class="stat">1,204</p></li>
        <li><p>Refunds</p><p class="stat">4</p></li>
      </ul>
      <div class="chart">Sales chart</div>
      <div class="table-wrap">
        <table>
          <caption>Recent orders</caption>
          <thead><tr><th scope="col">Order</th><th scope="col">Customer</th><th scope="col">Total</th><th scope="col">Status</th></tr></thead>
          <tbody>
            <tr><td>#1042</td><td>Ana Lopes</td><td>€64.00</td><td><span class="badge badge--paid">Paid</span></td></tr>
            <tr><td>#1041</td><td>Tom Becker</td><td>€120.50</td><td><span class="badge badge--pending">Pending</span></td></tr>
            <tr><td>#1040</td><td>Priya Shah</td><td>€35.90</td><td><span class="badge badge--refunded">Refunded</span></td></tr>
          </tbody>
        </table>
      </div>
      <h2>Activity</h2>
      <ol class="activity"><li>Order #1042 paid</li><li>New customer signed up</li><li>Product "Day Pack" restocked</li></ol>
    </main>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f1f5f9; }

.app { display: grid; grid-template-areas: "side" "top" "main"; }
.side { grid-area: side; padding: 1rem; background: #0f172a; color: #e2e8f0; }
.top { grid-area: top; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; background: #ffffff; border-bottom: 1px solid #e2e8f0; }
.main { grid-area: main; padding: 1.5rem 1rem; }

.logo { margin: 0 0 1rem; font-weight: 800; }
.side ul { display: flex; flex-wrap: wrap; gap: 0.25rem; margin: 0; padding: 0; list-style: none; }
.side a { display: block; padding: 0.5rem 0.75rem; border-radius: 0.4rem; color: inherit; text-decoration: none; }
.side a[aria-current="page"] { background: #1e293b; color: #5eead4; }

.top input { min-height: 40px; padding: 0 0.75rem; border: 1px solid #94a3b8; border-radius: 0.4rem; font: inherit; }
.top p { margin: 0; }

.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: 1rem; margin: 0 0 1.5rem; padding: 0; list-style: none; }
.stats li { padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.stats p { margin: 0; }
.stat { font-size: 1.6rem; font-weight: 800; }

.chart { display: grid; place-items: center; height: 14rem; margin-bottom: 1.5rem; border: 2px dashed #94a3b8; border-radius: 0.75rem; color: #64748b; }

.table-wrap { overflow-x: auto; border-radius: 0.75rem; background: #ffffff; }
table { width: 100%; min-width: 32rem; border-collapse: collapse; }
caption { padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
th, td { padding: 0.6rem 1rem; border-top: 1px solid #e2e8f0; text-align: left; }

.badge { padding: 0.15rem 0.6rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700; }
.badge--paid { background: #dcfce7; color: #166534; }
.badge--pending { background: #fef3c7; color: #92400e; }
.badge--refunded { background: #fee2e2; color: #991b1b; }

.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 900px) {
  .app {
    grid-template-areas: "side top" "side main";
    grid-template-columns: 16rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    height: 100dvh;
  }
  .side ul { flex-direction: column; }
  .main { overflow: auto; min-height: 0; }
}
` }
  ]
});

HCM.solutions.register(39, {
  scope: "full",
  notes: [
    "`#menu:target` slides the panel in when the address ends in `#menu`.",
    "`visibility: hidden` on the closed panel stops hidden links taking focus.",
    "From 1024px the sidebar is static and the open/close links disappear."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Getting started – Docs</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="layout">
    <a class="menu-open" href="#menu">Open menu</a>
    <nav id="menu" class="menu" aria-label="Documentation">
      <a class="menu-close" href="#">Close menu</a>
      <h2>Basics</h2>
      <ul><li><a href="index.html" aria-current="page">Getting started</a></li><li><a href="install.html">Install</a></li><li><a href="config.html">Configuration</a></li></ul>
      <h2>Guides</h2>
      <ul><li><a href="layout.html">Layout</a></li><li><a href="themes.html">Themes</a></li><li><a href="forms.html">Forms</a></li></ul>
      <h2>Reference</h2>
      <ul><li><a href="tokens.html">Tokens</a></li><li><a href="components.html">Components</a></li><li><a href="faq.html">FAQ</a></li></ul>
    </nav>
    <a class="overlay" href="#" aria-label="Close menu" tabindex="-1"></a>
    <main class="content">
      <h1>Getting started</h1>
      <p>Welcome to the docs. Pick a topic from the menu.</p>
    </main>
  </div>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
.content { padding: 1.5rem 1rem; }

.menu-open, .menu-close { display: inline-block; margin: 1rem; padding: 0.6rem 1rem; border-radius: 0.5rem; background: #1d4ed8; color: #ffffff; text-decoration: none; }

.menu {
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 20;
  width: min(80vw, 18rem);
  overflow-y: auto;
  padding: 0 1rem 2rem;
  background: #ffffff;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform 0.25s ease, visibility 0.25s;
}

.menu:target { transform: none; visibility: visible; }

.overlay { position: fixed; inset: 0; z-index: 10; display: none; background: rgba(0, 0, 0, 0.5); }
.menu:target ~ .overlay { display: block; }

.menu h2 { margin: 1.25rem 0 0.25rem; font-size: 0.8rem; text-transform: uppercase; color: #6b7280; }
.menu ul { margin: 0; padding: 0; list-style: none; }
.menu ul a { display: block; padding: 0.45rem 0.5rem; border-radius: 0.4rem; color: #1f2937; text-decoration: none; }
.menu a[aria-current="page"] { background: #dbeafe; color: #1e3a8a; font-weight: 700; }
a:focus-visible { outline: 3px solid #1d4ed8; outline-offset: 2px; }

@media (min-width: 1024px) {
  .layout { display: grid; grid-template-columns: 16rem 1fr; }
  .menu { position: sticky; top: 0; height: 100vh; width: auto; transform: none; visibility: visible; border-right: 1px solid #e5e7eb; }
  .menu-open, .menu-close, .overlay { display: none; }
  .menu:target ~ .overlay { display: none; }
}

@media (prefers-reduced-motion: reduce) { .menu { transition: none; } }
` }
  ]
});

HCM.solutions.register(40, {
  scope: "full",
  notes: [
    "Header cells stick to the top, feature names stick to the left, and the corner sticks to both.",
    "`border-collapse: separate` avoids border glitches on sticky cells.",
    "Every ✓ and ✗ has visually hidden text so it's read as \"Included\" or \"Not included\"."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Compare plans – CloudBox</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Compare plans</h1>
    <div class="wrap">
      <table>
        <caption>Features included in each CloudBox plan</caption>
        <thead>
          <tr><th scope="col" class="corner">Feature</th><th scope="col">Free</th><th scope="col">Plus</th><th scope="col">Pro</th><th scope="col">Team</th></tr>
        </thead>
        <tbody>
          <tr class="group"><th colspan="5" scope="rowgroup">Basics</th></tr>
          <tr><th scope="row">File sync</th><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td></tr>
          <tr><th scope="row">Mobile app</th><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td></tr>
        </tbody>
        <tbody>
          <tr class="group"><th colspan="5" scope="rowgroup">Storage</th></tr>
          <tr><th scope="row">Space</th><td>5 GB</td><td>200 GB</td><td>2 TB</td><td>5 TB</td></tr>
          <tr><th scope="row">Version history</th><td>✗<span class="vh"> Not included</span></td><td>30 days</td><td>180 days</td><td>1 year</td></tr>
        </tbody>
        <tbody>
          <tr class="group"><th colspan="5" scope="rowgroup">Support</th></tr>
          <tr><th scope="row">Email support</th><td>✗<span class="vh"> Not included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td><td>✓<span class="vh"> Included</span></td></tr>
          <tr><th scope="row">Phone support</th><td>✗<span class="vh"> Not included</span></td><td>✗<span class="vh"> Not included</span></td><td>✗<span class="vh"> Not included</span></td><td>✓<span class="vh"> Included</span></td></tr>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f8fafc; }
main { max-width: 64rem; margin: 0 auto; }

.wrap { max-height: 70vh; overflow: auto; border: 1px solid #cbd5e1; border-radius: 0.75rem; background: #ffffff; }

table { width: 100%; min-width: 34rem; border-collapse: separate; border-spacing: 0; }
caption { padding: 0.75rem 1rem; text-align: left; font-weight: 700; }
th, td { padding: 0.6rem 1rem; border-bottom: 1px solid #e2e8f0; text-align: center; background: #ffffff; }

thead th { position: sticky; top: 0; z-index: 2; background: #1e293b; color: #ffffff; }
tbody th[scope="row"] { position: sticky; left: 0; z-index: 1; text-align: left; font-weight: 600; min-width: 9rem; }
thead .corner { left: 0; z-index: 3; text-align: left; }

.group th { text-align: left; background: #eef2ff; color: #3730a3; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});
