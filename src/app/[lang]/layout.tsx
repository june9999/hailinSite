import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  variable: "--font-raleway",
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
      <UserProvider>
        <body className={`${raleway.variable} min-h-screen `}>{children}</body>
      </UserProvider>
    </html>
  );
}
