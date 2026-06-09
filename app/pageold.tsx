"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-purple-900/20 blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 px-8 py-24 text-center max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 border border-cyan-500 text-cyan-300 rounded-full text-sm mb-6 backdrop-blur">
            Gloreum Ecosystem v1
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            A Living <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Digital Ecosystem
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Modular architecture powering governance, execution systems,
            asset intelligence, and decentralized coordination layers.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">

            <Link
              href="/ecosystem"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-medium transition shadow-lg shadow-cyan-500/20"
            >
              Explore Ecosystem
            </Link>

            <Link
              href="/modules"
              className="px-6 py-3 border border-gray-700 hover:border-white rounded-xl font-medium transition"
            >
              View Modules
            </Link>

          </div>
        </motion.div>
      </section>

      {/* CARDS */}
      <section className="relative z-10 px-8 pb-24 max-w-6xl mx-auto">

        <h2 className="text-xl text-gray-300 mb-8">
          Core Systems
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <GlassCard title="Governance Layer" desc="Rules & control systems" href="/governance" />
          <GlassCard title="Exec Network" desc="Executive coordination system" href="/execs" />
          <GlassCard title="Modules Engine" desc="Core system modules" href="/modules" />
          <GlassCard title="Documentation" desc="Technical references" href="/documents" />
          <GlassCard title="Roadmap" desc="Future development plan" href="/roadmap" />
          <GlassCard title="Connect" desc="Communication layer" href="/connect" />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-gray-600 py-10 border-t border-gray-900">
        Gloreum System Architecture • v1 Prototype Layer
      </footer>

    </main>
  );
}

/* GLASS CARD COMPONENT */
function GlassCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition hover:scale-[1.02] duration-300">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{desc}</p>
      </div>
    </Link>
  );
}