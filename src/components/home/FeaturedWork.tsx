import { getLocale, getTranslations } from "next-intl/server";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkStage } from "@/components/work/WorkStage";
import { Button } from "@/components/ui/Button";

export async function FeaturedWork() {
  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as Locale;
  const rest = getFeaturedCaseStudies().slice(3, 6);

  if (rest.length < 3) return null;

  return (
    <section className="py-20 sm:py-28">
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

        <FadeIn delay={0.08} className="mt-12">
          <WorkStage studies={rest} locale={locale} />
        </FadeIn>
      </Container>
    </section>
  );
}
