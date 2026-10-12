import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col justify-center pt-24">
      <p className="eyebrow text-accent">404</p>
      <h1 className="display mt-6 max-w-3xl text-[2.75rem] xs:text-[3.25rem] sm:text-6xl lg:text-[5rem]">
        This page doesn&apos;t <span className="serif-accent">exist</span>, but
        the work does.
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
        The link may be outdated or mistyped. Head back to the homepage or jump
        straight to selected work.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/#work" variant="secondary">
          View Selected Work
        </Button>
      </div>
    </section>
  );
}
