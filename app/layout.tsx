import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Borevich Automation",
  description:
    "Автоматизация бизнес-процессов с ИИ для малого и среднего бизнеса",
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
      </body>
    </html>
  );
}