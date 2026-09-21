"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import alphaInternational from "@/assets/projects/alpha-international.webp";
import tabarukatCollections from "@/assets/projects/tabarukat-collections.webp";
import tabarukatMobile from "@/assets/projects/tabarukat-mobile.webp";
import tabarukatProducts from "@/assets/projects/tabarukat-products.webp";

import { EASE } from "../ui/Reveal";

/**
 * Layered collage of real project screenshots.
 * Layers drift on scroll at different rates and tilt very slightly toward the cursor.
 */
export function HeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const yPhone = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const yCard = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  const mx = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });

  const tiltMainX = useTransform(sx, [-1, 1], [-6, 6]);
  const tiltPhoneX = useTransform(sx, [-1, 1], [10, -10]);
  const tiltCardX = useTransform(sx, [-1, 1], [-10, 10]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
  };

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 1.2, ease: EASE, delay },
  });

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative aspect-[4/3] w-full select-none xs:aspect-[5/4] sm:aspect-[4/3] lg:aspect-[5/4]"
      aria-label="Collage of project screenshots: Tabarukat E Masomeen storefront on desktop and mobile, and Alpha International"
      role="img"
    >
      {/* soft backdrop shape */}
      <motion.div
        aria-hidden
        {...enter(0.1)}
        className="absolute inset-x-[6%] inset-y-[8%] rounded-[2rem] bg-paper-2"
      />

      {/* main desktop screen */}
      <motion.div
        {...enter(0.35)}
        className="absolute left-[4%] top-[6%] w-[80%]"
      >
        <motion.div
          style={{ y: yMain, x: tiltMainX }}
          className="will-change-transform"
        >
          <div className="screen-frame">
            <div
              aria-hidden
              className="flex h-6 items-center gap-1.5 border-b border-ink/5 bg-white/80 px-3 sm:h-7"
            >
              <span className="size-1.5 rounded-full bg-ink/10 sm:size-2" />
              <span className="size-1.5 rounded-full bg-ink/10 sm:size-2" />
              <span className="size-1.5 rounded-full bg-ink/10 sm:size-2" />
              <span className="ml-3 h-2.5 w-32 rounded-full bg-ink/5" />
            </div>
            <div className="relative aspect-[1908/948] w-full overflow-hidden">
              <Image
                src={tabarukatProducts}
                alt="Tabarukat E Masomeen AS Shopify storefront on desktop"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 45vw, 80vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* small secondary card, top right */}
      <motion.div {...enter(0.55)} className="absolute right-0 top-0 w-[36%]">
        <motion.div
          style={{ y: ySmall, x: tiltCardX }}
          className="will-change-transform"
        >
          <div className="screen-frame">
            <div className="relative aspect-[1908/948] w-full overflow-hidden">
              <Image
                src={alphaInternational}
                alt="Alpha International WooCommerce website on desktop"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 18vw, 36vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* collections card, bottom right */}
      <motion.div
        {...enter(0.7)}
        className="absolute bottom-[4%] right-[2%] w-[52%]"
      >
        <motion.div
          style={{ y: yCard, x: tiltCardX }}
          className="will-change-transform"
        >
          <div className="screen-frame">
            <div className="relative aspect-[1908/948] w-full overflow-hidden">
              <Image
                src={tabarukatCollections}
                alt="Tabarukat E Masomeen AS collection mega menu"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 26vw, 52vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* phone, bottom left */}
      <motion.div {...enter(0.85)} className="absolute bottom-0 left-0 w-[27%]">
        <motion.div
          style={{ y: yPhone, x: tiltPhoneX }}
          className="will-change-transform"
        >
          <div className="rounded-[14%/7%] border border-ink/10 bg-ink p-[3%] shadow-[0_30px_80px_-30px_rgba(18,18,18,0.5)]">
            <div className="relative aspect-[357/603] w-full overflow-hidden rounded-[11%/6%] bg-white">
              <div
                aria-hidden
                className="absolute left-1/2 top-[1.5%] z-10 h-[2.5%] w-[36%] -translate-x-1/2 rounded-full bg-ink"
              />
              <Image
                src={tabarukatMobile}
                alt="Tabarukat E Masomeen AS storefront on mobile"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 14vw, 27vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* floating meta chip */}
      <motion.div
        {...enter(1)}
        className="absolute left-[30%] top-[2%] hidden items-center gap-2 rounded-full border border-line bg-paper/90 px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-2 shadow-sm backdrop-blur sm:flex"
        aria-hidden
      >
        <span className="size-1.5 rounded-full bg-accent" />
        1,020+ products · Shopify
      </motion.div>
    </div>
  );
}
