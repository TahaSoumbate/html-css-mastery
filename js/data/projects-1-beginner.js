/*
 * projects-1-beginner.js — Level 1: Beginner (projects 1–25)
 * ----------------------------------------------------------
 * Focus: HTML structure, basic styling, selectors, typography, spacing and the box model.
 *
 * Every project uses the same fields (see README.md, "Editing project definitions"):
 *   id, number, title, difficulty, complexity (1–3 within the level),
 *   shortDescription, objective, skills, topics (ids from topics.js),
 *   estimatedMinutes, requiredHtml, requiredCss, steps (3–5),
 *   functionalRequirements, responsiveRequirements, accessibilityRequirements, hints.
 * Text inside `backticks` is shown as code.
 * Corrections live in corrections-1-beginner.js; model solutions in js/data/solutions/.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.projects = (HCM.data.projects || []).concat([
  {
    id: "p001-personal-profile-card",
    number: 1,
    title: "Personal Profile Card",
    difficulty: "beginner",
    complexity: 1,
    shortDescription: "A single centred card with a round photo, your name, a short bio and three links.",
    objective: "Practise the box model by building one self-contained card whose size, spacing and border you control precisely.",
    skills: ["Box model and box-sizing", "Centring a block with auto margins", "Round images with border-radius", "Styling a list of links"],
    topics: ["html-document-structure", "html-images-alt", "html-lists", "css-syntax", "css-box-model", "css-borders-outlines", "css-inheritance"],
    estimatedMinutes: 45,
    requiredHtml: ["`<main>`", "`<article>`", "`<img>`", "`<h1>`", "`<p>`", "`<ul>`", "`<a>`"],
    requiredCss: ["`box-sizing: border-box`", "`max-width` + `margin: auto` centring", "`border-radius: 50%` on the photo", "`padding` and `border` on the card", "font settings set once on `body`"],
    steps: [
      "Create a folder `001-personal-profile-card` with `index.html` and `styles.css`, write the HTML5 boilerplate and link the stylesheet.",
      "Inside `<main>`, build an `<article>` containing an `<img>` with alt text, an `<h1>` with your name, a 2–3 sentence `<p>` bio and a `<ul>` of three links.",
      "Set `font-family`, `line-height` and `color` once on `body` and let the card inherit them.",
      "Give the card `max-width: 22rem`, `margin: 3rem auto`, `padding: 2rem`, a 1px border and a 1rem radius; make the photo 120px square and round.",
      "Centre the text and give the links a `:hover` colour change and a visible `:focus-visible` outline."
    ],
    functionalRequirements: ["All three links have real `href` values (use `#` only as a temporary placeholder).", "The photo keeps its proportions and is never stretched."],
    responsiveRequirements: ["At 360px wide the card fits with visible space on both sides.", "No horizontal scroll at any width."],
    accessibilityRequirements: ["The `<img>` has alt text that describes the person, not the word \"image\".", "Link text names the destination (\"GitHub\"), never \"click here\"."],
    hints: [
      "If the card ends up wider than you expect, check whether padding is being added on top of the width.",
      "A square image becomes a circle with a single property — but only if its width and height match.",
      "Fonts set on `body` flow down to every child unless something overrides them."
    ]
  },
  {
    id: "p002-simple-business-card",
    number: 2,
    title: "Simple Business Card",
    difficulty: "beginner",
    complexity: 1,
    shortDescription: "A card-shaped design with a name and job title on one side and contact details on the other, split by a divider.",
    objective: "Control an element's exact proportions and place small pieces of text inside it with padding and simple Flexbox.",
    skills: ["`aspect-ratio` for fixed proportions", "Two-column split with Flexbox", "Contact links with `tel:` and `mailto:`", "Letter-spacing and text-transform"],
    topics: ["html-links-navigation", "html-semantic", "css-sizing", "css-flexbox", "css-typography", "css-colors-backgrounds"],
    estimatedMinutes: 45,
    requiredHtml: ["`<article>`", "`<h1>`", "`<p>`", "`<address>`", "`<a href=\"mailto:…\">`", "`<a href=\"tel:…\">`"],
    requiredCss: ["`aspect-ratio: 85 / 55`", "`display: flex` with `justify-content: space-between`", "a 2px divider between the two blocks", "`text-transform: uppercase` with `letter-spacing`"],
    steps: [
      "Mark up an `<article class=\"business-card\">` with a left block (your name in `<h1>`, job title in `<p>`) and a right block wrapped in `<address>`.",
      "Inside `<address>`, add a `mailto:` link, a `tel:` link and a city line.",
      "Size the card with `width: min(100%, 26rem)` and `aspect-ratio: 85 / 55`, then centre it on the page.",
      "Turn the card into a flex row with the two blocks pushed apart and a 2px vertical divider between them.",
      "Style the job title in uppercase with `letter-spacing: 0.08em` and give the card a subtle background colour."
    ],
    functionalRequirements: ["Clicking the email address opens a new message; the phone link starts a call on a phone.", "The card keeps its 85 × 55 proportion as the window resizes."],
    responsiveRequirements: ["Below 400px the two blocks stack vertically instead of squeezing together.", "No text overflows the card's edge at 360px."],
    accessibilityRequirements: ["Contact details live inside an `<address>` element.", "Text and background colours have at least 4.5:1 contrast."],
    hints: [
      "`aspect-ratio` only works when one dimension is left automatic.",
      "Stacking the blocks on narrow screens can be one `flex-direction` change inside a media query.",
      "A phone link's `href` starts with `tel:` and should use the full international number."
    ]
  },
  {
    id: "p003-personal-biography-page",
    number: 3,
    title: "Personal Biography Page",
    difficulty: "beginner",
    complexity: 1,
    shortDescription: "A long-form \"about me\" page with a proper heading outline, a pull quote and a dated timeline.",
    objective: "Write a complete HTML document with correct metadata and a logical heading hierarchy, then make long text comfortable to read.",
    skills: ["Heading hierarchy h1–h3", "Readable line length with `ch` units", "Metadata in `<head>`", "Styling `<blockquote>`"],
    topics: ["html-document-structure", "html-metadata", "html-headings-paragraphs", "html-semantic", "css-typography", "css-inheritance"],
    estimatedMinutes: 60,
    requiredHtml: ["`<!DOCTYPE html>` and `<html lang>`", "`<meta name=\"description\">`", "`<header>` and `<main>`", "`<h1>`, `<h2>`, `<h3>`", "`<blockquote>` with `<cite>`", "`<ol>`"],
    requiredCss: ["`max-width: 65ch` on the text column", "`line-height` between 1.5 and 1.7", "a heading scale in `rem`", "a `<blockquote>` with a left border"],
    steps: [
      "Write the full boilerplate: `lang` on `<html>`, charset, viewport, a specific `<title>` and a `<meta name=\"description\">`.",
      "Add a `<header>` with your name as the only `<h1>`, then a `<main>` with at least three `<h2>` sections (e.g. Early years, Education, Today).",
      "In one section add an `<h3>` subsection and a `<blockquote>` with a `<cite>`; in another add an `<ol>` timeline of 4+ dated events.",
      "Set the body text to `1.125rem` with `line-height: 1.6` and limit the text column to `65ch`, centred.",
      "Create a heading scale (e.g. 2.5rem / 1.75rem / 1.25rem) and style the quote with a left border and italic text."
    ],
    functionalRequirements: ["The browser tab shows your specific page title.", "The timeline is an ordered list in date order."],
    responsiveRequirements: ["Text has at least 1rem of side padding at 360px.", "Lines never run longer than roughly 75 characters on wide screens."],
    accessibilityRequirements: ["Headings never skip a level (no `<h2>` followed directly by an `<h4>`).", "There is exactly one `<h1>` on the page."],
    hints: [
      "The `ch` unit is roughly the width of the \"0\" character in the current font.",
      "Browser developer tools can show the page's heading outline — use it to check your structure.",
      "A quotation's source belongs in `<cite>`, not just in plain text after it."
    ]
  },
  {
    id: "p004-recipe-page",
    number: 4,
    title: "Recipe Page",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A recipe with a captioned photo, prep facts, an ingredients list with quantities and numbered method steps.",
    objective: "Choose the right list type for each kind of content and style list markers without losing their meaning.",
    skills: ["Unordered vs ordered lists", "Styling `::marker`", "`<figure>` with `<figcaption>`", "Description lists for facts"],
    topics: ["html-lists", "html-images-alt", "html-semantic", "css-pseudo-elements", "css-typography", "css-spacing"],
    estimatedMinutes: 60,
    requiredHtml: ["`<article>`", "`<figure>` + `<figcaption>`", "`<ul>` for ingredients", "`<ol>` for the method", "`<dl>` for prep/cook/serves", "`<time datetime>`"],
    requiredCss: ["`::marker` colour and weight", "spacing between list items", "`max-width: 100%` and `height: auto` on the image", "a two-column ingredients/method layout from 768px"],
    steps: [
      "Build an `<article>` with the dish name in `<h1>`, an intro paragraph and a `<figure>` photo with a `<figcaption>`.",
      "Add a `<dl>` with Prep, Cook and Serves, wrapping the times in `<time datetime=\"PT20M\">`.",
      "List at least 8 ingredients in a `<ul>` and at least 5 method steps in an `<ol>`, each list under its own `<h2>`.",
      "Colour the list markers with `::marker` and add 0.5rem of space between list items.",
      "From 768px, place ingredients and method side by side, with ingredients in the narrower column."
    ],
    functionalRequirements: ["Method steps are numbered by the browser, not typed by hand.", "The photo never overflows its container."],
    responsiveRequirements: ["Below 768px the ingredients appear above the method in one column.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["The image alt text describes the finished dish.", "\"Ingredients\" and \"Method\" are real `<h2>` headings."],
    hints: [
      "If you are typing \"1.\" yourself, you've picked the wrong list element.",
      "`::marker` accepts only a few properties — colour, font and content are the useful ones.",
      "Uneven columns are one line with Grid: try a `1fr 2fr` track list."
    ]
  },
  {
    id: "p005-favorite-movies-list",
    number: 5,
    title: "Favorite Movies List",
    difficulty: "beginner",
    complexity: 1,
    shortDescription: "A ranked top-10 list of films with year, director and a one-line review for each.",
    objective: "Use selectors precisely — descendant, child and `:nth-child()` — to style a repeated list without a class on every item.",
    skills: ["Ordered lists for rankings", "`:nth-child()` and `:first-child`", "Descendant and child combinators", "Zebra striping"],
    topics: ["html-lists", "html-headings-paragraphs", "css-selectors", "css-pseudo-classes", "css-colors-backgrounds", "css-syntax"],
    estimatedMinutes: 45,
    requiredHtml: ["`<ol>`", "`<li>`", "`<h2>` (or `<strong>`) for each title", "`<p>` for the review", "`<span>` for year and director"],
    requiredCss: ["`:nth-child(even)` striping", "`:first-child` highlight for number one", "a child combinator (`>`)", "no more than 3 class names in the whole stylesheet"],
    steps: [
      "Create an `<ol class=\"movie-list\">` with 10 items; each has a title, year, director and a one-line review.",
      "Stripe every even row with a light background using `:nth-child(even)`.",
      "Make the first film stand out (bigger title, accent border) with `:first-child`.",
      "Style the year and director as smaller, muted text using descendant selectors rather than new classes.",
      "Add a hover background on rows, then count your class names — no more than three."
    ],
    functionalRequirements: ["Rank numbers 1–10 come from the `<ol>`, not typed text.", "Adding an 11th item gets the right striping without new CSS."],
    responsiveRequirements: ["At 360px each row wraps cleanly with no overflow.", "Rows keep at least 0.75rem of vertical padding at every width."],
    accessibilityRequirements: ["Muted text still has 4.5:1 contrast against the striped background.", "The first item stands out by more than colour alone (size or border)."],
    hints: [
      "`:nth-child(even)` and `:nth-child(2n)` select the same items.",
      "Read your selector from right to left: which element is styled, and where must it be?",
      "The `>` combinator stops styles reaching lists nested inside items."
    ]
  },
  {
    id: "p006-daily-schedule-table",
    number: 6,
    title: "Daily Schedule Table",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A weekly timetable with time slots down the side and weekdays across the top.",
    objective: "Build an accessible data table with a caption, header cells and `scope`, styled to stay readable on small screens.",
    skills: ["`<table>`, `<thead>` and `<tbody>`", "`scope` on header cells", "`colspan` for long activities", "A scrollable table wrapper"],
    topics: ["html-tables", "html-accessibility", "css-borders-outlines", "css-overflow", "css-selectors"],
    estimatedMinutes: 60,
    requiredHtml: ["`<table>`", "`<caption>`", "`<thead>` and `<tbody>`", "`<th scope=\"col\">` and `<th scope=\"row\">`", "`colspan` on at least one cell"],
    requiredCss: ["`border-collapse: collapse`", "alternating row colours with `:nth-child`", "consistent cell padding and `text-align`", "`overflow-x: auto` on a wrapper"],
    steps: [
      "Create a table with a `<caption>` (\"My week\"), a header row for Monday to Friday and at least 6 time-slot rows.",
      "Mark the day headers with `scope=\"col\"` and the time headers with `scope=\"row\"`.",
      "Make one activity span two days with `colspan=\"2\"`.",
      "Collapse the borders, give cells `0.5rem 0.75rem` padding, stripe the body rows and left-align the text.",
      "Wrap the table in a `<div>` with `overflow-x: auto` so it scrolls inside itself on narrow screens."
    ],
    functionalRequirements: ["Every cell lines up under the correct day, including the spanned one.", "The caption is visible above the table."],
    responsiveRequirements: ["At 360px the page itself never scrolls sideways — only the table wrapper does.", "Cell text never wraps into single letters (give the table a sensible `min-width`)."],
    accessibilityRequirements: ["Every `<th>` has the correct `scope`.", "The `<caption>` describes what the table contains."],
    hints: [
      "Tables size themselves from their content; a `min-width` plus a scrolling wrapper beats squashing columns.",
      "After adding `colspan`, count the cells in each row — every row should add up to the same number.",
      "Screen readers use the `<caption>` as the table's name."
    ]
  },
  {
    id: "p007-simple-restaurant-menu",
    number: 7,
    title: "Simple Restaurant Menu",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A one-page menu with starters, mains and desserts, each dish showing a name, description and a right-aligned price.",
    objective: "Use Flexbox to align a dish name and price on one line with a dotted leader between them.",
    skills: ["Grouping content into sections", "Flexbox alignment and `gap`", "Dotted leaders with a growing spacer", "Tabular numbers for prices"],
    topics: ["html-semantic", "html-lists", "css-flexbox", "css-typography", "css-borders-outlines"],
    estimatedMinutes: 60,
    requiredHtml: ["`<header>`", "a `<section>` per course with an `<h2>`", "`<ul>` of dishes", "`<data value>` for prices"],
    requiredCss: ["`display: flex` on each name–price line", "a spacer with `flex: 1` and a dotted bottom border", "`font-variant-numeric: tabular-nums`", "a serif system font stack for headings"],
    steps: [
      "Add a `<header>` with the restaurant name and opening hours, then three `<section>`s: Starters, Mains and Desserts.",
      "In each section list at least 4 dishes, each with a name, a price in `<data value=\"12.50\">` and a one-line description below.",
      "Make each name–price line a flex row and put an empty `<span class=\"leader\">` between them that grows and shows a dotted bottom border.",
      "Use `font-variant-numeric: tabular-nums` so prices line up, and style course headings with `Georgia, \"Times New Roman\", serif`.",
      "Centre the menu at `max-width: 40rem` with generous space between sections."
    ],
    functionalRequirements: ["All prices line up on the right edge.", "Descriptions sit under their dish name, not beside the price."],
    responsiveRequirements: ["At 360px long dish names wrap without pushing the price off-screen.", "The leader shrinks gracefully when space is tight."],
    accessibilityRequirements: ["Courses are real `<h2>` headings in order.", "The decorative leader contains no text a screen reader would read."],
    hints: [
      "A flex item with `flex: 1` takes all the space that is left over.",
      "`align-items: baseline` makes the dots sit on the text line.",
      "Add `min-width: 0` to let a long name wrap inside a flex row."
    ]
  },
  {
    id: "p008-contact-information-page",
    number: 8,
    title: "Contact Information Page",
    difficulty: "beginner",
    complexity: 1,
    shortDescription: "A page listing an address, phone numbers, email, opening hours and a map placeholder.",
    objective: "Mark up contact details semantically and turn a description list into a tidy two-column layout.",
    skills: ["`<address>` for contact info", "`<dl>` for label/value pairs", "Grid for label/value columns", "`tel:` and `mailto:` links"],
    topics: ["html-semantic", "html-links-navigation", "html-lists", "css-grid", "css-spacing"],
    estimatedMinutes: 45,
    requiredHtml: ["`<address>`", "`<dl>`, `<dt>`, `<dd>`", "`<a href=\"tel:…\">`", "`<a href=\"mailto:…\">`", "`<h2>` per section"],
    requiredCss: ["`display: grid` with two columns on the `<dl>`", "bold `<dt>` labels", "consistent vertical rhythm", "a dashed placeholder box with `aspect-ratio: 16 / 9`"],
    steps: [
      "Create three sections — \"Visit us\", \"Call or email\" and \"Opening hours\" — each with an `<h2>`.",
      "Put the postal address inside `<address>`, one line per part (`<br>` is fine inside addresses).",
      "List phone, email and social handles as a `<dl>` with clickable `tel:` and `mailto:` links.",
      "Turn the `<dl>` into a grid with `grid-template-columns: max-content 1fr` and a `0.5rem 1.5rem` gap.",
      "Add a map placeholder: a `<div>` with `aspect-ratio: 16 / 9`, a dashed border and the word \"Map\" centred."
    ],
    functionalRequirements: ["Phone and email links work.", "Opening hours cover all seven days."],
    responsiveRequirements: ["Below 480px the `<dl>` becomes one column with each label above its value.", "The map placeholder scales with the screen width."],
    accessibilityRequirements: ["Link text shows the actual phone number or email address.", "Abbreviated days use `<abbr title=\"Monday\">Mon</abbr>` or are written in full."],
    hints: [
      "`max-content` makes a column exactly as wide as its longest label.",
      "`<br>` is acceptable in addresses and poems — that's what it's for.",
      "Changing one `grid-template-columns` value in a media query gives you the narrow layout."
    ]
  },
  {
    id: "p009-personal-blog-article",
    number: 9,
    title: "Personal Blog Article",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A single blog post with a title, byline, publish date, body text, an inline image and a code snippet.",
    objective: "Structure a real article with semantic elements and build a typographic system that keeps long text pleasant to read.",
    skills: ["`<article>` with its own `<header>` and `<footer>`", "`<time datetime>`", "Styling `<code>` and `<pre>`", "Vertical rhythm"],
    topics: ["html-semantic", "html-headings-paragraphs", "html-images-alt", "css-typography", "css-inheritance", "css-overflow"],
    estimatedMinutes: 75,
    requiredHtml: ["`<article>`", "`<header>` with `<h1>` and byline", "`<time datetime>`", "`<figure>`", "`<pre><code>`", "`<footer>` with tag links"],
    requiredCss: ["a monospace font stack for code", "`overflow-x: auto` on `<pre>`", "`margin-block` rhythm between elements", "inline `<code>` with a tinted background"],
    steps: [
      "Write an `<article>` whose `<header>` holds the `<h1>`, the author's name and a `<time datetime=\"2026-03-14\">` date.",
      "Add 5+ paragraphs with at least two `<h2>` subheadings, one `<figure>` image and one `<pre><code>` snippet.",
      "End the article with a `<footer>` listing three tags as links.",
      "Use `1.125rem` body text, `line-height: 1.7` and a column of about `68ch`; space elements with `margin-block`.",
      "Give inline `<code>` a tinted background and `<pre>` padding plus horizontal scrolling."
    ],
    functionalRequirements: ["The date is machine-readable through `datetime`.", "Long code lines scroll inside the code block instead of widening the page."],
    responsiveRequirements: ["The article has comfortable side padding at 360px.", "The figure image scales down without distortion."],
    accessibilityRequirements: ["The article has one `<h1>` and `<h2>` subheadings.", "Code text keeps 4.5:1 contrast on its tinted background."],
    hints: [
      "`<pre>` keeps every space and line break, so long lines push the page wider unless you contain them.",
      "Adding space on one side only (e.g. `margin-block-start`) avoids collapsing-margin surprises.",
      "Byline and date belong in the article's own `<header>`, not the page header."
    ]
  },
  {
    id: "p010-product-information-card",
    number: 10,
    title: "Product Information Card",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A shop product card with image, sale badge, name, rating, old and new price and an Add to cart button.",
    objective: "Layer a sale badge over an image with positioning and keep the card's internal spacing consistent.",
    skills: ["`position: relative` / `absolute` badges", "`object-fit: cover`", "`<del>` and `<ins>` for prices", "Button states"],
    topics: ["html-images-alt", "html-buttons", "css-positioning", "css-box-model", "css-pseudo-classes", "css-shadows"],
    estimatedMinutes: 60,
    requiredHtml: ["`<article>`", "`<img>`", "`<h2>`", "`<p>` for the rating text", "`<del>` and `<ins>`", "`<button type=\"button\">`"],
    requiredCss: ["`position: relative` on the image wrapper", "`position: absolute` on the badge", "`object-fit: cover` with a fixed `aspect-ratio`", "`box-shadow` on hover", "`:hover`, `:focus-visible` and `:active` button styles"],
    steps: [
      "Mark up an `<article>` with an image wrapper, a \"−20%\" badge, the product name, a rating line and the prices.",
      "Show the old price in `<del>` and the new price in `<ins>`, then remove the default underline from `<ins>`.",
      "Place the badge in the image's top-left corner with relative/absolute positioning.",
      "Give the image `aspect-ratio: 4 / 3` and `object-fit: cover` so any photo fills the frame without stretching.",
      "Style the button with distinct hover, focus-visible and active states, and lift the card with a shadow on hover."
    ],
    functionalRequirements: ["The badge stays in the corner when the card width changes.", "A tall photo still fills the frame without distortion."],
    responsiveRequirements: ["The card is full width below 400px and at most 20rem wide above that.", "The button is at least 44px tall."],
    accessibilityRequirements: ["The rating is written as text (\"Rated 4.5 out of 5\"), not shown as stars alone.", "Old and new prices differ by more than colour (line-through on the old one)."],
    hints: [
      "An absolutely positioned element is placed relative to its nearest positioned ancestor.",
      "`object-fit` needs the image to have a set width and height (or an aspect-ratio).",
      "Screen readers may not announce `<del>`; a visually hidden \"Was\" before the old price helps."
    ]
  },
  {
    id: "p011-basic-navigation-bar",
    number: 11,
    title: "Basic Navigation Bar",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A site header with a logo on the left and five navigation links on the right, including a current-page state.",
    objective: "Build a horizontal navigation with Flexbox and mark the current page so both sighted and screen-reader users notice.",
    skills: ["`<nav>` with a list of links", "Flexbox alignment and `gap`", "`aria-current=\"page\"`", "Specificity of link states"],
    topics: ["html-links-navigation", "html-lists", "css-flexbox", "css-display", "css-pseudo-classes", "css-specificity"],
    estimatedMinutes: 60,
    requiredHtml: ["`<header>`", "`<nav aria-label=\"Main\">`", "`<ul>` of links", "`<a aria-current=\"page\">`", "a logo link to the home page"],
    requiredCss: ["`display: flex` with `justify-content: space-between`", "`gap` between links", "`list-style: none` and zero padding on the list", "an `[aria-current=\"page\"]` selector", "link states in LVHA order"],
    steps: [
      "Create a `<header>` with a logo link and a `<nav aria-label=\"Main\">` containing a `<ul>` of five links.",
      "Remove the list's bullets and padding, then lay the header out with Flexbox: logo left, links right, vertically centred.",
      "Space the links with `gap` and give each link padding so its clickable area is at least 44px tall.",
      "Add `aria-current=\"page\"` to one link and style it with an underline bar using the attribute selector.",
      "Write `:link`, `:visited`, `:hover`, `:focus-visible` and `:active` styles in a sensible order and check which one wins."
    ],
    functionalRequirements: ["The current-page style appears only on the link with `aria-current`.", "Every link can be reached and seen with the Tab key."],
    responsiveRequirements: ["Below 600px the links wrap onto a second row under the logo without overlapping.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["The `<nav>` has an accessible name.", "The current page is not shown by colour alone."],
    hints: [
      "`flex-wrap: wrap` is the simplest way to stop links running off-screen.",
      "Attribute selectors and class selectors have the same specificity.",
      "Put the padding on the `<a>`, not the `<li>`, so the whole area is clickable."
    ]
  },
  {
    id: "p012-simple-landing-page",
    number: 12,
    title: "Simple Landing Page",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A one-page product landing with a hero, three feature blocks, a call-to-action band and a footer.",
    objective: "Assemble a complete page from semantic sections and keep colours and spacing consistent with custom properties.",
    skills: ["Page landmarks", "Custom properties for colour and spacing", "A wrapping three-column Flexbox row", "Call-to-action styling"],
    topics: ["html-semantic", "html-buttons", "css-variables", "css-flexbox", "css-colors-backgrounds", "css-spacing"],
    estimatedMinutes: 90,
    requiredHtml: ["`<header>`", "`<main>`", "3+ `<section>`s", "`<h1>` in the hero", "a link styled as a button", "`<footer>`"],
    requiredCss: ["`:root` custom properties for 3+ colours and a spacing unit", "a hero with `min-height` and centred content", "a wrapping flex row of features", "one reusable `.button` class"],
    steps: [
      "Sketch the page — header, hero, features, call-to-action band, footer — then write those as landmarks and sections.",
      "Define `--color-primary`, `--color-text`, `--color-surface` and `--space` on `:root` and use them everywhere.",
      "Build a hero with an `<h1>`, a one-line pitch and a primary link-button, with `min-height: 60vh`.",
      "Lay out three feature blocks in a wrapping flex row where each block starts at least 15rem wide.",
      "Add a full-width call-to-action band with a contrasting background, and a footer with copyright text."
    ],
    functionalRequirements: ["Changing `--color-primary` in one place recolours every accent on the page.", "The hero button jumps to the call-to-action section with an in-page link."],
    responsiveRequirements: ["Features stack into one column at 360px and sit three across at 1024px.", "Hero text never touches the screen edges."],
    accessibilityRequirements: ["Button text describes the action (\"Start your free trial\").", "Text on the call-to-action band has at least 4.5:1 contrast."],
    hints: [
      "`flex: 1 1 15rem` means \"grow, shrink, but start at 15rem\".",
      "An in-page link uses `href=\"#some-id\"` pointing at a section's id.",
      "Name custom properties by their role (primary) rather than their colour (blue)."
    ]
  },
  {
    id: "p013-image-gallery",
    number: 13,
    title: "Image Gallery",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A grid of nine captioned photos where every thumbnail is exactly the same size.",
    objective: "Show images of different shapes in an even grid with `object-fit`, and caption each one semantically.",
    skills: ["`<figure>` and `<figcaption>`", "CSS Grid with `repeat()`", "`object-fit: cover`", "Hover zoom with `transform`"],
    topics: ["html-images-alt", "html-semantic", "css-grid", "css-display", "css-sizing", "css-transforms", "css-overflow"],
    estimatedMinutes: 75,
    requiredHtml: ["`<section>` with an `<h2>`", "`<ul>` of `<li>` items", "`<figure>` + `<figcaption>` per image", "`<img>` with `width`, `height` and `alt`"],
    requiredCss: ["`display: grid` with `repeat(3, 1fr)` on desktop", "`aspect-ratio: 1` and `object-fit: cover` on images", "`overflow: hidden` on each figure", "`transform: scale()` on hover"],
    steps: [
      "Collect nine images of mixed sizes (your own photos or simple placeholders) in an `images/` folder.",
      "Mark up a `<ul>` gallery where each `<li>` holds a `<figure>` with an `<img>` and a short `<figcaption>`.",
      "Make the list a grid of three equal columns with a 1rem gap.",
      "Force every image into a square with `aspect-ratio: 1` and `object-fit: cover`.",
      "Add a gentle zoom on hover by scaling the image inside a figure that hides its overflow."
    ],
    functionalRequirements: ["All nine thumbnails are exactly the same size, whatever the original photo shape.", "The zoom never spills outside its thumbnail."],
    responsiveRequirements: ["One column at 360px, two from 600px and three from 900px.", "No horizontal scroll at any width."],
    accessibilityRequirements: ["Each image has alt text — or empty alt if the caption already says everything.", "`width` and `height` attributes prevent the layout jumping while images load."],
    hints: [
      "Media queries can change `grid-template-columns` at each breakpoint.",
      "Without `overflow: hidden` on the parent, a scaled image covers its neighbours.",
      "`display: block` on images removes the small gap that appears under them."
    ]
  },
  {
    id: "p014-personal-hobbies-page",
    number: 14,
    title: "Personal Hobbies Page",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A colourful page with a section per hobby, a quote banner and a jump-link table of contents.",
    objective: "Practise backgrounds and gradients, and connect sections with in-page navigation and smooth scrolling.",
    skills: ["Linear and radial gradients", "In-page anchor links", "`scroll-behavior` and `scroll-margin-top`", "Background images with overlays"],
    topics: ["html-links-navigation", "html-semantic", "css-gradients", "css-colors-backgrounds", "css-spacing", "css-media-queries"],
    estimatedMinutes: 75,
    requiredHtml: ["`<nav>` table of contents", "a `<section id>` per hobby", "`<h2>` per section", "`<blockquote>`", "a back-to-top link"],
    requiredCss: ["`linear-gradient()` on the header", "a background photo with `background-size: cover`", "`scroll-behavior: smooth`", "`scroll-margin-top` on sections"],
    steps: [
      "Write at least four hobby `<section>`s with ids, each with a heading, a paragraph and an image.",
      "Add a table-of-contents `<nav>` at the top linking to each section, and a \"Back to top\" link at the end.",
      "Give the page header a two-colour `linear-gradient()` and the quote banner a `radial-gradient()`.",
      "Turn on `scroll-behavior: smooth` and add `scroll-margin-top` so headings aren't hidden after jumping.",
      "Give one section a background photo with `background-size: cover` and a dark overlay so its text stays readable."
    ],
    functionalRequirements: ["Every table-of-contents link jumps to the right section.", "\"Back to top\" returns to the start of the page."],
    responsiveRequirements: ["The table of contents wraps neatly at 360px.", "Background images cover their section at every width without tiling."],
    accessibilityRequirements: ["Text over the background photo meets 4.5:1 contrast.", "Smooth scrolling is switched off for people who prefer reduced motion."],
    hints: [
      "You can layer a semi-transparent gradient over a photo in one `background` declaration.",
      "`@media (prefers-reduced-motion: reduce)` lets you turn smooth scrolling off.",
      "An anchor's target is any element whose id matches the part after `#`."
    ]
  },
  {
    id: "p015-basic-pricing-card",
    number: 15,
    title: "Basic Pricing Card",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A single pricing plan with plan name, large price, feature checklist and a sign-up button.",
    objective: "Create clear visual hierarchy inside one component using size, weight, colour and spacing.",
    skills: ["Visual hierarchy with typography", "Custom bullets with `::before`", "A flex column with a pinned button", "Inline price formatting"],
    topics: ["html-lists", "html-buttons", "css-pseudo-elements", "css-typography", "css-flexbox"],
    estimatedMinutes: 60,
    requiredHtml: ["`<article>`", "`<h2>` plan name", "a price `<p>` with a `<span>` for the period", "`<ul>` of features", "a call-to-action link or button"],
    requiredCss: ["`display: flex; flex-direction: column` on the card", "`::before` tick marks on list items", "a price at least 2.5× the body font size", "`margin-top: auto` to push the button down"],
    steps: [
      "Build an `<article>` with the plan name, a price like \"$12\" plus a smaller \"/month\" span, a description and 5 features.",
      "Make the card a flex column and push the button to the bottom with `margin-top: auto`.",
      "Replace the default bullets with a ✓ drawn by `::before` in your accent colour.",
      "Create the hierarchy: big bold price, medium plan name, muted period and description.",
      "Add a full-width button with hover and focus-visible states."
    ],
    functionalRequirements: ["The button stays at the bottom even if you delete two features.", "The ticks are decorative and never break the text wrapping."],
    responsiveRequirements: ["The card is full width at 360px and at most 22rem wide on larger screens.", "Long feature text wraps under its own first line, not under the tick."],
    accessibilityRequirements: ["The price reads as one phrase (\"$12 per month\").", "Features are understood from their text alone, without the ticks."],
    hints: [
      "In a flex column, `margin-top: auto` swallows all the free space above an item.",
      "Give list items `padding-left` and place the `::before` inside that space.",
      "`content: \"✓\" / \"\"` gives a pseudo-element empty alternative text in modern browsers."
    ]
  },
  {
    id: "p016-student-profile-page",
    number: 16,
    title: "Student Profile Page",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A student's profile with photo and details, a grades table, labelled skill meters and a contact link.",
    objective: "Combine a table, lists and native `<meter>` elements on one page and keep their styling consistent.",
    skills: ["`<meter>` with labels", "Combining table and list layouts", "A shared panel component", "Two-column profile layout with Grid"],
    topics: ["html-tables", "html-lists", "html-semantic", "css-grid", "css-box-model"],
    estimatedMinutes: 75,
    requiredHtml: ["`<header>` with photo and name", "`<section>`s with `<h2>`", "a grades `<table>` with `<caption>`", "`<meter>` elements with `<label>`s", "`<a href=\"mailto:…\">`"],
    requiredCss: ["`grid-template-columns` for a sidebar + main layout", "a styled table header row", "a set width on each `<meter>`", "one `.panel` class used by every section"],
    steps: [
      "Create a header with the student's photo, name, course and year.",
      "Add a grades table (subject, term 1, term 2, average) with a caption and column headers.",
      "Add a skills section where each skill has a `<label>` linked to a `<meter min=\"0\" max=\"100\" value=\"…\">`.",
      "Wrap each section in a `.panel` with the same padding, border and radius.",
      "From 900px, place the photo and details in a left column and the panels in a wider right column using Grid."
    ],
    functionalRequirements: ["Each meter's value matches the number written in its label.", "Grade averages appear in their own column."],
    responsiveRequirements: ["One column below 900px, two columns above.", "The table scrolls inside its panel on narrow screens instead of overflowing."],
    accessibilityRequirements: ["Every `<meter>` has an associated label.", "The table has a caption and `<th>` headers."],
    hints: [
      "`<meter>` is for a measurement in a known range; `<progress>` is for how far a task has got.",
      "Link a label to a meter with `for` and `id`, exactly like an input.",
      "`grid-template-columns: 18rem 1fr` gives a fixed sidebar and a flexible main area."
    ]
  },
  {
    id: "p017-simple-faq-page",
    number: 17,
    title: "Simple FAQ Page",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A frequently-asked-questions page where each answer opens and closes without any JavaScript.",
    objective: "Use `<details>` and `<summary>` for native disclosure widgets and style their open and closed states.",
    skills: ["`<details>` and `<summary>`", "The `[open]` attribute selector", "A custom disclosure icon", "Grouping questions by topic"],
    topics: ["html-semantic", "html-accessibility", "css-selectors", "css-pseudo-elements", "css-transitions"],
    estimatedMinutes: 60,
    requiredHtml: ["`<main>` with an `<h1>`", "a `<section>` per topic with an `<h2>`", "6+ `<details>` elements", "`<summary>` for each question"],
    requiredCss: ["`details[open]` styles", "the default marker removed and replaced by a `::after` icon", "separator borders between items", "`:focus-visible` on `<summary>`"],
    steps: [
      "Write at least six questions in two topics, each topic a `<section>` with an `<h2>`.",
      "Put each question in a `<summary>` inside `<details>`, with the answer in paragraphs after it.",
      "Hide the default marker and add your own + / − icon with `summary::after`, changing it for `details[open]`.",
      "Give open items a tinted background and a left accent border.",
      "Make each summary a full-width, padded click target with a visible focus outline."
    ],
    functionalRequirements: ["Each question opens and closes on click and with Enter or Space.", "Several answers can be open at the same time."],
    responsiveRequirements: ["Long questions wrap and the icon stays aligned on the right.", "Each summary is at least 44px tall."],
    accessibilityRequirements: ["Keyboard support works without any JavaScript.", "The focus outline is clearly visible on every summary."],
    hints: [
      "Safari still draws a marker through `::-webkit-details-marker` — hide that one too.",
      "`details[open] > summary::after` targets the icon only while the answer is open.",
      "Flexbox on the summary pushes the icon to the right."
    ]
  },
  {
    id: "p018-newsletter-subscription-form",
    number: 18,
    title: "Newsletter Subscription Form",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A compact sign-up box with an email field, a consent checkbox and one clear call to action.",
    objective: "Build a small form where every control has a visible label and the browser's built-in validation does the checking.",
    skills: ["Pairing `<label>` with inputs", "`type=\"email\"` and `required`", "Styling focus and invalid states", "Wrapping a field and button with Flexbox"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "css-pseudo-classes", "css-box-model"],
    estimatedMinutes: 60,
    requiredHtml: ["`<section>`", "`<h2>`", "`<form>`", "`<label>`", "`<input type=\"email\">`", "`<input type=\"checkbox\">`", "`<button type=\"submit\">`"],
    requiredCss: ["`box-sizing: border-box`", "`max-width` with `margin-inline: auto`", "`:focus-visible` styles", "`:user-invalid` styling", "`flex-wrap` for the field + button row"],
    steps: [
      "Create a folder `018-newsletter-subscription-form` with `index.html` and `styles.css`; add a `<section>` with an `<h2>` and one sentence saying what subscribers get.",
      "Inside it add a `<form>` with a labelled email `<input>`, a labelled consent checkbox and a submit `<button>`.",
      "Add `type=\"email\"` and `required` to the email field and `required` to the checkbox, then submit the empty form to see the browser's messages.",
      "Style the box: `max-width: 28rem`, centred, 1.5rem padding, 1px border, 0.75rem radius; field and button full width on small screens.",
      "Add a visible `:focus-visible` outline and a red border for `:user-invalid` fields, and test both."
    ],
    functionalRequirements: ["An empty or malformed email blocks submission.", "The form can't be submitted until the consent box is ticked.", "Clicking a label's text focuses or toggles its control."],
    responsiveRequirements: ["No horizontal scroll at 360px.", "From 600px up, the email field and button sit on one row."],
    accessibilityRequirements: ["Every input has a `<label>` linked by `for`/`id` — no placeholder-only labels.", "The button text says what happens (\"Subscribe\").", "The focus outline has at least 3:1 contrast against the background."],
    hints: [
      "A label's `for` value must match its input's `id` exactly.",
      "One pseudo-class only flags an error after the user has interacted — look for it instead of `:invalid`.",
      "`flex-wrap` lets two items share a row only when there is room."
    ]
  },
  {
    id: "p019-basic-login-form",
    number: 19,
    title: "Basic Login Form",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A centred sign-in card with email and password fields, a remember-me checkbox, a forgotten-password link and a submit button.",
    objective: "Build a form with the right input types and `autocomplete` hints so browsers and password managers can help the user.",
    skills: ["`autocomplete` tokens", "`type=\"password\"` and `minlength`", "Centring in the viewport with Grid", "Consistent form control styling"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "css-grid", "css-borders-outlines", "css-pseudo-classes"],
    estimatedMinutes: 60,
    requiredHtml: ["`<form method=\"post\">`", "`<input type=\"email\" autocomplete=\"username\">`", "`<input type=\"password\" autocomplete=\"current-password\">`", "a checkbox", "a forgotten-password `<a>`", "`<button type=\"submit\">`"],
    requiredCss: ["`min-height: 100vh` with `display: grid; place-items: center`", "full-width inputs", "`font: inherit` on inputs and buttons", "a `:focus-visible` ring on every control"],
    steps: [
      "Create a `<main>` that centres a `<form>` card in the viewport with `display: grid` and `place-items: center`.",
      "Add labelled email and password fields with `autocomplete=\"username\"` and `autocomplete=\"current-password\"`.",
      "Make both `required`, give the password `minlength=\"8\"`, and add a remember-me checkbox and a forgotten-password link.",
      "Make the inputs full width, inherit the page font, and share one border, radius and padding style.",
      "Style a full-width submit button and a focus ring that appears on every control."
    ],
    functionalRequirements: ["The browser blocks submission when a field is empty or the password is shorter than 8 characters.", "The password field hides what you type."],
    responsiveRequirements: ["The card keeps 1rem side margins at 360px and has a 24rem maximum width.", "Inputs and the button are at least 44px tall."],
    accessibilityRequirements: ["Every field has a visible label.", "The forgotten-password link has descriptive text."],
    hints: [
      "Form controls don't inherit fonts by default — `font: inherit` fixes that.",
      "`autocomplete` values come from a fixed list; \"username\" is correct even when people log in with an email.",
      "`place-items` is shorthand for `align-items` and `justify-items`."
    ]
  },
  {
    id: "p020-registration-form",
    number: 20,
    title: "Registration Form",
    difficulty: "beginner",
    complexity: 3,
    shortDescription: "A sign-up form with name, email, password, date of birth, country, account-type radios and a terms checkbox.",
    objective: "Group related controls with `<fieldset>` and `<legend>` and use the full range of basic input types correctly.",
    skills: ["`<fieldset>` and `<legend>`", "Radio groups and `<select>`", "`type=\"date\"` and `minlength`", "Helper text linked with `aria-describedby`"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "html-accessibility", "css-grid", "css-pseudo-classes"],
    estimatedMinutes: 90,
    requiredHtml: ["`<form>`", "two `<fieldset>`s with `<legend>`s", "`<input type=\"date\">`", "`<select>` with `<option>`s", "radio buttons sharing one `name`", "helper text linked with `aria-describedby`"],
    requiredCss: ["a two-column grid for first/last name from 600px", "a styled fieldset border and legend", "`:user-invalid` styles", "`accent-color` for radios and checkboxes"],
    steps: [
      "Plan two groups — \"Your details\" and \"Account\" — and wrap each in a `<fieldset>` with a `<legend>`.",
      "Add first name, last name, email, password (with helper text about its rules), date of birth and a country `<select>`.",
      "Add an account-type radio group (Personal / Business) sharing one `name`, and a required terms checkbox.",
      "Link the password helper text with `aria-describedby` and add a `minlength` that matches the rule it describes.",
      "Place first and last name side by side from 600px with Grid, colour radios with `accent-color`, and style invalid fields after interaction."
    ],
    functionalRequirements: ["Only one account type can be selected at a time.", "Submission is blocked until the terms box is ticked and every required field is valid."],
    responsiveRequirements: ["The name fields stack below 600px.", "The select and date input are full width on mobile."],
    accessibilityRequirements: ["Screen readers announce the legend before the radio options.", "The helper text is read when the password field gets focus."],
    hints: [
      "Radios are grouped by their shared `name`, not by sitting next to each other.",
      "`aria-describedby` points at the `id` of the helper text.",
      "A legend sits on its fieldset's border by default — style it rather than fighting it."
    ]
  },
  {
    id: "p021-contact-form",
    number: 21,
    title: "Contact Form",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A two-part contact section: business details on one side and a message form with a textarea on the other.",
    objective: "Lay out a form beside supporting content with Flexbox and make a textarea and select comfortable to use.",
    skills: ["`<textarea>` sizing", "Side-by-side layout with Flexbox", "Optional vs required fields", "Placeholders as examples, not labels"],
    topics: ["html-forms", "html-labels-validation", "html-buttons", "css-flexbox", "css-sizing"],
    estimatedMinutes: 75,
    requiredHtml: ["`<section>`", "`<form>`", "text, email and tel inputs", "`<select>` for the subject", "`<textarea>`", "`<button type=\"submit\">`"],
    requiredCss: ["`display: flex` with `flex-wrap` for the two parts", "`resize: vertical` on the textarea", "a `min-height` for the textarea", "a visible required-field marker"],
    steps: [
      "Create a section with a contact-details column (address, phone, hours) and a form column.",
      "Add name, email, optional phone, a subject `<select>` and a message `<textarea rows=\"6\">`.",
      "Mark required fields with `required` and the visible text \"(required)\" in their labels; mark phone as optional.",
      "Place the two columns side by side with Flexbox (form wider), wrapping to one column on small screens.",
      "Let the textarea resize only vertically and give all fields the same height, border and focus style."
    ],
    functionalRequirements: ["The textarea can grow taller but never wider than its column.", "Phone is the only field that may be left empty."],
    responsiveRequirements: ["The columns stack below 768px in a consistent order.", "No field overflows at 360px."],
    accessibilityRequirements: ["Required status is written in the label, not shown only by a coloured asterisk.", "Any placeholders are examples, never replacements for labels."],
    hints: [
      "`flex: 2 1 24rem` and `flex: 1 1 16rem` give you a wider form column.",
      "`resize: vertical` stops people stretching the textarea across your layout.",
      "A textarea's default font is often monospace — `font: inherit` fixes it."
    ]
  },
  {
    id: "p022-product-feature-section",
    number: 22,
    title: "Product Feature Section",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A \"Why choose us\" section with six features, each with an inline SVG icon, a title and a short text.",
    objective: "Build a reusable feature component and lay out six of them with CSS Grid `auto-fit`.",
    skills: ["Inline SVG icons with `currentColor`", "`repeat(auto-fit, minmax())`", "Component class naming", "Low-specificity selectors"],
    topics: ["html-semantic", "html-lists", "css-grid", "css-specificity", "css-colors-backgrounds"],
    estimatedMinutes: 75,
    requiredHtml: ["`<section aria-labelledby>`", "`<h2>`", "`<ul>` of 6 features", "inline `<svg aria-hidden=\"true\">`", "`<h3>` per feature"],
    requiredCss: ["`grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))`", "`fill: currentColor` (or `stroke`) on icons", "single-class selectors such as `.feature__title`", "a circular icon background"],
    steps: [
      "Write a section heading and intro sentence, then a `<ul>` of six features, each with an icon, an `<h3>` and a paragraph.",
      "Draw simple icons with inline `<svg>` (a circle, a tick, a lightning bolt…) and hide them from screen readers.",
      "Name classes with one consistent pattern such as `.feature`, `.feature__icon`, `.feature__title`.",
      "Lay out the list with `repeat(auto-fit, minmax(15rem, 1fr))` so the number of columns adapts by itself.",
      "Colour every icon by setting `color` on the icon wrapper and `currentColor` inside the SVG."
    ],
    functionalRequirements: ["Changing the wrapper's `color` changes every icon's colour.", "A seventh feature can be added without any new CSS."],
    responsiveRequirements: ["1 column at 360px, 2 at 768px and 3 at 1200px — without media queries.", "Icons never shrink or distort."],
    accessibilityRequirements: ["Decorative SVGs have `aria-hidden=\"true\"` and `focusable=\"false\"`.", "The section is labelled by its heading."],
    hints: [
      "`minmax(15rem, 1fr)` means \"at least 15rem, then share what's left\".",
      "Give icons a fixed size and `flex-shrink: 0` (or a grid track) so they keep their shape.",
      "One class per selector keeps specificity flat, so overrides stay easy."
    ]
  },
  {
    id: "p023-simple-testimonials-section",
    number: 23,
    title: "Simple Testimonials Section",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "Three customer testimonials with quote, avatar, name and role, shown as cards with a decorative quotation mark.",
    objective: "Mark up quotations correctly and decorate them with pseudo-elements instead of extra HTML.",
    skills: ["`<figure>`, `<blockquote>`, `<figcaption>`", "Decorative `::before` quote marks", "An avatar row with Flexbox", "Equal-height cards"],
    topics: ["html-semantic", "html-images-alt", "css-pseudo-elements", "css-flexbox", "css-shadows", "css-positioning"],
    estimatedMinutes: 75,
    requiredHtml: ["`<section>` with `<h2>`", "a `<figure>` per testimonial", "`<blockquote>` containing `<p>`", "`<figcaption>` with avatar `<img>`, name and role"],
    requiredCss: ["`::before` with a large quotation mark", "`position: absolute` for the decorative mark", "a flex row of cards that stretch to equal height", "`border-radius: 50%` avatars"],
    steps: [
      "Mark up three testimonials as `<figure>`s with the quote in `<blockquote>` and the author in `<figcaption>`.",
      "Lay the cards out in a wrapping flex row and make them equal height.",
      "Add a large decorative “ mark with `::before`, positioned in each card's top-left corner behind the text.",
      "Build the author row: a 48px round avatar beside the name (bold) and role (muted).",
      "Give each card 1.5rem padding and a soft shadow."
    ],
    functionalRequirements: ["All three cards are the same height even with quotes of different lengths.", "The decorative mark never covers the quote text."],
    responsiveRequirements: ["Cards stack at 360px and sit three in a row from 1024px.", "Avatars stay perfect circles at every size."],
    accessibilityRequirements: ["Avatars have alt text with the person's name, or empty alt when the name is right beside them.", "The decorative mark isn't read aloud as text."],
    hints: [
      "Flex items stretch to the tallest item in their row by default.",
      "`position: relative` on the card keeps the absolutely positioned mark inside it.",
      "A negative `z-index` or extra top padding keeps the mark behind the quote."
    ]
  },
  {
    id: "p024-travel-destination-card",
    number: 24,
    title: "Travel Destination Card",
    difficulty: "beginner",
    complexity: 2,
    shortDescription: "A destination card with a full-bleed photo, gradient overlay, the place name over the image and quick facts below.",
    objective: "Overlay readable text on an image with positioning and gradients, and add a smooth hover transition.",
    skills: ["Text over images with an overlay", "A `linear-gradient` scrim", "CSS transitions", "A `<dl>` of quick facts"],
    topics: ["html-images-alt", "html-lists", "css-gradients", "css-positioning", "css-transitions", "css-shadows"],
    estimatedMinutes: 75,
    requiredHtml: ["`<article>`", "`<img>`", "`<h2>` over the image", "`<dl>` of facts (best time, flight time, currency)", "an \"Explore\" link"],
    requiredCss: ["an absolutely positioned caption inside a relative wrapper", "a `linear-gradient(to top, …)` overlay", "`transition` on `transform` and `box-shadow`", "`inset: 0` for a full-cover layer"],
    steps: [
      "Build an `<article>` with an image wrapper (photo and heading) and a body with a `<dl>` of three facts and a link.",
      "Position the heading at the bottom of the photo and add a dark-to-transparent gradient layer under it.",
      "Show the facts as a three-column row with each term above its value.",
      "On hover and `:focus-within`, lift the card 4px and deepen its shadow with a 200ms transition.",
      "Respect `prefers-reduced-motion` by removing the movement for people who ask for it."
    ],
    functionalRequirements: ["The place name is readable over light and dark photos alike.", "Hovering the card or tabbing to its link animates it."],
    responsiveRequirements: ["The card is fluid up to 24rem wide and the facts stack below 360px.", "The photo keeps its aspect ratio."],
    accessibilityRequirements: ["Overlay text meets 4.5:1 against the darkest part of the gradient.", "The Explore link's accessible name includes the destination."],
    hints: [
      "`:focus-within` lets the card react when the link inside it has focus.",
      "A gradient layer can be a `::after` with `inset: 0` on the image wrapper.",
      "Transition `transform`, not `top`, for smoother movement."
    ]
  },
  {
    id: "p025-complete-personal-website",
    number: 25,
    title: "Complete Personal Website",
    difficulty: "beginner",
    complexity: 3,
    shortDescription: "A three-page personal site — Home, About and Projects — sharing one stylesheet and one navigation.",
    objective: "Combine every beginner skill into a small multi-page site with consistent structure, metadata and styling.",
    skills: ["Multi-page structure with shared CSS", "Consistent navigation with `aria-current`", "Relative links between pages", "A small design system with custom properties"],
    topics: ["html-document-structure", "html-metadata", "html-links-navigation", "html-semantic", "css-variables", "css-flexbox", "css-architecture"],
    estimatedMinutes: 180,
    requiredHtml: ["three `.html` files", "the same `<header>` and `<nav>` on every page", "a unique `<title>` and meta description per page", "`<main>`, `<section>`, `<footer>`", "a skip link"],
    requiredCss: ["one shared `styles.css`", "`:root` tokens for colours, fonts and spacing", "a `.container` utility with `max-width`", "a flex header and wrapping project cards"],
    steps: [
      "Create `index.html`, `about.html` and `projects.html` that share one `styles.css` and an identical header and footer.",
      "Give each page its own `<title>`, meta description and `<h1>`; mark the current page in the nav with `aria-current=\"page\"`.",
      "Define colour, font and spacing tokens on `:root`, plus a `.container` class (max-width 64rem, centred, side padding).",
      "Fill Home with a hero and short intro, About with a bio and skills list, and Projects with at least three project cards.",
      "Check every page at 360px and 1280px and fix anything that overflows."
    ],
    functionalRequirements: ["Every nav link works between the three pages using relative paths.", "The current page is highlighted on each page."],
    responsiveRequirements: ["No horizontal scroll on any page at 360px.", "Project cards wrap from one to three columns."],
    accessibilityRequirements: ["Every page has one `<h1>`, a `lang` attribute and landmarks.", "A skip link lets keyboard users jump straight to the main content."],
    hints: [
      "Write the header once, copy it to each page, and change only `aria-current`.",
      "Relative links like `about.html` work when the files share a folder.",
      "A skip link is an `<a href=\"#main\">` that only becomes visible when focused."
    ]
  }
]);
