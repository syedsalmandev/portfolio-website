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
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.75rem] font-medium leading-none",
        tone === "default" && "border-line bg-glass text-ink-2",
        tone === "accent" && "border-accent/25 bg-accent-soft text-accent",
        tone === "inverted" && "border-line-strong bg-glass-strong text-ink-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
