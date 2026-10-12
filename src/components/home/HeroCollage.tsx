"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import alphaInternational from "@/assets/projects/alpha-international.webp";
import tabarukatCollections from "@/assets/projects/tabarukat-collections.webp";
import tabarukatMobile from "@/assets/projects/tabarukat-mobile.webp";
import tabarukatProducts from "@/assets/projects/tabarukat-products.webp";

/**
 * Layered collage of real project screenshots.
 * Layers tilt very slightly toward the cursor (mouse only, off for reduced motion).
 */
export function HeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

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
      <div
        aria-hidden
        className="glass absolute inset-x-[6%] inset-y-[8%] rounded-[2rem]"
      />

      {/* main desktop screen */}
      <div className="absolute left-[4%] top-[6%] w-[80%]">
        <motion.div style={{ x: tiltMainX }} className="will-change-transform">
          <div className="screen-frame">
            <div
              aria-hidden
              className="flex h-6 items-center gap-1.5 border-b border-ink/5 bg-white/[0.03] px-3 sm:h-7"
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
      </div>

      {/* small secondary card, top right */}
      <div className="absolute right-0 top-0 w-[36%]">
        <motion.div style={{ x: tiltCardX }} className="will-change-transform">
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
      </div>

      {/* collections card, bottom right */}
      <div className="absolute bottom-[4%] right-[2%] w-[52%]">
        <motion.div style={{ x: tiltCardX }} className="will-change-transform">
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
      </div>

      {/* phone, bottom left */}
      <div className="absolute bottom-0 left-0 w-[27%]">
        <motion.div style={{ x: tiltPhoneX }} className="will-change-transform">
          <div className="rounded-[14%/7%] border border-white/12 bg-[#04060a] p-[3%] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_30px_80px_-30px_rgba(0,0,0,0.9)]">
            <div className="relative aspect-[357/603] w-full overflow-hidden rounded-[11%/6%] bg-white">
              <div
                aria-hidden
                className="absolute left-1/2 top-[1.5%] z-10 h-[2.5%] w-[36%] -translate-x-1/2 rounded-full bg-[#04060a]"
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
      </div>

      {/* floating meta chip */}
      <div
        className="glass-blur absolute left-[30%] top-[2%] hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs text-ink-2 sm:flex"
        aria-hidden
      >
        <span className="size-1.5 rounded-full bg-accent" />
        1,020+ products · Shopify
      </div>
    </div>
  );
}
