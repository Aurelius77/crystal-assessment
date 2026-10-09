import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analytics & Improvement | Crystal Kizor",
  description:
    "How to measure website performance, improve visitor pathways, and investigate a low enquiry conversion rate.",
};

export default function AnalyticsPage() {
  return (
    <main className="motion-page-enter min-h-screen bg-[#f6f1e9] text-[#211c17]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#211c17]"
        >
          Crystal Kizor
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/ecosystem"
            className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:inline sm:text-sm"
          >
            Ecosystem
          </Link>
          <Link
            href="/work"
            className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:inline sm:text-sm"
          >
            Work
          </Link>
          <Link
            href="/tea-strategic-assistant"
            className="hidden text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:inline sm:text-sm"
          >
            TEA Assistant
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-[#315140] transition hover:text-[#8d5a2b] sm:text-sm"
          >
            Home
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <article className="motion-scroll-enter border border-[#211c17]/15 bg-[#fffaf2] p-6 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d5a2b]">
            Part 03 / Analytics & improvement
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Measure useful movement.
          </h1>
          <p className="mt-4 text-base leading-7 text-[#65584b]">
            Measure qualified enquiries and completed visitor pathways, not
            raw traffic alone.
          </p>

          <section className="mt-8 border-t border-[#211c17]/15 pt-6">
            <h2 className="text-lg font-semibold">What to track</h2>
            <p className="mt-2 text-sm leading-6 text-[#65584b]">
              Configure these events in GA4 through Google Tag Manager, or send
              equivalent events through the PostHog web SDK:
              <code className="mx-1 break-words">ecosystem_click</code>,
              <code className="mx-1 break-words">work_gallery_open</code>, and
              <code className="mx-1 break-words">enquiry_click</code>. Include the source
              page, visitor intent, and destination. Record
              <code className="mx-1 break-words">enquiry_submit</code> only after a form
              succeeds. Email and partner-site clicks signal intent, not a
              confirmed enquiry; log actual leads and qualification in a simple
              CRM.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Tools and routine</h2>
            <p className="mt-2 text-sm leading-6 text-[#65584b]">
              Use GA4 or PostHog for funnels by source, device, landing page, and
              intent. PostHog also shows paths and cohorts, and can test changes
              with feature flags or experiments. Sentry tracks JavaScript errors
              and slow pages, tied to releases, to help explain failed journeys.
              Use Search Console for search demand and either Clarity or
              consented, masked PostHog replays—not both by default. Verify
              events in GA4 DebugView or PostHog Live Events.
            </p>
          </section>

          <section className="mt-8 border-l-2 border-[#d8a15d] bg-[#f6f1e9] p-5 sm:p-6">
            <h2 className="text-lg font-semibold">5,000 visitors, 5 enquiries</h2>
            <p className="mt-2 text-sm font-semibold text-[#315140]">
              5 ÷ 5,000 = a 0.1% enquiry rate.
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-[#65584b]">
              <li>
                Verify the visitor count, date range, bot/internal traffic, and
                event firing in DebugView.
              </li>
              <li>
                If few visitors click a CTA, inspect audience-message fit and
                mobile visibility. If many click but few become leads, test the
                destination, form load, and form friction.
              </li>
              <li>
                Review consented Clarity sessions, reconcile real email leads,
                and speak with a few visitors. Fix one observed issue, then
                compare qualified enquiries over a similar month.
              </li>
            </ol>
          </section>

          <footer className="mt-8 border-t border-[#211c17]/15 pt-5">
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
