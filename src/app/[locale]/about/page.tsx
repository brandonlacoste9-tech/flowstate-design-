import { getTranslations, setRequestLocale } from "next-intl/server";
import { processSteps } from "@/content/process";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tHome = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const typedLocale = locale as Locale;

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading title={t("title")} description={t("lead")} />
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              {t("body")}
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <div className="mt-10 max-w-2xl rounded-[var(--radius)] border border-border/80 bg-surface/40 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {t("locationTitle")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t("locationBody")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow={tHome("processEyebrow")}
              title={tHome("processTitle")}
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
                    {step.title[typedLocale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body[typedLocale]}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-24">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-surface/40 p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(125,211,192,0.35), transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {tHome("aboutEyebrow")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                  {tHome("aboutTitle")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {tHome("finalBody")}
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    {tNav("startProject")}
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
