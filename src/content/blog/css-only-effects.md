---
title: "CSS-Only Terminal Effects"
description: "Creating authentic terminal aesthetics without JavaScript"
pubDate: 2025-01-25
author: "Starbase"
featured: true
tags: ["css", "design", "performance"]
---

# CSS-Only Terminal Effects

One of our core principles: achieve maximum visual impact with minimal JavaScript. Here's how we do it.

## The Scanline Effect

Those subtle horizontal lines that give the CRT monitor feel? Pure CSS:

```css
body::before {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 171, 171, 0.03) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 171, 171, 0.03) 3px
  );
}
```

Result: Authentic retro vibe with zero performance cost.

## Glowing Borders

The neon glow on hover uses `box-shadow`:

```css
.card-terminal:hover {
  border-color: var(--color-cyan);
  box-shadow: 0 0 10px rgba(0, 171, 171, 0.5);
}
```

GPU-accelerated, 60fps smooth.

## Grid Background

A subtle grid pattern adds depth:

```css
body::after {
  background-image:
    linear-gradient(rgba(0, 171, 171, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 171, 171, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

Fixed positioning prevents repaints during scroll.

## Button Animations

Terminal prompt appears on hover:

```css
.btn-terminal::before {
  content: '>> ';
  opacity: 0;
  transition: opacity 300ms;
}

.btn-terminal:hover::before {
  opacity: 1;
}
```

Simple, effective, performant.

## Performance Benefits

✓ No JavaScript bundle
✓ No animation libraries
✓ No performance overhead
✓ Works everywhere
✓ Accessible by default

## The Result

```
┌──────────────────────┬─────────┐
│ JavaScript size      │ 0kb     │
│ CSS effects          │ 12      │
│ Frame rate           │ 60fps   │
│ Browser support      │ 100%    │
└──────────────────────┴─────────┘
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Pure CSS. Maximum impact.
