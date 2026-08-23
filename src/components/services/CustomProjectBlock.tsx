import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function CustomProjectBlock({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <FadeIn delay={0.16}>
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-surface/40 p-8 sm:p-10">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(125,211,192,0.35), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
