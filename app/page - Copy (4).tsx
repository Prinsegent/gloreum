export default function Home() {
  return (
    <main className="text-white">

      <HeroSection />

      <Divider crystal="/water-crystal.png" />

      <Section
        id="ecosystem"
        side="left"
        number="02"
        chapter="CRYSTAL MACHINE"
        title="The Virtual Crystal Machine"
        desc="A dynamic mining and activation system powering ecosystem energy and participation flow."
        bg="bg-[url('/bg2.jpg')]"
        accent="text-cyan-400"
      />

      <Divider crystal="/fire-crystal.png" />

      <Section
        id="modules"
        side="right"
        number="03"
        chapter="ASSETOMICS"
        title="Assetomics of Gems and Crystals"
        desc="A structured asset classification and intelligence layer for ecosystem resources."
        bg="bg-[url('/bg3.jpg')]"
        accent="text-purple-400"
      />

      <Divider crystal="/air-crystal.png" />

      <Section
        id="execs"
        side="left"
        number="04"
        chapter="G-CORE"
        title="Gloreum Crystocratic On-Chain Resource Enterprise (G-CORE)"
        desc="A decentralized enterprise framework for structured on-chain resource coordination."
        bg="bg-[url('/bg4.jpg')]"
        accent="text-orange-400"
      />

      <Divider crystal="/man-crystal.png" />

      <Section
        id="documents"
        side="right"
        number="05"
        chapter="SOCIAL CIRCLES"
        title="Gloreum Social Circles Module"
        desc="A network-based participation and relationship graph system."
        bg="bg-[url('/bg5.jpg')]"
        accent="text-pink-400"
      />

      <Divider crystal="/earth-crystal.png" />

      <Section
        id="roadmap"
        side="left"
        number="06"
        chapter="THEE"
        title="The Eternal Exchange (THEE)"
        desc="A controlled ecosystem exchange layer for structured value movement."
        bg="bg-[url('/bg6.jpg')]"
        accent="text-blue-400"
      />

      <Divider crystal="/water-crystal.png" />

      <Section
        id="governance"
        side="right"
        number="07"
        chapter="JIVEPAY"
        title="JivePay: Crypto Wallet Bridge for Real Money Payments"
        desc="A bridge system connecting crypto-based assets with real-world payment rails."
        bg="bg-[url('/bg7.jpg')]"
        accent="text-green-400"
      />

      <Divider crystal="/fire-crystal.png" />

      <Section
        id="connect"
        side="left"
        number="08"
        chapter="ROADMAP"
        title="Roadmap"
        desc="The structured development phases of the Gloreum ecosystem."
        bg="bg-[url('/bg8.jpg')]"
        accent="text-red-400"
      />

    </main>
  );
}

/* =========================
   HERO SECTION (FIXED + CENTERED + ROTATING CRYSTAL)
========================= */
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 bg-[url('/bg1.jpg')] bg-cover bg-center flex flex-col overflow-hidden">

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* ENERGY BLOOM */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="absolute w-[32rem] h-[32rem] md:w-[42rem] md:h-[42rem] rounded-full bg-cyan-300/20 blur-[120px] animate-pulse" />

        <div className="absolute w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem] border border-cyan-300/20 rounded-full animate-pulse" />

      </div>

      {/* TITLE */}
      <div className="relative z-20 text-center pt-6">
        <h1 className="text-3xl md:text-5xl font-light tracking-widest text-white/90">
          The Gloreum Ecosystem
        </h1>
      </div>

      {/* CRYSTAL (PERFECT CENTER + ROTATION ONLY) */}
      <div className="flex flex-1 items-center justify-center relative">

  {/* ABSOLUTE CENTER ANCHOR (CRITICAL FIX) */}
  <div className="relative w-fit h-fit flex items-center justify-center">

    {/* OUTER GLOW */}
    <div className="absolute w-[36rem] h-[36rem] rounded-full bg-cyan-300/20 blur-[120px]" />

    {/* RING OUTER */}
    <div className="absolute w-[30rem] h-[30rem] rounded-full border border-cyan-300/30" />

    {/* RING MIDDLE */}
    <div className="absolute w-[24rem] h-[24rem] rounded-full border border-white/20 animate-pulse" />

    {/* RING INNER */}
    <div className="absolute w-[18rem] h-[18rem] rounded-full border border-cyan-200/20 animate-ping" />

    {/* CRYSTAL (CENTERED CORE) */}
    <img
      src="/water-crystal.png"
      alt="Gloreum Core"
      className="
        relative z-10
        w-56 h-56 md:w-64 md:h-64
        object-contain
        animate-spinClockwise
        drop-shadow-[0_0_50px_rgba(255,255,255,1)]
      "
    />

  </div>

</div>

      {/* DESCRIPTION */}
      <div className="relative z-20 text-center px-6 pb-20 max-w-5xl mx-auto">
        <p className="text-white/95 text-xl md:text-3xl font-bold leading-tight">
          Gloreum® is a Human Participation, Validation and Rewards Ecosystem powered by AI and an Ethereum-derived blockchain network, with a Proof of Participation and Validation (PPV) consensus mechanism.
        </p>
      </div>

    </section>
  );
}

/* =========================
   DIVIDER (CRYSTALS ONLY)
========================= */
function Divider({
  crystal,
  side = "center",
}: {
  crystal: string;
  side?: "left" | "right" | "center";
}) {
  return (
    <div className="relative w-full h-32 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-purple-500/10 animate-pulse" />

      <div
        className={`relative w-full flex items-center px-10
        ${side === "left" ? "justify-start" : ""}
        ${side === "right" ? "justify-end" : ""}
        ${side === "center" ? "justify-center" : ""}`}
      >

        <div className="relative flex items-center justify-center">

          {/* GLOW CORE */}
          <div className="absolute w-40 h-40 bg-white/10 blur-3xl rounded-full" />

          {/* RINGS */}
          <div className="absolute w-36 h-36 border border-white/20 rounded-full animate-ping" />
          <div className="absolute w-28 h-28 border border-purple-300/30 rounded-full animate-pulse" />

          {/* CRYSTAL */}
          <img
            src={crystal}
            alt="divider crystal"
            className="h-28 w-auto object-contain animate-spinClockwise z-10"
          />

        </div>

      </div>
    </div>
  );
}

/* =========================
   SECTION (UNCHANGED STABLE VERSION)
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
}: {
  id: string;
  side: "left" | "right";
  number: string;
  chapter: string;
  title: string;
  desc: string;
  bg: string;
  accent: string;
}) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center relative bg-cover bg-center ${bg}`}
    >
      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-14 ${
          side === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT BLOCK */}
        <div className="max-w-2xl text-center md:text-left">

          {/* CHAPTER LABEL */}
          <p className={`${accent} text-xs tracking-[0.3em] mb-3 font-semibold`}>
            {number} • {chapter.toUpperCase()}
          </p>

          {/* CORE STATEMENT */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            {title}
          </h2>

          {/* SUPPORTING EXPLANATION */}
          <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed">
            {desc}
          </p>

          {/* IMPACT / VALUE LINE */}
          <p className={`mt-5 text-sm font-semibold ${accent}`}>
            Ecosystem-grade module enabling scalable participation, validation, and structured value flow.
          </p>

        </div>
      </div>
    </section>
  );
}