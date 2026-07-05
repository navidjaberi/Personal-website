"use client";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ScrollButton from "../ScrollButton";
import Providers from "../providers";
import { useEffect } from "react";
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
  useEffect(() => {
    document.body.style.visibility = "visible";
  }, []);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className="App overflow-x-hidden bg-[#DDD0C8]  transition-colors"
        style={{ visibility: "hidden" }}
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
