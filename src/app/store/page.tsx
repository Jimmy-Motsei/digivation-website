import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getStoreContent } from "@/data/content";

export const metadata = {
  title: "Store",
  description:
    "Explore curated connectivity bundles, smart devices, and managed services available through the Digivation store.",
};

export default async function Store() {
  const { highlights: storeHighlights, links: storeLinks, plans: storePlans } = await getStoreContent();
  return (
    <div className="space-y-24 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Store</span>
            <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
              Solutions-ready hardware and connectivity, curated for your rollout.
            </h1>
            <p className="text-lg leading-8 text-muted">
              Build your procurement list with enterprise-grade devices, connectivity plans, and managed services. Our specialists ensure every order arrives configured and ready for deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://digivation.global/store"
                className="rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 focus-brand"
              >
                Visit online store
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary focus-brand"
              >
                Talk to procurement
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <Reveal
            as="div"
            delay={160}
            className="rounded-[30px] border border-slate-200 bg-surface p-6 text-sm leading-6 text-muted shadow-soft"
          >
            <h2 className="font-heading text-lg text-slate-900">What we prepare before shipping</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {["Asset tagging & enrolment", "Firmware & policy configuration", "Logistics scheduling & rollout tracking"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Highlights</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Bundles engineered for field-ready deployment.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {storeHighlights.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 120}
              className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-6 text-muted shadow-soft"
            >
              <h3 className="font-heading text-xl text-slate-900">{item.title}</h3>
              <p className="mt-3">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Featured Plans</span>
          <h2 className="font-heading text-3xl font-semibold text-slate-900 md:text-4xl">
            Flexible pricing to suit every team size.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {storePlans.map((plan, index) => (
            <Reveal
              key={plan.name}
              as="article"
              delay={index * 120}
              className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="font-heading text-xl text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-[6px] inline-flex h-2 w-2 flex-none rounded-full bg-primary"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-4 md:grid-cols-3">
          {storeLinks.map((link, index) => (
            <Reveal
              key={link.label}
              as="div"
              delay={index * 120}
              className="rounded-[22px] border border-slate-200 bg-surface p-5 text-sm text-slate-700"
            >
              <Link href={link.href} className="font-heading text-sm font-semibold text-primary hover:underline">
                {link.label}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Need custom procurement support? Email <a href="mailto:store@digivation.co.za" className="text-primary underline">store@digivation.co.za</a> with your requirements.
        </p>
      </Reveal>
    </div>
  );
}
