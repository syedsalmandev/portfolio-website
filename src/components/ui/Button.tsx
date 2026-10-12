import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant =
  "primary" | "secondary" | "ghost" | "inverted" | "outline-inverted";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-500 ease-out-expo active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper border border-ink shadow-[0_10px_40px_-12px_rgba(143,216,255,0.45)] hover:bg-white hover:border-white",
  secondary:
    "glass text-ink hover:border-line-strong hover:bg-glass-strong",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-glass",
  inverted:
    "bg-ink text-paper border border-ink hover:bg-white hover:border-white",
  "outline-inverted":
    "bg-transparent text-ink border border-line-strong hover:border-ink/40 hover:bg-glass",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: "arrow" | "download" | "external" | "none";
};

type ButtonProps = CommonProps &
  (
    | ({ href: string; download?: boolean | string } & Omit<
        ComponentPropsWithoutRef<"a">,
        "href" | "className" | "children"
      >)
    | ({ href?: undefined } & Omit<
        ComponentPropsWithoutRef<"button">,
        "className" | "children"
      >)
  );

function Icon({ kind }: { kind: NonNullable<CommonProps["icon"]> }) {
  if (kind === "none") return null;
  if (kind === "download") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
      </svg>
    );
  }
  if (kind === "external") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12 12 4M6 4h6v6" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon = "arrow",
    ...rest
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest;
    const external = /^https?:\/\//.test(href);
    if (external || anchorProps.download !== undefined) {
      return (
        <a
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...anchorProps}
        >
          <span>{children}</span>
          <Icon kind={icon} />
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        <span>{children}</span>
        <Icon kind={icon} />
      </Link>
    );
  }

  const buttonProps = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={classes} {...buttonProps}>
      <span>{children}</span>
      <Icon kind={icon} />
    </button>
  );
}
