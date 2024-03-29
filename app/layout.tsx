import type { Metadata } from "next";
import "./globals.css";
import Particles from "../components/particlesbg";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Particles />

      <body className='App'>{children}</body>
    </html>
  );
}
