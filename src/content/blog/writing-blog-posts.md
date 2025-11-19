---
title: "Writing Blog Posts: Markdown Guide"
description: "Learn how to create and publish blog posts using Markdown"
pubDate: 2025-01-16
author: "Starbase"
featured: true
tags: ["markdown", "content", "tutorial"]
---

# Writing Blog Posts: Markdown Guide

> Content creation protocol activated. Let's write your first post.

## Post Location

All blog posts are stored in `src/content/blog/` as Markdown files (`.md`). Each file represents one blog post.

## Creating a New Post

1. Create a new `.md` file in `src/content/blog/`
2. Use a descriptive filename (e.g., `my-first-post.md`)
3. Add frontmatter at the top
4. Write your content in Markdown below

## Frontmatter Structure

Every post needs frontmatter (metadata) at the top, enclosed in `---`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
pubDate: 2025-01-20
author: "Your Name"
featured: false
tags: ["tag1", "tag2", "tag3"]
---
```

### Frontmatter Fields

- **title** (required): The post title
- **description** (required): Short description for SEO/previews
- **pubDate** (required): Publication date in `YYYY-MM-DD` format
- **author** (optional): Defaults to "Starbase" if not specified
- **featured** (optional): Boolean, shows post on homepage if `true`
- **tags** (optional): Array of tags for categorization

## Markdown Basics

### Headers

```markdown
# H1 - Main Title
## H2 - Section Header
### H3 - Subsection
```

### Text Formatting

```markdown
**bold text**
*italic text*
`inline code`
```

### Lists

```markdown
- Unordered item
- Another item

1. Ordered item
2. Another item
```

### Links

```markdown
[Link text](https://example.com)
```

### Code Blocks

````markdown
```javascript
const example = "code";
```
````

### Blockquotes

```markdown
> This is a quote
> Multiple lines work too
```

### Horizontal Rules

```markdown
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Terminal-Specific Elements

### ASCII Art

You can include ASCII art directly in your markdown:

````markdown
```
┌─────────────────────┐
│  ASCII Art Box      │
└─────────────────────┘
```
````

### Terminal Prompts

Use terminal-style prompts for commands:

```markdown
```bash
$ npm run dev
> Server started on localhost:4321
```
```

### Status Indicators

Use Unicode characters for status:

- `●` - Online/Active
- `○` - Offline/Inactive
- `▸` - Bullet point
- `→` - Arrow

## Example Post

Here's a complete example:

```markdown
---
title: "My First Post"
description: "Welcome to my blog"
pubDate: 2025-01-20
author: "John Doe"
featured: true
tags: ["welcome", "introduction"]
---

# My First Post

> Welcome to my terminal blog!

This is my first post. Here's what I'll cover:

▸ Introduction
▸ Getting started
▸ Next steps

## Introduction

I'm excited to start blogging with this terminal-themed interface.

## Code Example

```javascript
console.log("Hello, Terminal!");
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● STATUS: POST PUBLISHED
```

## Previewing Your Post

1. Save your `.md` file
2. The dev server will automatically reload
3. Navigate to `/blog/[your-filename]` to see it
4. Or check the blog index at `/blog`

## Post Organization

Posts are automatically:
- Listed on `/blog` (newest first)
- Categorized by tags on `/categories/[tag]`
- Featured posts appear on the homepage
- Accessible via `/blog/[slug]`

## Tips

▸ Use descriptive filenames (they become URLs)
▸ Keep descriptions concise (50-160 characters)
▸ Use tags consistently for better organization
▸ Mark important posts as `featured: true`
▸ Use terminal-style formatting for authenticity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Ready to customize? Learn about [changing color schemes](/blog/customizing-colors).

