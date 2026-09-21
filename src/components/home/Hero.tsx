import { site } from "@/data/site";

import { Button } from "../ui/Button";
import { FadeIn, TextReveal } from "../ui/Reveal";
import { HeroCollage } from "./HeroCollage";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[6.5rem] sm:pt-32 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* subtle radial glow, moves slowly */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(194,65,12,0.08),transparent)] motion-safe:animate-[drift_18s_ease-in-out_infinite_alternate]"
      />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-7 xl:col-span-7">
            <FadeIn delay={0.05}>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-6 bg-accent" aria-hidden />
                {site.name.toUpperCase()} — {site.role.toUpperCase()}
              </p>
            </FadeIn>

            <h1
              id="hero-heading"
              className="display mt-6 text-[2.75rem] xs:text-[3.25rem] sm:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]"
            >
              <TextReveal
                text="I build scalable websites, ecommerce platforms and"
                delay={0.15}
              />{" "}
              <TextReveal
                text="custom digital experiences."
                delay={0.55}
                className="serif-accent text-accent"
              />
            </h1>

            <FadeIn delay={0.9}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                CMS &amp; Full Stack Developer with 3+ years of professional
                experience building ecommerce platforms, CMS websites, custom
                functionality and modern web applications.
              </p>
            </FadeIn>

            <FadeIn delay={1.05}>
              <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <Button href="/#work" size="lg">
                  View Selected Work
                </Button>
                <Button
                  href={site.cvPath}
                  download={site.cvFileName}
                  variant="secondary"
                  size="lg"
                  icon="download"
                >
                  Download CV
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={1.2}>
              <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex size-2" aria-hidden>
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {site.location}
                </span>
                <span
                  className="hidden h-3 w-px bg-line-strong sm:block"
                  aria-hidden
                />
                <span>{site.availability}</span>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <div className="mx-auto max-w-[36rem] lg:max-w-none">
              <HeroCollage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
