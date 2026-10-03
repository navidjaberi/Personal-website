import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ScrollButton from "../ScrollButton";
import Providers from "../providers";
export const metadata = {
  title: "Navid Jaberi",
  icons: {
    icon: "/img/favicon.svg",
    shortcut: "/img/favicon.svg",
  },
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className="App overflow-x-hidden bg-[#DDD0C8]  transition-colors"
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
