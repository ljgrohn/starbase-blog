---
title: "Customizing Site Branding"
description: "How to change site title, tagline, and other branding elements"
pubDate: 2025-01-19
author: "Starbase"
featured: true
tags: ["customization", "branding", "configuration"]
---

# Customizing Site Branding

> Brand identity protocol. Make it uniquely yours.

## Key Branding Elements

Your blog's branding appears in several places:
- Page titles (browser tabs)
- Homepage tagline
- Footer text
- Navigation links
- Meta descriptions

## Changing the Site Title

### Page Titles

Page titles appear in browser tabs and search results. They're set in each layout file:

**Homepage** (`src/pages/index.astro`):
```astro
<BaseLayout title="B-SIDE - Home">
```

**Blog Pages** (`src/layouts/BlogPost.astro`):
```astro
<BaseLayout title={`${title} - Starbase Blog`}>
```

**Blog Index** (`src/pages/blog/index.astro`):
```astro
<BaseLayout title="Blog - B-SIDE">
```

**Categories** (`src/pages/categories/index.astro`):
```astro
<BaseLayout title="Categories - B-SIDE">
```

### Update All Titles

Search and replace `B-SIDE` or `Starbase Blog` with your brand name across these files.

## Changing the Homepage Tagline

Edit `src/pages/index.astro` (around line 17-24):

```astro
<!-- Tagline -->
<p class="text-[var(--color-text-primary)] text-center text-lg sm:text-xl mb-2 font-mono">
  &gt; A cyberpunk terminal interface for the modern web
</p>

<p class="text-[var(--color-text-secondary)] text-center text-sm mb-12 font-mono max-w-2xl">
  Built with Astro, styled with terminal aesthetics, and powered by pure CSS.
  Welcome to the digital frontier.
</p>
```

Replace with your own tagline and description.

## Updating the Footer

Edit `src/pages/index.astro` (around line 54-56):

```astro
<p class="text-[var(--color-text-muted)] text-xs font-mono">
  © 2025 STARBASE. Built with Terminal Cyberpunk Theme.
</p>
```

Change `STARBASE` to your brand name and update the year.

## Changing Default Author Name

The default author is set in `src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // ...
    author: z.string().default('Starbase'),  // Change this
    // ...
  }),
});
```

Replace `'Starbase'` with your default author name.

## Updating Meta Descriptions

Meta descriptions appear in search results and social shares. They're set in `BaseLayout.astro`:

```typescript
const { title, description = "Terminal Cyberpunk Blog - A futuristic command center for the modern web" } = Astro.props;
```

Change the default description to match your blog's purpose.

## Changing Navigation Links

### Homepage Links

Edit `src/pages/index.astro` (around line 27-35):

```astro
<div class="flex flex-wrap gap-4 justify-center mb-12">
  <a href="/blog" class="btn-terminal btn-primary">
    $ Read Posts
  </a>

  <a href="/categories" class="btn-terminal btn-secondary">
    $ Categories
  </a>
</div>
```

### Footer Links

Edit `src/pages/index.astro` (around line 58-60):

```astro
<p class="text-[var(--color-text-muted)] text-xs font-mono mt-2">
  &gt; <a href="/blog" class="text-[var(--color-cyan)] hover:text-glow-cyan">Blog</a> |
  <a href="https://github.com" class="text-[var(--color-cyan)] hover:text-glow-cyan">GitHub</a> |
  <a href="/about" class="text-[var(--color-cyan)] hover:text-glow-cyan">About</a>
</p>
```

Update URLs and link text as needed.

## Changing Status Messages

### Homepage Status

Edit `src/pages/index.astro` (around line 43):

```astro
<div class="mt-auto mb-8 text-[var(--color-green)] text-sm font-mono">
  ● SYSTEM ONLINE
</div>
```

Change to your own status message.

### Post Status Indicators

In blog posts, you might use status indicators:

```markdown
● STATUS: ONLINE
▸ Ready for input...
```

Customize these in your markdown files.

## Updating Package.json

Update `package.json` to reflect your project:

```json
{
  "name": "your-blog-name",
  "version": "1.0.0",
  "description": "Your blog description"
}
```

## Quick Branding Checklist

```
┌─────────────────────────────────────┐
│ Branding Checklist                 │
├─────────────────────────────────────┤
│ ✓ Site title in all layouts        │
│ ✓ Homepage tagline                 │
│ ✓ Footer copyright text            │
│ ✓ Default author name              │
│ ✓ Meta descriptions                │
│ ✓ Navigation links                 │
│ ✓ Status messages                  │
│ ✓ Package.json name/description    │
└─────────────────────────────────────┘
```

## Search & Replace Strategy

To quickly rebrand, use your editor's search and replace:

1. Search for: `B-SIDE` → Replace with: `Your Brand`
2. Search for: `STARBASE` → Replace with: `Your Brand`
3. Search for: `Starbase` → Replace with: `Your Name`

**Important**: Be careful with case-sensitive replacements. Check each file after replacing.

## Testing Your Branding

After making changes:

1. Check browser tab titles
2. View homepage tagline
3. Inspect footer text
4. Test navigation links
5. Verify meta descriptions (view page source)
6. Check social sharing previews

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Branding updated. Next: [Advanced customization tips](/blog/advanced-customization).

