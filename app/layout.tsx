import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Navbar from "./navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gloreum Ecosystem",
  description: "A modular digital ecosystem architecture system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="min-h-screen bg-black text-white antialiased overflow-x-hidden">

        {/* NAVBAR (fixed layer, stays above hero scroll) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="relative w-full flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}