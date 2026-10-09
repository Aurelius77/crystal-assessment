import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The TEA Strategic Assistant | Crystal Kizor",
  description:
    "A proposed project-planning assistant from The Effective Architect to help built-environment teams turn complex briefs into clear decisions and next steps.",
};

export default function TeaStrategicAssistantPage() {
  return (
    <main className="motion-page-enter min-h-screen bg-[#f6f1e9] text-[#211c17]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#211c17]"
        >
          Crystal Kizor
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-7">
          <Link
            href="/ecosystem"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:text-sm"
          >
            Ecosystem
          </Link>
          <Link
            href="/work"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:text-sm"
          >
            Work
          </Link>
          <Link
            href="/analytics"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:text-sm"
          >
            Analytics
          </Link>
          <Link
            href="/#top"
            className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:inline sm:text-sm"
          >
            Home
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <article className="motion-scroll-enter border border-[#211c17]/15 bg-[#fffaf2] p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d5a2b]">
            The Effective Architect / Proposed AI tool
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            The Strategic Assistant
          </h1>
          <p className="mt-4 text-base leading-7 text-[#65584b]">
            A project-planning partner for architects and built-environment
            teams, especially early-career professionals and small practices
            handling complex briefs with limited strategic support.
          </p>

          <section className="mt-7 border-t border-[#211c17]/15 pt-5">
            <h2 className="text-lg font-semibold">What it does</h2>
            <p className="mt-2 text-sm leading-6 text-[#65584b]">
              The user shares a project&apos;s stage, location and climate,
              users, priorities, and constraints. The assistant summarizes the
              brief, flags assumptions or missing information, compares two or
              three directions with tradeoffs, and proposes sequenced next
              steps with TEA sources attached.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">First version</h2>
            <p className="mt-2 text-sm leading-6 text-[#65584b]">
              Build a text-only workflow with Next.js, a hosted model API such as
              OpenAI&apos;s Responses API, and retrieval over a small, reviewed
              TEA library. Test the quality of options and citations with
              practicing architects before a limited pilot.
            </p>
          </section>

          <section className="mt-7 border-l-2 border-[#d8a15d] bg-[#f6f1e9] p-5">
            <h2 className="text-lg font-semibold">Limits and safeguards</h2>
            <p className="mt-2 text-sm leading-6 text-[#65584b]">
              Do not accept confidential drawings or client documents in the
              first version, or claim code, structural, cost, or safety
              compliance. Cite reviewed sources, show uncertainty, avoid
              storing project data without opt-in, and leave all decisions with
              the architect.
            </p>
          </section>

          <footer className="mt-7 flex flex-col gap-3 border-t border-[#211c17]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[#65584b]">
              Proposed concept. Not a live service.
            </p>
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b]"
            >
              Back to Crystal&apos;s site
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
