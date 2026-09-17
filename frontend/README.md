# SAE Aero @ UIUC — Website

The public website for SAE Aero Design at the University of Illinois Urbana-Champaign.
Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Running the website locally

### 1. Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| [Node.js](https://nodejs.org) | **20.9 or newer** | Next.js 16 requires it. Check with `node -v`. |
| npm | ships with Node | Check with `npm -v`. |

No database, API key, or backend service is needed — every page is static content, so
the frontend runs completely on its own.

### 2. Install dependencies

From the `frontend/` directory (this folder):

```bash
cd frontend
npm install
```

You only need to do this once, and again whenever `package.json` changes
(e.g. after pulling someone else's commits).

### 3. Start the dev server

```bash
npm run dev
```

Then open **<http://localhost:3000>** in your browser.

The page auto-reloads as you save files. Stop the server with `Ctrl + C`.

**Useful variations:**

```bash
npm run dev -- -p 4000        # use port 4000 if 3000 is taken
npm run dev -- -H 0.0.0.0     # expose on your local network (phone testing)
```

> Note the `--` — with `npm run`, flags need it so they get forwarded to Next.js.

### 4. Other commands

```bash
npm run build   # production build — run this before pushing big changes
npm start       # serve the production build (requires `npm run build` first)
npm run lint    # ESLint
```

`npm run build` catches TypeScript and rendering errors that `npm run dev` lets slide,
so it's the fastest way to check you haven't broken anything.

### Troubleshooting

| Problem | Fix |
| --- | --- |
| `Port 3000 is already in use` | Another dev server is running. Close it, or use `npm run dev -- -p 3001`. |
| Module-not-found errors after a `git pull` | `npm install` — someone added a dependency. |
| Stale or bizarre build output | Delete the `.next/` folder and restart the dev server. |
| `next: command not found` | You skipped `npm install`, or you're not in the `frontend/` directory. |

---

## Project layout

```
frontend/
├── src/
│   ├── app/                  # routes — each folder with a page.tsx is a URL
│   │   ├── layout.tsx        # root layout: font, <Toolbar />, <Footer />
│   │   ├── page.tsx          # home page  →  /
│   │   ├── globals.css       # Tailwind import + the club color palette
│   │   └── …                 # about, events, exec, team, contact, …
│   └── components/           # shared UI (toolbar, footer, buttons, scroll effects)
└── public/assets/            # images, profile pictures, PDFs
```

### Pages

| Route | File |
| --- | --- |
| `/` | [src/app/page.tsx](src/app/page.tsx) |
| `/about` | [src/app/about/page.tsx](src/app/about/page.tsx) |
| `/events` | [src/app/events/page.tsx](src/app/events/page.tsx) — embeds the club Google Calendar |
| `/projects` | [src/app/projects/page.tsx](src/app/projects/page.tsx) |
| `/projects/archive` | [src/app/projects/archive/page.tsx](src/app/projects/archive/page.tsx) |
| `/team` | [src/app/team/page.tsx](src/app/team/page.tsx) |
| `/exec` | [src/app/exec/page.tsx](src/app/exec/page.tsx) |
| `/involvement` | [src/app/involvement/page.tsx](src/app/involvement/page.tsx) |
| `/recruitment` | [src/app/recruitment/page.tsx](src/app/recruitment/page.tsx) |
| `/contact` | [src/app/contact/page.tsx](src/app/contact/page.tsx) |
| `/sponserInfo` | [src/app/sponserInfo/page.tsx](src/app/sponserInfo/page.tsx) |
| `/goFundMe` | [src/app/goFundMe/page.tsx](src/app/goFundMe/page.tsx) |

**To add a page:** create `src/app/<name>/page.tsx` exporting a default React component,
then add a link in [src/components/toolbar.tsx](src/components/toolbar.tsx).

### Styling

Tailwind v4 is configured entirely in [src/app/globals.css](src/app/globals.css) — there is no
`tailwind.config.js`. The club palette is defined there as CSS variables and exposed to Tailwind
through `@theme inline`, so you can write classes like `bg-prussian-blue` or `text-frosted-blue`:

| Class suffix | Color |
| --- | --- |
| `prussian-blue` | `rgb(52, 69, 122)` — toolbar / headings |
| `deep-navy` | `#001c55` |
| `imperial-blue` | `#0a2472` |
| `cornflower-ocean` | `#0e6ba8` |
| `frosted-blue` | `#a6e1fa` — text on dark blue |
| `ice-blue` | `#cbe4f9` — page backgrounds |
| `afterburner` | `#f97316` — accents |

Add a new color by declaring it in both the `:root` and `@theme inline` blocks.

The site font is **Ubuntu**, loaded via `next/font/google` in
[src/app/layout.tsx](src/app/layout.tsx).

### Images

Put files in `public/assets/` and reference them with a root-relative path
(`/assets/foo.png`). Use `next/image` rather than a bare `<img>` — see
[src/components/profile_picture.tsx](src/components/profile_picture.tsx) for the pattern.

### Client components

Pages are React Server Components by default. Anything using hooks, browser APIs, or event
handlers needs `'use client';` as the first line of the file — see
[src/components/plane_scroll.tsx](src/components/plane_scroll.tsx).

---

## Backend

There is a separate FastAPI service in [`../backend/`](../backend) (Firebase/Firestore).
The website does **not** call it yet, so you can ignore it for frontend work.
See the [repo README](../README.md) for how to run it.
