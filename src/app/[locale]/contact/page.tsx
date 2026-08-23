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
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <FadeIn>
              <SectionHeading title={t("title")} description={t("description")} />
              <p className="mt-4 text-sm text-muted">
                {t("directEmail")}{" "}
                <a
                  href={studio.phoneHref}
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {studio.phone}
                </a>
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="border-t border-border/80 pt-6 lg:mt-4">
              <p className="font-display text-5xl leading-none text-text sm:text-6xl">
                {studio.city[locale as "en" | "fr"]}
              </p>
              <a
                href={studio.phoneHref}
                className="mt-6 block font-display text-2xl text-muted transition-colors hover:text-accent"
              >
                {studio.phone}
              </a>
              <p className="mt-2 text-sm text-muted">{studio.domain}</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
