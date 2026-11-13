/*
 * projects-2-intermediate.js — Level 2: Intermediate (projects 26–50)
 * -------------------------------------------------------------------
 * Focus: Flexbox, Grid, responsive layouts, forms, tables, semantic HTML and
 * reusable components. Same fields as projects-1-beginner.js.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.projects = (HCM.data.projects || []).concat([
  {
    id: "p026-responsive-restaurant-website",
    number: 26,
    title: "Responsive Restaurant Website",
    difficulty: "intermediate",
    complexity: 1,
    shortDescription: "A restaurant homepage with hero, about block, menu preview, gallery strip, opening hours and location.",
    objective: "Build a full homepage mobile-first, changing layout at two deliberate breakpoints with Flexbox and Grid.",
    skills: ["Mobile-first media queries", "Mixing Flexbox and Grid", "A navigation that wraps", "A spacing scale in custom properties"],
    topics: ["html-semantic", "css-responsive-design", "css-media-queries", "css-grid", "css-flexbox", "css-variables"],
    estimatedMinutes: 180,
    requiredHtml: ["`<header>` with `<nav>`", "a hero `<section>` with `<h1>`", "a menu preview `<section>` with dish cards", "`<address>` and an opening-hours `<table>`", "`<footer>`"],
    requiredCss: ["base styles written for small screens first", "`min-width` media queries at 768px and 1024px only", "a Grid layout for dish cards", "a `--space-1` … `--space-6` spacing scale"],
    steps: [
      "Sketch the mobile and desktop layouts, then write the HTML: header/nav, hero, about, menu preview, gallery, visit-us and footer.",
      "Write all the base CSS for a 360px screen first: single column, wrapped nav, full-width buttons.",
      "At 768px, put the about text beside its image and show dish cards in two columns.",
      "At 1024px, show dish cards in three columns and place the address and hours side by side.",
      "Use your spacing scale for every margin, padding and gap."
    ],
    functionalRequirements: ["The hero button jumps to the menu section.", "The opening-hours table has a caption and header cells."],
    responsiveRequirements: ["The layout changes visibly at 768px and 1024px and nowhere else.", "No horizontal scroll anywhere from 320px to 1920px."],
    accessibilityRequirements: ["Food photos have descriptive alt text.", "Nav links have at least 44px touch targets on mobile."],
    hints: [
      "Mobile-first means media queries only ever add layout, using `min-width`.",
      "If a value appears three times, it probably wants to be a custom property.",
      "Grid suits two-dimensional card areas; Flexbox suits single rows."
    ]
  },
  {
    id: "p027-modern-blog-homepage",
    number: 27,
    title: "Modern Blog Homepage",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A blog front page with a featured post, a grid of recent posts, a category sidebar and a newsletter box.",
    objective: "Create a main + sidebar layout with Grid and a post card that works in more than one size.",
    skills: ["Main/sidebar grid layout", "Reusable card variants", "Clamping excerpts to three lines", "Article lists with `<time>`"],
    topics: ["html-semantic", "html-images-alt", "css-grid", "css-layout-patterns", "css-overflow", "css-typography"],
    estimatedMinutes: 180,
    requiredHtml: ["`<main>` and `<aside>`", "a featured `<article>`", "6 post-card `<article>`s", "`<time datetime>` on every post", "a categories `<nav>`"],
    requiredCss: ["`grid-template-columns: minmax(0, 1fr) 18rem` on desktop", "a `.post-card` plus a `.post-card--featured` variant", "`line-clamp: 3` on excerpts", "images with a fixed `aspect-ratio` and `object-fit`"],
    steps: [
      "Mark up a featured post, six recent posts, a categories nav and a newsletter form inside `<aside>`.",
      "Build one `.post-card` component, then a `--featured` modifier that places the image beside the text.",
      "Clamp each excerpt to three lines with an ellipsis.",
      "At 1024px switch to a two-column page grid (posts + 18rem sidebar), with recent posts in a two-column grid inside.",
      "Below 1024px, move the sidebar under the posts."
    ],
    functionalRequirements: ["Every card links to its post through the title.", "No excerpt ever shows more than three lines."],
    responsiveRequirements: ["One column below 1024px; main + sidebar from 1024px.", "The featured card stacks its image above the text below 768px."],
    accessibilityRequirements: ["Each card has one link whose text is the post title (no row of identical \"Read more\" links).", "Dates are machine-readable."],
    hints: [
      "`minmax(0, 1fr)` stops a long word from blowing the column wider.",
      "A modifier class should change only what differs from the base card.",
      "Many browsers still need `display: -webkit-box`, `-webkit-box-orient: vertical` and `-webkit-line-clamp` for clamping."
    ]
  },
  {
    id: "p028-responsive-portfolio-layout",
    number: 28,
    title: "Responsive Portfolio Layout",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A developer portfolio with an intro hero, skill chips, a project grid with tags and a contact call to action.",
    objective: "Build a portfolio grid that adapts with `auto-fill` and use fluid typography so headings scale smoothly.",
    skills: ["`clamp()` for fluid type", "Grid `auto-fill` vs `auto-fit`", "Tag chips with `inline-flex`", "Hover and focus states on whole cards"],
    topics: ["css-grid", "css-typography", "css-responsive-design", "css-sizing", "html-semantic", "css-transitions"],
    estimatedMinutes: 180,
    requiredHtml: ["a hero `<header>` with `<h1>`", "a `<ul>` of skill chips", "a projects `<section>` with 6 `<article>` cards", "a tag `<ul>` inside each card", "a contact `<section>` with a `mailto:` link"],
    requiredCss: ["`font-size: clamp(2rem, 1rem + 5vw, 4rem)` on the `<h1>`", "`repeat(auto-fill, minmax(18rem, 1fr))`", "`display: inline-flex` chips with `gap`", "a transition on card `:hover` and `:focus-within`"],
    steps: [
      "Write a hero with your name, role and a two-sentence intro, then a skills list styled as chips.",
      "Add six project cards with image, title, description, tags and two links (live demo, source code).",
      "Make the heading fluid with `clamp()` so it scales between 2rem and 4rem.",
      "Lay out the cards with `repeat(auto-fill, minmax(18rem, 1fr))`, then compare `auto-fit` when only two cards exist.",
      "Raise each card on hover and on `:focus-within` with a short transition."
    ],
    functionalRequirements: ["Each card's two links go to different places and have different text.", "Chips wrap onto new lines instead of overflowing."],
    responsiveRequirements: ["The heading size changes smoothly — no jumps — between 360px and 1440px.", "Cards go from 1 to 3+ columns without media queries."],
    accessibilityRequirements: ["Card links have unique accessible names (\"Live demo of Weather App\").", "The hover effect also appears on keyboard focus."],
    hints: [
      "With only a few items, `auto-fill` keeps empty tracks while `auto-fit` collapses them.",
      "Mix `vw` with `rem` in the middle value of `clamp()` so browser zoom still works.",
      "Visually hidden text can make repeated link labels unique."
    ]
  },
  {
    id: "p029-ecommerce-product-grid",
    number: 29,
    title: "E-commerce Product Grid",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A category page with a filter panel, sort dropdown, result count and a 12-item product grid.",
    objective: "Lay out a shop listing page and build a product card that keeps prices and buttons aligned across each row.",
    skills: ["Sidebar + content grid", "Aligned card rows with flex columns", "Form controls in a filter panel", "Visually hidden headings"],
    topics: ["html-forms", "html-semantic", "css-grid", "css-flexbox", "css-layout-patterns", "css-responsive-design"],
    estimatedMinutes: 180,
    requiredHtml: ["a breadcrumb `<nav>`", "an `<aside>` with a filter `<form>` (checkboxes, price range)", "a labelled sort `<select>`", "a `<p>` result count", "a `<ul>` of 12 product `<article>`s"],
    requiredCss: ["a grid with a 16rem filter column from 1024px", "product cards as flex columns with the button at the bottom", "`repeat(auto-fill, minmax(14rem, 1fr))` products", "a `.visually-hidden` utility"],
    steps: [
      "Mark up the breadcrumb, a page heading with result count, the sort `<select>`, a filter `<aside>` and the product list.",
      "In the filter panel add brand checkboxes in a `<fieldset>`, an `<input type=\"range\">` price slider and an Apply button.",
      "Build product cards (image, name, rating text, price, button) as flex columns with the button pushed to the bottom.",
      "From 1024px place the filters in a 16rem left column; below that, show the filter panel full width above the grid.",
      "Create a `.visually-hidden` class and use it for a \"Products\" heading on the list."
    ],
    functionalRequirements: ["Buttons line up along the bottom of every row of cards.", "The sort select has a visible label."],
    responsiveRequirements: ["The filter panel sits above the grid below 1024px and becomes a left column from 1024px.", "At 360px products show in one or two columns with no overflow."],
    accessibilityRequirements: ["Filter checkboxes are grouped with a `<legend>`.", "The range input has a label and shows its minimum and maximum as text."],
    hints: [
      "`display: flex; flex-direction: column` plus `margin-top: auto` on the button aligns every card's button.",
      "On narrow screens, putting filter checkboxes in two columns saves a lot of scrolling.",
      "Visually hidden is not `display: none` — screen readers must still find it."
    ]
  },
  {
    id: "p030-responsive-pricing-table",
    number: 30,
    title: "Responsive Pricing Table",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "Three pricing tiers with a highlighted \"Most popular\" plan and a monthly/yearly switch built from radio buttons.",
    objective: "Build comparable plan cards with a highlighted variant and a CSS-only billing switch driven by `:checked`.",
    skills: ["`:checked` with the general sibling combinator", "A highlighted card variant with `transform`", "Equal-height columns", "Visually hidden native radios"],
    topics: ["css-pseudo-classes", "css-selectors", "css-flexbox", "css-transforms", "html-forms", "html-lists"],
    estimatedMinutes: 150,
    requiredHtml: ["`<section>` with `<h2>`", "two radio inputs with labels: Monthly and Yearly", "3 plan `<article>`s", "a feature `<ul>` per plan", "a \"Most popular\" badge as text"],
    requiredCss: ["`#yearly:checked ~ .plans .price--yearly` style rules", "`transform: scale(1.05)` on the featured plan from 1024px", "stretched equal-height cards", "visually hidden radios whose labels show focus"],
    steps: [
      "Add the Monthly/Yearly radios and their labels, followed by a `.plans` container with three plan cards.",
      "Inside each price, include both a monthly and a yearly amount; show only the one that matches the checked radio.",
      "Write sibling selectors so checking Yearly swaps every price on the page with no JavaScript.",
      "Highlight the middle plan with an accent border, a badge and a slight scale on wide screens.",
      "Style the two labels as a pill-shaped switch and show a focus ring when the hidden radio has focus."
    ],
    functionalRequirements: ["Switching the billing period updates all three prices.", "Arrow keys move between Monthly and Yearly."],
    responsiveRequirements: ["Plans stack at 360px with the popular plan clearly marked.", "The scaled card never overlaps its neighbours or causes overflow."],
    accessibilityRequirements: ["The radios stay focusable — hidden visually, never with `display: none`.", "\"Most popular\" is real text, not just a colour."],
    hints: [
      "`~` only reaches siblings that come after the element, so order your HTML accordingly.",
      "`input:focus-visible + label` lets the label show the radio's focus.",
      "Add margin around a scaled card so it doesn't touch its neighbours."
    ]
  },
  {
    id: "p031-advanced-contact-form",
    number: 31,
    title: "Advanced Contact Form",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A contact form with grouped fields, inline error messages, a file attachment and consistently custom-styled controls.",
    objective: "Style every native form control consistently across browsers and show validation feedback with CSS alone.",
    skills: ["`appearance: none` and custom controls", "`:user-invalid` feedback", "`::file-selector-button`", "Cross-browser control normalisation"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "css-cross-browser", "css-pseudo-classes", "css-pseudo-elements"],
    estimatedMinutes: 180,
    requiredHtml: ["a `<form>` with two `<fieldset>`s", "`<input type=\"file\" accept=\"…\">`", "a `<select>`", "custom-styled checkbox and radio inputs", "an error `<p>` per required field, linked with `aria-describedby`"],
    requiredCss: ["`appearance: none` on checkbox, radio and select", "`::file-selector-button` styling", "`input:user-invalid ~ .error` to reveal messages", "a custom select arrow"],
    steps: [
      "Build the form with contact details, a reason `<select>`, preferred-contact radios, a file input and a consent checkbox.",
      "Under each required field add an error `<p>` linked with `aria-describedby` and hidden by default.",
      "Reset checkbox, radio and select with `appearance: none`, then rebuild them with borders, `:checked` states and a custom arrow.",
      "Style the file input's button with `::file-selector-button` to match your other buttons.",
      "Reveal each error only when its field is `:user-invalid`, then check the form in two different browsers."
    ],
    functionalRequirements: ["Error messages appear only after someone interacts with a field.", "The file input only offers the types listed in `accept`."],
    responsiveRequirements: ["All controls are full width under 600px; checkboxes and radios keep a 24px hit area.", "No control is clipped at 360px."],
    accessibilityRequirements: ["Custom checkboxes and radios still work with Space and the arrow keys.", "Each error message is announced through `aria-describedby`."],
    hints: [
      "After `appearance: none` a checkbox is an empty box — draw the tick with `::before` or a background image.",
      "Error text must come after the input in the HTML for `~` or `+` to reach it.",
      "Test in two browsers (for example Chrome and Edge) before you call it done."
    ]
  },
  {
    id: "p032-job-application-form",
    number: 32,
    title: "Job Application Form",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A long job application with personal details, experience, skills, salary expectation, CV upload and a cover letter.",
    objective: "Make a long form easy to scan with sections, a sticky section list and a two-column grid that collapses gracefully.",
    skills: ["Long forms with fieldsets", "Spanning wide fields with `grid-column`", "url, number and month input types", "A sticky in-form section nav"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "css-grid", "css-positioning", "css-responsive-design"],
    estimatedMinutes: 210,
    requiredHtml: ["a `<form>` with 4 `<fieldset>`s", "`url`, `number` and `month` inputs", "a skills checkbox group", "`<input type=\"file\">`", "a cover-letter `<textarea>`", "a `<nav>` of links to each section"],
    requiredCss: ["`grid-template-columns: repeat(2, 1fr)` for field rows", "`grid-column: 1 / -1` for full-width fields", "`position: sticky` on the section nav", "consistent label and field spacing"],
    steps: [
      "Divide the form into Personal details, Experience, Skills and Documents fieldsets, each with an id.",
      "Use the right types: email, tel, url (portfolio), number (years of experience with `min`/`max`) and month (start date).",
      "Lay fields out in a two-column grid; make addresses, textareas and the file input span both columns.",
      "Add a side nav listing the four sections that stays visible with `position: sticky` from 1024px.",
      "Collapse the grid to one column under 700px and hide the side nav, keeping the order logical."
    ],
    functionalRequirements: ["Number fields refuse values outside their `min`/`max`.", "Each side-nav link jumps to its fieldset."],
    responsiveRequirements: ["One column under 700px, two above; the sticky nav appears only from 1024px.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["Every checkbox group has a `<legend>`.", "Tab order follows the visual order."],
    hints: [
      "`grid-column: 1 / -1` spans from the first line to the last, whatever the column count.",
      "Sticky elements need a taller parent and no `overflow: hidden` ancestor.",
      "Don't reorder fields with `order` — it breaks the tab sequence."
    ]
  },
  {
    id: "p033-responsive-image-gallery",
    number: 33,
    title: "Responsive Image Gallery",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A photo gallery that serves different image sizes to different screens and art-directs its hero shot.",
    objective: "Use `srcset`, `sizes` and `<picture>` so each device downloads a suitable image, and lay the gallery out with Grid.",
    skills: ["`srcset` with width descriptors", "The `sizes` attribute", "`<picture>` with `<source media>`", "`loading=\"lazy\"` and intrinsic sizes"],
    topics: ["html-responsive-images", "html-images-alt", "css-grid", "css-responsive-design", "css-sizing"],
    estimatedMinutes: 180,
    requiredHtml: ["`<picture>` with two `<source media>` and a fallback `<img>`", "`<img srcset sizes>` thumbnails", "`width` and `height` attributes", "`loading=\"lazy\"` below the fold", "`<figure>`/`<figcaption>`"],
    requiredCss: ["`grid-auto-flow: dense`", "a wide item spanning 2 columns", "`img { max-width: 100%; height: auto; }`", "`aspect-ratio` for even rows"],
    steps: [
      "Export each photo at three widths (for example 480, 960 and 1600px) with any image editor.",
      "Use `<picture>` for the hero: a tall crop for narrow screens and a wide crop for wide screens.",
      "Give each thumbnail an `srcset` with width descriptors and a `sizes` value that matches your grid columns.",
      "Build a grid with `grid-auto-flow: dense` and make every fourth item span two columns.",
      "Open DevTools' Network panel, resize the window, and confirm smaller screens download smaller files."
    ],
    functionalRequirements: ["The hero shows a different crop on mobile and desktop.", "Thumbnails below the first screen load lazily."],
    responsiveRequirements: ["At 360px the browser picks the 480px files (check `currentSrc` in DevTools).", "The grid never overflows; spanning items drop to one column on mobile."],
    accessibilityRequirements: ["Every image has meaningful alt text; the art-directed crops share one alt.", "`width` and `height` attributes prevent layout shift."],
    hints: [
      "`sizes` tells the browser how wide the image will be shown before any CSS has loaded.",
      "Only the `<img>` inside `<picture>` needs `alt`.",
      "An image's `currentSrc` property shows which file the browser actually chose."
    ]
  },
  {
    id: "p034-travel-agency-landing-page",
    number: 34,
    title: "Travel Agency Landing Page",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A landing page with a full-screen hero and search bar, popular destinations, a how-it-works row, reviews and a footer.",
    objective: "Combine a viewport-height hero with layered backgrounds and several different responsive section layouts.",
    skills: ["A `100svh` hero with a background image", "An inline search form", "Numbered steps with CSS counters", "A multi-column footer"],
    topics: ["css-colors-backgrounds", "css-gradients", "css-grid", "css-flexbox", "html-forms", "css-pseudo-elements"],
    estimatedMinutes: 180,
    requiredHtml: ["a hero `<section>` with `<h1>` and a search `<form>`", "a destinations `<ul>` of cards", "an `<ol>` of 3 steps", "a reviews `<section>`", "a `<footer>` with 3 `<nav>` columns"],
    requiredCss: ["`min-height: 100vh` followed by `min-height: 100svh`", "a layered background: gradient + image", "`counter-reset` / `counter-increment` for step numbers", "a footer grid with `auto-fit` columns"],
    steps: [
      "Create a hero with a background photo under a gradient, a headline and a search form (destination, date, guests, button).",
      "Make the hero fill the screen with `min-height: 100vh`, then `100svh` for mobile browsers.",
      "Add a six-card destinations grid and a three-step \"How it works\" `<ol>` numbered with CSS counters.",
      "Add a reviews section with three short quotes and ratings written as text.",
      "Build a footer with three link columns and a copyright row."
    ],
    functionalRequirements: ["Every search field has a label (it may be visually hidden).", "Step numbers come from CSS counters, not typed text."],
    responsiveRequirements: ["The hero search fields stack at 360px and sit in one row from 1024px.", "Footer columns go from 1 to 3 as space allows."],
    accessibilityRequirements: ["Hero text keeps 4.5:1 contrast over the image thanks to the overlay.", "Each footer `<nav>` has its own `aria-label`."],
    hints: [
      "Declare `100vh` first and `100svh` second — browsers that don't know `svh` keep the first.",
      "`counter(step)` inside a `::before` prints the number.",
      "Multiple backgrounds are separated by commas, and the first one is drawn on top."
    ]
  },
  {
    id: "p035-fitness-website-homepage",
    number: 35,
    title: "Fitness Website Homepage",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A gym homepage with a short background-video hero, class cards, a trainer grid, membership tiers and a join form.",
    objective: "Add a background video responsibly and build bold, high-contrast sections without hurting readability.",
    skills: ["`<video autoplay muted playsinline>`", "A poster image fallback", "Layering with `z-index`", "Bold display typography"],
    topics: ["html-audio-video", "html-semantic", "css-positioning", "css-grid", "css-typography", "css-z-index"],
    estimatedMinutes: 180,
    requiredHtml: ["`<video autoplay muted playsinline poster>`", "`<source>` with a `type`", "a classes `<section>` with cards", "a trainers `<ul>`", "a join `<form>`"],
    requiredCss: ["`object-fit: cover` on the video", "a video layer behind the hero content using `position` and `z-index`", "uppercase, heavy-weight headings", "a `prefers-reduced-motion` rule that hides the video"],
    steps: [
      "Place a muted background `<video>` (a clip of 5 seconds or less that plays once) with a `poster` image in the hero.",
      "Cover the hero with the video using `object-fit: cover` and a dark overlay; keep the headline and button above it with `z-index`.",
      "Add a classes section with four class cards (name, time, level, trainer) and a trainer grid of four profiles.",
      "Add membership tiers and a short join form (name, email, plan select).",
      "Hide the video and show the poster image for people who prefer reduced motion."
    ],
    functionalRequirements: ["The video plays silently once; the page still works if the video file is missing (the poster shows).", "The join form validates its required fields."],
    responsiveRequirements: ["Hero text stays readable over the video at 360px.", "The trainer grid shows 1, 2 and then 4 columns."],
    accessibilityRequirements: ["The video carries no essential information and has no sound.", "Reduced-motion users never see moving video."],
    hints: [
      "Browsers only autoplay video that is muted.",
      "`playsinline` stops iPhones opening the video full screen.",
      "WCAG asks for a pause control on moving content longer than 5 seconds — a short single play avoids needing one."
    ]
  },
  {
    id: "p036-online-course-landing-page",
    number: 36,
    title: "Online Course Landing Page",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A course sales page with a hero, preview video, curriculum modules, instructor bio, pricing and FAQ.",
    objective: "Organise a long sales page into scannable sections and embed a local video with captions.",
    skills: ["`<video controls>` with a captions `<track>`", "A curriculum built from `<details>`", "A sticky header with section links", "`scroll-margin-top`"],
    topics: ["html-audio-video", "html-semantic", "html-lists", "css-positioning", "css-grid", "css-layout-patterns"],
    estimatedMinutes: 180,
    requiredHtml: ["`<header>` with `<nav>`", "`<video controls>` with `<track kind=\"captions\">`", "a curriculum `<ol>` of `<details>` modules", "an instructor `<section>` with `<img>`", "pricing and FAQ sections"],
    requiredCss: ["a sticky header with a solid background", "a two-column hero grid (about 7fr / 5fr)", "lesson durations aligned to the right", "`scroll-margin-top` on sections"],
    steps: [
      "Build a sticky header with in-page links to Curriculum, Instructor, Pricing and FAQ.",
      "Create a two-column hero: the pitch and button on one side, a preview `<video controls>` with a captions `<track>` on the other.",
      "List six modules as `<details>`, each containing an ordered list of lessons with durations aligned right.",
      "Add an instructor block (photo + bio) and a pricing card, then reuse your FAQ pattern.",
      "Add `scroll-margin-top` so sections you jump to aren't hidden under the sticky header."
    ],
    functionalRequirements: ["The video has working controls and a captions track (a small `.vtt` file).", "Each module opens independently."],
    responsiveRequirements: ["The hero stacks with the video below the text at 360px.", "The sticky header never covers more than about 15% of a phone screen."],
    accessibilityRequirements: ["Captions are available for the video.", "Lesson durations are readable text (\"12 min\"), not icons."],
    hints: [
      "A WebVTT file starts with the line `WEBVTT`, followed by timed cues.",
      "Set `scroll-margin-top` to roughly the height of the sticky header.",
      "`justify-content: space-between` pushes durations to the right of each lesson row."
    ]
  },
  {
    id: "p037-responsive-news-website",
    number: 37,
    title: "Responsive News Website",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A news front page with a breaking-news bar, lead story, sections of headlines and a \"most read\" list.",
    objective: "Build a dense, multi-region layout that rearranges itself at three breakpoints without changing the HTML order.",
    skills: ["`grid-template-areas`", "New area maps per breakpoint", "Dense typographic hierarchy", "A numbered \"most read\" list"],
    topics: ["css-grid", "css-media-queries", "css-typography", "html-semantic", "html-lists", "css-layout-patterns"],
    estimatedMinutes: 210,
    requiredHtml: ["`<header>` with masthead and `<nav>`", "a lead `<article>`", "3+ `<section>`s with `<h2>`", "a most-read `<ol>`", "`<time>` on every story"],
    requiredCss: ["`grid-template-areas` with named regions", "a different area map at 768px and at 1200px", "borders between regions", "font sizes for lead, secondary and small stories"],
    steps: [
      "Mark up the masthead, section nav, a lead story, 8+ secondary stories in sections and a most-read list.",
      "Name grid areas (`lead`, `secondary`, `opinion`, `mostread`) and place each region in its area.",
      "Write one area layout for mobile, another for 768px and another for 1200px.",
      "Separate regions with thin borders and give the lead headline the largest size.",
      "Turn the CSS off in DevTools and check that the HTML reading order still makes sense."
    ],
    functionalRequirements: ["Every headline links to an article (placeholder URLs are fine).", "Most-read stories are numbered by the `<ol>`."],
    responsiveRequirements: ["Three different area layouts: mobile, 768px and 1200px.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["Visual order matches the HTML order closely enough that Tab moves predictably.", "Headings form a sensible outline (h1 masthead, h2 sections, h3 stories)."],
    hints: [
      "Area names in `grid-template-areas` must form rectangles.",
      "A `.` in `grid-template-areas` makes an empty cell.",
      "DevTools can disable stylesheets so you can check the raw reading order."
    ]
  },
  {
    id: "p038-admin-dashboard-layout",
    number: 38,
    title: "Admin Dashboard Layout",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "An admin shell with sidebar, top bar, four stat cards, a chart placeholder, a recent-orders table and an activity feed.",
    objective: "Create an application layout with a full-height sidebar and a scrolling content area using Grid and `overflow`.",
    skills: ["An app shell with `grid-template-areas`", "Full-height layout with `100dvh`", "Scrolling regions with `overflow`", "Status badges in tables"],
    topics: ["css-grid", "css-overflow", "css-sizing", "html-tables", "html-semantic", "css-layout-patterns"],
    estimatedMinutes: 210,
    requiredHtml: ["an `<aside>` sidebar with `<nav>`", "a `<header>` top bar with a search `<form>`", "`<main>` with 4 stat cards", "an orders `<table>`", "an activity `<ol>`"],
    requiredCss: ["`grid-template-areas: \"side top\" \"side main\"`", "`height: 100dvh` with `overflow: auto` on `<main>`", "a stat-card grid with `auto-fit`", "status badges with colour and text"],
    steps: [
      "Build the shell: sidebar navigation, a top bar with search and user name, and a main area.",
      "Place them with grid areas so the sidebar runs full height and only `<main>` scrolls.",
      "Inside main add four stat cards, a chart placeholder box, an orders table and an activity feed.",
      "Style order statuses (Paid, Pending, Refunded) as badges with colour and text.",
      "Under 900px, turn the sidebar into a row of links at the top and let the whole page scroll normally."
    ],
    functionalRequirements: ["On desktop, scrolling the main area leaves the sidebar and top bar in place.", "The orders table has header cells and a caption."],
    responsiveRequirements: ["Below 900px the layout becomes a single scrolling column.", "The orders table scrolls sideways inside its card on small screens."],
    accessibilityRequirements: ["Order status is shown by text, not colour alone.", "The search input has a label."],
    hints: [
      "`dvh` follows the visible viewport on mobile; write `100vh` first as a fallback.",
      "Give only one element `overflow: auto`, or you'll get scrollbars inside scrollbars.",
      "`min-height: 0` on a grid child lets it shrink enough to scroll."
    ]
  },
  {
    id: "p039-responsive-sidebar-navigation",
    number: 39,
    title: "Responsive Sidebar Navigation",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A documentation-style sidebar with nested sections that becomes an off-canvas menu on mobile — without JavaScript.",
    objective: "Build an off-canvas menu with `:target` and manage stacking with `z-index` and transforms.",
    skills: ["`:target`-based toggling", "An off-canvas panel with `translateX()`", "An overlay layer with `z-index`", "Nested navigation lists"],
    topics: ["css-pseudo-classes", "css-transforms", "css-z-index", "css-positioning", "css-display", "html-links-navigation", "html-lists"],
    estimatedMinutes: 180,
    requiredHtml: ["`<nav id=\"menu\">` with nested `<ul>`s", "an open link `<a href=\"#menu\">`", "a close link inside the panel", "`<main>` content", "a current-page link with `aria-current`"],
    requiredCss: ["a `position: fixed` panel with `transform: translateX(-100%)`", "`#menu:target { transform: none; }`", "an overlay with a lower `z-index` than the panel", "a transition on `transform` and `visibility`"],
    steps: [
      "Create a nested navigation (3 sections with 3–4 links each) in a `<nav id=\"menu\">`.",
      "On mobile, fix the nav to the left edge and move it off-screen with `translateX(-100%)`.",
      "Add an Open menu link to `#menu`; when `#menu:target` matches, slide the panel in with a transition.",
      "Add a Close link inside the panel and a semi-transparent overlay behind it with the correct stacking order.",
      "From 1024px, show the sidebar permanently beside the content and hide the open and close links."
    ],
    functionalRequirements: ["Open and Close both work by mouse and by keyboard.", "On desktop the sidebar is always visible."],
    responsiveRequirements: ["Off-canvas below 1024px, a static sidebar from 1024px.", "The hidden panel never causes horizontal scroll."],
    accessibilityRequirements: ["When the panel is off-screen it can't receive focus (`visibility: hidden`).", "The current page is marked with `aria-current`."],
    hints: [
      "`:target` matches the element whose id is in the URL after `#`.",
      "A transformed element can still be focused — transition `visibility` too to fix that.",
      "The overlay can be the panel's `::before` or a separate element."
    ]
  },
  {
    id: "p040-product-comparison-table",
    number: 40,
    title: "Product Comparison Table",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A feature table comparing four products with a sticky header row, a sticky first column, grouped rows and tick/cross marks.",
    objective: "Build a complex accessible table and keep its headers visible while it scrolls in both directions.",
    skills: ["Row groups with `<tbody>` and `scope=\"rowgroup\"`", "Sticky header row and first column", "Accessible ✓ and ✗ marks", "A scroll container with `max-height`"],
    topics: ["html-tables", "html-accessibility", "css-positioning", "css-overflow", "css-z-index"],
    estimatedMinutes: 180,
    requiredHtml: ["`<table>` with `<caption>`", "`<thead>` with product names", "3 `<tbody>` groups, each with a group header row", "`<th scope=\"row\">` feature names", "visually hidden text for ✓ / ✗"],
    requiredCss: ["`position: sticky; top: 0` on header cells", "`position: sticky; left: 0` on the first column", "a higher `z-index` on the top-left cell", "`max-height` + `overflow: auto` on the wrapper"],
    steps: [
      "Build a table comparing four products across at least 15 features in three groups (e.g. Basics, Storage, Support).",
      "Mark group header rows with `<th colspan=\"5\" scope=\"rowgroup\">` and feature names with `<th scope=\"row\">`.",
      "Use ✓ and ✗ symbols with visually hidden \"Included\" / \"Not included\" text.",
      "Wrap the table in a scroll container with `max-height: 70vh` and `overflow: auto`.",
      "Make the header row and first column sticky with solid backgrounds, and give the corner cell the highest `z-index`."
    ],
    functionalRequirements: ["Scrolling down keeps product names visible; scrolling right keeps feature names visible.", "The corner cell is never covered by other cells."],
    responsiveRequirements: ["At 360px the table scrolls inside its wrapper and the page itself doesn't scroll sideways.", "The first column leaves room for at least one product column on small screens."],
    accessibilityRequirements: ["Screen readers hear \"Included\" or \"Not included\", not \"check mark\".", "Every data cell is linked to a row and a column header."],
    hints: [
      "Sticky cells need a background colour, or content shows through them.",
      "`border-collapse: separate` with `border-spacing: 0` avoids border glitches on sticky cells.",
      "The corner cell is sticky to the top and to the left at the same time."
    ]
  },
  {
    id: "p041-responsive-team-members-section",
    number: 41,
    title: "Responsive Team Members Section",
    difficulty: "intermediate",
    complexity: 2,
    shortDescription: "A team page with eight member cards that reveal social links and a short bio on hover or keyboard focus.",
    objective: "Create reveal-on-hover cards that also work for keyboard and touch users, using transitions and `:focus-within`.",
    skills: ["`:focus-within` for accessible reveals", "Opacity and transform transitions", "`(hover: none)` fallbacks for touch", "Consistent card sizes in Grid"],
    topics: ["css-pseudo-classes", "css-transitions", "css-media-queries", "css-grid", "html-images-alt"],
    estimatedMinutes: 150,
    requiredHtml: ["`<section>` with `<h2>`", "a `<ul>` of 8 members", "an `<img>` per member", "`<h3>` name and `<p>` role", "a social-links `<ul>`"],
    requiredCss: ["an opacity + `translateY` reveal with a transition", "`.card:hover .details, .card:focus-within .details`", "`@media (hover: none)` shows details permanently", "a 1/2/4-column grid"],
    steps: [
      "Mark up eight team members with photo, name, role, a one-line bio and two social links.",
      "Place the bio and links in a details panel over the bottom of the photo, hidden with `opacity: 0`.",
      "Reveal the panel on hover and whenever a link inside the card has focus.",
      "Show the panel permanently on devices that can't hover, using `@media (hover: none)`.",
      "Lay out the cards in a grid of 1, 2 and 4 columns."
    ],
    functionalRequirements: ["Tabbing into a card reveals its links.", "On a touch device the bio and links are visible without hovering."],
    responsiveRequirements: ["1 column at 360px, 2 at 600px and 4 at 1100px.", "Photos keep a 1:1 ratio at every size."],
    accessibilityRequirements: ["Hidden links can still be reached by keyboard (hidden with opacity, not `display: none`).", "Social links have names like \"Ana on LinkedIn\"."],
    hints: [
      "`:focus-within` matches the card while any element inside it has focus.",
      "`hover: none` is how touch-only devices describe themselves.",
      "Transition `opacity` and `transform` together for a smooth reveal."
    ]
  },
  {
    id: "p042-interactive-faq-layout-css",
    number: 42,
    title: "Interactive FAQ Layout Using CSS",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A help centre with category links, grouped accordions where one answer opens at a time, and animated answers.",
    objective: "Animate `<details>` answers, group them into exclusive accordions and highlight the chosen category — without JavaScript.",
    skills: ["Exclusive accordions with `<details name>`", "Keyframe entrance for opened content", "Progressive enhancement with `@supports`", "`:target` highlighting"],
    topics: ["html-semantic", "css-transitions", "css-animations", "css-pseudo-classes", "css-cross-browser", "css-grid"],
    estimatedMinutes: 150,
    requiredHtml: ["a category `<nav>` with in-page links", "a `<section id>` per category", "`<details name=\"…\">` groups", "`<summary>` questions", "a help-contact `<aside>`"],
    requiredCss: ["a `@keyframes` fade/slide for opened answers", "an `@supports (interpolate-size: allow-keywords)` enhancement", "a `section:target` highlight", "a two-column grid from 900px"],
    steps: [
      "Create four categories, each a `<section id>` with at least three `<details>` questions.",
      "Give every `<details>` in a category the same `name`, so only one answer in that group opens at a time.",
      "Animate answers in with a short `@keyframes` fade and slide when `details[open]`.",
      "Inside `@supports`, enhance with `interpolate-size` and `::details-content` so the height animates where supported.",
      "Highlight the category you jumped to with `section:target`, and lay out nav + content in two columns from 900px."
    ],
    functionalRequirements: ["Opening a question closes the others in the same group.", "Browsers without the newer features still open answers instantly."],
    responsiveRequirements: ["Category links scroll sideways in one row on mobile without page overflow.", "Two columns only from 900px."],
    accessibilityRequirements: ["Animations are switched off under `prefers-reduced-motion`.", "The `:target` highlight uses more than colour (a border or label)."],
    hints: [
      "The `name` attribute on `<details>` creates an exclusive accordion in modern browsers.",
      "`@supports` lets you add a feature only where it works.",
      "Animate the content inside the details: `display` changes can't be transitioned in older browsers."
    ]
  },
  {
    id: "p043-testimonial-carousel-layout",
    number: 43,
    title: "Testimonial Carousel Layout",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A horizontally scrolling testimonial carousel with snap points and dot links to each slide.",
    objective: "Build a swipeable carousel with CSS scroll-snap that keyboard users can operate too.",
    skills: ["`scroll-snap-type` and `scroll-snap-align`", "`overflow-x: auto` carousels", "Anchor dots that jump to slides", "A focusable scroll region"],
    topics: ["css-overflow", "css-layout-patterns", "css-flexbox", "html-links-navigation", "html-accessibility"],
    estimatedMinutes: 150,
    requiredHtml: ["a `<section aria-label=\"Testimonials\">`", "a `<ul>` track of 5 slides with ids", "a `<blockquote>` per slide", "a `<nav>` of dot links to the slide ids"],
    requiredCss: ["`scroll-snap-type: x mandatory`", "`scroll-snap-align: center` on slides", "`flex: 0 0 85%` slide width on mobile", "`scroll-behavior: smooth` (off for reduced motion)"],
    steps: [
      "Create a list of five testimonial slides, each with an id, a quote, a name and a photo.",
      "Lay the slides out in a single flex row inside a container with `overflow-x: auto`.",
      "Add `scroll-snap-type: x mandatory`, centre-snap each slide, and make slides 85% wide on mobile and 45% on desktop.",
      "Add five dot links pointing at the slide ids, with visible focus and labels like \"Show testimonial 3\".",
      "Make the scroll container focusable with `tabindex=\"0\"` so keyboard users can scroll it with the arrow keys."
    ],
    functionalRequirements: ["Scrolling always comes to rest on a slide, never between two.", "Each dot jumps to its slide."],
    responsiveRequirements: ["One slide plus a peek of the next on mobile; two slides on desktop.", "No page-level horizontal scroll."],
    accessibilityRequirements: ["The scroll region has a label and can receive keyboard focus.", "Dots have text labels for screen readers."],
    hints: [
      "Snap settings go on the container (type) and on the children (align).",
      "A partly visible next slide tells people there is more to see.",
      "If you hide the scrollbar, keep another visible way to move — the dots."
    ]
  },
  {
    id: "p044-responsive-event-website",
    number: 44,
    title: "Responsive Event Website",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A conference site with a date banner, speakers grid, a two-day schedule switched by tabs-like links, and tickets.",
    objective: "Present dates, times and sessions semantically and draw a responsive timeline with pseudo-elements.",
    skills: ["`<time>` for dates and times", "A timeline drawn with pseudo-elements", "Day switching with `:target` and `:has()`", "Speaker grid with `auto-fit`"],
    topics: ["html-semantic", "html-lists", "css-pseudo-elements", "css-pseudo-classes", "css-grid", "css-positioning"],
    estimatedMinutes: 210,
    requiredHtml: ["a hero with the event's `<time>` range", "a speakers `<ul>` of 8", "one `<section id>` per schedule day", "`<time datetime>` for every session", "a tickets `<section>`"],
    requiredCss: ["a vertical timeline line with `::before`", "session dots with `::after`", "day switching with `:target`, day 1 shown by default", "a speaker grid with `auto-fit`"],
    steps: [
      "Build a hero with the event name, dates in `<time>`, venue and a Get tickets link.",
      "Add a speakers grid with photo, name, talk title and company.",
      "Create a schedule for two days, each a `<section id>` listing sessions with start time, title, speaker and room.",
      "Draw a vertical timeline with a `::before` line and a dot for each session using `::after`.",
      "Add day links that show only the targeted day, and make day 1 visible when no day is targeted."
    ],
    functionalRequirements: ["Clicking \"Day 2\" shows only Day 2's schedule.", "With no `#` in the address, Day 1 is shown."],
    responsiveRequirements: ["The timeline sits on the left edge on mobile; session times move into their own column from 768px.", "The speaker grid adapts from 1 to 4 columns."],
    accessibilityRequirements: ["Hidden days use `display: none`, so screen readers skip them too, and the visible day has a heading.", "Every session time uses `<time datetime>`."],
    hints: [
      "`.schedule:not(:has(:target)) #day-1` can show a default day when nothing is targeted.",
      "Put the line in the list's `::before` and a dot in each item's `::after`.",
      "A session row suits `grid-template-columns: 6rem 1fr`."
    ]
  },
  {
    id: "p045-hotel-booking-interface",
    number: 45,
    title: "Hotel Booking Interface",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A hotel booking page with a search bar, filter chips, room cards with amenities and a booking summary panel.",
    objective: "Design a booking interface where form controls, cards and a summary panel work together across screen sizes.",
    skills: ["Date and number inputs in a search bar", "Checkbox chips with `:has(:checked)`", "A sticky summary sidebar", "Amenity lists"],
    topics: ["html-forms", "html-input-types", "css-pseudo-classes", "css-positioning", "css-grid", "css-cross-browser"],
    estimatedMinutes: 210,
    requiredHtml: ["a search `<form>` with check-in/out dates and guests", "filter chips as labelled checkboxes", "4 room `<article>`s", "an amenities `<ul>` per room", "an `<aside>` booking summary with a `<dl>`"],
    requiredCss: ["`label:has(input:checked)` chip styles", "a sticky summary from 1024px", "a two-column grid: rooms + summary", "date inputs styled consistently in two browsers"],
    steps: [
      "Build a search bar with check-in and check-out dates, a guests number input and a Search button.",
      "Add filter chips (Free cancellation, Breakfast, Sea view…) as checkboxes inside labels styled as pills.",
      "Style a chip as selected with `label:has(input:checked)`.",
      "Create four room cards with photo, name, amenities, price per night and a Select room button.",
      "Add a booking-summary `<aside>` with dates, nights, room and total in a `<dl>`, sticky beside the rooms from 1024px."
    ],
    functionalRequirements: ["Chips toggle on click and with the Space key.", "Check-out has a `min` at least one day after the sample check-in."],
    responsiveRequirements: ["The summary moves below the rooms under 1024px.", "Search fields stack under 600px."],
    accessibilityRequirements: ["Chips are real checkboxes with labels, so their checked state is announced.", "The summary uses a `<dl>` so each value has a label."],
    hints: [
      "`:has()` lets a parent react to the state of something inside it.",
      "Date inputs look different in each browser — set font, padding and border, and accept small differences.",
      "Sticky only works when the aside's column is taller than the aside itself."
    ]
  },
  {
    id: "p046-multi-section-saas-landing-page",
    number: 46,
    title: "Multi-Section SaaS Landing Page",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A software landing page with logo strip, alternating feature rows, integrations, pricing, testimonials and a final call to action.",
    objective: "Build a long marketing page from reusable section and component classes, with every colour and space coming from tokens.",
    skills: ["Section and component architecture", "Design tokens in custom properties", "A greyscale logo strip", "Alternating media/text rows"],
    topics: ["css-variables", "css-architecture", "css-layout-patterns", "css-flexbox", "css-grid", "html-semantic"],
    estimatedMinutes: 240,
    requiredHtml: ["`<header>` with nav and a call to action", "a hero with a product screenshot `<img>`", "a logo-strip `<ul>`", "3 alternating feature rows", "pricing, testimonials and final CTA sections", "`<footer>`"],
    requiredCss: ["tokens for colour, type scale, radius and spacing", "a `.section` class with consistent `padding-block`", "`.feature-row:nth-of-type(even)` using `row-reverse`", "`.button` and `.button--secondary` components"],
    steps: [
      "Write a token sheet first: 6 colours, 5 font sizes, 3 radii and a 6-step spacing scale on `:root`.",
      "Create a `.section` and `.container` pattern and use it for every section on the page.",
      "Build three feature rows with an image and text; reverse every second row on desktop.",
      "Add a greyscale logo strip, a pricing section reusing a card component, three testimonials and a final CTA.",
      "Audit your CSS and replace every hard-coded colour or spacing value with a token."
    ],
    functionalRequirements: ["Changing one token visibly updates every element that uses it.", "All buttons use the same component classes."],
    responsiveRequirements: ["Feature rows stack image-above-text below 900px, regardless of the reversed order.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["Reversed rows keep a logical reading order in the HTML.", "Logo images use the company names as alt text."],
    hints: [
      "`row-reverse` changes visual order only — keep the source order sensible.",
      "Search your stylesheet for `#` and `px` to find hard-coded values.",
      "`filter: grayscale(1)` makes a mixed set of logos look consistent."
    ]
  },
  {
    id: "p047-restaurant-reservation-interface",
    number: 47,
    title: "Responsive Restaurant Reservation Interface",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A table-booking form with party size, date, a time-slot picker built from radios, seating preference and contact details.",
    objective: "Turn radio buttons into a visual time-slot grid and guide the user through a booking in clear numbered steps.",
    skills: ["Radio buttons styled as a slot grid", "Disabled options for unavailable slots", "Numbered steps inside one form", "Grid for compact option layouts"],
    topics: ["html-forms", "html-input-types", "html-labels-validation", "css-grid", "css-pseudo-classes", "css-selectors"],
    estimatedMinutes: 210,
    requiredHtml: ["a `<form>` with 3 numbered `<fieldset>`s", "a party-size `<select>`", "`<input type=\"date\" min=\"…\">`", "time slots as radios, some `disabled`", "a seating radio group", "contact fields"],
    requiredCss: ["`repeat(auto-fill, minmax(5rem, 1fr))` for the slot grid", "`input:checked + label` selected style", "`input:disabled + label` unavailable style", "CSS counters on the legends"],
    steps: [
      "Split the form into three fieldsets — 1. When, 2. Where to sit, 3. Your details — numbered with a CSS counter.",
      "Add party size, a date with a `min`, and 12 time slots as radio buttons in one group.",
      "Disable three slots as fully booked and style them clearly as unavailable.",
      "Style the slot labels as buttons in a grid; show the selected slot with a filled background and border.",
      "Add seating options (Inside, Terrace, Bar) and contact fields, then a submit button."
    ],
    functionalRequirements: ["Only one time slot can be chosen, and disabled slots can't be selected.", "The date picker refuses dates before your `min`."],
    responsiveRequirements: ["Slots wrap from 3 to 6 per row depending on the width.", "Every slot is at least 44px tall."],
    accessibilityRequirements: ["Unavailable slots say \"fully booked\" in text, not just with a strikethrough.", "Each fieldset's legend is read before its options."],
    hints: [
      "Keep each radio directly before its label so `+` can reach the label.",
      "`:disabled` matches the input; style its label with `input:disabled + label`.",
      "Counters can be shown with `legend::before`."
    ]
  },
  {
    id: "p048-music-artist-website",
    number: 48,
    title: "Music Artist Website",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "An artist site with an album hero, a track list with audio players, a tour-dates table, a music video and a merch strip.",
    objective: "Present audio and video accessibly and build a strong visual identity with blend modes, gradients and bold type.",
    skills: ["`<audio controls>` with multiple sources", "A table that reflows into cards", "`background-blend-mode`", "Display typography with system fonts"],
    topics: ["html-audio-video", "html-tables", "css-colors-backgrounds", "css-gradients", "css-typography", "css-media-queries"],
    estimatedMinutes: 210,
    requiredHtml: ["a hero with the album cover `<img>`", "a track `<ol>` with an `<audio controls>` per track", "`<audio>` with two `<source>` types", "a tour `<table>` with caption", "`<video controls>` with `<track>`", "a merch `<ul>`"],
    requiredCss: ["a blend mode on the hero", "a table that becomes stacked cards under 600px", "uppercase display headings with `letter-spacing`", "a styled box around each native audio player"],
    steps: [
      "Create a hero with the album cover, release name and a Listen now link, tinted with a blend mode.",
      "List five tracks, each with a title, duration and an `<audio controls preload=\"none\">` with MP3 and OGG sources.",
      "Add a tour table (date, city, venue, tickets) and a music video with captions.",
      "Under 600px, reflow the tour table so each row looks like a card, using `display: block` and `data-label` attributes.",
      "Finish with a merch strip and a footer in the same visual identity."
    ],
    functionalRequirements: ["Each audio player works and only downloads when played (`preload=\"none\"`).", "Ticket links in the tour table have unique names."],
    responsiveRequirements: ["The tour table becomes stacked cards with visible labels under 600px.", "No horizontal scroll at 360px."],
    accessibilityRequirements: ["On mobile, every table value has a visible label.", "The video has captions."],
    hints: [
      "`content: attr(data-label)` can show column names next to values on mobile.",
      "Native `<audio>` controls can barely be restyled — style the box around them instead.",
      "Blend modes mix with whatever is underneath, so test with your real image."
    ]
  },
  {
    id: "p049-photography-portfolio",
    number: 49,
    title: "Photography Portfolio",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A photographer's portfolio with a masonry-style gallery, a CSS-only lightbox and an about section.",
    objective: "Build a masonry-like gallery with CSS columns and a lightbox that opens and closes with anchors.",
    skills: ["Masonry with CSS multi-column", "`break-inside: avoid`", "A `:target` lightbox overlay", "Hover effects with `filter`"],
    topics: ["css-layout-patterns", "css-pseudo-classes", "css-positioning", "css-z-index", "html-images-alt", "html-responsive-images"],
    estimatedMinutes: 210,
    requiredHtml: ["a gallery `<ul>` of 12 linked thumbnails", "`<img srcset>` thumbnails", "a lightbox `<div id>` per photo", "a close link inside each lightbox", "an about `<section>`"],
    requiredCss: ["`columns: 18rem 3`", "`break-inside: avoid` on items", "`.lightbox:target { display: grid; }`", "a `position: fixed; inset: 0` overlay with `z-index`", "`filter: grayscale()` removed on hover"],
    steps: [
      "Add 12 photos of mixed orientations; each thumbnail links to a lightbox id such as `#photo-3`.",
      "Lay the gallery out with CSS columns and stop items splitting across columns.",
      "Create a lightbox element per photo that is hidden by default and shown full screen when targeted.",
      "Add a Close link (`href=\"#gallery\"`) and previous/next links inside each lightbox.",
      "Add a hover effect that removes a slight greyscale filter, and an about section with a portrait."
    ],
    functionalRequirements: ["Clicking a thumbnail opens its photo full screen; Close returns to the gallery.", "Previous and next links move through the photos."],
    responsiveRequirements: ["1 column at 360px, 2 at 700px and 3 at 1100px.", "Large images fit inside the viewport (`max-height: 90vh`)."],
    accessibilityRequirements: ["The Close link is the first focusable element inside each lightbox.", "Thumbnail alt text describes each photo."],
    hints: [
      "CSS columns fill top-to-bottom, then left-to-right, so the reading order differs from a grid.",
      "`object-fit: contain` keeps the whole photo visible in the lightbox.",
      "Linking Close to the gallery's id returns people to the right spot on the page."
    ]
  },
  {
    id: "p050-complete-responsive-business-website",
    number: 50,
    title: "Complete Responsive Business Website",
    difficulty: "intermediate",
    complexity: 3,
    shortDescription: "A four-page small-business site — Home, Services, About, Contact — with shared components and one responsive system.",
    objective: "Plan and deliver a multi-page site using a shared component library, consistent breakpoints and accessible navigation.",
    skills: ["Multi-page architecture", "Shared component CSS", "Consistent `em`-based breakpoints", "Accessible navigation across pages"],
    topics: ["css-architecture", "css-responsive-design", "css-media-queries", "html-metadata", "html-links-navigation", "html-forms"],
    estimatedMinutes: 300,
    requiredHtml: ["four `.html` pages with a shared header and footer", "a unique `<title>` and meta description per page", "a services grid", "a team section", "a contact form and `<address>`"],
    requiredCss: ["a components section (buttons, cards, form fields) used on every page", "two shared breakpoints used everywhere", "layout utilities (`.container`, `.stack`, `.grid`)", "page-specific rules kept to a small final section"],
    steps: [
      "Plan the site map and a component list (header, footer, button, card, form field, CTA band) before writing code.",
      "Write the shared CSS in order: tokens, base, layout utilities, components, then small page-specific rules.",
      "Build Home (hero, services preview, testimonials), Services (6 service cards), About (story, team) and Contact (form + address).",
      "Use the same two breakpoints (for example `48em` and `64em`) in every media query.",
      "Test every page at 360px, 768px and 1280px, and once with the keyboard only."
    ],
    functionalRequirements: ["Every internal link works and each page marks its own nav item as current.", "The contact form validates its required fields."],
    responsiveRequirements: ["Every page works from 320px to 1920px with no horizontal scroll.", "Only the two agreed breakpoints are used."],
    accessibilityRequirements: ["Every page has a skip link, landmarks and one `<h1>`.", "Body text passes 4.5:1 contrast on every page."],
    hints: [
      "If you are writing the same rule on two pages, it's a component.",
      "`em`-based media queries respond to the visitor's font-size setting.",
      "A `.stack > * + * { margin-top: … }` rule handles most vertical spacing."
    ]
  }
]);
