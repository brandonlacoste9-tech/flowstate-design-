import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import type { Locale } from "@/content/types";
import { routing } from "@/i18n/routing";
import { CaseStudyView } from "@/components/work/CaseStudyView";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return {};
  }

  const typedLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: "work" });

  return {
    title: study.title[typedLocale],
    description: study.summary[typedLocale] ?? t("description"),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyView study={study} locale={locale as Locale} />;
}
