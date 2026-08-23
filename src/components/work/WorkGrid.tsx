import type { CaseStudy, Locale } from "@/content/types";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkCard } from "./WorkCard";

export function WorkGrid({
  studies,
  locale,
}: {
  studies: CaseStudy[];
  locale: Locale;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {studies.map((study, i) => (
        <FadeIn key={study.slug} delay={i * 0.06}>
          <WorkCard study={study} locale={locale} />
        </FadeIn>
      ))}
    </div>
  );
}
