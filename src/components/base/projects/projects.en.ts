export const projectsEn = [
  {
    id: "vue-smart-loading-kit",
    title: "Vue Smart Loading Kit",
    subtitle: "Open-source Vue 3 library",
    points: [
      "Published and maintain an MIT-licensed Vue 3 + TypeScript library on npm: skeletons, spinners, progress bars, SmartLoader and PageProgress, SSR-safe for Nuxt.",
      "Built a v-skeleton directive that turns real content into a matching skeleton with CSS alone: it never changes the DOM, so it works with any Vue content and causes no layout shift, verified in real-browser tests.",
      "Designed SmartLoader so fast requests never flash and slow ones never blink, and backed the library with unit and browser tests, mutation testing and CI.",
    ],
    stack: ["Vue 3", "TypeScript", "Vitest", "Stryker", "GitHub Actions"],
    links: [
      { label: "demo", href: "https://navidjaberi.github.io/vue-smart-loading-kit/" },
      { label: "github", href: "https://github.com/navidjaberi/vue-smart-loading-kit" },
      { label: "npm", href: "https://www.npmjs.com/package/vue-smart-loading-kit" },
    ],
  },
  {
    id: "fitplate",
    title: "FitPlate",
    subtitle: "AI nutrition & fitness dashboard",
    points: [
      "Built a photo-to-nutrition app on vision LLMs (Google Gemini or Claude API), with each provider behind one interface and a demo mode that runs without an API key.",
      "Used one Zod schema to validate requests, type the UI and define the model's structured JSON output, keeping API keys on the server.",
      "Built it end to end with Claude Code as a pair programmer, using type checks and tests as guardrails.",
    ],
    stack: ["Next.js 16", "TypeScript", "Zod", "Gemini / Claude API"],
    links: [
      { label: "demo", href: "https://fitplate-neon.vercel.app/" },
      { label: "github", href: "https://github.com/navidjaberi/fitplate" },
    ],
  },
  {
    id: "food-corner",
    title: "Food Corner",
    subtitle: "Food ordering app",
    points: [
      "Rebuilt my first Next.js project, moving it from Pages Router, Redux and Firebase to App Router, Server Actions and Supabase.",
      "Added customer and admin roles enforced with Row Level Security, server-side order pricing, and CI running lint, tests and build.",
    ],
    stack: ["Next.js 16", "React 19", "Supabase", "GitHub Actions"],
    links: [
      { label: "demo", href: "https://food-corner-beta-gray.vercel.app" },
      { label: "github", href: "https://github.com/navidjaberi/food-corner" },
    ],
  },
];
