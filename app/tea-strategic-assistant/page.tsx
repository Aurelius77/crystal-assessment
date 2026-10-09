import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The TEA Strategic Assistant | Crystal Kizor",
  description:
    "A proposed project-planning assistant from The Effective Architect to help built-environment teams turn complex briefs into clear decisions and next steps.",
};

const workflow = [
  {
    number: "01",
    title: "Synthesize the brief",
    detail:
      "Share the project stage, location and climate, users, priorities, and constraints. The assistant summarizes what matters and flags assumptions or missing context.",
  },
  {
    number: "02",
    title: "Compare directions",
    detail:
      "Review two or three strategic options, their tradeoffs, key risks, and the questions that need a human answer before moving forward.",
  },
  {
    number: "03",
    title: "Plan what comes next",
    detail:
      "Turn the chosen direction into an ordered set of research, coordination, and design actions, with TEA sources attached for further reading.",
  },
];

const buildSteps = [
  "Curate a small, reviewed TEA library of articles, frameworks, and checklists.",
  "Build a text-only brief form and server endpoint with source retrieval and structured responses.",
  "Test the options, citations, and usefulness with practicing architects before a limited pilot.",
];

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
            href="/#top"
            className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:inline sm:text-sm"
          >
            Home
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl overflow-hidden bg-[#203428] text-[#fffaf2] md:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8a15d]">
            The Effective Architect / Proposed AI tool
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            The Strategic Assistant
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-8 text-white/88">
            A project-planning partner for turning complex briefs into clear
            decisions and useful next steps.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
            It helps architects synthesize context, see the tradeoffs between
            possible directions, and decide what to investigate next. The
            architect stays in charge of the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#workflow"
              className="inline-flex min-h-12 items-center justify-center bg-[#d8a15d] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#21170e] transition hover:bg-[#ebb978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              See how it works
            </a>
            <a
              href="https://lnkd.in/emqe3r9U"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center border border-white/35 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore TEA
            </a>
          </div>
        </div>

        <figure className="relative min-h-72 bg-[#d5c9b7] sm:min-h-96 md:min-h-[560px]">
          <Image
            src="/Crystal_s pictures/Architectural Studio Portrait.png"
            alt="An architect working through drawings and design references"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 46vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 bg-[#211c17]/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white sm:bottom-6 sm:left-6">
            Think clearly / Choose deliberately / Move forward
          </figcaption>
        </figure>
      </section>

      <section className="border-b border-[#211c17]/15 bg-[#fffaf2]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:px-8 md:grid-cols-2 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8d5a2b]">
            For architects and built-environment teams
          </p>
          <p className="text-sm leading-6 text-[#65584b]">
            Especially useful to early-career professionals and small practices
            working through complex briefs with limited strategic support.
          </p>
        </div>
      </section>

      <section id="workflow" className="motion-scroll-enter py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 border-b border-[#211c17]/15 pb-8 lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8d5a2b]">
                From brief to direction
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Strategy support, not automated design.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#65584b] lg:pt-10">
              General AI can miss local conditions or sound more certain than
              the evidence allows. The assistant is grounded in reviewed TEA
              material and makes uncertainty visible instead of pretending to
              replace a mentor, consultant, or architect.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {workflow.map((step) => (
              <article
                key={step.number}
                className="motion-card-enter border-b border-[#211c17]/15 py-7 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="text-xs font-semibold tabular-nums text-[#8d5a2b]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#65584b]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-scroll-enter bg-[#e8dfd1] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8d5a2b]">
              First working version
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">
              Start small. Test the judgment.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[#55493d]">
              A Next.js text workflow could use a hosted instruction-following
              model API, such as OpenAI&apos;s Responses API, with retrieval over
              a curated TEA library. The model returns structured options and
              source references; practicing architects review the outputs
              before a limited pilot.
            </p>
            <ol className="mt-7 border-t border-[#211c17]/15">
              {buildSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#211c17]/15 py-4 text-sm leading-6 text-[#4b4035]"
                >
                  <span className="font-semibold tabular-nums text-[#315140]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="motion-scroll-enter bg-[#203428] py-20 text-[#fffaf2] sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8a15d]">
              Professional boundaries
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">
              Useful support, with the limits in view.
            </h2>
          </div>
          <ul className="grid content-start border-t border-white/20">
            <li className="border-b border-white/20 py-4 text-sm leading-6 text-white/78">
              No confidential drawings or client documents in the first version.
            </li>
            <li className="border-b border-white/20 py-4 text-sm leading-6 text-white/78">
              No claims of code, structural, cost, or safety compliance.
            </li>
            <li className="border-b border-white/20 py-4 text-sm leading-6 text-white/78">
              Cite reviewed sources, disclose uncertainty, and keep the architect
              responsible for decisions.
            </li>
            <li className="border-b border-white/20 py-4 text-sm leading-6 text-white/78">
              Keep project data out of persistent storage in the pilot unless
              users explicitly opt in.
            </li>
          </ul>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center sm:px-8 lg:px-10">
        <p className="text-sm leading-6 text-[#65584b]">
          A proposed tool for The Effective Architect. Not a live service.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center border border-[#211c17]/25 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#211c17] transition hover:border-[#315140] hover:text-[#315140] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315140]"
        >
          Back to Crystal&apos;s site
        </Link>
      </footer>
    </main>
  );
}
