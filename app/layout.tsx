import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EthubX FidelFun — Learn Amharic ፊደል",
  description:
    "Learn Amharic Fidel from ሀ to ፐ with interactive lessons, practice, tracing, and quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <I18nProvider>
          <Nav />

          <main>{children}</main>

          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}