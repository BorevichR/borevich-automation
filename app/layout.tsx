import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const SITE_URL = "https://borevich-automation.com";
const TITLE = "Borevich Automation";
const DESC =
  "Автоматизация бизнес-процессов с ИИ для малого и среднего бизнеса";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Borevich Automation",
  },
  description: DESC,
  alternates: {
    canonical: "/", // канонический URL будет SITE_URL/
    languages: { "ru-RU": "/" },
  },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: "Borevich Automation",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.jpg", // положи файл в /public/og.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: "Borevich Automation — Автоматизация с ИИ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // по желанию, положи файлы в /public
  },
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-950 text-white">
        <Header />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />

        {/* JSON-LD (минимальная карточка организации) */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Borevich Automation",
            url: SITE_URL,
            sameAs: ["https://t.me/BorevichAutomation_bot"],
            logo: `${SITE_URL}/apple-touch-icon.png`,
          })}
        </Script>
      </body>
    </html>
  );
}