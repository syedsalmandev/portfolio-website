import { site } from "@/data/site";

import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="container-x scroll-mt-24 pb-6 pt-24 sm:pb-8 sm:pt-32 lg:pt-40"
      aria-labelledby="contact-heading"
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-ink px-6 py-16 text-paper sm:rounded-[2rem] sm:px-12 sm:py-24 lg:px-20 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(194,65,12,0.18),transparent)] motion-safe:animate-[drift_22s_ease-in-out_infinite_alternate]"
        />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-paper/50">
                <span className="inline-block h-px w-6 bg-accent" aria-hidden />
                Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="contact-heading"
                className="display mt-6 text-[2.5rem] xs:text-[3rem] sm:text-6xl lg:text-[4.5rem]"
              >
                Have a project or{" "}
                <span className="serif-accent">opportunity</span> in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
                I&apos;m open to professional opportunities and selected web
                development projects involving full stack web applications,
                APIs, payment integrations and ecommerce/CMS platforms.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <Button
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Project or opportunity")}`}
                  size="lg"
                  variant="inverted"
                >
                  Get in Touch
                </Button>
                <Button
                  href={site.cvPath}
                  download={site.cvFileName}
                  size="lg"
                  icon="download"
                  variant="outline-inverted"
                >
                  Download CV
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <Reveal delay={0.2}>
              <dl className="space-y-5 border-t border-white/10 pt-6 text-sm">
                <div>
                  <dt className="eyebrow text-paper/50">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="link-underline break-all text-base text-paper"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/50">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="link-underline text-base text-paper"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/50">LinkedIn</dt>
                  <dd className="mt-1">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline break-all text-base text-paper"
                    >
                      {site.linkedinLabel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/50">GitHub</dt>
                  <dd className="mt-1">
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline break-all text-base text-paper"
                    >
                      {site.githubLabel}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-paper/50">Location</dt>
                  <dd className="mt-1 text-base text-paper">{site.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
