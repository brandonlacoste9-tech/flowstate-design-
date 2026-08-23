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
    <section className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={t("processEyebrow")}
            title={t("processTitle")}
          />
        </FadeIn>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <FadeIn key={step.id} delay={i * 0.08}>
              <li className="relative h-full rounded-[var(--radius)] border border-border bg-surface/40 p-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-text">
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
