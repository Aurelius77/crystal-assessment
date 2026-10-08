"use client";

import { useState } from "react";

const pathways = [
  {
    audience: "I want to build",
    action: "Start with Studio COKA",
    detail:
      "Share your site, brief, budget, and goals for a home, interior, hospitality space, institution, or civic project.",
    href: "https://studiocoka.com/services",
    cta: "Start a design project",
  },
  {
    audience: "I want to learn",
    action: "Grow with The Effective Architect",
    detail:
      "Find practical learning on climate-responsive design, professional growth, and building a more grounded architectural practice.",
    href: "https://lnkd.in/emqe3r9U",
    cta: "Explore TEA",
  },
  {
    audience: "I want a product",
    action: "Discover ELEvated",
    detail:
      "Ask about furniture and products shaped by material, context, and the routines of everyday life.",
    href: "mailto:crystallhomes@gmail.com?subject=ELEvated%20product%20enquiry",
    cta: "Ask about ELEvated",
  },
  {
    audience: "I need a speaker",
    action: "Invite Crystal",
    detail:
      "Start a conversation about a keynote, panel, workshop, or media feature on architecture, African cities, design, or entrepreneurship.",
    href: "mailto:crystallhomes@gmail.com?subject=Speaking%20invitation",
    cta: "Send a speaking enquiry",
    secondaryHref:
      "https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
    secondaryCta: "View speaking profile",
  },
  {
    audience: "I want to partner",
    action: "Build opportunity together",
    detail:
      "Explore collaboration with AKO Alliance or Alive and Free across education access, youth development, faith, and community.",
    href: "mailto:crystallhomes@gmail.com?subject=Impact%20partnership",
    cta: "Discuss a partnership",
  },
];

export default function PathwayGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePathway = pathways[activeIndex];

  return (
    <section id="pathways" className="motion-scroll-enter bg-[#203428] py-20 text-[#fffaf2] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8a15d]">
              What to do next
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">
              What brings you here?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/72">
              Choose the reason that brought you to Crystal&apos;s work. We&apos;ll
              point you to the most useful next step.
            </p>

            <nav aria-label="Choose your next step" className="mt-8">
              <div className="grid grid-cols-2 border-l border-t border-white/20 lg:flex lg:flex-col">
                {pathways.map((pathway, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={pathway.audience}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      className={`flex min-h-16 items-center gap-3 border-b border-r border-white/20 px-3 py-3 text-left transition focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#d8a15d] sm:px-4 lg:border-r-0 ${
                        isActive
                          ? "bg-[#d8a15d] text-[#21170e]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="text-xs font-semibold tabular-nums opacity-65">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold leading-5">
                        {pathway.audience}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

            <div aria-live="polite" aria-atomic="true">
              <div
                key={activeIndex}
                className="motion-content-enter flex min-h-85 flex-col justify-between gap-10 bg-[#fffaf2] p-6 text-[#211c17] sm:p-9 lg:min-h-107.5 lg:p-12"
              >
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d5a2b]">
                      {activePathway.audience}
                    </p>
                    <p className="text-sm font-semibold tabular-nums text-[#315140]">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(pathways.length).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                    {activePathway.action}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#65584b]">
                    {activePathway.detail}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href={activePathway.href}
                    target={activePathway.href.startsWith("https://") ? "_blank" : undefined}
                    rel={activePathway.href.startsWith("https://") ? "noreferrer" : undefined}
                    className="inline-flex min-h-12 items-center justify-center bg-[#211c17] px-5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-[#315140] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315140]"
                  >
                    {activePathway.cta}
                  </a>
                  {activePathway.secondaryHref && activePathway.secondaryCta && (
                    <a
                      href={activePathway.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#315140] underline decoration-[#315140]/40 underline-offset-4 transition hover:text-[#8d5a2b]"
                    >
                      {activePathway.secondaryCta}
                    </a>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
