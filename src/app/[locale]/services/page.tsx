import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { PackageList } from "@/components/services/PackageList";
import { CustomProjectBlock } from "@/components/services/CustomProjectBlock";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title={t("title")} description={t("description")} />
        </FadeIn>

        <div className="mt-12">
          <PackageList
            locale={locale as Locale}
            includesLabel={t("includes")}
          />
        </div>

        <div className="mt-16">
          <CustomProjectBlock
            title={t("customTitle")}
            body={t("customBody")}
            cta={t("customCta")}
          />
        </div>
      </Container>
    </section>
  );
}
