import { experience, process } from "@/data/profile";

import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="container-x scroll-mt-24 pt-24 sm:pt-32 lg:pt-40"
      aria-labelledby="experience-heading"
    >
      <SectionHeading
        eyebrow="Experience"
        title={
          <span id="experience-heading">
            Three years across agencies, freelance and{" "}
            <span className="serif-accent">product</span> teams.
          </span>
        }
      />

      <ol className="relative mt-12 pl-7 before:absolute before:bottom-10 before:left-[5px] before:top-10 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line-strong before:to-transparent before:content-[''] sm:mt-16 sm:pl-10">
        {experience.map((job) => (
          <Reveal
            as="li"
            key={job.company + job.period}
            className="relative grid gap-4 border-b border-line py-8 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-10"
          >
            <span
              aria-hidden
              className={
                job.current
                  ? "absolute -left-7 top-[2.2rem] size-[11px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(143,216,255,0.15),0_0_24px_rgba(143,216,255,0.6)] sm:-left-10 lg:top-[2.7rem]"
                  : "absolute -left-7 top-[2.2rem] size-[11px] rounded-full border border-line-strong bg-paper sm:-left-10 lg:top-[2.7rem]"
              }
            />
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-muted">{job.period}</p>
              {job.current ? (
                <span className="mt-2 inline-block text-sm font-medium text-accent">
                  Current role
                </span>
              ) : null}
            </div>
            <div className="lg:col-span-4">
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                {job.role}
              </h3>
              <p className="mt-1 text-muted">{job.company}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[0.9375rem] leading-relaxed text-ink-2">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted"
                  >
                    <span
                      className="mt-[0.6em] inline-block size-1 shrink-0 rounded-full bg-line-strong"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <Process />
    </section>
  );
}

function Process() {
  return (
    <div className="mt-24 sm:mt-32" aria-labelledby="process-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="How I Work"
          title={
            <span id="process-heading">
              A simple, dependable <span className="serif-accent">process</span>
              .
            </span>
          }
          as="h3"
        />
        <Reveal delay={100}>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The same seven steps whether it is a Shopify storefront, a WordPress
            build or a Next.js application.
          </p>
        </Reveal>
      </div>

      <Reveal
        as="ol"
        className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-5"
      >
        {process.map((s) => (
          <li key={s.step} className="group relative border-t border-line pt-5">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent">{s.step}</span>
              <span className="text-lg font-medium tracking-tight">
                {s.title}
              </span>
              <p className="text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
            <span
              aria-hidden
              className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
            />
          </li>
        ))}
      </Reveal>
    </div>
  );
}
