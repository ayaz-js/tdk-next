import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header/Header"), {ssr:false})

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
      </body>
    </html>
  );
}
