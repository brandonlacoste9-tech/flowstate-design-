import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function MobileCta() {
  const t = useTranslations("nav");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/80 bg-bg/90 p-3 backdrop-blur-md md:hidden">
      <Button href="/contact" className="w-full">
        {t("startProject")}
      </Button>
    </div>
  );
}
