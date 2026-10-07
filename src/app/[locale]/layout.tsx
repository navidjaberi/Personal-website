import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import ScrollButton from "../ScrollButton";
import Providers from "../providers";
import { Vazirmatn } from "next/font/google";
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
});
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogLocales: Record<string, string> = {
    en: "en_US",
    fa: "fa_IR",
    tr: "tr_TR",
  };

  return {
    metadataBase: new URL("https://personal-website-flax-six-86.vercel.app"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/img/favicon.svg",
      shortcut: "/img/favicon.svg",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fa: "/fa",
        en: "/en",
        tr: "/tr",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Navid Jaberi",
      locale: ogLocales[locale] ?? "en_US",
      alternateLocale: Object.entries(ogLocales)
        .filter(([key]) => key !== locale)
        .map(([, value]) => value),
      type: "website",
      images: ["/img/landing.jpg"],
    },
  };
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={vazirmatn.variable}
      suppressHydrationWarning
    >
      <body
        className="App overflow-x-hidden bg-[#DDD0C8] dark:bg-[#0c0a09] transition-colors"
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ScrollButton />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
