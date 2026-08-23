import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-text text-bg hover:bg-white",
  secondary:
    "border border-border bg-transparent text-text hover:border-text hover:text-text",
  ghost: "text-muted hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
