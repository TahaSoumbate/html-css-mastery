/*
 * projects-4-mastery.js — Level 4: Mastery (projects 76–100)
 * ----------------------------------------------------------
 * Focus: professional visual composition, accessibility, maintainability,
 * responsive architecture, complex components and polished real-world
 * interfaces. These briefs combine skills like real client assignments.
 * Same fields as projects-1-beginner.js.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.projects = (HCM.data.projects || []).concat([
  {
    id: "p076-professional-agency-website",
    number: 76,
    title: "Professional Agency Website",
    difficulty: "mastery",
    complexity: 1,
    shortDescription: "A digital agency site with an editorial hero, services, case studies, a process timeline, team, clients and contact.",
    objective: "Create a polished, brand-led website with confident typography, generous whitespace and refined micro-interactions.",
    skills: ["An editorial type scale with `clamp()`", "Asymmetric 12-column compositions", "Refined hover and focus micro-interactions", "Consistent vertical rhythm"],
    topics: ["css-typography", "css-grid", "css-transitions", "css-layout-patterns", "css-variables", "html-semantic"],
    estimatedMinutes: 600,
    requiredHtml: ["a hero with an oversized headline", "a services `<ul>` of 6", "a case-studies section with 3 large `<article>`s", "a process `<ol>` of 5 steps", "team, clients and contact sections", "`<footer>`"],
    requiredCss: ["a fluid type scale with 5+ `clamp()` steps", "asymmetric placements on a 12-column grid", "an animated link underline using `background-size`", "section spacing from tokens"],
    steps: [
      "Write a short brand brief: agency name, three brand words, a palette (3 colours max plus neutrals) and a type scale.",
      "Build the hero with an oversized fluid headline in an asymmetric layout on a 12-column grid.",
      "Add services, three large case studies with offset images, a process timeline and a team grid.",
      "Design micro-interactions: animated link underlines, a card image zoom and button arrows that nudge on hover and focus.",
      "Review the rhythm: every section uses the spacing tokens and every heading uses the fluid scale."
    ],
    functionalRequirements: ["Every interactive effect works on hover and on keyboard focus.", "Case-study cards link to anchors or placeholder pages."],
    responsiveRequirements: ["Asymmetric layouts collapse into clean single columns under 768px.", "The headline never overflows at 320px."],
    accessibilityRequirements: ["Micro-interactions respect reduced motion.", "Large display headings are still real headings in the right order."],
    hints: [
      "On a 12-column grid, placing items at `2 / 8` and `8 / 13` creates deliberate asymmetry.",
      "Animating `background-size` on a gradient gives smooth underlines.",
      "Fewer colours, used consistently, look more professional than many."
    ]
  },
  {
    id: "p077-advanced-portfolio-multiple-layouts",
    number: 77,
    title: "Advanced Portfolio with Multiple Layouts",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A creative portfolio that shows the same projects in three switchable layouts — grid, list and spotlight — plus case-study pages.",
    objective: "Render one set of project markup in several layouts selected by radio inputs, and build a reusable case-study template.",
    skills: ["One markup, many layouts", "Layout switching with `:has()`", "A case-study page template", "Optional view transitions as an enhancement"],
    topics: ["css-layout-patterns", "css-grid", "css-pseudo-classes", "css-architecture", "html-semantic", "css-cross-browser"],
    estimatedMinutes: 600,
    requiredHtml: ["a layout-switcher radio group (Grid / List / Spotlight)", "a projects `<ul>` of 9 `<article>`s", "2 case-study pages with hero, challenge, process and results", "next-project navigation"],
    requiredCss: ["`.work:has(#view-list:checked) .projects` layout rules", "a spotlight layout with one large featured item", "case-study classes shared by both pages", "`@supports` around any newer feature"],
    steps: [
      "Mark up nine projects once, each with image, title, year, role and summary.",
      "Add a layout switcher and write three layouts: a card grid, a compact list with thumbnails and a spotlight with one large item.",
      "Make each layout show or hide details appropriately (summaries only in the list, for example).",
      "Create two case-study pages from one template: hero, challenge, process images, results with numbers, next project.",
      "Optionally add view transitions between pages with `@view-transition { navigation: auto; }` as an enhancement."
    ],
    functionalRequirements: ["Each switcher option rearranges the same project items.", "Both case-study pages share classes and look consistent."],
    responsiveRequirements: ["All three layouts work at 360px (spotlight becomes a simple stack).", "No horizontal scroll on any page."],
    accessibilityRequirements: ["The switcher is a labelled radio group.", "Changing layout never changes the reading order of the projects."],
    hints: [
      "Write the shared card styles first, then only the differences for each layout.",
      "`:has()` on a common ancestor lets one radio restyle a whole section.",
      "Cross-document view transitions only work in some browsers — the site must work without them."
    ]
  },
  {
    id: "p078-complete-online-learning-platform-interface",
    number: 78,
    title: "Complete Online Learning Platform Interface",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A learning platform: course catalogue, course page with syllabus, a lesson view with video and transcript, and a learner dashboard.",
    objective: "Design a four-screen learning interface where navigation, progress and media components stay consistent.",
    skills: ["A lesson layout with a syllabus sidebar", "Styled `<progress>` bars", "Video with captions and a transcript", "Catalogue filters and course cards"],
    topics: ["html-audio-video", "html-forms", "css-grid", "css-layout-patterns", "html-accessibility", "css-architecture"],
    estimatedMinutes: 600,
    requiredHtml: ["4 pages: catalogue, course, lesson, dashboard", "`<video controls>` with `<track>` and a transcript in `<details>`", "a syllabus `<ol>` with completed/current lessons", "`<progress>` bars for course completion", "a catalogue filter `<form>`"],
    requiredCss: ["a lesson layout: video + notes in main, syllabus in a sidebar", "completed / current / locked lesson states", "`<progress>` styled for WebKit and Firefox", "shared card and badge components"],
    steps: [
      "Plan the four screens and list the shared components (course card, progress bar, lesson row, badge).",
      "Build the catalogue with filters and 9 course cards showing level, length and rating.",
      "Build the course page with description, instructor, syllabus modules and an Enrol button.",
      "Build the lesson view: captioned video, a transcript in `<details>`, a notes area and a syllabus sidebar marking the current lesson.",
      "Build the dashboard: in-progress courses with progress bars, upcoming deadlines and achievements."
    ],
    functionalRequirements: ["Every syllabus lesson states its status in text (completed, current, not started).", "The pages link to each other in a realistic flow."],
    responsiveRequirements: ["The lesson sidebar moves below the video under 1024px.", "Catalogue cards go from 1 to 3 columns."],
    accessibilityRequirements: ["The video has captions and a text transcript.", "Progress bars have labels that include the percentage."],
    hints: [
      "`<progress>` needs `::-webkit-progress-value` and `::-moz-progress-bar` for custom colours.",
      "Mark the current lesson with `aria-current=\"step\"`.",
      "A transcript inside `<details>` keeps the lesson page tidy."
    ]
  },
  {
    id: "p079-advanced-ecommerce-storefront",
    number: 79,
    title: "Advanced E-commerce Storefront",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A premium fashion storefront with a campaign hero, a collection grid with quick view, a size guide, a lookbook and language/currency selectors.",
    objective: "Build a premium storefront with layered layouts, a CSS-only quick view and right-to-left-ready CSS written with logical properties.",
    skills: ["Quick-view overlays with `:target`", "Overlapping lookbook layouts", "Logical properties for RTL-ready CSS", "Hover image swaps"],
    topics: ["css-layout-patterns", "css-positioning", "css-pseudo-classes", "html-forms", "css-cross-browser", "css-architecture"],
    estimatedMinutes: 600,
    requiredHtml: ["a campaign hero", "a collection grid of 12 products with quick-view links", "quick-view panels with ids", "a size-guide `<table>`", "a lookbook `<section>`", "language and currency `<select>`s in the footer"],
    requiredCss: ["logical properties (`margin-inline`, `padding-block`, `inset-inline-start`) throughout", "a `:target` quick-view overlay", "overlapping lookbook images on a grid", "a layout that still works with `dir=\"rtl\"`"],
    steps: [
      "Build a campaign hero and a 12-product collection grid where a second image appears on hover and focus.",
      "Add a quick-view link per product that opens a `:target` panel with images, sizes and Add to bag.",
      "Create a size-guide table and a lookbook section with overlapping images on a grid.",
      "Write all spacing and positioning with logical properties.",
      "Add `dir=\"rtl\"` to a test copy of the page and fix anything that breaks."
    ],
    functionalRequirements: ["Quick view opens and closes with links and with the keyboard.", "The image swap also happens on keyboard focus (`:focus-within`)."],
    responsiveRequirements: ["The grid shows 2 products per row at 360px and 4 at 1280px.", "The quick-view panel is full screen on mobile."],
    accessibilityRequirements: ["The size-guide table has headers and a caption.", "The language and currency selects have visible labels."],
    hints: [
      "`margin-inline-start` flips automatically for right-to-left languages.",
      "Stacking two images in one grid cell makes hover swaps easy.",
      "Test RTL early — retrofitting logical properties takes longer."
    ]
  },
  {
    id: "p080-professional-banking-dashboard-interface",
    number: 80,
    title: "Professional Banking Dashboard Interface",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "An online-banking dashboard with accounts overview, quick actions, a transfer form, transaction history and security notices.",
    objective: "Design a trustworthy, precise financial interface where clarity, contrast and accessible forms matter more than decoration.",
    skills: ["High-clarity financial UI", "An accessible transfer form", "Transactions grouped by date", "Status and security messaging"],
    topics: ["html-forms", "html-tables", "html-accessibility", "css-typography", "css-grid", "css-architecture"],
    estimatedMinutes: 600,
    requiredHtml: ["account summary cards using `<data>`", "a quick-actions `<ul>` of buttons", "a transfer `<form>` with from/to selects, amount and reference", "a transaction-history `<table>` grouped by date", "a security-notices `<aside>`"],
    requiredCss: ["tabular figures and right-aligned amounts", "focus styles at least 3px thick with 3:1 contrast", "grouped table rows with sticky date headers", "a restrained palette with contrast ratios noted in CSS comments"],
    steps: [
      "Build an accounts overview — current, savings and credit card — with balances and masked account numbers (•••• 4821).",
      "Add a quick-actions row and a transfer form with from/to accounts, an amount with a currency prefix, a date and a reference.",
      "Add a transaction-history table grouped by date, with sticky group headers and income/expense styling.",
      "Add a security-notices panel and a last-login message.",
      "Write the contrast ratio of each main colour pair in a CSS comment and verify them with DevTools."
    ],
    functionalRequirements: ["The amount field accepts only positive amounts with two decimals (`min`, `step=\"0.01\"`).", "Group headers stay visible while their group scrolls past."],
    responsiveRequirements: ["Account cards stack at 360px and the table scrolls inside its container.", "The transfer form is a single column on mobile."],
    accessibilityRequirements: ["Every form field has a label, plus helper text where needed.", "Money values are never shown by colour alone."],
    hints: [
      "A currency prefix can be a positioned span inside the field wrapper — never part of the value.",
      "DevTools' colour picker shows contrast ratios.",
      "Use clearly fake sample data only — never real account numbers."
    ]
  },
  {
    id: "p081-responsive-healthcare-website",
    number: 81,
    title: "Responsive Healthcare Website",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A clinic website with services, a find-a-doctor search, an appointment request form, patient resources and an emergency notice.",
    objective: "Build a calm, highly accessible healthcare site that puts readability, large targets and clear wayfinding first.",
    skills: ["Accessibility-first design decisions", "Large text and touch targets", "A find-a-doctor filter form", "Emergency banner hierarchy"],
    topics: ["html-accessibility", "html-forms", "html-labels-validation", "css-typography", "css-responsive-design", "html-semantic"],
    estimatedMinutes: 540,
    requiredHtml: ["an emergency notice `<aside>` at the very top", "a skip link and landmarks", "a services `<ul>`", "a doctor-search `<form>` and results", "an appointment `<form>` with fieldsets", "resources with document links"],
    requiredCss: ["body text at least 1.125rem", "touch targets at least 48px", "a high-visibility focus style", "body text contrast of 7:1 (AAA)"],
    steps: [
      "Add an emergency notice at the very top with a clearly visible phone link.",
      "Build services, a find-a-doctor search (specialty, location, language) and six doctor cards.",
      "Create an appointment request form with patient details, reason, preferred times and consent.",
      "Add patient resources whose link text states file type and size (\"Patient guide (PDF, 1.2 MB)\").",
      "Audit everything: text at least 1.125rem, body contrast 7:1, targets at least 48px, focus visible everywhere."
    ],
    functionalRequirements: ["The emergency phone link works.", "Form errors are described in text next to their fields."],
    responsiveRequirements: ["Readable without zooming at 360px, and usable at 200% browser zoom without horizontal scroll.", "Doctor cards stack on mobile."],
    accessibilityRequirements: ["Body text meets 7:1 contrast.", "Links to documents state their file type and size."],
    hints: [
      "Test at 200% zoom — many people rely on it.",
      "`rem`-based sizes follow the visitor's browser font setting.",
      "Never rely on placeholder text in forms people may fill in under stress."
    ]
  },
  {
    id: "p082-advanced-restaurant-platform-interface",
    number: 82,
    title: "Advanced Restaurant Platform Interface",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A food-ordering platform: restaurant listing with filters, a menu page with sticky category nav, item customisation and a basket.",
    objective: "Design an ordering interface with sticky category navigation, customisable items and a basket that stays in reach on every screen.",
    skills: ["A sticky, snapping category nav", "Item customisation with radios and checkboxes", "A basket sidebar that becomes a bottom bar", "Order type switching with `:has()`"],
    topics: ["css-positioning", "css-overflow", "html-forms", "css-grid", "css-pseudo-classes", "css-layout-patterns"],
    estimatedMinutes: 600,
    requiredHtml: ["a listing page with cuisine chips and 8 restaurant cards", "a menu page with a category `<nav>` and sections", "an item customisation `<form>` (size radios, extras checkboxes)", "a basket `<aside>` with line items and totals", "a delivery/pickup toggle"],
    requiredCss: ["a sticky category nav with horizontal scroll and snap", "`scroll-margin-top` on category sections", "a basket that is a sticky sidebar on desktop and a fixed bottom bar on mobile", "chips styled with `:has(:checked)`"],
    steps: [
      "Build a listing page with cuisine chips, sort options and eight restaurant cards (rating, time, delivery fee).",
      "Build a menu page with a hero, a sticky scrolling category nav and four menu sections.",
      "Create an item customisation panel with size radios, extras checkboxes and a quantity input.",
      "Add a basket: a sticky sidebar from 1024px and a fixed bottom bar with the total on mobile.",
      "Add a delivery/pickup toggle that hides the delivery-fee line with `:has()`."
    ],
    functionalRequirements: ["Category links jump to their sections without hiding them under the sticky nav.", "Choosing pickup hides the delivery-fee line."],
    responsiveRequirements: ["The mobile bottom bar never covers the last menu items (add bottom padding).", "Restaurant cards go from 1 to 4 columns."],
    accessibilityRequirements: ["Ratings and delivery times are text.", "The bottom bar has enough contrast and a clear label."],
    hints: [
      "Add page padding equal to the bottom bar's height so content isn't hidden behind it.",
      "`:has(#pickup:checked)` on the page can hide the fee row.",
      "Snap the category links with `scroll-snap-align: start`."
    ]
  },
  {
    id: "p083-professional-travel-platform",
    number: 83,
    title: "Professional Travel Platform",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A travel platform with destination discovery, a day-by-day itinerary, an accommodation comparison and a printable trip summary.",
    objective: "Combine discovery grids, itineraries and comparison components into one coherent multi-view travel product.",
    skills: ["Day-by-day itinerary timelines", "Comparison cards aligned with `subgrid`", "A discovery grid with filters", "A print stylesheet"],
    topics: ["css-grid", "css-layout-patterns", "html-semantic", "html-lists", "css-media-queries", "css-cross-browser"],
    estimatedMinutes: 600,
    requiredHtml: ["a discovery page with region filters and 9 destination cards", "an itinerary page with days as `<section>`s and activities as `<ol>`s", "a comparison of 3 accommodation options", "a trip-summary page with a `<dl>` and a `<table>`"],
    requiredCss: ["`subgrid` so comparison rows align (with a fallback)", "an itinerary timeline per day", "`@media print` styles for the summary page", "a shared chip component"],
    steps: [
      "Build a discovery page with region and interest filters and nine destination cards.",
      "Build a four-day itinerary where each day is a section with timed activities on a vertical timeline.",
      "Create an accommodation comparison where price, rating, location and amenities line up across cards using `subgrid`.",
      "Build a trip-summary page with booking details, a costs table and a packing checklist.",
      "Write a print stylesheet so the summary prints cleanly, without navigation and with link URLs shown."
    ],
    functionalRequirements: ["Comparison rows line up across all three cards.", "Printing the summary shows only useful content."],
    responsiveRequirements: ["Comparison cards stack under 900px.", "The timeline stays readable at 360px."],
    accessibilityRequirements: ["Each itinerary day has a heading with its date.", "Comparison data reads in a logical order for screen readers."],
    hints: [
      "Cards with `grid-template-rows: subgrid` that span the parent's rows share row heights.",
      "`a[href]::after { content: \" (\" attr(href) \")\"; }` prints link URLs.",
      "Hide navigation and footers inside `@media print`."
    ]
  },
  {
    id: "p084-modern-real-estate-platform",
    number: 84,
    title: "Modern Real Estate Platform",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A property platform with saved searches, two listing card variants, a property detail page, a mortgage estimate panel and agent profiles.",
    objective: "Build a data-rich property product with reusable listing components and well-structured detail pages.",
    skills: ["Listing component variants", "Property facts and a floor-plan section", "Range inputs with `<output>`", "Cross-browser range styling"],
    topics: ["css-architecture", "css-grid", "html-forms", "html-input-types", "css-cross-browser", "css-layout-patterns"],
    estimatedMinutes: 600,
    requiredHtml: ["a results page with saved-search chips", "listing cards in compact and detailed variants", "a detail page with gallery, facts `<dl>` and a floor-plan `<figure>`", "a mortgage estimate `<form>` with range inputs and `<output>`", "agent profile cards"],
    requiredCss: ["`.listing` and `.listing--compact` variants", "range inputs styled for WebKit and Firefox", "a detail-page grid with a sticky contact panel", "a facts grid using `auto-fit`"],
    steps: [
      "Create a results page with saved-search chips and listings in two variants (compact list and detailed card).",
      "Build a property detail page with gallery grid, key facts, description, floor plan and neighbourhood information.",
      "Add a mortgage estimate panel with price, deposit and term range inputs and `<output>` elements showing example values.",
      "Add a sticky agent contact panel and agent profile cards.",
      "Style the range inputs consistently using both WebKit and Firefox pseudo-elements."
    ],
    functionalRequirements: ["Both listing variants share one base class plus a modifier.", "Range inputs show their current values beside them (static examples are fine without JavaScript)."],
    responsiveRequirements: ["The detail gallery becomes a horizontal scroller on mobile.", "The agent panel moves below the content under 1024px."],
    accessibilityRequirements: ["Range inputs have labels and visible min/max text.", "The floor-plan image has a text description."],
    hints: [
      "`<output for=\"…\">` connects a result to the inputs it describes.",
      "Range styling needs both `::-webkit-slider-thumb` and `::-moz-range-thumb`.",
      "Keep the modifier class small: only the differences."
    ]
  },
  {
    id: "p085-complex-data-dashboard",
    number: 85,
    title: "Complex Data Dashboard",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "An operations dashboard with a 12-column widget grid, KPI sparklines, a heatmap, a status matrix table and an incidents feed.",
    objective: "Build a data-dense dashboard with CSS-drawn visuals, a resilient widget grid and text alternatives for every chart.",
    skills: ["A widget grid with spans and container queries", "A heatmap from Grid and `color-mix()`", "Inline SVG sparklines", "Status matrix tables"],
    topics: ["css-grid", "css-variables", "css-responsive-design", "html-tables", "html-accessibility", "css-architecture"],
    estimatedMinutes: 660,
    requiredHtml: ["a header with environment and time-range controls", "6 KPI widgets with inline SVG sparklines", "a 7×24 heatmap `<figure>` with a table alternative", "a service-status `<table>`", "an incidents `<ol>`"],
    requiredCss: ["widgets spanning 3, 4, 6 or 12 columns of a 12-column grid", "container queries inside widgets", "heatmap colours from `--level` with `color-mix()`", "status cells with an icon and text"],
    steps: [
      "Set up a 12-column widget grid and place widgets with spans; reduce to 6 columns and then 1 at smaller widths.",
      "Build six KPI widgets with a value, a change and an inline SVG sparkline `<polyline>`.",
      "Create a 7-day × 24-hour heatmap where each cell's colour comes from `--level` with `color-mix()`.",
      "Add a status table (services × regions) and an incidents feed with severity labels.",
      "Make every widget container-aware so its inner layout adapts to its own width."
    ],
    functionalRequirements: ["Every visual has an equivalent text or table version.", "Widgets never overlap or leave gaps at any width."],
    responsiveRequirements: ["The widget grid goes 12 → 6 → 1 columns.", "The heatmap scrolls sideways inside its widget on mobile."],
    accessibilityRequirements: ["Severity and status use text labels as well as colour.", "SVG sparklines have `role=\"img\"` and an `aria-label` summary."],
    hints: [
      "`color-mix(in srgb, var(--accent) calc(var(--level) * 10%), transparent)` builds a colour scale.",
      "Container queries let the same widget work in a narrow slot or a wide one.",
      "A sparkline is just an SVG `<polyline>` with a list of points."
    ]
  },
  {
    id: "p086-advanced-responsive-design-system",
    number: 86,
    title: "Advanced Responsive Design System",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A documented design system site: tokens, typography, layout primitives, components and patterns with live examples and guidelines.",
    objective: "Architect a scalable CSS design system with layered tokens, intrinsic layout primitives and documented components.",
    skills: ["Token tiers: primitive → semantic → component", "Layout primitives (stack, cluster, sidebar, switcher)", "Cascade layers and naming rules", "Documentation structure"],
    topics: ["css-architecture", "css-variables", "css-layout-patterns", "css-specificity", "css-responsive-design", "css-cross-browser"],
    estimatedMinutes: 720,
    requiredHtml: ["a docs layout with a left nav", "sections for Tokens, Typography, Layout, Components and Patterns", "colour swatches and type specimens", "live examples with code snippets", "do/don't guideline blocks"],
    requiredCss: ["`@layer reset, tokens, base, layout, components, utilities`", "4 layout primitives (`.stack`, `.cluster`, `.with-sidebar`, `.switcher`)", "fluid type and space scales", "no ID selectors and no `!important` outside utilities"],
    steps: [
      "Define primitive and semantic tokens, plus fluid type and spacing scales.",
      "Build four layout primitives that need no media queries: stack, cluster, sidebar and switcher.",
      "Build at least eight components using only tokens and primitives.",
      "Document each token group, primitive and component with an example, a snippet and guidelines.",
      "Check your architecture rules: no IDs in selectors, no `!important` outside utilities, every colour from a token."
    ],
    functionalRequirements: ["Each component works when copied to a blank page with only the stylesheet.", "Changing a semantic token updates the whole docs site."],
    responsiveRequirements: ["Layout primitives adapt intrinsically, without breakpoints.", "The docs nav collapses under 900px."],
    accessibilityRequirements: ["Swatches list colour values and contrast ratios as text.", "Every interactive example works with the keyboard."],
    hints: [
      "The switcher pattern uses `flex-basis: calc((30rem - 100%) * 999)` to flip between row and column.",
      "Write the system's rules down first; then the code has something to obey.",
      "Search the CSS for `#` selectors and `!important` before you finish."
    ]
  },
  {
    id: "p087-professional-multi-page-magazine",
    number: 87,
    title: "Professional Multi-Page Magazine",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A four-page online magazine — front page, section page, long-form article and author page — with an editorial design system.",
    objective: "Design a cohesive editorial product with a strong typographic system and flexible layouts for very different content.",
    skills: ["An editorial typographic system", "A front-page grid with story weights", "A long-form article template", "Open Graph metadata"],
    topics: ["css-typography", "css-grid", "css-layout-patterns", "html-semantic", "html-metadata", "css-architecture"],
    estimatedMinutes: 720,
    requiredHtml: ["4 pages sharing a masthead and footer", "a front page with lead, secondary and brief stories", "a section page with a story list", "a long-form article with figures and pull quotes", "an author page with bio and archive `<ol>`", "meta description and Open Graph tags on every page"],
    requiredCss: ["a type system with a serif and a sans system stack and named roles", "front-page story weight modifiers", "an article breakout grid", "print styles for articles"],
    steps: [
      "Define typographic roles — kicker, headline XL/L/M, standfirst, body, caption, byline — as classes.",
      "Build the front page with a lead story, four secondary stories and a briefs column.",
      "Build a section page and an author page with an archive list.",
      "Build a long-form article with a breakout grid, a drop cap, pull quotes and captioned figures.",
      "Add a description and Open Graph title, description and image to each page, and print styles to the article."
    ],
    functionalRequirements: ["Navigation between all four pages works.", "Printing an article leaves out navigation and promotional blocks."],
    responsiveRequirements: ["The front-page grid adapts at three breakpoints.", "Articles stay comfortable to read at 360px."],
    accessibilityRequirements: ["Every page has a correct heading hierarchy.", "Every caption belongs to its `<figure>`."],
    hints: [
      "Open Graph tags use `property=\"og:title\"`, not `name`.",
      "Story weight modifiers (`--lead`, `--secondary`, `--brief`) keep the front page flexible.",
      "Reuse a breakout grid rather than rebuilding it for each article."
    ]
  },
  {
    id: "p088-advanced-product-configuration-interface",
    number: 88,
    title: "Advanced Product Configuration Interface",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A bike configurator with a live SVG preview, option steps for frame, colour, wheels and extras, and a summary with a CSS-calculated total.",
    objective: "Make radio and checkbox choices visibly change a preview and a summary using `:has()`, custom properties and CSS counters.",
    skills: ["`:has()` driving a preview", "Custom properties recolouring inline SVG", "Option cards as labelled radios", "Summing prices with CSS counters"],
    topics: ["css-pseudo-classes", "css-variables", "html-forms", "css-grid", "css-transitions", "css-cross-browser"],
    estimatedMinutes: 600,
    requiredHtml: ["a `<form>` with 4 option `<fieldset>`s", "colour radios with swatches", "option cards as labelled radios", "extras checkboxes", "a preview `<figure>` with an inline SVG product", "a summary `<aside>` listing each choice"],
    requiredCss: ["`form:has(#color-red:checked) { --frame: … }` recolouring the SVG", "summary lines shown or hidden with `:has()`", "selected option-card styles", "a transition on colour changes"],
    steps: [
      "Draw a simple inline SVG bike whose main parts use `fill: var(--frame)` and `stroke: var(--accent)`.",
      "Add four fieldsets — frame type, colour, wheels and extras — using option cards as labels.",
      "Use `:has()` on the form to set custom properties when a colour is chosen, so the SVG recolours.",
      "Show only the summary lines that match the chosen options, using `:has()` again.",
      "Keep the preview and summary sticky beside the options on desktop, stacked above them on mobile."
    ],
    functionalRequirements: ["Choosing a colour recolours the preview straight away.", "The summary always lists exactly the chosen options."],
    responsiveRequirements: ["The preview stays visible beside the options from 1024px.", "Option cards are full width at 360px."],
    accessibilityRequirements: ["Colour options have text names.", "The summary is readable as text by screen readers."],
    hints: [
      "Custom properties set on a parent flow into inline SVG children.",
      "Prepare a summary line for every option and hide the ones that aren't selected.",
      "Bonus: `counter-increment: total 150` on each checked input, shown with `counter(total)`, adds up prices without JavaScript."
    ]
  },
  {
    id: "p089-professional-subscription-management-dashboard",
    number: 89,
    title: "Professional Subscription Management Dashboard",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A billing area: current plan, usage meters, plan changes, invoices, payment methods and an honest two-step cancellation flow.",
    objective: "Design a self-service billing area with clear status communication, consistent account components and an ethical cancellation flow.",
    skills: ["Usage meters and limits", "Invoice tables with status", "Plan-change comparison", "Ethical cancellation design"],
    topics: ["html-tables", "html-forms", "html-accessibility", "css-architecture", "css-grid", "css-typography"],
    estimatedMinutes: 600,
    requiredHtml: ["a current-plan card with a renewal `<time>`", "a usage section with `<meter>`s", "a plan comparison and change form", "an invoices `<table>` with download links", "payment-method cards with masked numbers", "2 cancellation pages"],
    requiredCss: ["status badges: active, past due, cancelled", "meter colours from low/high", "one card system across every page", "danger buttons used only for destructive actions"],
    steps: [
      "Build the overview: current plan, renewal date and usage meters (seats, storage, API calls).",
      "Add a plan-change page comparing plans with a radio-card form.",
      "Add invoices (date, number, amount, status, PDF link) and payment methods showing only the last four digits.",
      "Design a two-page cancellation flow: a reasons form, then a confirmation of what is kept and what is lost.",
      "Review the copy: no hidden cancel buttons, no guilt-tripping, clear consequences."
    ],
    functionalRequirements: ["Cancel is as easy to find as Upgrade.", "Invoice statuses use text and colour."],
    responsiveRequirements: ["The invoice table becomes stacked rows under 700px.", "Meters stay labelled at 360px."],
    accessibilityRequirements: ["Destructive buttons say exactly what they do (\"Cancel subscription\").", "Meters have labels with values and limits."],
    hints: [
      "Making cancellation harder than signing up is a dark pattern — design against it.",
      "`<meter>` low/high values can warn at 80% usage.",
      "Show only the last four digits of any card or account number."
    ]
  },
  {
    id: "p090-responsive-project-management-interface",
    number: 90,
    title: "Responsive Project Management Interface",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A project tool with a kanban board, a list view, a Gantt-style timeline, team avatars and a task detail panel.",
    objective: "Build a multi-view productivity interface: scrolling kanban columns, a dense list and a timeline placed with Grid.",
    skills: ["Kanban columns in an `overflow-x` container", "Timeline bars placed with `grid-column` variables", "Task cards with labels and due dates", "A detail panel with `:target`"],
    topics: ["css-grid", "css-flexbox", "css-overflow", "css-pseudo-classes", "html-semantic", "css-variables"],
    estimatedMinutes: 660,
    requiredHtml: ["a view switcher `<nav>` (Board / List / Timeline)", "a board with 4 columns of task `<article>`s", "a list-view `<table>`", "a timeline with tasks placed by start and end day", "a task-detail `<aside id>`"],
    requiredCss: ["board columns with `flex: 0 0 18rem` in an `overflow-x` container", "a 14-day timeline grid with `grid-column: var(--start) / var(--end)`", "label chips coloured by `data-label`", "a `:target` detail panel"],
    steps: [
      "Build a board with four columns (To do, In progress, Review, Done) and 12 task cards.",
      "Give cards labels, initials avatars, due dates and checklist progress.",
      "Build a list view table showing the same tasks.",
      "Build a two-week timeline where each task bar is placed with `--start` and `--end` custom properties.",
      "Add a task-detail panel that opens with `:target` and shows description, subtasks and comments."
    ],
    functionalRequirements: ["The board scrolls sideways inside its own area, not the page.", "Timeline bars line up with their date columns."],
    responsiveRequirements: ["On mobile, board columns snap into view one at a time.", "The timeline scrolls sideways inside its container."],
    accessibilityRequirements: ["Each column is a list with a heading, so screen readers know which column a card is in.", "Initials avatars include the full name as text."],
    hints: [
      "`grid-column: var(--start) / var(--end)` turns data into placement.",
      "Snap points make horizontal boards pleasant on phones.",
      "Initials can sit in an `<abbr title>` or next to a visually hidden full name."
    ]
  },
  {
    id: "p091-advanced-analytics-platform",
    number: 91,
    title: "Advanced Analytics Platform",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A multi-page analytics product: overview, report builder, funnel visualisation, cohort table and settings.",
    objective: "Design an enterprise analytics product with consistent navigation, complex CSS data visuals and a scalable page architecture.",
    skills: ["Funnel visualisation with `clip-path`", "A cohort table with a colour scale", "A three-panel report builder", "Product-wide navigation patterns"],
    topics: ["css-architecture", "css-grid", "css-variables", "html-tables", "html-forms", "css-cross-browser"],
    estimatedMinutes: 720,
    requiredHtml: ["4 pages: overview, reports, funnels, settings", "an app shell with primary nav and page tabs", "a funnel `<ol>` of steps with values", "a cohort `<table>` with percentage cells", "a report builder with field `<fieldset>`s and a preview"],
    requiredCss: ["funnel bars sized by `--value`, shaped with `clip-path`", "cohort cells coloured with `color-mix()` and `--pct`, with a solid fallback", "a three-panel builder layout", "a naming-convention comment at the top of the CSS"],
    steps: [
      "Create the app shell used on all four pages, with nav, page title and a tab row.",
      "Build the overview with KPIs, a traffic chart placeholder and top tables.",
      "Build a funnel page: five steps shrinking by value, with conversion percentages between them.",
      "Build a cohort table (8 weeks × 8 cohorts) coloured by retention percentage.",
      "Build a report builder (fields, configuration and preview panels) and a settings page with forms."
    ],
    functionalRequirements: ["Funnel step widths match their values.", "Cohort colours get stronger as retention increases."],
    responsiveRequirements: ["Builder panels stack under 1100px.", "The cohort table scrolls inside its container on mobile."],
    accessibilityRequirements: ["Funnel and cohort values are text in the HTML.", "Tab rows mark the current tab."],
    hints: [
      "`clip-path: polygon()` can give funnel steps sloped sides.",
      "A short naming guide at the top of the stylesheet helps future you.",
      "Declare a solid background first, then the `color-mix()` version, as a fallback."
    ]
  },
  {
    id: "p092-complex-css-grid-editorial-website",
    number: 92,
    title: "Complex CSS Grid Editorial Website",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "An experimental editorial site where every section uses a different ambitious grid: overlaps, vertical type, mosaics and full-bleed art.",
    objective: "Push CSS Grid with overlapping compositions, named lines, `writing-mode` and art-directed layouts at each breakpoint.",
    skills: ["Overlapping grid compositions", "`writing-mode` for vertical type", "Art-directed layouts per breakpoint", "Named lines, areas and subgrid together"],
    topics: ["css-grid", "css-layout-patterns", "css-typography", "css-transforms", "css-z-index", "css-media-queries"],
    estimatedMinutes: 660,
    requiredHtml: ["5 editorial `<section>`s, each with a heading, text and media", "a feature with a vertical title", "full-bleed art images", "a credits `<footer>`"],
    requiredCss: ["3+ overlapping items sharing grid cells, ordered with `z-index`", "`writing-mode: vertical-rl` on a heading", "a 16-column grid with named lines", "different area maps at 3 breakpoints", "`subgrid` in one section with a fallback"],
    steps: [
      "Plan five compositions on paper, each built around one grid idea: overlap, vertical type, full bleed, mosaic and subgrid.",
      "Build a 16-column grid with named lines and use it as the base for every section.",
      "Create overlaps where text crosses images, controlling the stacking with `z-index`.",
      "Set one feature title vertically with `writing-mode` and rotate a caption with a transform.",
      "Art-direct each section with its own area maps for mobile, tablet and desktop."
    ],
    functionalRequirements: ["Overlapping text stays readable over images.", "Every section still reads in a logical order without CSS."],
    responsiveRequirements: ["Each composition has a deliberate mobile version, not just stacked leftovers.", "No horizontal overflow at 320px."],
    accessibilityRequirements: ["Vertical text is short, or repeated in a readable form.", "Overlaps never cover links or buttons."],
    hints: [
      "`grid-row: 1 / 3; grid-column: 2 / 9` on two items creates an overlap.",
      "`writing-mode` changes the inline direction, so width and height swap meaning.",
      "Treat mobile as its own composition."
    ]
  },
  {
    id: "p093-accessible-multi-page-business-website",
    number: 93,
    title: "Accessible Multi-Page Business Website",
    difficulty: "mastery",
    complexity: 2,
    shortDescription: "A four-page consultancy website built and documented to WCAG 2.2 AA, including an accessibility statement page.",
    objective: "Build a site where every decision is checked against accessibility criteria, then document how it meets them.",
    skills: ["Applying a WCAG 2.2 AA checklist", "Focus appearance and target size", "Accessible forms with an error summary", "Writing an accessibility statement"],
    topics: ["html-accessibility", "html-forms", "html-labels-validation", "html-links-navigation", "html-metadata", "css-pseudo-classes"],
    estimatedMinutes: 600,
    requiredHtml: ["4 pages: Home, Services, Contact, Accessibility statement", "a skip link, landmarks and one `<h1>` per page", "a contact form with an error-summary block linking to fields", "an accessible data table on Services", "a statement with standard, known issues and contact"],
    requiredCss: ["`:focus-visible` outlines at least 2px with 3:1 contrast", "targets at least 24×24px (44px for main actions)", "`prefers-reduced-motion` and `forced-colors` support", "text that survives a 1.5 line-height override"],
    steps: [
      "Build the four pages with consistent navigation, landmarks, titles and headings.",
      "Create a contact form with labels, hints, required markers and a static example error summary linking to each invalid field.",
      "Add focus styles, target sizes, and reduced-motion and `forced-colors` support.",
      "Test with the keyboard only, at 200% zoom, with a text-spacing override and in Windows contrast themes (forced colours).",
      "Write the accessibility statement: the standard you aimed for, how you tested, known limitations and how to report problems."
    ],
    functionalRequirements: ["Error-summary links move focus to the related fields.", "Every page works with Tab, Shift+Tab and Enter alone."],
    responsiveRequirements: ["Content reflows at 320px CSS width (400% zoom) without horizontal scroll.", "Text-spacing overrides don't clip any text."],
    accessibilityRequirements: ["The site passes your own documented WCAG 2.2 AA checklist.", "Borders and focus stay visible in forced-colours mode."],
    hints: [
      "`@media (forced-colors: active)` lets you restore borders that the system theme removes.",
      "An error summary is a list of links to field ids.",
      "Avoid fixed heights on text containers — text-spacing tests will break them."
    ]
  },
  {
    id: "p094-professional-creative-agency-platform",
    number: 94,
    title: "Professional Creative Agency Platform",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "An agency platform combining a public showcase and careers page with a client portal dashboard and a project-brief form.",
    objective: "Combine a marketing site and a client portal into one product with two visual modes built on shared foundations.",
    skills: ["Two contexts, one design system", "Client-portal dashboard patterns", "A brief intake form with uploads", "Scroll-driven reveals as an enhancement"],
    topics: ["css-architecture", "css-variables", "html-forms", "css-grid", "css-layout-patterns", "css-animations"],
    estimatedMinutes: 720,
    requiredHtml: ["public pages: home showcase and careers", "portal pages: dashboard and project-brief form", "project status cards with `<progress>`", "a brief form with fieldsets, a file input and a budget range", "a careers list with filter chips"],
    requiredCss: ["shared tokens plus a `.theme-portal` context that overrides some of them", "showcase reveals with `animation-timeline: view()` inside `@supports`", "a portal dashboard grid", "form components shared by public and portal pages"],
    steps: [
      "Define shared tokens, then a portal context class that adjusts density, colours and type scale.",
      "Build a bold public showcase with animated project reveals that respect reduced motion.",
      "Build a portal dashboard: active projects, status, deadlines, messages and files.",
      "Build a detailed project-brief form and a careers page with role cards and filter chips.",
      "Check that buttons, inputs and cards look like one family in both contexts."
    ],
    functionalRequirements: ["Portal and public pages share component classes.", "The brief form validates required fields and accepts only the listed file types."],
    responsiveRequirements: ["The dashboard collapses from 3 columns to 1.", "Showcase animations never cause overflow on mobile."],
    accessibilityRequirements: ["Content is fully visible in browsers without scroll-driven animation support.", "Portal statuses are expressed in text."],
    hints: [
      "A context class like `.theme-portal` can redefine tokens for everything inside it.",
      "`animation-timeline: view()` is progressive — wrap it in `@supports` and make the default state visible.",
      "Shared components with context-driven tokens beat two separate stylesheets."
    ]
  },
  {
    id: "p095-advanced-css-component-system",
    number: 95,
    title: "Advanced CSS Component System",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A framework-free system of 15 components with variants, sizes, states and themes, documented on one reference page.",
    objective: "Engineer a component system with predictable specificity, composable modifiers and theme support, ready to reuse elsewhere.",
    skills: ["Composable modifiers and size scales", "Specificity control with `:where()` and `@layer`", "Custom-property component APIs", "Component API documentation"],
    topics: ["css-architecture", "css-specificity", "css-variables", "css-pseudo-classes", "css-cross-browser", "html-buttons"],
    estimatedMinutes: 720,
    requiredHtml: ["a reference page with a section per component (15)", "every variant, size and state shown", "an API table per component (classes, custom properties, states)", "a theme preview area with 2 themes"],
    requiredCss: ["`:where()` keeping base selectors at zero specificity", "`@layer tokens, base, components, variants, utilities`", "a custom-property API per component (e.g. `--btn-bg`)", "size modifiers that only change custom properties", "`forced-colors` adjustments"],
    steps: [
      "Pick 15 components: button, icon button, input, select, checkbox, switch, badge, alert, card, tabs, accordion, breadcrumb, pagination, tooltip and dialog.",
      "Give each a custom-property API so variants only change property values, never whole rules.",
      "Keep base selectors inside `:where()` and order layers so overrides are predictable.",
      "Document each component with an API table listing its classes, custom properties and states.",
      "Show two themes by swapping token values on a wrapper, and check forced-colours mode."
    ],
    functionalRequirements: ["Any variant can be combined with any size.", "A utility class always overrides a component without `!important`."],
    responsiveRequirements: ["The reference page is readable at 360px, with tables scrolling.", "Components scale with the user's font size (`rem`/`em`)."],
    accessibilityRequirements: ["Interactive components are native elements or follow native semantics.", "Focus states are consistent across all components."],
    hints: [
      "`:where(.btn)` has zero specificity, so anything can override it.",
      "A variant should mean new custom-property values, not new declarations.",
      "Order layers from the most general purpose to the most specific."
    ]
  },
  {
    id: "p096-complete-responsive-marketplace-interface",
    number: 96,
    title: "Complete Responsive Marketplace Interface",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A two-sided marketplace: home, search results, listing detail, seller profile, messaging and a seller dashboard.",
    objective: "Design a large marketplace where buyers and sellers each get a coherent journey built from one component system.",
    skills: ["Two-sided user journeys", "A messaging layout with conversation list and thread", "A listing-creation form", "Ratings and trust signals"],
    topics: ["css-layout-patterns", "css-grid", "html-forms", "css-architecture", "css-overflow", "html-accessibility"],
    estimatedMinutes: 780,
    requiredHtml: ["6 pages: home, search, listing, seller profile, messages, seller dashboard", "a messages page with conversation list and thread", "a create-listing `<form>` with image uploads and price", "ratings and reviews with text ratings"],
    requiredCss: ["a messages layout where list and thread scroll independently", "chat bubbles aligned by sender with logical properties", "a seller dashboard with stats and a listings table", "consistent trust badges (verified, top seller)"],
    steps: [
      "Map the buyer and seller journeys and list the components each page needs.",
      "Build home, search results and listing detail for buyers.",
      "Build the seller profile with ratings, reviews and listings.",
      "Build a messages page with a conversation list and a thread of sent/received bubbles plus a reply form.",
      "Build a seller dashboard with stats, an active-listings table and a create-listing form."
    ],
    functionalRequirements: ["You can follow a buyer journey from home to messaging a seller.", "On desktop the thread and conversation list scroll independently."],
    responsiveRequirements: ["Under 768px, messages show either the list or the thread (switched with `:target`).", "No horizontal scroll on any page."],
    accessibilityRequirements: ["Each chat message includes its sender and time as text.", "Trust badges are text, not icons alone."],
    hints: [
      "`margin-inline-start: auto` pushes sent messages to the end side.",
      "`:target` can show the thread on mobile when a conversation is chosen.",
      "Reuse listing cards in search, profile and dashboard."
    ]
  },
  {
    id: "p097-professional-enterprise-dashboard",
    number: 97,
    title: "Professional Enterprise Dashboard",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "An enterprise admin console with multi-level navigation, organisation switcher, user management, audit log and system health.",
    objective: "Build a dense enterprise interface with deep navigation, data tables and status systems that stay clear and accessible.",
    skills: ["Multi-level navigation with nested `<details>`", "Dense data tables with toolbars", "System-health status patterns", "A compact density mode via tokens"],
    topics: ["html-tables", "html-links-navigation", "css-architecture", "css-grid", "html-accessibility", "css-overflow"],
    estimatedMinutes: 780,
    requiredHtml: ["an app shell with nested `<details>` navigation", "an organisation-switcher `<select>`", "a user-management `<table>` with roles and status", "an audit-log `<table>` with timestamps", "a system-health panel"],
    requiredCss: ["a compact density mode that switches spacing tokens", "table toolbar and bulk-action bar patterns", "status indicators combining shape, colour and text", "a sticky page header inside the scrolling main area"],
    steps: [
      "Build the shell with nested navigation (sections → pages) and an organisation switcher.",
      "Build user management: toolbar, filters, and a table with role badges, status and row actions.",
      "Build an audit log with precise timestamps, actors, actions and targets.",
      "Build system health: services with operational / degraded / outage states and incident notes.",
      "Add a compact density option by switching spacing tokens on a wrapper class."
    ],
    functionalRequirements: ["The navigation shows the current page and opens its parent section.", "Compact mode tightens spacing everywhere through tokens."],
    responsiveRequirements: ["The navigation collapses into a top menu under 1024px.", "Tables scroll within their containers."],
    accessibilityRequirements: ["Status indicators use shape and text, not colour alone.", "Every timestamp uses `<time datetime>`."],
    hints: [
      "Different shapes (●, ▲, ■) help colour-blind users tell statuses apart.",
      "A density class can override spacing tokens for the whole app.",
      "Give the parent `<details>` of the current page the `open` attribute."
    ]
  },
  {
    id: "p098-advanced-multi-page-saas-platform",
    number: 98,
    title: "Advanced Multi-Page SaaS Platform",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A full SaaS front end: marketing home, pricing, sign-in, onboarding, app dashboard, settings and help centre.",
    objective: "Deliver an end-to-end SaaS front end — from marketing to onboarding to daily use — built on one shared system.",
    skills: ["An end-to-end product journey", "Onboarding step layouts", "Settings with a section nav", "Help-centre search and article templates"],
    topics: ["css-architecture", "css-layout-patterns", "html-forms", "css-variables", "html-metadata", "css-responsive-design"],
    estimatedMinutes: 840,
    requiredHtml: ["7 pages: home, pricing, sign-in, onboarding, dashboard, settings, help", "onboarding with a step indicator and choices", "settings with sub-navigation and forms", "a help centre with search and an article template"],
    requiredCss: ["marketing and app layout modes from shared tokens", "a split-screen sign-in layout", "a two-column settings layout with a sticky section nav", "one form and button system everywhere"],
    steps: [
      "Plan the journey and the shared system, then build the marketing home and pricing pages.",
      "Build sign-in (split layout) and a three-step onboarding with progress and choices.",
      "Build the app dashboard, reusing your best dashboard patterns.",
      "Build settings with a sticky section nav and grouped forms.",
      "Build a help-centre home and one article page, then check consistency across all seven pages."
    ],
    functionalRequirements: ["You can click through the whole journey.", "Forms on every page share the same components."],
    responsiveRequirements: ["Every page works at 360px with no horizontal scroll.", "App pages switch to a mobile navigation under 1024px."],
    accessibilityRequirements: ["Each page has a unique title and one `<h1>`.", "The onboarding step indicator exposes the current step."],
    hints: [
      "Write a component inventory before you start page two.",
      "Auth pages often hide the main navigation — keep a link back home.",
      "Marketing and app pages can share tokens while using different layout primitives."
    ]
  },
  {
    id: "p099-professional-ecommerce-design-system",
    number: 99,
    title: "Professional E-commerce Design System",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "A commerce design system — tokens, product card, price, rating, cart line, checkout steps — proven by building templates from it.",
    objective: "Create a domain-specific design system for commerce and prove it by building page templates without writing new CSS.",
    skills: ["Domain-specific components", "Price and rating semantics", "Templates composed only from components", "Brand themes through tokens"],
    topics: ["css-architecture", "css-variables", "html-semantic", "css-specificity", "css-cross-browser", "html-forms"],
    estimatedMinutes: 840,
    requiredHtml: ["a docs page for tokens and 12 commerce components", "2 templates (product listing, checkout) built only from documented components", "a price component using `<del>`/`<ins>` and `<data>`", "a rating component with a text equivalent"],
    requiredCss: ["an `@layer` architecture", "a custom-property API per component", "two brand themes that only switch tokens", "no page-specific CSS in the templates"],
    steps: [
      "Define commerce tokens (prices, sale colours, stock states) on top of your base tokens.",
      "Build 12 components: product card, price, rating, badge, quantity field, variant picker, cart line, mini basket, promo banner, checkout steps, address card and order summary.",
      "Document each one with its variants, states and an HTML snippet.",
      "Build two template pages using only those components — no new CSS.",
      "Add a second brand theme by changing tokens only, and show both on the templates."
    ],
    functionalRequirements: ["Templates use only documented classes.", "Switching the theme class re-skins every component."],
    responsiveRequirements: ["Components are intrinsically responsive and the templates work at 360px.", "Docs tables scroll on small screens."],
    accessibilityRequirements: ["Prices are announced clearly, including sale prices (\"Was … Now …\").", "Quantity fields are labelled number inputs."],
    hints: [
      "If a template needs new CSS, the system is missing a component or a variant.",
      "Sale prices need words like \"Was\" and \"Now\" for screen readers.",
      "Stock states (in stock, low, sold out) are good candidates for status tokens."
    ]
  },
  {
    id: "p100-final-master-project",
    number: 100,
    title: "Final Master Project: Complete Professional Multi-Page Website",
    difficulty: "mastery",
    complexity: 3,
    shortDescription: "Your capstone: plan, design, build, test and document a complete professional multi-page website for a real or realistic client.",
    objective: "Show mastery by delivering a production-quality, accessible, responsive multi-page website — from brief to documentation.",
    skills: ["Planning from a brief", "Design-system and architecture decisions", "Accessibility and cross-browser testing", "Documentation and self-review"],
    topics: ["html-document-structure", "html-metadata", "html-accessibility", "css-architecture", "css-responsive-design", "css-cross-browser", "css-layout-patterns"],
    estimatedMinutes: 1200,
    requiredHtml: ["at least 6 pages with a shared header and footer", "complete metadata on every page (title, description, Open Graph, favicon)", "at least one form, one data table and one media element", "a 404 page", "a `README.md` documenting your decisions"],
    requiredCss: ["a tokens + layers architecture", "fluid type and spacing scales", "no horizontal scroll from 320px to 2560px", "print, reduced-motion and forced-colours support"],
    steps: [
      "Write a one-page brief: client, audience, goals, site map, content list and success criteria.",
      "Design tokens, layout primitives and a component inventory before building any page.",
      "Build at least six pages, including a form, a data table, a media element and a 404 page.",
      "Test with the keyboard, at 200% and 400% zoom, in two browsers, with reduced motion, forced colours, print and widths from 320px to 2560px.",
      "Write a README covering decisions, structure, known limitations and next improvements — then review your site against this checklist."
    ],
    functionalRequirements: ["Every internal link works and no image is broken.", "The 404 page links back to the home page."],
    responsiveRequirements: ["No horizontal scroll from 320px to 2560px on any page.", "Layouts are deliberately designed at small, medium and large sizes."],
    accessibilityRequirements: ["Every page passes your WCAG 2.2 AA checklist.", "Forms have labels, hints and clear error patterns."],
    hints: [
      "Most capstones fail at planning, not coding — spend your first session on the brief.",
      "Treat your previous 99 projects as a parts bin.",
      "Book time for testing: it always takes longer than you expect."
    ]
  }
]);
