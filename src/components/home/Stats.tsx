import { stats } from "@/data/site";

import { Reveal } from "../ui/Reveal";

export function Stats() {
  return (
    <section
      aria-label="Quick credibility"
      className="container-x mt-20 sm:mt-28 lg:mt-32"
    >
      <Reveal
        as="ul"
        className="glass grid grid-cols-2 overflow-hidden rounded-panel lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <li
            key={s.label}
            className={[
              "flex flex-col justify-between gap-4 px-5 py-7 sm:px-8 sm:py-9",
              i % 2 === 1 ? "border-l border-line" : "",
              i >= 2 ? "border-t border-line lg:border-t-0" : "",
              i === 2 ? "lg:border-l" : "",
            ].join(" ")}
          >
            <span className="display break-words text-[1.375rem] leading-none xs:text-[1.625rem] sm:text-[2.25rem] lg:text-[2.5rem]">
              {s.value}
            </span>
            <span className="text-sm text-muted sm:text-[0.9375rem]">
              {s.label}
            </span>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
