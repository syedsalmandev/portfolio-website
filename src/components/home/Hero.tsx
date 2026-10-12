import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";

import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { HeroCollage } from "./HeroCollage";

export function Hero() {
  const latest = featuredProjects[0];
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[6.5rem] sm:pt-32 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-7 xl:col-span-7">
              <Link
                href={`/work/${latest.slug}`}
                className="glass group mb-8 inline-flex max-w-full items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-sm text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
              >
                <Tag tone="accent" className="shrink-0">
                  Latest
                </Tag>
                <span className="truncate">
                  {latest.title}
                  <span className="hidden text-muted xs:inline">
                    {" "}
                    · {latest.category}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="inline-block shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <p className="eyebrow text-accent">
                {site.name}, {site.role}
              </p>

            <h1
              id="hero-heading"
              className="display mt-6 text-[2.75rem] xs:text-[3.25rem] sm:text-6xl lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem]"
            >
              I build production web applications, payment systems and{" "}
              <span className="serif-accent text-accent">
                ecommerce platforms.
              </span>
            </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Full Stack Developer with 3+ years of experience and 50+
                delivered web projects across React, Next.js, TypeScript,
                Node.js, NestJS and PostgreSQL, from modular frontends and REST
                APIs to payment integrations and custom CMS solutions.
              </p>

              <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <Button href="/#work" size="lg">
                  View Selected Work
                </Button>
                <Button
                  href={site.cvPath}
                  download={site.cvFileName}
                  variant="secondary"
                  size="lg"
                  icon="download"
                >
                  Download CV
                </Button>
              </div>

              <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="relative flex size-2" aria-hidden>
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  {site.location}
                </span>
                <span
                  className="hidden h-3 w-px bg-line-strong sm:block"
                  aria-hidden
                />
                <span>{site.availability}</span>
              </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5">
            <div className="mx-auto max-w-[36rem] lg:max-w-none">
              <HeroCollage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
