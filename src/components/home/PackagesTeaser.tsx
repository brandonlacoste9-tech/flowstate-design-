import { getLocale, getTranslations } from "next-intl/server";
import { packages } from "@/content/packages";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export async function PackagesTeaser() {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as Locale;

  return (
    <section className="border-y border-border/60 bg-surface/20 py-20 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={t("packagesEyebrow")}
            title={t("packagesTitle")}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 0.08}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-[var(--radius)] border bg-bg/40 p-6 transition-colors",
                  pkg.highlighted
                    ? "border-accent/50 shadow-[0_0_0_1px_rgba(125,211,192,0.12),0_20px_50px_-30px_rgba(125,211,192,0.4)]"
                    : "border-border hover:border-border",
                )}
              >
                {pkg.highlighted ? (
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {locale === "fr" ? "Le plus demandé" : "Where most people start"}
                  </p>
                ) : (
                  <div className="mb-3 h-[15px]" aria-hidden />
                )}
                <h3 className="text-xl font-semibold tracking-tight text-text">
                  {pkg.name[locale]}
                </h3>
                <p className="mt-2 font-mono text-sm text-accent">
                  {pkg.priceFrom[locale]}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {pkg.description[locale]}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <div className="mt-10">
            <Button href="/services" variant="secondary">
              {t("packagesCta")}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
