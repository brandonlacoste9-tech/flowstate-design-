import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { studio } from "@/content/studio";
import type { Locale } from "@/content/types";

export function AboutSnippet() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <SectionHeading
              eyebrow={t("aboutEyebrow")}
              title={t("aboutTitle")}
              description={t("aboutBody")}
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                {t("aboutCta")}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="border-t border-border/80 pt-6">
              <p className="font-display text-5xl leading-none text-text sm:text-6xl">
                {studio.city[locale]}
              </p>
              <a
                href={studio.phoneHref}
                className="mt-5 block font-display text-2xl text-muted transition-colors hover:text-accent"
              >
                {studio.phone}
              </a>
              <p className="mt-2 text-sm text-muted">{studio.domain}</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
