import { experience, process } from "@/data/profile";

import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
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

      <Stagger
        as="ol"
        className="mt-12 border-t border-line sm:mt-16"
        stagger={0.1}
      >
        {experience.map((job) => (
          <StaggerItem
            as="li"
            key={job.company + job.period}
            className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
          >
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-muted">{job.period}</p>
              {job.current ? (
                <span className="mt-2 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-accent">
                  <span
                    className="size-1.5 rounded-full bg-accent"
                    aria-hidden
                  />
                  Current
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
                      className="mt-[0.7em] inline-block h-px w-3 shrink-0 bg-line-strong"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

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
        <Reveal delay={0.15}>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The same seven steps whether it is a Shopify storefront, a WordPress
            build or a Next.js application.
          </p>
        </Reveal>
      </div>

      <Stagger
        as="ol"
        className="mt-12 grid grid-cols-1 gap-px border border-line bg-line xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-7"
        stagger={0.07}
      >
        {process.map((s) => (
          <li key={s.step} className="group relative bg-paper p-5 sm:p-6">
            <StaggerItem className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent">{s.step}</span>
              <span className="text-lg font-medium tracking-tight">
                {s.title}
              </span>
              <p className="text-sm leading-relaxed text-muted">{s.text}</p>
            </StaggerItem>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-ink transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
            />
          </li>
        ))}
        {/* filler keeps the hairline grid even at 2 and 4 columns */}
        <li aria-hidden className="hidden bg-paper-2 xs:block lg:hidden" />
      </Stagger>
    </div>
  );
}
