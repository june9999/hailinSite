import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"],
});

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
      <body className={`${inter.className} ${roboto.variable} `}>
        {children}
      </body>
    </html>
  );
}
