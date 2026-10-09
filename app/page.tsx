import Image from "next/image";
import Link from "next/link";
import PathwayGuide from "./pathway-guide";
import { workProjects } from "./work/work-data";

const stats = [
  { value: "100k+", label: "sqm designed and coordinated" },
  { value: "95%", label: "diesel reduction on off-grid hospital project" },
  { value: "7", label: "project stages from brief to handover" },
];

const studio = {
  eyebrow: "Architecture / Interiors / Urban design",
  name: "Studio COKA",
  description:
    "The design practice at the center of the ecosystem. From homes and interiors to civic and institutional work, Studio COKA turns Crystal's climate-responsive, context-led point of view into places people can use and feel.",
  audience:
    "For clients, developers, and institutions ready to shape a place around its people, climate, and culture.",
  href: "https://studiocoka.com/",
  cta: "Explore Studio COKA",
};

const ecosystemLanes = [
  {
    title: "Objects",
    connection: "Bring thoughtful design into everyday reach.",
    initiatives: [
      {
        name: "ELEvated",
        description:
          "Furniture and products that carry spatial thinking into the objects people live with: useful, material-aware, and rooted in African context.",
        audience: "For homeowners, hospitality spaces, and design-conscious buyers.",
        href: "mailto:crystallhomes@gmail.com?subject=ELEvated%20product%20enquiry",
        cta: "Ask about ELEvated",
      },
    ],
  },
  {
    title: "Learning & ideas",
    connection: "Share knowledge and make better practice possible.",
    initiatives: [
      {
        name: "The Effective Architect",
        description:
          "A learning and media platform sharing frameworks for climate-responsive design, career growth, and building a more grounded architectural practice.",
        audience: "For students, architects, designers, and built-environment professionals.",
        href: "https://lnkd.in/emqe3r9U",
        cta: "Learn with TEA",
      },
      {
        name: "Research, writing & speaking",
        description:
          "Crystal's public work explores African architecture, indigenous modernity, local materials, future cities, and design leadership.",
        audience: "For event organizers, media, institutions, and research collaborators.",
        href: "https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
        cta: "Explore speaking",
      },
    ],
  },
  {
    title: "People & possibility",
    connection: "Put opportunity, belonging, and growth at the center.",
    initiatives: [
      {
        name: "AKO Alliance",
        description:
          "An education-focused initiative helping children and young people access opportunity, return to school, and build stronger futures.",
        audience: "For education partners, donors, and volunteers.",
        href: "mailto:crystallhomes@gmail.com?subject=AKO%20Alliance%20partnership",
        cta: "Partner with AKO",
      },
      {
        name: "Alive and Free",
        description:
          "A Christian youth movement creating space for worship, honest conversation, restoration, identity, and purpose.",
        audience: "For young people, churches, and community partners.",
        href: "mailto:crystallhomes@gmail.com?subject=Alive%20and%20Free%20enquiry",
        cta: "Connect with the movement",
      },
    ],
  },
];

const principles = [
  "Climate-responsive design before mechanical dependency",
  "Local materials treated as knowledge, not compromise",
  "End-user wellbeing as a performance metric",
  "Research-led decisions from concept to handover",
];

