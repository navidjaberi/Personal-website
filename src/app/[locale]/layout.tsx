import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ScrollButton from "../ScrollButton";

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className="App overflow-x-hidden dark:bg-black bg-[#DDD0C8]">
        <NextIntlClientProvider messages={messages}>
          <ScrollButton />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}