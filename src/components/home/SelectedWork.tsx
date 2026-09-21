import Link from "next/link";

import {
  additionalWork,
  projects,
  secondaryProjects,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { PhoneImage, ScreenImage } from "../ui/ScreenImage";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";
import { MarketplaceMock } from "../work/MarketplaceMock";

const tabarukat = projects[0];
const marketplace = projects[1];

function ProjectMeta({
  project,
  dark = false,
}: {
  project: Project;
  dark?: boolean;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-3 border-t pt-5 text-sm",
        dark ? "border-white/10" : "border-line",
      )}
    >
      <div>
        <dt className={cn("eyebrow", dark && "text-paper/50")}>Role</dt>
        <dd className={cn("mt-1", dark ? "text-paper/85" : "text-ink-2")}>
          {project.role}
        </dd>
      </div>
      <div>
        <dt className={cn("eyebrow", dark && "text-paper/50")}>Status</dt>
        <dd className={cn("mt-1", dark ? "text-paper/85" : "text-ink-2")}>
          {project.status}
        </dd>
      </div>
    </dl>
  );
}

function FeaturedTabarukat() {
  const p = tabarukat;
  return (
    <article className="group relative" aria-labelledby={`project-${p.slug}`}>
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <Tag tone="accent">{p.label}</Tag>
          <span className="font-mono text-xs text-muted">
            {p.index} — {p.category}
          </span>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-8">
          <Reveal y={40} amount={0.15}>
            <Link
              href={`/work/${p.slug}`}
              className="block"
              aria-label={`${p.title} case study`}
            >
              {p.cover ? (
                <ScreenImage
                  src={p.cover.src}
                  alt={p.cover.alt}
                  sizes="(min-width: 1280px) 62vw, (min-width: 1024px) 66vw, 100vw"
                />
              ) : null}
            </Link>
          </Reveal>
          {p.mobileScreens[0] ? (
            <Reveal
              delay={0.2}
              y={50}
              className="absolute -bottom-6 right-4 w-[26%] max-w-[10.5rem] sm:-bottom-10 sm:right-6 lg:right-2 lg:w-[22%]"
            >
              <PhoneImage
                src={p.mobileScreens[0].src}
                alt={p.mobileScreens[0].alt}
                sizes="(min-width: 1024px) 14vw, 26vw"
              />
            </Reveal>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col justify-end lg:col-span-4 lg:mt-0">
          <Reveal delay={0.1}>
            <h3
              id={`project-${p.slug}`}
              className="display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              <Link href={`/work/${p.slug}`} className="hover:text-ink-2">
                {p.title}
              </Link>
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {p.summary}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">
              {p.tags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25} className="mt-6">
            <ProjectMeta project={p} />
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/work/${p.slug}`}>View Case Study</Button>
              {p.liveUrl ? (
                <Button href={p.liveUrl} variant="secondary" icon="external">
                  Live Site
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

function FeaturedMarketplace() {
  const p = marketplace;
  return (
    <article
      className="relative -mx-5 overflow-hidden bg-ink px-5 py-16 text-paper sm:-mx-8 sm:px-8 sm:py-20 lg:-mx-12 lg:rounded-[2rem] lg:px-12 lg:py-24 xl:-mx-16 xl:px-16"
      aria-labelledby={`project-${p.slug}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(194,65,12,0.16),transparent)]"
      />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-5">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Tag tone="inverted">
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent" />
                {p.status}
              </Tag>
              <span className="font-mono text-xs text-paper/50">
                {p.index} — {p.category}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3
              id={`project-${p.slug}`}
              className="display mt-6 text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]"
            >
              <Link href={`/work/${p.slug}`} className="hover:text-paper/80">
                Confidential Premium{" "}
                <span className="serif-accent">Domain Marketplace</span>
              </Link>
            </h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-paper/70">
              {p.summary}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-paper/70">
              Built as a modular monolith with feature modules for Domains,
              Auth, Orders, Payments, Leasing, Inquiries, Notifications and
              Settings, and a centralized typed data-access layer so the
              production backend can replace the current data source without
              major UI restructuring.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">
              {p.tags.map((t) => (
                <li key={t}>
                  <Tag tone="inverted">{t}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3} className="mt-6">
            <ProjectMeta project={p} dark />
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/work/${p.slug}`} variant="inverted">
                View Case Study
              </Button>
            </div>
            <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-paper/45">
              {p.confidentialNote}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal y={40} amount={0.15} className="lg:pl-4">
            <MarketplaceMock />
          </Reveal>
          <Stagger
            className="mt-6 grid grid-cols-3 gap-3 text-center"
            stagger={0.1}
          >
            {[
              ["src/app/", "Routes"],
              ["src/modules/", "Feature modules"],
              ["src/components/", "Shared UI"],
            ].map(([path, label]) => (
              <StaggerItem
                key={path}
                className="rounded-lg border border-white/10 px-2 py-3 sm:px-3"
              >
                <p className="font-mono text-[0.6875rem] text-paper sm:text-xs">
                  {path}
                </p>
                <p className="mt-1 text-[0.6875rem] text-paper/50 sm:text-xs">
                  {label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  span,
  wide = false,
}: {
  project: Project;
  span: string;
  wide?: boolean;
}) {
  return (
    <StaggerItem as="article" className={cn("group", span)}>
      <div
        className={cn(
          "flex h-full flex-col gap-6",
          wide && "lg:grid lg:grid-cols-12 lg:items-end lg:gap-10",
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          aria-label={`${project.title} case study`}
          className={cn("block", wide && "lg:col-span-8")}
        >
          {project.cover ? (
            <ScreenImage
              src={project.cover.src}
              alt={project.cover.alt}
              sizes={
                wide
                  ? "(min-width: 1024px) 60vw, 100vw"
                  : "(min-width: 1024px) 45vw, 100vw"
              }
            />
          ) : null}
        </Link>
        <div className={cn("flex flex-col", wide && "lg:col-span-4")}>
          <div className="flex items-center justify-between gap-4">
            <span className="min-w-0 font-mono text-xs text-muted">
              {project.index} — {project.category}
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.12em] whitespace-nowrap text-ink-2"
              >
                Live Site ↗
              </a>
            ) : null}
          </div>
          <h3 className="display mt-3 text-[1.625rem] sm:text-[1.875rem]">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-ink-2"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            {project.tagline}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technology">
            {project.tags.slice(0, 4).map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <Link
            href={`/work/${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            View Case Study
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </StaggerItem>
  );
}

function AdditionalWork() {
  return (
    <div className="mt-24 border-t border-line pt-14 sm:mt-32 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden />
              {additionalWork.title}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="display mt-6 text-[3.5rem] leading-none sm:text-[4.5rem]">
              {additionalWork.stat.value}
            </p>
            <p className="mt-2 text-muted">{additionalWork.stat.label}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {additionalWork.copy}
            </p>
          </Reveal>
          <Stagger as="ul" className="mt-8 flex flex-wrap gap-2" stagger={0.04}>
            {additionalWork.areas.map((a) => (
              <StaggerItem as="li" key={a}>
                <span className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-2 text-sm text-ink-2">
                  {a}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const [alpha, silverstein, triple, sherman, logiciel] = secondaryProjects;
  return (
    <section
      id="work"
      className="container-x scroll-mt-24 pt-24 sm:pt-32 lg:pt-40"
      aria-labelledby="work-heading"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <span id="work-heading">
              Ecommerce, CMS and{" "}
              <span className="serif-accent">application</span> work.
            </span>
          }
        />
        <Reveal delay={0.15}>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Seven selected projects across Shopify, WordPress / WooCommerce and
            Next.js — from large product catalogs to a dashboard-driven
            application.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 space-y-24 sm:mt-20 sm:space-y-32">
        <FeaturedTabarukat />
        <FeaturedMarketplace />

        <Stagger
          className="grid gap-x-8 gap-y-16 lg:grid-cols-12 lg:items-end lg:gap-y-20"
          amount={0.1}
          stagger={0.12}
        >
          <ProjectCard project={alpha} span="lg:col-span-7" />
          <ProjectCard project={silverstein} span="lg:col-span-5" />
          <ProjectCard project={triple} span="lg:col-span-5" />
          <ProjectCard project={sherman} span="lg:col-span-7" />
          <ProjectCard project={logiciel} span="lg:col-span-12" wide />
        </Stagger>
      </div>

      <AdditionalWork />
    </section>
  );
}
