import Image from "next/image";

const stats = [
  { value: "100k+", label: "sqm designed and coordinated" },
  { value: "95%", label: "diesel reduction on off-grid hospital project" },
  { value: "7", label: "project stages from brief to handover" },
];

const ecosystem = [
  {
    eyebrow: "Architecture / Interiors / Urban design",
    name: "Studio COKA",
    status: "Live studio",
    description:
      "A climate-responsive design-build studio in Enugu working across architecture, interior design, and urban design. Studio COKA takes projects from early brief to delivery, with a focus on comfort, performance, identity, and craft.",
    audience:
      "For private clients, developers, institutions, and teams building homes, hospitality, healthcare, civic, commercial, or mixed-use spaces.",
    href: "https://studiocoka.com/",
    cta: "Visit Studio COKA",
  },
  {
    eyebrow: "Furniture / Product design",
    name: "ELEvated",
    status: "Product brand",
    description:
      "A furniture and product design lane for functional pieces rooted in African context, material intelligence, and everyday use. It extends Crystal's spatial thinking into objects people live with closely.",
    audience:
      "For homeowners, hospitality spaces, developers, and design-conscious buyers looking for warm, useful, well-made pieces.",
    href: "#contact",
    cta: "Enquire about ELEvated",
  },
  {
    eyebrow: "Education / Media / Professional growth",
    name: "The Effective Architect",
    status: "Education platform",
    description:
      "A learning and media platform for architects and built-environment professionals, sharing frameworks on climate-responsive design, career growth, practice-building, and better African cities.",
    audience:
      "For students, young architects, designers, and professionals who want to design with more clarity, context, and responsibility.",
    href: "https://lnkd.in/emqe3r9U",
    cta: "Join the newsletter",
  },
  {
    eyebrow: "Education access / Opportunity",
    name: "AKO Alliance",
    status: "Impact initiative",
    description:
      "An education-focused initiative created to help children and young people access opportunity, return to school, support family stability, and build stronger futures.",
    audience:
      "For partners, donors, volunteers, and collaborators interested in practical education access and youth opportunity.",
    href: "#contact",
    cta: "Partner with AKO",
  },
  {
    eyebrow: "Faith / Youth / Formation",
    name: "Alive and Free",
    status: "Movement",
    description:
      "A Christian youth movement creating spaces for honest conversations, worship, restoration, identity, purpose, healing, and life in Christ.",
    audience:
      "For young people, churches, communities, and partners supporting spiritual growth and purpose discovery.",
    href: "#contact",
    cta: "Connect with the movement",
  },
  {
    eyebrow: "Research / Writing / Speaking",
    name: "Crystal Kizor",
    status: "Personal platform",
    description:
      "The home for Crystal's essays, talks, media, research, authorship, and public voice around climate-responsive design, indigenous modern architecture, African cities, entrepreneurship, and the built environment.",
    audience:
      "For event organizers, media teams, institutions, clients, and collaborators looking for a clear voice on the future of African spaces.",
    href: "https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
    cta: "View speaking profile",
  },
];

const projects = [
  {
    title: "Nature Home 2",
    type: "Private residence / Enugu, Nigeria",
    image: "/Other assets/Nature Home 2/1.png",
    detail:
      "A seven-bedroom home designed around orientation, generous openings, cross ventilation, high ceilings, shading, trees, and daylight. The result is a larger home with lower grid dependence and calmer daily living.",
  },
  {
    title: "Interior Rhythm",
    type: "Residential interior study",
    image: "/Other assets/Nature Home 2/3.jpeg",
    detail:
      "Warm material choices, indoor-outdoor connection, and spatial restraint show how interiors can improve mood, comfort, and the everyday rituals of a home.",
  },
  {
    title: "Kasa Kofo",
    type: "Community centre / Casamance, Senegal",
    image: "/Other assets/Community Centre Project/IMG_2041 2.PNG",
    detail:
      "A cultural and learning centre concept using local materials, natural light, cooling, rainwater thinking, and forms inspired by indigenous Senegalese architecture.",
  },
];

