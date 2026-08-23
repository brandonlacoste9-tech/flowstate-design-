import type { Locale, Package } from "@/content/types";
import { cn } from "@/lib/utils";

export function PackageCard({
  pkg,
  locale,
  includesLabel,
}: {
  pkg: Package;
  locale: Locale;
  includesLabel: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[var(--radius)] border bg-bg/40 p-6 transition-colors",
        pkg.highlighted
          ? "border-accent/50 shadow-[0_0_0_1px_rgba(125,211,192,0.12),0_20px_50px_-30px_rgba(125,211,192,0.4)] ring-1 ring-accent/30"
          : "border-border hover:border-border",
      )}
    >
      {pkg.highlighted ? (
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          {locale === "fr" ? "Populaire" : "Popular"}
        </p>
      ) : (
        <div className="mb-3 h-[15px]" aria-hidden />
      )}

      <h3 className="text-xl font-semibold tracking-tight text-text">
        {pkg.name[locale]}
      </h3>
      <p className="mt-2 font-mono text-sm text-accent">
        {pkg.priceFrom[locale]}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {pkg.description[locale]}
      </p>

      <div className="mt-6 border-t border-border/60 pt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {includesLabel}
        </p>
        <ul className="mt-3 space-y-2.5">
          {pkg.features.map((feature) => (
            <li
              key={feature.en}
              className="flex gap-2.5 text-sm leading-relaxed text-text/90"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              <span>{feature[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
