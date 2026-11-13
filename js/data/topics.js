/*
 * topics.js — the HTML & CSS Topic Index
 * --------------------------------------
 * Each topic: id, name, category ("html" or "css"), a short description and the
 * level where it first matters most. Related projects are NOT listed here:
 * they are found automatically from each project's `topics` tags, so the two
 * can never disagree. Keep descriptions short — this is an index, not a tutorial.
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};

HCM.data.topics = [
  // ---------- HTML ----------
  { id: "html-document-structure", category: "html", difficulty: "beginner", name: "Document structure", description: "The skeleton every page needs: doctype, `<html lang>`, `<head>`, `<body>` and a sensible order of content." },
  { id: "html-semantic", category: "html", difficulty: "beginner", name: "Semantic HTML", description: "Choosing elements for their meaning — `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` — so browsers and assistive tech understand the page." },
  { id: "html-headings-paragraphs", category: "html", difficulty: "beginner", name: "Headings and paragraphs", description: "A single `<h1>`, headings that never skip levels, and text broken into real paragraphs." },
  { id: "html-links-navigation", category: "html", difficulty: "beginner", name: "Links and navigation", description: "Relative and in-page links, `mailto:` and `tel:`, navigation landmarks and marking the current page." },
  { id: "html-lists", category: "html", difficulty: "beginner", name: "Lists", description: "Ordered, unordered and description lists — and recognising when content is secretly a list." },
  { id: "html-images-alt", category: "html", difficulty: "beginner", name: "Images and alt text", description: "Adding images with useful alternative text, intrinsic width and height, and `<figure>` captions." },
  { id: "html-responsive-images", category: "html", difficulty: "intermediate", name: "Responsive images", description: "Letting the browser pick the right file with `srcset`, `sizes` and `<picture>` art direction." },
  { id: "html-audio-video", category: "html", difficulty: "intermediate", name: "Audio and video", description: "Embedding local media with `<audio>`, `<video>`, multiple sources, captions and sensible autoplay rules." },
  { id: "html-tables", category: "html", difficulty: "beginner", name: "Tables", description: "Tabular data with `<caption>`, header cells, `scope`, row groups and spanning cells." },
  { id: "html-forms", category: "html", difficulty: "beginner", name: "Forms", description: "Collecting input with `<form>`, grouping with `<fieldset>`/`<legend>` and sending the right data names." },
  { id: "html-input-types", category: "html", difficulty: "beginner", name: "Input types", description: "Choosing email, tel, url, number, date, range, file and other types so devices offer the right keyboard and checks." },
  { id: "html-labels-validation", category: "html", difficulty: "beginner", name: "Labels and validation", description: "Visible labels for every control, helper text, and built-in validation with `required`, `pattern`, `min` and friends." },
  { id: "html-buttons", category: "html", difficulty: "beginner", name: "Buttons", description: "Real `<button>` elements with the right `type`, clear text, and knowing when a link is the better choice." },
  { id: "html-accessibility", category: "html", difficulty: "intermediate", name: "Accessibility", description: "Landmarks, accessible names, keyboard support, live regions and using ARIA only where HTML falls short." },
  { id: "html-metadata", category: "html", difficulty: "beginner", name: "Metadata", description: "What goes in `<head>`: charset, viewport, title, description, favicon and social sharing tags." },

  // ---------- CSS ----------
  { id: "css-syntax", category: "css", difficulty: "beginner", name: "Syntax", description: "Rules, selectors, declarations, comments and linking a stylesheet correctly." },
  { id: "css-selectors", category: "css", difficulty: "beginner", name: "Selectors", description: "Type, class, attribute, descendant, child and sibling selectors — targeting exactly what you mean." },
  { id: "css-specificity", category: "css", difficulty: "intermediate", name: "Specificity", description: "Why one rule beats another, how to keep specificity low and predictable, and `:where()` for zero-weight selectors." },
  { id: "css-inheritance", category: "css", difficulty: "beginner", name: "Inheritance", description: "Which properties flow from parent to child, and using that to style text once instead of everywhere." },
  { id: "css-box-model", category: "css", difficulty: "beginner", name: "Box model", description: "Content, padding, border and margin — and why `box-sizing: border-box` makes sizes predictable." },
  { id: "css-display", category: "css", difficulty: "beginner", name: "Display", description: "Block, inline, inline-block, flex, grid and none, and how each changes layout." },
  { id: "css-sizing", category: "css", difficulty: "beginner", name: "Width and height", description: "Fixed, relative and intrinsic sizes, `max-width`, `min()`/`clamp()` and `aspect-ratio`." },
  { id: "css-spacing", category: "css", difficulty: "beginner", name: "Margin and padding", description: "Consistent spacing with a scale, collapsing margins, `gap`, and logical properties like `margin-inline`." },
  { id: "css-borders-outlines", category: "css", difficulty: "beginner", name: "Borders and outlines", description: "Borders, radius, dividers and outlines — including visible focus outlines that never get removed." },
  { id: "css-typography", category: "css", difficulty: "beginner", name: "Typography", description: "Font stacks, sizes, line height, line length, weight and a type scale that creates hierarchy." },
  { id: "css-colors-backgrounds", category: "css", difficulty: "beginner", name: "Colours and backgrounds", description: "Colour formats, contrast, background images, layering and blend modes." },
  { id: "css-gradients", category: "css", difficulty: "beginner", name: "Gradients", description: "Linear, radial and conic gradients for backgrounds, overlays and simple data visuals." },
  { id: "css-positioning", category: "css", difficulty: "intermediate", name: "Positioning", description: "Relative, absolute, fixed and sticky positioning, and choosing the right containing block." },
  { id: "css-flexbox", category: "css", difficulty: "beginner", name: "Flexbox", description: "One-dimensional layout: direction, alignment, wrapping, `gap` and flexible sizing with `flex`." },
  { id: "css-grid", category: "css", difficulty: "intermediate", name: "Grid", description: "Two-dimensional layout with tracks, `repeat()`, `minmax()`, areas, named lines and subgrid." },
  { id: "css-responsive-design", category: "css", difficulty: "intermediate", name: "Responsive design", description: "Mobile-first layouts, fluid sizes and intrinsic components that work from 320px to wide screens." },
  { id: "css-media-queries", category: "css", difficulty: "intermediate", name: "Media queries", description: "Width breakpoints plus preference queries such as `prefers-color-scheme`, `prefers-reduced-motion` and `hover`." },
  { id: "css-pseudo-classes", category: "css", difficulty: "beginner", name: "Pseudo-classes", description: "State and structure selectors: `:hover`, `:focus-visible`, `:checked`, `:nth-child()`, `:target`, `:has()` and more." },
  { id: "css-pseudo-elements", category: "css", difficulty: "intermediate", name: "Pseudo-elements", description: "`::before`, `::after`, `::marker`, `::first-letter` and friends for decoration without extra HTML." },
  { id: "css-transitions", category: "css", difficulty: "intermediate", name: "Transitions", description: "Smooth changes between states: properties, duration, easing and delay." },
  { id: "css-animations", category: "css", difficulty: "advanced", name: "Animations", description: "`@keyframes` animations with timing, delays, iteration and fill modes — always respecting reduced motion." },
  { id: "css-transforms", category: "css", difficulty: "intermediate", name: "Transforms", description: "Translate, scale, rotate and 3D perspective without disturbing the surrounding layout." },
  { id: "css-variables", category: "css", difficulty: "intermediate", name: "CSS variables", description: "Custom properties for design tokens, theming and passing values from HTML into CSS." },
  { id: "css-overflow", category: "css", difficulty: "intermediate", name: "Overflow", description: "Controlling content that doesn't fit: scrolling regions, clipping, text truncation and scroll-snap." },
  { id: "css-z-index", category: "css", difficulty: "intermediate", name: "z-index", description: "Stacking order and stacking contexts — why `z-index: 9999` sometimes still loses." },
  { id: "css-shadows", category: "css", difficulty: "beginner", name: "Shadows", description: "`box-shadow` and `text-shadow` for depth and elevation, used sparingly." },
  { id: "css-layout-patterns", category: "css", difficulty: "advanced", name: "Modern layout patterns", description: "Proven patterns such as app shells, sidebars, bento grids, breakout layouts, card grids and carousels." },
  { id: "css-cross-browser", category: "css", difficulty: "advanced", name: "Cross-browser styling", description: "Form-control normalisation, vendor pseudo-elements, `@supports` feature checks and graceful fallbacks." },
  { id: "css-architecture", category: "css", difficulty: "advanced", name: "CSS architecture & naming", description: "Maintainable CSS: naming conventions such as BEM, tokens, cascade layers and component organisation." }
];
