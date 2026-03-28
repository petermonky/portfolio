# Peter Jung Portfolio

Personal portfolio site built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4. The site combines a single-page landing experience with a dedicated projects index, with most portfolio content managed from one central data file.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript with `@/*` path aliases
- Tailwind CSS v4
- `next/font` for Funnel Sans
- React Compiler enabled in `next.config.ts`

## Routes

- `/`: landing page with About, Experience, and featured Projects sections
- `/projects`: full project archive in a table layout

## Project Structure

```text
src/
  app/
    layout.tsx          # global layout, metadata, fonts, cursor effect
    page.tsx            # landing page
    projects/page.tsx   # project archive
    globals.css         # theme tokens and global styles
  components/
    common/             # shared UI primitives
    cards/              # experience/project cards
    layout/             # header, footer, decorative effects
    sections/           # home page sections
    icons/              # social/media icons
  data/
    site.ts             # navigation, about copy, experience, projects, socials
public/
  documents/            # resume and style guide PDFs
  images/projects/      # project thumbnails
```

## Content Management

Most site content lives in `src/data/site.ts`:

- `aboutParagraphs`: rich text for the About section
- `navLinks`: section anchors used by the header navigation
- `socialLinks`: social profile links shown in the header
- `experienceItems`: experience timeline entries
- `projectItems`: featured and archive project data

To add or update portfolio content, start there. For projects with preview cards, also add the corresponding image under `public/images/projects`. PDF assets linked from the site live in `public/documents`.

## Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

- `pnpm dev`: start the local Next.js dev server
- `pnpm build`: create a production build
- `pnpm start`: run the production server
- `pnpm lint`: run ESLint
- `pnpm format`: format the repo with Prettier

## Credits

- Design template inspiration from [Brittany Chiang](https://brittanychiang.com/).

## Notes

- The global theme and color tokens are defined in `src/app/globals.css`.
- The primary font is configured in `src/app/fonts.ts`.
- Header section highlighting is handled client-side with `IntersectionObserver` in `src/components/layout/Header.tsx`.
