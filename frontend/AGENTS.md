# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

---

# SAE Aero @ UIUC — website

Public marketing site for the SAE Aero Design club. Static content only; no data fetching,
no auth, no tests. See [README.md](README.md) for setup and a route table.

## Stack

Next.js 16.2.3 (App Router) · React 19.2 · TypeScript (strict) · Tailwind CSS v4 · Node ≥ 20.9

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build — the only real correctness check in this repo
npm start        # serve the production build
npm run lint     # eslint (flat config in eslint.config.mjs)
```

There is no test suite. Verify changes with `npm run build` plus a look at the page in the browser.

## Layout

- `src/app/<route>/page.tsx` — one folder per URL. `src/app/layout.tsx` wraps every page with
  `<Toolbar />` and `<Footer />`, so pages render only their own `<main>`.
- `src/components/` — shared UI, lowercase `snake_case` filenames, default exports.
- `public/assets/` — images (`/assets/…`), `public/assets/profile_pics/` for exec headshots,
  `public/assets/pdfs/` for documents.
- `@/*` is aliased to `src/*`.

Two component files are currently empty placeholders: `application_form.tsx` and `basic_button.tsx`.

## Conventions

- **Styling is Tailwind utility classes only.** No CSS modules, no styled-components. The only
  hand-written CSS is `src/app/globals.css`.
- **There is no `tailwind.config.js`** (Tailwind v4). Theme colors are CSS variables in `:root`
  in `globals.css`, re-exported through `@theme inline` — a new color must be added in *both*
  blocks to be usable as `bg-*`/`text-*`.
- Use the palette names (`prussian-blue`, `deep-navy`, `imperial-blue`, `cornflower-ocean`,
  `frosted-blue`, `ice-blue`, `afterburner`) rather than raw hex or stock Tailwind colors.
- Server Components by default. Add `'use client';` only for hooks, event handlers, or browser
  APIs — currently just the scroll-effect components.
- Images go through `next/image` with explicit `width`/`height`.
- Page shells follow `<main className="flex flex-1 flex-col …">` so the footer stays at the bottom.
- Adding a page means adding it to `src/components/toolbar.tsx` too, or nothing links to it.

## Scroll-effect components

`plane_scroll.tsx` and `dollar_scroll.tsx` drive a transform from scroll position: they read the
parent wrapper's `getBoundingClientRect()`, normalize it to a 0→1 `progress`, and set state on a
passive `scroll` listener. Rotation animations should turn **counter-clockwise** — use
`progress * -360`, not `progress * 360`.

## Gotchas

- `globals.css` currently ends with a debug rule outlining every element in red
  (`* { outline: 1px solid rgba(255, 0, 0, 0.2); }`). It is intentional but temporary — don't be
  confused by it, and remove it before the site goes live.
- Root metadata in `layout.tsx` is still the create-next-app default ("Create Next App").
- `src/app/projects/archive/` exists but is unlinked; the toolbar dropdown entry for it is
  commented out.
- Never commit `backend/serviceAccountKey.json` or anything else with Firebase credentials.
