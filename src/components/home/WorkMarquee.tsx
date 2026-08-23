import { getLocale } from "next-intl/server";
import { caseStudies } from "@/content/case-studies";
import type { Locale } from "@/content/types";

export async function WorkMarquee() {
  const locale = (await getLocale()) as Locale;
  const names = caseStudies.map((study) => study.name[locale]);
  const loop = [...names, ...names];

  return (
    <div
      className="overflow-hidden border-y border-border/70 bg-surface/25 py-4"
      aria-hidden
    >
      <div className="marquee-track flex items-center gap-0">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-8 px-4 font-display text-2xl text-text/80 sm:text-3xl"
          >
            {name}
            <span className="text-accent/70" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
