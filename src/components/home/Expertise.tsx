import { expertise } from "@/data/profile";

import { Stagger, StaggerItem } from "../ui/Reveal";
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
          <SectionHeading
            eyebrow="Expertise"
            title={
              <span id="expertise-heading">
                Commerce, CMS and{" "}
                <span className="serif-accent">application</span> engineering.
              </span>
            }
            description="From Shopify and WordPress storefronts to React and Next.js applications, with the integration and workflow experience to ship and maintain them."
          />
        </div>

        <div className="lg:col-span-8">
          <Stagger
            as="div"
            className="grid grid-cols-1 gap-px border border-line bg-line xs:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {expertise.map((group, i) => (
              <div key={group.title} className="bg-paper p-6 sm:p-7">
                <StaggerItem>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="text-[1.0625rem] font-medium tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-[0.9375rem] leading-relaxed text-ink-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              </div>
            ))}
            <div className="flex flex-col justify-end bg-paper-2 p-6 sm:p-7">
              <StaggerItem>
                <p className="serif-accent text-[1.5rem] leading-tight text-ink sm:text-[1.75rem]">
                  Maintainable over clever. Practical for the team after launch.
                </p>
              </StaggerItem>
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
