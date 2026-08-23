import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { CaseStudy, Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/navigation";
import { ProjectMock } from "@/components/work/ProjectMock";
import { Button } from "@/components/ui/Button";

export async function CaseStudyView({
  study,
  locale,
}: {
  study: CaseStudy;
  locale: Locale;
}) {
  const t = await getTranslations("work");

  const sections = [
    { key: "challenge" as const, body: study.challenge[locale] },
    { key: "approach" as const, body: study.approach[locale] },
    { key: "outcome" as const, body: study.outcome[locale] },
  ];

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <Link href="/work" className="transition-colors hover:text-accent">
              {t("title")}
            </Link>
            <span className="mx-2 text-border" aria-hidden>
              /
            </span>
            <span className="text-accent">{study.year}</span>
          </p>

          <div className="flex flex-wrap gap-1.5">
            {study.niche.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/80 bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {study.title[locale]}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {study.summary[locale]}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
            <Image
              src={study.image}
              alt={study.title[locale]}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {t("interfaceLabel")}
            </p>
            <ProjectMock study={study} />
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {sections.map((section, i) => (
            <FadeIn key={section.key} delay={0.1 + i * 0.06}>
              <section className="h-full rounded-[var(--radius)] border border-border/80 bg-surface/40 p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {t(section.key)}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {section.body}
                </p>
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-[var(--radius)] border border-border/80 bg-surface/40 p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">{t("ctaBody")}</p>
            <Button href="/contact">{t("cta")}</Button>
          </div>
        </FadeIn>
      </Container>
    </article>
  );
}
