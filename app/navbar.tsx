"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

return ( <header className="fixed top-0 left-0 w-full z-50">


  {/* BACKDROP */}
  <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-xl" />

  {/* TOP ENERGY LINE */}
  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />

  <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

    {/* LOGO */}
    <Link
      href="/"
      className="flex items-center gap-2 md:gap-3 font-bold text-xl md:text-2xl text-yellow-400"
    >
      <img
        src="/favicon.ico"
        alt="Gloreum Logo"
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <span>Gloreum</span>
    </Link>

    {/* DESKTOP NAV */}
    <nav className="hidden lg:flex gap-6 text-sm">

      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-2 py-1 transition-all duration-300 ${
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

    {/* DESKTOP CTA */}
    <Link
      href="/enter"
      className="hidden lg:block px-4 py-2 text-sm bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition"
    >
      Enter Gloreum
    </Link>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden text-yellow-400 text-3xl leading-none"
    >
      ☰
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="lg:hidden relative bg-[#120018]/95 backdrop-blur-xl border-t border-purple-800">

      <div className="flex flex-col p-6 gap-4">

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-300 transition"
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
  )}
</header>


);
}
