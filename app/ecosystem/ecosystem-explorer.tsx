"use client";

import Image from "next/image";
import { useState } from "react";

const initiatives = [
  {
    name: "Studio COKA",
    shortName: "Studio COKA",
    category: "Architecture / Interiors / Urban design",
    headline: "Places shaped by climate, culture, and daily life.",
    description:
      "The design practice at the center of the ecosystem. Studio COKA brings architecture, interiors, and urban design together to create places grounded in their context and made for the people who use them.",
    audience:
      "For clients, developers, and institutions shaping homes, hospitality, healthcare, civic, and commercial spaces.",
    image: "/Other assets/Nature Home 2/1.png",
    imageAlt: "A climate-responsive home opening onto a shaded garden",
    href: "https://studiocoka.com/services",
    cta: "Start a design project",
  },
  {
    name: "ELEvated",
    shortName: "ELEvated",
    category: "Furniture / Product design",
    headline: "Thoughtful design, brought into everyday life.",
    description:
      "A product-design lane extending spatial thinking into the furniture and objects people live with: useful, material-aware, and rooted in African context.",
    audience:
      "For homeowners, hospitality spaces, developers, and design-conscious buyers.",
    image: "/Other assets/Nature Home 2/2.jpeg",
    imageAlt: "A warm dining space with wooden furniture and a garden view",
    href: "mailto:crystallhomes@gmail.com?subject=ELEvated%20product%20enquiry",
    cta: "Ask about ELEvated",
  },
  {
    name: "The Effective Architect",
    shortName: "TEA",
    category: "Education / Media / Professional growth",
    headline: "Helping architects grow into more thoughtful practice.",
    description:
      "A learning and media platform sharing practical frameworks for climate-responsive design, career growth, practice-building, and better African cities.",
    audience:
      "For students, young architects, designers, and built-environment professionals.",
    image: "/Crystal_s pictures/Architectural Studio Portrait.png",
    imageAlt: "An architect working among drawings and material studies",
    href: "https://lnkd.in/emqe3r9U",
    cta: "Learn with TEA",
  },
  {
    name: "Research, writing & speaking",
    shortName: "Public ideas",
    category: "Research / Writing / Speaking",
    headline: "A public voice for architecture that belongs to its place.",
    description:
      "Crystal's talks, writing, and research explore African architecture, indigenous modernity, local materials, future cities, and design leadership.",
    audience:
      "For event organizers, media teams, institutions, and research collaborators.",
    image: "/Crystal_s pictures/Cozy Architecture Podcast Workspace.png",
    imageAlt: "Crystal Kizor at a microphone in a recording studio",
    href: "https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
    cta: "Explore speaking",
  },
  {
    name: "AKO Alliance",
    shortName: "AKO Alliance",
    category: "Education access / Opportunity",
    headline: "Making room for young people to thrive.",
    description:
      "An education-focused initiative helping children and young people access opportunity, return to school, and build stronger futures.",
    audience:
      "For education partners, donors, volunteers, and collaborators.",
    image: "/Other assets/Community Centre Project/IMG_2041 2.PNG",
    imageAlt: "People gathered inside a community learning space",
    href: "mailto:crystallhomes@gmail.com?subject=AKO%20Alliance%20partnership",
    cta: "Partner with AKO",
  },
  {
    name: "Alive and Free",
    shortName: "Alive and Free",
    category: "Faith / Youth / Formation",
    headline: "Creating space for identity, healing, and purpose.",
    description:
      "A Christian youth movement creating room for worship, honest conversation, restoration, identity, and life in Christ.",
    audience:
      "For young people, churches, communities, and partners supporting spiritual growth.",
    image: "/Crystal_s pictures/Earthy Editorial Portrait by African Architecture.png",
    imageAlt: "Crystal Kizor in a warm architectural studio portrait",
    href: "mailto:crystallhomes@gmail.com?subject=Alive%20and%20Free%20enquiry",
    cta: "Connect with the movement",
  },
];

export default function EcosystemExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInitiative = initiatives[activeIndex];

  return (
    <div>
      <section
        aria-live="polite"
        aria-atomic="true"
        className="grid overflow-hidden bg-[#203428] text-[#fffaf2] lg:grid-cols-[1fr_0.92fr]"
      >
        <div className="relative aspect-[4/3] min-h-72 bg-[#d5c9b7] lg:order-2 lg:aspect-auto lg:min-h-[560px]">
          <Image
            key={activeInitiative.image}
            src={activeInitiative.image}
            alt={activeInitiative.imageAlt}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover motion-image-enter"
          />
          <span className="absolute bottom-4 right-4 bg-[#211c17]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {String(activeIndex + 1).padStart(2, "0")} / {String(initiatives.length).padStart(2, "0")}
          </span>
        </div>

        <div
          key={activeIndex}
          className="motion-content-enter flex flex-col justify-between gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8a15d]">
              {activeInitiative.category}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              {activeInitiative.name}
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-8 text-white/90">
              {activeInitiative.headline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
              {activeInitiative.description}
            </p>
            <p className="mt-5 max-w-xl border-l border-[#d8a15d]/60 pl-4 text-sm leading-6 text-white/72">
              {activeInitiative.audience}
            </p>
          </div>

          <a
            href={activeInitiative.href}
            target={activeInitiative.href.startsWith("https://") ? "_blank" : undefined}
            rel={activeInitiative.href.startsWith("https://") ? "noreferrer" : undefined}
            className="inline-flex min-h-12 w-fit items-center justify-center bg-[#d8a15d] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#21170e] transition hover:bg-[#ebb978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {activeInitiative.cta}
          </a>
        </div>
      </section>

      <nav aria-label="Choose an initiative" className="mt-5">
        <div className="grid grid-cols-2 border-l border-t border-[#211c17]/15 sm:grid-cols-3 lg:grid-cols-6">
          {initiatives.map((initiative, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={initiative.name}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-16 items-center gap-3 border-b border-r border-[#211c17]/15 px-3 py-3 text-left transition focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#315140] sm:px-4 ${
                  isActive
                    ? "bg-[#d8a15d] text-[#21170e]"
                    : "bg-[#fffaf2] text-[#4b4035] hover:bg-[#efe5d5]"
                }`}
              >
                <span className="text-xs font-semibold tabular-nums opacity-65">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold leading-4 sm:text-sm">
                  {initiative.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
