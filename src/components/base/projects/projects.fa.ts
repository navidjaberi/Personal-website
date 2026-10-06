export const projectsFa = [
  {
    id: "vue-smart-loading-kit",
    title: "Vue Smart Loading Kit",
    subtitle: "کتابخانه‌ی متن‌باز Vue 3",
    points: [
      "یک کتابخانه‌ی Vue 3 و TypeScript با لایسنس MIT را روی npm منتشر کرده‌ام و نگهداری می‌کنم: اسکلتون، اسپینر، نوار پیشرفت، SmartLoader و PageProgress، سازگار با SSR در Nuxt.",
      "دایرکتیو v-skeleton را ساختم که محتوای واقعی را فقط با CSS به اسکلتونی هم‌شکل تبدیل می‌کند؛ DOM را تغییر نمی‌دهد، پس با هر محتوای Vue کار می‌کند و جابه‌جایی صفحه ایجاد نمی‌کند. این رفتار با تست در مرورگر واقعی بررسی شده است.",
      "SmartLoader را طوری طراحی کردم که درخواست‌های سریع چشمک نزنند و درخواست‌های کند قطع‌ووصل نشوند، و کتابخانه را با تست واحد، تست مرورگر، mutation testing و CI پشتیبانی کردم.",
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
    subtitle: "داشبورد تغذیه و تناسب اندام با هوش مصنوعی",
    points: [
      "اپلیکیشنی ساختم که از روی عکس غذا اطلاعات تغذیه‌ای می‌دهد و روی مدل‌های بینایی (Google Gemini یا Claude API) کار می‌کند؛ هر سرویس پشت یک رابط مشترک است و یک حالت دمو بدون نیاز به کلید API دارد.",
      "با یک اسکیمای Zod هم درخواست‌ها را اعتبارسنجی کردم، هم رابط کاربری را تایپ کردم و هم خروجی JSON ساختاریافته‌ی مدل را تعریف کردم؛ کلیدهای API فقط روی سرور می‌مانند.",
      "کل پروژه را با Claude Code به‌عنوان هم‌برنامه‌نویس ساختم و تایپ‌چک و تست‌ها را به‌عنوان محافظ استفاده کردم.",
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
    subtitle: "اپلیکیشن سفارش غذا",
    points: [
      "اولین پروژه‌ی Next.js خودم را از نو ساختم و آن را از Pages Router، Redux و Firebase به App Router، Server Actions و Supabase منتقل کردم.",
      "نقش‌های مشتری و ادمین با Row Level Security، محاسبه‌ی قیمت سفارش سمت سرور و CI برای lint، تست و build اضافه کردم.",
    ],
    stack: ["Next.js 16", "React 19", "Supabase", "GitHub Actions"],
    links: [
      { label: "demo", href: "https://food-corner-beta-gray.vercel.app" },
      { label: "github", href: "https://github.com/navidjaberi/food-corner" },
    ],
  },
];
