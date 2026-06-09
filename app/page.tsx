import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">

      <HeroSection />

      {/* =========================
          MODULES DATA STRUCTURE
      ========================= */}
      {modules.map((m) => (
        <div key={m.id}>
          <Divider crystal={m.crystal} side={m.dividerSide} />
          <Section {...m} />
        </div>
      ))}

      {/* =========================
          FOOTER
      ========================= */}
      <Footer />

    </main>
  );
}

/* =========================
   MODULES ARRAY (UNCHANGED)
========================= */
const modules = [
  {
    id: "crystal-machine",
    href: "/crystal-machine",
    side: "left",
    number: "02",
    chapter: "CRYSTAL MACHINE",
    title: "The Virtual Crystal Machine",
    desc:
      "The participation execution engine of the Gloreum ecosystem where user actions are transformed into Mining Energy streams. These streams activate Crystal-specific Gloret generation under PPV validation rules, ensuring structured participation-to-asset conversion.",
    bg: "bg-[url('/bg2.jpg')]",
    accent: "text-cyan-400",
    crystal: "/water-crystal.png",
    dividerSide: "center",
  },
  {
    id: "assetomics",
    href: "/assetomics",
    side: "right",
    number: "03",
    chapter: "ASSETOMICS",
    title: "Assetomics of Gems and Crystals",
    desc:
      "A structured asset classification and valuation framework defining Gloreum’s multi-tier resource architecture. It governs the transformation hierarchy between Ores, Glorets, Gloreum, Gems, and Eternal Crystals under controlled supply logic.",
    bg: "bg-[url('/bg3.jpg')]",
    accent: "text-purple-400",
    crystal: "/fire-crystal.png",
    dividerSide: "right",
  },
  {
    id: "gcore",
    href: "/g-core",
    side: "left",
    number: "04",
    chapter: "G-CORE",
    title: "Gloreum Crystocratic On-Chain Resource Enterprise (G-CORE)",
    desc:
      "The enterprise execution layer responsible for decentralized coordination, production logic, and Gems-based economic orchestration. G-CORE integrates on-chain participation and validation with real-world enterprise activity and structured revenue generation.",
    bg: "bg-[url('/bg4.jpg')]",
    accent: "text-orange-400",
    crystal: "/air-crystal.png",
    dividerSide: "left",
  },
  {
    id: "social-circles",
    href: "/social-circles",
    side: "right",
    number: "05",
    chapter: "SOCIAL CIRCLES",
    title: "Gloreum Social Circles Module",
    desc:
      "A circles-based participation and relationship system that maps human interactions into structured social clusters. These clusters contribute to participation, enterprise execution, scoring, validation pathways, and ecosystem trust topology under PPV logic.",
    bg: "bg-[url('/bg5.jpg')]",
    accent: "text-pink-400",
    crystal: "/man-crystal.png",
    dividerSide: "right",
  },
  {
    id: "thee",
    href: "/thee",
    side: "left",
    number: "06",
    chapter: "THEE",
    title: "The Eternal Exchange (THEE)",
    desc:
      "A controlled multi-route liquidity and asset exchange system defining structured value movement across ecosystem actors including Persons, Institutions, Validators, G-COREs, and Treasury layers. THEE ensures regulated flow of Gloreum assets across defined exchange paths.",
    bg: "bg-[url('/bg6.jpg')]",
    accent: "text-blue-400",
    crystal: "/earth-crystal.png",
    dividerSide: "left",
  },
  {
    id: "jivepay",
    href: "/jivepay",
    side: "right",
    number: "07",
    chapter: "JIVEPAY",
    title: "JivePay: Crypto Wallet Bridge for Real Money Payments",
    desc:
      "A bridge system connecting crypto-based assets with real-world payment rails, implemented as a hybrid transaction interface connecting Gloreum Asset settlements with fiat-referenced payment rails. JivePay functions as the user-facing payment gateway while MirrorPay executes underlying on-chain settlement logic.",
    bg: "bg-[url('/bg7.jpg')]",
    accent: "text-green-400",
    crystal: "/fire-crystal.png",
    dividerSide: "right",
  },
  {
    id: "aviss",
    href: "/aviss",
    side: "left",
    number: "08",
    chapter: "AVISS",
    title: "Advanced Voice ID and Signature System (AVISS)",
    desc:
      "AVISS is Gloreum's voice-based identity, authentication, and authorization framework. It combines voice biometrics, cryptographic verification, and behavioral validation mechanisms to enable secure identity confirmation, transaction approval, enterprise authorization, and ecosystem participation.",
    bg: "bg-[url('/bg8.jpg')]",
    accent: "text-indigo-400",
    crystal: "/air-crystal.png",
    dividerSide: "left",
  },
  {
    id: "hav",
    href: "/hav",
    side: "right",
    number: "09",
    chapter: "HAV",
    title: "Human Advancement Vehicles (HAV)",
    desc:
      "Human Advancement Vehicles are structured development pathways designed to assist participants in progressing through educational, economic, entrepreneurial, technological, and social advancement journeys. HAVs align ecosystem participation with measurable human development outcomes.",
    bg: "bg-[url('/bg9.jpg')]",
    accent: "text-emerald-400",
    crystal: "/man-crystal.png",
    dividerSide: "right",
  },
  {
    id: "tokenomics",
    href: "/tokenomics",
    side: "left",
    number: "10",
    chapter: "TOKENOMICS",
    title: "Gloreum Tokenomics",
    desc:
      "The tokenomics framework governs the issuance, circulation, utility, treasury interaction, exchange routing, and economic behavior of GET (Gloreum Eternal Token) within the ecosystem. It aligns incentives across participants, enterprises, exchanges, and ecosystem infrastructure.",
    bg: "bg-[url('/bg10.jpg')]",
    accent: "text-yellow-400",
    crystal: "/water-crystal.png",
    dividerSide: "left",
  },
  {
    id: "roadmap",
    href: "/roadmap",
    side: "right",
    number: "11",
    chapter: "ROADMAP",
    title: "Ecosystem Development Roadmap",
    desc:
      "A phased execution model defining progressive deployment of Gloreum infrastructure layers including participation systems, assetomics rollout, enterprise activation, and exchange layer expansion.",
    bg: "bg-[url('/bg11.jpg')]",
    accent: "text-red-400",
    crystal: "/fire-crystal.png",
    dividerSide: "right",
  },
  {
    id: "participate",
    hrefPrimary: "/enter",
    hrefSecondary: "/get",
    side: "left",
    number: "12",
    chapter: "PARTICIPATE",
    title: "Participate in the Gloreum Ecosystem",
    desc:
      "Acquisition and Onboarding layer for Executives, partners, institutions, validators, and contributors to participate in the Gloreum ecosystem and activate roles across all protocol layers.",
    bg: "bg-[url('/bg12.jpg')]",
    accent: "text-white",
    crystal: "/earth-crystal.png",
    dividerSide: "left",
  },
];

