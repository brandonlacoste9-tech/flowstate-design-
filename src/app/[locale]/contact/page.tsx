import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { studio } from "@/content/studio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title={t("title")} description={t("description")} />
          <p className="mt-4 text-sm text-muted">
            {t("directEmail")}{" "}
            <a
              href={studio.emailHref}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {studio.email}
            </a>
            {" · "}
            <a
              href={studio.phoneHref}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {studio.phone}
            </a>
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </Container>
    </section>
  );
}
