import { cn } from "@/lib/utils";

import { Stagger, StaggerItem } from "../ui/Reveal";

function Arrow({ dark, dashed = false }: { dark: boolean; dashed?: boolean }) {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <svg
        viewBox="0 0 16 40"
        className={cn("h-10 w-4", dark ? "text-paper/40" : "text-ink/30")}
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
          ? dark
            ? "border-paper bg-paper text-ink"
            : "border-ink bg-ink text-paper"
          : dark
            ? "border-white/15 bg-white/[0.03] text-paper"
            : "border-line bg-white text-ink",
      )}
    >
      <span className="text-[0.9375rem] font-medium tracking-tight">
        {title}
      </span>
      {sub ? (
        <span
          className={cn(
            "font-mono text-[0.6875rem] uppercase tracking-[0.1em]",
            emphasis
              ? dark
                ? "text-ink/60"
                : "text-paper/60"
              : dark
                ? "text-paper/50"
                : "text-muted",
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
    <Stagger
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        dark ? "border-white/10 bg-white/[0.02]" : "border-line bg-paper-2/60",
        className,
      )}
      stagger={0.12}
    >
      <StaggerItem>
        <p className={cn("eyebrow mb-6", dark ? "text-paper/50" : undefined)}>
          Dashboard data flow
        </p>
      </StaggerItem>
      <div className="mx-auto flex max-w-xs flex-col">
        <StaggerItem>
          <Node title="Dashboard UI" sub="Screens & components" dark={dark} />
        </StaggerItem>
        <StaggerItem>
          <Arrow dark={dark} />
        </StaggerItem>
        <StaggerItem>
          <Node
            title="Typed Data Layer"
            sub="dashboard-api.ts · async typed functions"
            dark={dark}
            emphasis
          />
        </StaggerItem>
        <StaggerItem>
          <Arrow dark={dark} />
        </StaggerItem>
        <StaggerItem>
          <Node
            title="Current Mock Data"
            sub="Structured local data"
            dark={dark}
          />
        </StaggerItem>
        <StaggerItem>
          <Arrow dark={dark} dashed />
        </StaggerItem>
        <StaggerItem>
          <Node
            title="Future Production API / Backend"
            sub="Swaps in without UI restructuring"
            dark={dark}
            dashed
          />
        </StaggerItem>
      </div>
    </Stagger>
  );
}
