"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "figure" | "li" | "ul" | "ol";

let observer: IntersectionObserver | null = null;

/** One shared observer for every revealed element on the page. */
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
  }
  return observer;
}

/**
 * Fades its content in and lifts it slightly the first time it enters the viewport.
 *
 * The hidden state lives in CSS (see `[data-reveal]` in globals.css) and only
 * applies once the `js` class is on <html> and the visitor allows motion, so
 * content is never hidden without JavaScript or for reduced-motion users.
 * Use it for sections and cards, not for individual paragraphs or badges.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds, for staggering sibling cards. */
  delay?: number;
  as?: RevealTag;
} & Omit<
  React.HTMLAttributes<HTMLElement>,
  "children" | "className" | "style"
>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.setAttribute("data-revealed", "");
      return;
    }
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  // All allowed tags share HTMLElement's props; typing as "div" keeps JSX happy.
  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
      className={className}
      data-reveal=""
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}

// Shared easing for the remaining motion-driven components (header, collage tilt).
export const EASE = [0.16, 1, 0.3, 1] as const;
