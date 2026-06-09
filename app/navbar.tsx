"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const navItems = [
  { name: "Ecosystem", href: "/ecosystem", icon: "◈" },
  { name: "Modules", href: "/modules", icon: "✦" },
  { name: "Execs", href: "/execs", icon: "⬢" },
  { name: "Documents", href: "/documents", icon: "▣" },
  { name: "Roadmap", href: "/roadmap", icon: "◆" },
  { name: "Governance", href: "/governance", icon: "⬟" },
  { name: "Connect", href: "/connect", icon: "✧" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* NAV BACKGROUND */}
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-8 h-8"
          >
            {/* Line 1 */}
            <span
              className={`absolute left-0 h-[2px] w-5 bg-yellow-400 transition-all duration-300 ${
                menuOpen ? "top-[14px] rotate-45" : "top-[7px]"
              }`}
            />

            {/* Line 2 */}
            <span
              className={`absolute left-0 h-[2px] w-5 bg-yellow-400 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "top-[12px]"
              }`}
            />

            {/* Line 3 */}
            <span
              className={`absolute left-0 h-[2px] w-5 bg-yellow-400 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "top-[17px]"
              }`}
            />

            {/* Line 4 */}
            <span
              className={`absolute left-0 h-[2px] w-5 bg-yellow-400 transition-all duration-300 ${
                menuOpen ? "top-[14px] -rotate-45" : "top-[22px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute
          top-[72px]
          right-0
          bottom-0
          w-[55%]
          max-w-[320px]
          bg-[#1a0025]/95
          backdrop-blur-xl
          border-l border-purple-800
          shadow-[0_0_30px_rgba(250,204,21,0.15)]
          transform transition-transform duration-300 ease-out
          ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            currentX.current = e.touches[0].clientX;
          }}
          onTouchEnd={() => {
            if (startX.current - currentX.current > 80) {
              setMenuOpen(false);
            }
          }}
        >
          <div className="flex flex-col h-full px-6 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 opacity-0 animate-fadeIn transition ${
                    pathname === item.href
                      ? "text-yellow-300 font-semibold"
                      : "text-white hover:text-yellow-300"
                  }`}
                  style={{
                    animationDelay: `${i * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* GOLD ICON */}
                  <span className="text-yellow-400 text-sm">
                    {item.icon}
                  </span>

                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pb-4">
              <Link
                href="/enter"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg font-semibold transition"
              >
                Enter Gloreum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}