/*
 * corrections-1-beginner.js — self-check corrections for projects 1–25
 * --------------------------------------------------------------------
 * One entry per project number:
 *   expectedHtml / expectedCss  what a correct solution contains
 *   checks.functional / responsive / accessibility
 *                               the self-check checklist (5–10 items in total);
 *                               each item is an action plus the result to look for
 *   commonMistakes              { mistake, fix } — at least 3, specific to the project
 * Model solutions are in js/data/solutions/ and load only when opened.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.corrections = Object.assign(HCM.data.corrections || {}, {
  1: {
    expectedHtml: ["One `<article>` inside `<main>` wraps the whole card.", "`<img>` with a descriptive `alt`, plus `width` and `height` attributes.", "Your name is the page's only `<h1>`; the bio is a `<p>`.", "The three links sit in a `<ul>`, each `<li>` holding one `<a>`."],
    expectedCss: ["`*, *::before, *::after { box-sizing: border-box; }`", "`.card { max-width: 22rem; margin: 3rem auto; padding: 2rem; }`", "`border-radius: 50%` on a square image (120 × 120).", "`font-family`, `line-height` and `color` declared on `body` only."],
    checks: {
      functional: ["Click each of the three links: every one goes somewhere (no dead `#` left in the final version).", "Swap in a rectangular photo: it stays a perfect circle without stretching."],
      responsive: ["Narrow the window to 360px: the card keeps space on both sides and nothing scrolls sideways.", "Widen to 1440px: the card stays at its max width, centred."],
      accessibility: ["Press Tab: each link shows a clearly visible focus outline.", "Read the alt text aloud: it describes you, and doesn't start with \"image of\"."]
    },
    commonMistakes: [
      { mistake: "Card wider than `max-width` because padding is added on top.", fix: "Add `box-sizing: border-box` so padding and border are included in the width." },
      { mistake: "A rectangular photo turns into an oval.", fix: "Give the image equal `width` and `height` plus `object-fit: cover` before rounding it." },
      { mistake: "Repeating `font-family` on every element.", fix: "Set it once on `body` — text properties inherit." }
    ]
  },
  2: {
    expectedHtml: ["`<article class=\"business-card\">` containing two blocks.", "Name in `<h1>`, job title in a `<p>`.", "Contact details inside `<address>` with `mailto:` and `tel:` links."],
    expectedCss: ["`aspect-ratio: 85 / 55` with only the width set.", "`display: flex; justify-content: space-between;` on the card.", "A divider such as `border-left: 2px solid` on the right block.", "A media query below 400px that switches to `flex-direction: column`."],
    checks: {
      functional: ["Click the email link: your mail app opens a new message to that address.", "Drag the window wider and narrower: the card keeps its 85 × 55 shape."],
      responsive: ["At 360px the two blocks stack and every line of text stays inside the card.", "At 1024px the card is centred and no wider than about 26rem."],
      accessibility: ["Check the HTML: phone, email and city are inside `<address>`.", "Check the job-title colour against the card background in DevTools: at least 4.5:1."]
    },
    commonMistakes: [
      { mistake: "Setting both `width` and `height` as well as `aspect-ratio`.", fix: "Leave height automatic — `aspect-ratio` only works when one dimension is free." },
      { mistake: "Phone link written as `tel:01234 567 890` with spaces and no country code.", fix: "Use `tel:+441234567890` in the `href`; keep the friendly format in the link text." },
      { mistake: "Typing the job title in capitals in the HTML.", fix: "Write it normally and use `text-transform: uppercase` so screen readers don't spell it out." }
    ]
  },
  3: {
    expectedHtml: ["`<html lang=\"en\">`, charset, viewport, a specific `<title>` and `<meta name=\"description\">`.", "One `<h1>` in `<header>`, at least three `<h2>` sections in `<main>`.", "A `<blockquote>` containing a `<p>` and a `<cite>`.", "An `<ol>` timeline with dates in `<time>`."],
    expectedCss: ["`max-width: 65ch; margin-inline: auto;` on the text column.", "`line-height` of about 1.6 on `body`.", "A heading scale such as 2.5 / 1.75 / 1.25rem.", "`blockquote { border-left: 4px solid …; font-style: italic; }`"],
    checks: {
      functional: ["Look at the browser tab: it shows your page's own title, not \"Document\".", "Read the timeline: events are numbered by the browser and in date order."],
      responsive: ["At 360px the text has at least 1rem of space on each side.", "At 1440px a line of text holds roughly 60–75 characters, not the whole screen width."],
      accessibility: ["Use a heading-outline tool or DevTools: headings go h1 → h2 → h3 with no skipped levels.", "Search the HTML for `<h1>`: it appears exactly once."]
    },
    commonMistakes: [
      { mistake: "Choosing heading levels for their size (an `<h4>` because it looks right).", fix: "Pick the level for the structure, then style its size in CSS." },
      { mistake: "Leaving the default `<title>Document</title>`.", fix: "Write a specific title like \"About Sam Lee – Biography\"." },
      { mistake: "Text running the full width of a wide monitor.", fix: "Limit the column with `max-width` in `ch` and centre it." }
    ]
  },
  4: {
    expectedHtml: ["`<article>` with the dish name in `<h1>`.", "`<figure>` with `<img>` and `<figcaption>`.", "A `<dl>` for prep/cook/serves using `<time datetime=\"PT20M\">`.", "Ingredients in a `<ul>`, method in an `<ol>`, each under an `<h2>`."],
    expectedCss: ["`li::marker { color: …; font-weight: 700; }`", "`li + li { margin-top: 0.5rem; }` (or `gap` on a grid list).", "`img { max-width: 100%; height: auto; }`", "`@media (min-width: 768px) { grid-template-columns: 1fr 2fr; }`"],
    checks: {
      functional: ["Delete a method step: the remaining steps renumber themselves.", "Hover the times in DevTools: each has a `datetime` value."],
      responsive: ["At 360px ingredients come first and the method follows in one column.", "At 1024px ingredients and method sit side by side with ingredients narrower."],
      accessibility: ["Read the image alt: it names the dish and what it looks like.", "Use the heading outline: \"Ingredients\" and \"Method\" are both `<h2>`."]
    },
    commonMistakes: [
      { mistake: "Typing step numbers (\"1.\", \"2.\") inside `<p>` tags.", fix: "Use an `<ol>`; the browser numbers the steps for you." },
      { mistake: "Putting prep time, cook time and servings in one sentence.", fix: "A `<dl>` pairs each label with its value." },
      { mistake: "Trying to style `::marker` with padding or background.", fix: "`::marker` supports only a few properties; use colour, font and `content`." }
    ]
  },
  5: {
    expectedHtml: ["`<ol class=\"movie-list\">` with ten `<li>` items.", "Each item: a title element, a year/director line and a review `<p>`.", "No class on individual items — structure does the work."],
    expectedCss: ["`.movie-list > li:nth-child(even) { background: … }`", "`.movie-list > li:first-child { … }` highlight.", "Descendant selectors for year and director, e.g. `.movie-list span`.", "Three class names or fewer in the whole file."],
    checks: {
      functional: ["Add an eleventh film: it gets the right stripe without new CSS.", "Move the first film to the bottom: the highlight follows whatever film is now first."],
      responsive: ["At 360px long titles wrap neatly inside their row.", "Every row has comfortable vertical padding at any width."],
      accessibility: ["Check the muted year text on a striped row: at least 4.5:1 contrast.", "View in greyscale (DevTools rendering panel): the first film still stands out by size or border."]
    },
    commonMistakes: [
      { mistake: "Adding `class=\"even\"` to every other item.", fix: "Use `:nth-child(even)` so new items stripe automatically." },
      { mistake: "Typing \"#1\" … \"#10\" in the text.", fix: "An `<ol>` numbers the ranking for you." },
      { mistake: "Writing `.movie-list li` and accidentally styling nested lists.", fix: "Use the child combinator `>` to target direct children only." }
    ]
  },
  6: {
    expectedHtml: ["`<table>` with a `<caption>`.", "`<thead>` row of `<th scope=\"col\">` days and an empty corner cell.", "`<tbody>` rows starting with `<th scope=\"row\">` times.", "At least one cell with `colspan=\"2\"`."],
    expectedCss: ["`table { border-collapse: collapse; min-width: 40rem; }`", "`th, td { padding: 0.5rem 0.75rem; text-align: left; }`", "`tbody tr:nth-child(even) { background: … }`", "`.table-wrap { overflow-x: auto; }`"],
    checks: {
      functional: ["Count the cells in every row: each row adds up to the same number of columns.", "Find the spanned activity: it covers exactly the two days you meant."],
      responsive: ["At 360px drag the table sideways: only the table scrolls, not the whole page.", "At 360px day names are still readable words, not squashed letters."],
      accessibility: ["Inspect every `<th>`: each has `scope=\"col\"` or `scope=\"row\"`.", "Read the caption: it says what the table shows."]
    },
    commonMistakes: [
      { mistake: "Building the timetable with `<div>`s in a grid.", fix: "A timetable is tabular data — use a real `<table>` so headers are announced." },
      { mistake: "Making a header with bold `<td>` cells.", fix: "Use `<th>` with `scope` so assistive tech knows it is a header." },
      { mistake: "Putting `overflow-x: auto` on the `<table>` itself.", fix: "Wrap the table in a `<div>` and put the overflow on the wrapper." }
    ]
  },
  7: {
    expectedHtml: ["`<header>` with the restaurant name and hours.", "Three `<section>`s, each with an `<h2>` and a `<ul>` of dishes.", "Prices in `<data value=\"12.50\">`.", "An empty `<span class=\"leader\">` between name and price."],
    expectedCss: ["`.dish__line { display: flex; align-items: baseline; gap: 0.5rem; }`", "`.leader { flex: 1; border-bottom: 2px dotted; }`", "`font-variant-numeric: tabular-nums` on prices.", "A serif system stack on headings and `max-width: 40rem` on the menu."],
    checks: {
      functional: ["Change one price to a longer amount: every price still lines up on the right.", "Each description sits on its own line under the dish name."],
      responsive: ["At 360px a long dish name wraps and the price stays on screen.", "At 360px the dotted leader shrinks rather than pushing anything out."],
      accessibility: ["Use a heading outline: Starters, Mains and Desserts are `<h2>`.", "Inspect the leader span: it contains no text or characters."]
    },
    commonMistakes: [
      { mistake: "Making the dots with a long string of full stops in the HTML.", fix: "Draw them with a dotted border on a flexible spacer element." },
      { mistake: "Long names push the price off the right edge.", fix: "Add `min-width: 0` (or `flex-shrink`) to the name so it can wrap." },
      { mistake: "Prices wobble because each digit has a different width.", fix: "`font-variant-numeric: tabular-nums` gives every digit the same width." }
    ]
  },
  8: {
    expectedHtml: ["Three sections with `<h2>`: Visit us, Call or email, Opening hours.", "Postal address inside `<address>`.", "A `<dl>` with `<dt>` labels and `<dd>` values containing `tel:`/`mailto:` links.", "A map placeholder `<div>`."],
    expectedCss: ["`dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.5rem 1.5rem; }`", "`dt { font-weight: 700; }`", "`.map { aspect-ratio: 16 / 9; border: 2px dashed …; display: grid; place-items: center; }`", "A media query below 480px setting `grid-template-columns: 1fr`."],
    checks: {
      functional: ["Click the phone and email links: they open a call and a new email.", "Count the opening-hours rows: all seven days are there."],
      responsive: ["At 360px each label sits above its value.", "Resize the window: the map placeholder keeps its 16:9 shape."],
      accessibility: ["Read the link texts: they show the real number and address, not \"call us\".", "Hover an abbreviated day: `<abbr title>` reveals the full name (or days are written in full)."]
    },
    commonMistakes: [
      { mistake: "Putting every contact line in separate `<p>` tags.", fix: "A `<dl>` keeps each label paired with its value." },
      { mistake: "Fixed pixel column widths that overflow on mobile.", fix: "Use `max-content 1fr` and switch to one column on narrow screens." },
      { mistake: "Embedding an online map service.", fix: "This project works offline — use a styled placeholder." }
    ]
  },
  9: {
    expectedHtml: ["`<article>` with its own `<header>` (h1, author, `<time datetime>`).", "Two or more `<h2>` subheadings among 5+ paragraphs.", "A `<figure>` with `<figcaption>` and a `<pre><code>` block.", "An article `<footer>` with tag links."],
    expectedCss: ["`body` text 1.125rem with `line-height: 1.7`.", "`article { max-width: 68ch; margin-inline: auto; }`", "`pre { overflow-x: auto; padding: 1rem; }`", "Inline `code` with a tinted background and small padding."],
    checks: {
      functional: ["Inspect the date: `datetime` holds a full date such as 2026-03-14.", "Add a very long line to the code block: it scrolls inside the block, the page doesn't widen."],
      responsive: ["At 360px the article has side padding and the image scales down.", "At 1440px the text column stays narrow and centred."],
      accessibility: ["Check heading order: one h1 then h2s.", "Measure code text on its tinted background: at least 4.5:1."]
    },
    commonMistakes: [
      { mistake: "Using `<br><br>` to separate paragraphs.", fix: "Use real `<p>` elements and space them with margin." },
      { mistake: "A long line in `<pre>` stretches the whole page.", fix: "Give `<pre>` `overflow-x: auto` and a `max-width: 100%`." },
      { mistake: "Writing the date only as text (\"last Tuesday\").", fix: "Wrap it in `<time datetime=\"2026-03-14\">` so machines can read it." }
    ]
  },
  10: {
    expectedHtml: ["`<article>` containing an image wrapper with the `<img>` and a badge `<span>`.", "`<h2>` product name and a rating `<p>` written as text.", "Old price in `<del>`, new price in `<ins>`.", "`<button type=\"button\">Add to cart</button>`."],
    expectedCss: ["`.media { position: relative; }` and `.badge { position: absolute; top: …; left: …; }`", "`img { aspect-ratio: 4 / 3; object-fit: cover; width: 100%; }`", "`ins { text-decoration: none; }`", "`.card:hover { box-shadow: … }` plus button hover, focus-visible and active states."],
    checks: {
      functional: ["Replace the photo with a tall one: it still fills the frame without stretching.", "Resize the card: the badge stays in the image's corner."],
      responsive: ["At 360px the card is full width; above 400px it stops at about 20rem.", "Measure the button: at least 44px tall."],
      accessibility: ["Read the rating: it says something like \"Rated 4.5 out of 5\" in text.", "View in greyscale: the old price is still identifiable by its line-through."]
    },
    commonMistakes: [
      { mistake: "The badge flies to the corner of the page.", fix: "Add `position: relative` to the image wrapper so the badge positions against it." },
      { mistake: "Showing the rating only as ★★★★☆ characters.", fix: "Add text such as \"4 out of 5\"; stars alone are read oddly or not at all." },
      { mistake: "Using a `<div>` with a click style as the button.", fix: "Use `<button type=\"button\">` so it works with the keyboard." }
    ]
  },
  11: {
    expectedHtml: ["`<header>` containing a logo `<a href>` and `<nav aria-label=\"Main\">`.", "A `<ul>` of five `<li><a>` links.", "`aria-current=\"page\"` on exactly one link."],
    expectedCss: ["`header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }`", "`nav ul { display: flex; gap: …; list-style: none; padding: 0; margin: 0; }`", "Padding on `a` giving at least 44px height.", "`[aria-current=\"page\"] { … }` with an underline bar, and link states in a sensible order."],
    checks: {
      functional: ["Move `aria-current` to another link: the highlight moves with it.", "Press Tab from the address bar: logo then each nav link gets a visible outline."],
      responsive: ["At 360px links wrap under the logo without overlapping.", "At 360px, with all five links wrapped, the header still causes no sideways scroll."],
      accessibility: ["Inspect the `<nav>`: it has an accessible name (\"Main\").", "View in greyscale: the current page is still distinguishable."]
    },
    commonMistakes: [
      { mistake: "A `class=\"active\"` that screen readers can't see.", fix: "Use `aria-current=\"page\"` and style that attribute." },
      { mistake: "Padding on `<li>` so only the text is clickable.", fix: "Put the padding on the `<a>` itself." },
      { mistake: "`:hover` written before `:visited`, so hover never shows on visited links.", fix: "Keep the order :link, :visited, :hover, :focus-visible, :active." }
    ]
  },
  12: {
    expectedHtml: ["`<header>`, `<main>` and `<footer>` landmarks.", "A hero `<section>` with the only `<h1>` and a link-button to the CTA id.", "A features section with three items and a CTA `<section id>`."],
    expectedCss: ["`:root { --color-primary: …; --color-text: …; --color-surface: …; --space: 1rem; }`", "`.hero { min-height: 60vh; display: grid; place-items: center; }`", "`.features { display: flex; flex-wrap: wrap; gap: … } .feature { flex: 1 1 15rem; }`", "One `.button` class reused for every button-like link."],
    checks: {
      functional: ["Change `--color-primary` to another colour: every accent updates at once.", "Click the hero button: the page jumps to the call-to-action section."],
      responsive: ["At 360px the three features stack in one column.", "At 1024px the three features sit side by side."],
      accessibility: ["Read the button text: it describes the action, not \"Click here\".", "Measure the CTA band text: at least 4.5:1 against its background."]
    },
    commonMistakes: [
      { mistake: "Hard-coding the same hex colour in ten places.", fix: "Define it once as a custom property and use `var()`." },
      { mistake: "A hero with `height: 100vh` that cuts off text on short screens.", fix: "Use `min-height` so the hero can grow with its content." },
      { mistake: "Wrapping every block in anonymous `<div>`s.", fix: "Use `<header>`, `<main>`, `<section>` and `<footer>` for meaning." }
    ]
  },
  13: {
    expectedHtml: ["`<section>` with an `<h2>` and a `<ul>` gallery.", "Each `<li>` holds a `<figure>` with `<img>` and `<figcaption>`.", "Every `<img>` has `alt`, `width` and `height`."],
    expectedCss: ["`.gallery { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }` on wide screens.", "`img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; }`", "`figure { overflow: hidden; }`", "`figure:hover img { transform: scale(1.05); }` with a transition."],
    checks: {
      functional: ["Swap a landscape photo for a portrait one: the thumbnail size doesn't change.", "Hover a thumbnail: the zoom stays inside its own square."],
      responsive: ["Resize from 360px to 1200px: 1, then 2, then 3 columns.", "At every width the page has no sideways scroll."],
      accessibility: ["Check each alt: meaningful, or empty when the caption says it all.", "Throttle the network in DevTools: the layout doesn't jump as images arrive."]
    },
    commonMistakes: [
      { mistake: "Stretching images with fixed width and height and no `object-fit`.", fix: "Use `object-fit: cover` so the image crops instead of distorting." },
      { mistake: "A small gap appears under every image.", fix: "Images are inline by default; set `display: block`." },
      { mistake: "Zoomed images cover their neighbours.", fix: "Put `overflow: hidden` on the figure wrapping each image." }
    ]
  },
  14: {
    expectedHtml: ["A table-of-contents `<nav>` with links to section ids.", "Four `<section id>` hobbies with `<h2>`.", "A `<blockquote>` banner and a Back to top link."],
    expectedCss: ["`header { background: linear-gradient(…); }`", "`.quote { background: radial-gradient(…); }`", "`html { scroll-behavior: smooth; }` inside a no-preference/reduced-motion check.", "`section { scroll-margin-top: …; }` and a photo background with an overlay gradient."],
    checks: {
      functional: ["Click each table-of-contents link: it lands on the right section heading.", "Click Back to top: you return to the start."],
      responsive: ["At 360px the table of contents wraps onto several lines neatly.", "Resize the window: the photo background always covers its section without repeating."],
      accessibility: ["Measure text over the photo: at least 4.5:1 thanks to the overlay.", "Turn on reduced motion in your OS: jumping is instant, not smooth."]
    },
    commonMistakes: [
      { mistake: "Headings hidden at the top after an in-page jump.", fix: "Add `scroll-margin-top` to the sections." },
      { mistake: "White text on a busy photo.", fix: "Layer a semi-transparent dark gradient over the image in the same `background`." },
      { mistake: "Background images tiling at large sizes.", fix: "Use `background-size: cover` and `background-position: center`." }
    ]
  },
  15: {
    expectedHtml: ["An `<article>` with `<h2>` plan name.", "Price in a `<p>` with a `<span>` for \"/month\".", "A `<ul>` of five features and a CTA link or button."],
    expectedCss: ["`.plan { display: flex; flex-direction: column; }`", "`.plan .button { margin-top: auto; }`", "`li::before { content: \"✓\"; }` positioned in left padding.", "Price font size at least 2.5× the body text."],
    checks: {
      functional: ["Delete two features: the button stays at the bottom of the card.", "Add a very long feature: it wraps under its own text, not under the tick."],
      responsive: ["At 360px the card is full width.", "On wide screens the card stops at about 22rem."],
      accessibility: ["Read the price aloud as a screen reader would: it sounds like \"12 dollars per month\".", "Remove the ticks mentally: every feature is still understandable from its text."]
    },
    commonMistakes: [
      { mistake: "Using an icon font for the ticks.", fix: "A `::before` with a ✓ character needs no download." },
      { mistake: "The button floats up when features are removed.", fix: "Make the card a flex column and use `margin-top: auto` on the button." },
      { mistake: "Every text the same size, so nothing stands out.", fix: "Build hierarchy with size, weight and colour: price biggest, details muted." }
    ]
  },
  16: {
    expectedHtml: ["A header with photo, name, course and year.", "A grades `<table>` with `<caption>` and `<th>` headers.", "Skill `<label>`s linked to `<meter min=\"0\" max=\"100\" value>`.", "A `mailto:` contact link."],
    expectedCss: ["`.profile { display: grid; gap: …; }` and `grid-template-columns: 18rem 1fr` from 900px.", "`.panel { padding; border; border-radius; }` used on every section.", "`meter { width: 100%; }`", "Table header styling and right-aligned numbers."],
    checks: {
      functional: ["Change a meter's value: its bar and its label number match.", "Read the grades table: averages are in their own column."],
      responsive: ["At 360px everything is one column and the table scrolls inside its panel.", "At 1024px the profile sits in a left column beside the panels."],
      accessibility: ["Click a skill label: focus or selection moves to its meter (they are linked).", "Inspect the table: it has a caption and header cells."]
    },
    commonMistakes: [
      { mistake: "Using `<progress>` for skill levels.", fix: "`<meter>` is for measurements in a range; `<progress>` is for task progress." },
      { mistake: "A different padding and border on every section.", fix: "Create one `.panel` class and reuse it." },
      { mistake: "Meters with no labels.", fix: "Link a `<label for>` to each meter's `id`." }
    ]
  },
  17: {
    expectedHtml: ["Two `<section>`s, each with an `<h2>`.", "Six or more `<details>` with a `<summary>` question.", "Answers in `<p>` after the summary."],
    expectedCss: ["`summary { list-style: none; display: flex; justify-content: space-between; }`", "`summary::-webkit-details-marker { display: none; }`", "`summary::after { content: \"+\"; }` and `details[open] summary::after { content: \"−\"; }`", "`details[open] { background: …; border-left: 4px solid …; }`"],
    checks: {
      functional: ["Tab to a question and press Enter: it opens; press Space: it closes.", "Open two answers: both stay open."],
      responsive: ["At 360px a long question wraps and its icon stays on the right.", "Each question row is at least 44px tall."],
      accessibility: ["Turn JavaScript off in DevTools: every question still opens and closes.", "Tab through the page: every summary shows a focus outline."]
    },
    commonMistakes: [
      { mistake: "Building the toggle with checkboxes or JavaScript.", fix: "`<details>`/`<summary>` gives you a native, keyboard-friendly disclosure." },
      { mistake: "Removing the default marker only for Chrome.", fix: "Also hide `::-webkit-details-marker` for Safari." },
      { mistake: "Putting headings inside `<summary>` and breaking its button role.", fix: "Keep summary content simple text; use section headings outside." }
    ]
  },
  18: {
    expectedHtml: ["All controls inside one `<form>`; no loose inputs.", "`<label for=\"email\">` paired with `<input id=\"email\" type=\"email\" name=\"email\" autocomplete=\"email\" required>`.", "The checkbox has its own `<label>` and `required`.", "`<button type=\"submit\">Subscribe</button>` — not a `<div>` or a link."],
    expectedCss: ["A universal `box-sizing: border-box` rule.", "A centred container: `max-width: 28rem; margin-inline: auto;`", "`:focus-visible` outlines on input and button.", "A flex row with `flex-wrap: wrap` so field and button share a line from about 600px."],
    checks: {
      functional: ["Submit with the email empty: the browser shows a message and nothing is sent.", "Type \"abc\" and submit: an email-format message appears.", "Click the consent text: the checkbox toggles."],
      responsive: ["At 360px: no horizontal scrollbar and the button is full width.", "At 768px: the email field and button share one row."],
      accessibility: ["Press Tab: focus goes email → checkbox → button, with a visible outline each time.", "In DevTools › Accessibility, each input's name comes from its label."]
    },
    commonMistakes: [
      { mistake: "Placeholder text used as the only label.", fix: "Placeholders vanish while typing; keep a real `<label>`." },
      { mistake: "`outline: none` with no replacement.", fix: "Swap it for a clearly visible `:focus-visible` style." },
      { mistake: "Styling `:invalid`, so the form is red before anyone types.", fix: "Use `:user-invalid`, which waits for interaction." }
    ]
  },
  19: {
    expectedHtml: ["`<form method=\"post\">` inside `<main>`.", "Email input with `autocomplete=\"username\"` and password with `autocomplete=\"current-password\"`, both `required`.", "`minlength=\"8\"` on the password, a remember-me checkbox and a forgotten-password link."],
    expectedCss: ["`main { min-height: 100vh; display: grid; place-items: center; }`", "`input, button { font: inherit; width: 100%; }`", "`:focus-visible { outline: 3px solid …; outline-offset: 2px; }`", "A card `max-width: 24rem` with side margin."],
    checks: {
      functional: ["Type a 5-character password and submit: the browser blocks it.", "Type in the password field: characters are hidden."],
      responsive: ["At 360px the card has margin on both sides.", "Measure inputs and button: each at least 44px tall."],
      accessibility: ["Click each label: the matching input gets focus.", "Read the forgotten-password link: it says what it does."]
    },
    commonMistakes: [
      { mistake: "Inputs use a different font from the page.", fix: "Form controls don't inherit fonts — add `font: inherit`." },
      { mistake: "Inventing `autocomplete` values like \"login-email\".", fix: "Use the standard tokens `username` and `current-password`." },
      { mistake: "Centring with `margin-top: 30%` guesses.", fix: "`display: grid; place-items: center` on a full-height parent centres exactly." }
    ]
  },
  20: {
    expectedHtml: ["Two `<fieldset>`s with `<legend>`s: Your details and Account.", "`type=\"date\"` birth date and a country `<select>`.", "Radio buttons sharing one `name` for account type.", "Password helper text with an `id`, referenced by `aria-describedby`."],
    expectedCss: ["`.name-row { display: grid; gap: 1rem; }` with two columns from 600px.", "Styled `fieldset` border/padding and `legend`.", "`input:user-invalid { border-color: … }`", "`accent-color: …` on radios and checkboxes."],
    checks: {
      functional: ["Select Business after Personal: Personal unselects automatically.", "Submit without ticking terms: the browser stops you."],
      responsive: ["At 360px first and last name are stacked.", "At 360px the date input and select are full width."],
      accessibility: ["Focus a radio with a screen reader or DevTools: the legend is part of its name/description.", "Focus the password field: the helper text is exposed as its description."]
    },
    commonMistakes: [
      { mistake: "Radios with different `name`s, so several can be selected.", fix: "Give every radio in a group the same `name`." },
      { mistake: "Using a bold `<p>` instead of a legend.", fix: "`<fieldset>` + `<legend>` groups the controls for assistive tech." },
      { mistake: "Helper text that's only visual.", fix: "Connect it with `aria-describedby` so it's read with the field." }
    ]
  },
  21: {
    expectedHtml: ["A `<section>` with a details column and a `<form>` column.", "Text, email and optional tel inputs, a subject `<select>` and a `<textarea>`.", "Labels that include \"(required)\" text for required fields."],
    expectedCss: ["`.contact { display: flex; flex-wrap: wrap; gap: … }` with `flex: 2 1 24rem` / `flex: 1 1 16rem`.", "`textarea { resize: vertical; min-height: 8rem; }`", "Equal height, border and focus style on all fields.", "`font: inherit` on form controls."],
    checks: {
      functional: ["Leave only phone empty and submit: the form is accepted.", "Drag the textarea's corner: it grows taller but never wider."],
      responsive: ["At 360px the columns stack in the same order every time.", "At 360px no field sticks out of the page."],
      accessibility: ["Read each label: required fields say \"(required)\" in words.", "Clear any placeholder text mentally: every field is still labelled."]
    },
    commonMistakes: [
      { mistake: "Required shown only by a red asterisk.", fix: "Write \"(required)\" in the label so everyone gets it." },
      { mistake: "Textarea resizable sideways, breaking the layout.", fix: "`resize: vertical` limits it to height." },
      { mistake: "Both columns fixed at 50%, so the form is cramped on tablets.", fix: "Use flex-basis values and `flex-wrap` for natural wrapping." }
    ]
  },
  22: {
    expectedHtml: ["`<section aria-labelledby=\"features-title\">` with an `<h2 id>`.", "A `<ul>` of six features, each with an icon `<svg aria-hidden=\"true\" focusable=\"false\">`, `<h3>` and `<p>`."],
    expectedCss: ["`.features { display: grid; gap: …; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); }`", "`.feature__icon { color: …; }` and `svg { stroke: currentColor; }`", "Single-class selectors like `.feature__title`.", "A circular icon background with fixed size."],
    checks: {
      functional: ["Change `color` on `.feature__icon`: all six icons change.", "Duplicate one feature to make seven: the grid absorbs it with no CSS change."],
      responsive: ["Resize from 360px to 1280px: 1, 2 then 3 columns with no media queries.", "At every width icons stay the same size and shape."],
      accessibility: ["Inspect an icon: it has `aria-hidden=\"true\"`.", "Inspect the section: its accessible name is the heading text."]
    },
    commonMistakes: [
      { mistake: "Selectors like `section ul li div h3`.", fix: "One class per element keeps specificity low and readable." },
      { mistake: "Hard-coded fill colours inside each SVG.", fix: "Use `currentColor` so CSS `color` controls the icon." },
      { mistake: "A media query for every column count.", fix: "`auto-fit` with `minmax()` creates the columns automatically." }
    ]
  },
  23: {
    expectedHtml: ["Three `<figure>`s, each with `<blockquote><p>…</p></blockquote>`.", "`<figcaption>` holding the avatar `<img>`, the name and the role."],
    expectedCss: ["`.testimonial { position: relative; padding: 1.5rem; box-shadow: …; }`", "`.testimonial::before { content: \"“\"; position: absolute; font-size: 5rem; }`", "`.testimonials { display: flex; flex-wrap: wrap; gap: … }` with stretched cards.", "`.avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }`"],
    checks: {
      functional: ["Make one quote much longer: all three cards stay the same height.", "Check the decorative mark: it never sits on top of readable words."],
      responsive: ["At 360px cards stack in one column.", "At 1280px three cards sit in a row."],
      accessibility: ["Read each avatar's alt: the name, or empty when the name is right beside it.", "Inspect the quote mark: it's in a pseudo-element, not in the HTML text."]
    },
    commonMistakes: [
      { mistake: "Typing the decorative “ into the HTML.", fix: "Add it with `::before` so it isn't read as content." },
      { mistake: "The absolute mark escapes the card.", fix: "Give the card `position: relative`." },
      { mistake: "Quote and name all in one `<p>`.", fix: "Use `<blockquote>` for the quote and `<figcaption>` for who said it." }
    ]
  },
  24: {
    expectedHtml: ["`<article>` with an image wrapper containing `<img>` and the `<h2>`.", "A `<dl>` with three term/value pairs.", "An Explore link whose name includes the place."],
    expectedCss: ["`.media { position: relative; }` and `.media h2 { position: absolute; bottom: …; left: …; }`", "`.media::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.7), transparent); }`", "`.card { transition: transform .2s, box-shadow .2s; }` with `:hover, :focus-within` lift.", "A reduced-motion rule removing the transform."],
    checks: {
      functional: ["Swap in a very bright photo: the place name is still readable.", "Tab to the Explore link: the card lifts the same way as on hover."],
      responsive: ["At 360px the three facts stack.", "Resize the window: the photo keeps its shape."],
      accessibility: ["Measure the heading over the darkest gradient area: at least 4.5:1.", "Read the link's accessible name: it includes the destination."]
    },
    commonMistakes: [
      { mistake: "The gradient layer covers the heading.", fix: "Raise the heading with `z-index` or place it after the overlay." },
      { mistake: "Animating `top` for the lift effect.", fix: "Animate `transform: translateY()` — smoother and layout-free." },
      { mistake: "Every card's link says just \"Explore\".", fix: "Add visually hidden text: \"Explore Lisbon\"." }
    ]
  },
  25: {
    expectedHtml: ["Three pages: `index.html`, `about.html`, `projects.html`.", "Identical header, nav and footer on each, with `aria-current=\"page\"` on the current link.", "Unique `<title>`, meta description and `<h1>` per page.", "A skip link to `#main` on every page."],
    expectedCss: ["One shared `styles.css` linked by all pages.", "`:root` tokens for colours, fonts and spacing.", "`.container { max-width: 64rem; margin-inline: auto; padding-inline: 1rem; }`", "A flex header and wrapping project cards."],
    checks: {
      functional: ["Click every nav link on every page: all nine links (3 × 3) land on the right page.", "On each page, the matching nav item is highlighted."],
      responsive: ["Open all three pages at 360px: none scroll sideways.", "At 1280px project cards sit three across."],
      accessibility: ["Press Tab once on any page: the skip link appears and jumps to main content.", "Check each page: one `<h1>`, `lang` set, landmarks present."]
    },
    commonMistakes: [
      { mistake: "Copy-pasting a different stylesheet onto each page.", fix: "Link one shared `styles.css` from every page." },
      { mistake: "Absolute paths like `/about.html` that break when opened from disk.", fix: "Use relative paths such as `about.html`." },
      { mistake: "Same `<title>` on every page.", fix: "Give each page its own title and description." }
    ]
  }
});
