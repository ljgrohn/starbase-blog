---
title: "Advanced Customization Tips"
description: "Pro tips for customizing layouts, components, and adding new features"
pubDate: 2025-01-20
author: "Starbase"
featured: true
tags: ["customization", "advanced", "development"]
---

# Advanced Customization Tips

> Advanced modification protocols. Level up your terminal blog.

## Understanding the Project Structure

```
starbase-blog/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Blog posts (markdown)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global CSS
│   └── utils/          # Helper functions
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## Customizing Layouts

### BaseLayout

`src/layouts/BaseLayout.astro` is the foundation. You can:

- Add a navigation header
- Include analytics scripts
- Add custom meta tags
- Include global scripts/styles

Example: Adding Google Analytics

```astro
<head>
  <!-- ... existing head content ... -->
  <script>
    // Google Analytics
  </script>
</head>
```

### BlogPost Layout

`src/layouts/BlogPost.astro` controls post appearance. Customize:

- Post header styling
- Footer navigation
- Related posts section
- Author bio section

## Creating Custom Components

### Example: Author Bio Component

Create `src/components/AuthorBio.astro`:

```astro
---
interface Props {
  name: string;
  bio: string;
  avatar?: string;
}

const { name, bio, avatar } = Astro.props;
---

<div class="card-terminal p-6 mt-8">
  <h3 class="text-[var(--color-cyan)] font-mono mb-2">
    ▸ About {name}
  </h3>
  <p class="text-[var(--color-text-primary)] font-mono text-sm">
    {bio}
  </p>
</div>
```

Use it in `BlogPost.astro`:

```astro
---
import AuthorBio from '../components/AuthorBio.astro';
---

<!-- After post content -->
<AuthorBio name={post.data.author} bio="Your bio here" />
```

## Adding New Pages

### Creating an About Page

Create `src/pages/about.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="About - B-SIDE">
  <div class="max-w-4xl mx-auto px-4 py-20">
    <h1 class="text-[var(--color-cyan)] text-3xl font-mono font-bold mb-8">
      $ ABOUT
    </h1>
    <!-- Your content here -->
  </div>
</BaseLayout>
```

Access it at `/about`.

## Customizing Styles

### Adding Custom CSS Classes

Add to `src/styles/global.css`:

```css
/* Custom utility class */
.text-gradient-cyan {
  background: linear-gradient(90deg, var(--color-cyan), var(--color-magenta));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Modifying Button Styles

Edit button classes in `global.css`:

```css
.btn-terminal {
  /* Your customizations */
  border-radius: 0; /* Sharp corners for terminal feel */
  text-transform: uppercase;
}
```

## Working with Content Collections

### Adding New Fields

Edit `src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Starbase'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Add new fields
    readingTime: z.number().optional(),
    image: z.string().optional(),
  }),
});
```

Then use in your layouts:

```astro
{post.data.readingTime && (
  <span>{post.data.readingTime} min read</span>
)}
```

## Adding Search Functionality

### Simple Client-Side Search

Create `src/components/Search.astro`:

```astro
---
// Simple search component
---

<div class="mb-8">
  <input 
    type="text" 
    id="search-input"
    class="input-terminal"
    placeholder="> Search posts..."
  />
  <div id="search-results"></div>
</div>

<script>
  // Add search logic here
</script>
```

## Customizing the Featured Posts Component

Edit `src/components/FeaturedPosts.astro` to:

- Change grid layout (2 columns, 4 columns, etc.)
- Add post images
- Include reading time
- Add "Read More" buttons

## Environment Variables

Create `.env` files for configuration:

```bash
# .env
PUBLIC_SITE_URL=https://yourblog.com
PUBLIC_ANALYTICS_ID=your-id
```

Access in Astro:

```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---
```

## Adding RSS Feed

Astro can generate RSS automatically. Add to `src/pages/rss.xml.ts`:

```typescript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Your Blog',
    description: 'Your blog description',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
```

## Performance Optimization

### Image Optimization

Use Astro's Image component:

```astro
---
import { Image } from 'astro:assets';
---

<Image src={postImage} alt="Post image" />
```

### Code Splitting

Astro automatically code-splits. For large components, use dynamic imports:

```astro
---
const HeavyComponent = await import('../components/HeavyComponent.astro');
---
```

## Deployment Tips

### Static Site Hosting

The blog builds to static HTML. Deploy to:

- **Netlify**: Connect GitHub repo, auto-deploys
- **Vercel**: Connect GitHub repo, auto-deploys  
- **GitHub Pages**: Use GitHub Actions
- **Cloudflare Pages**: Connect repo, auto-deploys

### Build Configuration

Check `astro.config.mjs` for build settings:

```javascript
export default defineConfig({
  site: 'https://yourblog.com', // For absolute URLs
  base: '/blog', // If hosting in subdirectory
});
```

## Debugging Tips

### Check Build Output

```bash
$ npm run build
$ npm run preview
```

### View Generated HTML

Inspect `dist/` folder after build to see final output.

### TypeScript Errors

Run type checking:

```bash
$ npm run astro check
```

## Useful Resources

▸ [Astro Documentation](https://docs.astro.build)
▸ [Tailwind CSS Docs](https://tailwindcss.com/docs)
▸ [Markdown Guide](https://www.markdownguide.org)
▸ [ASCII Art Generator](https://www.ascii-art-generator.org/)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

● Advanced customization complete. Your terminal blog is ready!

