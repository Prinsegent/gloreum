import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-28 text-center max-w-5xl mx-auto">
        <div className="text-sm tracking-widest text-cyan-400 mb-6">
          GLOREUM ECOSYSTEM
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          A Human Participation <br />
          and Development System.
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
          Gloreum is a human participation and development ecosystem powered by AI and Ethereum derived blockchain Network, designed to coordinate, validate and reward human acts,
          digital assets, enterprise modules, and execution frameworks within a unified architecture.
        </p>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/ecosystem"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium"
          >
            Explore Ecosystem
          </Link>

          <Link
            href="/documents"
            className="px-6 py-3 border border-gray-700 hover:border-white rounded-lg"
          >
            View Documentation
          </Link>
        </div>
      </section>

      {/* PROBLEM / CONTEXT */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-900">
        <h2 className="text-2xl font-semibold text-white mb-6">
          The Problem
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Modern digital systems are fragmented — governance, assets, execution,
          and communication layers operate in isolation. This creates inefficiency,
          lack of coordination, and limited scalability across digital economies.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-900">
        <h2 className="text-2xl font-semibold text-white mb-6">
          The Gloreum Solution
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Gloreum introduces a modular ecosystem architecture that integrates
          governance systems, execution networks, asset frameworks, and enterprise modules
          into a unified structured environment.
        </p>
      </section>

      {/* CORE MODULES PREVIEW */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-900">
        <h2 className="text-xl text-gray-300 mb-8">
          Core Modules (Preview)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Module title="Assetomics" color="text-blue-400"
            desc="Asset structuring and intelligence layer" />

          <Module title="GALORE" color="text-purple-400"
            desc="Automated enterprise launch framework" />

          <Module title="JivePay" color="text-green-400"
            desc="Transaction and settlement system layer" />

          <Module title="Social Circles" color="text-pink-400"
            desc="Network graph of ecosystem participants" />

          <Module title="THEE Exchange" color="text-yellow-400"
            desc="Value exchange and settlement layer" />

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-900">
        <h2 className="text-2xl font-semibold mb-6">
          System Architecture
        </h2>

        <div className="text-gray-400 space-y-3">
          <p>• Layered modular ecosystem design</p>
          <p>• Separation of governance, execution, and asset systems</p>
          <p>• Scalable enterprise module framework</p>
          <p>• Interoperable internal system architecture</p>
        </div>
      </section>

      {/* ROADMAP SNAPSHOT */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-900">
        <h2 className="text-2xl font-semibold mb-6">
          Development Roadmap
        </h2>

        <div className="text-gray-400 space-y-3">
          <p>Phase 1 — Core architecture design and system structure</p>
          <p>Phase 2 — Module integration and internal system linking</p>
          <p>Phase 3 — Governance and execution layer expansion</p>
          <p>Phase 4 — External deployment and ecosystem scaling</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 py-10 border-t border-gray-900">
        Gloreum Ecosystem • Investor Preview Layer
      </footer>

    </main>
  );
}

/* MODULE CARD */
function Module({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className={`font-semibold ${color}`}>{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    </div>
  );
}