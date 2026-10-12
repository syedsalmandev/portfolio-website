import Link from "next/link";

import { getAdjacentProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { PhoneImage, ScreenImage, ScreenPlaceholder } from "../ui/ScreenImage";
import { Tag } from "../ui/Tag";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { MarketplaceMock } from "./MarketplaceMock";

type TocItem = { id: string; label: string };

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-ink-2 sm:text-[1.0625rem]">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "scroll-mt-28 border-t border-line pt-10 sm:pt-12",
        className,
      )}
    >
      <Reveal className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
          <h2
            id={`${id}-title`}
            className="text-2xl font-medium tracking-tight sm:text-[1.75rem]"
          >
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </Reveal>
    </section>
  );
}

function BulletList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((b) => (
        <li
          key={b}
          className={cn(
            "flex gap-3 text-[0.9375rem] leading-relaxed",
            dark ? "text-ink-2" : "text-muted",
          )}
        >
          <span
            className={cn(
              "mt-[0.6em] inline-block size-1 shrink-0 rounded-full",
              dark ? "bg-ink/40" : "bg-line-strong",
            )}
            aria-hidden
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Toc({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <p className="eyebrow mb-4">Contents</p>
      <ol className="space-y-2 border-l border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="-ml-px block border-l border-transparent pl-4 text-sm text-muted transition-colors hover:border-ink hover:text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const p = project;
  const { prev, next } = getAdjacentProjects(p.slug);
  const hasScreens = p.screenshots.length > 0;
  const hasMobile = p.mobileScreens.length > 0;
  const hasVideo = Boolean(p.videoUrl);

  const toc: TocItem[] = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "role", label: "My Role" },
    { id: "solution", label: "Solution" },
    ...(p.architecture ? [{ id: "architecture", label: "Architecture" }] : []),
    ...p.implementation.map((s, i) => ({
      id: `implementation-${i + 1}`,
      label: s.title,
    })),
    ...(p.callout ? [{ id: "callout", label: p.callout.title }] : []),
    { id: "features", label: "Key Features" },
    { id: "technology", label: "Technology" },
    ...(hasScreens ? [{ id: "screens", label: "Desktop Screens" }] : []),
    ...(hasMobile ? [{ id: "mobile", label: "Mobile Screens" }] : []),
    ...(hasVideo ? [{ id: "video", label: "Video" }] : []),
  ];

  return (
    <article className="pt-[6.5rem] sm:pt-32 lg:pt-36">
      {/* ---------- Hero ---------- */}
      <header className="container-x">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 ease-out-expo group-hover:-translate-x-1"
          >
            ←
          </span>
          All work
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3">
              {p.label ? (
                <Tag tone="accent">
                  {p.status === "In Development" ? (
                    <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent" />
                  ) : null}
                  {p.label}
                </Tag>
              ) : null}
              <span className="font-mono text-xs text-muted">
                {p.index} · {p.category}
              </span>
            </div>
            <h1 className="display mt-6 text-[2.5rem] xs:text-[3rem] sm:text-6xl lg:text-[4.25rem]">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {p.summary}
            </p>
            {p.confidential ? (
              <p className="glass mt-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm text-ink-2">
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="size-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="7" width="10" height="7" rx="1.5" />
                  <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
                </svg>
                {p.confidentialNote}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 text-sm lg:grid-cols-1">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-1 text-ink-2">{p.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-1 text-ink-2">{p.status}</dd>
              </div>
              <div>
                <dt className="eyebrow">Category</dt>
                <dd className="mt-1 text-ink-2">{p.category}</dd>
              </div>
              <div>
                <dt className="eyebrow">Year</dt>
                <dd className="mt-1 text-ink-2">{p.year}</dd>
              </div>
              {p.liveUrl ? (
                <div className="col-span-2 lg:col-span-1">
                  <dt className="eyebrow">Live Site</dt>
                  <dd className="mt-1">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline break-all text-ink-2"
                    >
                      {p.liveUrl
                        .replace(/^https?:\/\/(www\.)?/, "")
                        .replace(/\/$/, "")}
                      {" ↗"}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>

        {/* cover */}
        <div className="mt-12 sm:mt-16">
          {p.cover ? (
            <div className="group relative">
              <ScreenImage
                src={p.cover.src}
                alt={p.cover.alt}
                priority
                sizes="(min-width: 1440px) 1300px, 100vw"
              />
              {p.mobileScreens[0] ? (
                <div className="absolute -bottom-6 right-4 w-[22%] max-w-[12rem] sm:-bottom-10 sm:right-8 lg:-right-6">
                  <PhoneImage
                    src={p.mobileScreens[0].src}
                    alt={p.mobileScreens[0].alt}
                    sizes="(min-width: 1024px) 12rem, 22vw"
                  />
                </div>
              ) : null}
            </div>
          ) : p.confidential ? (
            <MarketplaceMock tone="light" />
          ) : (
            <ScreenPlaceholder title={p.title} category={p.category} />
          )}
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <div className="container-x mt-20 sm:mt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Toc items={toc} />
              <div className="mt-8 hidden lg:block">
                <p className="eyebrow mb-3">Technology</p>
                <ul className="flex flex-wrap gap-2">
                  {p.technology.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="space-y-14 lg:col-span-9 sm:space-y-16">
            <Section
              id="overview"
              eyebrow="01"
              title="Overview"
              className="border-t-0 pt-0 sm:pt-0"
            >
              <Prose paragraphs={p.overview} />
            </Section>

            <Section id="challenge" eyebrow="02" title="Challenge">
              <Prose paragraphs={p.challenge} />
            </Section>

            <Section id="role" eyebrow="03" title="My Role">
              <Prose paragraphs={p.myRole} />
            </Section>

            <Section id="solution" eyebrow="04" title="Solution">
              <Prose paragraphs={p.solution} />
            </Section>

            {p.architecture ? (
              <Section id="architecture" eyebrow="05" title="Architecture">
                <Prose
                  paragraphs={[
                    "The application uses a modular monolith frontend architecture. Feature modules own their screens, hooks, types and data functions; routes compose those modules; shared UI lives in a common component layer.",
                  ]}
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {p.architecture.folders.map((f) => (
                    <div
                      key={f.path}
                      className="rounded-xl border border-line bg-glass p-4"
                    >
                      <p className="font-mono text-sm text-ink">{f.path}</p>
                      <p className="mt-1 text-sm text-muted">{f.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="eyebrow mb-3">Feature modules</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.architecture.modules.map((m) => (
                      <li key={m}>
                        <span className="inline-flex items-center rounded-full border border-line bg-glass px-3.5 py-2 text-sm text-ink-2">
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass mt-10 rounded-panel p-6 sm:p-8">
                  <p className="eyebrow">Key technical feature</p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
                    Centralized typed data-access layer
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                    The dashboard uses a centralized typed data-access layer
                    through{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.8125rem] whitespace-nowrap">
                      dashboard-api.ts
                    </code>
                    . Dashboard screens consume asynchronous typed functions
                    rather than directly depending on mock data. This allows the
                    future backend implementation to replace the underlying data
                    source without requiring major UI restructuring.
                  </p>
                  <div className="mt-8">
                    <ArchitectureDiagram tone="dark" />
                  </div>
                  <p className="mt-6 text-sm text-muted">
                    Production database not yet connected · project in
                    development
                  </p>
                </div>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-3">
                      Completed public website areas
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9375rem] text-ink-2">
                      {p.architecture.completedPublic.map((a) => (
                        <li key={a} className="flex items-center gap-2">
                          <span
                            className="size-1 rounded-full bg-accent"
                            aria-hidden
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Completed dashboard areas</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9375rem] text-ink-2">
                      {p.architecture.completedDashboard.map((a) => (
                        <li key={a} className="flex items-center gap-2">
                          <span
                            className="size-1 rounded-full bg-accent"
                            aria-hidden
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="eyebrow mb-3">Shared UX</p>
                  <BulletList items={p.architecture.sharedUx} />
                </div>
              </Section>
            ) : null}

            {p.implementation.map((s, i) => (
              <Section
                key={s.title}
                id={`implementation-${i + 1}`}
                eyebrow={`0${(p.architecture ? 6 : 5) + i}`}
                title={s.title}
              >
                <Prose paragraphs={s.body} />
                {s.bullets ? <BulletList items={s.bullets} /> : null}
              </Section>
            ))}

            {p.callout ? (
              <section
                id="callout"
                aria-labelledby="callout-title"
                className="scroll-mt-28"
              >
                <Reveal>
                  <div className="glass relative overflow-hidden rounded-panel p-7 sm:p-10">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgba(143,216,255,0.14),transparent)]"
                    />
                    <p className="eyebrow">Principle</p>
                    <h2
                      id="callout-title"
                      className="display mt-3 text-[1.75rem] sm:text-[2.25rem]"
                    >
                      {p.callout.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-ink-2 sm:text-base">
                      {p.callout.body.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>
                    {p.callout.bullets ? (
                      <BulletList items={p.callout.bullets} dark />
                    ) : null}
                  </div>
                </Reveal>
              </section>
            ) : null}

            <Section id="features" title="Key Features">
              <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
                {p.keyFeatures.map((f) => (
                  <li key={f} className="bg-paper px-4 py-3">
                    <div className="flex items-center gap-3 text-[0.9375rem] text-ink-2">
                      <span
                        className="size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {f}
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="technology" title="Technology">
              <ul className="grid gap-x-8 border-t border-line sm:grid-cols-2">
                {p.technology.map((t) => (
                  <li
                    key={t}
                    className="border-b border-line py-3 text-[0.9375rem] text-ink-2"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Section>

            {hasScreens ? (
              <section
                id="screens"
                aria-labelledby="screens-title"
                className="scroll-mt-28 border-t border-line pt-10 sm:pt-12"
              >
                <h2
                  id="screens-title"
                  className="text-2xl font-medium tracking-tight sm:text-[1.75rem]"
                >
                  Desktop Screens
                </h2>
                <div className="mt-8 space-y-10">
                  {p.screenshots.map((s) => (
                    <Reveal key={s.alt} as="figure" className="group">
                      <ScreenImage
                        src={s.src}
                        alt={s.alt}
                        sizes="(min-width: 1024px) 70vw, 100vw"
                      />
                      {s.caption ? (
                        <figcaption className="mt-3 font-mono text-xs text-muted">
                          {s.caption}
                        </figcaption>
                      ) : null}
                    </Reveal>
                  ))}
                </div>
              </section>
            ) : null}

            {hasMobile ? (
              <section
                id="mobile"
                aria-labelledby="mobile-title"
                className="scroll-mt-28 border-t border-line pt-10 sm:pt-12"
              >
                <h2
                  id="mobile-title"
                  className="text-2xl font-medium tracking-tight sm:text-[1.75rem]"
                >
                  Mobile Screens
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-paper-2 p-6 sm:grid-cols-3 sm:p-10">
                  {p.mobileScreens.map((s) => (
                    <Reveal key={s.alt} as="figure">
                      <PhoneImage
                        src={s.src}
                        alt={s.alt}
                        sizes="(min-width: 640px) 20vw, 40vw"
                      />
                      {s.caption ? (
                        <figcaption className="mt-3 font-mono text-xs text-muted">
                          {s.caption}
                        </figcaption>
                      ) : null}
                    </Reveal>
                  ))}
                </div>
              </section>
            ) : null}

            {hasVideo ? (
              <section
                id="video"
                aria-labelledby="video-title"
                className="scroll-mt-28 border-t border-line pt-10 sm:pt-12"
              >
                <h2
                  id="video-title"
                  className="text-2xl font-medium tracking-tight sm:text-[1.75rem]"
                >
                  Video
                </h2>
                <Reveal className="mt-8">
                  <video
                    className="screen-frame w-full"
                    src={p.videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                  />
                </Reveal>
              </section>
            ) : null}

            {/* ---------- CTA ---------- */}
            <Reveal>
              <div className="glass flex flex-col gap-6 rounded-panel p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <p className="eyebrow">
                    {p.liveUrl ? "See it live" : "Interested in the work?"}
                  </p>
                  <p className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                    {p.liveUrl
                      ? `Visit ${p.title}`
                      : "Let's talk about your application."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.liveUrl ? (
                    <Button href={p.liveUrl} icon="external">
                      Visit Website
                    </Button>
                  ) : (
                    <Button href="/#contact">Get in Touch</Button>
                  )}
                  <Button href="/#work" variant="secondary" icon="none">
                    All Work
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ---------- Prev / Next ---------- */}
      <nav
        aria-label="More case studies"
        className="container-x mt-20 border-t border-line pt-8 sm:mt-28"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="glass group flex flex-col gap-2 rounded-panel p-6 transition-colors hover:border-line-strong"
            >
              <span className="eyebrow">← Previous</span>
              <span className="text-lg font-medium tracking-tight">
                {prev.title}
              </span>
              <span className="text-sm text-muted">{prev.category}</span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="glass group flex flex-col gap-2 rounded-panel p-6 text-right transition-colors hover:border-line-strong sm:items-end"
            >
              <span className="eyebrow">Next →</span>
              <span className="text-lg font-medium tracking-tight">
                {next.title}
              </span>
              <span className="text-sm text-muted">{next.category}</span>
            </Link>
          ) : null}
        </div>
      </nav>
      <div className="h-20 sm:h-28" />
    </article>
  );
}
