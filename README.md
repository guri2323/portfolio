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
