import { Reveal } from "@/components/Reveal";
import { getProjectsContent } from "@/data/content";

export default async function Projects() {
  const { highlights: projectHighlights, spotlight: projectSpotlight } = await getProjectsContent();
  return (
    <div className="space-y-24 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Case Studies</span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
            Programmes delivering measurable outcomes across Africa.
          </h1>
          <p className="text-lg leading-8 text-muted">
            Explore how Digivation blends engineering rigour, digital tooling, and boots-on-the-ground execution to help our partners modernise, scale, and protect critical infrastructure.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Highlights</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Impact stories shaping resilient networks.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projectHighlights.map((programme, index) => (
            <Reveal
              key={programme.title}
              as="article"
              delay={index * 120}
              className="flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {programme.sector}
                </span>
                <h3 className="font-heading text-2xl text-slate-900">{programme.title}</h3>
                <p className="text-sm leading-6 text-muted">{programme.summary}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {programme.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="rounded-[34px] border border-slate-200 bg-primary-gradient p-10 text-white shadow-soft md:p-14"
      >
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Spotlight</span>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">{projectSpotlight.title}</h2>
            <p className="text-base leading-7 text-white/85">{projectSpotlight.body}</p>
          </div>
          <ul className="space-y-3 rounded-[26px] border border-white/30 bg-white/15 p-6 text-sm leading-6 text-white">
            {projectSpotlight.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-white"></span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