/* =========================
   HERO SECTION
========================= */
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 bg-[url('/bg1.jpg')] bg-cover bg-center flex flex-col overflow-hidden">

      {/* REMOVED OVERLAY */}

      <div className="flex flex-1 items-center justify-center relative">

        <div className="relative w-fit h-fit flex items-center justify-center">

          <div className="absolute w-[18rem] h-[18rem] md:w-[36rem] md:h-[36rem] rounded-full bg-cyan-300/20 blur-[80px] md:blur-[120px]" />
<div className="absolute w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] rounded-full border border-cyan-300/30" />
<div className="absolute w-[12rem] h-[12rem] md:w-[24rem] md:h-[24rem] rounded-full border border-white/20 animate-pulse" />
<div className="absolute w-[9rem] h-[9rem] md:w-[18rem] md:h-[18rem] rounded-full border border-cyan-200/20 animate-ping" />

<img
  src="/water-crystal.png"
  className="w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 animate-spinClockwise drop-shadow-[0_0_50px_white]"
  alt="crystal"
/>

        </div>

      </div>

      <div className="text-center pb-16 px-6">
        <p className="text-lg sm:text-xl md:text-3xl font-bold leading-relaxed max-w-5xl mx-auto">
          Gloreum® is a Human Participation, Validation and Rewards Ecosystem powered by AI and an Ethereum-derived blockchain network.
        </p>
      </div>

    </section>
  );
}

/* =========================
   DIVIDER
========================= */
function Divider({ crystal, side = "center" }: any) {
  return (
    <div className="relative w-full h-24 z-20">

      <div className="absolute inset-0 bg-[#12001f]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className={`relative h-full w-full flex items-center ${
        side === "left"
          ? "justify-start px-10"
          : side === "right"
          ? "justify-end px-10"
          : "justify-center"
      }`}>

        <div className="relative flex items-center justify-center">

          <div className="absolute w-32 h-32 bg-purple-500/20 blur-2xl rounded-full" />

          <img
            src={crystal}
            alt="divider crystal"
            className="h-20 w-auto animate-spinClockwise drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
          />

        </div>
      </div>

    </div>
  );
}

/* =========================
   SECTION (OVERLAY REMOVED)
========================= */
function Section({
  id,
  side,
  number,
  chapter,
  title,
  desc,
  bg,
  accent,
  hrefPrimary,
  hrefSecondary,
}: any) {
  return (
    <section id={id} className={`min-h-screen flex items-center relative bg-cover bg-center ${bg}`}>

      {/* REMOVED OVERLAY */}

      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-14 ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}>

        <div className="max-w-2xl w-full">

          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-10">

            <p className={`${accent} text-xs tracking-[0.35em] mb-3`}>
              {number} • {chapter}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>

            <p className="mt-6 text-white/80">{desc}</p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href={hrefPrimary || "#"}
                className={`px-5 py-2 rounded-lg border border-white/20 hover:border-white/50 transition font-semibold ${accent}`}
              >
                Explore Module →
              </Link>

              {(hrefSecondary || id === "participate") && (
                <Link
                  href={hrefSecondary || "/get"}
                  className="px-5 py-2 rounded-lg border border-white/10 text-white/70 hover:text-white hover:border-white/40 transition"
                >
                  Get Gloreum →
                </Link>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* =========================
   FOOTER
========================= */
function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#120018] via-[#1a0025] to-[#2a0018] backdrop-blur-md border-t border-white/10 py-12">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-white/60 text-sm">
          © {new Date().getFullYear()} Gloreum Ecosystems. All rights reserved.
        </div>

        <div className="text-sm font-semibold tracking-[0.3em] bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
          GLOREUM
        </div>

        <div className="flex gap-6 text-white/60 text-sm">

          <a href="#" className="hover:text-yellow-300 transition">Twitter</a>
          <a href="#" className="hover:text-yellow-300 transition">Telegram</a>
          <a href="#" className="hover:text-yellow-300 transition">GitHub</a>
          <a href="#" className="hover:text-yellow-300 transition">Docs</a>

        </div>

      </div>
    </footer>
  );
}