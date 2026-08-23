import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { CaseStudy, Locale } from "@/content/types";
import { cn } from "@/lib/utils";

const cardClass =
  "group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(125,211,192,0.12),0_18px_40px_-24px_rgba(125,211,192,0.35)]";

export function WorkCard({
  study,
  locale,
  className,
}: {
  study: CaseStudy;
  locale: Locale;
  className?: string;
}) {
  const href = study.previewUrl ?? study.liveUrl;
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-bg">
        <Image
          src={study.image}
          alt={study.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-text/90">
          {study.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5">
          {study.niche.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-bg/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
          {study.title[locale]}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted">
          {study.summary[locale]}
        </p>
        {href ? (
          <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            {href.replace(/^https?:\/\//, "")} →
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(cardClass, className)}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/work/${study.slug}`} className={cn(cardClass, className)}>
      {inner}
    </Link>
  );
}
