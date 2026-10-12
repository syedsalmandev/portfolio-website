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
      <Reveal className="glass relative overflow-hidden rounded-panel px-6 py-16 sm:rounded-[2rem] sm:px-12 sm:py-24 lg:px-20 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(143,216,255,0.1),transparent)]"
        />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="eyebrow text-accent">Contact</p>
            <h2
              id="contact-heading"
              className="display mt-6 text-[2.5rem] xs:text-[3rem] sm:text-6xl lg:text-[4.5rem]"
            >
              Have a project or{" "}
              <span className="serif-accent">opportunity</span> in mind?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
              I&apos;m open to professional opportunities and selected web
              development projects involving full stack web applications, APIs,
              payment integrations and ecommerce/CMS platforms.
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent("Project or opportunity")}`}
                size="lg"
              >
                Get in Touch
              </Button>
              <Button
                href={site.cvPath}
                download={site.cvFileName}
                size="lg"
                icon="download"
                variant="secondary"
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <dl className="space-y-5 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline break-all text-base text-ink"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="link-underline text-base text-ink"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">LinkedIn</dt>
                <dd className="mt-1">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline break-all text-base text-ink"
                  >
                    {site.linkedinLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">GitHub</dt>
                <dd className="mt-1">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline break-all text-base text-ink"
                  >
                    {site.githubLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-1 text-base text-ink">{site.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
