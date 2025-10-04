import { Reveal } from "@/components/Reveal";
import { getPoliciesContent } from "@/data/content";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review the terms that govern your use of Digivation services, platforms, and intellectual property.",
};

export default async function TermsOfService() {
  const { terms } = await getPoliciesContent();
  const { sections: termsSections, commitments: termsCommitments, boilerplate: termsBoilerplate } = terms;
  return (
    <div className="space-y-20 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Terms</span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
            The ground rules for working with Digivation.
          </h1>
          <p className="text-lg leading-8 text-muted">
            These general terms work alongside project-specific statements of work. They outline responsibilities, rights, and frameworks that keep every engagement transparent and protected.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Overview</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Responsibilities at a glance.
          </h2>
          <p className="text-sm leading-6 text-muted">
            Tailored contracts may include additional clauses that supersede or complement this outline.
          </p>
        </div>
        <div className="grid gap-4">
          {termsSections.map((section, index) => (
            <Reveal
              key={section.heading}
              as="article"
              delay={index * 100}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-6 text-muted shadow-soft"
            >
              <h3 className="font-heading text-lg text-slate-900">{section.heading}</h3>
              <p className="mt-3">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="grid gap-6 md:grid-cols-2">
        {termsCommitments.map((commitment, index) => (
          <Reveal
            key={commitment.title}
            as="article"
            delay={index * 120}
            className="rounded-[28px] border border-slate-200 bg-surface p-6 text-sm leading-6 text-slate-700 shadow-soft"
          >
            <h3 className="font-heading text-lg text-slate-900">{commitment.title}</h3>
            <ul className="mt-4 space-y-2">
              {commitment.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Reveal>

      <Reveal as="section" className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 md:grid-cols-3">
          {termsBoilerplate.map((item, index) => (
            <Reveal
              key={item.heading}
              as="article"
              delay={index * 120}
              className="rounded-[24px] border border-slate-200/70 bg-surface p-5 text-sm leading-6 text-slate-700"
            >
              <h3 className="font-heading text-lg text-slate-900">{item.heading}</h3>
              <p className="mt-2">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">
          Questions? Email <a href="mailto:legal@digivation.co.za" className="text-primary underline">legal@digivation.co.za</a>. Specific contract wording prevails where inconsistencies exist.
        </p>
      </Reveal>
    </div>
  );
}
