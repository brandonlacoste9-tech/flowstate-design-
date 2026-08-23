import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function TrustStrip() {
  const t = useTranslations("trust");

  const niches = [
    { key: "local", label: t("local") },
    { key: "startups", label: t("startups") },
    { key: "creatives", label: t("creatives") },
  ] as const;

  return (
    <section className="border-b border-border/60 py-10 sm:py-12">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {t("title")}
            </p>
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {niches.map((niche) => (
                <li
                  key={niche.key}
                  className="rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-text"
                >
                  <span className="mr-2 text-accent" aria-hidden>
                    ●
                  </span>
                  {niche.label}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
