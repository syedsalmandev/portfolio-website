import { about } from "@/data/profile";
import { site } from "@/data/site";

import { Button } from "../ui/Button";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";

export function About() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <section
      id="about"
      className="container-x scroll-mt-24 pt-24 sm:pt-32 lg:pt-40"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-10 border-t border-line pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden />
              About
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 hidden lg:block">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="eyebrow">Based in</dt>
                <dd className="mt-1 text-ink-2">{site.location}</dd>
              </div>
              <div>
                <dt className="eyebrow">Focus</dt>
                <dd className="mt-1 text-ink-2">
                  Web applications · APIs · Payments
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Currently</dt>
                <dd className="mt-1 text-ink-2">
                  Full Stack &amp; CMS Developer, BetaGen Technologies
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <h2
              id="about-heading"
              className="display text-[1.75rem] leading-[1.15] xs:text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
            >
              {lead}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
            <Stagger className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {rest.map((p) => (
                <StaggerItem as="div" key={p}>
                  <p>{p}</p>
                </StaggerItem>
              ))}
              <StaggerItem>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button href="/#contact">Get in Touch</Button>
                  <Button
                    href={site.cvPath}
                    download={site.cvFileName}
                    variant="secondary"
                    icon="download"
                  >
                    Download CV
                  </Button>
                </div>
              </StaggerItem>
            </Stagger>

            <div>
              <Reveal>
                <p className="eyebrow mb-4">Education &amp; Certifications</p>
              </Reveal>
              <Stagger
                as="ul"
                className="divide-y divide-line border-y border-line"
              >
                {about.education.map((e) => (
                  <StaggerItem as="li" key={e.title + e.org} className="py-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-[0.9375rem] font-medium tracking-tight">
                        {e.title}
                      </p>
                      <p className="shrink-0 font-mono text-xs text-muted">
                        {e.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{e.org}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
