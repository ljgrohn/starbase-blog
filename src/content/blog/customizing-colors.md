---
title: "Customizing Color Schemes"
description: "How to change the terminal color palette to match your brand"
pubDate: 2025-01-17
author: "Starbase"
featured: true
tags: ["customization", "styling", "colors"]
---

# Customizing Color Schemes

> Color palette modification protocol. Make it yours.

## Where Colors Are Defined

All color variables are defined in `src/styles/global.css` using CSS custom properties (variables) in the `@theme` block.

## Current Color Palette

The default terminal cyberpunk theme uses:

```css
--color-bg-primary: #050505;      /* Main background */
--color-bg-secondary: #0a0a0a;   /* Card backgrounds */
--color-bg-tertiary: #0f0f0f;     /* Input backgrounds */

--color-text-primary: #e0e0e0;    /* Main text */
--color-text-secondary: #808080;  /* Secondary text */
--color-text-muted: #404040;      /* Muted text */

--color-cyan: #00abab;            /* Primary accent */
--color-magenta: #c300c3;         /* Secondary accent */
--color-green: #00b300;            /* Success indicator */
--color-red: #ad0000;              /* Error indicator */
```

## How to Change Colors

### Step 1: Open the Styles File

Edit `src/styles/global.css` and locate the `@theme` block (around line 7).

### Step 2: Modify Color Values

Replace the hex color codes with your preferred colors:

```css
@theme {
  /* Your custom color palette */
  --color-bg-primary: #000000;      /* Pure black */
  --color-bg-secondary: #111111;    /* Slightly lighter */
  --color-bg-tertiary: #222222;    /* Even lighter */

  --color-text-primary: #ffffff;    /* White text */
  --color-text-secondary: #aaaaaa;  /* Light gray */
  --color-text-muted: #666666;      /* Medium gray */

  --color-cyan: #00ffff;            /* Bright cyan */
  --color-magenta: #ff00ff;         /* Bright magenta */
  --color-green: #00ff00;           /* Bright green */
  --color-red: #ff0000;              /* Bright red */
}
```

### Step 3: Update Glow Effects

If you change accent colors, update the glow shadows too:

```css
--shadow-glow-cyan: 0 0 10px rgb(0 255 255 / 0.5);
--shadow-glow-cyan-strong: 0 0 20px rgb(0 255 255 / 0.8);
--shadow-glow-magenta: 0 0 10px rgb(255 0 255 / 0.5);
```

## Color Scheme Ideas

### Classic Green Terminal

```css
--color-cyan: #00ff41;        /* Matrix green */
--color-magenta: #00ff41;     /* Same green */
--color-green: #00ff41;       /* Green */
--color-red: #ff0040;         /* Red for errors */
```

### Purple Cyberpunk

```css
--color-cyan: #9d4edd;        /* Purple */
--color-magenta: #c77dff;     /* Light purple */
--color-green: #06ffa5;       /* Mint green */
--color-red: #ff006e;         /* Pink-red */
```

### Blue Terminal

```css
--color-cyan: #00d9ff;        /* Bright blue */
--color-magenta: #7b2cbf;     /* Purple */
--color-green: #06ffa5;       /* Mint */
--color-red: #ff006e;         /* Pink */
```

### Warm Orange

```css
--color-cyan: #ff6b35;        /* Orange */
--color-magenta: #f7931e;     /* Gold */
--color-green: #06ffa5;       /* Mint */
--color-red: #d90429;         /* Red */
```

## Where Colors Are Used

### Backgrounds
- `--color-bg-primary`: Main page background
- `--color-bg-secondary`: Card backgrounds, footer
- `--color-bg-tertiary`: Input fields, code blocks

### Text
- `--color-text-primary`: Main content text
- `--color-text-secondary`: Metadata, dates, authors
- `--color-text-muted`: Borders, dividers

### Accents
- `--color-cyan`: Primary buttons, links, headers
- `--color-magenta`: Secondary buttons
- `--color-green`: Success indicators, featured badges
- `--color-red`: Error states (if needed)

## Testing Your Colors

1. Save `global.css`
2. The dev server will hot-reload
3. Check different pages:
   - Homepage (`/`)
   - Blog list (`/blog`)
   - Individual posts (`/blog/[slug]`)
   - Categories (`/categories`)

## Accessibility Tips

▸ Ensure sufficient contrast between text and backgrounds
▸ Test with color blindness simulators
▸ Maintain at least 4.5:1 contrast ratio for text
▸ Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Advanced: Dynamic Themes

For multiple themes, you could add theme classes:

```css
.theme-dark {
  --color-cyan: #00abab;
}

.theme-light {
  --color-cyan: #0066cc;
  --color-bg-primary: #ffffff;
  --color-text-primary: #000000;
}
```

Then toggle themes with JavaScript (if you add interactivity).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Color scheme updated. Next: [Customize the ASCII logo](/blog/customizing-logo).

