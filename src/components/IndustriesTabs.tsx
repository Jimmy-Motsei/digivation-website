"use client";

import { useState } from "react";

type Industry = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

interface IndustriesTabsProps {
  industries: Industry[];
}

export function IndustriesTabs({ industries }: IndustriesTabsProps) {
  const [active, setActive] = useState(industries[0]?.id ?? "");
  const activeIndustry = industries.find((industry) => industry.id === active) ?? industries[0];

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
      <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
        <div className="flex flex-row gap-3 overflow-x-auto md:flex-col md:gap-4">
          {industries.map((industry) => {
            const isActive = industry.id === activeIndustry?.id;
            return (
              <button
                key={industry.id}
                onClick={() => setActive(industry.id)}
                className={`rounded-2xl border px-4 py-3 text-left transition focus-brand ${isActive ? "border-transparent bg-primary-gradient text-white shadow-soft" : "border-slate-200 bg-white text-muted hover:border-primary hover:text-slate-900"}`}
                type="button"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.2em]">{industry.title}</span>
                <span className="mt-1 block text-sm text-inherit opacity-80">{industry.summary}</span>
              </button>
            );
          })}
        </div>
        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-semibold text-slate-900 md:text-3xl">
            {activeIndustry?.title}
          </h3>
          <ul className="grid gap-3 text-sm text-muted md:grid-cols-2">
            {activeIndustry?.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-xl border border-slate-200/70 bg-surface p-4 text-sm leading-6 text-slate-700"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
