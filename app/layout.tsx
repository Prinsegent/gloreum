import type { Metadata } from "next";
import "./globals.css";

import { Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Cinzel } from "next/font/google";

import Navbar from "./navbar";

/* =========================
   FONTS
========================= */

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/* NEW: Cinzel (for Gloreum titles / mythic headers) */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],

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
    <html lang="en">
      
      {/* We keep Playfair as base if you still want that tone */}
      <body
        className={`${raleway.className} min-h-screen bg-black text-white antialiased overflow-x-hidden`}
      >

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className={`${playfair.className} relative w-full flex flex-col`}>
          {children}
        </main>

      </body>
    </html>
  );
}