/*
 * projects-3-advanced.js — Level 3: Advanced (projects 51–75)
 * -----------------------------------------------------------
 * Focus: advanced layouts, Grid, positioning, complex responsive behaviour,
 * animations, pseudo-elements and design systems. Same fields as level 1.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.projects = (HCM.data.projects || []).concat([
  {
    id: "p051-advanced-ecommerce-homepage",
    number: 51,
    title: "Advanced E-commerce Homepage",
    difficulty: "advanced",
    complexity: 1,
    shortDescription: "A store homepage with promo bar, category tiles, a bento-style featured grid, a best-sellers scroller and a newsletter.",
    objective: "Compose a dense homepage around a bento grid of unequal tiles that stays balanced at every breakpoint.",
    skills: ["Bento grids with spanning tiles", "`grid-auto-rows` with `minmax()`", "A horizontal product scroller", "Promotional typography over images"],
    topics: ["css-grid", "css-layout-patterns", "css-overflow", "css-variables", "html-semantic", "css-responsive-design"],
    estimatedMinutes: 300,
    requiredHtml: ["a promo bar", "a category `<nav>` of 8 tiles", "a featured `<section>` of 6 bento tiles", "a best-sellers `<ul>` scroller", "a newsletter `<form>`", "a multi-column `<footer>`"],
    requiredCss: ["`grid-template-columns: repeat(4, 1fr)` with `grid-auto-rows: minmax(10rem, auto)`", "tiles spanning 2×2, 2×1 and 1×2", "a scroll-snap product row", "promo colours stored as tokens"],
    steps: [
      "Mark up the promo bar, header, eight category tiles, a six-tile featured block, a best-sellers row and a newsletter form.",
      "Build the featured block as a 4-column bento grid where tiles span different numbers of rows and columns.",
      "Simplify the bento to 2 columns under 900px and 1 column under 560px, resetting the spans.",
      "Make best-sellers a horizontal scroller with snap points that shows about 4.5 cards on desktop.",
      "Keep colours and spacing in tokens, and style tiles with text overlaid on their images."
    ],
    functionalRequirements: ["Every tile and product links somewhere and has an accessible name.", "The scroller can be used with the keyboard and by touch."],
    responsiveRequirements: ["The bento changes at 900px and 560px with no gaps or overlaps.", "No page-level horizontal scroll."],
    accessibilityRequirements: ["Text over tile images meets contrast thanks to an overlay.", "The scroller is focusable and labelled."],
    hints: [
      "Sketch the bento on squared paper first and count rows and columns.",
      "`grid-auto-flow: dense` fills holes, but it can change the visual order.",
      "Reset spans with `grid-column: auto; grid-row: auto` at smaller breakpoints."
    ]
  },
  {
    id: "p052-modern-saas-dashboard",
    number: 52,
    title: "Modern SaaS Dashboard",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A SaaS dashboard with a collapsible icon sidebar, KPI cards with trends, a CSS bar chart and a team table.",
    objective: "Build an app UI with a CSS-only collapsible sidebar and draw a bar chart from data passed in custom properties.",
    skills: ["A checkbox-driven collapsible sidebar", "Bar charts sized by `--value`", "KPI trend badges", "Dense app typography"],
    topics: ["css-variables", "css-grid", "css-transitions", "css-pseudo-classes", "html-tables", "css-layout-patterns"],
    estimatedMinutes: 300,
    requiredHtml: ["a visually hidden checkbox + label toggle", "an icon sidebar `<nav>` with text labels", "4 KPI cards using `<data>`", "a chart `<figure>` with `<figcaption>` and an equivalent `<table>`", "a team `<table>`"],
    requiredCss: ["`#collapse:checked ~ .app` changing `grid-template-columns`", "a transition on the sidebar width", "bars sized with `height: calc(var(--value) * 1%)`", "▲/▼ trend badges drawn with `::before`"],
    steps: [
      "Build the app shell: a sidebar with icon + text links, a top bar and a content area.",
      "Add a collapse toggle (checkbox + label) that shrinks the sidebar to icons and hides the labels visually.",
      "Add four KPI cards, each with a value, a label and a trend badge such as ▲ 12% or ▼ 3%.",
      "Draw a 12-month bar chart where each bar's height comes from an inline `style=\"--value: 64\"`.",
      "Provide the same chart data in a visually hidden table, and add a team table below."
    ],
    functionalRequirements: ["The sidebar collapses and expands by click and with Space on the toggle.", "Changing one `--value` changes one bar's height."],
    responsiveRequirements: ["Below 768px the sidebar becomes a top bar and the toggle disappears.", "KPI cards show 1, 2 and then 4 per row."],
    accessibilityRequirements: ["Collapsed links keep their accessible names (visually hidden text, not removed).", "The chart's data is also available as a table."],
    hints: [
      "Inline custom properties are a neat way to pass data from HTML to CSS.",
      "Transitioning `grid-template-columns` works in modern browsers; older ones simply switch instantly.",
      "Visually hidden text keeps icon-only links accessible."
    ]
  },
  {
    id: "p053-responsive-analytics-dashboard",
    number: 53,
    title: "Responsive Analytics Dashboard",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "An analytics view with a date-range toolbar, stat tiles, a CSS donut chart, a top-pages table and a regions bar list.",
    objective: "Draw data visuals with `conic-gradient` and custom properties, and make cards respond to their own width with container queries.",
    skills: ["Donut charts with `conic-gradient`", "Container queries", "Horizontal bar lists", "A segmented radio toolbar"],
    topics: ["css-gradients", "css-variables", "css-grid", "css-responsive-design", "html-tables", "css-layout-patterns"],
    estimatedMinutes: 300,
    requiredHtml: ["a toolbar with segmented radios (7 days / 30 days / 90 days)", "stat tiles", "a donut `<figure>` with a legend `<ul>`", "a top-pages `<table>`", "a regions `<ol>` with bar spans"],
    requiredCss: ["a `conic-gradient` driven by `--a`, `--b` and `--c` percentages", "`container-type: inline-size` on cards", "an `@container (min-width: 30rem)` layout change", "a `grid-template-areas` dashboard"],
    steps: [
      "Build the toolbar with a range radio group styled as segments and an Export link.",
      "Lay out the dashboard with named grid areas: stats, traffic, sources, pages, regions.",
      "Draw a traffic-sources donut with `conic-gradient` using three custom properties, plus a legend with values.",
      "Make cards container-aware: the legend sits beside the donut when the card is wider than 30rem and below it otherwise.",
      "Add a top-pages table and a regions list where each bar's width comes from `--share`."
    ],
    functionalRequirements: ["Donut segments match the legend percentages.", "Choosing a range shows a clear selected state."],
    responsiveRequirements: ["Cards rearrange their contents based on their own width, not the window's.", "The dashboard becomes one column under 768px."],
    accessibilityRequirements: ["The donut and bars have the same numbers available as text.", "The segmented control is a real radio group with a legend."],
    hints: [
      "A donut is a `conic-gradient` circle with a smaller circle (or a mask) in the middle.",
      "Container queries need `container-type` on an ancestor of the elements you style.",
      "`conic-gradient` colour stops can use `calc()` with custom properties."
    ]
  },
  {
    id: "p054-advanced-multi-step-form-layout",
    number: 54,
    title: "Advanced Multi-Step Form Layout",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A four-step checkout-style form with a progress indicator, step panels switched by `:target` and a review step.",
    objective: "Create a multi-step form with CSS-only step switching and a progress indicator that always matches the current step.",
    skills: ["`:target` step panels", "`:has()` to style the indicator from the active step", "An accessible step indicator", "Consistent validation styling"],
    topics: ["html-forms", "html-labels-validation", "css-pseudo-classes", "css-selectors", "css-transitions", "html-accessibility"],
    estimatedMinutes: 300,
    requiredHtml: ["one `<form>` with 4 `<fieldset id>`s", "an `<ol>` step indicator", "Back/Next links between steps", "a review step with a `<dl>`", "a final submit `<button>`"],
    requiredCss: ["`fieldset:target` shown, the first step shown when nothing is targeted", "a `:has()` rule that marks completed and current steps", "completed / current / upcoming step states", "a short entrance transition on the visible step"],
    steps: [
      "Divide one form into four fieldsets: Account, Shipping, Payment (practice placeholder fields only) and Review.",
      "Add Next and Back links that point at the next or previous fieldset id.",
      "Show only the targeted fieldset, with the first one visible when no step is targeted.",
      "Build an `<ol>` step indicator and use `:has()` to mark steps before the current one as complete.",
      "On the review step, summarise sample values in a `<dl>` and add the submit button."
    ],
    functionalRequirements: ["Next and Back move between steps without reloading and without JavaScript.", "The step indicator always matches the visible step."],
    responsiveRequirements: ["The step indicator shows numbers only under 480px and numbers + labels above.", "Buttons are full width on mobile."],
    accessibilityRequirements: ["The current step is announced in text (\"Step 2 of 4\") and marked with `aria-current=\"step\"`.", "Each fieldset's legend matches its step name."],
    hints: [
      "`form:has(#step-2:target)` lets the whole form know which step is active.",
      "Hidden `required` fields still block submission, and the browser can't show their message — test what happens on the last step.",
      "Never ask for real card numbers in a practice form; label fields clearly as examples."
    ]
  },
  {
    id: "p055-magazine-editorial-layout",
    number: 55,
    title: "Magazine Editorial Layout",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A long-read feature with a full-bleed opener, drop cap, pull quotes, image breakouts and a margin note.",
    objective: "Use a named-line content grid so elements can break out of the text column, and refine the typography with editorial details.",
    skills: ["Breakout layouts with named grid lines", "`::first-letter` drop caps", "`initial-letter` as an enhancement", "`text-wrap: balance` and `hyphens`"],
    topics: ["css-grid", "css-typography", "css-pseudo-elements", "css-layout-patterns", "css-cross-browser", "html-semantic"],
    estimatedMinutes: 300,
    requiredHtml: ["an `<article>` with a `<header>` (kicker, h1, standfirst, byline)", "a full-bleed `<figure>`", "a pull quote in `<aside>`", "a breakout `<figure>` wider than the text", "a margin note `<aside>`"],
    requiredCss: ["`grid-template-columns` with `[full-start]`, `[wide-start]` and `[content-start]` lines", "`.full-bleed { grid-column: full; }`", "a `::first-letter` drop cap", "`@supports (initial-letter: 3)` enhancement", "`text-wrap: balance` on headings"],
    steps: [
      "Write a long article (8+ paragraphs) with a kicker, headline, standfirst, byline, two pull quotes and three figures.",
      "Create a content grid with named lines for `full`, `wide` and `content` tracks centred on the page.",
      "Place normal text in `content`, one figure in `wide` and the opening image in `full`.",
      "Add a drop cap with `::first-letter`, then enhance it with `initial-letter` inside `@supports`.",
      "Balance headline wrapping, turn on `hyphens: auto`, and move pull quotes into the margin on wide screens."
    ],
    functionalRequirements: ["Breakout images line up with the page grid at every width.", "Where supported, the drop cap spans the first three lines of text."],
    responsiveRequirements: ["Under 768px every track collapses to the content column with side padding.", "Pull quotes sit inline on mobile and move into the margin from 1200px."],
    accessibilityRequirements: ["Pull quotes repeat article text, so they live in `<aside>` and don't interrupt the reading flow.", "The drop cap is still read as part of its word."],
    hints: [
      "Naming lines `full-start` and `full-end` lets you write `grid-column: full`.",
      "Outer tracks of `minmax(1rem, 1fr)` give you side padding for free.",
      "`hyphens: auto` needs the correct `lang` attribute on the page."
    ]
  },
  {
    id: "p056-complex-css-grid-gallery",
    number: 56,
    title: "Complex CSS Grid Gallery",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "An art gallery wall with deliberate tile sizes, captions overlapping their images and a filter built from radios and `:has()`.",
    objective: "Master explicit grid placement, overlapping items in one cell, and filtering a whole gallery from its parent with `:has()`.",
    skills: ["Explicit placement with line numbers", "Overlapping items in one grid cell", "Filtering with radios and `:has()`", "`subgrid` with a fallback"],
    topics: ["css-grid", "css-pseudo-classes", "css-selectors", "css-z-index", "css-cross-browser", "html-forms"],
    estimatedMinutes: 240,
    requiredHtml: ["a filter radio group (All / Painting / Photo / Sculpture)", "a `<ul>` of 12 artworks with `data-type`", "`<figure>` with `<img>` and `<figcaption>`", "one featured artwork"],
    requiredCss: ["`grid-template-columns: repeat(6, 1fr)` with `grid-auto-rows`", "placements with `span`", "image and caption sharing one cell (`grid-area: 1 / 1`)", "`:has(#f-photo:checked)` hiding other types", "`subgrid` inside `@supports`"],
    steps: [
      "Add a filter radio group and 12 artworks, each tagged with a `data-type`.",
      "Place artworks on a 6-column grid with deliberate spans: a 2×2 featured piece, tall portraits and wide panoramas.",
      "Overlay each caption on its image by placing both in the same grid cell inside the figure.",
      "Filter the wall with `:has()` so choosing a type hides the others, and reset spans when filtered so no holes appear.",
      "Use `subgrid` inside `@supports` so captions in a row align, with a simple fallback."
    ],
    functionalRequirements: ["Each filter shows only matching artworks; All shows everything.", "The featured piece stays visually dominant in the All view."],
    responsiveRequirements: ["The wall drops to 2 columns with simpler spans under 700px.", "Captions stay readable over images at 360px."],
    accessibilityRequirements: ["The filter is a labelled radio group that works with the arrow keys.", "Hidden artworks are hidden from screen readers too (`display: none`)."],
    hints: [
      "Two items with the same `grid-area` stack on top of each other; `z-index` decides which is on top.",
      "`:has()` lets the gallery check which radio is checked anywhere inside it.",
      "Filtered views often look better with `grid-auto-flow: dense`."
    ]
  },
  {
    id: "p057-advanced-product-details-page",
    number: 57,
    title: "Advanced Product Details Page",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A product page with a radio-driven image gallery, colour and size pickers, a quantity field, a sticky buy box, specs and reviews.",
    objective: "Make CSS-only controls — a radio gallery and swatches — work alongside a sticky purchase panel on one rich page.",
    skills: ["A radio-driven image gallery", "Colour swatches with `:checked`", "A sticky purchase box", "Specs and review structures"],
    topics: ["html-forms", "css-pseudo-classes", "css-positioning", "css-grid", "html-tables", "html-responsive-images"],
    estimatedMinutes: 300,
    requiredHtml: ["a gallery with 4 radios, 4 large images and 4 thumbnail labels", "colour and size radio groups", "`<input type=\"number\" min max>` quantity", "a specs `<table>`", "a reviews `<section>` with ratings as text"],
    requiredCss: ["`#img-2:checked ~ .stage .img-2 { opacity: 1; }` style rules", "swatch labels with a ring on the checked one", "a sticky buy box from 1024px", "a two-column page grid around 3fr / 2fr"],
    steps: [
      "Build a gallery: four hidden radios, a stage with four large images and four thumbnail labels.",
      "Show the large image that matches the checked radio, with a fade transition.",
      "Add colour swatches and size options as radio groups with clear checked and focus styles.",
      "Add a quantity field, price and Add to basket button in a buy box that stays sticky beside the gallery from 1024px.",
      "Below, add a specs table and three reviews with rating text and dates."
    ],
    functionalRequirements: ["Clicking a thumbnail swaps the large image.", "Only one colour and one size can be selected."],
    responsiveRequirements: ["The gallery sits above the buy box under 1024px and beside it above.", "Thumbnails stay in one row and scroll if needed on narrow screens."],
    accessibilityRequirements: ["Swatches have text names (visually hidden), such as \"Forest green\".", "Thumbnail labels say which image they show."],
    hints: [
      "Put the radios before the stage in the HTML so `~` can reach it.",
      "Stack all the large images in one grid cell and fade between them.",
      "A swatch's name can live in a visually hidden span inside its label."
    ]
  },
  {
    id: "p058-responsive-mega-menu",
    number: 58,
    title: "Responsive Mega Menu",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A shop header where each top-level item opens a wide panel with columns of links and a promo tile.",
    objective: "Build a keyboard-accessible mega menu with `:focus-within`, careful positioning and a clear stacking order.",
    skills: ["`:hover` and `:focus-within` dropdowns", "Full-width absolutely positioned panels", "Stacking contexts and `z-index`", "Delayed hiding with `visibility` transitions"],
    topics: ["css-positioning", "css-z-index", "css-pseudo-classes", "html-links-navigation", "css-grid", "css-transitions"],
    estimatedMinutes: 240,
    requiredHtml: ["a `<header>` with `position: relative`", "`<nav aria-label>` with a top-level `<ul>`", "a top link plus a panel `<div>` per item", "3 link-column `<ul>`s per panel, each with an `<h3>`", "a promo tile per panel"],
    requiredCss: ["panels positioned with `left: 0; right: 0` under the header", "`li:hover > .panel, li:focus-within > .panel` reveal", "`visibility` + `opacity` transition with a short delay", "a `z-index` above the page content"],
    steps: [
      "Create a header with four top-level categories; each has a panel with three columns of links and a promo tile.",
      "Position each panel full width beneath the header and hide it with `visibility: hidden` and `opacity: 0`.",
      "Show a panel on hover and on `:focus-within`, with a 150ms delay so a passing mouse doesn't flash panels open.",
      "Give the header and panels a `z-index` above page content and check that nothing else creates a competing stacking context.",
      "Under 1024px, stack the categories vertically and show each panel's links as a simple list under its heading."
    ],
    functionalRequirements: ["Tabbing into a category reveals its panel, and tabbing past it hides it again.", "Panels don't flicker when the mouse moves from a top item down into its panel."],
    responsiveRequirements: ["Mega panels only from 1024px; a stacked list layout below.", "Panels never overflow the viewport width."],
    accessibilityRequirements: ["Every link in every panel is reachable by keyboard.", "Focus is never trapped inside a panel."],
    hints: [
      "`visibility` can be transitioned with a delay; `display` historically can't.",
      "A `transform` or `opacity` below 1 on an ancestor creates a new stacking context.",
      "Leave no gap between a top item and its panel, or hover is lost on the way down."
    ]
  },
  {
    id: "p059-animated-hero-section",
    number: 59,
    title: "Animated Hero Section",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A product hero with a staggered text entrance, a floating illustration, a slowly shifting gradient and a scroll cue.",
    objective: "Choreograph several `@keyframes` animations with delays and easing, and provide a calm reduced-motion version.",
    skills: ["Staggered `animation-delay`", "`animation-fill-mode`", "Animated gradients with `background-position`", "A reduced-motion strategy"],
    topics: ["css-animations", "css-transforms", "css-gradients", "css-variables", "css-media-queries", "css-layout-patterns"],
    estimatedMinutes: 240,
    requiredHtml: ["a hero `<section>` with `<h1>`, `<p>` and two links", "a decorative illustration (inline `<svg>` or `<img alt=\"\">`)", "a scroll-cue link to the next section"],
    requiredCss: ["3+ `@keyframes` (rise-in, float, gradient-shift)", "staggered delays from a `--delay` custom property", "`animation-fill-mode: both`", "`cubic-bezier()` easing", "a `prefers-reduced-motion: reduce` override"],
    steps: [
      "Build a hero with headline, subtext, two buttons, an illustration and a scroll-down cue.",
      "Animate the headline, text and buttons in with one `rise-in` keyframe and staggered `--delay` values.",
      "Make the illustration float gently with an infinite alternate animation, and slowly shift a large gradient background.",
      "Tune the easing with `cubic-bezier()` and make sure nothing flashes before its animation starts.",
      "Under `prefers-reduced-motion: reduce`, remove the movement and show everything immediately."
    ],
    functionalRequirements: ["All content is visible when the animations finish — and immediately for reduced-motion users.", "The scroll cue jumps to the next section."],
    responsiveRequirements: ["The illustration moves below the text at 360px and shrinks without overflow.", "Animations never cause horizontal scroll (clip overflow on the hero)."],
    accessibilityRequirements: ["Infinite animations are subtle and stop under reduced motion.", "Nothing flashes more than three times per second."],
    hints: [
      "`animation-delay: calc(var(--delay) * 120ms)` keeps all the staggering in one rule.",
      "`fill-mode: both` applies the first keyframe during the delay.",
      "Animate `transform` and `opacity` — they're the cheapest properties for the browser."
    ]
  },
  {
    id: "p060-modern-pricing-comparison-interface",
    number: 60,
    title: "Modern Pricing Comparison Interface",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A pricing page with plan cards, a detailed comparison table that reflows on mobile, info tooltips, add-ons and an FAQ.",
    objective: "Present the same pricing data as cards and as a detailed table, changing presentation responsively without losing meaning.",
    skills: ["A table-to-list reflow strategy", "A sticky table header", "Tooltips on hover and focus", "Highlighting one table column"],
    topics: ["html-tables", "css-positioning", "css-pseudo-classes", "css-media-queries", "css-grid", "html-accessibility"],
    estimatedMinutes: 240,
    requiredHtml: ["3 plan cards", "a comparison `<table>` with `<caption>`, `<thead>` and grouped `<tbody>`s", "info `<button>`s with tooltip text", "an add-ons `<fieldset>` with checkboxes", "an FAQ with `<details>`"],
    requiredCss: ["a sticky `<thead>` inside a scroll container", "tooltips shown on `:hover` and `:focus-visible` of their button", "a mobile reflow with `data-label` pseudo-content", "a highlighted plan column"],
    steps: [
      "Build three plan cards at the top with the main price and a call to action.",
      "Add a comparison table with four groups of features and a sticky header showing the plan names.",
      "Add small ⓘ buttons beside complex features, with tooltip text shown on hover and on keyboard focus.",
      "Under 768px, reflow the table so each row lists its values with labels taken from `data-label`.",
      "Add an add-ons fieldset and a short FAQ."
    ],
    functionalRequirements: ["Tooltips appear on hover and on keyboard focus, and disappear when focus leaves.", "The highlighted plan column stays consistent from header to last row."],
    responsiveRequirements: ["The table reflows under 768px with every value labelled.", "No horizontal page scroll at 360px."],
    accessibilityRequirements: ["Tooltip text is linked to its button with `aria-describedby`.", "Header cells keep their `scope` attributes."],
    hints: [
      "A tooltip can be a sibling `<span role=\"tooltip\">` revealed with `button:focus-visible + span`.",
      "Highlighting a column is easiest with a class on every cell in that column.",
      "Hover-only tooltips fail on touch screens — focus support helps there too."
    ]
  },
  {
    id: "p061-css-only-tabs",
    number: 61,
    title: "CSS-Only Tabs",
    difficulty: "advanced",
    complexity: 1,
    shortDescription: "A tabbed product-info component (Description, Specs, Reviews, Shipping) built from radio buttons with no JavaScript.",
    objective: "Recreate a tab interface with radio inputs and `:checked`, keeping native keyboard support.",
    skills: ["Radio buttons as tab controllers", "`:checked` with `:has()`", "Panel visibility", "Focus styles on labels"],
    topics: ["css-pseudo-classes", "css-selectors", "html-forms", "html-accessibility", "css-flexbox", "css-transitions"],
    estimatedMinutes: 150,
    requiredHtml: ["4 radio inputs sharing one `name`", "4 `<label>`s acting as tabs", "4 panel `<section>`s with headings", "a wrapper element for the `:has()` rules"],
    requiredCss: ["`.tabs:has(#tab-2:checked) .panel-2 { display: block; }`", "a selected-tab style from `:checked`", "`input:focus-visible + label` focus ring", "a short fade-in on the visible panel"],
    steps: [
      "Create four visually hidden radio inputs, each followed by its label, in a row at the top of the component.",
      "Add four panels below and hide all but the one matching the checked radio.",
      "Style the labels as tabs: the selected tab gets a coloured underline and bold text.",
      "Show a focus ring on a label when its radio has keyboard focus, and test switching with the arrow keys.",
      "Add a small fade-in to the visible panel and let the tab row scroll sideways on narrow screens."
    ],
    functionalRequirements: ["Clicking a tab shows its panel; the arrow keys move between tabs.", "The first tab is selected when the page loads (`checked`)."],
    responsiveRequirements: ["The tab row scrolls sideways on small screens without overflowing the page.", "Panels use the full width."],
    accessibilityRequirements: ["Write a CSS comment explaining why you used radios (screen readers announce \"radio button, 2 of 4\") instead of ARIA tabs, which need JavaScript.", "Hidden panels use `display: none`."],
    hints: [
      "Hide radios visually with the clip technique so they can still receive focus.",
      "`:has()` frees you from strict sibling order in the HTML.",
      "Real ARIA tabs need JavaScript; radios are the honest no-JS alternative."
    ]
  },
  {
    id: "p062-css-only-accordion",
    number: 62,
    title: "CSS-Only Accordion",
    difficulty: "advanced",
    complexity: 1,
    shortDescription: "A settings-page accordion with icons, a rotating chevron, smooth height animation and only one panel open at a time.",
    objective: "Build a polished exclusive accordion with `<details name>`, an animated height where supported and a rotating chevron.",
    skills: ["Exclusive accordions with `details[name]`", "Height animation as progressive enhancement", "Rotating chevrons with `transform`", "Danger-zone styling"],
    topics: ["css-transitions", "css-transforms", "css-grid", "html-semantic", "css-pseudo-elements", "css-cross-browser"],
    estimatedMinutes: 150,
    requiredHtml: ["5 `<details name=\"settings\">`", "`<summary>` with an icon `<svg>` and text", "a content wrapper `<div>` in each", "form controls inside the panels"],
    requiredCss: ["a `summary::after` chevron rotated in `details[open]`", "a height transition with `::details-content` + `interpolate-size` inside `@supports`", "`list-style: none` and `::-webkit-details-marker` hidden", "a distinct style for the danger panel"],
    steps: [
      "Create five settings groups (Profile, Notifications, Privacy, Billing, Danger zone) as `<details name=\"settings\">`.",
      "Put an icon and label in each `<summary>`, plus a chevron drawn with `::after` that rotates when open.",
      "Add realistic content to each panel: a few labelled inputs or checkboxes.",
      "Animate opening with `::details-content` and `interpolate-size` inside `@supports`, keeping an instant fallback.",
      "Style the Danger zone panel differently, with a red border and written warning text."
    ],
    functionalRequirements: ["Only one panel is open at a time.", "Panels open with Enter and Space."],
    responsiveRequirements: ["Summaries are at least 48px tall on touch screens.", "Panel content never overflows at 360px."],
    accessibilityRequirements: ["Animations are switched off under reduced motion.", "The danger panel's warning is written text, not only red colour."],
    hints: [
      "The `name` attribute groups details so that opening one closes the others.",
      "Check new CSS with `@supports` and leave the default behaviour for everyone else.",
      "Rotate the chevron with `transform: rotate(180deg)` and transition it."
    ]
  },
  {
    id: "p063-animated-notification-components",
    number: 63,
    title: "Animated Notification Components",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A family of status components — inline alerts, a toast stack, a badge counter and a notification panel — with purposeful animation.",
    objective: "Design status components with consistent variants driven by one custom property, and accessible, purposeful motion.",
    skills: ["Variants driven by a custom property", "Entrance and timer keyframes", "Positioned badge counters", "`role=\"status\"` vs `role=\"alert\"`"],
    topics: ["css-animations", "css-variables", "css-positioning", "css-z-index", "html-accessibility", "css-architecture"],
    estimatedMinutes: 240,
    requiredHtml: ["4 inline alerts (info, success, warning, error) with icons", "a fixed toast region with `role=\"status\"`", "a bell `<button>` with a numeric badge", "a notification panel `<section>` with a list"],
    requiredCss: ["`.alert { --tone: … }` variants changing one property", "`@keyframes` slide-in and a shrinking timer bar", "a `position: fixed` toast stack with `z-index`", "an absolutely positioned badge", "reduced-motion overrides"],
    steps: [
      "Build one `.alert` component and four variants that only change `--tone` and the icon.",
      "Create a fixed toast stack (bottom-right) with three example toasts that slide in one after another.",
      "Give each toast a shrinking progress bar animated with keyframes to show its timeout.",
      "Add a bell button with an absolutely positioned unread-count badge and a gentle wiggle that plays twice.",
      "Build a notification panel listing read and unread items, and switch off all motion under reduced motion."
    ],
    functionalRequirements: ["Each variant differs in colour, icon and a text label.", "The badge stays attached to the bell's top-right corner at any size."],
    responsiveRequirements: ["Toasts become full width at the bottom on screens under 600px.", "The panel is usable at 360px."],
    accessibilityRequirements: ["The toast region uses `role=\"status\"`; only the error alert uses `role=\"alert\"`.", "The unread count is part of the bell button's accessible name."],
    hints: [
      "One custom property per variant keeps the component easy to extend.",
      "`animation-iteration-count: 2` keeps attention animations short.",
      "Screen readers announce a live region only when its content changes."
    ]
  },
  {
    id: "p064-advanced-profile-dashboard",
    number: 64,
    title: "Advanced Profile Dashboard",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A user-profile dashboard with a cover image, overlapping avatar, stats, a settings form with toggle switches, a timeline and badges.",
    objective: "Combine overlapping positioned elements, a multi-area grid and form components into one coherent profile interface.",
    skills: ["An avatar overlapping the cover", "Grid areas for a profile layout", "Toggle switches from checkboxes", "A timeline drawn with pseudo-elements"],
    topics: ["css-positioning", "css-grid", "css-pseudo-elements", "html-forms", "css-box-model", "css-shadows"],
    estimatedMinutes: 300,
    requiredHtml: ["a cover `<img>` with an avatar overlapping it", "an `<h1>` name and a stats `<dl>`", "a settings `<form>` with checkbox switches", "an activity `<ol>` timeline", "a badges `<ul>`"],
    requiredCss: ["an avatar pulled up with a negative `margin-top`", "toggle switches built with `appearance: none`", "`grid-template-areas` for aside + main", "a timeline line and dots from pseudo-elements"],
    steps: [
      "Create a cover banner and an avatar that overlaps its bottom edge by half the avatar's height.",
      "Add name, role, location and a stats row (posts, followers, following) as a `<dl>`.",
      "Build a settings card with text inputs and three toggle switches made from checkboxes.",
      "Add an activity timeline and an achievements badge grid.",
      "Place everything with grid areas: a profile summary aside, with settings and activity in the main column."
    ],
    functionalRequirements: ["Toggles change state with a click and with Space, and show on/off clearly.", "The avatar stays aligned with the cover's edge at every width."],
    responsiveRequirements: ["One column under 900px, two columns above.", "Stats wrap onto two rows at 360px if needed."],
    accessibilityRequirements: ["Toggle switches are checkboxes with visible labels, and their state isn't shown by colour alone.", "The cover image is decorative (empty alt) unless it carries meaning."],
    hints: [
      "A negative `margin-top` equal to half the avatar's height creates the overlap.",
      "A border in the page's background colour separates the avatar from the cover.",
      "For a switch, the checkbox box is the track and its `::before` is the knob."
    ]
  },
  {
    id: "p065-responsive-financial-dashboard",
    number: 65,
    title: "Responsive Financial Dashboard",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A personal-finance dashboard with balance cards, spending by category, a transactions table and budget meters.",
    objective: "Present numbers precisely: tabular figures, aligned decimals, clear positive/negative styling and accessible meters.",
    skills: ["`font-variant-numeric: tabular-nums`", "Right-aligned numeric columns", "`<meter>` with low/high/optimum", "Responsive data tables"],
    topics: ["html-tables", "css-typography", "css-grid", "css-responsive-design", "html-accessibility", "css-cross-browser"],
    estimatedMinutes: 300,
    requiredHtml: ["balance cards using `<data value>`", "a spending list with bars", "a transactions `<table>` with `<caption>`, `<thead>` and a `<tfoot>` total", "budget `<meter low high optimum>`", "a month `<select>`"],
    requiredCss: ["`tabular-nums` on all figures", "`text-align: right` on amount columns", "debit styling with a minus sign in the text", "meter colours via `::-webkit-meter-*` and `::-moz-meter-bar`", "a table that scrolls under 700px"],
    steps: [
      "Build three balance cards (Current, Savings, Credit) with values in `<data value>`.",
      "Add a spending-by-category list with bars sized by `--percent`.",
      "Create a transactions table (date, description, category, amount) with a `<tfoot>` total row.",
      "Right-align all amounts with tabular figures, and show debits with a minus sign and a colour.",
      "Add four budget `<meter>`s using `low`, `high` and `optimum` so overspending turns red."
    ],
    functionalRequirements: ["Amount columns line up digit by digit.", "A meter changes colour when its value goes past `high`."],
    responsiveRequirements: ["Cards stack at 360px; the table scrolls inside its card under 700px.", "No horizontal page scroll."],
    accessibilityRequirements: ["Negative amounts include a minus sign or the word \"debit\" — not only red colour.", "Each meter has a label with the amount spent and the budget."],
    hints: [
      "`tabular-nums` makes every digit the same width.",
      "Browsers colour meters automatically from their low, high and optimum values.",
      "Custom meter colours need vendor pseudo-elements such as `::-webkit-meter-optimum-value`."
    ]
  },
  {
    id: "p066-advanced-admin-panel",
    number: 66,
    title: "Advanced Admin Panel",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A content admin with a data table (bulk-select checkboxes, sorted column, row actions), a filter toolbar, pagination and an edit drawer.",
    objective: "Build dense data-management UI with careful states: selected rows, hover, focus, disabled and empty.",
    skills: ["Row selection with `:has(:checked)`", "A pagination component", "An edit drawer with `:target`", "Empty and disabled states"],
    topics: ["html-tables", "html-forms", "css-pseudo-classes", "css-positioning", "css-z-index", "css-architecture"],
    estimatedMinutes: 300,
    requiredHtml: ["a toolbar with search, a status `<select>` and a bulk-action `<button>`", "a `<table>` with a checkbox column and an actions column", "`aria-sort` on one header", "a pagination `<nav>`", "an edit drawer `<aside id>` with a form", "an empty-state block"],
    requiredCss: ["`tr:has(input:checked)` selected row style", "sort arrows via `[aria-sort]` attribute selectors", "a `:target` drawer that slides in over an overlay", "disabled button styles", "consistent BEM-style naming"],
    steps: [
      "Build a toolbar and a table of 10 articles with a checkbox column, title, author, status, date and actions.",
      "Highlight selected rows with `tr:has(input:checked)` and show ▲/▼ on the sorted header using `aria-sort`.",
      "Add pagination with previous/next, page numbers and the current page marked with `aria-current`.",
      "Make each Edit link open a slide-in drawer (`:target`) with a form and a close link.",
      "Design an empty state (\"No articles match\") and a disabled state for the bulk-action button."
    ],
    functionalRequirements: ["Ticking a row's checkbox highlights the whole row.", "The drawer opens and closes with links and is reachable by keyboard."],
    responsiveRequirements: ["Under 768px the date and author columns hide, leaving title, status and actions.", "The drawer is full width on mobile."],
    accessibilityRequirements: ["Row checkboxes have labels such as \"Select 'Spring recipes'\".", "The sorted state is exposed with `aria-sort`, not only by an arrow."],
    hints: [
      "Attribute selectors such as `[aria-sort=\"ascending\"]::after` keep state and style in sync.",
      "`:has()` on a row lets the whole row respond to its checkbox.",
      "Hiding a column responsively needs the same `nth-child` rule on both `th` and `td`."
    ]
  },
  {
    id: "p067-modern-documentation-layout",
    number: 67,
    title: "Modern Documentation Layout",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A docs page with a top bar, left section nav, an article with code blocks and callouts, and a right-hand \"On this page\" list.",
    objective: "Build a three-column documentation layout with independently sticky sidebars and well-designed technical content.",
    skills: ["Three columns with sticky sidebars", "Callout components", "Line numbers with CSS counters", "An on-this-page table of contents"],
    topics: ["css-grid", "css-positioning", "css-typography", "css-overflow", "html-semantic", "css-architecture"],
    estimatedMinutes: 300,
    requiredHtml: ["a top `<header>` with a search `<form>`", "a left `<nav>` section list", "an `<article>` with h1–h3, `<pre><code>`, a table and callouts", "a right `<nav aria-label=\"On this page\">`", "previous/next page links"],
    requiredCss: ["`grid-template-columns: 16rem minmax(0, 1fr) 14rem`", "sticky sidebars with `max-height` and their own scrolling", "line numbers from CSS counters", "note / tip / warning callout variants"],
    steps: [
      "Create the page skeleton: header, left nav, article and right on-this-page nav.",
      "Write a realistic article (an installation guide) with headings, two code blocks, a table and three callouts.",
      "Make both sidebars sticky below the header, each scrolling on its own if it is taller than the screen.",
      "Number the lines in code blocks with CSS counters on per-line spans.",
      "Collapse to two columns at 1024px (hide the right list) and to one column under 768px."
    ],
    functionalRequirements: ["On-this-page links jump to headings without hiding them under the header.", "Long code lines scroll sideways inside their block."],
    responsiveRequirements: ["Three columns from 1280px, two from 768px, one below.", "No horizontal page scroll at 360px."],
    accessibilityRequirements: ["The two navs have different `aria-label`s.", "Callouts start with a text label (\"Note:\") rather than relying on colour."],
    hints: [
      "Sticky grid children usually need `align-self: start`.",
      "`max-height: calc(100vh - <header height>)` plus `overflow: auto` lets a sidebar scroll on its own.",
      "Wrap each code line in a span so a counter can number it."
    ]
  },
  {
    id: "p068-responsive-social-media-profile",
    number: 68,
    title: "Responsive Social Media Profile",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A social profile with banner, avatar, follow button, sticky tab bar, a post feed with media grids and a who-to-follow sidebar.",
    objective: "Rebuild the layout patterns of social apps — feeds, adaptive media grids and sticky tabs — with your own original styling.",
    skills: ["A feed in a centred column", "Media grids that adapt to 1–4 images", "A sticky tab bar", "Toggle buttons with `aria-pressed`"],
    topics: ["css-grid", "css-positioning", "html-semantic", "html-images-alt", "css-pseudo-classes", "css-responsive-design"],
    estimatedMinutes: 270,
    requiredHtml: ["a banner-and-avatar header", "a follow `<button aria-pressed>`", "a tab `<nav>` with `aria-current`", "a feed of 5 `<article>` posts with `<time>`", "posts with 1, 2, 3 and 4 images", "a suggestions `<aside>`"],
    requiredCss: ["media grids that switch layout by image count using `:has()`", "a sticky tab bar", "`[aria-pressed=\"true\"]` button style", "a feed + sidebar layout from 1024px"],
    steps: [
      "Build the profile header: banner, overlapping avatar, name, handle, bio and stats.",
      "Add a follow button with `aria-pressed=\"false\"`, plus a second example with `\"true\"` styled differently.",
      "Add a sticky tab bar (Posts, Replies, Media, Likes) with the current tab marked.",
      "Create five posts and lay out their media as 1-, 2-, 3- and 4-image grids using `:has()` with `:nth-child` counting.",
      "Add a who-to-follow sidebar beside the feed from 1024px."
    ],
    functionalRequirements: ["Each media layout adapts to its number of images automatically.", "The tab bar sticks to the top of the viewport while the feed scrolls."],
    responsiveRequirements: ["The sidebar moves below the feed under 1024px.", "Media grids never overflow at 360px."],
    accessibilityRequirements: ["Every post image has alt text.", "The follow button's state is exposed with `aria-pressed`."],
    hints: [
      "`.media:has(> :nth-child(3):last-child)` matches a grid with exactly three items.",
      "Relative times (\"2 h ago\") still need a `datetime` with the exact moment.",
      "Give the sticky tab bar a background so posts don't show through it."
    ]
  },
  {
    id: "p069-advanced-search-results-interface",
    number: 69,
    title: "Advanced Search Results Interface",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A search results page with a query bar, result count, facet sidebar with counts, active filter chips, results and pagination.",
    objective: "Design an information-dense results page with clear hierarchy, highlighted matches and accessible facet controls.",
    skills: ["`<mark>` for highlighted terms", "Facet groups with counts", "Removable filter chips", "A collapsible facet panel on mobile"],
    topics: ["html-forms", "html-semantic", "css-grid", "css-typography", "css-pseudo-classes", "html-accessibility"],
    estimatedMinutes: 270,
    requiredHtml: ["a search `<form role=\"search\">`", "a results-count `<p>`", "a facets `<aside>` with fieldsets and counts", "an active-filter chip `<ul>`", "10 result `<article>`s using `<mark>`", "a pagination `<nav>`"],
    requiredCss: ["`<mark>` styling that works in light and dark themes", "facet counts aligned right with `tabular-nums`", "chips with a remove × and hover/focus states", "a two-column layout that collapses below 900px"],
    steps: [
      "Build a search bar with the query pre-filled, a result count and a sort select.",
      "Add a facet sidebar with three groups (Type, Date, Author) of checkboxes with counts.",
      "Show active filters as removable chips above the results.",
      "List ten results, each with a title link, URL line, a snippet with `<mark>`ed terms and metadata.",
      "Wrap the facets in `<details open>`; hide its `<summary>` on wide screens and show it below 900px so people can collapse the panel."
    ],
    functionalRequirements: ["Every chip has a remove link with a clear label.", "Pagination marks the current page."],
    responsiveRequirements: ["Below 900px the facet panel can be collapsed with its summary.", "Long result URLs wrap or truncate without overflowing."],
    accessibilityRequirements: ["`<mark>` text keeps 4.5:1 contrast.", "The results count comes near the top, so screen-reader users hear it early."],
    hints: [
      "`overflow-wrap: anywhere` stops long URLs breaking the layout.",
      "Remove links need names such as \"Remove filter: PDF\".",
      "In a flex row, `margin-left: auto` pushes a facet count to the right."
    ]
  },
  {
    id: "p070-responsive-real-estate-website",
    number: 70,
    title: "Responsive Real Estate Website",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A property site with a hero search, listing cards with key facts, a list-and-map split view and a property detail section.",
    objective: "Build a split-view listing layout and property cards that present structured facts consistently.",
    skills: ["A split view with a sticky map column", "Fact rows with `<dl>`", "Price and status overlays", "Rotated ribbons with `transform`"],
    topics: ["css-grid", "css-overflow", "css-positioning", "html-lists", "html-forms", "css-layout-patterns"],
    estimatedMinutes: 300,
    requiredHtml: ["a hero search `<form>` (location, type, min/max price)", "8 listing `<article>`s", "a beds/baths/area `<dl>` per listing", "a map placeholder region", "a property detail `<section>` with gallery and agent card"],
    requiredCss: ["a split-view grid with a sticky map", "a price overlay positioned on the image", "a status ribbon rotated with `transform`", "a flex fact row with `gap`"],
    steps: [
      "Create a hero search form with location, property type, minimum and maximum price.",
      "Build eight listing cards with photo, price overlay, status ribbon, address and a beds/baths/area `<dl>`.",
      "From 1024px, place the listings beside a sticky map placeholder in a split view.",
      "Add a property detail section with a gallery, description, features list and an agent contact card.",
      "On mobile, show the map as a fixed-height block above the list."
    ],
    functionalRequirements: ["Listing facts are labelled (\"3 bedrooms\"), not icons alone.", "On desktop the map stays in view while the list scrolls."],
    responsiveRequirements: ["Split view from 1024px, stacked below.", "Listing cards fit without overflow at every width."],
    accessibilityRequirements: ["The \"Sold\" ribbon is real text inside the card.", "Price overlays have enough contrast."],
    hints: [
      "A rotated ribbon needs `overflow: hidden` on the card so its corners are clipped.",
      "`position: sticky; top: 0; height: 100vh` keeps a map column in view.",
      "Hide icons in fact rows with `aria-hidden` and let the text do the work."
    ]
  },
  {
    id: "p071-advanced-travel-booking-interface",
    number: 71,
    title: "Advanced Travel Booking Interface",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A flight booking flow: trip-type choice, route search, a date strip with prices, result cards with timelines and a seat map.",
    objective: "Build domain-specific components — flight timelines and a seat map — with Grid, pseudo-elements and form controls.",
    skills: ["A seat map with Grid and checkboxes", "A flight timeline with pseudo-elements", "A snapping date strip", "Trip-type radio tabs"],
    topics: ["css-grid", "html-forms", "css-pseudo-elements", "css-pseudo-classes", "css-overflow", "html-accessibility"],
    estimatedMinutes: 300,
    requiredHtml: ["a trip-type radio group", "from / to / date / passengers fields", "a date-strip `<ul>` of radio labels with prices", "4 flight result `<article>`s", "a seat map of 30 seat checkboxes, some disabled"],
    requiredCss: ["a seat grid with an aisle: `repeat(3, 1fr) 1.5rem repeat(3, 1fr)`", "checked / disabled / exit-row seat states", "a timeline line between departure and arrival via `::before`", "a horizontally scrolling date strip with snap"],
    steps: [
      "Build the search: trip-type radios, from, to, dates and passengers.",
      "Add a scrolling date strip where each day shows a price and can be selected.",
      "Create four flight results with times, a duration line with stop dots, airline and price.",
      "Build a seat map of five rows with an aisle gap, available/taken/selected states and a legend.",
      "Add a summary of the chosen flight and seats with a Continue button."
    ],
    functionalRequirements: ["Taken seats can't be selected; available seats toggle on and off.", "The date strip scrolls and snaps."],
    responsiveRequirements: ["Flight cards stack their information at 360px.", "The seat map stays usable at 360px with seats at least 32px wide."],
    accessibilityRequirements: ["Each seat checkbox has a label such as \"Seat 4C, aisle\".", "Taken seats are disabled and say \"taken\"."],
    hints: [
      "An empty grid column makes a perfect aisle.",
      "Use `input:disabled + label` with a pattern or ✕ for taken seats — not colour alone.",
      "Stops can be dots positioned along the timeline with percentages."
    ]
  },
  {
    id: "p072-css-animation-showcase",
    number: 72,
    title: "CSS Animation Showcase",
    difficulty: "advanced",
    complexity: 2,
    shortDescription: "A gallery of twelve original CSS animations — loaders, hover effects, text effects, a 3D flip and illustration loops — each in a labelled tile.",
    objective: "Explore the animation toolkit — keyframes, timing functions, `steps()`, delays, play state and 3D transforms — and document each demo.",
    skills: ["`steps()` and `cubic-bezier()` timing", "`animation-play-state`", "3D transforms with `perspective`", "Animation settings in custom properties"],
    topics: ["css-animations", "css-transforms", "css-transitions", "css-variables", "css-pseudo-elements", "css-media-queries"],
    estimatedMinutes: 300,
    requiredHtml: ["`<main>` with a grid of 12 `<figure>` demo tiles", "a `<figcaption>` naming each technique", "a pause control made from a checkbox", "`<code>` showing the key property in each caption"],
    requiredCss: ["at least 8 distinct `@keyframes`", "one `steps()` animation", "one 3D flip using `perspective` and `backface-visibility`", "`animation-play-state: paused` controlled by the checkbox", "a global reduced-motion rule"],
    steps: [
      "Plan twelve demos: three loaders, three hover effects, three text effects, a 3D card flip and two illustration loops.",
      "Build each demo in its own tile with a caption naming the technique and the key property.",
      "Use custom properties (`--duration`, `--ease`) so each tile can change timing without new rules.",
      "Add a \"Pause all animations\" checkbox that pauses every demo using `:has()`.",
      "Respect reduced motion: stop all looping demos and show a static frame instead."
    ],
    functionalRequirements: ["The pause checkbox stops every running animation.", "Every hover effect also triggers on keyboard focus."],
    responsiveRequirements: ["Tiles are 1 column at 360px and 3–4 columns on desktop.", "No animation spills outside its tile."],
    accessibilityRequirements: ["No demo flashes more than three times per second.", "Reduced-motion users see static versions."],
    hints: [
      "`steps(8)` makes an animation jump in eight frames — great for sprite-like effects.",
      "`backface-visibility: hidden` hides the back of a flipping card.",
      "`body:has(#pause:checked) *` can pause everything at once."
    ]
  },
  {
    id: "p073-advanced-component-library",
    number: 73,
    title: "Advanced Component Library",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A single-page component library documenting buttons, inputs, cards, badges, alerts, tabs and a dialog, with variants, states and usage notes.",
    objective: "Build a token-driven component library where every component has documented variants and states and one naming method.",
    skills: ["Primitive and semantic tokens", "BEM naming and modifiers", "Documenting hover, focus and disabled states", "Cascade layers with `@layer`"],
    topics: ["css-architecture", "css-variables", "css-specificity", "html-buttons", "html-forms", "css-cross-browser"],
    estimatedMinutes: 360,
    requiredHtml: ["a `<nav>` linking to each component section", "a `<section>` per component with `<h2>`", "examples of every variant and state", "a `<pre><code>` usage snippet per component", "a static `<dialog open>` example"],
    requiredCss: ["`@layer tokens, base, components, utilities`", "primitive tokens (`--teal-700`) mapped to semantic tokens (`--color-action`)", "BEM classes such as `.btn`, `.btn--secondary`, `.btn__icon`", "`.is-hover` / `.is-focus` classes that show states for documentation"],
    steps: [
      "Define primitive tokens (raw colours, sizes) and semantic tokens that reference them, in an `@layer tokens` block.",
      "Build seven components in `@layer components` using BEM: button, input, card, badge, alert, tabs and dialog.",
      "For each, show every variant (primary, secondary, danger…) and state (default, hover, focus, disabled) side by side.",
      "Add a usage snippet and a do/don't note under each component.",
      "Add a theme section showing that changing the semantic tokens re-skins every component."
    ],
    functionalRequirements: ["Every component works from its documented class names alone.", "Changing one semantic token updates every component that uses it."],
    responsiveRequirements: ["Variant rows wrap neatly at 360px.", "Code snippets scroll sideways inside their block."],
    accessibilityRequirements: ["Disabled examples use the `disabled` attribute, not only a class.", "Focus examples show a ring with at least 3:1 contrast."],
    hints: [
      "Layers declared first have the lowest priority, so utilities can come last and win.",
      "Semantic tokens describe purpose; primitive tokens describe a raw value.",
      "Documentation classes like `.is-hover` let readers see a state without hovering."
    ]
  },
  {
    id: "p074-complete-multi-page-ecommerce-front-end",
    number: 74,
    title: "Complete Multi-Page E-commerce Front End",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A five-page shop front end — home, category, product, cart and checkout — sharing one set of components.",
    objective: "Deliver a complete multi-page shop where shared components stay consistent across very different page types.",
    skills: ["Component reuse across pages", "A cart table and order summary", "A checkout form layout", "Consistent breadcrumbs and header states"],
    topics: ["css-architecture", "html-forms", "html-tables", "html-links-navigation", "css-grid", "css-responsive-design"],
    estimatedMinutes: 480,
    requiredHtml: ["5 HTML pages sharing a header and footer", "a breadcrumb `<nav>` on inner pages", "a cart `<table>` with quantity inputs and `<tfoot>` totals", "a checkout `<form>` with fieldsets and an order-summary `<aside>`", "a product page"],
    requiredCss: ["one shared stylesheet in clear sections", "a header with a basket-count badge", "a cart table that reflows into cards on mobile", "a two-column checkout grid", "no inline styles"],
    steps: [
      "Plan the shared components (header, footer, breadcrumb, product card, button, form field, summary box) and build them first.",
      "Build the home and category pages, reusing your product card.",
      "Build the product page with gallery, options and a buy box.",
      "Build the cart page with a table of items, quantity inputs, remove links and totals.",
      "Build checkout with contact, delivery and practice-payment fieldsets beside a sticky order summary."
    ],
    functionalRequirements: ["You can click through home → category → product → cart → checkout.", "Every page uses the same header with the basket badge."],
    responsiveRequirements: ["The cart table becomes stacked cards under 700px.", "The checkout summary moves above the form on mobile."],
    accessibilityRequirements: ["Quantity inputs have labels that include the product name.", "Breadcrumbs mark the last item with `aria-current=\"page\"`."],
    hints: [
      "Build the most-reused components first — you'll change them less later.",
      "A summary that comes first on mobile but second on desktop is easy with grid areas.",
      "Never collect real payment details in a practice project; label the fields as examples."
    ]
  },
  {
    id: "p075-complete-modern-saas-website",
    number: 75,
    title: "Complete Modern SaaS Website",
    difficulty: "advanced",
    complexity: 3,
    shortDescription: "A four-page software marketing site — home, features, pricing, blog index — with light and dark themes built from tokens.",
    objective: "Build a complete marketing site whose token-based colours switch between light and dark with `prefers-color-scheme`.",
    skills: ["Theming with `prefers-color-scheme`", "Semantic colour tokens", "Shared marketing components", "Theme-aware images with `<picture>`"],
    topics: ["css-variables", "css-media-queries", "css-architecture", "css-colors-backgrounds", "html-metadata", "css-layout-patterns"],
    estimatedMinutes: 480,
    requiredHtml: ["4 pages with a shared header and footer", "`<meta name=\"color-scheme\" content=\"light dark\">`", "feature detail sections", "pricing with a comparison table", "a blog index with 6 post cards"],
    requiredCss: ["semantic tokens redefined inside `@media (prefers-color-scheme: dark)`", "`color-scheme: light dark` on `:root`", "a `<picture>` source with `media=\"(prefers-color-scheme: dark)\"`", "shared section and card components"],
    steps: [
      "Define semantic colour tokens (`--color-bg`, `--color-text`, `--color-accent`…) and use only those in components.",
      "Redefine them inside `@media (prefers-color-scheme: dark)` and set `color-scheme` so form controls match.",
      "Build Home (hero, logos, features preview, CTA), Features (alternating sections) and Pricing (cards + table).",
      "Build a Blog index with six cards and category chips.",
      "Switch your operating system's theme and check every page in both modes."
    ],
    functionalRequirements: ["The whole site follows the operating system's theme.", "The navigation marks the current page."],
    responsiveRequirements: ["Every page works at 360px with no horizontal scroll.", "The pricing table scrolls or reflows on mobile."],
    accessibilityRequirements: ["Both themes pass 4.5:1 contrast for text.", "Focus rings are visible in both themes."],
    hints: [
      "If a component uses a raw colour, it won't change with the theme — search for hex values.",
      "`color-scheme` makes scrollbars and form controls match the theme.",
      "`<source media=\"(prefers-color-scheme: dark)\">` swaps an image per theme."
    ]
  }
]);
