import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "ТОО TDK Commerce SA",
  description: "ТОО TDK Commerce SA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="body">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
