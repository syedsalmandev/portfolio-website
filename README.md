# Syed Salman Ali — Portfolio

Personal portfolio for **Syed Salman Ali, Full Stack Developer** (Karachi, Pakistan).

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion. Fully static — no database or backend.

## Stack

- **Next.js 16** with the App Router, static generation for every route
- **TypeScript** throughout
- **Tailwind CSS 4** with a small design-token layer in `src/app/globals.css`
- **Motion** (`motion/react`) for hero reveals, scroll-in animations and the hero collage parallax
- `next/image` with static imports (AVIF/WebP, blur placeholders, lazy loading)
- File-based metadata: favicon (`icon.tsx`), Apple icon, Open Graph image, `sitemap.xml`, `robots.txt`

## Structure

```
src/
  app/                 routes, layout, metadata, 404
    work/[slug]/       case-study pages (generateStaticParams)
  components/
    layout/            Header (sticky, scroll-aware, mobile overlay), Footer, Monogram
    home/              Hero, HeroCollage, Stats, SelectedWork, Expertise, About, Experience (+ Process), Contact
    work/              CaseStudy, ArchitectureDiagram, MarketplaceMock (sanitized illustration)
    ui/                Button, Tag, SectionHeading, Reveal/Stagger/TextReveal, ScreenImage/PhoneImage
  data/
    site.ts            name, contact details, navigation, stats
    projects.ts        all project + case-study content
    profile.ts         expertise, about, education, experience, process
  assets/projects/     project screenshots (static imports)
public/cv/             downloadable CV (PDF)
```

All copy lives in `src/data/*` — edit those files to update projects, experience or contact details without touching components.

### Case studies

Each entry in `src/data/projects.ts` drives its own page at `/work/<slug>`. Optional fields hide their sections automatically:

- `mobileScreens` → "Mobile Screens" section
- `videoUrl` → "Video" section (hidden when absent)
- `callout` → emphasised principle block (used for "Built for Client Independence")
- `architecture` → architecture section + data-flow diagram (used for the confidential marketplace)
- `confidential` / `confidentialNote` → confidentiality badge; no screenshots are rendered, a sanitized UI illustration is shown instead

## Development

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npm start
```

## Deployment (Vercel)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel — the Next.js preset needs no extra configuration.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the production URL (e.g. `https://syedsalmanali.com`) so canonical links, Open Graph metadata and the sitemap use the right domain.

Or from the CLI:

```bash
npx vercel login
npx vercel --prod
```
