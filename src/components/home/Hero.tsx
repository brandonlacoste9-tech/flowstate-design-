import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkStage } from "@/components/work/WorkStage";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import type { Locale } from "@/content/types";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;
  const featured = getFeaturedCaseStudies();

  return (
    <section className="relative overflow-hidden">
      <div
        className="flow-orb pointer-events-none absolute -left-1/4 top-[-20%] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl sm:h-[560px] sm:w-[560px]"
        style={{
          background:
            "radial-gradient(circle, rgba(142,224,200,0.28) 0%, rgba(142,224,200,0.06) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative grid items-end gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-5">
          <FadeIn>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {t("eyebrow")}
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="max-w-xl whitespace-pre-line font-display text-[2.45rem] leading-[1.05] text-text sm:text-5xl lg:text-[3.35rem] lg:leading-[1.04]">
              {t("title")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {t("subtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-5 max-w-md font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {t("kicker")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact">{t("ctaPrimary")}</Button>
              <Button href="/work" variant="secondary">
                {t("ctaSecondary")}
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="lg:col-span-7">
          <WorkStage
            studies={featured.slice(0, 3)}
            locale={locale}
            caption={t("previewCaption")}
            priority
          />
        </FadeIn>
      </Container>
    </section>
  );
}
