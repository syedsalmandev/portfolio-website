import { cn } from "@/lib/utils";

/**
 * Sanitized, abstract representation of the confidential marketplace dashboard.
 * No client identity, copy, domains or real data are shown, only interface structure.
 */
export function MarketplaceMock({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  const bar = dark ? "bg-white/10" : "bg-ink/10";
  const barSoft = dark ? "bg-white/[0.06]" : "bg-ink/[0.06]";
  const panel = dark
    ? "border-white/10 bg-white/[0.03]"
    : "border-ink/10 bg-glass";
  const text = dark ? "text-ink/70" : "text-ink-2";
  const muted = dark ? "text-ink/40" : "text-muted";

  const rows = [
    { w: "w-[42%]", status: "Active", tone: "ok" },
    { w: "w-[36%]", status: "Pending", tone: "warn" },
    { w: "w-[48%]", status: "Leased", tone: "ok" },
    { w: "w-[30%]", status: "Inquiry", tone: "neutral" },
    { w: "w-[40%]", status: "Active", tone: "ok" },
  ] as const;

  return (
    <div
      role="img"
      aria-label="Sanitized illustration of the marketplace customer dashboard: sidebar navigation, summary cards and an orders table with placeholder rows"
      className={cn(
        "relative overflow-hidden rounded-xl border font-mono text-[0.6rem] leading-none",
        dark
          ? "border-white/10 bg-[#0b0f19] text-ink shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]"
          : "border-line bg-paper-2 text-ink shadow-glass",
        className,
      )}
    >
      {/* top bar */}
      <div
        className={cn(
          "flex items-center gap-3 border-b px-4 py-3",
          dark ? "border-white/10" : "border-ink/10",
        )}
      >
        <span
          className={cn("size-5 rounded-md", dark ? "bg-ink/80" : "bg-ink")}
        />
        <span className={cn("h-2 w-16 rounded-full", bar)} />
        <div
          className={cn(
            "ml-4 hidden h-6 flex-1 items-center gap-2 rounded-md border px-2 sm:flex",
            dark ? "border-white/10" : "border-ink/10",
          )}
        >
          <span
            className={cn(
              "size-2.5 rounded-full border",
              dark ? "border-white/30" : "border-ink/30",
            )}
          />
          <span className={cn("h-1.5 w-24 rounded-full", barSoft)} />
        </div>
        <span className="ml-auto flex items-center gap-2">
          <span className={cn("h-2 w-10 rounded-full", barSoft)} />
          <span className={cn("size-5 rounded-full", bar)} />
        </span>
      </div>

      <div className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[7rem_1fr]">
        {/* sidebar */}
        <div
          className={cn(
            "flex flex-col gap-2 border-r p-3",
            dark ? "border-white/10" : "border-ink/10",
          )}
        >
          {[
            "Dashboard",
            "Orders",
            "Leases",
            "Inquiries",
            "Domains",
            "Settings",
          ].map((label, i) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5",
                i === 1 && (dark ? "bg-white/10" : "bg-ink/10"),
              )}
            >
              <span
                className={cn("size-2 rounded-sm", i === 1 ? "bg-accent" : bar)}
              />
              <span className={cn("hidden sm:inline", i === 1 ? text : muted)}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* content */}
        <div className="flex flex-col gap-3 p-3 sm:p-4">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1.5">
              <span className={muted}>Orders</span>
              <span className={cn("h-2.5 w-24 rounded-full", bar)} />
            </div>
            <span className="rounded-full bg-ink px-2 py-1 text-paper">
              New Inquiry
            </span>
          </div>

          {/* stat cards */}
          <div className="grid grid-cols-3 gap-2">
            {["Active", "Pending", "Leased"].map((label) => (
              <div
                key={label}
                className={cn(
                  "flex flex-col gap-2 rounded-lg border p-2.5",
                  panel,
                )}
              >
                <span className={muted}>{label}</span>
                <span className={cn("h-3 w-8 rounded-sm", bar)} />
                <span className={cn("h-1 w-full rounded-full", barSoft)} />
              </div>
            ))}
          </div>

          {/* table */}
          <div className={cn("overflow-hidden rounded-lg border", panel)}>
            <div
              className={cn(
                "grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b px-3 py-2",
                dark ? "border-white/10" : "border-ink/10",
                muted,
              )}
            >
              <span>Domain</span>
              <span className="hidden sm:inline">Type</span>
              <span>Status</span>
            </div>
            {rows.map((r, i) => (
              <div
                key={i}
                className={cn(
                  "grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-2",
                  i < rows.length - 1 &&
                    (dark
                      ? "border-b border-white/[0.06]"
                      : "border-b border-ink/[0.06]"),
                )}
              >
                <span className="flex items-center gap-2">
                  <span className={cn("h-2 rounded-full", bar, r.w)} />
                  <span className={cn("h-2 w-6 rounded-full", barSoft)} />
                </span>
                <span
                  className={cn(
                    "hidden h-2 w-8 rounded-full sm:block",
                    barSoft,
                  )}
                />
                <span
                  className={cn(
                    "rounded-full border px-1.5 py-0.5",
                    r.tone === "ok" && "border-emerald-500/30 text-emerald-500",
                    r.tone === "warn" && "border-amber-500/30 text-amber-500",
                    r.tone === "neutral" &&
                      (dark
                        ? "border-white/20 text-ink/60"
                        : "border-ink/20 text-muted"),
                  )}
                >
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex items-center justify-between border-t px-4 py-2",
          dark ? "border-white/10 text-ink/40" : "border-ink/10 text-muted",
        )}
      >
        <span>Sanitized representation, no client data shown</span>
        <span className="hidden sm:inline">
          dashboard-api.ts → typed data layer
        </span>
      </div>
    </div>
  );
}
