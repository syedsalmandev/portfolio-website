import { stats } from "@/data/site";

import { Stagger, StaggerItem } from "../ui/Reveal";

export function Stats() {
  return (
    <section
      aria-label="Quick credibility"
      className="container-x mt-20 sm:mt-28 lg:mt-32"
    >
      <Stagger
        as="ul"
        className="grid grid-cols-2 border-y border-line lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <StaggerItem
            as="li"
            key={s.label}
            className={[
              "flex flex-col justify-between gap-4 py-7 pr-4 sm:py-9",
              i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : "",
              i >= 2 ? "border-t border-line lg:border-t-0" : "",
              i === 2 ? "lg:border-l lg:pl-8" : "",
              i === 3 ? "lg:pl-8" : "",
            ].join(" ")}
          >
            <span className="display break-words text-[1.375rem] leading-none xs:text-[1.625rem] sm:text-[2.25rem] lg:text-[2.5rem]">
              {s.value}
            </span>
            <span className="text-sm text-muted sm:text-[0.9375rem]">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
