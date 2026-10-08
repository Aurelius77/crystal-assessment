import Link from "next/link";
import EcosystemExplorer from "./ecosystem-explorer";

export const metadata = {
  title: "Explore the Ecosystem | Crystal Kizor",
  description:
    "Explore the connected design, product, education, research, and impact initiatives led by Crystal Kizor.",
};

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e9] text-[#211c17]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#211c17]"
        >
          Crystal Kizor
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.12em] text-[#315140] transition hover:text-[#8d5a2b]"
        >
          Back to home
        </Link>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mb-8 border-t border-[#211c17]/15 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d5a2b]">
            Crystal Kizor / The ecosystem
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#65584b]">
            One point of view, moving through places, objects, shared knowledge,
            and opportunities for people.
          </p>
        </div>
        <EcosystemExplorer />
      </div>
    </main>
  );
}
