import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { CaseStudy, Locale } from "@/content/types";
import { getWorkHref, getWorkHost } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function WorkCard({
  study,
  locale,
  className,
  size = "md",
  priority = false,
}: {
  study: CaseStudy;
  locale: Locale;
  className?: string;
  size?: "md" | "lg";
  priority?: boolean;
}) {
  const href = getWorkHref(study);
  const host = getWorkHost(study);
  const name = study.name[locale];
  const large = size === "lg";

  const cardClass = cn(
    "group relative block h-full min-h-[240px] overflow-hidden bg-surface",
    large && "min-h-[320px] sm:min-h-[420px]",
    className,
  );

  const inner = (
    <>
      <Image
        src={study.image}
        alt={name}
        fill
        priority={priority}
        unoptimized
        sizes={
          large
            ? "(max-width: 1024px) 100vw, 55vw"
            : "(max-width: 768px) 100vw, 50vw"
        }
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            {study.year}
            {study.niche[0] ? ` · ${study.niche[0]}` : ""}
          </p>
          <h3
            className={cn(
              "mt-1 font-display leading-tight text-text",
              large ? "text-3xl sm:text-4xl lg:text-[2.75rem]" : "text-xl sm:text-2xl",
            )}
          >
            {name}
          </h3>
          {host ? (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text/75">
              {host} →
            </p>
          ) : null}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/work/${study.slug}`} className={cardClass}>
      {inner}
    </Link>
  );
}
