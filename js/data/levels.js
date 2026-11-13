/*
 * levels.js — the four levels of the learning path
 * ------------------------------------------------
 * range: the first and last project number in the level (inclusive).
 * Projects get their level from their number, so a project can never sit in
 * the wrong level by accident (catalog.js checks this).
 */
window.HCM = window.HCM || {};
HCM.data = HCM.data || {};

HCM.data.levels = [
  {
    id: "beginner",
    name: "Beginner",
    range: [1, 25],
    description: "Build solid foundations: well-structured HTML documents, readable typography, the box model and your first accessible forms.",
    objectives: [
      "Structure complete pages with the right semantic elements",
      "Write simple, readable selectors and understand inheritance",
      "Control size and spacing with the box model and box-sizing",
      "Style text with a clear, consistent typographic scale",
      "Build forms where every control has a label"
    ],
    htmlSkills: ["Document structure and metadata", "Headings, paragraphs and lists", "Links, images and alt text", "Tables with captions and headers", "Forms, labels and input types"],
    cssSkills: ["Selectors and specificity basics", "Box model, margin and padding", "Typography and colour", "Borders, backgrounds and gradients", "First Flexbox and Grid layouts"]
  },
  {
    id: "intermediate",
    name: "Intermediate",
    range: [26, 50],
    description: "Make layouts that respond: Flexbox, Grid and media queries across full pages, with reusable components and richer forms and tables.",
    objectives: [
      "Write mobile-first CSS with deliberate breakpoints",
      "Choose between Flexbox and Grid for each layout problem",
      "Serve the right image size with srcset, sizes and <picture>",
      "Build reusable components with consistent naming",
      "Create complex forms and data tables that stay usable on phones"
    ],
    htmlSkills: ["Semantic page regions", "Responsive images and media", "Complex forms with fieldsets", "Data tables with grouping", "Native disclosure with <details>"],
    cssSkills: ["Flexbox and CSS Grid", "Media queries and fluid sizing", "Custom properties as tokens", "Transitions and hover/focus states", "Scroll-snap and sticky positioning"]
  },
  {
    id: "advanced",
    name: "Advanced",
    range: [51, 75],
    description: "Take control of complex interfaces: named grid areas, positioning and stacking, animation, pseudo-elements, :has() and design tokens.",
    objectives: [
      "Compose complex layouts with grid areas, named lines and spanning",
      "Manage positioning, stacking contexts and z-index with confidence",
      "Choreograph accessible animations with keyframes",
      "Build CSS-only interactive patterns with :checked, :target and :has()",
      "Organise styles into a token-driven component system"
    ],
    htmlSkills: ["Application layouts and dashboards", "CSS-only interaction patterns", "Accessible data visualisation", "Multi-step forms", "Multi-page front ends"],
    cssSkills: ["Grid areas, named lines and subgrid", "Positioning and z-index", "Keyframe animation and transforms", "Pseudo-elements and :has()", "Container queries and cascade layers"]
  },
  {
    id: "mastery",
    name: "Mastery",
    range: [76, 100],
    description: "Work like a professional front-end developer: combine every skill into polished, accessible, maintainable multi-page interfaces.",
    objectives: [
      "Plan projects from a brief, site map and component inventory",
      "Architect maintainable CSS with tokens, layers and naming conventions",
      "Meet and document WCAG 2.2 AA accessibility",
      "Test across browsers, zoom levels, motion and colour preferences",
      "Deliver consistent multi-page products and design systems"
    ],
    htmlSkills: ["Complete multi-page products", "Accessible complex forms", "Rich metadata", "Media with captions and transcripts", "Documentation pages"],
    cssSkills: ["Design systems and architecture", "Fluid type and space scales", "Theming with custom properties", "Cross-browser fallbacks with @supports", "Print, forced-colours and reduced motion"]
  }
];
