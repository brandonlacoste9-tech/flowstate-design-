import { WorkCard } from "./WorkCard";
import type { CaseStudy, Locale } from "@/content/types";

export function WorkStage({
  studies,
  locale,
  caption,
  priority = false,
}: {
  studies: CaseStudy[];
  locale: Locale;
  caption?: string;
  priority?: boolean;
}) {
  const [lead, sideA, sideB] = studies;
  if (!lead || !sideA || !sideB) return null;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-rows-2 sm:min-h-[480px] lg:min-h-[540px]">
        <WorkCard
          study={lead}
          locale={locale}
          size="lg"
          priority={priority}
          className="col-span-2 min-h-[220px] sm:col-span-1 sm:row-span-2 sm:min-h-full"
        />
        <WorkCard
          study={sideA}
          locale={locale}
          priority={priority}
          className="min-h-[160px] sm:min-h-full"
        />
        <WorkCard
          study={sideB}
          locale={locale}
          priority={priority}
          className="min-h-[160px] sm:min-h-full"
        />
      </div>
      {caption ? (
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
