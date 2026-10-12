import { cn } from "@/lib/utils";

/** SSA monogram used in the header, footer and favicon. */
export function Monogram({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-9 place-items-center rounded-[0.6rem] font-sans text-[0.7rem] font-semibold tracking-[0.02em]",
        inverted
          ? "bg-ink text-paper"
          : "border border-line-strong bg-gradient-to-b from-white/12 to-white/[0.03] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
        className,
      )}
    >
      SSA
    </span>
  );
}
