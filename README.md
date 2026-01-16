# Gym Genius Support + Privacy Site

Static React + TypeScript site for the Gym Genius iOS app, built with Vite and React Router.

## Install

```bash
npm install
```

## Dev server

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deployment notes

- The site is a static SPA. For direct navigation to `/privacy` or `/support`, your host must rewrite all routes to `index.html`.
- If deploying to GitHub Pages under a subpath, set the `base` value in `vite.config.ts` and the Router will pick it up via `import.meta.env.BASE_URL`.
  - Example: `base: '/your-repo/'`

