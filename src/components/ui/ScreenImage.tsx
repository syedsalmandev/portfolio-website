import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

function BrowserChrome() {
  return (
    <div
      aria-hidden
      className="flex h-7 items-center gap-1.5 border-b border-ink/5 bg-white/[0.03] px-3"
    >
      <span className="size-2 rounded-full bg-ink/10" />
      <span className="size-2 rounded-full bg-ink/10" />
      <span className="size-2 rounded-full bg-ink/10" />
      <span className="ml-3 h-3 flex-1 max-w-56 rounded-full bg-ink/5" />
    </div>
  );
}

/**
 * Screenshot inside a subtle browser-window frame.
 * Image scales gently on hover of the nearest `group`.
 */
export function ScreenImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1280px) 60vw, (min-width: 768px) 80vw, 100vw",
  priority = false,
  chrome = true,
  hover = true,
  position = "top",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  chrome?: boolean;
  hover?: boolean;
  position?: "top" | "center";
}) {
  return (
    <div className={cn("screen-frame", className)}>
      {chrome ? <BrowserChrome /> : null}
      <div className="relative aspect-[1908/948] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className={cn(
            "object-cover",
            position === "top" ? "object-top" : "object-center",
            hover &&
              "transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]",
          )}
        />
      </div>
    </div>
  );
}

/**
 * Typographic stand-in for projects without a screenshot yet.
 * Same frame and aspect ratio as `ScreenImage`, so it drops into any layout.
 */
export function ScreenPlaceholder({
  title,
  category,
  className,
}: {
  title: string;
  category: string;
  className?: string;
}) {
  return (
    <div className={cn("screen-frame", className)}>
      <BrowserChrome />
      <div
        role="img"
        aria-label={`${title} project placeholder, screenshot not yet available`}
        className="relative flex aspect-[1908/948] w-full flex-col items-center justify-center gap-3 overflow-hidden px-6 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(143,216,255,0.12),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-4 rounded-lg border border-dashed border-line-strong sm:inset-6"
        />
        <span
          aria-hidden
          className="text-sm text-muted"
        >
          {category}
        </span>
        <span
          aria-hidden
          className="display text-[1.75rem] transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03] sm:text-[2.5rem]"
        >
          {title}
        </span>
      </div>
    </div>
  );
}

/** Phone-style frame for mobile screenshots. */
export function PhoneImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 22vw, 60vw",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[14%/7%] border border-white/12 bg-[#04060a] p-[3%] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_80px_-30px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="relative aspect-[357/603] w-full overflow-hidden rounded-[11%/6%] bg-white">
        <div
          aria-hidden
          className="absolute left-1/2 top-[1.5%] z-10 h-[2.5%] w-[36%] -translate-x-1/2 rounded-full bg-[#04060a]"
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
