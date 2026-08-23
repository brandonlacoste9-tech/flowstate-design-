import Image from "next/image";
import type { CaseStudy } from "@/content/types";
import { cn } from "@/lib/utils";

/** Browser frame around the real rebuild photo — not a fake product UI. */
export function ProjectMock({
  study,
  className,
  compact = false,
}: {
  study: CaseStudy;
  className?: string;
  compact?: boolean;
}) {
  const url = (study.previewUrl ?? study.liveUrl)?.replace(/^https?:\/\//, "") ?? `flowstate-webdesign.com/work/${study.slug}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] border border-border bg-bg shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/80 bg-surface/80 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 truncate rounded-md border border-border/60 bg-bg/70 px-2.5 py-1 font-mono text-[10px] text-muted">
          {url}
        </div>
      </div>
      <div className={cn("relative", compact ? "aspect-[16/8]" : "aspect-[16/9]")}>
        <Image
          src={study.image}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
