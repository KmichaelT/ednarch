# EdenArch Portfolio

A static, MDX-driven Next.js portfolio website for EdenArch architectural practice.

## Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ShadCN/UI** (customized)
- **MDX** for content (Markdown-driven)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
edenarch-web/
├── content/
│   ├── projects/           # One MDX file per project
│   │   ├── glass-box-cafe.mdx
│   │   ├── westfield-residence.mdx
│   │   ├── horizon-tower.mdx
│   │   └── genet-terrace-wellness-center.mdx
│   └── site.json           # Site config (nav, footer, etc.)
├── src/
│   ├── app/                # Next.js App Router pages
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   └── mdx/            # MDX components (TextBlock, ImagePair, etc.)
│   └── lib/
│       ├── mdx.ts          # MDX loading utilities
│       ├── types.ts        # TypeScript types
│       └── utils.ts        # Utility functions
└── public/
    └── images/             # Static images
```

## Content Management

Content is managed through MDX files in the `content/` directory.

### Adding a New Project

1. Create a new `.mdx` file in `content/projects/`
2. Add frontmatter with required fields:

```mdx
---
slug: project-slug
title: Project Title
category: Category Name
year: "2024"
thumbnail: https://placehold.co/800x600/...
order: 1
hero:
  image: https://placehold.co/1920x1080/...
  title: Project Title
  subtitle: A brief description
meta:
  location: City, Country
  program: Building type
  status: Completed 2024
nextProject: next-project-slug
---

<TextBlock title="Overview">
Project description...
</TextBlock>
```

### Available MDX Components

- `<TextBlock title="...">` - Text section with title
- `<ImageBlock src="..." caption="..." size="large" />` - Single image
- `<ImagePair images={[...]} captions={[...]} />` - Two images side by side
- `<ImageGrid images={[...]} labels={[...]} columns={3} />` - Image grid
- `<Drawing src="..." label="..." caption="..." />` - Technical drawing
- `<FeatureList title="..." items={[...]} />` - Bulleted list
- `<Quote author="...">Quote text</Quote>` - Pull quote

## Replacing Placeholder Images

All images currently use placeholder URLs from `placehold.co`. To replace:

1. Add your images to `public/images/projects/[project-slug]/`
2. Update the image paths in the MDX files

Example:
```mdx
# Before
thumbnail: https://placehold.co/800x600/f5f5f5/a3a3a3?text=Cafe+Thumb

# After
thumbnail: /images/projects/glass-box-cafe/thumbnail.jpg
```

## Deployment

The site is ready for deployment to Vercel:

```bash
npx vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## Design System

The design uses a minimal color palette:

- **Background:** White `#ffffff`
- **Text:** Near-black `#171717`
- **Muted text:** Gray `#737373`
- **Footer:** Black `#0a0a0a`

Typography:
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

All colors are defined as CSS variables in `globals.css` for easy customization.
