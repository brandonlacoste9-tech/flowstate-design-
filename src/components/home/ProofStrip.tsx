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
    <section className="border-y border-border/60 py-12 sm:py-16">
      <Container>
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {items.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-display text-2xl text-text sm:text-[1.65rem]">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
