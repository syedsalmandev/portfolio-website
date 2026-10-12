"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";
import { Monogram } from "./Monogram";

const EASE = [0.16, 1, 0.3, 1] as const;

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < 200) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);

  return enabled ? active : null;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const active = useActiveSection(isHome);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // hide on downward scroll past the hero, reveal on any upward scroll
      if (y > 480 && y > last + 4) setHidden(true);
      else if (y < last - 4 || y < 480) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: hidden && !open ? -112 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4"
      >
        <div className="container-x">
          <div
            className={cn(
              "glass-blur flex h-14 items-center justify-between rounded-full pl-2.5 pr-2 transition-[background-color,box-shadow] duration-500 sm:h-16 sm:pl-3",
              (scrolled || open) && "shadow-lift",
            )}
          >
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-full"
              aria-label={`${site.name}, home`}
              onClick={() => setOpen(false)}
            >
              <Monogram className="transition-transform duration-500 ease-out-expo group-hover:-rotate-3" />
              <span className="hidden text-[0.9375rem] font-medium tracking-tight sm:inline">
                {site.name}
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 lg:flex"
            >
              {nav.map((item) => {
                const isActive = isHome && active === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-[0.9375rem] transition-colors duration-300",
                      isActive
                        ? "bg-glass-strong text-ink shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button
                  href={site.cvPath}
                  download={site.cvFileName}
                  icon="download"
                  variant="secondary"
                >
                  Download CV
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative grid size-10 place-items-center rounded-full border border-line bg-glass-strong sm:size-11 lg:hidden"
              >
                <span
                  className={cn(
                    "absolute h-px w-5 bg-ink transition-transform duration-500 ease-out-expo",
                    open ? "rotate-45" : "-translate-y-[3.5px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute h-px w-5 bg-ink transition-transform duration-500 ease-out-expo",
                    open ? "-rotate-45" : "translate-y-[3.5px]",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-paper/90 pt-[5.5rem] backdrop-blur-xl sm:pt-24 lg:hidden"
          >
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav
                aria-label="Mobile"
                className="container-x flex flex-1 flex-col justify-center gap-1 py-8"
              >
                {nav.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      duration: 0.7,
                      ease: EASE,
                      delay: 0.08 + i * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-line py-3.5 xs:py-4"
                    >
                      <span className="font-mono text-xs text-muted">
                        0{i + 1}
                      </span>
                      <span className="display text-[2.25rem] xs:text-[2.75rem] transition-transform duration-500 ease-out-expo group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
                className="container-x flex flex-col gap-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
              >
                <div className="flex flex-col gap-3 xs:flex-row">
                  <Button
                    href={site.cvPath}
                    download={site.cvFileName}
                    icon="download"
                    className="w-full xs:flex-1"
                  >
                    Download CV
                  </Button>
                  <Button
                    href={`mailto:${site.email}`}
                    variant="secondary"
                    icon="arrow"
                    className="w-full xs:flex-1"
                    onClick={() => setOpen(false)}
                  >
                    Get in Touch
                  </Button>
                </div>
                <p className="eyebrow">
                  {site.location} · {site.email}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
