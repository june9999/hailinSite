import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Wang HaiLin",
    template: "%s | Wang HaiLin ",
  },
  keywords: "",
  description: "The official personal site of Wang Hailin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
