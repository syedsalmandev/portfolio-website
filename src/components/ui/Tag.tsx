import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "inverted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] leading-none",
        tone === "default" && "border-line text-ink-2 bg-transparent",
        tone === "accent" && "border-accent/30 text-accent bg-accent-soft/60",
        tone === "inverted" && "border-white/15 text-paper/80 bg-white/5",
        className,
      )}
    >
      {children}
    </span>
  );
}
