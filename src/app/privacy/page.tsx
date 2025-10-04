import { Reveal } from "@/components/Reveal";
import { getPoliciesContent } from "@/data/content";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Understand how Digivation collects, uses, and safeguards personal information across our digital platforms and services.",
};

export default async function PrivacyPolicy() {
  const { privacy } = await getPoliciesContent();
  const { pillars: privacyPillars, rights: privacyRights, processors: privacyProcessors } = privacy;
  return (
    <div className="space-y-20 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Privacy</span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
            Protecting your data is foundational to every engagement.
          </h1>
          <p className="text-lg leading-8 text-muted">
            This overview explains the personal information we collect, how it is used, and the safeguards we employ. For detailed clauses, please refer to your master service agreement.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Overview</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Privacy pillars we uphold.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {privacyPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="article"
              delay={index * 120}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-6 text-muted shadow-soft"
            >
              <h3 className="font-heading text-lg text-slate-900">{pillar.title}</h3>
              <p className="mt-3">{pillar.copy}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Your rights</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Empowering you with transparency and control.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {privacyRights.map((right, index) => (
            <Reveal
              key={right}
              as="div"
              delay={index * 80}
              className="rounded-[24px] border border-slate-200 bg-surface p-5 text-sm leading-6 text-slate-700"
            >
              {right}
            </Reveal>
          ))}
        </div>
        <p className="text-xs text-muted">
          To exercise these rights, email <a href="mailto:privacy@digivation.co.za" className="text-primary underline">privacy@digivation.co.za</a>. We aim to respond to all verified requests within five working days.
        </p>
      </Reveal>

      <Reveal as="section" className="space-y-6 rounded-[34px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Trusted partners</span>
          <h2 className="font-heading text-2xl font-semibold text-slate-900">
            Sub-processors supporting our services.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {privacyProcessors.map((processor, index) => (
            <Reveal
              key={processor.category}
              as="div"
              delay={index * 120}
              className="rounded-[22px] border border-slate-200 bg-surface p-4 text-sm text-muted"
            >
              <p className="font-heading text-xs uppercase tracking-[0.25em] text-primary">
                {processor.category}
              </p>
              <p className="mt-2 leading-6 text-slate-700">{processor.details}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-xs text-muted">
          We review sub-processors annually and update this list for material changes.
        </p>
      </Reveal>
    </div>
  );
}
