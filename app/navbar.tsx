"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const navItems = [
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Modules", href: "/modules" },
  { name: "Execs", href: "/execs" },
  { name: "Documents", href: "/documents" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Governance", href: "/governance" },
  { name: "Connect", href: "/connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-xl" />

      {/* ENERGY LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-yellow-400"
        >
          <img src="/favicon.ico" alt="Gloreum" className="w-8 h-8" />
          Gloreum
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-1 transition ${
                  active
                    ? "text-yellow-300 font-semibold"
                    : "text-gray-200 hover:text-yellow-200"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/enter"
          className="hidden lg:block px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold"
        >
          Enter Gloreum
        </Link>

        {/* ================= HAMBURGER (4 LINES) ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-end gap-[6px] w-10 h-10"
        >
          {/* Line 1 */}
          <span
            className={`block h-[2px] bg-yellow-400 transition-all duration-300 ${
              menuOpen ? "w-6" : "w-8"
            }`}
          />

          {/* Line 2 (extra spacing effect) */}
          <span
            className={`block h-[2px] bg-yellow-400 transition-all duration-300 ${
              menuOpen ? "w-5" : "w-6"
            }`}
          />

          {/* Line 3 */}
          <span
            className={`block h-[2px] bg-yellow-400 transition-all duration-300 ${
              menuOpen ? "w-6" : "w-7"
            }`}
          />

          {/* Line 4 */}
          <span
            className={`block h-[2px] bg-yellow-400 transition-all duration-300 ${
              menuOpen ? "w-8" : "w-5"
            }`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60"
        />

        {/* SLIDE PANEL (CONTENT HEIGHT ONLY) */}
        <div
          className={`absolute top-0 right-0 w-1/2 max-w-sm
          bg-[#1a0025]/95 backdrop-blur-xl
          border-l border-purple-800
          shadow-[0_0_40px_rgba(168,85,247,0.25)]
          transform transition-transform duration-300 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col p-6 gap-5 pt-20 pb-6 h-fit">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-yellow-300 opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${i * 60}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/enter"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center px-4 py-3 bg-yellow-400 text-black rounded-lg font-semibold"
            >
              Enter Gloreum
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}