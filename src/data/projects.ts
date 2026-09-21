import type { StaticImageData } from "next/image";

import alphaInternational from "@/assets/projects/alpha-international.webp";
import logicielServices from "@/assets/projects/logiciel-services.webp";
import shermanMedical from "@/assets/projects/sherman-medical.webp";
import silversteinSongs from "@/assets/projects/silverstein-songs.webp";
import tabarukatCollections from "@/assets/projects/tabarukat-collections.webp";
import tabarukatMobile from "@/assets/projects/tabarukat-mobile.webp";
import tabarukatProducts from "@/assets/projects/tabarukat-products.webp";
import triplePromise from "@/assets/projects/triple-promise.webp";

export type Screenshot = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type ProjectStatus = "Live" | "In Development";

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  label?: string;
  role: string;
  status: ProjectStatus;
  year: string;
  summary: string;
  /** One-line hook used on cards */
  tagline: string;
  tags: string[];
  liveUrl?: string;
  confidential?: boolean;
  confidentialNote?: string;
  /** Primary desktop screenshot, if any. Confidential projects render a sanitized illustration instead. */
  cover?: Screenshot;
  screenshots: Screenshot[];
  mobileScreens: Screenshot[];
  videoUrl?: string;
  /** Case-study narrative */
  overview: string[];
  challenge: string[];
  myRole: string[];
  solution: string[];
  implementation: CaseStudySection[];
  keyFeatures: string[];
  technology: string[];
  /** Optional emphasised callout rendered after the implementation sections */
  callout?: { title: string; body: string[]; bullets?: string[] };
  /** Only used by the confidential marketplace study */
  architecture?: {
    modules: string[];
    folders: { path: string; description: string }[];
    completedPublic: string[];
    completedDashboard: string[];
    sharedUx: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "tabarukat-e-masomeen",
    index: "01",
    title: "Tabarukat E Masomeen AS",
    category: "Shopify Ecommerce",
    label: "Featured Ecommerce Project",
    role: "Shopify Developer",
    status: "Live",
    year: "2026",
    liveUrl: "https://www.tabarukatemasomeenas.com/",
    tagline:
      "A large-catalog Shopify storefront built around merchant-editable sections.",
    summary:
      "Developed and customized a large-catalog Shopify ecommerce storefront supporting 1,020+ products across multiple collections. The storefront uses Shopify Liquid and customized reusable sections designed to keep day-to-day content manageable by the client without requiring code changes for routine updates.",
    tags: [
      "Shopify",
      "Liquid",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Ecommerce Development",
    ],
    cover: {
      src: tabarukatProducts,
      alt: "Tabarukat E Masomeen AS Shopify storefront products page showing the catalog grid, filters and sorting",
    },
    screenshots: [
      {
        src: tabarukatProducts,
        alt: "Products listing page with 1,020 products, view switcher and alphabetical sorting",
        caption:
          "Catalog listing — 1,020+ products with layout switcher, sorting and collection filters",
      },
      {
        src: tabarukatCollections,
        alt: "Mega menu showing collection arrivals with product imagery and collection grid below",
        caption:
          "Collection navigation — arrivals mega menu and collection architecture",
      },
    ],
    mobileScreens: [
      {
        src: tabarukatMobile,
        alt: "Mobile view of the About Us page with hero banner, breadcrumb bar and journey copy",
        caption:
          "Mobile — About page with breadcrumb bar and responsive typography",
      },
    ],
    overview: [
      "Tabarukat E Masomeen AS is a Shopify storefront for a long-established brand with an unusually deep catalog: more than 1,020 products spread across dozens of collections, with frequent new arrivals and seasonal promotions.",
      "The engagement covered theme customization, Liquid development and the full customer-facing shopping experience — from navigation and search through to accounts, wishlist, compare and checkout.",
    ],
    challenge: [
      "A catalog of this size stresses every part of a storefront. Collection navigation has to stay understandable, product presentation has to remain consistent across very different product types, and the client needs to keep publishing new arrivals and promotions without waiting on a developer.",
      "The storefront also had to perform well on mobile, where the majority of customers browse, while retaining the visual richness the brand expected on desktop.",
    ],
    myRole: [
      "I owned the Shopify implementation end to end: theme customization, Liquid section development, storefront functionality, responsive layouts and the integrations required for support and marketing.",
      "Work was delivered directly against client requirements, with revisions, QA and post-launch fixes handled as part of the engagement.",
    ],
    solution: [
      "The storefront was built on customized, reusable Shopify sections with schema-driven settings. Every recurring content block — hero banners, arrivals rows, image and video features, promotional strips — is a merchant-editable section rather than hard-coded markup.",
      "Collection architecture and mega-menu navigation were structured so customers can move through a large catalog quickly, supported by search, sorting, layout switching and consistent product cards with sale pricing.",
    ],
    implementation: [
      {
        title: "Shopify Architecture",
        body: [
          "The theme was organized around a small set of well-defined Liquid sections and reusable snippets. Sections expose settings and blocks through schema so layouts can be composed in the theme editor, while shared snippets keep product cards, pricing and badges consistent everywhere they appear.",
        ],
        bullets: [
          "Section-based templates for home, collection, product and content pages",
          "Shared snippets for product cards, price display, sale badges and ratings",
          "Schema-driven settings for spacing, colors, media and layout variants",
        ],
      },
      {
        title: "Large Catalog",
        body: [
          "With 1,020+ products, the collection experience needed clear structure. Collections were grouped into a navigable hierarchy with an arrivals mega menu, and listing pages support sorting, grid density switching and collection filtering so customers can narrow down quickly.",
        ],
        bullets: [
          "Collection hierarchy and arrivals mega menu",
          "Sort, layout switcher and product counts on listing pages",
          "Consistent product cards with sale pricing and quick actions",
        ],
      },
      {
        title: "Merchant Editability",
        body: [
          "Routine changes — swapping a hero image, adding a video feature, announcing a promotion or reordering collections — are handled entirely in the Shopify theme editor. No Liquid edits are needed for day-to-day content updates.",
        ],
        bullets: [
          "Customizable image and video sections",
          "Editable promotional strips and newsletter capture",
          "Block-based sections for arrivals and featured collections",
        ],
      },
      {
        title: "Responsive Experience",
        body: [
          "Mobile layouts were designed intentionally rather than as collapsed desktop views: a compact header with search and cart, a breadcrumb bar, full-width hero banners and readable typography on narrow screens.",
        ],
        bullets: [
          "Mobile-first section layouts and navigation",
          "Touch-friendly product grids and controls",
          "WhatsApp support entry point available on every screen",
        ],
      },
    ],
    keyFeatures: [
      "Shopify theme customization",
      "Liquid development",
      "Reusable custom sections",
      "Merchant-editable sections",
      "Customizable image / video sections",
      "Product presentation",
      "Collection architecture",
      "Ecommerce navigation",
      "Responsive layouts",
      "Search",
      "Customer accounts",
      "Cart and checkout experience",
      "Wishlist",
      "Compare",
      "Sale pricing",
      "WhatsApp integration",
      "Newsletter capture",
      "Responsive mobile implementation",
    ],
    technology: [
      "Shopify",
      "Liquid",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Ecommerce Development",
    ],
    callout: {
      title: "Built for Client Independence",
      body: [
        "Reusable Shopify sections and configurable settings allow the merchant to manage normal storefront content without editing Liquid code. Banners, arrivals, image and video features, promotions and newsletter capture are all composed and updated from the theme editor.",
        "Developer involvement is reserved for genuinely new functionality — not for the routine updates a growing catalog demands every week.",
      ],
      bullets: [
        "Schema-driven sections with clear, labelled settings",
        "Block-based layouts the client can reorder, add or remove",
        "Consistent components so new content matches the design system automatically",
      ],
    },
  },
  {
    slug: "premium-domain-marketplace",
    index: "02",
    title: "Confidential Premium Domain Marketplace",
    category: "Next.js Application",
    label: "In Development",
    role: "Frontend Developer",
    status: "In Development",
    year: "2026",
    confidential: true,
    confidentialNote:
      "Client and product identity withheld due to confidentiality.",
    tagline:
      "A premium domain marketplace with a dedicated customer dashboard, built on a modular frontend architecture.",
    summary:
      "Developing the frontend experience for a premium domain marketplace where customers can discover, browse, buy and lease premium domains and manage related activity through a dedicated customer dashboard.",
    tags: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "Motion",
    ],
    screenshots: [],
    mobileScreens: [],
    overview: [
      "A premium domain marketplace where customers can discover, browse, buy and lease premium domains, then manage orders, lease requests, inquiries and account settings through an authenticated customer dashboard.",
      "The project is currently in development. Screenshots are intentionally not shown; the visuals on this page are sanitized representations of the interface structure.",
    ],
    challenge: [
      "The product has two distinct surfaces — a public marketing and discovery site and a private customer dashboard — that need to share a design language, a component library and state, while remaining maintainable as the feature set grows.",
      "The production backend is not yet connected, so the dashboard had to be built in a way that lets the real data source be introduced later without rebuilding the screens.",
    ],
    myRole: [
      "Frontend Developer responsible for the application architecture, reusable UI components, the public website, the customer dashboard and selected server-side functionality through Next.js API Routes.",
      "Work is delivered through Git-based code review with the CTO, alongside requirement gathering, revisions and QA.",
    ],
    solution: [
      "The application is structured as a modular monolith: routes live in the App Router, feature logic is grouped into self-contained modules, and shared UI is kept in a common component layer.",
      "The dashboard consumes a centralized, typed data-access layer. Screens call asynchronous typed functions instead of depending on mock data directly, so the underlying source can be swapped for the production API without major UI restructuring.",
    ],
    implementation: [
      {
        title: "Modular Monolith Architecture",
        body: [
          "Each feature — domains, auth, orders, payments, leasing, inquiries, notifications and settings — owns its components, hooks, types and data functions inside a dedicated module. Routes under src/app compose those modules, and src/components holds the shared design-system primitives.",
        ],
      },
      {
        title: "Typed Data-Access Layer",
        body: [
          "All dashboard data flows through a single dashboard-api.ts. Every function is asynchronous and fully typed, and screens are written against those signatures only. Today the layer resolves from structured mock data; in production it will resolve from the backend API, with the UI unchanged.",
        ],
      },
      {
        title: "State & Interactions",
        body: [
          "Cart state is managed with Redux Toolkit, temporary auth state with Zustand, and interface motion with Motion. Search suggestions, responsive filters with a mobile disclosure pattern and custom Select components were built as reusable, accessible primitives.",
        ],
      },
      {
        title: "Server-Side Functionality",
        body: [
          "Inquiry submissions are handled through a Next.js API Route that validates the payload and dispatches email via Nodemailer over SMTP — the first of the server-side pieces that will grow as the backend comes online.",
        ],
      },
    ],
    keyFeatures: [
      "Domain discovery, browse and search suggestions",
      "Buy and leasing journeys",
      "Authenticated customer dashboard",
      "Orders and order detail",
      "Lease requests",
      "Inquiries with email dispatch",
      "Account settings",
      "Responsive filters with mobile disclosure",
      "Custom Select components",
      "Cart using Redux Toolkit",
      "Temporary auth state using Zustand",
    ],
    technology: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "Motion",
      "Next.js App Router",
      "Next.js API Routes",
      "Nodemailer / SMTP",
      "Git",
    ],
    architecture: {
      modules: [
        "Domains",
        "Auth",
        "Orders",
        "Payments",
        "Leasing",
        "Inquiries",
        "Notifications",
        "Settings",
      ],
      folders: [
        { path: "src/app/", description: "Routes (App Router)" },
        { path: "src/modules/", description: "Feature modules" },
        { path: "src/components/", description: "Shared UI" },
      ],
      completedPublic: [
        "Home",
        "Buy",
        "Leasing",
        "Premium",
        "Browse",
        "About",
        "FAQ",
        "Contact",
        "Thank You",
        "Login",
      ],
      completedDashboard: [
        "Dashboard Home",
        "Orders",
        "Order Detail",
        "Lease Requests",
        "Inquiries",
        "Inquiry Detail",
        "New Inquiry",
        "Account Settings",
        "Browse Domains",
      ],
      sharedUx: [
        "Search suggestions",
        "Responsive filters",
        "Mobile filter disclosure",
        "Custom Select components",
        "Cart using Redux Toolkit",
        "Temporary auth state using Zustand",
        "Responsive UI components",
        "Inquiry email via Next.js API Route + Nodemailer/SMTP",
      ],
    },
  },
  {
    slug: "alpha-international",
    index: "03",
    title: "Alpha International",
    category: "WordPress / WooCommerce Ecommerce",
    role: "WordPress Developer",
    status: "Live",
    year: "2025",
    liveUrl: "https://alpha-int.com/",
    tagline:
      "Home fittings ecommerce covering kitchen, bathroom, accessories and technical resources.",
    summary:
      "A home fittings ecommerce and product website covering kitchen, bathroom and accessory ranges, with a WooCommerce catalog, quick-view product browsing and downloadable technical resources managed through the CMS.",
    tags: ["WordPress", "WooCommerce", "Elementor", "ACF", "Responsive UI"],
    cover: {
      src: alphaInternational,
      alt: "Alpha International homepage hero over a bright kitchen photo with navigation for kitchen, bathroom, accessories and DXF files",
    },
    screenshots: [
      {
        src: alphaInternational,
        alt: "Alpha International homepage with kitchen hero, category navigation and product section",
        caption:
          "Homepage — category navigation, hero and featured product presentation",
      },
    ],
    mobileScreens: [],
    overview: [
      "Alpha International manufactures and sells kitchen and bathroom fittings. The website combines a WooCommerce product catalog with category landing pages, accessory ranges and a library of downloadable technical files for specifiers and installers.",
    ],
    challenge: [
      "Products needed to be browsable both as a shop and as a specification resource, with technical downloads sitting alongside the catalog and the content team able to manage categories, products and resources without developer involvement.",
    ],
    myRole: [
      "WordPress developer responsible for the WooCommerce implementation, category and product templates, quick-view functionality, responsive UI and the CMS structure for technical resources.",
    ],
    solution: [
      "A WooCommerce catalog organized into kitchen, bathroom and accessory categories, with quick-view product browsing, dedicated product pages and a downloadable-resources area, all managed as CMS content.",
    ],
    implementation: [
      {
        title: "Catalog & Product Pages",
        body: [
          "Category templates present product ranges with consistent imagery and quick-view browsing, while product pages expose specifications, variants and related items.",
        ],
      },
      {
        title: "Technical Resources",
        body: [
          "Downloadable technical files are managed as CMS content so new resources can be published alongside the products they belong to.",
        ],
      },
    ],
    keyFeatures: [
      "WooCommerce",
      "Product catalog",
      "Categories",
      "Product pages",
      "Quick-view functionality",
      "Responsive UI",
      "CMS-managed content",
      "Technical / downloadable resources",
    ],
    technology: ["WordPress", "WooCommerce", "Elementor", "ACF", "PHP", "CSS"],
  },
  {
    slug: "silverstein-songs",
    index: "04",
    title: "Silverstein Songs",
    category: "WordPress / Media Platform",
    role: "WordPress Developer",
    status: "Live",
    year: "2025",
    liveUrl: "https://silversteinsongs.com/",
    tagline:
      "A media-rich catalog site for a Tony-nominated songwriter with audio playback and co-writer content.",
    summary:
      "A WordPress media platform presenting a songwriter's catalog with audio playback, song and co-writer content, new releases and dynamic, media-rich pages implemented responsively.",
    tags: ["WordPress", "Media", "Audio", "Custom Post Types", "Responsive"],
    cover: {
      src: silversteinSongs,
      alt: "Silverstein Songs homepage with a portrait of the songwriter writing with a pencil and calls to action for all songs and radio",
    },
    screenshots: [
      {
        src: silversteinSongs,
        alt: "Silverstein Songs homepage hero with portrait, headline and All Songs / Radio calls to action",
        caption:
          "Homepage — full-bleed portrait, catalog entry points and radio",
      },
    ],
    mobileScreens: [],
    overview: [
      "Silverstein Songs is the catalog site for songwriter Jerry Silverstein. It presents songs, co-writers and new releases with in-page audio playback across a media-rich, responsive WordPress implementation.",
    ],
    challenge: [
      "Song, co-writer and release content are interrelated and change frequently, and audio has to play reliably within a design led by large imagery.",
    ],
    myRole: [
      "WordPress developer for the content structure, media-rich frontend, audio playback integration and responsive implementation.",
    ],
    solution: [
      "Structured content types for songs, co-writers and releases feed dynamic listings and detail pages, with audio playback embedded into the catalog and a responsive, image-led frontend.",
    ],
    implementation: [
      {
        title: "Catalog & Playback",
        body: [
          "Songs are structured as content with audio, credits and co-writer relationships, allowing dynamic listings, a full catalog view and playback directly in the page.",
        ],
      },
      {
        title: "Media-Rich Frontend",
        body: [
          "Large photography, video and audio were balanced against readable typography and fast, responsive layouts.",
        ],
      },
    ],
    keyFeatures: [
      "Music catalog",
      "Audio playback",
      "Song content",
      "Co-writer content",
      "New releases",
      "Dynamic content",
      "Responsive WordPress implementation",
      "Media-rich frontend",
    ],
    technology: [
      "WordPress",
      "Custom Post Types",
      "ACF",
      "PHP",
      "JavaScript",
      "CSS",
    ],
  },
  {
    slug: "triple-promise",
    index: "05",
    title: "Triple Promise",
    category: "WordPress / Education & Performing Arts",
    role: "WordPress Developer",
    status: "Live",
    year: "2025",
    liveUrl: "https://triplepromise.com/",
    tagline:
      "A performing arts academy site with classes, shows, gallery, auditions and mailing list.",
    summary:
      "A WordPress website for a performing arts academy covering classes, shows and productions, a gallery, auditions, jobs, blog and mailing-list functionality, implemented responsively.",
    tags: ["WordPress", "Elementor", "Mailing List", "Blog", "Responsive"],
    cover: {
      src: triplePromise,
      alt: "Triple Promise shows page with a colorful gradient header, Shows headline and an upcoming production listing",
    },
    screenshots: [
      {
        src: triplePromise,
        alt: "Triple Promise shows page listing upcoming productions with poster, dates and venue",
        caption:
          "Shows — production listings with dates, venue and ticket entry points",
      },
    ],
    mobileScreens: [],
    overview: [
      "Triple Promise is a performing arts academy. The site promotes classes and productions, showcases student work through a gallery, and supports auditions, jobs and a blog alongside a mailing list.",
    ],
    challenge: [
      "The academy publishes on a seasonal rhythm — new classes, shows and audition calls — so content areas had to be simple for staff to update while keeping a vibrant, on-brand presentation.",
    ],
    myRole: [
      "WordPress developer for page templates, content structure, mailing-list integration and responsive implementation.",
    ],
    solution: [
      "Dedicated sections for classes, shows, gallery, auditions, jobs and blog, each editable through the CMS, with mailing-list capture integrated into the site.",
    ],
    implementation: [
      {
        title: "Content Areas",
        body: [
          "Classes, shows and productions, gallery, auditions, jobs and blog were built as distinct, CMS-managed areas with shared components for listings and detail pages.",
        ],
      },
      {
        title: "Mailing List",
        body: [
          "Mailing-list capture was integrated so the academy can reach families and students about upcoming productions and enrollment.",
        ],
      },
    ],
    keyFeatures: [
      "Classes",
      "Shows",
      "Productions",
      "Gallery",
      "Auditions",
      "Jobs",
      "Blog",
      "Mailing-list functionality",
      "Responsive WordPress implementation",
    ],
    technology: ["WordPress", "Elementor", "PHP", "CSS", "JavaScript"],
  },
  {
    slug: "sherman-medical",
    index: "06",
    title: "Sherman Medical",
    category: "WordPress / Healthcare",
    role: "WordPress Developer",
    status: "Live",
    year: "2025",
    liveUrl: "https://shermed.com/",
    tagline:
      "A walk-in medical care website focused on clear services, hours and call-to-action paths.",
    summary:
      "A healthcare website for a walk-in clinic presenting urgent care, general medical care and occupational health services, with location and hours, prominent call CTAs and a mobile-first responsive design.",
    tags: ["WordPress", "Healthcare", "Elementor", "Responsive"],
    cover: {
      src: shermanMedical,
      alt: "Sherman Medical homepage hero with Walk-In Medical Care headline over a doctor with a stethoscope and call-to-action tiles",
    },
    screenshots: [
      {
        src: shermanMedical,
        alt: "Sherman Medical homepage with service headline, pricing highlights, call button and hours / visit / call tiles",
        caption:
          "Homepage — service messaging, hours strip and call-to-action tiles",
      },
    ],
    mobileScreens: [],
    overview: [
      "Sherman Medical is a walk-in clinic in Sherman, Texas. The site is built to answer the questions patients arrive with — what services are offered, when the clinic is open, where it is and how to call.",
    ],
    challenge: [
      "Healthcare visitors are frequently on mobile and in a hurry. Services, hours, location and phone had to be immediately visible and tappable without clutter.",
    ],
    myRole: [
      "WordPress developer for the service presentation, layout, call CTAs and responsive, mobile-first implementation.",
    ],
    solution: [
      "A service-led homepage with a hours strip in the header, click-to-call buttons throughout, and clear paths for urgent care, general medical care and occupational health.",
    ],
    implementation: [
      {
        title: "Service Presentation",
        body: [
          "Urgent care, general medical care and occupational health are presented as distinct services with supporting detail pages and consistent CTAs.",
        ],
      },
      {
        title: "Mobile Usability",
        body: [
          "Hours, location and phone are surfaced in the header and hero, with tap-to-call actions sized for mobile.",
        ],
      },
    ],
    keyFeatures: [
      "Healthcare service presentation",
      "Urgent care",
      "General medical care",
      "Occupational health",
      "Location / hours",
      "Call CTAs",
      "Responsive design",
      "Mobile usability",
    ],
    technology: ["WordPress", "Elementor", "PHP", "CSS"],
  },
  {
    slug: "logiciel-services",
    index: "07",
    title: "Logiciel Services",
    category: "WordPress / Corporate Technology",
    role: "WordPress Developer",
    status: "Live",
    year: "2025",
    liveUrl: "https://logiciel-services.com/",
    tagline:
      "A corporate technology website covering services, careers, culture and company information.",
    summary:
      "A corporate website for a software services company presenting what they do, careers, company information and culture, with responsive layouts and CMS-managed content.",
    tags: ["WordPress", "Corporate", "Elementor", "Responsive"],
    cover: {
      src: logicielServices,
      alt: "Logiciel Services homepage with Innovating the Future headline, dotted world map and layered technology imagery",
    },
    screenshots: [
      {
        src: logicielServices,
        alt: "Logiciel Services homepage hero with large headline, supporting copy and layered image composition",
        caption:
          "Homepage — editorial hero, company positioning and navigation",
      },
    ],
    mobileScreens: [],
    overview: [
      "Logiciel Services is a software development company. The site communicates who they are, what they do, career opportunities and life at the company, with content managed by their team.",
    ],
    challenge: [
      "The company needed a polished corporate presence with clear service and careers sections, easily maintained by non-technical staff as roles and services change.",
    ],
    myRole: [
      "WordPress developer for the layouts, content structure, careers and services sections and responsive implementation.",
    ],
    solution: [
      "Clean, editorial layouts built as CMS-managed sections for services, careers, company information and culture.",
    ],
    implementation: [
      {
        title: "Corporate Content",
        body: [
          "Who We Are, What We Do, Careers, Life at Logiciel and Contact were built as structured, editable sections with a consistent visual system.",
        ],
      },
    ],
    keyFeatures: [
      "Corporate website",
      "Services",
      "Careers",
      "Company information",
      "Culture",
      "Responsive layouts",
      "CMS content management",
    ],
    technology: ["WordPress", "Elementor", "PHP", "CSS"],
  },
];

export const featuredProjects = projects.slice(0, 2);
export const secondaryProjects = projects.slice(2);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

export const additionalWork = {
  title: "Additional Client Work",
  copy: "Beyond the projects shown here, I have contributed to and delivered numerous CMS, ecommerce and custom web projects across different industries. Some projects cannot be displayed publicly because of confidentiality, discontinued websites, restricted staging environments or private systems.",
  stat: { value: "50+", label: "Web & CMS Projects" },
  areas: [
    "Ecommerce",
    "Corporate",
    "Healthcare",
    "Education",
    "Professional Services",
    "Content Platforms",
    "Custom WordPress",
    "WooCommerce",
    "Payment Integrations",
    "API Integrations",
    "Production Maintenance",
  ],
};
