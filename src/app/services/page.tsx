import { Reveal } from "@/components/Reveal";
import { getServicesContent } from "@/data/content";

export default async function Services() {
  const { programmes: serviceProgrammes, accelerators: serviceAccelerators, engagementModel } = await getServicesContent();
  return (
    <div className="space-y-24 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Services</span>
            <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
              Turnkey programmes engineered for high-performance operations.
            </h1>
            <p className="text-lg leading-8 text-muted">
              Whether you need to light up a new network, elevate operations, or embed intelligence into every asset, Digivation delivers flexible service modules backed by proven playbooks and teams on the ground.
            </p>
          </div>
          <Reveal
            as="div"
            delay={160}
            className="rounded-[28px] border border-slate-200 bg-surface p-6 text-sm leading-6 text-muted shadow-soft"
          >
            <p>
              <span className="font-heading text-primary">What&apos;s inside each programme?</span> Strategic planning, on-site execution, automation, and measurable outcomes. Choose the modules you need today and scale tomorrow without re-engineering the foundation.
            </p>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Programmes</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Built to deliver outcomes end-to-end.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {serviceProgrammes.map((programme, index) => (
            <Reveal
              key={programme.title}
              as="article"
              delay={index * 120}
              className="flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="space-y-4">
                <h3 className="font-heading text-xl text-slate-900">{programme.title}</h3>
                <p className="text-sm leading-6 text-muted">{programme.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {programme.phases.map((phase) => (
                  <li key={phase} className="flex items-start gap-3">
                    <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                    <span>{phase}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Accelerators</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            IP and tooling to speed up delivery.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceAccelerators.map((accelerator, index) => (
            <Reveal
              key={accelerator.name}
              as="article"
              delay={index * 120}
              className="rounded-[26px] border border-slate-200 bg-white/90 p-6 shadow-soft"
            >
              <h3 className="font-heading text-lg text-slate-900">{accelerator.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{accelerator.copy}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Engagement Model</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            How we collaborate with your teams.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {engagementModel.map((stage, index) => (
            <Reveal
              key={stage.step}
              as="article"
              delay={index * 120}
              className="rounded-[24px] border border-slate-200 bg-white p-5 text-sm text-muted shadow-soft"
            >
              <h3 className="font-heading text-lg text-slate-900">{stage.step}</h3>
              <p className="mt-3 leading-6 text-slate-700">{stage.detail}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
