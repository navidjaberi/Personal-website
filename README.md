# Navid Jaberi — Personal Website

My portfolio site: who I am, where I've worked, what I build, and how to reach me.

**Live:** https://navidjaberi.vercel.app

## Features

- Three languages, English, Persian and Turkish, with locale-based routing (`/en`, `/fa`, `/tr`) and a full right-to-left layout for Persian
- Dark and light themes that follow the system setting and can be switched by hand
- Sections for About, Experience, Skills, Projects and Contact, with smooth scrolling between them
- Page and scroll animations with Framer Motion, and an animated particle background
- Downloadable resume

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and TypeScript
- [next-intl](https://next-intl.dev/) for translations and localized routing
- [Tailwind CSS](https://tailwindcss.com/) for styling, [next-themes](https://github.com/pacocoursey/next-themes) for theming
- [Framer Motion](https://www.framer.com/motion/) and [tsParticles](https://particles.js.org/) for animation
- Deployed on [Vercel](https://vercel.com/)

## Project structure

```
messages/           translation files (en.json, fa.json, tr.json)
src/app/[locale]/   localized layout and page
src/i18n/           routing and request config for next-intl
src/components/     page sections and reusable components
public/             images, flags, fonts and resume files
```

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Contact

[Email](mailto:navidjaberi5@gmail.com) · [LinkedIn](https://www.linkedin.com/in/navid-jaberi) · [GitHub](https://github.com/navidjaberi)
