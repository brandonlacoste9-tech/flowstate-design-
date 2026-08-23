import { getTranslations, setRequestLocale } from "next-intl/server";
import { caseStudies } from "@/content/case-studies";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkGrid } from "@/components/work/WorkGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("work");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title={t("title")} description={t("description")} />
        </FadeIn>
        <div className="mt-12">
          <WorkGrid studies={caseStudies} locale={locale as Locale} />
        </div>
      </Container>
    </section>
  );
}
