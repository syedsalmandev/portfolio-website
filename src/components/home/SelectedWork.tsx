import Link from "next/link";

import {
  additionalWork,
  featuredProjects,
  secondaryProjects,
  type Project,
} from "@/data/projects";
import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { PhoneImage, ScreenImage, ScreenPlaceholder } from "../ui/ScreenImage";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";
import { MarketplaceMock } from "../work/MarketplaceMock";

const [latest, tabarukat, marketplace] = featuredProjects;

function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 text-sm">
      <div>
        <dt className="eyebrow">Role</dt>
        <dd className="mt-1 text-ink-2">{project.role}</dd>
      </div>
      <div>
        <dt className="eyebrow">Status</dt>
        <dd className="mt-1 text-ink-2">{project.status}</dd>
      </div>
    </dl>
  );
}

function FeaturedProject({ project: p }: { project: Project }) {
  return (
    <Reveal
      as="article"
      className="group relative"
      aria-labelledby={`project-${p.slug}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Tag tone="accent">{p.label}</Tag>
        <span className="font-mono text-xs text-muted">
          {p.index} · {p.category}
        </span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-8">
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
            ) : (
              <ScreenPlaceholder title={p.title} category={p.category} />
            )}
          </Link>
          {p.mobileScreens[0] ? (
            <div className="absolute -bottom-6 right-4 w-[26%] max-w-[10.5rem] sm:-bottom-10 sm:right-6 lg:right-2 lg:w-[22%]">
              <PhoneImage
                src={p.mobileScreens[0].src}
                alt={p.mobileScreens[0].alt}
                sizes="(min-width: 1024px) 14vw, 26vw"
              />
            </div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col justify-end lg:col-span-4 lg:mt-0">
          <h3
            id={`project-${p.slug}`}
            className="display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            <Link href={`/work/${p.slug}`} className="hover:text-ink-2">
              {p.title}
            </Link>
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {p.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">
            {p.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ProjectMeta project={p} />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`/work/${p.slug}`}>View Case Study</Button>
            {p.liveUrl ? (
              <Button href={p.liveUrl} variant="secondary" icon="external">
                Live Site
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FeaturedMarketplace() {
  const p = marketplace;
  return (
    <Reveal
      as="article"
      className="glass relative overflow-hidden rounded-panel px-5 py-12 sm:px-10 sm:py-16 lg:-mx-6 lg:rounded-[2rem] lg:px-12 lg:py-20 xl:-mx-10 xl:px-16"
      aria-labelledby={`project-${p.slug}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(143,216,255,0.12),transparent)]"
      />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="inverted">
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent" />
              {p.status}
            </Tag>
            <span className="font-mono text-xs text-muted">
              {p.index} · {p.category}
            </span>
          </div>
          <h3
            id={`project-${p.slug}`}
            className="display mt-6 text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]"
          >
            <Link href={`/work/${p.slug}`} className="hover:text-ink-2">
              Confidential Premium{" "}
              <span className="serif-accent">Domain Marketplace</span>
            </Link>
          </h3>
          <p className="mt-5 text-base leading-relaxed text-ink-2">
            {p.summary}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Built as a modular monolith with feature modules for Domains, Auth,
            Orders, Payments, Leasing, Inquiries, Notifications and Settings,
            and a centralized typed data-access layer so the production backend
            can replace the current data source without major UI restructuring.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology">
            {p.tags.map((t) => (
              <li key={t}>
                <Tag tone="inverted">{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ProjectMeta project={p} />
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`/work/${p.slug}`}>View Case Study</Button>
          </div>
          <p className="mt-5 text-sm text-muted">{p.confidentialNote}</p>
        </div>

        <div className="lg:col-span-7">
          <div className="lg:pl-4">
            <MarketplaceMock />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ["src/app/", "Routes"],
              ["src/modules/", "Feature modules"],
              ["src/components/", "Shared UI"],
            ].map(([path, label]) => (
              <div
                key={path}
                className="rounded-xl border border-line bg-glass px-2 py-3 sm:px-3"
              >
                <p className="font-mono text-[0.6875rem] text-ink sm:text-xs">
                  {path}
                </p>
                <p className="mt-1 text-[0.6875rem] text-muted sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  span,
  wide = false,
  delay = 0,
}: {
  project: Project;
  span: string;
  wide?: boolean;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className={cn("group", span)}>
      <div
        className={cn(
          "flex h-full flex-col gap-6",
          wide && "lg:grid lg:grid-cols-12 lg:items-end lg:gap-10",
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          aria-label={`${project.title} case study`}
          className={cn(
            "block rounded-frame transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5",
            wide && "lg:col-span-8",
          )}
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
          ) : (
            <ScreenPlaceholder
              title={project.title}
              category={project.category}
            />
          )}
        </Link>
        <div className={cn("flex flex-col", wide && "lg:col-span-4")}>
          <div className="flex items-center justify-between gap-4">
            <span className="min-w-0 font-mono text-xs text-muted">
              {project.index} · {project.category}
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline shrink-0 text-sm whitespace-nowrap text-ink-2 hover:text-ink"
              >
                Live site ↗
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
    </Reveal>
  );
}

function AdditionalWork() {
  return (
    <Reveal className="mt-24 border-t border-line pt-14 sm:mt-32 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent">{additionalWork.title}</p>
          <p className="display mt-6 text-[3.5rem] leading-none sm:text-[4.5rem]">
            {additionalWork.stat.value}
          </p>
          <p className="mt-2 text-muted">{additionalWork.stat.label}</p>
        </div>
        <div className="lg:col-span-7">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {additionalWork.copy}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 border-t border-line sm:grid-cols-3">
            {additionalWork.areas.map((a) => (
              <li
                key={a}
                className="border-b border-line py-3 text-[0.9375rem] text-ink-2"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
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
        <Reveal delay={100}>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Eight selected projects across Shopify, WordPress / WooCommerce and
            Next.js, from large product catalogs to a dashboard-driven
            application.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 space-y-24 sm:mt-20 sm:space-y-32">
        <FeaturedProject project={latest} />
        <FeaturedProject project={tabarukat} />
        <FeaturedMarketplace />

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12 lg:items-end lg:gap-y-20">
          <ProjectCard project={alpha} span="lg:col-span-7" />
          <ProjectCard project={silverstein} span="lg:col-span-5" delay={100} />
          <ProjectCard project={triple} span="lg:col-span-5" />
          <ProjectCard project={sherman} span="lg:col-span-7" delay={100} />
          <ProjectCard project={logiciel} span="lg:col-span-12" wide />
        </div>
      </div>

      <AdditionalWork />
    </section>
  );
}
