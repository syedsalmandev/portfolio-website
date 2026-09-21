import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col justify-center pt-24">
      <FadeIn>
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-6 bg-accent" aria-hidden />
          404
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="display mt-6 max-w-3xl text-[2.75rem] xs:text-[3.25rem] sm:text-6xl lg:text-[5rem]">
          This page doesn&apos;t <span className="serif-accent">exist</span> —
          but the work does.
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          The link may be outdated or mistyped. Head back to the homepage or
          jump straight to selected work.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/#work" variant="secondary">
            View Selected Work
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
