import { Reveal } from "@/components/Reveal";
import { getContactContent } from "@/data/content";

export default async function Contact() {
  const { contacts: contactDetails, engagementFocus } = await getContactContent();
  return (
    <div className="space-y-20 py-12">
      <Reveal as="section" className="rounded-[36px] border border-slate-200 bg-white p-10 shadow-soft md:p-14">
        <div className="max-w-2xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
            Let&apos;s design the next phase of your network.
          </h1>
          <p className="text-lg leading-8 text-muted">
            We&apos;re ready to unpack your brief, share best practices, and align on a roadmap that keeps your operations resilient and ready for growth.
          </p>
        </div>
      </Reveal>

      <section className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal as="div" className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="font-heading text-2xl font-semibold text-slate-900">Connect with our specialists</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Tell us about your network footprint, timelines, and ambitions. We&apos;ll assemble the right experts to respond within one business day.
          </p>
          <dl className="mt-8 space-y-5 text-sm text-slate-700">
            {contactDetails.map((contact) => (
              <div key={contact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {contact.label}
                </dt>
                <dd className="mt-2 leading-6">{contact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 rounded-[24px] border border-primary/40 bg-primary-tint p-6 text-sm text-slate-800">
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-primary">
              WhatsApp Support
            </p>
            <p className="mt-2 leading-6">Message +27 82 000 0000 for urgent escalations or after-hours support coordination.</p>
          </div>
        </Reveal>

        <Reveal as="div" delay={120} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="font-heading text-2xl font-semibold text-slate-900">Request a strategy session</h2>
          <form className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-900 shadow-inner focus-brand"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-900 shadow-inner focus-brand"
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-900 shadow-inner focus-brand"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-900 shadow-inner focus-brand"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.2em] text-muted"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-900 shadow-inner focus-brand"
                required
              ></textarea>
            </div>
            <fieldset className="rounded-2xl border border-slate-200 p-4">
              <legend className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Engagement focus
              </legend>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {engagementFocus.map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-slate-700">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus-brand" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 focus-brand"
            >
              Send request
            </button>
            <p className="text-xs text-muted">
              We respect your privacy. Your submission is encrypted and reviewed only by the engagement team.
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
