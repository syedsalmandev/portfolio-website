export const expertise = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Responsive UI",
      "Component-Based Architecture",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Next.js API Routes",
      "RESTful APIs",
      "Zod Validation",
      "Authentication Flows",
    ],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    title: "Payments & Integrations",
    items: [
      "Fiserv Commerce Hub",
      "CardPointe",
      "WooCommerce Payment Gateways",
      "HMAC-SHA256 Signing",
      "Third-Party APIs",
    ],
  },
  {
    title: "CMS & Ecommerce",
    items: [
      "WordPress (Custom Plugins & Themes)",
      "WooCommerce",
      "Shopify (Liquid)",
      "ACF",
      "LearnDash",
      "Elementor",
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Code Review",
      "Postman",
      "Vercel",
      "Figma",
      "Modular / Feature-Based Architecture",
      "Debugging",
    ],
  },
] as const;

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer based in Karachi, Pakistan with 3+ years of experience building production web applications and 50+ delivered web projects.",
    "I'm currently building a premium domain marketplace with Next.js, React, TypeScript and PostgreSQL/Prisma, and engineering custom payment and LMS systems — including a Fiserv Commerce Hub integration with HMAC-SHA256 request signing.",
    "My strengths are modular frontend architecture, REST API development, third-party and payment integrations, and shipping client-facing products end to end — backed by deep WordPress, WooCommerce and Shopify experience.",
    "Alongside client work I'm pursuing a BS in Computer Engineering, with a focus on building maintainable products that perform reliably and stay practical for the teams running them.",
  ],
  education: [
    {
      title: "BS Computer Engineering",
      org: "Sir Syed University of Engineering & Technology (SSUET), Karachi · Coursework: Data Structures & Algorithms",
      period: "2024 – 2028 (Expected)",
    },
    {
      title: "The Complete JavaScript Course",
      org: "Udemy",
      period: "2026",
    },
    {
      title: "Web & Mobile App Development",
      org: "Jawan Pakistan & Usman Institute of Technology (UIT)",
      period: "2022 – 2023",
    },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack & CMS Developer",
    company: "BetaGen Technologies, Karachi",
    period: "Jul 2026 – Present",
    current: true,
    summary:
      "Building a premium domain marketplace (discover, buy, lease and manage domains) with Next.js 14 App Router, React, TypeScript, Tailwind CSS, Redux Toolkit and Zustand, alongside custom payment and LMS systems.",
    highlights: [
      "Restructured the production frontend from a flat file structure into a modular monolith with 8 feature modules (Domains, Auth, Orders, Payments, Leasing, Inquiries, Notifications, Settings) and a centralized typed data-access layer, decoupling UI from the backend.",
      "Develop server-side features with Next.js API Routes and NestJS, including Zod request validation, third-party API integration and PostgreSQL data access through Prisma.",
      "Engineered a custom payment plugin on the Fiserv Commerce Hub API with HMAC-SHA256 signed requests, a transactions admin dashboard, a freemium Pro/Free paywall and security hardening.",
      "Built SC Portal, a custom LMS/CRM plugin for course delivery and student management, and authored technical documentation enabling the non-technical client to manage course content independently.",
      "Integrate and debug third-party payment systems (CardPointe/Fiserv, WooCommerce gateways) and customize Shopify (Liquid) and WooCommerce functionality for client projects.",
      "Collaborate with the CTO on technical decisions; follow Git branching, pull-request code review and controlled merge workflows.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance (Remote)",
    period: "Jan 2025 – Jun 2026",
    summary:
      "Delivered 15+ client websites end to end: requirements, Figma-to-code implementation, deployment, hosting, domains/DNS and post-launch maintenance.",
    highlights: [
      "Built custom WordPress plugins, themes and shortcodes in PHP and MySQL, extending CMS functionality with custom post types, ACF and WooCommerce.",
      "Implemented and troubleshot payment gateway integrations for ecommerce clients, resolving checkout and third-party gateway issues.",
    ],
  },
  {
    role: "Associate CMS Developer",
    company: "Geeks of Kolachi, Karachi",
    period: "Oct 2024 – Dec 2024",
    summary:
      "Contributed to 10+ client projects, delivering custom functionality, payment integrations and third-party tool integrations.",
    highlights: [
      "Built reusable custom shortcodes and converted Figma designs into responsive, production-ready websites.",
      "Maintained and debugged live sites while coordinating requirements and revisions directly with clients.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Avancera Solutions, Karachi",
    period: "Jul 2023 – Sep 2024",
    summary:
      "Built responsive websites from scratch with HTML, CSS, JavaScript and WordPress alongside senior developers.",
    highlights: [
      "Diagnosed and fixed real-world production bugs.",
      "Recognized as Employee of the Month.",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "Understand the business, the audience and what the site actually has to do.",
  },
  {
    step: "02",
    title: "Plan",
    text: "Define structure, content model, integrations and the technical approach.",
  },
  {
    step: "03",
    title: "Build",
    text: "Implement clean, responsive interfaces and the functionality behind them.",
  },
  {
    step: "04",
    title: "Integrate",
    text: "Connect payments, APIs, email and third-party services reliably.",
  },
  {
    step: "05",
    title: "Test",
    text: "QA across devices and browsers; debug edge cases before anyone else finds them.",
  },
  {
    step: "06",
    title: "Launch",
    text: "Deploy, configure hosting and DNS, and hand over with clear documentation.",
  },
  {
    step: "07",
    title: "Support",
    text: "Maintain, improve and keep the product practical for the team running it.",
  },
] as const;
