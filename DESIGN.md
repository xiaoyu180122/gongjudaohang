# Design System

## Core Identity
A minimalist, dark-tech aesthetic focused on data density, speed, and efficient tool discovery.

## Color Palette
Using OKLCH to ensure perceptually uniform lightness.

- **Background (Body):** `#09090b` (Zinc 950)
- **Surface (Cards/Containers):** `#18181b` (Zinc 900)
- **Ink (Primary Text):** `#f4f4f5` (Zinc 50)
- **Muted (Secondary Text):** `#a1a1aa` (Zinc 400)
- **Border:** `#27272a` (Zinc 800)
- **Accent (Primary Brand Color):** `#10b981` (Emerald 500) - Used sparsely for hover states and active indicators.

## Typography
- **Font Family:** `Geist` (sans-serif default). Geist Mono for code snippets, tags, or small technical details.
- **Scale:**
  - Hero Display: `text-4xl tracking-tighter leading-none`
  - Section Headings: `text-2xl font-medium tracking-tight`
  - Body: `text-sm text-zinc-400 leading-relaxed`
  - Small labels/metadata: `text-xs text-zinc-500 font-mono uppercase tracking-wider`

## Motion
`MOTION_INTENSITY: 4`
- Restrained, fast micro-interactions.
- Subtle `scale-98` and `opacity` changes on card hover.
- Fast, non-distracting entrances (`duration-200`, `ease-out`).
- Honors `prefers-reduced-motion: reduce`.

## Layout & Spacing
`DESIGN_VARIANCE: 6`
`VISUAL_DENSITY: 8` (High density)
- **Grid:** CSS Grid-based bento layouts for tool cards.
- **Max Width:** `max-w-7xl mx-auto`
- **Component rhythm:** Small gaps (`gap-3`, `gap-4`) for tool cards to maximize visibility of multiple items at once.
- **Borders & Radii:** Sharp or slight radii. `rounded-md` (6px) or `rounded-lg` (8px). 1px solid borders (`border-zinc-800`).

## Components
### Tool Card
- A dense card containing:
  - SVG Icon (Better-Icons)
  - Tool Name (`font-medium text-zinc-50`)
  - Description (truncated to 2 lines, `text-sm text-zinc-400`)
  - Tags (`text-xs font-mono text-zinc-500`)
- Hover state: `border-zinc-700 bg-zinc-800/50 transition-colors`

### Sidebar Navigation
- Left-aligned fixed navigation for categories.
- Minimalist text links with hover highlights.
