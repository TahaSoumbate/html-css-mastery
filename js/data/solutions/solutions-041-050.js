/*
 * Model solutions for projects 41–50 (complete solutions).
 */
HCM.solutions.register(41, {
  scope: "full",
  notes: [
    "The details panel is hidden with opacity, so its links can still receive focus.",
    "`:focus-within` reveals the panel for keyboard users; `(hover: none)` shows it on touch screens.",
    "Each social link's text includes the person's name."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Our team – Brightside Studio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="team">
      <h2>Meet the team</h2>
      <ul class="team__grid">
        <li class="member">
          <img src="images/sample-avatar.svg" width="400" height="400" alt="Ana Lopes">
          <div class="member__info"><h3>Ana Lopes</h3><p>Design lead</p></div>
          <div class="member__details">
            <p>Turns messy ideas into clear interfaces.</p>
            <ul><li><a href="team/ana.html">Ana's profile</a></li><li><a href="mailto:ana@example.com">Email Ana</a></li></ul>
          </div>
        </li>
        <li class="member">
          <img src="images/sample-avatar.svg" width="400" height="400" alt="Tom Becker">
          <div class="member__info"><h3>Tom Becker</h3><p>Front-end developer</p></div>
          <div class="member__details">
            <p>Writes CSS that other people enjoy reading.</p>
            <ul><li><a href="team/tom.html">Tom's profile</a></li><li><a href="mailto:tom@example.com">Email Tom</a></li></ul>
          </div>
        </li>
      </ul>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 3rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; background: #f9fafb; }
.team { max-width: 72rem; margin: 0 auto; }

.team__grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin: 0; padding: 0; list-style: none; }

.member { position: relative; overflow: hidden; border-radius: 1rem; background: #ffffff; }
.member img { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; }
.member__info { padding: 1rem; }
.member__info h3, .member__info p { margin: 0; }

.member__details {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  background: rgba(17, 24, 39, 0.9);
  color: #ffffff;
  opacity: 0;
  transform: translateY(1rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.member:hover .member__details,
.member:focus-within .member__details { opacity: 1; transform: none; }

.member__details p { margin: 0 0 0.5rem; }
.member__details ul { display: flex; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.member__details a { color: #5eead4; }
.member__details a:focus-visible { outline: 3px solid #5eead4; outline-offset: 2px; }

@media (hover: none) {
  .member__details { position: static; opacity: 1; transform: none; }
}

@media (min-width: 600px) { .team__grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1100px) { .team__grid { grid-template-columns: repeat(4, 1fr); } }
@media (prefers-reduced-motion: reduce) { .member__details { transition: none; } }
` }
  ]
});

HCM.solutions.register(42, {
  scope: "full",
  notes: [
    "Each category's `<details>` share one `name`, so only one answer opens at a time.",
    "A keyframe animates the answer in; `@supports` adds smooth height where available.",
    "`section:target` gets a border and a label, not just a colour change."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Help centre – Tasklight</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="help">
    <h1>Help centre</h1>
    <nav class="cats" aria-label="Categories">
      <ul><li><a href="#account">Account</a></li><li><a href="#billing">Billing</a></li><li><a href="#boards">Boards</a></li><li><a href="#privacy">Privacy</a></li></ul>
    </nav>
    <div class="topics">
      <section id="account" class="topic"><h2>Account</h2>
        <details name="account"><summary>How do I change my email?</summary><div class="answer"><p>Go to Settings, then Profile.</p></div></details>
        <details name="account"><summary>Can I delete my account?</summary><div class="answer"><p>Yes, from Settings, Danger zone.</p></div></details>
        <details name="account"><summary>How do I reset my password?</summary><div class="answer"><p>Use the link on the sign-in page.</p></div></details>
      </section>
      <section id="billing" class="topic"><h2>Billing</h2>
        <details name="billing"><summary>Which cards do you accept?</summary><div class="answer"><p>All major debit and credit cards.</p></div></details>
        <details name="billing"><summary>Can I get an invoice?</summary><div class="answer"><p>Invoices are in Settings, Billing.</p></div></details>
        <details name="billing"><summary>How do I cancel?</summary><div class="answer"><p>Cancel any time from Billing.</p></div></details>
      </section>
    </div>
    <aside class="contact"><h2>Still stuck?</h2><p><a href="mailto:help@example.com">Email our team</a></p></aside>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #111827; background: #f8fafc; }
.help { display: grid; gap: 1.5rem; max-width: 70rem; margin: 0 auto; padding: 2rem 1rem; }
.help h1 { margin: 0; }

.cats ul { display: flex; gap: 0.5rem; margin: 0; padding: 0 0 0.5rem; overflow-x: auto; list-style: none; }
.cats a { display: block; padding: 0.5rem 1rem; border-radius: 999px; background: #e0e7ff; color: #3730a3; white-space: nowrap; }

.topic { padding: 1rem; border: 2px solid transparent; border-radius: 0.75rem; scroll-margin-top: 1rem; }
.topic:target { border-color: #4338ca; background: #eef2ff; }
.topic:target h2::after { content: " — selected"; font-size: 0.8rem; color: #4338ca; }

details { border-bottom: 1px solid #e5e7eb; }
summary { padding: 0.75rem 0; font-weight: 600; cursor: pointer; }
.answer p { margin: 0 0 1rem; }

details[open] .answer { animation: reveal 0.3s ease; }
@keyframes reveal { from { opacity: 0; transform: translateY(-0.5rem); } to { opacity: 1; transform: none; } }

@supports (interpolate-size: allow-keywords) {
  :root { interpolate-size: allow-keywords; }
  details::details-content { height: 0; overflow: hidden; transition: height 0.3s ease, content-visibility 0.3s allow-discrete; }
  details[open]::details-content { height: auto; }
}

@media (min-width: 900px) {
  .help { grid-template-columns: 14rem 1fr; }
  .help h1 { grid-column: 1 / -1; }
  .cats ul { flex-direction: column; overflow: visible; }
  .contact { grid-column: 2; }
}

@media (prefers-reduced-motion: reduce) {
  details[open] .answer { animation: none; }
  details::details-content { transition: none; }
}
` }
  ]
});

HCM.solutions.register(43, {
  scope: "full",
  notes: [
    "Snap type goes on the track; snap alignment goes on each slide.",
    "Slides are 85% wide on mobile, so a peek of the next slide shows there is more.",
    "The track is focusable and labelled, so keyboard users can scroll it with arrow keys."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Testimonials – Tasklight</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <section class="carousel" aria-label="Testimonials">
      <h2>Loved by busy people</h2>
      <ul class="track" tabindex="0" aria-label="Testimonials, scroll sideways">
        <li id="slide-1" class="slide"><blockquote><p>It replaced three apps for me.</p></blockquote><p class="who">Priya, designer</p></li>
        <li id="slide-2" class="slide"><blockquote><p>Calm, fast and private.</p></blockquote><p class="who">Tom, writer</p></li>
        <li id="slide-3" class="slide"><blockquote><p>The weekly review is my favourite ritual.</p></blockquote><p class="who">Ana, teacher</p></li>
        <li id="slide-4" class="slide"><blockquote><p>My team adopted it in a day.</p></blockquote><p class="who">Lee, manager</p></li>
        <li id="slide-5" class="slide"><blockquote><p>Finally, a tool that gets out of the way.</p></blockquote><p class="who">Mia, developer</p></li>
      </ul>
      <nav class="dots" aria-label="Choose a testimonial">
        <a href="#slide-1"><span class="vh">Show testimonial 1</span></a>
        <a href="#slide-2"><span class="vh">Show testimonial 2</span></a>
        <a href="#slide-3"><span class="vh">Show testimonial 3</span></a>
        <a href="#slide-4"><span class="vh">Show testimonial 4</span></a>
        <a href="#slide-5"><span class="vh">Show testimonial 5</span></a>
      </nav>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 3rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0f172a; background: #f0fdfa; }
.carousel { max-width: 64rem; margin: 0 auto; }

.track {
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0 0 1rem;
  overflow-x: auto;
  list-style: none;
  scroll-snap-type: x mandatory;
}

@media (prefers-reduced-motion: no-preference) {
  .track { scroll-behavior: smooth; }
}

.track:focus-visible { outline: 3px solid #0f766e; outline-offset: 4px; }

.slide {
  flex: 0 0 85%;
  scroll-snap-align: center;
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  background: #ffffff;
}

.slide blockquote { margin: 0; font-size: 1.25rem; }
.slide blockquote p { margin: 0; }
.who { margin: 1rem 0 0; color: #475569; }

.dots { display: flex; justify-content: center; gap: 0.5rem; }
.dots a { width: 1.5rem; height: 1.5rem; border: 2px solid #0f766e; border-radius: 50%; }
.dots a:hover, .dots a:focus-visible { background: #0f766e; }
.dots a:focus-visible { outline: 3px solid #0f172a; outline-offset: 2px; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (min-width: 768px) { .slide { flex-basis: 45%; } }
` }
  ]
});

HCM.solutions.register(44, {
  scope: "full",
  notes: [
    "Days are switched with `:target`; `:not(:has(:target))` shows day 1 by default.",
    "The timeline line is the list's `::before`, and each session's dot is its `::after`.",
    "Every session time is a `<time datetime>` with the full date and time."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>LayoutConf 2026</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <h1>LayoutConf 2026</h1>
    <p><time datetime="2026-05-12">12</time>–<time datetime="2026-05-13">13 May 2026</time> · Porto</p>
    <a class="button" href="#tickets">Get tickets</a>
  </header>
  <main>
    <section class="section"><h2>Speakers</h2>
      <ul class="speakers">
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Dana Park"><h3>Dana Park</h3><p>Grid in the real world</p></li>
        <li><img src="images/sample-avatar.svg" width="400" height="400" alt="Leo Grant"><h3>Leo Grant</h3><p>Container queries at scale</p></li>
      </ul>
    </section>
    <section class="section schedule"><h2>Schedule</h2>
      <nav aria-label="Days"><a href="#day-1">Day 1</a> <a href="#day-2">Day 2</a></nav>
      <section id="day-1" class="day"><h3>Day 1 · 12 May</h3>
        <ol class="timeline">
          <li class="session"><time datetime="2026-05-12T09:30">09:30</time><div><h4>Opening keynote</h4><p>Dana Park · Main hall</p></div></li>
          <li class="session"><time datetime="2026-05-12T11:00">11:00</time><div><h4>Grid in the real world</h4><p>Dana Park · Room A</p></div></li>
        </ol>
      </section>
      <section id="day-2" class="day"><h3>Day 2 · 13 May</h3>
        <ol class="timeline">
          <li class="session"><time datetime="2026-05-13T10:00">10:00</time><div><h4>Container queries at scale</h4><p>Leo Grant · Main hall</p></div></li>
        </ol>
      </section>
    </section>
    <section class="section" id="tickets"><h2>Tickets</h2><p>Two-day pass: €290</p></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
.hero { padding: 4rem 1rem; text-align: center; color: #ffffff; background: linear-gradient(135deg, #312e81, #be185d); }
.hero h1 { margin: 0; font-size: clamp(2.2rem, 6vw, 4rem); }
.button { display: inline-block; margin-top: 1rem; padding: 0.75rem 1.5rem; border-radius: 999px; background: #ffffff; color: #312e81; font-weight: 700; text-decoration: none; }

.section { max-width: 64rem; margin: 0 auto; padding: 3rem 1rem; }
.speakers { display: grid; grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); gap: 1.5rem; margin: 0; padding: 0; list-style: none; }
.speakers img { display: block; width: 100%; height: auto; border-radius: 1rem; }

.schedule nav a { display: inline-block; margin-right: 0.5rem; padding: 0.4rem 1rem; border: 2px solid #312e81; border-radius: 999px; color: #312e81; font-weight: 700; }

.day { display: none; }
.day:target { display: block; }
.schedule:not(:has(.day:target)) #day-1 { display: block; }

.timeline { position: relative; margin: 1rem 0 0; padding: 0 0 0 1.5rem; list-style: none; }
.timeline::before { content: ""; position: absolute; left: 0.4rem; top: 0; bottom: 0; width: 2px; background: #c7d2fe; }

.session { position: relative; padding: 0.5rem 0 1rem; }
.session::after { content: ""; position: absolute; left: -1.45rem; top: 0.85rem; width: 0.9rem; height: 0.9rem; border-radius: 50%; background: #be185d; }
.session time { font-weight: 800; color: #312e81; }
.session h4 { margin: 0; }
.session p { margin: 0; color: #4b5563; }

@media (min-width: 768px) {
  .session { display: grid; grid-template-columns: 6rem 1fr; gap: 1rem; }
}
` }
  ]
});

HCM.solutions.register(45, {
  scope: "full",
  notes: [
    "Chips are real checkboxes; `label:has(input:checked)` styles the selected ones.",
    "The summary is sticky beside the rooms from 1024px and uses a `<dl>` for labelled values.",
    "Date inputs share font, padding and borders, and small browser differences are accepted."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Book a room – Harbour Hotel</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="booking-page">
    <h1>Harbour Hotel</h1>
    <form class="search" action="rooms.html">
      <div><label for="in">Check-in</label><input id="in" type="date" value="2026-07-10" min="2026-07-01"></div>
      <div><label for="out">Check-out</label><input id="out" type="date" value="2026-07-13" min="2026-07-11"></div>
      <div><label for="guests">Guests</label><input id="guests" type="number" min="1" max="6" value="2"></div>
      <button type="submit">Search</button>
    </form>
    <fieldset class="chips">
      <legend>Filters</legend>
      <label class="chip"><input type="checkbox" name="f" value="cancel"> Free cancellation</label>
      <label class="chip"><input type="checkbox" name="f" value="breakfast"> Breakfast</label>
      <label class="chip"><input type="checkbox" name="f" value="sea"> Sea view</label>
    </fieldset>
    <div class="booking">
      <ul class="rooms">
        <li><article class="room"><img src="images/sample-building.svg" width="600" height="450" alt="Double room with balcony"><div><h2>Double with balcony</h2><ul class="amenities"><li>Wi-Fi</li><li>Balcony</li><li>Breakfast</li></ul><p><strong>€120</strong> per night</p><button type="button">Select room</button></div></article></li>
        <li><article class="room"><img src="images/sample-building.svg" width="600" height="450" alt="Sea view suite"><div><h2>Sea view suite</h2><ul class="amenities"><li>Wi-Fi</li><li>Sea view</li><li>Bath</li></ul><p><strong>€210</strong> per night</p><button type="button">Select room</button></div></article></li>
      </ul>
      <aside class="summary">
        <h2>Your booking</h2>
        <dl><dt>Dates</dt><dd>10–13 July</dd><dt>Nights</dt><dd>3</dd><dt>Room</dt><dd>Double with balcony</dd><dt>Total</dt><dd>€360</dd></dl>
      </aside>
    </div>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #0c4a6e; background: #f0f9ff; }
.booking-page { max-width: 72rem; margin: 0 auto; padding: 2rem 1rem; }

.search { display: grid; gap: 0.75rem; padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.search div { display: flex; flex-direction: column; }
.search input, .search button { min-height: 44px; padding: 0 0.75rem; border: 1px solid #64748b; border-radius: 0.5rem; font: inherit; color: inherit; background: #ffffff; }
.search button { border: 0; background: #0369a1; color: #ffffff; font-weight: 700; }

.chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; padding: 0; border: 0; }
.chips legend { margin-bottom: 0.5rem; font-weight: 700; }
.chip { display: inline-flex; gap: 0.4rem; align-items: center; min-height: 40px; padding: 0 0.9rem; border: 2px solid #0369a1; border-radius: 999px; cursor: pointer; }
.chip input { accent-color: #0369a1; }
.chip:has(input:checked) { background: #0369a1; color: #ffffff; }
.chip:has(input:focus-visible) { outline: 3px solid #0c4a6e; outline-offset: 2px; }

.booking { display: grid; gap: 1.5rem; }
.rooms { display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none; }
.room { display: grid; gap: 1rem; padding: 1rem; border-radius: 0.75rem; background: #ffffff; }
.room img { width: 100%; height: auto; border-radius: 0.5rem; }
.room h2 { margin: 0; font-size: 1.15rem; }
.amenities { display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; list-style: none; font-size: 0.85rem; }
.room button { min-height: 44px; padding: 0 1rem; border: 0; border-radius: 0.5rem; background: #0369a1; color: #ffffff; font: inherit; font-weight: 700; }

.summary { padding: 1.25rem; border-radius: 0.75rem; background: #ffffff; }
.summary dl { display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 1rem; margin: 0; }
.summary dt { font-weight: 700; }
.summary dd { margin: 0; text-align: right; }

@media (min-width: 600px) {
  .search { grid-template-columns: repeat(3, 1fr) auto; align-items: end; }
  .room { grid-template-columns: 14rem 1fr; }
}

@media (min-width: 1024px) {
  .booking { grid-template-columns: 1fr 20rem; align-items: start; }
  .summary { position: sticky; top: 1rem; }
}
` }
  ]
});

HCM.solutions.register(46, {
  scope: "full",
  notes: [
    "All colours, sizes, radii and spaces live in a token sheet on `:root`.",
    "Every section shares `.section` and `.container`, giving one consistent rhythm.",
    "Even feature rows reverse visually with `row-reverse`; the HTML order stays logical."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Flowboard – Plan work together</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header container">
    <p class="logo">Flowboard</p>
    <a class="button" href="signup.html">Start free</a>
  </header>
  <main>
    <section class="section hero"><div class="container">
      <h1>Plan work together, without the noise</h1>
      <img src="images/sample-product.svg" width="600" height="450" alt="The Flowboard app showing a project board">
    </div></section>
    <section class="section logos"><div class="container">
      <ul><li><img src="images/sample-building.svg" width="120" height="90" alt="Northwind"></li><li><img src="images/sample-building.svg" width="120" height="90" alt="Atlas Co"></li><li><img src="images/sample-building.svg" width="120" height="90" alt="Bluepeak"></li></ul>
    </div></section>
    <section class="section"><div class="container">
      <div class="feature-row"><img src="images/sample-landscape.svg" width="800" height="500" alt=""><div><h2>See everything at once</h2><p>Boards, lists and timelines in one place.</p></div></div>
      <div class="feature-row"><img src="images/sample-product.svg" width="600" height="450" alt=""><div><h2>Focus mode</h2><p>Hide everything except today's work.</p></div></div>
      <div class="feature-row"><img src="images/sample-dish.svg" width="600" height="450" alt=""><div><h2>Shared spaces</h2><p>Invite clients with one link.</p></div></div>
    </div></section>
    <section class="section cta"><div class="container"><h2>Ready when you are</h2><a class="button button--secondary" href="signup.html">Create your board</a></div></section>
  </main>
  <footer class="section"><div class="container"><p>© 2026 Flowboard</p></div></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
:root {
  --color-ink: #111827;
  --color-muted: #4b5563;
  --color-accent: #6d28d9;
  --color-accent-soft: #ede9fe;
  --color-surface: #ffffff;
  --color-bg: #faf5ff;
  --text-sm: 0.875rem; --text-md: 1rem; --text-lg: 1.25rem; --text-xl: 2rem; --text-2xl: clamp(2.25rem, 5vw, 3.5rem);
  --radius-sm: 0.4rem; --radius-md: 0.75rem; --radius-lg: 1.25rem;
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 1rem; --space-4: 1.5rem; --space-5: 2.5rem; --space-6: 4rem;
}

*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: var(--text-md); line-height: 1.6; color: var(--color-ink); background: var(--color-bg); }
img { display: block; max-width: 100%; height: auto; border-radius: var(--radius-md); }

.container { max-width: 70rem; margin-inline: auto; padding-inline: var(--space-3); }
.section { padding-block: var(--space-6); }

.site-header { display: flex; justify-content: space-between; align-items: center; padding-block: var(--space-3); }
.logo { margin: 0; font-weight: 800; font-size: var(--text-lg); }

.button { display: inline-block; padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm); background: var(--color-accent); color: var(--color-surface); font-weight: 700; text-decoration: none; }
.button--secondary { background: var(--color-surface); color: var(--color-accent); }
.button:focus-visible { outline: 3px solid var(--color-ink); outline-offset: 3px; }

.hero h1 { font-size: var(--text-2xl); line-height: 1.1; max-width: 18ch; }

.logos ul { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-5); margin: 0; padding: 0; list-style: none; }
.logos img { filter: grayscale(1); opacity: 0.7; }

.feature-row { display: flex; flex-direction: column; gap: var(--space-4); align-items: center; }
.feature-row + .feature-row { margin-top: var(--space-6); }
.feature-row h2 { font-size: var(--text-xl); }

.cta { text-align: center; background: var(--color-accent); color: var(--color-surface); }

@media (min-width: 900px) {
  .feature-row { flex-direction: row; }
  .feature-row > * { flex: 1; }
  .feature-row:nth-of-type(even) { flex-direction: row-reverse; }
}
` }
  ]
});

HCM.solutions.register(47, {
  scope: "full",
  notes: [
    "All time slots share one `name`; disabled slots can't be selected.",
    "Slots are visually hidden radios with their labels styled as a grid of buttons.",
    "Legends are numbered by a CSS counter, so steps renumber themselves."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Book a table – Casa Verde</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <form class="reserve" action="booked.html" method="post">
      <h1>Book a table</h1>
      <fieldset>
        <legend>When</legend>
        <div class="row">
          <div><label for="party">Party size</label><select id="party"><option>2 people</option><option>3 people</option><option>4 people</option></select></div>
          <div><label for="date">Date</label><input id="date" type="date" min="2026-07-01" required></div>
        </div>
        <fieldset class="slots-group">
          <legend class="sub">Time</legend>
          <div class="slots">
            <input class="vh" type="radio" name="time" id="t1800" value="18:00"><label for="t1800">18:00</label>
            <input class="vh" type="radio" name="time" id="t1830" value="18:30"><label for="t1830">18:30</label>
            <input class="vh" type="radio" name="time" id="t1900" value="19:00" disabled><label for="t1900">19:00 <span>fully booked</span></label>
            <input class="vh" type="radio" name="time" id="t1930" value="19:30"><label for="t1930">19:30</label>
            <input class="vh" type="radio" name="time" id="t2000" value="20:00" disabled><label for="t2000">20:00 <span>fully booked</span></label>
            <input class="vh" type="radio" name="time" id="t2030" value="20:30"><label for="t2030">20:30</label>
          </div>
        </fieldset>
      </fieldset>
      <fieldset>
        <legend>Where to sit</legend>
        <label class="choice"><input type="radio" name="seat" value="inside" checked> Inside</label>
        <label class="choice"><input type="radio" name="seat" value="terrace"> Terrace</label>
        <label class="choice"><input type="radio" name="seat" value="bar"> Bar</label>
      </fieldset>
      <fieldset>
        <legend>Your details</legend>
        <label for="name">Name</label><input id="name" autocomplete="name" required>
        <label for="phone">Phone</label><input id="phone" type="tel" autocomplete="tel" required>
      </fieldset>
      <button type="submit">Request booking</button>
    </form>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; padding: 2rem 1rem; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #14532d; background: #f7fee7; }
.reserve { max-width: 40rem; margin: 0 auto; counter-reset: step; }

.reserve > fieldset { margin: 0 0 1.25rem; padding: 1.25rem; border: 1px solid #bbf7d0; border-radius: 0.75rem; background: #ffffff; }
.reserve > fieldset > legend { font-weight: 800; }
.reserve > fieldset > legend::before { counter-increment: step; content: counter(step) ". "; }

.row { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); }
.row div { display: flex; flex-direction: column; }
label { font-weight: 600; }
input, select, button { font: inherit; }
input:not([type="radio"]), select { min-height: 44px; width: 100%; padding: 0 0.75rem; border: 1px solid #4d7c0f; border-radius: 0.5rem; margin-bottom: 0.5rem; }

.slots-group { margin: 1rem 0 0; padding: 0; border: 0; }
.sub { font-weight: 700; margin-bottom: 0.5rem; }
.slots { display: grid; grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr)); gap: 0.5rem; }
.slots label { display: grid; place-items: center; min-height: 44px; padding: 0.25rem; border: 2px solid #16a34a; border-radius: 0.5rem; text-align: center; cursor: pointer; }
.slots label span { font-size: 0.7rem; font-weight: 400; }
.slots input:checked + label { background: #16a34a; color: #ffffff; }
.slots input:focus-visible + label { outline: 3px solid #14532d; outline-offset: 2px; }
.slots input:disabled + label { border-style: dashed; color: #6b7280; text-decoration: line-through; cursor: not-allowed; }

.choice { display: inline-flex; gap: 0.4rem; margin-right: 1rem; font-weight: 400; }
button { width: 100%; min-height: 44px; border: 0; border-radius: 0.5rem; background: #15803d; color: #ffffff; font-weight: 700; }

.vh { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
` }
  ]
});

HCM.solutions.register(48, {
  scope: "full",
  notes: [
    "`preload=\"none\"` stops audio downloading until someone presses play.",
    "Under 600px the table reflows into cards, with labels printed from `data-label`.",
    "`background-blend-mode` tints the hero photo with the brand colour."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NOVA LANE – New album "Low Tide"</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="hero">
    <img class="cover" src="images/sample-landscape.svg" width="800" height="500" alt="Low Tide album cover: dark hills against an orange sky">
    <h1>Nova Lane</h1>
    <p>New album: <strong>Low Tide</strong></p>
    <a class="button" href="#tracks">Listen now</a>
  </header>
  <main>
    <section id="tracks" class="section"><h2>Tracks</h2>
      <ol class="tracks">
        <li><p><span>Harbour Lights</span> <span>3:42</span></p><audio controls preload="none"><source src="audio/harbour-lights.mp3" type="audio/mpeg"><source src="audio/harbour-lights.ogg" type="audio/ogg"></audio></li>
        <li><p><span>Salt</span> <span>4:05</span></p><audio controls preload="none"><source src="audio/salt.mp3" type="audio/mpeg"><source src="audio/salt.ogg" type="audio/ogg"></audio></li>
      </ol>
    </section>
    <section class="section"><h2>Tour</h2>
      <table class="tour">
        <caption>Upcoming shows</caption>
        <thead><tr><th scope="col">Date</th><th scope="col">City</th><th scope="col">Venue</th><th scope="col">Tickets</th></tr></thead>
        <tbody>
          <tr><td data-label="Date"><time datetime="2026-09-04">4 Sep</time></td><td data-label="City">Lisbon</td><td data-label="Venue">River Hall</td><td data-label="Tickets"><a href="tickets/lisbon.html">Tickets for Lisbon</a></td></tr>
          <tr><td data-label="Date"><time datetime="2026-09-07">7 Sep</time></td><td data-label="City">Madrid</td><td data-label="Venue">Sala Norte</td><td data-label="Tickets"><a href="tickets/madrid.html">Tickets for Madrid</a></td></tr>
        </tbody>
      </table>
    </section>
    <section class="section"><h2>Video</h2>
      <video controls preload="none" poster="images/sample-landscape.svg" width="800" height="500"><source src="video/salt.mp4" type="video/mp4"><track kind="captions" src="video/salt-en.vtt" srclang="en" label="English"></video>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #fafafa; background: #0a0a0a; }
img, video { display: block; max-width: 100%; height: auto; }
a { color: #fb923c; }

.hero {
  padding: 4rem 1rem;
  text-align: center;
  background-color: #7c2d12;
  background-image: url("images/sample-landscape.svg");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}

.cover { width: min(16rem, 70%); margin: 0 auto 1.5rem; border-radius: 0.5rem; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); }
.hero h1 { margin: 0; font-size: clamp(2.5rem, 10vw, 6rem); text-transform: uppercase; letter-spacing: 0.15em; }
.button { display: inline-block; padding: 0.75rem 2rem; border: 2px solid #fafafa; color: #fafafa; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em; }

.section { max-width: 60rem; margin: 0 auto; padding: 3rem 1rem; }
.section h2 { text-transform: uppercase; letter-spacing: 0.12em; }

.tracks { display: grid; gap: 1rem; padding-left: 1.5rem; }
.tracks li { padding: 0.75rem; border-radius: 0.5rem; background: #1c1917; }
.tracks p { display: flex; justify-content: space-between; margin: 0 0 0.5rem; }
audio { width: 100%; }

.tour { width: 100%; border-collapse: collapse; }
.tour caption { text-align: left; padding-bottom: 0.5rem; }
.tour th, .tour td { padding: 0.6rem; border-bottom: 1px solid #44403c; text-align: left; }

@media (max-width: 599px) {
  .tour thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  .tour, .tour tbody, .tour tr, .tour td { display: block; }
  .tour tr { margin-bottom: 1rem; padding: 0.75rem; border-radius: 0.5rem; background: #1c1917; }
  .tour td { display: flex; justify-content: space-between; gap: 1rem; border: 0; }
  .tour td::before { content: attr(data-label); font-weight: 700; color: #a8a29e; }
}
` }
  ]
});

HCM.solutions.register(49, {
  scope: "full",
  notes: [
    "CSS columns create the masonry look; `break-inside: avoid` keeps each photo whole.",
    "Each lightbox is shown with `:target` and closes by linking back to the gallery.",
    "The close link comes first inside each lightbox, so keyboard focus reaches it immediately."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Iris Moreno – Photography</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Iris Moreno</h1>
    <ul id="gallery" class="gallery">
      <li><a href="#photo-1"><img src="images/sample-landscape.svg" width="800" height="500" alt="Mountain ridge at dusk"></a></li>
      <li><a href="#photo-2"><img src="images/sample-avatar.svg" width="400" height="400" alt="Portrait of a smiling woman"></a></li>
      <li><a href="#photo-3"><img src="images/sample-building.svg" width="600" height="450" alt="White farmhouse under a blue sky"></a></li>
    </ul>

    <div id="photo-1" class="lightbox">
      <a class="close" href="#gallery">Close</a>
      <img src="images/sample-landscape.svg" width="800" height="500" alt="Mountain ridge at dusk">
      <a class="next" href="#photo-2">Next photo</a>
    </div>
    <div id="photo-2" class="lightbox">
      <a class="close" href="#gallery">Close</a>
      <img src="images/sample-avatar.svg" width="400" height="400" alt="Portrait of a smiling woman">
      <a class="prev" href="#photo-1">Previous photo</a>
      <a class="next" href="#photo-3">Next photo</a>
    </div>
    <div id="photo-3" class="lightbox">
      <a class="close" href="#gallery">Close</a>
      <img src="images/sample-building.svg" width="600" height="450" alt="White farmhouse under a blue sky">
      <a class="prev" href="#photo-2">Previous photo</a>
    </div>

    <section class="about"><h2>About</h2><p>Landscape and portrait photographer based in Seville.</p></section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #e7e5e4; background: #1c1917; }
main { max-width: 75rem; margin: 0 auto; padding: 2rem 1rem; }
img { display: block; width: 100%; height: auto; }

.gallery { columns: 1; column-gap: 1rem; margin: 0; padding: 0; list-style: none; }
.gallery li { break-inside: avoid; margin-bottom: 1rem; }
.gallery img { filter: grayscale(0.4); transition: filter 0.3s ease; }
.gallery a:hover img, .gallery a:focus-visible img { filter: none; }
.gallery a:focus-visible { outline: 3px solid #fbbf24; outline-offset: 3px; }

.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  padding: 3rem 1rem;
  background: rgba(0, 0, 0, 0.92);
}

.lightbox:target { display: grid; place-items: center; }
.lightbox img { width: auto; max-width: 100%; max-height: 80vh; object-fit: contain; }
.lightbox a { color: #fbbf24; font-weight: 700; }
.close { position: absolute; top: 1rem; right: 1rem; }
.prev { position: absolute; left: 1rem; bottom: 1rem; }
.next { position: absolute; right: 1rem; bottom: 1rem; }

@media (min-width: 700px) { .gallery { columns: 2; } }
@media (min-width: 1100px) { .gallery { columns: 3; } }
` }
  ]
});

HCM.solutions.register(50, {
  scope: "full",
  notes: [
    "The stylesheet runs in order: tokens, base, layout utilities, components, then small page rules.",
    "Only two `em` breakpoints are used everywhere (48em and 64em).",
    "This solution shows Home and Contact; Services and About reuse the same header, footer and components."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Greenleaf Gardens – Garden design in Bristol</title>
  <meta name="description" content="Garden design, planting and maintenance for homes in Bristol.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container cluster">
      <a class="logo" href="index.html">Greenleaf</a>
      <nav aria-label="Main"><ul class="cluster"><li><a href="index.html" aria-current="page">Home</a></li><li><a href="services.html">Services</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
    </div>
  </header>
  <main id="main">
    <section class="hero"><div class="container stack">
      <h1>Gardens that grow with you</h1>
      <p>Design, planting and care for Bristol homes.</p>
      <a class="button" href="contact.html">Book a visit</a>
    </div></section>
    <section class="section"><div class="container stack">
      <h2>What we do</h2>
      <ul class="grid">
        <li class="card"><h3>Design</h3><p>Plans that fit your space and budget.</p></li>
        <li class="card"><h3>Planting</h3><p>Hardy, beautiful and local.</p></li>
        <li class="card"><h3>Care</h3><p>Seasonal visits that keep it thriving.</p></li>
      </ul>
    </div></section>
  </main>
  <footer class="site-footer"><div class="container"><p>© 2026 Greenleaf Gardens</p></div></footer>
</body>
</html>
` },
    { name: "contact.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact – Greenleaf Gardens</title>
  <meta name="description" content="Book a garden visit or ask a question.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <div class="container cluster">
      <a class="logo" href="index.html">Greenleaf</a>
      <nav aria-label="Main"><ul class="cluster"><li><a href="index.html">Home</a></li><li><a href="services.html">Services</a></li><li><a href="about.html">About</a></li><li><a href="contact.html" aria-current="page">Contact</a></li></ul></nav>
    </div>
  </header>
  <main id="main" class="section"><div class="container grid grid--2">
    <form class="card stack" action="thanks.html" method="post">
      <h1>Contact us</h1>
      <div class="field"><label for="name">Name</label><input id="name" autocomplete="name" required></div>
      <div class="field"><label for="email">Email</label><input id="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="msg">Message</label><textarea id="msg" rows="5" required></textarea></div>
      <button class="button" type="submit">Send</button>
    </form>
    <address class="card">Greenleaf Gardens<br>3 Orchard Row<br>Bristol BS3 1AA<br><a href="tel:+441170000002">+44 117 000 0002</a></address>
  </div></main>
  <footer class="site-footer"><div class="container"><p>© 2026 Greenleaf Gardens</p></div></footer>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
/* 1. Tokens */
:root {
  --green-900: #14532d; --green-700: #15803d; --green-50: #f0fdf4;
  --ink: #1c1917; --muted: #57534e; --white: #ffffff;
  --space-1: 0.5rem; --space-2: 1rem; --space-3: 1.5rem; --space-4: 3rem;
  --radius: 0.75rem;
}

/* 2. Base */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: var(--ink); }
a { color: var(--green-700); }
:focus-visible { outline: 3px solid var(--green-700); outline-offset: 2px; }

/* 3. Layout utilities */
.container { max-width: 70rem; margin-inline: auto; padding-inline: var(--space-2); }
.stack > * + * { margin-top: var(--space-2); }
.cluster { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-1) var(--space-3); }
.grid { display: grid; gap: var(--space-3); margin: 0; padding: 0; list-style: none; }
.section { padding-block: var(--space-4); }

/* 4. Components */
.skip-link { position: absolute; left: var(--space-2); top: -4rem; padding: var(--space-1) var(--space-2); background: var(--green-900); color: var(--white); }
.skip-link:focus { top: var(--space-2); }
.site-header { padding-block: var(--space-2); border-bottom: 1px solid #e7e5e4; }
.site-header .cluster { justify-content: space-between; }
.site-header ul { margin: 0; padding: 0; list-style: none; }
.site-header a[aria-current="page"] { font-weight: 700; text-decoration-thickness: 3px; }
.logo { font-weight: 800; color: var(--green-900); text-decoration: none; }
.button { display: inline-block; padding: var(--space-1) var(--space-3); border: 0; border-radius: var(--radius); background: var(--green-700); color: var(--white); font: inherit; font-weight: 700; text-decoration: none; cursor: pointer; }
.card { padding: var(--space-3); border-radius: var(--radius); background: var(--green-50); }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.field input, .field textarea { min-height: 44px; padding: var(--space-1); border: 1px solid var(--muted); border-radius: 0.4rem; font: inherit; }
.site-footer { padding-block: var(--space-2); color: var(--muted); border-top: 1px solid #e7e5e4; }
address { font-style: normal; }

/* 5. Page rules */
.hero { padding-block: var(--space-4); background: var(--green-50); }
.hero h1 { font-size: clamp(2rem, 6vw, 3.25rem); margin: 0; }

/* Shared breakpoints: 48em and 64em */
@media (min-width: 48em) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 64em) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  .grid--2 { grid-template-columns: 2fr 1fr; }
}
` }
  ]
});
