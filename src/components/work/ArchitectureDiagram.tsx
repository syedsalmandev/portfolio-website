import { cn } from "@/lib/utils";

function Arrow({ dark, dashed = false }: { dark: boolean; dashed?: boolean }) {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <svg
        viewBox="0 0 16 40"
        className={cn("h-10 w-4", dark ? "text-ink/40" : "text-ink/30")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 1v32" strokeDasharray={dashed ? "3 4" : undefined} />
        <path d="M3 29l5 5 5-5" />
      </svg>
    </div>
  );
}

function Node({
  title,
  sub,
  dark,
  emphasis = false,
  dashed = false,
}: {
  title: string;
  sub?: string;
  dark: boolean;
  emphasis?: boolean;
  dashed?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 rounded-xl border px-5 py-4 text-center",
        dashed && "border-dashed",
        emphasis
          ? "border-accent/40 bg-accent-soft text-ink shadow-[0_0_40px_-12px_rgba(143,216,255,0.4)]"
          : dark
            ? "border-white/15 bg-white/[0.03] text-ink"
            : "border-line bg-glass text-ink",
      )}
    >
      <span className="text-[0.9375rem] font-medium tracking-tight">
        {title}
      </span>
      {sub ? (
        <span
          className={cn(
            "font-mono text-[0.6875rem]",
            emphasis ? "text-accent/80" : dark ? "text-ink/50" : "text-muted",
          )}
        >
          {sub}
        </span>
      ) : null}
    </div>
  );
}

/**
 * Dashboard UI → Typed Data Layer → Current Mock Data, with the future backend indicated.
 */
export function ArchitectureDiagram({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        dark ? "border-white/10 bg-white/[0.02]" : "border-line bg-paper-2/60",
        className,
      )}
    >
      <div>
        <p className={cn("eyebrow mb-6", dark ? "text-ink/50" : undefined)}>
          Dashboard data flow
        </p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col">
        <div>
          <Node title="Dashboard UI" sub="Screens & components" dark={dark} />
        </div>
        <div>
          <Arrow dark={dark} />
        </div>
        <div>
          <Node
            title="Typed Data Layer"
            sub="dashboard-api.ts · async typed functions"
            dark={dark}
            emphasis
          />
        </div>
        <div>
          <Arrow dark={dark} />
        </div>
        <div>
          <Node
            title="Current Mock Data"
            sub="Structured local data"
            dark={dark}
          />
        </div>
        <div>
          <Arrow dark={dark} dashed />
        </div>
        <div>
          <Node
            title="Future Production API / Backend"
            sub="Swaps in without UI restructuring"
            dark={dark}
            dashed
          />
        </div>
      </div>
    </div>
  );
}
