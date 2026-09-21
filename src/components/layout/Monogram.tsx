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
        inverted ? "bg-paper text-ink" : "bg-ink text-paper",
        className,
      )}
    >
      SSA
    </span>
  );
}
