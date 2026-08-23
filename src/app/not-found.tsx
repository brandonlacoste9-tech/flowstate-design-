import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        That page doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/en"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-sm shadow-accent/20 transition-transform duration-200 hover:scale-[1.02] hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back home
      </Link>
    </div>
  );
}
