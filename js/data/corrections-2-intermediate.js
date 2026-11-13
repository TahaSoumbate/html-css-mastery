/*
 * corrections-2-intermediate.js — self-check corrections for projects 26–50
 * -------------------------------------------------------------------------
 * Same structure as corrections-1-beginner.js.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.corrections = Object.assign(HCM.data.corrections || {}, {
  26: {
    expectedHtml: ["`<header>` with a `<nav>` list, then hero, about, menu, gallery, visit and footer sections.", "Dish cards as a `<ul>` of `<article>`s.", "`<address>` plus an opening-hours `<table>` with `<caption>` and `<th scope>`."],
    expectedCss: ["Base rules with no media query produce a single column.", "Only `@media (min-width: 768px)` and `@media (min-width: 1024px)`.", "`.dishes { display: grid; gap: var(--space-4); }` with 2 then 3 columns.", "A `--space-*` scale used for all spacing."],
    checks: {
      functional: ["Click the hero button: the page jumps to the menu section.", "Search your CSS for `max-width` media queries: there are none (mobile-first)."],
      responsive: ["Resize slowly from 320px to 1920px: layout changes only at 768px and 1024px.", "At 320px no section causes sideways scrolling.", "At 768px the about image sits beside its text."],
      accessibility: ["Check every dish photo: its alt names the dish.", "At 360px measure a nav link: at least 44px tall."]
    },
    commonMistakes: [
      { mistake: "Writing desktop CSS first and undoing it in `max-width` queries.", fix: "Start with the small-screen layout and add complexity with `min-width`." },
      { mistake: "A different breakpoint for every section.", fix: "Pick two breakpoints and reuse them everywhere." },
      { mistake: "Spacing values like 13px, 17px and 22px.", fix: "Use the spacing scale so rhythm stays consistent." }
    ]
  },
  27: {
    expectedHtml: ["`<main>` with a featured `<article>` and a list of six post `<article>`s.", "`<aside>` with a categories `<nav>` and a newsletter `<form>`.", "`<time datetime>` in every post."],
    expectedCss: ["`.page { display: grid; grid-template-columns: minmax(0, 1fr) 18rem; }` from 1024px.", "`.post-card` base and `.post-card--featured` modifier.", "`-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;` on excerpts.", "Images with `aspect-ratio` and `object-fit: cover`."],
    checks: {
      functional: ["Paste a very long excerpt: it stops after three lines with an ellipsis.", "Click any card title: it is the card's single link to the post."],
      responsive: ["At 1024px the sidebar sits beside the posts; at 1023px it moves underneath.", "At 360px the featured card shows its image above its text."],
      accessibility: ["Tab through the cards: you don't hear or see several identical \"Read more\" links.", "Inspect a post date: the `datetime` attribute is filled."]
    },
    commonMistakes: [
      { mistake: "A long URL or word makes the main column overflow.", fix: "Use `minmax(0, 1fr)` instead of `1fr` for the main track." },
      { mistake: "Copying all card CSS into the featured version.", fix: "The modifier should only override what's different." },
      { mistake: "Cutting excerpts by hand in the HTML.", fix: "Keep full text and clamp it with CSS." }
    ]
  },
  28: {
    expectedHtml: ["A hero `<header>` with `<h1>` and intro.", "A skills `<ul>` and a projects section with six `<article>` cards.", "Each card has two links with distinct, descriptive names."],
    expectedCss: ["`h1 { font-size: clamp(2rem, 1rem + 5vw, 4rem); }`", "`.projects { grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); }`", "`.chip { display: inline-flex; }` in a wrapping flex list with `gap`.", "Card lift on `:hover` and `:focus-within` with a transition."],
    checks: {
      functional: ["Delete four cards: notice the difference between `auto-fill` and `auto-fit`.", "Add ten skill chips: they wrap onto new lines."],
      responsive: ["Resize from 360px to 1440px: the heading grows smoothly with no jumps.", "Zoom the browser to 200%: the heading text still grows (rem is part of clamp)."],
      accessibility: ["Read the link names in DevTools: \"Live demo of …\" and \"Source code of …\" are unique per card.", "Tab into a card: it lifts exactly as it does on hover."]
    },
    commonMistakes: [
      { mistake: "Using only `vw` for font size, so zoom stops working.", fix: "Mix `rem` and `vw` inside `clamp()`." },
      { mistake: "Cards stretch huge when only two exist.", fix: "Understand `auto-fit` vs `auto-fill` and choose deliberately." },
      { mistake: "Hover effects that never appear for keyboard users.", fix: "Pair `:hover` with `:focus-within` on the card." }
    ]
  },
  29: {
    expectedHtml: ["Breadcrumb `<nav aria-label=\"Breadcrumb\">` and a page `<h1>` with result count.", "`<aside>` with a filter `<form>`, brand `<fieldset>`, labelled range input and Apply button.", "Labelled sort `<select>`, a visually hidden `<h2>` and a `<ul>` of 12 product `<article>`s."],
    expectedCss: ["`.listing { display: grid; grid-template-columns: 16rem 1fr; }` from 1024px.", "`.product { display: flex; flex-direction: column; } .product .button { margin-top: auto; }`", "`grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr))` for products.", "A `.visually-hidden` utility using the clip technique."],
    checks: {
      functional: ["Give one product a much longer name: buttons in that row still line up.", "Click the sort select's label: the select gets focus."],
      responsive: ["At 1023px the filter panel sits above the grid; at 1024px it becomes a left column.", "At 360px no product card overflows."],
      accessibility: ["Inspect the brand checkboxes: they're inside a `<fieldset>` with a `<legend>`.", "Read the range input's surroundings: its label and its min/max values are visible text."]
    },
    commonMistakes: [
      { mistake: "Buttons at different heights in each card.", fix: "Make the card a flex column and push the button down with `margin-top: auto`." },
      { mistake: "Hiding the products heading with `display: none`.", fix: "Use a visually hidden class so screen readers still find it." },
      { mistake: "A range slider with no visible values.", fix: "Show min and max (and a sample current value) as text." }
    ]
  },
  30: {
    expectedHtml: ["Two radios (`#monthly` checked, `#yearly`) with labels, placed before `.plans`.", "Three plan `<article>`s, each with both monthly and yearly price elements.", "A \"Most popular\" badge written as text."],
    expectedCss: ["`.price--yearly { display: none; }` and `#yearly:checked ~ .plans .price--yearly { display: block; }`", "The matching rule hiding monthly prices when yearly is checked.", "`.plan--featured { transform: scale(1.05); }` inside a 1024px media query.", "Visually hidden radios with `input:focus-visible + label` styles."],
    checks: {
      functional: ["Click Yearly: all three prices change; click Monthly: they change back.", "Focus the switch and press the arrow keys: the selection moves between the two options."],
      responsive: ["At 360px the plans stack and the popular one is clearly labelled.", "At 1024px the scaled card doesn't overlap its neighbours or create a scrollbar."],
      accessibility: ["Tab to the switch: a visible focus ring appears on the label.", "Inspect the radios: they're hidden visually, not with `display: none`."]
    },
    commonMistakes: [
      { mistake: "Radios placed after the plans, so `~` can't reach them.", fix: "Put the radios before `.plans` in the HTML (or use `:has()` on a parent)." },
      { mistake: "`display: none` on the radios.", fix: "Hide them visually so they stay focusable." },
      { mistake: "Scaled card causing horizontal scroll on tablets.", fix: "Only scale from a wide breakpoint and leave margin around the card." }
    ]
  },
  31: {
    expectedHtml: ["Two `<fieldset>`s with legends.", "`<input type=\"file\" accept=\".pdf,.jpg,.png\">`, a `<select>`, radios and a consent checkbox.", "An error `<p id>` after each required field, referenced by `aria-describedby`."],
    expectedCss: ["`input[type=\"checkbox\"], input[type=\"radio\"], select { appearance: none; }` with rebuilt borders and checked states.", "`input::file-selector-button { … }` matching the other buttons.", "`.error { display: none; }` and `input:user-invalid ~ .error { display: block; }`", "A custom select arrow (background image or wrapper `::after`)."],
    checks: {
      functional: ["Focus the email field, type \"abc\" and leave it: its error appears; before that, nothing is red.", "Open the file picker: only the accepted file types are offered by default.", "Toggle the custom checkbox with Space: its tick appears and disappears."],
      responsive: ["At 360px all fields are full width.", "At 360px checkboxes and radios still have at least a 24px target."],
      accessibility: ["Focus a field with an error: DevTools shows the error text as its description.", "Open the form in a second browser: controls look and work the same."]
    },
    commonMistakes: [
      { mistake: "Checkbox becomes an empty, unclickable square after `appearance: none`.", fix: "Give it a size, border and a `:checked` style (tick via `::before` or background)." },
      { mistake: "Errors visible on page load because of `:invalid`.", fix: "Use `:user-invalid` so errors wait for interaction." },
      { mistake: "Error text placed before the input.", fix: "Sibling selectors only look forward — put the message after the input." }
    ]
  },
  32: {
    expectedHtml: ["Four `<fieldset id>`s: personal, experience, skills, documents.", "`type=\"url\"`, `type=\"number\" min max` and `type=\"month\"` inputs.", "A skills checkbox group with legend, a file input and a cover-letter textarea.", "A `<nav>` with links to each fieldset id."],
    expectedCss: ["`.fields { display: grid; grid-template-columns: repeat(2, 1fr); gap: … }`", "`.field--wide { grid-column: 1 / -1; }`", "`.form-nav { position: sticky; top: 1rem; }` from 1024px.", "A media query below 700px with one column."],
    checks: {
      functional: ["Type 99 into years of experience (max 50): the browser blocks it.", "Click each side-nav link: the matching fieldset scrolls into view."],
      responsive: ["At 699px the form is one column; at 700px it becomes two.", "Scroll at 1280px: the section nav stays visible beside the form."],
      accessibility: ["Tab through the form: focus moves in the same order you read it.", "Inspect the skills checkboxes: they're grouped by a `<legend>`."]
    },
    commonMistakes: [
      { mistake: "The sticky nav doesn't stick.", fix: "Remove `overflow: hidden` from ancestors and make sure the parent is taller than the nav." },
      { mistake: "Using `type=\"text\"` for everything.", fix: "Use url, number and month so devices show the right keyboard and validation." },
      { mistake: "Wide fields squeezed into one column.", fix: "Span them with `grid-column: 1 / -1`." }
    ]
  },
  33: {
    expectedHtml: ["A `<picture>` with `<source media=\"(min-width: 800px)\" srcset>`, a second source and a fallback `<img alt>`.", "Thumbnails with `srcset=\"… 480w, … 960w, … 1600w\"` and a matching `sizes`.", "`width`, `height` and `loading=\"lazy\"` on images below the first screen."],
    expectedCss: ["`.gallery { display: grid; grid-auto-flow: dense; }`", "`.gallery li:nth-child(4n) { grid-column: span 2; }` from a wider breakpoint.", "`img { max-width: 100%; height: auto; }`", "A consistent `aspect-ratio` on thumbnails."],
    checks: {
      functional: ["Resize across 800px and reload: the hero switches between the tall and wide crops.", "Watch the Network panel while scrolling: lower images load only when you approach them."],
      responsive: ["At 360px check an image's `currentSrc` in DevTools: it's the small file.", "At 360px spanning items fit in one column with no overflow."],
      accessibility: ["Inspect the hero: only the `<img>` has alt, and it describes the scene.", "Reload with a slow network: the page doesn't jump as images arrive."]
    },
    commonMistakes: [
      { mistake: "`sizes` left out, so the browser assumes 100vw and downloads big files.", fix: "Describe the real display width, e.g. `(min-width: 900px) 33vw, 100vw`." },
      { mistake: "Lazy-loading the hero image.", fix: "Only lazy-load images below the first screen." },
      { mistake: "Putting `alt` on `<source>` elements.", fix: "`alt` belongs only on the `<img>` inside `<picture>`." }
    ]
  },
  34: {
    expectedHtml: ["A hero `<section>` with `<h1>` and a labelled search `<form>`.", "A destinations `<ul>`, a how-it-works `<ol>` and a reviews section.", "A `<footer>` with three `<nav aria-label>` columns."],
    expectedCss: ["`.hero { min-height: 100vh; min-height: 100svh; }`", "`background: linear-gradient(…), url(…) center / cover;`", "`ol { counter-reset: step; } li::before { counter-increment: step; content: counter(step); }`", "`footer { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); }`"],
    checks: {
      functional: ["Inspect the step numbers: they come from `counter()`, not typed text.", "Click into each search field: each has its own label."],
      responsive: ["At 360px the search fields stack; at 1024px they sit in one row.", "Open the page in a phone-sized window: the hero fills the visible screen."],
      accessibility: ["Measure the headline over the darkest part of the photo: at least 4.5:1.", "Inspect the three footer navs: each has a different `aria-label`."]
    },
    commonMistakes: [
      { mistake: "Only `100vh`, so mobile address bars cut off the hero.", fix: "Add `100svh` after the `100vh` fallback." },
      { mistake: "Overlay gradient listed after the image, so it sits underneath.", fix: "The first background layer is drawn on top — list the gradient first." },
      { mistake: "Search fields without labels because they \"look obvious\".", fix: "Add labels, visually hidden if the design needs it." }
    ]
  },
  35: {
    expectedHtml: ["`<video autoplay muted playsinline poster=\"…\">` with a typed `<source>` and no `loop`.", "Hero heading and button above the video.", "Classes, trainers, membership and a join `<form>`."],
    expectedCss: ["`.hero { position: relative; } .hero video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1; }` (or equivalent stacking).", "An overlay layer between video and text.", "Bold uppercase display headings.", "`@media (prefers-reduced-motion: reduce) { .hero video { display: none; } }`"],
    checks: {
      functional: ["Rename the video file temporarily: the poster still fills the hero.", "Reload the page: the clip plays once, silently, and stops."],
      responsive: ["At 360px the hero text is readable over the video.", "Resize from 360px to 1280px: trainers go 1 → 2 → 4 columns."],
      accessibility: ["Turn on reduced motion: no moving video appears.", "Check the clip length: 5 seconds or less."]
    },
    commonMistakes: [
      { mistake: "Video doesn't autoplay.", fix: "Browsers require `muted` (and `playsinline` on iPhone) for autoplay." },
      { mistake: "A long looping background video with no way to pause.", fix: "Keep it short and play it once, or provide controls." },
      { mistake: "Hero text unreadable over bright frames.", fix: "Add a dark overlay between video and text." }
    ]
  },
  36: {
    expectedHtml: ["A sticky `<header>` nav linking to Curriculum, Instructor, Pricing, FAQ.", "`<video controls>` with `<track kind=\"captions\" srclang=\"en\" label=\"English\" src=\"….vtt\">`.", "A curriculum `<ol>` of six `<details>` modules with lesson lists."],
    expectedCss: ["`header { position: sticky; top: 0; background: …; z-index: … }`", "`.hero { display: grid; grid-template-columns: 7fr 5fr; }` on wide screens.", "Lesson rows with `display: flex; justify-content: space-between;`", "`section { scroll-margin-top: …; }`"],
    checks: {
      functional: ["Play the video and open the captions menu: English captions are available and show text.", "Open two modules: each opens independently."],
      responsive: ["At 360px the video sits below the hero text.", "At 360px the sticky header is a small strip, not a third of the screen."],
      accessibility: ["Click a header link: the section heading is visible below the sticky header.", "Read a lesson row: its duration is text like \"12 min\"."]
    },
    commonMistakes: [
      { mistake: "Captions file not shown because `kind` or `srclang` is missing.", fix: "Use `kind=\"captions\"`, `srclang` and a `label` on the `<track>`." },
      { mistake: "Jumped-to headings hidden under the sticky header.", fix: "Set `scroll-margin-top` to roughly the header height." },
      { mistake: "A transparent sticky header that text scrolls under.", fix: "Give it a solid background." }
    ]
  },
  37: {
    expectedHtml: ["Masthead `<header>` with `<h1>` and section `<nav>`.", "A lead `<article>`, grouped `<section>`s with `<h2>` and story `<article>`s with `<h3>`.", "A most-read `<ol>` and `<time>` on stories."],
    expectedCss: ["`grid-template-areas` naming `lead`, `secondary`, `opinion`, `mostread`.", "Different area maps at 768px and 1200px.", "Thin borders separating regions.", "A size hierarchy: lead > secondary > small stories."],
    checks: {
      functional: ["Click several headlines: each is a link.", "Delete a most-read item: the others renumber."],
      responsive: ["Compare 360px, 900px and 1300px: three distinct arrangements.", "At 360px no region overflows."],
      accessibility: ["Turn off CSS in DevTools: the stories still read in a logical order.", "Tab through the page: focus doesn't jump wildly around the screen."]
    },
    commonMistakes: [
      { mistake: "Area names forming an L-shape.", fix: "Each named area must be a rectangle." },
      { mistake: "Reordering the HTML to match one desktop layout.", fix: "Keep a sensible source order and move regions with areas." },
      { mistake: "All headlines the same size.", fix: "Build a clear size hierarchy for lead and secondary stories." }
    ]
  },
  38: {
    expectedHtml: ["`<aside>` sidebar with `<nav>`, a `<header>` top bar with a labelled search, and `<main>`.", "Four stat cards, a chart placeholder, an orders `<table>` with caption and an activity `<ol>`."],
    expectedCss: ["`.app { display: grid; grid-template-areas: \"side top\" \"side main\"; grid-template-columns: 16rem 1fr; grid-template-rows: auto 1fr; height: 100vh; height: 100dvh; }`", "`main { overflow: auto; min-height: 0; }`", "Status badges with colour and text.", "A media query below 900px returning to normal page flow."],
    checks: {
      functional: ["Scroll the main area at 1280px: the sidebar and top bar stay still.", "Read the orders table: it has a caption and column headers."],
      responsive: ["At 899px the sidebar becomes a top row of links and the page scrolls normally.", "At 360px the table scrolls inside its card."],
      accessibility: ["View in greyscale: Paid, Pending and Refunded are still distinguishable by text.", "Inspect the search input: it has a label."]
    },
    commonMistakes: [
      { mistake: "The whole page and the main area both scroll.", fix: "Give the shell a fixed height and only `main` `overflow: auto`." },
      { mistake: "Main area refuses to scroll and overflows instead.", fix: "Add `min-height: 0` to the grid child." },
      { mistake: "Status shown only by a coloured dot.", fix: "Always include the status word." }
    ]
  },
  39: {
    expectedHtml: ["`<nav id=\"menu\">` with three nested lists.", "An open link `href=\"#menu\"` and a close link inside the panel.", "One link with `aria-current=\"page\"`."],
    expectedCss: ["`#menu { position: fixed; inset: 0 auto 0 0; transform: translateX(-100%); visibility: hidden; transition: transform .25s, visibility .25s; }`", "`#menu:target { transform: none; visibility: visible; }`", "An overlay with a lower `z-index` than the panel.", "From 1024px: a static sidebar and hidden open/close links."],
    checks: {
      functional: ["Click Open menu: the panel slides in; click Close: it slides away.", "Press Enter on the open link with the keyboard: the panel opens."],
      responsive: ["At 1024px the sidebar shows permanently next to the content.", "At 360px with the menu closed, nothing causes sideways scrolling."],
      accessibility: ["With the menu closed, press Tab through the page: focus never disappears into the hidden panel.", "Inspect the current link: it has `aria-current=\"page\"`."]
    },
    commonMistakes: [
      { mistake: "Off-screen links still receive focus.", fix: "Add `visibility: hidden` to the closed panel." },
      { mistake: "The overlay sits above the panel and swallows clicks.", fix: "Give the panel a higher `z-index` than the overlay." },
      { mistake: "Animating `left` instead of `transform`.", fix: "Use `translateX()` for smoother movement." }
    ]
  },
  40: {
    expectedHtml: ["`<table>` with `<caption>` and a `<thead>` of four product `<th scope=\"col\">`.", "Three `<tbody>`s, each starting with a `<th colspan=\"5\" scope=\"rowgroup\">`.", "Feature names in `<th scope=\"row\">` and ✓/✗ with visually hidden text."],
    expectedCss: ["`.wrap { max-height: 70vh; overflow: auto; }`", "`thead th { position: sticky; top: 0; z-index: 2; background: …; }`", "`tbody th[scope=\"row\"] { position: sticky; left: 0; z-index: 1; background: …; }`", "The corner cell with the highest `z-index`; `border-collapse: separate; border-spacing: 0`."],
    checks: {
      functional: ["Scroll down inside the table: product names stay at the top.", "Scroll right: feature names stay on the left.", "Scroll diagonally: the top-left corner is never covered."],
      responsive: ["At 360px the page body doesn't scroll sideways, only the table.", "At 360px at least one product column is visible beside the feature names."],
      accessibility: ["Inspect a ✓ cell: it contains hidden text \"Included\".", "Inspect group header rows: they use `scope=\"rowgroup\"`."]
    },
    commonMistakes: [
      { mistake: "Sticky cells see-through, with text sliding underneath.", fix: "Give sticky cells a solid background." },
      { mistake: "Borders disappear on sticky cells.", fix: "Use `border-collapse: separate` with `border-spacing: 0`." },
      { mistake: "Ticks only as icons.", fix: "Add visually hidden \"Included\" / \"Not included\" text." }
    ]
  },
  41: {
    expectedHtml: ["`<section>` with `<h2>` and a `<ul>` of eight member cards.", "Each card: `<img>`, `<h3>`, role, bio and a social-links `<ul>` with unique link names."],
    expectedCss: ["`.details { opacity: 0; transform: translateY(1rem); transition: opacity .2s, transform .2s; }`", "`.card:hover .details, .card:focus-within .details { opacity: 1; transform: none; }`", "`@media (hover: none) { .details { opacity: 1; transform: none; } }`", "A grid of 1 / 2 / 4 columns."],
    checks: {
      functional: ["Tab to a card's first social link: the details panel appears.", "Hover a card with the mouse: the panel slides in smoothly."],
      responsive: ["Resize from 360px to 1200px: 1, 2 then 4 columns.", "Emulate a touch device in DevTools: details are always visible."],
      accessibility: ["Read a social link's name: it includes the person (\"Ana on LinkedIn\").", "Inspect hidden details: they use opacity, not `display: none`."]
    },
    commonMistakes: [
      { mistake: "Hiding details with `display: none` so keyboard users can't reach links.", fix: "Use opacity/transform so links stay focusable and reveal on focus." },
      { mistake: "Touch users never see the bio.", fix: "Show details permanently inside `@media (hover: none)`." },
      { mistake: "Every link named just \"LinkedIn\".", fix: "Add the person's name to each link's accessible text." }
    ]
  },
  42: {
    expectedHtml: ["A category `<nav>` linking to four `<section id>`s.", "`<details name=\"billing\">` (one shared name per category) with `<summary>` questions.", "A help-contact `<aside>`."],
    expectedCss: ["`details[open] > .answer { animation: reveal .3s ease; }` with `@keyframes reveal`.", "`@supports (interpolate-size: allow-keywords) { :root { interpolate-size: allow-keywords; } details::details-content { transition: … } }`", "`section:target { outline / border highlight }`", "`@media (prefers-reduced-motion: reduce)` removing the animations."],
    checks: {
      functional: ["Open one question, then another in the same category: the first closes.", "Click a category link: that section is visibly highlighted.", "Open the page in a browser without `interpolate-size`: answers still open, just without the height animation."],
      responsive: ["At 360px the category links scroll sideways in one row, but the page doesn't.", "At 900px the nav and questions sit in two columns."],
      accessibility: ["Turn on reduced motion: answers appear instantly.", "Check the highlighted category in greyscale: it's still marked by a border or label."]
    },
    commonMistakes: [
      { mistake: "Same `name` on every details in the page, so categories close each other.", fix: "Use one shared name per category." },
      { mistake: "Relying on a height animation that only works in one browser.", fix: "Wrap it in `@supports` and keep a working default." },
      { mistake: "Target highlight using colour only.", fix: "Add a border, icon or text label." }
    ]
  },
  43: {
    expectedHtml: ["`<section aria-label=\"Testimonials\">` with a `<ul tabindex=\"0\">` track.", "Five `<li id>` slides containing `<blockquote>` and a name.", "A `<nav>` of dot links `href=\"#slide-1\"` … with hidden labels."],
    expectedCss: ["`.track { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: … }`", "`.slide { flex: 0 0 85%; scroll-snap-align: center; }` and 45% on desktop.", "`.track { scroll-behavior: smooth; }` with a reduced-motion override.", "A visible focus style on the track and dots."],
    checks: {
      functional: ["Scroll the carousel and let go: it settles exactly on a slide.", "Click dot 4: slide 4 is centred."],
      responsive: ["At 360px you see one slide and the edge of the next.", "At 360px the page itself never scrolls sideways."],
      accessibility: ["Tab to the track and press the right arrow: it scrolls.", "Inspect a dot: its accessible name is like \"Show testimonial 3\"."]
    },
    commonMistakes: [
      { mistake: "Snap settings all on the slides.", fix: "`scroll-snap-type` goes on the container, `scroll-snap-align` on the slides." },
      { mistake: "Slides at 100% width hide the fact there's more content.", fix: "Show a peek of the next slide." },
      { mistake: "A scroll region keyboard users can't focus.", fix: "Add `tabindex=\"0\"` and a label to the track." }
    ]
  },
  44: {
    expectedHtml: ["Hero with `<time datetime>` start and end dates.", "Speakers `<ul>`, two schedule `<section id=\"day-1\">`/`\"day-2\"`, each with an `<h3>` and sessions using `<time>`.", "Day links pointing at the section ids."],
    expectedCss: ["`.timeline { position: relative; } .timeline::before { content: \"\"; position: absolute; left: …; top: 0; bottom: 0; width: 2px; }`", "`.session::after` dots positioned on the line.", "`.day { display: none; } .day:target { display: block; }` and `.schedule:not(:has(:target)) #day-1 { display: block; }`", "Speaker grid with `repeat(auto-fit, minmax(14rem, 1fr))`."],
    checks: {
      functional: ["Open the page with no `#` in the address: Day 1 is visible.", "Click Day 2: only Day 2 shows; click Day 1: it switches back."],
      responsive: ["At 360px the timeline line runs down the left edge with dots aligned.", "At 768px session times sit in their own column."],
      accessibility: ["Inspect the hidden day: it's `display: none` (not just faded).", "Inspect a session time: `datetime` holds the exact time."]
    },
    commonMistakes: [
      { mistake: "Nothing shows until a day link is clicked.", fix: "Use `:not(:has(:target))` to show a default day." },
      { mistake: "Dots drift away from the line on narrow screens.", fix: "Position line and dots from the same left value." },
      { mistake: "Times written as plain text.", fix: "Wrap them in `<time datetime=\"2026-05-12T09:30\">`." }
    ]
  },
  45: {
    expectedHtml: ["A search `<form>` with labelled check-in/out `type=\"date\"` inputs (with `min`) and guests `type=\"number\"`.", "Filter chips: `<label class=\"chip\"><input type=\"checkbox\"> Breakfast</label>`.", "Four room `<article>`s and an `<aside>` with a booking `<dl>`."],
    expectedCss: ["`.chip:has(input:checked) { background: …; border-color: …; }`", "`.booking { display: grid; grid-template-columns: 1fr 20rem; }` from 1024px.", "`.summary { position: sticky; top: 1rem; }`", "Date inputs with matching font, padding and border."],
    checks: {
      functional: ["Tab to a chip and press Space: its selected style toggles.", "Try picking a check-out date before your `min`: the picker won't allow it."],
      responsive: ["At 1023px the summary moves below the rooms.", "At 599px the search fields stack."],
      accessibility: ["Check a chip in DevTools' accessibility pane: it's announced as a checkbox with a checked state.", "Read the summary: each value has a label from `<dt>`."]
    },
    commonMistakes: [
      { mistake: "Chips made from `<span>`s that can't be toggled by keyboard.", fix: "Use real checkboxes inside labels." },
      { mistake: "Sticky summary not sticking.", fix: "Make sure its grid column is taller than the summary and no ancestor clips overflow." },
      { mistake: "Fighting every pixel of the native date picker.", fix: "Style the field box and accept small browser differences." }
    ]
  },
  46: {
    expectedHtml: ["Header with nav and CTA, hero with screenshot, logo-strip `<ul>` with company-name alts.", "Three feature rows, pricing, testimonials, final CTA and footer — each a `<section class=\"section\">`."],
    expectedCss: ["A `:root` token sheet (6 colours, 5 sizes, 3 radii, 6 spaces).", "`.section { padding-block: var(--space-7); } .container { max-width: …; margin-inline: auto; }`", "`.feature-row:nth-of-type(even) { flex-direction: row-reverse; }` on desktop.", "`.button` and `.button--secondary` used everywhere."],
    checks: {
      functional: ["Change `--color-accent`: every accent across the page changes.", "Search the CSS for `#` hex colours outside `:root`: none remain."],
      responsive: ["At 899px every feature row shows image above text, including reversed rows.", "At 360px nothing scrolls sideways."],
      accessibility: ["Turn off CSS: feature rows still read text → image in a sensible order.", "Inspect the logos: each alt is the company name."]
    },
    commonMistakes: [
      { mistake: "Reversing rows by swapping HTML order.", fix: "Keep the source order and use `row-reverse` for visual order." },
      { mistake: "Hard-coded colours slipping into components.", fix: "Audit for hex values and replace them with tokens." },
      { mistake: "Each section with its own padding.", fix: "Use one `.section` class for consistent rhythm." }
    ]
  },
  47: {
    expectedHtml: ["Three `<fieldset>`s with legends numbered by CSS.", "`<select>` party size, `<input type=\"date\" min>`.", "Twelve time-slot radios with labels, three `disabled`, plus a seating radio group and contact fields."],
    expectedCss: ["`.slots { display: grid; grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr)); gap: … }`", "`.slots input:checked + label { background: …; color: …; }`", "`.slots input:disabled + label { text-decoration: line-through; opacity: .6; cursor: not-allowed; }`", "`form { counter-reset: step; } legend::before { counter-increment: step; content: counter(step) \". \"; }`"],
    checks: {
      functional: ["Click a fully booked slot: nothing happens.", "Pick 19:00 then 19:30: only the last one stays selected."],
      responsive: ["Resize from 360px to 1280px: slots go from about 3 to 6 per row.", "Measure a slot: at least 44px tall."],
      accessibility: ["Read a disabled slot's label: it includes \"fully booked\".", "Tab into the slot group: the legend is announced first."]
    },
    commonMistakes: [
      { mistake: "Each slot with a different `name`.", fix: "All slots share one name so only one can be chosen." },
      { mistake: "Unavailable shown only by grey colour.", fix: "Add text (\"fully booked\") and a strikethrough." },
      { mistake: "Styling the input itself instead of its label.", fix: "Hide the radio visually and style `input + label`." }
    ]
  },
  48: {
    expectedHtml: ["Hero with album cover and Listen now link.", "A track `<ol>`; each item has `<audio controls preload=\"none\">` with MP3 and OGG `<source>`s.", "A tour `<table>` with caption and `data-label` on cells, plus `<video controls>` with `<track>`."],
    expectedCss: ["`background-blend-mode` or `mix-blend-mode` tinting the hero.", "`@media (max-width: 600px) { table, tr, td { display: block; } td::before { content: attr(data-label); } }`", "Uppercase display headings with `letter-spacing`.", "A styled container around each audio player."],
    checks: {
      functional: ["Open the Network panel and load the page: audio files don't download until you press play.", "Read the ticket links: each names its city or date."],
      responsive: ["At 599px each tour row becomes a card with visible labels.", "At 360px the merch strip and audio players fit without sideways scrolling."],
      accessibility: ["Play the video with captions on: text appears.", "On mobile, every value in the tour cards has its label beside it."]
    },
    commonMistakes: [
      { mistake: "Every track downloads on page load.", fix: "Add `preload=\"none\"` to the audio elements." },
      { mistake: "Mobile table cards with no labels.", fix: "Show `data-label` text with `::before`." },
      { mistake: "Trying to restyle native audio controls.", fix: "Style the box around them instead." }
    ]
  },
  49: {
    expectedHtml: ["A `<ul id=\"gallery\">` of 12 thumbnail links to `#photo-N`.", "A lightbox `<div id=\"photo-N\" class=\"lightbox\">` per photo with a close link first, the large image and prev/next links.", "An about `<section>` with a portrait."],
    expectedCss: ["`.gallery { columns: 18rem 3; column-gap: 1rem; } .gallery li { break-inside: avoid; }`", "`.lightbox { display: none; position: fixed; inset: 0; z-index: 50; } .lightbox:target { display: grid; place-items: center; }`", "`.lightbox img { max-height: 90vh; object-fit: contain; }`", "`img { filter: grayscale(.3); } a:hover img, a:focus img { filter: none; }`"],
    checks: {
      functional: ["Click thumbnail 5: photo 5 fills the screen; click Close: you're back at the gallery.", "Click next inside a lightbox: the following photo opens."],
      responsive: ["Resize from 360px to 1200px: 1, 2 then 3 columns.", "Open a tall photo at 360px: it fits inside the screen."],
      accessibility: ["Open a lightbox and press Tab: the Close link is focused first.", "Read the thumbnails' alt texts: each describes its photo."]
    },
    commonMistakes: [
      { mistake: "Photos split across two columns.", fix: "Add `break-inside: avoid` to gallery items." },
      { mistake: "Close link goes to `#`, jumping to the top of the page.", fix: "Link back to the gallery's id." },
      { mistake: "Large photos taller than the screen.", fix: "Limit them with `max-height: 90vh` and `object-fit: contain`." }
    ]
  },
  50: {
    expectedHtml: ["Four pages sharing header, nav (with `aria-current`), footer and skip link.", "Unique `<title>`, meta description and `<h1>` on each page.", "Services grid, team section, contact `<form>` and `<address>`."],
    expectedCss: ["File order: tokens → base → layout utilities → components → page rules.", "`.container`, `.stack` and `.grid` utilities.", "Media queries only at the two agreed `em` breakpoints.", "Button, card and form-field components used on every page."],
    checks: {
      functional: ["Click through all four pages from each page: every nav link works.", "Submit the contact form empty: required fields stop it."],
      responsive: ["Search your CSS for `@media`: only two breakpoint values appear.", "Open each page at 320px and 1920px: no sideways scroll."],
      accessibility: ["On each page press Tab once: a skip link appears.", "Check body text contrast on every page: at least 4.5:1."]
    },
    commonMistakes: [
      { mistake: "A new breakpoint for every page.", fix: "Agree two breakpoints and reuse them." },
      { mistake: "Page-specific CSS copying component rules.", fix: "Move repeated rules into the shared components section." },
      { mistake: "Forgetting to update `aria-current` on copied headers.", fix: "Check the current link on every page." }
    ]
  }
});
