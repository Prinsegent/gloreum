import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">

      {/* SECTION 1 */}
      <Section
        title="GLOREUM"
        desc="The Ecosystem of Human Participation, Validation and Reward"
        bg="bg-[url('/bg1.jpg')]"
      />



      {/* SECTION 2 */}
      <Section
        title="The Virtual Crystal Machine"
        desc="A dynamic mining and activation system powering ecosystem energy and participation flow."
        bg="bg-[url('/bg2.jpg')]"
      />

      {/* SECTION 3 */}
      <Section
        title="Assetomics of Gems and Crystals"
        desc="A structured asset classification and intelligence layer for ecosystem resources."
        bg="bg-[url('/bg3.jpg')]"
      />

      {/* SECTION 4 */}
      <Section
        title="Gloreum Crystocratic On-Chain Resource Enterprise (G-CORE)"
        desc="A decentralized enterprise framework for structured on-chain resource coordination."
        bg="bg-[url('/bg4.jpg')]"
      />

      {/* SECTION 5 */}
      <Section
        title="Gloreum Social Circles Module"
        desc="A network-based participation and relationship graph system."
        bg="bg-[url('/bg5.jpg')]"
      />

      {/* SECTION 6 */}
      <Section
        title="The Eternal Exchange (THEE)"
        desc="A controlled ecosystem exchange layer for structured value movement."
        bg="bg-[url('/bg6.jpg')]"
      />

      {/* SECTION 7 */}
      <Section
        title="JivePay: Crypto Wallet Bridge for Real Money Payments"
        desc="A bridge system connecting crypto-based assets with real-world payment rails."
        bg="bg-[url('/bg7.jpg')]"
      />

      {/* SECTION 8 */}
      <Section
        title="Roadmap"
        desc="The structured development phases of the Gloreum ecosystem."
        bg="bg-[url('/bg8.jpg')]"
      />

      {/* SECTION 9 */}
      <Section
        title="Participate"
        desc="Join the Gloreum ecosystem as an Executive, Partner, or Participant."
        bg="bg-[url('/bg9.jpg')]"
      />

    </main>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({
  number,
  title,
  desc,
  bg,
  accent,
}: {
  number: string;
  title: string;
  desc: string;
  bg: string;
  accent: string;
})
 {
  return (
    <section
      className={`min-h-screen flex items-center justify-center relative bg-cover bg-center ${bg}`}
    >
      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* TOP & BOTTOM TRANSITIONS */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

      {/* CONTENT */}

      <div className="relative z-10 max-w-4xl text-center px-6">

        <p className={`${accent} tracking-widest text-xs mb-4`}>
          <div className={`${accent} text-sm tracking-[0.3em] mb-4 font-medium`}>
  {number} • {title.toUpperCase().split(" ")[0]}
</div>
        </p>

        {title === "GLOREUM" ? (
  <h1 className="text-5xl md:text-7xl font-black text-yellow-400 tracking-wider">
    GLOREUM
  </h1>
) : (
  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
    {title}
  </h1>
)}

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          {desc}
        </p>

      </div>
    </section>
  );
}
