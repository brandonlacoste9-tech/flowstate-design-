import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function AboutSnippet() {
  const t = useTranslations("home");
  const tMeta = useTranslations("meta");

  return (
    <section className="border-t border-border/60 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-surface/50 p-8">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(125,211,192,0.45), transparent 70%)",
                }}
                aria-hidden
              />
              <p className="relative font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {tMeta("siteName")}
              </p>
              <p className="relative mt-4 text-2xl font-semibold tracking-tight text-text">
                {t("aboutTitle")}
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-muted">
                {tMeta("homeDescription")}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
