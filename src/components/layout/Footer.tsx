import Link from "next/link";

import { projects } from "@/data/projects";
import { nav, site } from "@/data/site";

import { Monogram } from "./Monogram";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper/60">
      <div className="container-x py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Monogram />
              <span className="text-[0.9375rem] font-medium tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              {site.role}. Building production web applications, APIs and
              payment integrations that stay practical for the teams running
              them.
            </p>
            <p className="eyebrow mt-6">{site.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="eyebrow mb-4">Navigate</p>
              <ul className="space-y-2.5">
                {nav.map((n) => (
                  <li key={n.id}>
                    <Link
                      href={n.href}
                      className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Case Studies</p>
              <ul className="space-y-2.5">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/work/${p.slug}`}
                      className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                    >
                      {p.confidential ? "Domain Marketplace" : p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow mb-4">Contact</p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline break-all text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.cvPath}
                    download={site.cvFileName}
                    className="link-underline text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    Download CV (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
