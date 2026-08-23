import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const t = useTranslations("home");

  return (
    <section className="pb-24 pt-4 sm:pb-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[calc(var(--radius)+4px)] border border-accent/30 bg-surface/60 px-6 py-12 sm:px-12 sm:py-14">
            <div
              className="flow-orb pointer-events-none absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(125,211,192,0.4) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                  {t("finalTitle")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {t("finalBody")}
                </p>
              </div>
              <Button href="/contact" className="shrink-0">
                {t("finalCta")}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
