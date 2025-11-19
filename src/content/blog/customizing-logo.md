---
title: "Customizing the ASCII Logo"
description: "How to change the B-SIDE logo to your own ASCII art"
pubDate: 2025-01-18
author: "Starbase"
featured: true
tags: ["customization", "logo", "ascii-art"]
---

# Customizing the ASCII Logo

> Logo modification sequence initiated. Design your terminal identity.

## Where the Logo Is Defined

The ASCII logo is stored in `src/utils/ascii-art.ts` in the `LOGO_TEMPLATES` object. The homepage uses `LOGO_TEMPLATES.BSIDE`.

## Current Logo Location

Open `src/utils/ascii-art.ts` and find the `LOGO_TEMPLATES` object (around line 130):

```typescript
export const LOGO_TEMPLATES = {
  BSIDE: `
██████╗        ███████╗██╗██████╗ ███████╗
██╔══██╗       ██╔════╝██║██╔══██╗██╔════╝
██████╔╝ ===== ███████╗██║██║  ██║█████╗
██╔══██╗ ===== ╚════██║██║██║  ██║██╔══╝
██████╔╝       ███████║██║██████╔╝███████╗
╚═════╝        ╚══════╝╚═╝╚═════╝ ╚══════╝

          BLOG v1.0.0
     Terminal Cyberpunk Interface`,
  // ... other templates
};
```

## How to Change the Logo

### Step 1: Create Your ASCII Art

You can create ASCII art using:

▸ **Online generators**: [ASCII Art Generator](https://www.ascii-art-generator.org/)
▸ **Text editors**: Use monospace fonts
▸ **Command line tools**: `figlet`, `toilet`, or `banner`

### Step 2: Replace the Logo

Edit `src/utils/ascii-art.ts` and replace the `BSIDE` template:

```typescript
export const LOGO_TEMPLATES = {
  BSIDE: `
  ╔═══════════════════════╗
  ║   YOUR BLOG NAME      ║
  ║   Terminal Interface  ║
  ╚═══════════════════════╝
  `,
  // ... keep other templates
};
```

### Step 3: Update the Homepage

The logo is used in `src/pages/index.astro`. If you want to change which template is used, edit line 13:

```astro
<pre class="text-[var(--color-cyan)] ascii-art" style="text-align: left; margin: 0; font-size: 14px; line-height: 1.2;">
  {LOGO_TEMPLATES.BSIDE}
</pre>
```

You can also use other templates like `LOGO_TEMPLATES.SMALL` or `LOGO_TEMPLATES.TEXT`.

## ASCII Art Tips

### Character Width

Use monospace fonts for consistent alignment. The blog uses JetBrains Mono.

### Size Considerations

- Keep logos under 10-15 lines tall
- Width should fit on mobile (max ~60 characters)
- Test on different screen sizes

### Styling

The logo inherits these styles:
- Color: Cyan (`--color-cyan`)
- Font: JetBrains Mono
- Line height: 1.2

You can adjust the inline styles in `index.astro`:

```astro
<pre class="text-[var(--color-cyan)] ascii-art" 
     style="text-align: left; margin: 0; font-size: 12px; line-height: 1.1;">
  {LOGO_TEMPLATES.BSIDE}
</pre>
```

## Creating Multiple Logo Variants

You can add multiple logo sizes to `LOGO_TEMPLATES`:

```typescript
export const LOGO_TEMPLATES = {
  BSIDE: `
  // Large logo here
  `,
  
  SMALL: `
  ┌─────────────┐
  │ YOUR BLOG   │
  └─────────────┘
  `,
  
  TEXT: `
  YOUR BLOG
  Terminal UI
  `,
  
  // Add your own
  MINIMAL: `
  > YOUR_BLOG
  `,
};
```

Then use them conditionally or in different places.

## Using ASCII Art Utilities

The `ascii-art.ts` file includes helpful utilities:

### Create a Box

```typescript
import { createBox } from '../utils/ascii-art';

const boxed = createBox('Your text here', 30);
```

### Create a Divider

```typescript
import { createDivider } from '../utils/ascii-art';

const divider = createDivider('SECTION', 60);
```

### ASCII Characters Reference

```typescript
import { ASCII_ART } from '../utils/ascii-art';

// Box borders
ASCII_ART.BORDERS.TOP_LEFT      // ┌
ASCII_ART.BORDERS.HORIZONTAL    // ─

// Status indicators
ASCII_ART.STATUS.ONLINE         // ●
ASCII_ART.STATUS.SUCCESS        // ✓

// Bullets
ASCII_ART.BULLETS.TRIANGLE      // ▸
```

## Example: Simple Text Logo

If ASCII art generators aren't your thing, use simple text:

```typescript
BSIDE: `
╔═══════════════════╗
║   MY BLOG NAME    ║
║   v1.0.0          ║
╚═══════════════════╝
`,
```

## Testing Your Logo

1. Save `ascii-art.ts`
2. Check the homepage (`/`)
3. Adjust font size if needed
4. Test on mobile devices
5. Ensure it fits within the border container

## Logo Best Practices

▸ Keep it readable at small sizes
▸ Use consistent character width
▸ Match the terminal aesthetic
▸ Don't make it too tall (affects layout)
▸ Test with your color scheme

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Logo updated. Next: [Customize site branding](/blog/customizing-branding).

