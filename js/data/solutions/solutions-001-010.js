/*
 * Model solutions for projects 1–10 (complete solutions).
 * Loaded only when you open a model solution. Each file uses the sample
 * images in assets/images (copy them into your project's images/ folder).
 */
HCM.solutions.register(1, {
  scope: "full",
  notes: [
    "`box-sizing: border-box` makes the 22rem `max-width` include padding and border.",
    "Font, line height and colour are set once on `body` and inherited by the card.",
    "Body padding keeps space around the card on narrow phones."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sam Rivera – Profile</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="card">
      <img class="card__photo" src="images/sample-avatar.svg" width="120" height="120"
           alt="Sam Rivera smiling, wearing a dark jumper">
      <h1 class="card__name">Sam Rivera</h1>
      <p class="card__bio">Front-end learner from Lisbon. I build small, accessible websites
        and I'm practising layout with Flexbox and Grid.</p>
      <ul class="card__links">
        <li><a href="projects.html">Projects</a></li>
        <li><a href="cv.pdf">CV (PDF)</a></li>
        <li><a href="mailto:sam@example.com">Email</a></li>
      </ul>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  padding: 0 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background: #f3f4f6;
}

.card {
  max-width: 22rem;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  background: #ffffff;
  text-align: center;
}

.card__photo {
  display: block;
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  object-fit: cover;
}

.card__name { margin: 0 0 0.5rem; font-size: 1.5rem; }
.card__bio { margin: 0 0 1.5rem; }

.card__links {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.card__links a { color: #0f766e; font-weight: 600; }
.card__links a:hover { color: #134e4a; }
.card__links a:focus-visible {
  outline: 3px solid #0f766e;
  outline-offset: 3px;
  border-radius: 4px;
}
` }
  ]
});

HCM.solutions.register(2, {
  scope: "full",
  notes: [
    "Only the width is set; `aspect-ratio` calculates the height.",
    "`<address>` is italic by default, so `font-style: normal` resets it.",
    "Below 400px the flex direction switches to a column and the divider moves to the top."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sam Rivera – Business card</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="business-card">
      <div class="business-card__identity">
        <h1 class="business-card__name">Sam Rivera</h1>
        <p class="business-card__role">Front-end developer</p>
      </div>
      <address class="business-card__contact">
        <a href="mailto:sam@example.com">sam@example.com</a>
        <a href="tel:+351210000000">+351 21 000 0000</a>
        <span>Lisbon, Portugal</span>
      </address>
    </article>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: #0f172a;
  background: #e2e8f0;
}

.business-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: min(100%, 26rem);
  aspect-ratio: 85 / 55;
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #ffffff, #ecfeff);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
}

.business-card__name { margin: 0; font-size: 1.4rem; }

.business-card__role {
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
}

.business-card__contact {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-left: 1.5rem;
  border-left: 2px solid #0f766e;
  font-size: 0.85rem;
  font-style: normal;
}

.business-card__contact a { color: inherit; }
.business-card__contact a:focus-visible { outline: 2px solid #0f766e; outline-offset: 2px; }

@media (max-width: 400px) {
  .business-card { flex-direction: column; align-items: flex-start; }
  .business-card__contact {
    padding: 1rem 0 0;
    border-left: 0;
    border-top: 2px solid #0f766e;
  }
}
` }
  ]
});

HCM.solutions.register(3, {
  scope: "full",
  notes: [
    "The heading outline is h1 → h2 → h3 with no skipped levels.",
    "`max-width: 65ch` keeps lines readable on wide screens.",
    "The timeline is an `<ol>` with `<time>` elements, so order and dates are machine-readable."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Sam Rivera – Biography</title>
  <meta name="description" content="The story of Sam Rivera: from a childhood in Porto to learning front-end development.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="page-header">
    <h1>Sam Rivera</h1>
    <p>Learner, tinkerer and occasional baker.</p>
  </header>
  <main class="bio">
    <section>
      <h2>Early years</h2>
      <p>I grew up in Porto, taking apart radios and drawing maps of imaginary cities.</p>
    </section>
    <section>
      <h2>Education</h2>
      <p>I studied graphic design, which taught me hierarchy, spacing and patience.</p>
      <h3>A lesson that stuck</h3>
      <blockquote>
        <p>Design is not just what it looks like. Design is how it works.</p>
        <cite>A teacher's favourite quote</cite>
      </blockquote>
    </section>
    <section>
      <h2>Today</h2>
      <p>I'm building one small website at a time.</p>
      <ol class="timeline">
        <li><time datetime="2015">2015</time> – First hand-written HTML page</li>
        <li><time datetime="2019">2019</time> – Graduated in graphic design</li>
        <li><time datetime="2024">2024</time> – Started learning CSS layout</li>
        <li><time datetime="2026">2026</time> – Building 100 practice projects</li>
      </ol>
    </section>
  </main>
</body>
</html>
` },
    { name: "styles.css", language: "css", code: `
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  padding: 0 1rem 3rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1c1917;
  background: #fafaf9;
}

.page-header,
.bio {
  max-width: 65ch;
  margin-inline: auto;
}

.page-header { padding: 3rem 0 1rem; border-bottom: 1px solid #d6d3d1; }

h1, h2, h3 { font-family: system-ui, -apple-system, "Segoe UI", sans-serif; line-height: 1.2; }
h1 { margin: 0; font-size: 2.5rem; }
h2 { margin: 2.5rem 0 0.75rem; font-size: 1.75rem; }
h3 { margin: 1.5rem 0 0.5rem; font-size: 1.25rem; }

blockquote {
  margin: 1.5rem 0;
  padding: 0.5rem 0 0.5rem 1.25rem;
  border-left: 4px solid #b45309;
  font-style: italic;
}

blockquote p { margin: 0 0 0.5rem; }
cite { font-size: 0.9rem; font-style: normal; color: #57534e; }

.timeline { padding-left: 1.5rem; }
.timeline li + li { margin-top: 0.5rem; }
.timeline time { font-weight: 700; }
` }
  ]
});

HCM.solutions.register(4, {
  scope: "full",
  notes: [
    "Ingredients are a `<ul>` (order doesn't matter); the method is an `<ol>` (order matters).",
    "`::marker` colours the bullets and numbers without extra HTML.",
    "From 768px a `1fr 2fr` grid places ingredients beside the method."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Summer Tomato Tart – Recipe</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="recipe">
      <h1>Summer Tomato Tart</h1>
      <p>A crisp tart for warm evenings, ready in under an hour.</p>
      <figure>
        <img src="images/sample-dish.svg" width="600" height="450"
             alt="A round tart topped with red tomato slices and fresh basil on a white plate">
        <figcaption>Serve warm with a green salad.</figcaption>
      </figure>
      <dl class="facts">
        <div><dt>Prep</dt><dd><time datetime="PT20M">20 min</time></dd></div>
        <div><dt>Cook</dt><dd><time datetime="PT35M">35 min</time></dd></div>
        <div><dt>Serves</dt><dd>4</dd></div>
      </dl>
      <div class="recipe__body">
        <section>
          <h2>Ingredients</h2>
          <ul>
            <li>1 sheet puff pastry</li>
            <li>4 ripe tomatoes</li>
            <li>150 g soft goat's cheese</li>
            <li>2 tbsp green pesto</li>
            <li>1 egg, beaten</li>
            <li>Small bunch of basil</li>
            <li>1 tbsp olive oil</li>
            <li>Salt and pepper</li>
          </ul>
        </section>
        <section>
          <h2>Method</h2>
          <ol>
            <li>Heat the oven to 200°C and line a tray with baking paper.</li>
            <li>Score a border 2 cm from the pastry edge and spread pesto inside it.</li>
            <li>Crumble over the cheese and lay the sliced tomatoes on top.</li>
            <li>Brush the border with egg and bake for 30–35 minutes.</li>
            <li>Drizzle with oil, scatter basil and season before serving.</li>
          </ol>
        </section>
      </div>
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
  line-height: 1.6;
  color: #292524;
  background: #fffbeb;
}

.recipe { max-width: 60rem; margin-inline: auto; }

img { display: block; max-width: 100%; height: auto; border-radius: 0.75rem; }
figure { margin: 1.5rem 0; }
figcaption { margin-top: 0.5rem; font-size: 0.9rem; color: #57534e; }

.facts { display: flex; flex-wrap: wrap; gap: 1rem 2rem; margin: 0 0 2rem; }
.facts dt { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #78716c; }
.facts dd { margin: 0; font-weight: 700; }

li + li { margin-top: 0.5rem; }
li::marker { color: #c2410c; font-weight: 700; }

@media (min-width: 768px) {
  .recipe__body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
}
` }
  ]
});

HCM.solutions.register(5, {
  scope: "full",
  notes: [
    "Only one class name (`movie-list`) is needed — structure does the rest.",
    "`>` keeps the styles on direct list items, so nested lists wouldn't be affected.",
    "The first film stands out by size and a border, not just colour."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My top 10 films</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>My top 10 films</h1>
    <ol class="movie-list">
      <li>
        <h2>The Long Summer</h2>
        <p><span>2019</span> · <span>Directed by A. Moreau</span></p>
        <p>A quiet road trip that says more with silence than most films say with words.</p>
      </li>
      <li>
        <h2>Paper Lanterns</h2>
        <p><span>2011</span> · <span>Directed by K. Sato</span></p>
        <p>Beautifully lit and surprisingly funny.</p>
      </li>
      <li>
        <h2>North Line</h2>
        <p><span>2003</span> · <span>Directed by M. Okafor</span></p>
        <p>The best train scene ever filmed.</p>
      </li>
      <li>
        <h2>Glass City</h2>
        <p><span>2016</span> · <span>Directed by L. Varga</span></p>
        <p>A clever mystery with an ending I didn't see coming.</p>
      </li>
      <li>
        <h2>Small Hours</h2>
        <p><span>1998</span> · <span>Directed by R. Dubois</span></p>
        <p>One night, one café, four strangers.</p>
      </li>
      <li>
        <h2>Tidewater</h2>
        <p><span>2021</span> · <span>Directed by J. Ahn</span></p>
        <p>The sea is the main character.</p>
      </li>
      <li>
        <h2>Brass and Bone</h2>
        <p><span>2008</span> · <span>Directed by P. Lindqvist</span></p>
        <p>A jazz biopic that actually swings.</p>
      </li>
      <li>
        <h2>Orchard</h2>
        <p><span>2013</span> · <span>Directed by S. Haddad</span></p>
        <p>Gentle, warm and full of light.</p>
      </li>
      <li>
        <h2>Static</h2>
        <p><span>2022</span> · <span>Directed by E. Novak</span></p>
        <p>Tense sci-fi on a tiny budget.</p>
      </li>
      <li>
        <h2>Homeward</h2>
        <p><span>2005</span> · <span>Directed by T. Mensah</span></p>
        <p>I cry every time, and I'm fine with that.</p>
      </li>
    </ol>
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
  line-height: 1.5;
  color: #111827;
  background: #f9fafb;
}

main { max-width: 42rem; margin-inline: auto; }

.movie-list { margin: 0; padding-left: 2rem; }

.movie-list > li {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.movie-list > li:nth-child(even) { background: #eef2f7; }
.movie-list > li:hover { background: #e0f2fe; }

.movie-list > li:first-child {
  border-left: 5px solid #0f766e;
  background: #ecfdf5;
}

.movie-list > li:first-child h2 { font-size: 1.6rem; }

.movie-list h2 { margin: 0; font-size: 1.15rem; }
.movie-list p { margin: 0.25rem 0 0; }
.movie-list span { font-size: 0.875rem; color: #4b5563; }
` }
  ]
});

HCM.solutions.register(6, {
  scope: "full",
  notes: [
    "Headers use `scope` so each cell is linked to its day and time.",
    "The wrapper scrolls, not the page, and `min-width` stops columns being squashed.",
    "Wednesday's workshop spans two days with `colspan=\"2\"` — every row still adds up to six cells."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My week – Schedule</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <h1>Weekly schedule</h1>
    <div class="table-wrap">
      <table>
        <caption>My week</caption>
        <thead>
          <tr>
            <td></td>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">08:00</th><td>Run</td><td>Yoga</td><td>Run</td><td>Yoga</td><td>Run</td></tr>
          <tr><th scope="row">09:00</th><td>HTML practice</td><td>CSS practice</td><td colspan="2">Design workshop</td><td>Review</td></tr>
          <tr><th scope="row">12:00</th><td>Lunch</td><td>Lunch</td><td>Lunch</td><td>Lunch</td><td>Lunch</td></tr>
          <tr><th scope="row">14:00</th><td>Project</td><td>Project</td><td>Reading</td><td>Project</td><td>Project</td></tr>
          <tr><th scope="row">17:00</th><td>Self-check</td><td>Self-check</td><td>Free</td><td>Self-check</td><td>Plan next week</td></tr>
          <tr><th scope="row">19:00</th><td>Cook</td><td>Climbing</td><td>Cook</td><td>Climbing</td><td>Friends</td></tr>
        </tbody>
      </table>
    </div>
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
  color: #1e293b;
  background: #f8fafc;
}

main { max-width: 64rem; margin-inline: auto; }

.table-wrap {
  overflow-x: auto;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background: #ffffff;
}

table { width: 100%; min-width: 40rem; border-collapse: collapse; }

caption {
  padding: 0.75rem;
  font-weight: 700;
  text-align: left;
}

th, td {
  padding: 0.5rem 0.75rem;
  border-top: 1px solid #e2e8f0;
  text-align: left;
  vertical-align: top;
}

thead th { background: #0f766e; color: #ffffff; }
tbody th { white-space: nowrap; color: #0f766e; }
tbody tr:nth-child(even) { background: #f1f5f9; }
td[colspan] { background: #fef3c7; font-weight: 600; }
` }
  ]
});

HCM.solutions.register(7, {
  scope: "full",
  notes: [
    "The leader is an empty span with `flex: 1` and a dotted bottom border.",
    "`align-items: baseline` puts the dots on the text line.",
    "`<data value>` gives each price a machine-readable value."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>The Olive Table – Menu</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="menu">
    <header class="menu__header">
      <h1>The Olive Table</h1>
      <p>Open Tuesday to Sunday, 12:00–22:00</p>
    </header>

    <section>
      <h2>Starters</h2>
      <ul class="dishes">
        <li class="dish">
          <p class="dish__line"><span class="dish__name">Warm bread &amp; olives</span><span class="leader"></span><data class="dish__price" value="5.50">€5.50</data></p>
          <p class="dish__desc">Sourdough, marinated olives, smoked butter.</p>
        </li>
        <li class="dish">
          <p class="dish__line"><span class="dish__name">Tomato soup</span><span class="leader"></span><data class="dish__price" value="7.00">€7.00</data></p>
          <p class="dish__desc">Roasted tomatoes, basil oil.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Mains</h2>
      <ul class="dishes">
        <li class="dish">
          <p class="dish__line"><span class="dish__name">Slow-cooked lamb with rosemary potatoes</span><span class="leader"></span><data class="dish__price" value="21.00">€21.00</data></p>
          <p class="dish__desc">Seven-hour shoulder, garden greens.</p>
        </li>
        <li class="dish">
          <p class="dish__line"><span class="dish__name">Mushroom risotto</span><span class="leader"></span><data class="dish__price" value="16.50">€16.50</data></p>
          <p class="dish__desc">Wild mushrooms, aged cheese, thyme.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Desserts</h2>
      <ul class="dishes">
        <li class="dish">
          <p class="dish__line"><span class="dish__name">Lemon tart</span><span class="leader"></span><data class="dish__price" value="6.50">€6.50</data></p>
          <p class="dish__desc">Crisp pastry, burnt meringue.</p>
        </li>
      </ul>
    </section>
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
  color: #1c1917;
  background: #f5f5f0;
}

.menu { max-width: 40rem; margin-inline: auto; }

.menu__header { text-align: center; margin-bottom: 2rem; }

h1, h2 { font-family: Georgia, "Times New Roman", serif; }
h2 { margin: 2.5rem 0 1rem; border-bottom: 2px solid #78350f; color: #78350f; }

.dishes { margin: 0; padding: 0; list-style: none; }
.dish + .dish { margin-top: 1rem; }

.dish__line {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin: 0;
  font-weight: 600;
}

.dish__name { min-width: 0; }

.leader {
  flex: 1;
  min-width: 1rem;
  border-bottom: 2px dotted #a8a29e;
}

.dish__price { font-variant-numeric: tabular-nums; white-space: nowrap; }
.dish__desc { margin: 0.25rem 0 0; color: #57534e; font-size: 0.95rem; }
` }
  ]
});

HCM.solutions.register(8, {
  scope: "full",
  notes: [
    "`max-content 1fr` makes the label column exactly as wide as the longest label.",
    "One grid change turns the `<dl>` into a single column on small screens.",
    "The map is a styled placeholder so the page works offline."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact – Northside Bikes</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="contact">
    <h1>Contact Northside Bikes</h1>

    <section>
      <h2>Visit us</h2>
      <address>
        Northside Bikes<br>
        14 Mill Lane<br>
        Leeds LS1 4AB<br>
        United Kingdom
      </address>
      <div class="map">Map</div>
    </section>

    <section>
      <h2>Call or email</h2>
      <dl class="details">
        <dt>Phone</dt><dd><a href="tel:+441130000000">+44 113 000 0000</a></dd>
        <dt>Workshop</dt><dd><a href="tel:+441130000001">+44 113 000 0001</a></dd>
        <dt>Email</dt><dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
      </dl>
    </section>

    <section>
      <h2>Opening hours</h2>
      <dl class="details">
        <dt><abbr title="Monday">Mon</abbr> – <abbr title="Friday">Fri</abbr></dt><dd>08:30–18:00</dd>
        <dt><abbr title="Saturday">Sat</abbr></dt><dd>09:00–17:00</dd>
        <dt><abbr title="Sunday">Sun</abbr></dt><dd>Closed</dd>
      </dl>
    </section>
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
  line-height: 1.6;
  color: #111827;
  background: #ffffff;
}

.contact { max-width: 44rem; margin-inline: auto; }
section + section { margin-top: 2.5rem; }
address { font-style: normal; margin-bottom: 1rem; }

.details {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem 1.5rem;
  margin: 0;
}

.details dt { font-weight: 700; }
.details dd { margin: 0; }
.details a { color: #0f766e; }
abbr { text-decoration: none; }

.map {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 9;
  border: 2px dashed #9ca3af;
  border-radius: 0.5rem;
  color: #6b7280;
  font-weight: 700;
}

@media (max-width: 480px) {
  .details { grid-template-columns: 1fr; gap: 0.15rem; }
  .details dd { margin-bottom: 0.75rem; }
}
` }
  ]
});

HCM.solutions.register(9, {
  scope: "full",
  notes: [
    "The article has its own `<header>` and `<footer>` — they belong to the post, not the page.",
    "`<pre>` scrolls horizontally, so long code never widens the page.",
    "Spacing uses `margin-block-start` only, which avoids collapsing-margin surprises."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Why I finally understood the box model – Sam's blog</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="post">
      <header class="post__header">
        <h1>Why I finally understood the box model</h1>
        <p class="post__meta">By Sam Rivera · <time datetime="2026-03-14">14 March 2026</time></p>
      </header>

      <p>For weeks my cards were always a little too wide. The fix was one line of CSS.</p>

      <h2>The problem</h2>
      <p>I set <code>width: 300px</code>, added padding, and the card grew. Every time.</p>
      <figure>
        <img src="images/sample-landscape.svg" width="800" height="500" alt="A mountain range at sunset, used as the post's header image">
        <figcaption>Not a box model diagram, but much prettier.</figcaption>
      </figure>

      <h2>The fix</h2>
      <p>Switching the box-sizing model makes padding and border part of the width:</p>
      <pre><code>*, *::before, *::after {
  box-sizing: border-box; /* padding and border are now included in width */
}</code></pre>
      <p>Now <code>width: 300px</code> really means 300 pixels.</p>
      <p>I add this rule to every new project before writing anything else.</p>

      <footer class="post__footer">
        <h2>Tags</h2>
        <ul class="tags">
          <li><a href="tag-css.html">CSS</a></li>
          <li><a href="tag-layout.html">Layout</a></li>
          <li><a href="tag-beginners.html">Beginners</a></li>
        </ul>
      </footer>
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
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #1f2937;
  background: #fdfdfb;
}

.post { max-width: 68ch; margin-inline: auto; }
.post > * { margin: 0; }
.post > * + * { margin-block-start: 1.25rem; }

h1, h2 { font-family: system-ui, -apple-system, "Segoe UI", sans-serif; line-height: 1.25; }
h1 { font-size: 2.2rem; }
.post > h2 { margin-block-start: 2.5rem; }

.post__meta { margin: 0.5rem 0 0; color: #4b5563; font-size: 1rem; }

img { display: block; max-width: 100%; height: auto; border-radius: 0.5rem; }
figcaption { font-size: 0.9rem; color: #6b7280; }

code {
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 0.9em;
  padding: 0.1em 0.35em;
  border-radius: 4px;
  background: #eef2f7;
}

pre {
  overflow-x: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #eef2f7;
}

pre code { padding: 0; background: none; }

.post__footer { padding-top: 1.5rem; border-top: 1px solid #e5e7eb; }
.post__footer h2 { font-size: 1rem; }
.tags { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 0.5rem 0 0; padding: 0; list-style: none; }
.tags a { color: #0f766e; }
` }
  ]
});

HCM.solutions.register(10, {
  scope: "full",
  notes: [
    "The badge is positioned against the image wrapper, which has `position: relative`.",
    "`aspect-ratio` plus `object-fit: cover` keeps any photo filling the frame.",
    "A visually hidden \"Was\" and \"Now\" make the prices clear to screen readers."
  ],
  files: [
    { name: "index.html", language: "html", code: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trail Bottle – Product</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <article class="product">
      <div class="product__media">
        <img src="images/sample-product.svg" width="600" height="450" alt="A teal insulated water bottle with a white label">
        <span class="product__badge">−20%</span>
      </div>
      <div class="product__body">
        <h2 class="product__name">Trail Bottle 750 ml</h2>
        <p class="product__rating">Rated 4.5 out of 5 (128 reviews)</p>
        <p class="product__price">
          <del><span class="visually-hidden">Was </span>€30.00</del>
          <ins><span class="visually-hidden">Now </span>€24.00</ins>
        </p>
        <button class="product__button" type="button">Add to cart</button>
      </div>
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
  background: #f1f5f9;
}

.product {
  max-width: 20rem;
  margin-inline: auto;
  overflow: hidden;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
  transition: box-shadow 0.2s ease;
}

.product:hover { box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16); }

.product__media { position: relative; }

.product__media img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.product__badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: #b91c1c;
  color: #ffffff;
  font-weight: 700;
}

.product__body { padding: 1.25rem; }
.product__name { margin: 0; font-size: 1.2rem; }
.product__rating { margin: 0.25rem 0 0.75rem; color: #475569; font-size: 0.9rem; }

.product__price { display: flex; gap: 0.75rem; align-items: baseline; margin: 0 0 1rem; }
.product__price del { color: #64748b; }
.product__price ins { text-decoration: none; font-size: 1.4rem; font-weight: 800; }

.product__button {
  width: 100%;
  min-height: 44px;
  border: 0;
  border-radius: 0.6rem;
  background: #0f766e;
  color: #ffffff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.product__button:hover { background: #115e59; }
.product__button:focus-visible { outline: 3px solid #0f172a; outline-offset: 3px; }
.product__button:active { transform: translateY(1px); }

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: 399px) {
  .product { max-width: none; }
}
` }
  ]
});
