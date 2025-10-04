import Link from "next/link";
import { IndustriesTabs } from "@/components/IndustriesTabs";
import { Reveal } from "@/components/Reveal";
import { getHomeContent } from "@/data/content";

export default async function Page() {
  const { stats: homeStats, capabilityPillars: homeCapabilityPillars, industries: homeIndustries, caseStudies: homeCaseStudies, partners: homePartners } = await getHomeContent();
  return (
    <main className="mx-auto max-w-6xl space-y-24 px-4 py-16">
      <Reveal
        as="section"
        className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-white via-white to-[#e7f4f2] p-10 shadow-soft md:p-16"
      >
        <div className="absolute inset-y-8 -left-24 hidden w-64 rounded-full bg-primary-tint blur-3xl md:block" aria-hidden="true" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary-tint-light blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-primary bg-primary-tint px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Digital Infrastructure &bull; Africa
            </span>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Engineering the next generation of intelligent telecom experiences.
            </h1>
            <p className="max-w-xl text-lg leading-7 text-muted">
              Digivation partners with operators and enterprises to fuse resilient network operations, advanced analytics, and connected field teams. We design, deploy, and manage mission-critical infrastructure that keeps Africa online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 focus-brand"
              >
                Discuss your roadmap
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary focus-brand"
              >
                View our work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {homeStats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  as="div"
                  delay={index * 80}
                  className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-muted opacity-60">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-heading text-3xl text-slate-900">{stat.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal
            as="div"
            delay={240}
            className="h-full rounded-[32px] border border-white/60 bg-white/60 p-6 shadow-soft backdrop-blur md:flex md:flex-col md:justify-between"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-slate-900">Command Deck Preview</h2>
              <p className="text-sm leading-6 text-muted">
                A unified telemetry layer maps every tower, sensor, and crew in real time. Dispatch, incidents, and performance analytics live in one intuitive workspace.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {["Network health", "Energy efficiency", "Field operations", "Customer experience"].map((topic, index) => (
                <Reveal
                  key={topic}
                  as="div"
                  delay={360 + index * 60}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span>{topic}</span>
                  <span className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Live</span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Capability Stack</span>
            <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
              Build once. Operate everywhere.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted">
              Modular service blocks combine turnkey field execution with software-defined insight. Mix and match to accelerate delivery while keeping governance and compliance intact.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {homeCapabilityPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="article"
              delay={index * 100}
              className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-2xl text-slate-900">{pillar.title}</h3>
                <p className="text-sm leading-6 text-muted">{pillar.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary-tint text-xs font-semibold text-primary">
                      &bull;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
              >
                Explore services <span aria-hidden>→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Industries</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Expertise tailored to complex environments.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted">
            We thrive where high availability, field logistics, and compliance intersect. Choose an industry to see how we partner beyond the pilot stage.
          </p>
        </div>
        <Reveal as="div" delay={120}>
          <IndustriesTabs industries={homeIndustries} />
        </Reveal>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Results</span>
            <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
              Proven programmes with measurable impact.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted transition hover:border-primary hover:text-primary focus-brand"
          >
            View more case studies →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeCaseStudies.map((study, index) => (
            <Reveal
              key={study.title}
              as="article"
              delay={index * 120}
              className="flex h-full flex-col justify-between rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case study</span>
                <h3 className="font-heading text-xl text-slate-900">{study.title}</h3>
                <p className="text-sm leading-6 text-muted">{study.excerpt}</p>
              </div>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
              >
                See the transformation <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Trusted By</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Partnering with innovators across the continent.
          </h2>
        </div>
        <Reveal
          as="div"
          delay={120}
          className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-soft"
        >
          {homePartners.map((partner) => (
            <span
              key={partner}
              className="text-base font-semibold uppercase tracking-[0.35em] text-muted"
            >
              {partner}
            </span>
          ))}
        </Reveal>
      </Reveal>

      <Reveal
        as="section"
        className="overflow-hidden rounded-[32px] border border-slate-200 bg-primary-gradient p-10 text-white shadow-soft md:p-16"
      >
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Ready to modernise your network and transform operations?
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/85">
              We co-create roadmaps with your teams, from site audits and rollout to automated support and analytics. Let&apos;s design a resilient future together.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5 focus-brand"
            >
              Book a strategy session
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              Meet the team <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
