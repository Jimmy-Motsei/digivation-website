// src/app/about/page.tsx
import { Reveal } from "@/components/Reveal";
import { getAboutContent } from "@/data/content";

export const metadata = {
  title: "About - Digivation",
  description: "Who we are and what drives us",
};

export default async function Page() {
  const { leadership: aboutLeadership, milestones: aboutMilestones, principles: aboutPrinciples } = await getAboutContent();
  return (
    <div className="space-y-24">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Story</span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
            The partner designing, operating, and future-proofing Africa&apos;s digital infrastructure.
          </h1>
          <p className="text-lg leading-8 text-muted">
            Digivation orchestrates turnkey programmes for telecommunications and enterprise clients who need mission-critical networks they can count on. With multidisciplinary teams embedded across the value chain, we blend engineering discipline with intelligent tooling to keep infrastructure resilient, efficient, and ready for what&apos;s next.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Milestones</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Two decades of transformation.
          </h2>
          <p className="text-base leading-7 text-muted">
            From field crews to analytics engineers, we continue to evolve alongside the networks we manage.
          </p>
        </div>
        <dl className="grid gap-4">
          {aboutMilestones.map((milestone, index) => (
            <Reveal
              key={milestone.year}
              as="div"
              delay={index * 120}
              className="rounded-[26px] border border-slate-200 bg-white/80 px-6 py-5 shadow-sm"
            >
              <dt className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span>{milestone.year}</span>
                <span className="h-[1px] flex-1 bg-primary/40" aria-hidden="true" />
                <span>{milestone.title}</span>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-muted">{milestone.description}</dd>
            </Reveal>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Operating Principles</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            What guides every engagement.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {aboutPrinciples.map((principle, index) => (
            <Reveal
              key={principle.title}
              as="article"
              delay={index * 120}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="font-heading text-xl text-slate-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Leadership</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Meet the team setting the pace.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted">
            Our leadership team combines strategic oversight with on-the-ground experience, ensuring every programme delivers tangible outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {aboutLeadership.map((leader, index) => (
            <Reveal
              key={leader.name}
              as="article"
              delay={index * 120}
              className="rounded-[26px] border border-slate-200 bg-white p-6 text-sm text-muted shadow-soft"
            >
              <h3 className="font-heading text-xl text-slate-900">{leader.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {leader.role}
              </p>
              <p className="mt-3 leading-6 text-slate-700">{leader.bio}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
