import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">{t("body")}</p>
          <div className="mt-8">
            <Button href="/" variant="primary">
              {t("cta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
