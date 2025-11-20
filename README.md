# Portfolio (React + Vite + TypeScript + Tailwind)

Polished developer portfolio for **Gurleen Singh** (Senior Full Stack Developer) with React Router, Tailwind, Recharts visualizations, and data-driven sections.

## Structure (key files)

- `index.html`: Root HTML with Google Fonts.
- `vite.config.ts`: Vite + React config (base set to `/portfolio/` for GH Pages).
- `tailwind.config.js` / `postcss.config.js`: Tailwind + PostCSS.
- `tsconfig*.json`: TypeScript configs.
- `src/` (TS/TSX only):
  - `main.tsx`, `App.tsx`: App entry/layout with routing.
  - `index.css`: Tailwind layers + shared utilities.
  - `components/`: Navbar, Footer, SkillCharts, SkillBadges, ExperienceTimeline, ProjectCard, etc.
  - `pages/`: Home, Skills, Experience, Projects, About, Contact.
  - `data/`: `skills.ts`, `experience.ts`, `projects.ts`, `personal.ts` (all editable).
- `.github/workflows/deploy.yml`: GitHub Pages deployment (GH Actions).
- `.gitignore`: Ignores build artifacts (includes `*.tsbuildinfo`).

## Scripts

- `npm install` — install dependencies.
- `npm run dev` — start the local dev server.
- `npm run build` — build the production bundle.
- `npm run preview` — preview the production build locally.

## Tailwind / Charts / Icons dependencies

- UI: `tailwindcss`, `postcss`, `autoprefixer`
- Motion: `framer-motion`
- Charts: `recharts`
- Icons: `react-icons`

Install (if needed): `npm install -D tailwindcss postcss autoprefixer` and `npm install recharts framer-motion react-icons`

## Editing content

- Update personal/contact info: `src/data/personal.ts`
- Skills & strengths: `src/data/skills.ts` (affects charts + badges)
- Experience timeline: `src/data/experience.ts`
- Projects grid: `src/data/projects.ts`
- Theme (colors/fonts): `tailwind.config.js`

## Deploying to GitHub Pages

1) Repo should be named `portfolio` (or update `base` in `vite.config.ts`).  
2) Push to `main` (or `master`). Workflow builds, adds SPA fallback, and deploys.  
3) In GitHub, set Pages source to **GitHub Actions**.  
4) Live URL: `https://<username>.github.io/portfolio/` (or your configured base).
