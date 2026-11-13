/*
 * corrections-3-advanced.js — self-check corrections for projects 51–75
 * ---------------------------------------------------------------------
 * Same structure as corrections-1-beginner.js.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};
HCM.data.corrections = Object.assign(HCM.data.corrections || {}, {
  51: {
    expectedHtml: ["Promo bar, header, category `<nav>` of 8 tile links.", "A featured `<section>` with 6 tile `<a>`/`<article>` elements.", "A best-sellers `<ul tabindex=\"0\" aria-label>` scroller, a newsletter form and a footer."],
    expectedCss: ["`.bento { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(10rem, auto); }`", "Span classes such as `.tile--wide { grid-column: span 2; }` and `.tile--big { grid-column: span 2; grid-row: span 2; }`", "Spans reset with `grid-column: auto` at 560px.", "`.scroller { overflow-x: auto; scroll-snap-type: x mandatory; }`"],
    checks: {
      functional: ["Tab through the tiles: each has a visible focus ring and a name that says where it goes.", "Use the arrow keys on the focused scroller: it moves."],
      responsive: ["At 1280px, 900px and 560px the bento has no empty holes or overlaps.", "At 360px the page never scrolls sideways."],
      accessibility: ["Measure text on the brightest tile image: at least 4.5:1 with the overlay.", "Inspect the scroller: it has `tabindex=\"0\"` and an `aria-label`."]
    },
    commonMistakes: [
      { mistake: "Spans kept on mobile, creating a single super-wide tile and overflow.", fix: "Reset spans at small breakpoints." },
      { mistake: "Bento holes after changing spans.", fix: "Plan the grid on paper, or use `grid-auto-flow: dense` carefully." },
      { mistake: "Whole tiles made of `<div>`s with click styles.", fix: "Make each tile a link (or contain one) so it works with the keyboard." }
    ]
  },
  52: {
    expectedHtml: ["`<input type=\"checkbox\" id=\"collapse\" class=\"visually-hidden\">` with a `<label for=\"collapse\">`, placed before `.app`.", "Sidebar links with an icon and a text `<span>`.", "Four KPI cards with `<data value>` and a chart `<figure>` with a matching hidden `<table>`."],
    expectedCss: ["`.app { display: grid; grid-template-columns: 15rem 1fr; transition: grid-template-columns .25s; }`", "`#collapse:checked ~ .app { grid-template-columns: 4.5rem 1fr; }` with labels visually hidden.", "`.bar { height: calc(var(--value) * 1%); }`", "`.trend--up::before { content: \"▲\"; }` and a down variant."],
    checks: {
      functional: ["Tab to the collapse toggle and press Space: the sidebar shrinks to icons and back.", "Change one bar's `--value` from 40 to 90: only that bar grows."],
      responsive: ["At 767px the sidebar is a top bar and the toggle is hidden.", "Resize from 360px to 1280px: KPIs go 1 → 2 → 4 per row."],
      accessibility: ["Collapse the sidebar and inspect a link: its name is still \"Reports\", not empty.", "Find the chart's hidden table: it lists the same 12 values."]
    },
    commonMistakes: [
      { mistake: "Removing link text in the collapsed state with `display: none`.", fix: "Hide it visually so the accessible name remains." },
      { mistake: "Bars sized in pixels typed separately for each bar.", fix: "Pass the data with `--value` and calculate the height once." },
      { mistake: "The checkbox placed inside `.app`, so `~` can't reach it.", fix: "Place it before `.app`, or use `:has()` on a common parent." }
    ]
  },
  53: {
    expectedHtml: ["A toolbar `<fieldset>` with a legend and three range radios.", "A donut `<figure>` with `<figcaption>` and a legend `<ul>` listing percentages.", "A top-pages `<table>` and a regions `<ol>` with bar `<span>`s."],
    expectedCss: ["`.donut { background: conic-gradient(var(--c1) 0 calc(var(--a) * 1%), var(--c2) 0 calc((var(--a) + var(--b)) * 1%), var(--c3) 0); border-radius: 50%; }` with a hole.", "`.card { container-type: inline-size; }` and `@container (min-width: 30rem) { … }`", "`grid-template-areas` for the dashboard.", "`.bar { width: calc(var(--share) * 1%); }`"],
    checks: {
      functional: ["Change `--a` from 50 to 70: the first donut segment grows and the others move.", "Select 30 days: a clear selected style appears on that segment."],
      responsive: ["Place the donut card in a narrow and a wide area: the legend moves from below to beside it.", "At 767px the dashboard is a single column."],
      accessibility: ["Read the legend: every segment's percentage is written as text.", "Inspect the range control: it's a radio group with a legend."]
    },
    commonMistakes: [
      { mistake: "Using `@media` where the card's own width matters.", fix: "Use container queries for components that live in different-width slots." },
      { mistake: "Donut colours meaning nothing without a legend.", fix: "Always include a legend with values." },
      { mistake: "Hard-coding gradient stop percentages.", fix: "Drive stops from custom properties so data can change." }
    ]
  },
  54: {
    expectedHtml: ["One `<form>` with `<fieldset id=\"step-1\">` … `\"step-4\"`, each with a legend.", "Next/Back links (`href=\"#step-2\"`), an `<ol>` step indicator, a review `<dl>` and a submit button."],
    expectedCss: ["`fieldset { display: none; } fieldset:target { display: block; }`", "`form:not(:has(fieldset:target)) #step-1 { display: block; }`", "`form:has(#step-3:target) .steps li:nth-child(-n + 2) { /* complete */ }` style rules.", "A short entrance transition/animation on the visible fieldset."],
    checks: {
      functional: ["Load the page with no hash: step 1 is visible.", "Click Next three times: you reach Review and the indicator shows steps 1–3 as complete."],
      responsive: ["At 479px the indicator shows numbers only; at 480px numbers and labels.", "At 360px the Back/Next buttons are full width."],
      accessibility: ["Inspect the current indicator item: `aria-current=\"step\"` and text \"Step 2 of 4\".", "Check each legend: it matches the step's name."]
    },
    commonMistakes: [
      { mistake: "A blank form when the URL has no hash.", fix: "Show step 1 by default with `:not(:has(:target))`." },
      { mistake: "Required fields on hidden steps silently blocking submit.", fix: "Test the final submit; keep required fields where users will see them or explain the limitation." },
      { mistake: "Indicator showing state by colour only.", fix: "Add text and `aria-current`." }
    ]
  },
  55: {
    expectedHtml: ["`<article>` with a `<header>` holding kicker, `<h1>`, standfirst and byline.", "Full-bleed and breakout `<figure>`s with captions.", "Pull quotes and a margin note in `<aside>`."],
    expectedCss: ["`grid-template-columns: [full-start] minmax(1rem, 1fr) [wide-start] minmax(0, 8rem) [content-start] min(65ch, 100%) [content-end] minmax(0, 8rem) [wide-end] minmax(1rem, 1fr) [full-end];`", "`.article > * { grid-column: content; } .wide { grid-column: wide; } .full { grid-column: full; }`", "`p:first-of-type::first-letter` drop cap plus `@supports (initial-letter: 3)`.", "`h1 { text-wrap: balance; } p { hyphens: auto; }`"],
    checks: {
      functional: ["Resize the window: breakout images stay aligned to the same grid lines.", "Open in a browser that supports `initial-letter`: the drop cap spans three lines."],
      responsive: ["At 767px everything sits in the content column with side padding.", "At 1200px pull quotes move into the margin."],
      accessibility: ["Read the article with a screen reader or reader view: pull quotes don't break the sentence flow.", "Inspect the first word: the drop cap is still part of it in the text."]
    },
    commonMistakes: [
      { mistake: "Wrapping breakout images in extra containers with negative margins.", fix: "Use named grid lines so any child can choose its width." },
      { mistake: "A drop cap made from a separate `<span>` letter.", fix: "Use `::first-letter` so the word stays whole." },
      { mistake: "`hyphens: auto` doing nothing.", fix: "Set the correct `lang` attribute on `<html>`." }
    ]
  },
  56: {
    expectedHtml: ["A labelled filter radio group (All checked by default).", "A `<ul class=\"wall\">` of 12 `<li data-type>` with `<figure>`, `<img alt>` and `<figcaption>`."],
    expectedCss: ["`.wall { display: grid; grid-template-columns: repeat(6, 1fr); grid-auto-rows: 8rem; }` with explicit spans.", "`figure { display: grid; } figure > * { grid-area: 1 / 1; }` with the caption above via `z-index`.", "`.gallery:has(#f-photo:checked) li:not([data-type=\"photo\"]) { display: none; }`", "`@supports (grid-template-rows: subgrid) { … }` with a fallback."],
    checks: {
      functional: ["Choose Photo: only photos remain and no holes are left.", "Choose All again: the featured piece is the largest tile."],
      responsive: ["At 699px the wall uses 2 columns with simpler spans.", "At 360px captions are readable over every image."],
      accessibility: ["Focus the filter and use the arrow keys: the filter changes.", "With a filter active, inspect a hidden artwork: it's `display: none`."]
    },
    commonMistakes: [
      { mistake: "Absolutely positioning captions inside each figure.", fix: "Place image and caption in the same grid cell — simpler and responsive." },
      { mistake: "Large spans remaining in filtered views, leaving gaps.", fix: "Reset spans when a filter is active, or use dense packing." },
      { mistake: "Filtering by hiding with `opacity: 0`.", fix: "Use `display: none` so hidden items leave the layout and the accessibility tree." }
    ]
  },
  57: {
    expectedHtml: ["Four gallery radios (first checked), a `.stage` with four `<img>`s and four thumbnail `<label>`s.", "Colour and size radio groups in fieldsets; a labelled quantity number input.", "A specs `<table>` and reviews with text ratings and `<time>`."],
    expectedCss: ["`.stage { display: grid; } .stage img { grid-area: 1 / 1; opacity: 0; transition: opacity .3s; }`", "`#img-2:checked ~ .stage .img-2 { opacity: 1; }` for each image.", "`.swatch input:checked + span { outline: 3px solid …; }`", "`.buy { position: sticky; top: 1rem; }` in a 3fr / 2fr grid from 1024px."],
    checks: {
      functional: ["Click the third thumbnail: the third large image fades in.", "Pick Red then Blue: only Blue stays selected."],
      responsive: ["At 1023px the buy box is below the gallery; at 1024px beside it.", "At 360px the thumbnail row scrolls sideways inside itself."],
      accessibility: ["Inspect a swatch: its accessible name is the colour's name.", "Inspect a thumbnail label: it says which view it shows."]
    },
    commonMistakes: [
      { mistake: "Images stacked with absolute positioning and fixed heights.", fix: "Stack them in one grid cell so the stage keeps its natural size." },
      { mistake: "Colour swatches with no text name.", fix: "Add a visually hidden name inside each label." },
      { mistake: "Quantity field without `min`/`max`.", fix: "Set sensible limits so the browser validates them." }
    ]
  },
  58: {
    expectedHtml: ["`<header>` with `position: relative`, logo and `<nav aria-label=\"Main\">`.", "Top-level `<li>`s each containing a link and a `.panel` with three titled link lists and a promo tile."],
    expectedCss: ["`.panel { position: absolute; left: 0; right: 0; top: 100%; visibility: hidden; opacity: 0; transition: opacity .15s, visibility 0s linear .15s; }`", "`li:hover > .panel, li:focus-within > .panel { visibility: visible; opacity: 1; transition-delay: .15s, 0s; }`", "`header { z-index: 20; }` above page content.", "Below 1024px: static, stacked panels."],
    checks: {
      functional: ["Tab from the first top item into its panel links and onward: the panel stays open, then closes after the last link.", "Move the mouse from a top item down into its panel: it doesn't flicker closed."],
      responsive: ["At 1023px categories stack with their links listed underneath.", "At 1280px no panel extends beyond the window edges."],
      accessibility: ["Count the links in one panel and Tab through them: every one receives focus.", "Tab all the way through the menu: focus never gets stuck."]
    },
    commonMistakes: [
      { mistake: "A gap between the top link and panel that kills hover.", fix: "Attach the panel directly under the header (top: 100%) with no margin." },
      { mistake: "Panels hidden with `display: none` that can't be revealed by focus.", fix: "Use `visibility` + `opacity` with `:focus-within`." },
      { mistake: "Panel appears behind the hero image.", fix: "Check stacking contexts and give the header a higher `z-index`." }
    ]
  },
  59: {
    expectedHtml: ["Hero `<section>` with `<h1>`, `<p>`, two links and a scroll cue link to the next section's id.", "Illustration marked decorative (`aria-hidden` SVG or empty alt)."],
    expectedCss: ["`@keyframes rise-in`, `@keyframes float` and `@keyframes gradient-shift`.", "`.reveal { animation: rise-in .7s cubic-bezier(.2,.7,.2,1) both; animation-delay: calc(var(--delay) * 120ms); }`", "`.hero { overflow: hidden; background-size: 300% 300%; animation: gradient-shift 20s ease infinite alternate; }`", "`@media (prefers-reduced-motion: reduce) { .reveal, .art, .hero { animation: none; } }`"],
    checks: {
      functional: ["Reload: headline, text and buttons arrive one after another, and nothing flashes before its turn.", "Click the scroll cue: the next section comes into view."],
      responsive: ["At 360px the illustration sits below the text without overflow.", "During the animation at 360px, no horizontal scrollbar appears."],
      accessibility: ["Turn on reduced motion and reload: everything appears at once without movement.", "Watch the page: nothing flashes faster than three times per second."]
    },
    commonMistakes: [
      { mistake: "Content invisible for users without animations.", fix: "Use `fill-mode: both` and make sure the final state is the normal state." },
      { mistake: "Animating `width`, `top` or `margin`.", fix: "Animate `transform` and `opacity`." },
      { mistake: "Infinite bouncy motion that never stops.", fix: "Keep loops subtle and stop them under reduced motion." }
    ]
  },
  60: {
    expectedHtml: ["Three plan cards, then a `<table>` with `<caption>`, `<thead>`, and grouped `<tbody>`s.", "Info `<button>`s with an adjacent `<span role=\"tooltip\" id>` referenced by `aria-describedby`.", "`data-label` attributes on data cells, an add-ons `<fieldset>` and `<details>` FAQ."],
    expectedCss: ["`.table-wrap { max-height: 70vh; overflow: auto; } thead th { position: sticky; top: 0; }`", "`.tip { visibility: hidden; } .info:hover + .tip, .info:focus-visible + .tip { visibility: visible; }`", "`@media (max-width: 767px)` reflow: rows as blocks, `td::before { content: attr(data-label); }`", "`.col--featured` cells highlighted."],
    checks: {
      functional: ["Tab to an ⓘ button: its tooltip appears; Tab away: it disappears.", "Scroll the table: the header row stays visible."],
      responsive: ["At 767px every value appears with its label.", "At 360px the page doesn't scroll sideways."],
      accessibility: ["Inspect an ⓘ button: `aria-describedby` points to its tooltip text.", "Inspect the header cells: `scope` attributes are present."]
    },
    commonMistakes: [
      { mistake: "Tooltips only on hover.", fix: "Also show them on focus so keyboard and touch users get them." },
      { mistake: "Losing column labels in the mobile reflow.", fix: "Print them from `data-label` with `::before`." },
      { mistake: "Highlighting the featured column only in the header.", fix: "Apply the class to every cell in that column." }
    ]
  },
  61: {
    expectedHtml: ["Four `<input type=\"radio\" name=\"tabs\" id=\"tab-1\">` … with `checked` on the first.", "A `<label for>` after each radio acting as a tab.", "Four panel `<section>`s with headings inside a `.tabs` wrapper."],
    expectedCss: ["`.panel { display: none; } .tabs:has(#tab-2:checked) .panel-2 { display: block; }` (and the other three).", "`input:checked + label { border-bottom-color: …; font-weight: 700; }`", "`input:focus-visible + label { outline: 3px solid …; }`", "`.tablist { overflow-x: auto; }` and a fade-in keyframe on panels."],
    checks: {
      functional: ["Load the page: the first tab and panel are active.", "Focus the tabs and press the right arrow: the next tab and its panel activate."],
      responsive: ["At 360px the tab row scrolls sideways inside itself.", "Panels fill the full width at every size."],
      accessibility: ["Find your CSS comment explaining the radio approach.", "Inspect hidden panels: `display: none`, so screen readers skip them."]
    },
    commonMistakes: [
      { mistake: "`display: none` on the radios, so the keyboard can't reach them.", fix: "Hide them visually with the clip technique." },
      { mistake: "Adding ARIA tab roles without the JavaScript they need.", fix: "Keep native radio semantics in a CSS-only version." },
      { mistake: "No visible focus on the tabs.", fix: "Use `input:focus-visible + label` to draw a ring." }
    ]
  },
  62: {
    expectedHtml: ["Five `<details name=\"settings\">`, each with a `<summary>` (icon + text) and a content `<div>`.", "Labelled inputs and checkboxes inside each panel; written warning text in the Danger zone."],
    expectedCss: ["`summary { list-style: none; } summary::-webkit-details-marker { display: none; }`", "`summary::after { transition: transform .2s; } details[open] > summary::after { transform: rotate(180deg); }`", "`@supports (interpolate-size: allow-keywords) { details::details-content { height: 0; overflow: hidden; transition: height .3s, content-visibility .3s allow-discrete; } details[open]::details-content { height: auto; } }`", "`.danger { border-color: …; }`"],
    checks: {
      functional: ["Open Profile, then Billing: Profile closes.", "Focus a summary and press Enter, then Space: it opens and closes."],
      responsive: ["Measure a summary on a phone-sized window: at least 48px tall.", "At 360px panel contents fit without sideways scroll."],
      accessibility: ["Turn on reduced motion: panels open instantly.", "View in greyscale: the danger panel's warning text still explains the risk."]
    },
    commonMistakes: [
      { mistake: "A JavaScript-free accordion that lets every panel open at once.", fix: "Give the details the same `name` for exclusive behaviour." },
      { mistake: "Height animation that breaks in other browsers.", fix: "Wrap it in `@supports` and keep the default instant toggle." },
      { mistake: "A rotating chevron that's actually a text character in the HTML.", fix: "Draw it with `::after` so it's decorative." }
    ]
  },
  63: {
    expectedHtml: ["Four `.alert` elements with an icon and a text label (\"Error:\" etc.); only the error uses `role=\"alert\"`.", "A `<div role=\"status\">` toast region, a bell `<button>` with a badge and an accessible name including the count.", "A notification panel `<section>` with read/unread items."],
    expectedCss: ["`.alert { border-left: 4px solid var(--tone); } .alert--success { --tone: …; }`", "`@keyframes slide-in` and `@keyframes shrink { to { transform: scaleX(0); } }` for timers.", "`.toasts { position: fixed; right: 1rem; bottom: 1rem; z-index: 50; }`", "`.bell { position: relative; } .badge { position: absolute; top: -.25rem; right: -.25rem; }` and a reduced-motion override."],
    checks: {
      functional: ["Change one alert's `--tone`: only its colour changes.", "Reload: the three toasts slide in one after another and their timer bars shrink."],
      responsive: ["At 599px toasts span the full width at the bottom.", "At 360px the notification panel needs no sideways scroll."],
      accessibility: ["Inspect the bell button's name: it includes the unread count (\"Notifications, 3 unread\").", "Check roles: the toast region is `status`; only the error alert is `alert`."]
    },
    commonMistakes: [
      { mistake: "Every message marked `role=\"alert\"`.", fix: "Use `status` for polite updates; reserve `alert` for urgent errors." },
      { mistake: "Copying full rule sets for each variant.", fix: "Change one custom property per variant." },
      { mistake: "An endlessly wiggling bell.", fix: "Limit attention animations to one or two runs." }
    ]
  },
  64: {
    expectedHtml: ["A cover `<img alt=\"\">` and an avatar `<img>` with the person's name as alt.", "`<h1>` name, a stats `<dl>`, a settings `<form>` with labelled checkbox switches.", "An activity `<ol>` and a badges `<ul>`."],
    expectedCss: ["`.avatar { margin-top: -4rem; border: 4px solid var(--page-bg); border-radius: 50%; }` (half the avatar height).", "`.switch { appearance: none; width: 2.75rem; height: 1.5rem; border-radius: 1rem; } .switch::before { /* knob */ } .switch:checked::before { transform: translateX(1.25rem); }`", "`grid-template-areas: \"aside main\"` from 900px.", "Timeline line and dots via pseudo-elements."],
    checks: {
      functional: ["Tab to a switch and press Space: it toggles and shows on/off clearly.", "Resize the window: the avatar stays centred on the cover's bottom edge."],
      responsive: ["At 899px the layout is one column.", "At 360px stats wrap without overflow."],
      accessibility: ["View the switches in greyscale: on and off still look different (knob position).", "Inspect the cover image: empty alt because it's decorative."]
    },
    commonMistakes: [
      { mistake: "Positioning the avatar absolutely so it overlaps text below.", fix: "Use a negative margin so it stays in the flow." },
      { mistake: "Switches built from `<div>`s.", fix: "Use real checkboxes so keyboard and screen readers work." },
      { mistake: "On/off shown only by green vs grey.", fix: "Move the knob and add labels or text." }
    ]
  },
  65: {
    expectedHtml: ["Balance cards with `<data value=\"1520.40\">`.", "A spending list with bar spans, a month `<select>` with label.", "A transactions `<table>` with `<caption>`, `<thead>`, `<tbody>` and `<tfoot>` total, plus labelled `<meter low high optimum>`s."],
    expectedCss: ["`.amount, td.num { font-variant-numeric: tabular-nums; text-align: right; }`", "`[data-type=\"debit\"] { color: …; }` with \"−\" in the text.", "`meter::-webkit-meter-optimum-value`, `::-webkit-meter-suboptimum-value`, `::-moz-meter-bar` styles.", "`.table-wrap { overflow-x: auto; }` under 700px."],
    checks: {
      functional: ["Compare 1,234.50 and 98.00 in the amount column: decimal points line up.", "Set a meter's value above `high`: it switches to its warning colour."],
      responsive: ["At 360px the balance cards stack.", "At 699px the table scrolls inside its card."],
      accessibility: ["Read a debit in greyscale: the minus sign makes it clear.", "Read each meter's label: it states spent and budget amounts."]
    },
    commonMistakes: [
      { mistake: "Left-aligned amounts with proportional digits.", fix: "Right-align and use `tabular-nums`." },
      { mistake: "Negative values shown only in red.", fix: "Include a minus sign or the word \"debit\"." },
      { mistake: "Styling meters for one browser only.", fix: "Add both `-webkit-` meter pseudo-elements and `::-moz-meter-bar`." }
    ]
  },
  66: {
    expectedHtml: ["A toolbar with labelled search, status `<select>` and a bulk-action `<button disabled>`.", "A `<table>` with row checkboxes labelled per article and `<th aria-sort=\"ascending\">` on one column.", "A pagination `<nav>` with `aria-current=\"page\"`, a drawer `<aside id>` and an empty-state block."],
    expectedCss: ["`tr:has(input:checked) { background: …; }`", "`th[aria-sort=\"ascending\"]::after { content: \"▲\"; }` and descending.", "`.drawer { transform: translateX(100%); visibility: hidden; } .drawer:target { transform: none; visibility: visible; }`", "`button:disabled { opacity: .5; cursor: not-allowed; }` and BEM names throughout."],
    checks: {
      functional: ["Tick two row checkboxes: both rows highlight.", "Click Edit on a row: the drawer slides in; its close link hides it again."],
      responsive: ["At 767px the author and date columns hide in both header and body.", "At 360px the drawer covers the full width."],
      accessibility: ["Inspect a row checkbox: its label includes the article title.", "Inspect the sorted header: `aria-sort` is set."]
    },
    commonMistakes: [
      { mistake: "Hiding a column in the body but not the header.", fix: "Apply the same `nth-child` rule to `th` and `td`." },
      { mistake: "Every checkbox named just \"Select\".", fix: "Include the row's title in each label." },
      { mistake: "Sort arrows typed into the header text.", fix: "Drive them from `aria-sort` so state and style stay in sync." }
    ]
  },
  67: {
    expectedHtml: ["Top `<header>` with a labelled search.", "Left `<nav aria-label=\"Documentation\">`, `<article>` with h1–h3, two `<pre><code>` blocks, a table and three callouts.", "Right `<nav aria-label=\"On this page\">` and previous/next links."],
    expectedCss: ["`.docs { display: grid; grid-template-columns: 16rem minmax(0, 1fr) 14rem; }` from 1280px.", "`.sidebar { position: sticky; top: 4rem; align-self: start; max-height: calc(100vh - 4rem); overflow: auto; }`", "`pre { counter-reset: line; } .line::before { counter-increment: line; content: counter(line); }`", "`.callout--note`, `--tip`, `--warning` variants."],
    checks: {
      functional: ["Click each on-this-page link: its heading lands below the header, not under it.", "Scroll a long left nav: it scrolls by itself while the article stays put."],
      responsive: ["At 1279px the right column disappears; at 767px the left nav moves above the article.", "At 360px a long code line scrolls inside its block."],
      accessibility: ["List the landmarks in DevTools: the two navs have different names.", "Read each callout: it starts with \"Note:\", \"Tip:\" or \"Warning:\"."]
    },
    commonMistakes: [
      { mistake: "Sticky sidebars stretch to the full grid row and don't stick.", fix: "Add `align-self: start`." },
      { mistake: "Long code lines widen the middle column.", fix: "Use `minmax(0, 1fr)` and `overflow-x: auto` on `<pre>`." },
      { mistake: "Callout meaning shown only by colour.", fix: "Start each with a text label." }
    ]
  },
  68: {
    expectedHtml: ["Banner, avatar, `<h1>` name and stats.", "`<button aria-pressed=\"false\">Follow</button>` and a pressed example.", "A tab `<nav>` with `aria-current`, five post `<article>`s with `<time datetime>` and media lists of 1–4 images, plus a suggestions `<aside>`."],
    expectedCss: ["`.media:has(> :nth-child(2):last-child) { grid-template-columns: 1fr 1fr; }` and rules for 3 and 4 images.", "`.tabs { position: sticky; top: 0; background: …; }`", "`[aria-pressed=\"true\"] { background: …; }`", "Feed + sidebar grid from 1024px."],
    checks: {
      functional: ["Add an image to a two-image post: its grid switches to the three-image layout.", "Scroll the feed: the tab bar sticks to the top."],
      responsive: ["At 1023px the sidebar moves below the feed.", "At 360px every media grid fits the screen."],
      accessibility: ["Inspect post images: each has alt text.", "Inspect the follow buttons: `aria-pressed` reflects their state."]
    },
    commonMistakes: [
      { mistake: "A separate class for each image count.", fix: "Let `:has()` count the children." },
      { mistake: "A transparent sticky bar.", fix: "Give it a background colour." },
      { mistake: "Following state shown by colour only.", fix: "Change the label too (\"Following\") and use `aria-pressed`." }
    ]
  },
  69: {
    expectedHtml: ["`<form role=\"search\">` with a labelled query input and sort select.", "A results-count `<p>` near the top, a facets `<aside>` inside `<details open>` with fieldsets and counts.", "Chips with remove links, ten `<article>` results using `<mark>`, and pagination."],
    expectedCss: ["`mark { background: …; color: …; }` defined for both themes.", "`.facet { display: flex; } .facet__count { margin-left: auto; font-variant-numeric: tabular-nums; }`", "`summary { display: none; }` on wide screens and visible below 900px.", "`.url { overflow-wrap: anywhere; }`"],
    checks: {
      functional: ["Read the chip remove links: each says which filter it removes.", "Below 900px click the facets summary: the panel collapses."],
      responsive: ["At 1280px facets are a sidebar; at 899px they sit above the results.", "Paste a very long URL into a result: it wraps without overflow."],
      accessibility: ["Measure `<mark>` text contrast: at least 4.5:1.", "Navigate by headings: the results count comes before the first result."]
    },
    commonMistakes: [
      { mistake: "Bold `<b>` used for matched terms.", fix: "`<mark>` describes highlighted relevance." },
      { mistake: "Facet counts that jitter in width.", fix: "Use `tabular-nums` and push counts right." },
      { mistake: "Facets in a closed `<details>` on desktop, hiding them.", fix: "Use `<details open>` and hide the summary on wide screens." }
    ]
  },
  70: {
    expectedHtml: ["A hero search `<form>` with labelled fields.", "Eight listing `<article>`s with photo, price, status ribbon text, address and a `<dl>` of facts.", "A map placeholder and a property detail `<section>` with an agent card."],
    expectedCss: ["`.split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }` from 1024px.", "`.map { position: sticky; top: 0; height: 100vh; }`", "`.card { position: relative; overflow: hidden; } .ribbon { position: absolute; transform: rotate(45deg); }`", "`.facts { display: flex; gap: 1rem; }`"],
    checks: {
      functional: ["Scroll the list at 1280px: the map stays visible.", "Read a listing's facts: each number has a word (\"3 bedrooms\")."],
      responsive: ["At 1023px the map becomes a fixed-height block above the list.", "At 360px no listing card overflows."],
      accessibility: ["Inspect the ribbon: \"Sold\" is real text in the card.", "Measure the price overlay contrast: at least 4.5:1."]
    },
    commonMistakes: [
      { mistake: "Ribbon corners sticking out of the card.", fix: "Add `overflow: hidden` to the card." },
      { mistake: "Facts shown as icons with bare numbers.", fix: "Write the label text, and hide decorative icons." },
      { mistake: "Map sticky but cut off at the bottom.", fix: "Set its height to the viewport and `top: 0`." }
    ]
  },
  71: {
    expectedHtml: ["Trip-type radios, from/to/date/passenger fields.", "A date strip `<ul>` of radio labels with prices.", "Four flight `<article>`s and a seat map of checkboxes with labels like \"Seat 4C, aisle\"; taken seats `disabled`."],
    expectedCss: ["`.seats { display: grid; grid-template-columns: repeat(3, 1fr) 1.5rem repeat(3, 1fr); }` with the aisle column left empty.", "`input:checked + label`, `input:disabled + label` and `.exit` seat styles.", "`.route::before { content: \"\"; position: absolute; height: 2px; left: 0; right: 0; }` with stop dots.", "`.dates { overflow-x: auto; scroll-snap-type: x mandatory; }`"],
    checks: {
      functional: ["Click a taken seat: nothing changes; click a free one: it becomes selected.", "Swipe the date strip: it snaps to a day."],
      responsive: ["At 360px each flight card stacks times, duration and price.", "At 360px seats are at least 32px wide."],
      accessibility: ["Inspect a seat checkbox: its label includes seat number and position.", "Inspect a taken seat: disabled and labelled \"taken\"."]
    },
    commonMistakes: [
      { mistake: "Making the aisle with a margin on one seat.", fix: "Use an empty grid column so rows stay aligned." },
      { mistake: "Taken seats shown only in grey.", fix: "Add a ✕ or pattern plus text." },
      { mistake: "Date strip that scrolls the whole page sideways.", fix: "Contain overflow in the strip itself." }
    ]
  },
  72: {
    expectedHtml: ["A pause checkbox with label before the demo grid.", "Twelve `<figure>` tiles with `<figcaption>` naming the technique and a `<code>` property.", "Hover demos that contain a focusable element (button or link)."],
    expectedCss: ["At least eight `@keyframes`, including one using `steps()`.", "A flip card with `perspective`, `transform-style: preserve-3d` and `backface-visibility: hidden`.", "`body:has(#pause:checked) .demo * { animation-play-state: paused; }`", "`.demo { --duration: 1.2s; --ease: …; }` and a global reduced-motion rule."],
    checks: {
      functional: ["Tick Pause: every animation freezes; untick: they resume.", "Tab to each hover demo: the effect plays on focus too."],
      responsive: ["At 360px tiles are one column; at 1280px three or four.", "Watch each tile: no animation spills outside it."],
      accessibility: ["Turn on reduced motion: loops stop and a static frame shows.", "Watch the flashing demos: none flash more than three times per second."]
    },
    commonMistakes: [
      { mistake: "Hover-only effects with nothing focusable.", fix: "Give each demo a focusable element and use `:focus-visible`." },
      { mistake: "Flip card shows a mirrored back face.", fix: "Add `backface-visibility: hidden` to both faces." },
      { mistake: "A different keyframe for each speed.", fix: "Reuse keyframes and vary `--duration`." }
    ]
  },
  73: {
    expectedHtml: ["A `<nav>` to seven component sections, each `<section>` with `<h2>`.", "Variant and state examples, including real `disabled` attributes.", "A `<pre><code>` usage snippet per component and a static `<dialog open>` example."],
    expectedCss: ["`@layer tokens, base, components, utilities;` declared at the top.", "Primitive tokens (`--teal-700`) and semantic tokens (`--color-action: var(--teal-700)`).", "BEM classes: `.btn`, `.btn--secondary`, `.btn__icon`.", "Documentation state classes `.is-hover`, `.is-focus`."],
    checks: {
      functional: ["Change `--color-action`: every primary component updates.", "Copy a component's snippet into a blank page with the stylesheet: it renders correctly."],
      responsive: ["At 360px variant rows wrap neatly.", "At 360px code snippets scroll inside their blocks."],
      accessibility: ["Inspect disabled examples: they use the `disabled` attribute.", "Measure a focus ring: at least 3:1 against its background."]
    },
    commonMistakes: [
      { mistake: "Components referencing primitive tokens directly.", fix: "Use semantic tokens so themes can remap them." },
      { mistake: "Utilities losing to component styles.", fix: "Put utilities in the last layer." },
      { mistake: "Disabled examples styled but still clickable.", fix: "Use the `disabled` attribute on real buttons." }
    ]
  },
  74: {
    expectedHtml: ["Five pages: home, category, product, cart, checkout — sharing header (with basket badge) and footer.", "Breadcrumbs with `aria-current=\"page\"` on inner pages.", "Cart `<table>` with labelled quantity inputs and `<tfoot>` totals; checkout `<form>` with fieldsets and an order-summary `<aside>`."],
    expectedCss: ["One stylesheet: tokens, base, layout, components, pages.", "`.basket-badge` positioned on the header icon.", "Cart table reflow under 700px.", "`.checkout { grid-template-areas: \"summary\" \"form\"; }` on mobile and `\"form summary\"` on desktop."],
    checks: {
      functional: ["Click home → category → product → cart → checkout: the journey works.", "Open each page: the header and basket badge are identical."],
      responsive: ["At 699px cart rows become stacked cards.", "At 360px the order summary appears above the checkout form."],
      accessibility: ["Inspect a quantity input: its label includes the product name.", "Inspect breadcrumbs: the last item has `aria-current=\"page\"`."]
    },
    commonMistakes: [
      { mistake: "Slightly different headers on each page.", fix: "Build the header once and copy it exactly." },
      { mistake: "Inline `style=\"…\"` patches for page tweaks.", fix: "Add a page-level class in the stylesheet." },
      { mistake: "Collecting realistic card details.", fix: "Practice forms must use clearly fake example fields." }
    ]
  },
  75: {
    expectedHtml: ["Four pages with shared header/footer and `<meta name=\"color-scheme\" content=\"light dark\">`.", "Feature sections, pricing cards + comparison table, and a blog index of six cards.", "A `<picture>` with `<source media=\"(prefers-color-scheme: dark)\">`."],
    expectedCss: ["`:root { color-scheme: light dark; --color-bg: …; --color-text: …; }`", "`@media (prefers-color-scheme: dark) { :root { --color-bg: …; --color-text: …; } }`", "Components using only semantic tokens.", "Shared `.section`, `.card` and `.button` components."],
    checks: {
      functional: ["Switch your OS to dark mode: every page changes theme without reload issues.", "Check the nav on each page: the current page is marked."],
      responsive: ["At 360px every page has no sideways scroll.", "At 360px the pricing table scrolls or reflows."],
      accessibility: ["Measure body text in both themes: at least 4.5:1.", "Tab through a page in each theme: focus rings are visible."]
    },
    commonMistakes: [
      { mistake: "A component with a hard-coded white background in dark mode.", fix: "Replace raw colours with semantic tokens." },
      { mistake: "Form controls stay light in dark mode.", fix: "Set `color-scheme: light dark`." },
      { mistake: "Dark theme only on the homepage.", fix: "Tokens live in the shared stylesheet so every page follows." }
    ]
  }
});
