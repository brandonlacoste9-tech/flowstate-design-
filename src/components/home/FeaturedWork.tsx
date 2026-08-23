import { getLocale, getTranslations } from "next-intl/server";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkCard } from "@/components/work/WorkCard";
import { Button } from "@/components/ui/Button";

export async function FeaturedWork() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const studies = getFeaturedCaseStudies();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={t("featuredEyebrow")}
              title={t("featuredTitle")}
              description={t("featuredDescription")}
            />
            <Button href="/work" variant="secondary" className="self-start sm:self-auto">
              {tNav("work")}
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 0.08}>
              <WorkCard study={study} locale={locale} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