const pathways = [
  {
    audience: "I want to build",
    action: "Start with Studio COKA",
    detail:
      "Share the site, brief, budget, and goals for a home, interior, institution, hospitality space, or civic project.",
    href: "https://studiocoka.com/services",
  },
  {
    audience: "I want to learn",
    action: "Follow The Effective Architect",
    detail:
      "Join the education lane for climate-responsive design frameworks, career insight, and practice-building ideas.",
    href: "https://lnkd.in/emqe3r9U",
  },
  {
    audience: "I need a speaker",
    action: "Invite Crystal",
    detail:
      "Book a talk or conversation on architecture, African cities, climate-responsive design, indigenous materials, or entrepreneurship.",
    href: "https://tedxportharcourt.com/speakers/a01411ad-22eb-4e92-9f94-6867a1f1446b",
  },
  {
    audience: "I want to partner",
    action: "Support impact work",
    detail:
      "Explore collaborations with AKO Alliance or Alive and Free across education, youth formation, faith, and opportunity.",
    href: "#contact",
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
    <main className="min-h-screen bg-[#f6f1e9] text-[#211c17]">
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

      <section className="border-y border-[#211c17]/15 bg-[#fffaf2]">
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

      <section id="about" className="bg-[#f6f1e9] py-20 sm:py-28">
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

      <section id="ecosystem" className="bg-[#fffaf2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
                Ecosystem
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                One personal brand. Six clear destinations.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#65584b] lg:pt-12">
              Each brand has its own audience and purpose. Together, they form
              a practical ecosystem for better spaces, better objects, better
              professional learning, and better opportunities for young people.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#211c17]/14 lg:grid-cols-2">
            {ecosystem.map((item) => (
              <article
                key={item.name}
                className="grid gap-5 border-b border-[#211c17]/14 py-8 lg:grid-cols-[1fr_2.2fr] lg:odd:border-r lg:odd:pr-10 lg:even:pl-10"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d5a2b]">
                    {item.eyebrow}
                  </p>
                  <span className="mt-4 inline-flex border border-[#315140]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#315140]">
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#211c17]">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[#65584b]">
                    {item.description}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-[#4b4035]">
                    {item.audience}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#315140] transition hover:text-[#8d5a2b]"
                  >
                    {item.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#e8dfd1] py-20 sm:py-28">
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
            <p className="max-w-md text-base leading-7 text-[#65584b]">
              The strongest proof of the brand is not a slogan. It is the
              repeated interest in buildings that use climate, material,
              daylight, air, and culture as serious design tools.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d5c9b7]">
                  <Image
                    src={project.image}
                    alt={`${project.title}: ${project.type}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-b border-[#211c17]/18 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8d5a2b]">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#65584b]">
                    {project.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#203428] py-20 text-[#fffaf2] sm:py-28">
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

      <section id="pathways" className="bg-[#fffaf2] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8d5a2b]">
              Where to go next
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Choose the path that matches your intent.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#65584b]">
              Whether you are building, learning, inviting, or partnering, the
              page points you toward the most relevant part of Crystal&apos;s
              ecosystem.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pathways.map((pathway) => (
              <a
                key={pathway.audience}
                href={pathway.href}
                target={pathway.href.startsWith("http") ? "_blank" : undefined}
                rel={pathway.href.startsWith("http") ? "noreferrer" : undefined}
                className="border border-[#211c17]/14 bg-[#f6f1e9] p-6 transition hover:border-[#315140]/50 hover:bg-[#efe5d5]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d5a2b]">
                  {pathway.audience}
                </p>
                <h3 className="mt-5 text-2xl font-semibold">
                  {pathway.action}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#65584b]">
                  {pathway.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f6f1e9] py-20 sm:py-28">
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
