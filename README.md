# 10on10 Foundation

This repository is the official website for the 10on10 site built with Vite + React. Below are the main technologies used and quick instructions to install, run and build the project.

## Tech stack

- Vite — fast build tool and dev server
- React — UI library
- Tailwind CSS — utility-first styling (via PostCSS)
- react-icons — icons used in components
- Deployment target: static site (e.g., GitHub Pages / Netlify / Vercel)

## Requirements

- Node.js 16+ (Node 18+ recommended)
- npm or yarn

## Install dependencies

Run from the project root:

```
npm install
```

Or with yarn:

```
yarn
```

## Run locally (development)

Start the Vite dev server:
```
npm run dev
```
Open the URL printed by Vite

## Build for production

```
npm run build

npm run preview
```

`build` produces the static files in `dist/`.

## Important project notes

Base URL: the app uses `import.meta.env.BASE_URL` when referencing images and video text files to support publishing under a subpath (eg., GitHub Pages). If you deploy to a subpath, set `BASE_URL` accordingly or configure your hosting to serve from the repo root.


## Useful commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Where to look in the code

- `src/components/Navbar.jsx` — navigation, smooth scrolling and active-section observer
- `src/components/Experience.jsx` — loads video lists and renders the experience/change grids
- `src/components/Footer.jsx` — footer and contact links

