import { packages } from "@/content/packages";
import type { Locale } from "@/content/types";
import { FadeIn } from "@/components/motion/FadeIn";
import { PackageCard } from "./PackageCard";

export function PackageList({
  locale,
  includesLabel,
}: {
  locale: Locale;
  includesLabel: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {packages.map((pkg, i) => (
        <FadeIn key={pkg.id} delay={i * 0.08}>
          <PackageCard
            pkg={pkg}
            locale={locale}
            includesLabel={includesLabel}
          />
        </FadeIn>
      ))}
    </div>
  );
}
