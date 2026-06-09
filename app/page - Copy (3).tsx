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
   HERO SECTION (CINEMATIC SAFE)
========================= */
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 bg-[url('/bg1.jpg')] bg-cover bg-center flex flex-col overflow-hidden">

      {/* DARK CINEMATIC LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* ENERGY BLOOM */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* TITLE */}
      <div className="relative z-20 text-center pt-6 animate-[fadeIn_1.5s_ease-out]">
        <h1 className="text-3xl md:text-5xl font-light tracking-widest text-white/90">
          The Gloreum Ecosystem
        </h1>
      </div>

      {/* CRYSTAL CORE */}
      <div className="flex flex-1 items-center justify-center relative">

        <div className="absolute w-72 h-72 md:w-[30rem] md:h-[30rem] border border-white/10 rounded-full animate-pulse" />
        <div className="absolute w-96 h-96 md:w-[36rem] md:h-[36rem] border border-purple-300/10 rounded-full animate-ping" />

       <div className="animate-float">
  <img
    src="/water-crystal.png"
    alt="Gloreum Core"
    className="w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-2xl animate-spinClockwise"
  />
</div>
      </div>

      {/* DESCRIPTION */}
      <div className="relative z-20 text-center px-6 pb-20 max-w-5xl mx-auto animate-[fadeIn_2.5s_ease-out]">
        <p className="text-white/90 text-xl md:text-2xl font-semibold leading-snug tracking-wide">
          Gloreum® is a Human Participation, Validation and Rewards Ecosystem powered by AI and an Ethereum-derived blockchain network, with a Proof of Participation and Validation (PPV) consensus mechanism.
        </p>
      </div>

    </section>
  );
}

/* =========================
   DIVIDER (CRYSTALS ONLY)
========================= */
function Divider({ crystal }: { crystal: string }) {
  return (
    <div className="relative w-full h-32 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-950 flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-purple-500/10 animate-pulse" />

      <div className="relative">
        <div className="absolute w-28 h-28 bg-purple-400/20 blur-2xl rounded-full animate-pulse" />
        <div className="absolute w-36 h-36 border border-purple-300/30 rounded-full animate-ping" />

        <img
          src={crystal}
          alt="divider crystal"
          className="h-28 w-auto object-contain animate-spin"
        />
      </div>

    </div>
  );
}

/* =========================
   SECTION (CLEAN + STABLE)
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
    <section id={id} className={`min-h-screen flex items-center relative bg-cover bg-center ${bg}`}>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 ${side === "right" ? "md:flex-row-reverse" : ""}`}>

        <div className="max-w-xl text-center md:text-left">

          <div className={`${accent} text-xs tracking-[0.3em] mb-4 font-medium`}>
            {number} • {chapter}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
            {desc}
          </p>

        </div>

      </div>
    </section>
  );
}