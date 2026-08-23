import { getLocale, getTranslations } from "next-intl/server";
import { processSteps } from "@/content/process";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export async function ProcessSection() {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={t("processEyebrow")}
            title={t("processTitle")}
          />
        </FadeIn>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <FadeIn key={step.id} delay={i * 0.08}>
              <li className="relative h-full border-t border-border/80 pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl text-text">
                  {step.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body[locale]}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
