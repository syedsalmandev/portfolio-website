import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-accent" aria-hidden />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <Heading className="display text-[2rem] xs:text-[2.5rem] sm:text-5xl lg:text-[3.5rem]">
          {title}
        </Heading>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <div className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
