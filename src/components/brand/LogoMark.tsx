import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

export function LogoMark({
  className,
  markClassName,
  showWordmark = true,
  href = "/",
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  href?: "/" | string;
}) {
  const mark = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-8 w-8 shrink-0", markClassName)}
        aria-hidden
      >
        <rect
          width="40"
          height="40"
          rx="12"
          className="fill-surface stroke-border"
          strokeWidth="1"
        />
        <path
          d="M8 26c3.5-1 5.5-4.5 8-4.5s4.5 3 7.5 3 5-2.5 8.5-5.5"
          className="stroke-accent logo-wave"
          strokeWidth="2.25"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 20c3.5-1 5.5-4 8-4s4.5 2.5 7.5 2.5 5-2 8.5-5"
          className="stroke-accent/40 logo-wave-delay"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="12" r="2.25" className="fill-accent" />
      </svg>
      {showWordmark ? (
        <span className="font-semibold tracking-[0.14em] text-text">
          FLOWSTATE
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <Link href={href as "/"} className="group inline-flex items-center" aria-label="Flowstate">
        {mark}
      </Link>
    );
  }

  return mark;
}
