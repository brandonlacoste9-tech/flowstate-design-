import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { getFeaturedCaseStudies } from "@/content/case-studies";

export function Hero() {
  const t = useTranslations("hero");
  const featured = getFeaturedCaseStudies();

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="flow-orb pointer-events-none absolute -left-1/4 top-[-20%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl sm:h-[640px] sm:w-[640px]"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,192,0.35) 0%, rgba(125,211,192,0.08) 45%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-[-30%] h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(27,58,75,0.7) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-48 w-full max-w-5xl opacity-[0.12] sm:h-64"
        viewBox="0 0 800 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 120 C120 40, 200 180, 320 100 S520 20, 640 90 S760 160, 800 80"
          className="stroke-accent logo-wave"
          strokeWidth="2"
        />
        <path
          d="M0 150 C140 80, 220 190, 360 130 S540 50, 680 110 S760 170, 800 120"
          className="stroke-accent/50 logo-wave-delay"
          strokeWidth="1.5"
        />
      </svg>

      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
        <div>
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {t("eyebrow")}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {t("title")}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              {t("subtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {t("point1")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {t("point2")}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {t("point3")}
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/contact">{t("ctaPrimary")}</Button>
              <Button href="/work" variant="secondary">
                {t("ctaSecondary")}
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} className="relative">
          <div
            className="absolute -inset-4 rounded-[calc(var(--radius)+12px)] bg-accent/5 blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-border shadow-2xl">
            <div className="relative aspect-[16/11] w-full bg-surface">
              <Image
                src="/work/joes-italian.jpg"
                alt={t("previewCaption")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            {featured.length > 0 ? (
              <div className="grid grid-cols-3 gap-px border-t border-border bg-border sm:grid-cols-6">
                {featured.slice(0, 6).map((study) => (
                  <div key={study.slug} className="relative aspect-[4/3] bg-surface">
                    <Image
                      src={study.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover opacity-90"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted lg:text-left">
            {t("previewCaption")}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
