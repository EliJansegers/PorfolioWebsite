# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server at localhost:3000
npm run build   # Production build to /build
npm test        # Run tests in interactive watch mode
```

No explicit lint script — ESLint runs automatically during `npm start` and `npm run build` via CRA's built-in configuration.

## Architecture

React 18 SPA built with Create React App, styled with Tailwind CSS, animated with Framer Motion.

**Routing** (`src/App.js`): Two routes via React Router v7:
- `/` — Main portfolio page (stacked sections via anchor links)
- `/project/:id` — Dynamic project detail page (`src/components/ProjectDetails.js`)

**Section layout**: The home page is a series of full-width sections navigated by smooth scroll. Each section corresponds to a component (`About`, `Skills`, `Portfolio`, `Certification`, `Contact`) wrapped in `SectionWithTitle`.

**Animations**: Components use `useInView` (react-intersection-observer) + `useAnimation` (framer-motion) to trigger scroll-based entrance animations. This pattern repeats across most section components.

**Data**: All project and skill data is hardcoded directly inside components — `Portfolio.js` holds the projects array, `ProjectDetails.js` has a separate (parallel) projects array for detail views, and `Skills.js` has the skills list. Keep these in sync when adding/editing projects.

**Styling**: Tailwind utility classes + custom color tokens defined in `tailwind.config.js` (`darkBlue`, `blueGray`, `steelBlue`, `lightBlue`, `offWhite`). Global styles and keyframe animations live in `src/App.css`.

**Contact form**: Uses EmailJS (`src/components/ContactForm.js`) — credentials are referenced via environment variables or hardcoded service/template IDs in that file.

**Icons**: FontAwesome via `@fortawesome/react-fontawesome` + icon packages.

**Images**: Local assets in `src/images/` — imported directly into components.
