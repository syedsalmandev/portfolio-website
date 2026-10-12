import { expertise } from "@/data/profile";

import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="container-x scroll-mt-24 pt-24 sm:pt-32 lg:pt-40"
      aria-labelledby="expertise-heading"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Expertise"
              title={
                <span id="expertise-heading">
                  Full stack <span className="serif-accent">application</span>{" "}
                  engineering.
                </span>
              }
              description="From React and Next.js frontends to NestJS and PostgreSQL backends, payment integrations and custom WordPress, WooCommerce and Shopify builds, with the workflow experience to ship and maintain them."
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="glass overflow-hidden rounded-panel">
              <ol>
                {expertise.map((group, i) => (
                  <li
                    key={group.title}
                    className="grid gap-3 border-b border-line px-6 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:px-8 sm:py-7"
                  >
                    <h3 className="flex items-baseline gap-3 text-[1.0625rem] font-medium tracking-tight">
                      <span className="font-mono text-xs text-accent">
                        0{i + 1}
                      </span>
                      {group.title}
                    </h3>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.9375rem] leading-relaxed text-ink-2">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <p className="serif-accent bg-glass px-6 py-7 text-[1.5rem] leading-tight text-ink sm:px-8 sm:text-[1.75rem]">
                Maintainable over clever. Practical for the team after launch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
