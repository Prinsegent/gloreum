"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* PURPLE ENERGY BACKDROP (KEY FIX) */}
      <div className="absolute inset-0 bg-purple-950/70 backdrop-blur-xl" />

      {/* TOP ENERGY LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* BRAND */}
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-2xl text-yellow-400 hover:scale-105 transition"
        >
          <img
            src="/favicon.ico"
            alt="Gloreum Logo"
            className="w-10 h-10"
          />
          Gloreum
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-6 text-sm">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-2 py-1 transition-all duration-300
                  ${
                    active
                      ? "text-yellow-300 font-semibold drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                      : "text-gray-200 hover:text-yellow-200"
                  }
                `}
              >
                {item.name}

                {/* ACTIVE UNDERLINE */}
                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/ecosystem"
          className="px-4 py-2 text-sm bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition shadow-lg"
        >
          Enter Ecosystem
        </Link>

      </div>
    </header>
  );
}