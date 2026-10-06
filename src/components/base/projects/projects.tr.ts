export const projectsTr = [
  {
    id: "vue-smart-loading-kit",
    title: "Vue Smart Loading Kit",
    subtitle: "Açık kaynak Vue 3 kütüphanesi",
    points: [
      "MIT lisanslı bir Vue 3 + TypeScript kütüphanesini npm'de yayınladım ve sürdürüyorum: skeleton'lar, spinner'lar, ilerleme çubukları, SmartLoader ve PageProgress; Nuxt için SSR uyumlu.",
      "Gerçek içeriği yalnızca CSS ile ona uyan bir skeleton'a dönüştüren v-skeleton direktifini geliştirdim: DOM'u hiç değiştirmez, bu yüzden her Vue içeriğiyle çalışır ve düzen kaymasına yol açmaz; bu, gerçek tarayıcı testleriyle doğrulandı.",
      "SmartLoader'ı hızlı isteklerde yanıp sönmeyecek, yavaş isteklerde kesilip gelmeyecek şekilde tasarladım ve kütüphaneyi birim ve tarayıcı testleri, mutasyon testi ve CI ile destekledim.",
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
    subtitle: "Yapay zekâ destekli beslenme ve fitness paneli",
    points: [
      "Görsel LLM'ler (Google Gemini veya Claude API) üzerinde çalışan, fotoğraftan besin değeri çıkaran bir uygulama geliştirdim; her sağlayıcı tek bir arayüzün arkasında ve API anahtarı olmadan çalışan bir demo modu var.",
      "Tek bir Zod şemasıyla istekleri doğruladım, arayüzü tipledim ve modelin yapılandırılmış JSON çıktısını tanımladım; API anahtarları sunucuda kalıyor.",
      "Projeyi baştan sona Claude Code'u eşli programcı olarak kullanarak, tip kontrolleri ve testleri güvence olarak kullanıp geliştirdim.",
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
    subtitle: "Yemek sipariş uygulaması",
    points: [
      "İlk Next.js projemi yeniden yazdım; Pages Router, Redux ve Firebase'den App Router, Server Actions ve Supabase'e taşıdım.",
      "Row Level Security ile uygulanan müşteri ve yönetici rolleri, sunucu tarafında sipariş fiyatlandırması ve lint, test ve build çalıştıran CI ekledim.",
    ],
    stack: ["Next.js 16", "React 19", "Supabase", "GitHub Actions"],
    links: [
      { label: "demo", href: "https://food-corner-beta-gray.vercel.app" },
      { label: "github", href: "https://github.com/navidjaberi/food-corner" },
    ],
  },
];
