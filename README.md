# Portfolio (React + Vite + TypeScript)

This folder contains a single Vite-powered React + TypeScript portfolio site (no nested project directory).

## Structure

- `index.html`: Root HTML file used by Vite.
- `vite.config.ts`: Vite + React plugin configuration.
- `tsconfig.json` / `tsconfig.node.json`: TypeScript configuration.
- `src/`: Application source.
  - `main.tsx`: App entry that mounts React with React Router.
  - `App.tsx`: App shell with routing and layout.
  - `index.css`: Global styling (modern, minimal).
  - `components/`: Reusable UI (Navbar, Footer).
  - `pages/`: Page components (Home, About, Projects, Contact).
- `.gitignore`: Ignores build artifacts and tooling noise.

## Scripts

- `npm install` — install dependencies.
- `npm run dev` — start the local dev server.
- `npm run build` — build the production bundle.
- `npm run preview` — preview the production build locally.

## Deploying to GitHub Pages

1) Repo should be named `portfolio` (the Vite `base` is hard-coded to `/portfolio/` in `vite.config.ts`). If you choose a different repo name, update that `base` value.  
2) Push to `main` (or `master`). The workflow `.github/workflows/deploy.yml` installs, builds, copies `dist/index.html` to `dist/404.html` for SPA routing, and publishes to GitHub Pages.  
3) In GitHub, enable Pages with the source set to **GitHub Actions**.  
4) Your site will be available at `https://<username>.github.io/portfolio/` (or the base you configure).