export default function Home() {
  return (
    <main className="motion-page-enter min-h-screen bg-[#f6f1e9] text-[#211c17]">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#1d1a16] text-white">
        <Image
          src="/Crystal_s pictures/Earthy Editorial Portrait by African Architecture.png"
          alt="Crystal Kizor seated in a warm architectural studio"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(22,18,13,0.94)_0%,rgba(22,18,13,0.72)_45%,rgba(22,18,13,0.22)_100%)]" />

        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.28em]"
          >
            Crystal Kizor
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/78 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#ecosystem" className="transition hover:text-white">
              Ecosystem
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <Link
              href="/analytics"
              className="transition hover:text-white"
            >
              Analytics
            </Link>
            <Link
              href="/tea-strategic-assistant"
              className="border border-white/35 px-3 py-2 text-white transition hover:border-[#d8a15d] hover:text-[#f1bd7d]"
            >
              TEA Assistant
            </Link>
          </div>
          <div className="flex gap-2 md:hidden">
            <Link
              href="/analytics"
              className="inline-flex min-h-10 items-center border border-white/35 px-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#d8a15d] hover:text-[#f1bd7d]"
            >
              Analytics
            </Link>
            <Link
              href="/tea-strategic-assistant"
              className="inline-flex min-h-10 items-center border border-white/35 px-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#d8a15d] hover:text-[#f1bd7d]"
            >
              TEA Assistant
            </Link>
          </div>
        </nav>

        <div
          id="top"
          className="mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl items-end px-5 pb-8 pt-20 sm:px-8 lg:grid-cols-[1fr_0.72fr] lg:px-10 lg:pb-10"
        >
          <div className="max-w-3xl pb-10">
            <p className="mb-6 max-w-fit border border-white/30 px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/82">
              Climate-responsive architecture / Design / Education / Impact
            </p>
            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-normal text-white sm:text-7xl lg:text-8xl">
              Crystal Kizor
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/84 sm:text-2xl sm:leading-9">
              Architect, interior designer, entrepreneur, speaker, researcher,
              and creator building spaces, products, platforms, and movements
              for more intentional African futures.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#ecosystem"
                className="inline-flex min-h-12 items-center justify-center bg-[#d8a15d] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#21170e] transition hover:bg-[#ebb978]"
              >
                Explore the ecosystem
              </a>
              <a
                href="https://studiocoka.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white/10"
              >
                Visit Studio COKA
              </a>
            </div>
          </div>

          <div className="mb-6 hidden max-w-sm justify-self-end border-l border-white/25 pl-6 text-sm leading-6 text-white/74 lg:block">
            Her work moves between built space, product thinking, education,
            social impact, faith, and public ideas, but the through-line is
            consistent: design should improve how people live.
          </div>
        </div>
      </section>

      <section className="motion-scroll-enter border-y border-[#211c17]/15 bg-[#fffaf2]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:px-8 md:grid-cols-3 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-[#211c17]/15 pl-5">
              <p className="text-3xl font-semibold text-[#315140]">
                {stat.value}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#65584b]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="motion-scroll-enter bg-[#f6f1e9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
              About Crystal
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#211c17] sm:text-5xl">
              Designing for climate, culture, comfort, and consequence.
            </h2>
            <div className="relative mt-9 aspect-[5/4] overflow-hidden bg-[#d5c9b7]">
              <Image
                src="/Crystal_s pictures/Architectural Designer in Her Studio.png"
                alt="Crystal Kizor working in an architectural studio"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid content-start gap-8 text-lg leading-8 text-[#55493d]">
            <p>
              Crystal Kizor is the Design Director of Studio COKA, where she
              leads creative direction across architecture and interior design.
              Her work is grounded in climate-responsive thinking, contextual
              design, indigenous materials, and the everyday wellbeing of the
              people who use a space.
            </p>
            <p>
              Her public work extends beyond the studio: she speaks and writes
              about African architecture, passive cooling, local materials,
              future cities, design leadership, and the responsibility of the
              built environment.
            </p>
            <div className="grid gap-3 border-t border-[#211c17]/15 pt-7">
              {principles.map((principle) => (
                <p
                  key={principle}
                  className="border-b border-[#211c17]/12 pb-3 text-base font-medium text-[#211c17]"
                >
                  {principle}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="motion-scroll-enter bg-[#fffaf2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
                Ecosystem
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                One point of view, expressed in different ways.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#65584b] lg:pt-12">
              Crystal&apos;s work starts with how people live and what their
              context needs. The studio puts that thinking into places; the
              connected initiatives extend it through objects, shared knowledge,
              and investment in people.
            </p>
          </div>

          <div className="mt-14 border-t border-[#211c17]/14">
            <Link
              href="/ecosystem"
              className="motion-pathway-enter group grid overflow-hidden bg-[#203428] text-[#fffaf2] transition-colors hover:bg-[#294333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315140] md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#d5c9b7] md:aspect-auto md:min-h-105">
                <Image
                  src="/Other assets/Nature Home 2/1.png"
                  alt="A climate-responsive home opening onto a shaded garden"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 bg-[#211c17]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  The design practice
                </span>
              </div>
              <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8a15d]">
                  Architecture / Interiors / Urban design
                </p>
                <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  {studio.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/78">
                  {studio.description}
                </p>
                <span className="motion-pathway-cue mt-8 inline-flex w-fit items-center border-b border-[#d8a15d] pb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#f1bd7d]">
                  Open the 6-initiative hub <span className="motion-pathway-arrow ml-3" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>

            <div className="grid md:grid-cols-3">
              {ecosystemLanes.map((lane) => (
                <section
                  key={lane.title}
                  className="border-b border-[#211c17]/14 py-7 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <h3 className="text-xl font-semibold text-[#211c17]">
                    {lane.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#65584b]">
                    {lane.connection}
                  </p>
                  <div className="mt-5">
                    {lane.initiatives.map((initiative) => (
                      <article
                        key={initiative.name}
                        className="motion-card-enter border-t border-[#211c17]/14 py-5 last:pb-0"
                      >
                        <h4 className="text-lg font-semibold text-[#211c17]">
                          {initiative.name}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-[#65584b]">
                          {initiative.description}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-[#4b4035]">
                          {initiative.audience}
                        </p>
                        <a
                          href={initiative.href}
                          target={initiative.href.startsWith("http") ? "_blank" : undefined}
                          rel={initiative.href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-[#315140] transition hover:text-[#8d5a2b]"
                        >
                          {initiative.cta}
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="motion-scroll-enter bg-[#e8dfd1] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
                Selected work
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                Built and imagined spaces with measurable intent.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-7 text-[#65584b]">
                The strongest proof of the brand is not a slogan. It is the
                repeated interest in buildings that use climate, material,
                daylight, air, and culture as serious design tools.
              </p>
              <Link
                href="/work"
                className="motion-pathway-enter motion-pathway-cue mt-5 inline-flex min-h-12 items-center gap-3 border border-[#315140]/25 bg-[#fffaf2]/40 px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#315140] transition hover:border-[#315140]/60 hover:bg-[#fffaf2] hover:text-[#8d5a2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315140]"
              >
                Open project slideshow <span className="motion-pathway-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {workProjects.map((project) => (
              <article key={project.title} className="motion-card-enter motion-card-surface group">
                <div className="relative aspect-4/5 overflow-hidden bg-[#d5c9b7]">
                  <Image
                    src={project.images[0].src}
                    alt={`${project.title}: ${project.images[0].alt}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-b border-[#211c17]/18 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8d5a2b]">
                    {project.type} / {project.location}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#65584b]">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-scroll-enter bg-[#203428] py-20 text-[#fffaf2] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.68fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d8a15d]">
              Speaking and ideas
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              A public voice for architecture that belongs to its place.
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-lg leading-8 text-white/78">
              Crystal&apos;s talks and writing challenge the habit of copying
              foreign templates into African contexts. Her point of view is
              direct: buildings should respond to heat, light, movement,
              material memory, community, and the people who will live with the
              consequences.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/18 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d8a15d]">
                  Topics
                </p>
                <p className="mt-4 text-sm leading-7 text-white/76">
                  Climate-responsive design, African cities, indigenous modern
                  architecture, local materials, passive cooling, intentional
                  interiors, entrepreneurship, and design leadership.
                </p>
              </div>
              <div className="border border-white/18 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d8a15d]">
                  Formats
                </p>
                <p className="mt-4 text-sm leading-7 text-white/76">
                  Keynotes, panels, workshops, media conversations, design
                  critiques, education sessions, community gatherings, and
                  collaborative research programmes.
                </p>
              </div>
            </div>
            <a
              href="https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-fit items-center justify-center bg-[#d8a15d] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#21170e] transition hover:bg-[#ebb978]"
            >
              View speaking profile
            </a>
          </div>
        </div>
      </section>

      <PathwayGuide />

      <section id="contact" className="motion-scroll-enter bg-[#f6f1e9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.74fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Start with the work you want to make real.
            </h2>
          </div>
          <div className="self-end">
            <p className="text-lg leading-8 text-[#65584b]">
              For studio projects, begin with Studio COKA. For speaking,
              education, impact partnerships, media, or brand collaborations,
              reach out with the audience, timeline, and desired outcome.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://studiocoka.com/services"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#211c17] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#315140]"
              >
                Start a project
              </a>
              <a
                href="mailto:crystallhomes@gmail.com"
                className="inline-flex min-h-12 items-center justify-center border border-[#211c17]/25 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#211c17] transition hover:border-[#315140] hover:text-[#315140]"
              >
                Send an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
