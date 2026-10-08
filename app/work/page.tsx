import type { Metadata } from "next";
import Link from "next/link";
import WorkGallery from "./work-gallery";

export const metadata: Metadata = {
  title: "Selected Work | Crystal Kizor",
  description:
    "Explore selected architecture, interior, and community projects by Crystal Kizor and Studio COKA.",
};

export default function WorkPage() {
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
            Crystal Kizor / Selected work
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Design decisions, made visible.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#65584b]">
            Explore each project through its spaces, materials, and relationship
            to place. Select a project, then move through its images.
          </p>
        </div>

        <WorkGallery />

        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#211c17]/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-lg font-medium">Have a project in mind?</p>
          <Link
            href="/#pathways"
            className="inline-flex min-h-12 items-center justify-center bg-[#211c17] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#315140] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315140]"
          >
            Find your next step
          </Link>
        </div>
      </div>
    </main>
  );
}
