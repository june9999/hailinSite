import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
