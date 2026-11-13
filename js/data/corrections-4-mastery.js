/*
 * corrections-4-mastery.js — self-check corrections for projects 76–100
 * ---------------------------------------------------------------------
 * Same structure as corrections-1-beginner.js. Mastery checklists lean more
 * on testing methods (zoom, keyboard, forced colours, print, two browsers).
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.corrections = Object.assign(HCM.data.corrections || {}, {
  76: {
    expectedHtml: ["A hero with one oversized `<h1>`.", "Services `<ul>`, three case-study `<article>`s, a process `<ol>`, team, clients and contact sections.", "A footer with contact details."],
    expectedCss: ["A fluid scale: `--step-0` … `--step-5` built with `clamp()`.", "`.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); }` with asymmetric placements like `grid-column: 2 / 8`.", "`a { background: linear-gradient(currentColor 0 0) 0 100% / 0 2px no-repeat; transition: background-size .3s; } a:hover, a:focus-visible { background-size: 100% 2px; }`", "Section spacing only from tokens."],
    checks: {
      functional: ["Tab to links, cards and buttons: each micro-interaction plays on focus as on hover.", "Click each case study: it reaches its anchor or placeholder page."],
      responsive: ["At 767px asymmetric compositions become tidy single columns.", "At 320px the hero headline doesn't overflow."],
      accessibility: ["Turn on reduced motion: underlines and zooms appear without animation.", "Check headings: display sizes are still h1 → h2 → h3 in order."]
    },
    commonMistakes: [
      { mistake: "Ten different font sizes picked by eye.", fix: "Use a defined fluid scale and stick to its steps." },
      { mistake: "Micro-interactions on hover only.", fix: "Mirror every hover effect on `:focus-visible`." },
      { mistake: "Asymmetry that becomes chaos on tablets.", fix: "Plan placements per breakpoint, not just for desktop." }
    ]
  },
  77: {
    expectedHtml: ["A labelled radio group (Grid / List / Spotlight) inside the same parent as the project list.", "Nine `<article>` projects marked up once.", "Two case-study pages built from the same template classes."],
    expectedCss: ["Base `.project` styles, then `.work:has(#view-list:checked) .projects { … }` and `.work:has(#view-spotlight:checked) …` overrides.", "Spotlight: `.project:first-child { grid-column: 1 / -1; }`", "Case-study classes (`.cs-hero`, `.cs-section`, `.cs-results`) reused on both pages.", "Optional `@view-transition { navigation: auto; }` without breaking other browsers."],
    checks: {
      functional: ["Switch between the three layouts: the same nine projects rearrange each time.", "Open both case-study pages: they share structure and styling."],
      responsive: ["At 360px all three layouts are usable; spotlight becomes a stack.", "At 360px no page scrolls sideways."],
      accessibility: ["Switch layouts and read with a screen reader or reader view: project order is unchanged.", "Use the arrow keys on the switcher: it behaves as a radio group."]
    },
    commonMistakes: [
      { mistake: "Three copies of the project markup, one per layout.", fix: "Keep one list and change only the CSS." },
      { mistake: "Reordering items visually with `order` per layout.", fix: "Keep the reading order consistent." },
      { mistake: "Relying on view transitions for navigation to work.", fix: "Treat them as an optional enhancement." }
    ]
  },
  78: {
    expectedHtml: ["Four linked pages: catalogue, course, lesson, dashboard.", "A lesson page with `<video controls>`, a captions `<track>`, a transcript `<details>` and a syllabus `<ol>` with `aria-current=\"step\"`.", "`<progress max=\"100\" value>` with labels on the dashboard."],
    expectedCss: ["`.lesson { display: grid; grid-template-columns: minmax(0, 1fr) 20rem; }` from 1024px.", "`.lesson-row--done`, `--current`, `--locked` states with icons and text.", "`progress::-webkit-progress-value`, `progress::-webkit-progress-bar` and `progress::-moz-progress-bar` styles.", "Shared `.course-card` and `.badge` components."],
    checks: {
      functional: ["Follow catalogue → course → lesson → dashboard: links connect the screens.", "Turn on captions in the lesson video: text appears; open the transcript: the full text is there."],
      responsive: ["At 1023px the syllabus moves below the video.", "Resize the catalogue: 1 → 2 → 3 columns."],
      accessibility: ["Read each syllabus lesson: its status is written in words.", "Inspect a progress bar: its label includes the percentage."]
    },
    commonMistakes: [
      { mistake: "Progress bars styled in one browser only.", fix: "Style both WebKit and Firefox pseudo-elements." },
      { mistake: "Current lesson shown only by bold text.", fix: "Add `aria-current=\"step\"` and a visible marker." },
      { mistake: "Video with no captions or transcript.", fix: "Provide a `.vtt` track and a text transcript." }
    ]
  },
  79: {
    expectedHtml: ["A campaign hero and a 12-product grid; each product has two stacked images and a quick-view link to `#qv-N`.", "Quick-view panels with ids, a size-guide `<table>`, a lookbook section.", "Labelled language and currency `<select>`s."],
    expectedCss: ["Logical properties throughout: `margin-inline`, `padding-block`, `inset-inline-start`, `border-inline-start`.", "`.product__media { display: grid; } .product__media img { grid-area: 1 / 1; } .product:hover .alt, .product:focus-within .alt { opacity: 1; }`", "`.quickview { display: none; position: fixed; inset: 0; } .quickview:target { display: grid; }`", "Overlapping lookbook images placed in shared grid cells."],
    checks: {
      functional: ["Tab to a product: its second image appears just as on hover.", "Open a quick view and close it with the keyboard."],
      responsive: ["At 360px the grid shows two products per row; at 1280px four.", "At 360px a quick view fills the screen."],
      accessibility: ["Add `dir=\"rtl\"` to `<html>`: the layout mirrors cleanly with no broken spacing.", "Inspect the size guide: caption and header cells are present."]
    },
    commonMistakes: [
      { mistake: "`margin-left` and `padding-right` everywhere, so RTL breaks.", fix: "Use logical properties from the start." },
      { mistake: "Hover-only image swap.", fix: "Add `:focus-within` so keyboard users see it too." },
      { mistake: "A quick view that traps you with no visible close.", fix: "Put a close link first inside each panel." }
    ]
  },
  80: {
    expectedHtml: ["Account cards with masked numbers and `<data>` balances.", "A transfer `<form>` with labelled selects, `<input type=\"number\" min=\"0.01\" step=\"0.01\">`, date and reference, plus helper text.", "A transaction `<table>` with date group header rows and a security `<aside>`."],
    expectedCss: ["`td.amount { text-align: right; font-variant-numeric: tabular-nums; }`", "`:focus-visible { outline: 3px solid …; outline-offset: 2px; }`", "`.group-row th { position: sticky; top: 0; }` inside a scroll container.", "CSS comments listing contrast ratios of the main colour pairs."],
    checks: {
      functional: ["Type −50 or 10.555 into the amount: the browser rejects it.", "Scroll the transaction list: each date header sticks until the next group arrives."],
      responsive: ["At 360px account cards stack and the table scrolls inside its box.", "At 360px the transfer form is a single column."],
      accessibility: ["Tab through the transfer form: every field has a label and helper text where needed.", "View the dashboard in greyscale: incoming and outgoing money are still distinguishable."]
    },
    commonMistakes: [
      { mistake: "A currency symbol typed into the input value.", fix: "Show it as a positioned prefix outside the value." },
      { mistake: "Thin, low-contrast focus outlines.", fix: "Use at least 3px with 3:1 contrast." },
      { mistake: "Showing full account numbers.", fix: "Mask all but the last four digits." }
    ]
  },
  81: {
    expectedHtml: ["An emergency `<aside>` at the very top with a `tel:` link.", "Skip link, landmarks, services list, doctor search `<form>` and results.", "An appointment `<form>` with fieldsets, and resource links stating file type and size."],
    expectedCss: ["`body { font-size: 1.125rem; }` or larger.", "`a, button, input, select { min-height: 48px; }`", "A strong `:focus-visible` style visible on every control.", "Body text and background chosen for 7:1 contrast."],
    checks: {
      functional: ["Click the emergency phone link: it starts a call (or offers to).", "Submit the appointment form with a missing field: the error text sits next to that field."],
      responsive: ["Zoom the browser to 200% at 1280px: nothing needs horizontal scrolling.", "At 360px doctor cards stack and text is readable without zoom."],
      accessibility: ["Measure body text contrast: at least 7:1.", "Read every resource link: it states the file type and size."]
    },
    commonMistakes: [
      { mistake: "Small grey text that looks calm but fails contrast.", fix: "Aim for 7:1 on body text in a healthcare context." },
      { mistake: "Emergency information buried in the footer.", fix: "Put it first on the page." },
      { mistake: "\"Download\" links without telling users what they get.", fix: "State the file type and size in the link text." }
    ]
  },
  82: {
    expectedHtml: ["A listing page with cuisine chips and eight restaurant `<article>`s.", "A menu page with a sticky category `<nav>`, four `<section id>`s and an item customisation `<form>`.", "A basket `<aside>` and delivery/pickup radios."],
    expectedCss: ["`.categories { position: sticky; top: 0; overflow-x: auto; scroll-snap-type: x proximity; }` with `scroll-snap-align: start` on links.", "`section { scroll-margin-top: 4rem; }`", "`.basket { position: sticky; top: 1rem; }` on desktop and `position: fixed; bottom: 0;` bar on mobile, plus matching page padding.", "`.order:has(#pickup:checked) .fee { display: none; }`"],
    checks: {
      functional: ["Choose Pickup: the delivery fee line disappears; choose Delivery: it returns.", "Click a category link: its heading appears below the sticky nav."],
      responsive: ["At 360px scroll to the bottom: the last menu item isn't hidden by the basket bar.", "Resize the listing: 1 → 4 columns."],
      accessibility: ["Read a restaurant card: rating and delivery time are text.", "Inspect the mobile basket bar: labelled and at least 4.5:1 contrast."]
    },
    commonMistakes: [
      { mistake: "Fixed bottom bar covering content.", fix: "Add bottom padding to the page equal to the bar height." },
      { mistake: "Sticky nav covering section headings after jumping.", fix: "Use `scroll-margin-top`." },
      { mistake: "Custom options as clickable `<div>`s.", fix: "Use radios and checkboxes inside labels." }
    ]
  },
  83: {
    expectedHtml: ["A discovery page with filters and nine destination cards.", "An itinerary with four day `<section>`s, each with an `<h2>` date and an `<ol>` of timed activities.", "Three comparison cards and a summary page with a `<dl>` and costs `<table>`."],
    expectedCss: ["`.compare { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(5, auto); } .compare > .card { grid-row: span 5; display: grid; grid-template-rows: subgrid; }` inside `@supports`, with a fallback.", "Timeline line and dots via pseudo-elements.", "`@media print { nav, footer { display: none; } a[href]::after { content: \" (\" attr(href) \")\"; } }`", "A shared `.chip` component."],
    checks: {
      functional: ["Make one hotel's amenities list longer: rows still align across all three cards.", "Print-preview the summary page: no navigation, link URLs visible."],
      responsive: ["At 899px comparison cards stack.", "At 360px the itinerary timeline is readable."],
      accessibility: ["Navigate the itinerary by headings: each day heading includes its date.", "Read the comparison with a screen reader or reader view: each card's facts come in a sensible order."]
    },
    commonMistakes: [
      { mistake: "Fixed row heights to fake alignment.", fix: "Use `subgrid` so rows size to the tallest content." },
      { mistake: "No fallback where subgrid isn't supported.", fix: "Wrap it in `@supports` and keep a simple stacked layout." },
      { mistake: "Print styles that print the navigation and background colours.", fix: "Hide chrome and simplify colours in `@media print`." }
    ]
  },
  84: {
    expectedHtml: ["A results page with saved-search chips and listings using `.listing` and `.listing--compact`.", "A detail page with gallery, facts `<dl>` and a floor-plan `<figure>` with a text description.", "A mortgage `<form>` with labelled range inputs and `<output for>`."],
    expectedCss: ["The compact modifier only overrides layout differences.", "`input[type=\"range\"]::-webkit-slider-thumb` and `::-moz-range-thumb` (and track) styles.", "`.detail { display: grid; grid-template-columns: minmax(0, 1fr) 20rem; } .agent { position: sticky; top: 1rem; }`", "`.facts { grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); }`"],
    checks: {
      functional: ["Compare compact and detailed listings in DevTools: they share the `.listing` base class.", "Read each range input: its current example value is shown in an `<output>`."],
      responsive: ["At 360px the detail gallery scrolls sideways.", "At 1023px the agent panel is below the content."],
      accessibility: ["Inspect the range inputs: labels plus visible min and max values.", "Read the floor-plan figure: a text description explains the layout."]
    },
    commonMistakes: [
      { mistake: "Copying the full listing CSS for the compact variant.", fix: "Override only what changes." },
      { mistake: "Range thumbs styled in Chrome but default in Firefox.", fix: "Add the `-moz-` pseudo-elements too." },
      { mistake: "A floor plan image with alt \"floor plan\".", fix: "Describe the rooms and layout in text." }
    ]
  },
  85: {
    expectedHtml: ["A header with environment and time-range controls.", "Six KPI widgets with `<svg role=\"img\" aria-label>` sparklines.", "A heatmap `<figure>` with a table alternative, a status `<table>` and an incidents `<ol>` with severity text."],
    expectedCss: ["`.widgets { display: grid; grid-template-columns: repeat(12, 1fr); }` with `.w-3`, `.w-4`, `.w-6`, `.w-12` spans.", "`.widget { container-type: inline-size; }` with `@container` rules.", "`.cell { background: color-mix(in srgb, var(--accent) calc(var(--level) * 10%), transparent); }` with a fallback.", "Status cells combining an icon and text."],
    checks: {
      functional: ["Change one cell's `--level` from 2 to 9: it becomes much darker.", "Find the table version of the heatmap: it holds the same numbers."],
      responsive: ["Resize from 1440px to 360px: the widget grid goes 12 → 6 → 1 columns with no gaps.", "At 360px the heatmap scrolls inside its widget."],
      accessibility: ["Read each sparkline's `aria-label`: it summarises the trend in words.", "View the status table in greyscale: every status is readable as text."]
    },
    commonMistakes: [
      { mistake: "Charts with no text alternative.", fix: "Pair every visual with a table, list or summary." },
      { mistake: "Media queries that ignore where a widget is placed.", fix: "Use container queries inside widgets." },
      { mistake: "Status shown only by red/amber/green.", fix: "Add text and shapes." }
    ]
  },
  86: {
    expectedHtml: ["A docs layout with nav and sections: Tokens, Typography, Layout, Components, Patterns.", "Swatches listing values and contrast ratios as text; type specimens.", "Live examples, code snippets and do/don't blocks."],
    expectedCss: ["`@layer reset, tokens, base, layout, components, utilities;`", "`.stack > * + * { margin-block-start: var(--space); }`, `.cluster { display: flex; flex-wrap: wrap; gap: … }`, `.with-sidebar`, `.switcher > * { flex-basis: calc((30rem - 100%) * 999); }`", "Fluid type and space scales with `clamp()`.", "No ID selectors and no `!important` outside the utilities layer."],
    checks: {
      functional: ["Copy one component and the stylesheet into a blank page: it looks identical.", "Change a semantic colour token: the whole docs site updates."],
      responsive: ["Resize the switcher example: it flips from row to column without a media query.", "At 899px the docs nav collapses."],
      accessibility: ["Read a swatch: hex value and contrast ratio are written as text.", "Tab through every interactive example: all are keyboard-operable."]
    },
    commonMistakes: [
      { mistake: "Layout primitives full of breakpoints.", fix: "Use intrinsic techniques (flex-basis maths, `minmax()`) instead." },
      { mistake: "`!important` used to win specificity fights.", fix: "Fix the layer order or lower selector specificity." },
      { mistake: "Docs that show components but no rules for using them.", fix: "Add guidelines and do/don't examples." }
    ]
  },
  87: {
    expectedHtml: ["Four pages with a shared masthead and footer.", "On every page: `<meta name=\"description\">` and Open Graph `property=\"og:title\"`, `og:description`, `og:image`.", "Front page with lead/secondary/brief stories, an article with figures and pull quotes, and an author page with an archive `<ol>`."],
    expectedCss: ["Role classes: `.kicker`, `.headline-xl/l/m`, `.standfirst`, `.byline`, `.caption`.", "Story weight modifiers: `.story--lead`, `--secondary`, `--brief`.", "The breakout article grid.", "`@media print` for articles."],
    checks: {
      functional: ["Click through all four pages from the masthead: every link works.", "Print-preview an article: navigation and promos are gone."],
      responsive: ["Resize the front page: three distinct layouts appear at your breakpoints.", "At 360px an article is comfortable to read."],
      accessibility: ["Check headings on each page: one h1 and no skipped levels.", "Inspect captions: each sits inside its `<figure>`."]
    },
    commonMistakes: [
      { mistake: "Open Graph tags with `name=` instead of `property=`.", fix: "Use `property=\"og:…\"`." },
      { mistake: "Headline sizes chosen per story by hand.", fix: "Use the typographic role classes." },
      { mistake: "Rebuilding the article grid from scratch on each page.", fix: "Reuse one breakout grid class." }
    ]
  },
  88: {
    expectedHtml: ["A `<form>` with four fieldsets: frame, colour, wheels, extras.", "Option cards as labelled radios; colour radios with text names; extras checkboxes.", "A preview `<figure>` with inline SVG and a summary `<aside>` with one line per possible option."],
    expectedCss: ["`.bike .frame { fill: var(--frame); transition: fill .3s; }`", "`form:has(#color-red:checked) { --frame: #c0392b; }` (one per colour).", "`.summary [data-option] { display: none; } form:has(#wheels-carbon:checked) [data-option=\"wheels-carbon\"] { display: list-item; }`", "Selected option cards styled from `input:checked + label` or `label:has(:checked)`."],
    checks: {
      functional: ["Choose each colour in turn: the bike preview recolours each time.", "Tick two extras: exactly those two appear in the summary."],
      responsive: ["At 1024px the preview stays beside the options while you scroll.", "At 360px option cards are full width."],
      accessibility: ["Inspect a colour option: its label has a text name.", "Read the summary with a screen reader or reader view: the chosen options are listed as text."]
    },
    commonMistakes: [
      { mistake: "Hard-coding the SVG colours so CSS can't change them.", fix: "Use `fill: var(--frame)` in the SVG's CSS." },
      { mistake: "Summary lines that show every option at once.", fix: "Hide all lines by default and reveal the chosen ones with `:has()`." },
      { mistake: "Colour swatches with no text.", fix: "Add a visible or visually hidden colour name." }
    ]
  },
  89: {
    expectedHtml: ["An overview with plan card, renewal `<time>` and labelled `<meter>`s.", "A plan-change form, an invoices `<table>` with status text, and payment-method cards with last-four masking.", "Two cancellation pages: a reasons form and a consequences confirmation."],
    expectedCss: ["`.status--active`, `--past-due`, `--cancelled` badges with text.", "Meters with `low`/`high` colours.", "One card component across every page.", "`.button--danger` used only on destructive actions."],
    checks: {
      functional: ["Start from the overview: Cancel subscription is as visible as Upgrade.", "Go through cancellation: page two clearly lists what you keep and lose."],
      responsive: ["At 699px invoices become stacked rows.", "At 360px every meter still shows its label and value."],
      accessibility: ["Read every destructive button: it says exactly what it does.", "Read each meter's label: value and limit are included."]
    },
    commonMistakes: [
      { mistake: "A tiny grey cancel link hidden at the bottom.", fix: "Give cancel equal visibility — design ethically." },
      { mistake: "Guilt-trip copy (\"No, I don't want to save money\").", fix: "Write neutral, honest button labels." },
      { mistake: "Danger colour used for normal actions.", fix: "Reserve it for destructive actions only." }
    ]
  },
  90: {
    expectedHtml: ["A view-switcher `<nav>`.", "Four board columns, each a `<section>` with `<h2>` and a `<ul>` of task `<article>`s.", "A list `<table>`, a timeline whose bars carry `style=\"--start: 3; --end: 7\"`, and a task `<aside id>`."],
    expectedCss: ["`.board { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; } .column { flex: 0 0 18rem; scroll-snap-align: start; }`", "`.timeline { display: grid; grid-template-columns: repeat(14, minmax(3rem, 1fr)); } .bar { grid-column: var(--start) / var(--end); }`", "`[data-label=\"bug\"] { background: …; }` chip colours.", "`.task-panel:target { transform: none; }`"],
    checks: {
      functional: ["Change a task's `--end` from 7 to 10: its bar stretches three more days.", "Click a task: the detail panel opens; close it again."],
      responsive: ["At 360px swipe the board: columns snap one at a time.", "At 360px the timeline scrolls inside its container."],
      accessibility: ["Navigate by headings: each column's heading names it.", "Inspect an initials avatar: the full name is available as text."]
    },
    commonMistakes: [
      { mistake: "The whole page scrolls sideways with the board.", fix: "Contain the overflow in the board element." },
      { mistake: "Timeline bars sized with pixel widths.", fix: "Place them with `grid-column` from data." },
      { mistake: "Avatars with only initials.", fix: "Provide the full name for screen readers." }
    ]
  },
  91: {
    expectedHtml: ["Four pages sharing an app shell with primary nav and a tab row (`aria-current`).", "A funnel `<ol>` with values and conversion text.", "A cohort `<table>` with percentage cells and a report builder with fieldsets and a preview."],
    expectedCss: ["`.step { width: calc(var(--value) * 1%); clip-path: polygon(…); }`", "`td { background: #e6f4f1; background: color-mix(in srgb, var(--accent) calc(var(--pct) * 1%), white); }`", "A three-panel builder grid that stacks under 1100px.", "A naming-convention comment at the top of the CSS."],
    checks: {
      functional: ["Change a funnel step's `--value`: its width follows.", "Find the 80% and 20% cohort cells: the 80% one is clearly darker."],
      responsive: ["At 1099px builder panels stack.", "At 360px the cohort table scrolls in its container."],
      accessibility: ["Inspect funnel steps and cohort cells: the numbers are text in the HTML.", "Inspect the tab row: the current tab is marked."]
    },
    commonMistakes: [
      { mistake: "No fallback before `color-mix()`.", fix: "Declare a solid background first." },
      { mistake: "Numbers only visible as bar widths.", fix: "Print the values as text too." },
      { mistake: "Every page inventing its own header layout.", fix: "Share one app shell across pages." }
    ]
  },
  92: {
    expectedHtml: ["Five editorial `<section>`s with headings, text and media.", "A feature with a vertical-title heading.", "Full-bleed images and a credits `<footer>`."],
    expectedCss: ["`.page { display: grid; grid-template-columns: [full-start] repeat(16, [col] 1fr) [full-end]; }` (or similar named lines).", "Overlapping items sharing rows/columns with explicit `z-index`.", "`.vertical { writing-mode: vertical-rl; }`", "Distinct `grid-template-areas` per section at three breakpoints, plus `subgrid` inside `@supports`."],
    checks: {
      functional: ["Turn off CSS: every section reads in a logical order.", "Check each overlap: text crossing images stays readable."],
      responsive: ["View each section at 360px, 768px and 1280px: each has a designed layout at all three.", "At 320px nothing overflows."],
      accessibility: ["Read the vertical title: it's short or repeated in readable form nearby.", "Tab through the page: no link is hidden under an overlapping image."]
    },
    commonMistakes: [
      { mistake: "Overlaps built with negative margins that break on resize.", fix: "Place overlapping items on shared grid lines." },
      { mistake: "Mobile left as an accidental stack.", fix: "Design a mobile composition for each section." },
      { mistake: "Long passages set vertically.", fix: "Keep vertical text to short display titles." }
    ]
  },
  93: {
    expectedHtml: ["Four pages including an Accessibility statement.", "Skip link, landmarks, one `<h1>` per page and consistent navigation.", "A contact form with labels, hints and an error-summary list of links to field ids; a Services `<table>` with caption and headers."],
    expectedCss: ["`:focus-visible { outline: 3px solid …; outline-offset: 2px; }`", "Interactive targets at least 24 × 24px (44px for main actions).", "`@media (forced-colors: active) { … border: 1px solid CanvasText; }` and reduced-motion rules.", "No fixed heights on text containers."],
    checks: {
      functional: ["Click an error-summary link: focus jumps to the related field.", "Use the whole site with Tab, Shift+Tab and Enter only."],
      responsive: ["Set the window to 320px wide (like 400% zoom): no horizontal scroll.", "Apply a text-spacing bookmarklet or override (line-height 1.5, letter-spacing .12em): no text is clipped."],
      accessibility: ["Turn on a Windows contrast theme: borders and focus stay visible.", "Read your statement: it names the standard, test methods, known issues and a contact."]
    },
    commonMistakes: [
      { mistake: "Fixed-height cards that clip text when spacing increases.", fix: "Let containers grow with content." },
      { mistake: "Box shadows as the only focus indicator (invisible in forced colours).", fix: "Use outlines, which forced-colours mode keeps." },
      { mistake: "An accessibility statement claiming full compliance without testing.", fix: "Describe real tests and known limitations honestly." }
    ]
  },
  94: {
    expectedHtml: ["Public showcase and careers pages; portal dashboard and brief-form pages.", "Project status cards with labelled `<progress>`.", "A brief form with fieldsets, `<input type=\"file\" accept>` and a labelled budget range."],
    expectedCss: ["Shared tokens plus `.theme-portal { --space: …; --color-surface: …; }` overrides.", "`@supports (animation-timeline: view()) { .reveal { animation: reveal linear both; animation-timeline: view(); } }` with visible default state.", "A portal grid of 3 → 1 columns.", "Form components shared by both contexts."],
    checks: {
      functional: ["Compare a button on a public page and in the portal: same class, context-adjusted look.", "Upload a file type outside `accept`: the picker filters it out by default."],
      responsive: ["Resize the portal: 3 columns become 1.", "At 360px showcase reveals cause no sideways scroll."],
      accessibility: ["Open the showcase in a browser without scroll-driven animations: all content is visible.", "Read portal statuses: written as text."]
    },
    commonMistakes: [
      { mistake: "Two separate stylesheets that drift apart.", fix: "One system with a context class overriding tokens." },
      { mistake: "Content hidden until an animation that never runs.", fix: "Make the default state visible; animate only inside `@supports`." },
      { mistake: "Portal density changes done by editing every component.", fix: "Change spacing tokens on the context class." }
    ]
  },
  95: {
    expectedHtml: ["A reference page with 15 component sections, each showing variants, sizes and states.", "An API `<table>` per component listing classes, custom properties and states.", "A theme preview area showing two themes side by side."],
    expectedCss: ["`:where(.btn) { background: var(--btn-bg); padding: var(--btn-pad); }`", "`@layer tokens, base, components, variants, utilities;`", "`.btn--danger { --btn-bg: …; } .btn--lg { --btn-pad: …; }` (variants set properties only).", "`@media (forced-colors: active)` adjustments."],
    checks: {
      functional: ["Combine `.btn--danger` with `.btn--lg`: both apply without conflict.", "Add a utility like `.u-mt-0` to a component: it wins without `!important`."],
      responsive: ["At 360px API tables scroll inside their containers.", "Increase the browser font size: components scale up."],
      accessibility: ["Tab through all 15 components: focus looks consistent.", "Check interactive components: each is a native element (button, input, details…)."]
    },
    commonMistakes: [
      { mistake: "Variant classes repeating full declarations.", fix: "Variants should only set custom property values." },
      { mistake: "High-specificity base selectors that utilities can't beat.", fix: "Wrap base selectors in `:where()`." },
      { mistake: "Tooltip and dialog built from `<div>`s with no semantics.", fix: "Use native elements and attributes where possible." }
    ]
  },
  96: {
    expectedHtml: ["Six pages: home, search, listing, seller profile, messages, seller dashboard.", "Messages with a conversation `<ul>` of links and a thread `<section id>` with sender and `<time>` per message.", "A create-listing form with file uploads and price; reviews with text ratings."],
    expectedCss: ["`.messages { display: grid; grid-template-columns: 20rem 1fr; height: …; } .list, .thread { overflow: auto; }`", "`.bubble--sent { margin-inline-start: auto; }`", "Under 768px: `.thread { display: none; } .thread:target { display: block; }` with the list hidden when a thread is targeted.", "Shared trust badges and listing cards."],
    checks: {
      functional: ["Go home → search → listing → Message seller: you reach the right thread.", "Scroll the thread at 1280px: the conversation list doesn't move."],
      responsive: ["At 767px choose a conversation: the thread replaces the list.", "Open all six pages at 360px: none scroll sideways."],
      accessibility: ["Read a chat message: sender and time are in the text.", "Read the trust badges: \"Verified seller\" is written, not just an icon."]
    },
    commonMistakes: [
      { mistake: "Chat bubbles aligned with `margin-left: auto`, breaking in RTL.", fix: "Use `margin-inline-start`." },
      { mistake: "Both panes scrolling the whole page.", fix: "Give the message layout a height and scroll each pane." },
      { mistake: "A different card design on each page.", fix: "Reuse the listing card component." }
    ]
  },
  97: {
    expectedHtml: ["An app shell with nested `<details>` navigation (current section `open`) and an organisation `<select>` with label.", "User-management and audit-log tables with `<time datetime>`.", "A system-health panel listing services and states."],
    expectedCss: ["`.compact { --space-1: …; --space-2: …; }` density override.", "Toolbar and bulk-action bar components.", "`.status--outage::before { content: \"■\"; }`, `--degraded` ▲, `--ok` ● with text.", "`.page-header { position: sticky; top: 0; }` inside the scrolling main."],
    checks: {
      functional: ["Open a nested page: its parent section is expanded and the page marked current.", "Add the compact class to the shell: spacing tightens everywhere."],
      responsive: ["At 1023px navigation moves into a top menu.", "At 360px tables scroll inside their containers."],
      accessibility: ["View statuses in greyscale: shapes and words still distinguish them.", "Inspect audit timestamps: each is a `<time datetime>`."]
    },
    commonMistakes: [
      { mistake: "Status dots that differ only in colour.", fix: "Combine colour with shape and text." },
      { mistake: "Compact mode done by editing dozens of rules.", fix: "Switch spacing tokens on one wrapper." },
      { mistake: "All nav sections collapsed, hiding where the user is.", fix: "Open the parent of the current page by default." }
    ]
  },
  98: {
    expectedHtml: ["Seven pages: home, pricing, sign-in, onboarding, dashboard, settings, help.", "Onboarding with a step indicator using `aria-current=\"step\"`; settings with a sub-nav and grouped forms.", "Help-centre home with search and one article page; unique `<title>` and `<h1>` everywhere."],
    expectedCss: ["Shared tokens with marketing and app layout primitives.", "A split-screen auth layout that stacks on mobile.", "`.settings { display: grid; grid-template-columns: 14rem 1fr; } .settings-nav { position: sticky; top: 1rem; }`", "One form and button system on all pages."],
    checks: {
      functional: ["Click from marketing home → sign-in → onboarding → dashboard: the journey works.", "Compare a text field on sign-in and settings: identical component."],
      responsive: ["Open all seven pages at 360px: no sideways scroll.", "At 1023px app pages switch to the mobile navigation."],
      accessibility: ["Check each page's title and `<h1>`: unique and descriptive.", "Inspect the onboarding indicator: the current step is exposed."]
    },
    commonMistakes: [
      { mistake: "Auth pages with no way back home.", fix: "Keep a logo link to the home page." },
      { mistake: "Each page restyling buttons slightly differently.", fix: "Use one button component everywhere." },
      { mistake: "Building pages before listing components.", fix: "Write the component inventory first." }
    ]
  },
  99: {
    expectedHtml: ["A docs page for commerce tokens and 12 components.", "A price component: `<del>` with \"Was\" text, `<ins>` with \"Now\", and `<data value>`.", "A rating with a text equivalent, and two templates built only from documented classes."],
    expectedCss: ["`@layer tokens, base, components, utilities;`", "Component APIs such as `--price-sale-color`, `--card-radius`.", "`.brand-b { --color-accent: …; --font-display: …; }` theme switch.", "Zero CSS written specifically for the templates."],
    checks: {
      functional: ["Search the CSS for template-specific selectors: there are none.", "Add `.brand-b` to the templates' `<html>`: every component re-skins."],
      responsive: ["At 360px both templates work without sideways scroll.", "At 360px docs tables scroll in their containers."],
      accessibility: ["Read a sale price with a screen reader or reader view: \"Was … Now …\" is clear.", "Inspect quantity fields: labelled number inputs."]
    },
    commonMistakes: [
      { mistake: "Patching templates with one-off CSS.", fix: "Add the missing variant to the system instead." },
      { mistake: "Strikethrough as the only sign of an old price.", fix: "Add \"Was\"/\"Now\" text." },
      { mistake: "Brand themes overriding component internals.", fix: "Change tokens only." }
    ]
  },
  100: {
    expectedHtml: ["Six or more pages with shared header/footer, a 404 page and complete metadata (title, description, Open Graph, favicon).", "At least one form, one data table and one media element.", "A `README.md` covering decisions, structure, limitations and next steps."],
    expectedCss: ["Tokens and `@layer` architecture.", "Fluid type and spacing scales.", "`@media print`, `prefers-reduced-motion` and `forced-colors` rules.", "Layouts that hold from 320px to 2560px."],
    checks: {
      functional: ["Click every internal link on every page: no broken links or images.", "Open a missing page path in your local server or open `404.html`: it links back home."],
      responsive: ["Test each page at 320px, 768px, 1280px and 2560px: no sideways scroll, each layout deliberate.", "Zoom to 200% and 400%: content reflows and stays usable."],
      accessibility: ["Run your WCAG 2.2 AA checklist on every page and fix every failure.", "Test with reduced motion, a forced-colours theme and print preview."]
    },
    commonMistakes: [
      { mistake: "Starting to code without a brief or site map.", fix: "Write the brief and inventory first." },
      { mistake: "Testing only in one browser at one width.", fix: "Follow the full test list — two browsers, many widths, zoom and preferences." },
      { mistake: "A README that lists files but no decisions.", fix: "Explain why you built it this way and what you'd improve." }
    ]
  }
});
