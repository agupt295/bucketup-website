# Bucketus

A Next.js (App Router) single-page application, scaffolded with TypeScript, Tailwind CSS, and ESLint.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/            # Routes, layouts, pages (Next.js App Router)
    layout.tsx    # Root layout
    page.tsx      # Home page
    globals.css   # Global styles (Tailwind)
  components/     # Reusable UI components
  lib/            # Shared utilities, helpers, API/client logic
  types/          # Shared TypeScript types
public/           # Static assets served as-is
```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm start` – run the production build
- `npm run lint` – lint the codebase
