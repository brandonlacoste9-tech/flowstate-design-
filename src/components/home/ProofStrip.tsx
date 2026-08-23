import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function ProofStrip() {
  const t = useTranslations("proof");

  const items = [
    { label: t("montreal"), detail: t("montrealDetail") },
    { label: t("bilingual"), detail: t("bilingualDetail") },
    { label: t("response"), detail: t("responseDetail") },
    { label: t("craft"), detail: t("craftDetail") },
  ] as const;

  return (
    <section className="border-b border-border/60 bg-surface/30 py-10 sm:py-12">
      <Container>
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </p>
                <p className="text-sm leading-snug text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
