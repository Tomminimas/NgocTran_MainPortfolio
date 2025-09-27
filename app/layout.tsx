export const metadata = {
  title: "Ngoc Tran • Portfolio",
  description: "Business Analytics & Finance • Data‑Driven Storyteller",
  openGraph: { title: "Ngoc Tran • Portfolio", description: "Portfolio", images: ["/og.jpg"] },
  icons: { icon: "/favicon.ico" },
};

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-[#090d1a] to-[#0b1020] text-white`}>{children}</body>
    </html>
  );
}