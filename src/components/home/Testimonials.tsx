import { useLocale, useTranslations } from "next-intl";
import { testimonials } from "@/content/testimonials";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;

  return (
    <section className="border-b border-border/60 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.id} delay={0.06 * i}>
              <figure className="flex h-full flex-col rounded-[var(--radius)] border border-border/80 bg-surface/50 p-6">
                <div className="mb-4 flex gap-1 text-accent" aria-hidden>
                  {"★★★★★".split("").map((s, idx) => (
                    <span key={idx} className="text-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-text">
                  “{item.quote[locale]}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-sm font-semibold text-text">{item.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.role[locale]}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
