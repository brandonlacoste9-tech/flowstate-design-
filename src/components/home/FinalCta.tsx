import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const t = useTranslations("home");

  return (
    <section className="pb-24 pt-8 sm:pb-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden border border-border/80 bg-surface/40 px-6 py-14 sm:px-14 sm:py-20">
            <div
              className="flow-orb pointer-events-none absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(142,224,200,0.28) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl leading-[1.05] text-text sm:text-5xl lg:text-6xl">
                  {t("finalTitle")}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
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
