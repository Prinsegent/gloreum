import Link from "next/link";

export default function Modules() {
  return (
    <main className="p-10 space-y-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        MODULES CORE
      </h1>

      <p className="text-gray-400 max-w-2xl">
        The Gloreum Module Layer contains the operational engines that power the ecosystem.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link href="/modules/assetomics" className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500">
          <h2 className="text-xl font-bold text-blue-400">Assetomics</h2>
          <p className="text-gray-400">Asset intelligence and structuring system</p>
        </Link>

        <Link href="/modules/galore" className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500">
          <h2 className="text-xl font-bold text-purple-400">GALORE</h2>
          <p className="text-gray-400">Enterprise launch and automation layer</p>
        </Link>

        <Link href="/modules/jivepay" className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500">
          <h2 className="text-xl font-bold text-green-400">JivePay</h2>
          <p className="text-gray-400">Payment and settlement system</p>
        </Link>

        <Link href="/modules/socialcircles" className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-pink-500">
          <h2 className="text-xl font-bold text-pink-400">Social Circles</h2>
          <p className="text-gray-400">Executive network graph system</p>
        </Link>

        <Link href="/modules/thee" className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-400">THEE</h2>
          <p className="text-gray-400">Exchange and value settlement layer</p>
        </Link>

      </div>

    </main>
  );
}