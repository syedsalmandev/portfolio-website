export const expertise = [
  {
    title: "Commerce & CMS",
    items: [
      "Shopify",
      "Liquid",
      "WordPress",
      "WooCommerce",
      "Elementor",
      "ACF",
      "Custom Post Types",
      "LearnDash",
      "Custom WordPress Functionality",
      "Payment Integrations",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & Application",
    items: [
      "Node.js",
      "Next.js API Routes",
      "REST APIs",
      "NestJS",
      "Express / Fastify",
      "API Integration",
    ],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    title: "Workflow",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "QA",
      "Debugging",
      "Deployment",
      "AI-Assisted Development",
    ],
  },
] as const;

export const about = {
  paragraphs: [
    "I'm a CMS & Full Stack Developer based in Karachi, Pakistan with 3+ years of professional web development experience.",
    "My work spans WordPress, WooCommerce, Shopify and modern application development using React, Next.js and TypeScript.",
    "I've worked across ecommerce, corporate websites, custom CMS functionality and application interfaces, with responsibilities extending into requirements, integrations, debugging, QA, deployment and ongoing maintenance.",
    "My focus is building maintainable digital products that look polished, perform reliably and remain practical for the teams managing them after launch.",
  ],
  education: [
    {
      title: "BS Computer Engineering",
      org: "Sir Syed University of Engineering & Technology (SSUET), Karachi",
      period: "2024 – 2028",
    },
    {
      title: "The Complete JavaScript Course",
      org: "Udemy",
      period: "2026",
    },
    {
      title: "Web & Mobile App Development",
      org: "Jawan Pakistan",
      period: "2023",
    },
    {
      title: "Web & Mobile App Development",
      org: "Usman Institute of Technology (UIT)",
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
    role: "CMS & Full Stack Developer",
    company: "BetaGen Technologies",
    period: "Jul 2026 – Present",
    current: true,
    summary:
      "Building and maintaining web solutions across Next.js/React applications and WordPress/CMS platforms with a focus on production-ready, responsive implementation.",
    highlights: [
      "Developing the frontend for a confidential premium domain marketplace: discovery, buy/leasing journeys, authenticated dashboards, orders, inquiries and account workflows.",
      "Implemented a modular, feature-based frontend architecture and a centralized typed dashboard data layer designed for future backend integration.",
      "Build reusable components from Figma with Next.js, React, TypeScript and Tailwind CSS; support server-side functionality through Next.js API Routes.",
      "Customize ecommerce/CMS functionality, payment flows and integrations including Shopify/Liquid, WooCommerce gateways and CardPointe/Fiserv troubleshooting.",
      "Collaborate with the CTO through Git-based code review while gathering client requirements, implementing revisions and performing QA before delivery.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Freelance / Self-Directed",
    period: "Jan 2025 – Jun 2026",
    summary:
      "Designed, developed and maintained 15+ WordPress websites across business, ecommerce and custom-functionality projects.",
    highlights: [
      "Built custom themes, plugins and shortcodes using WooCommerce, Elementor, ACF and custom post types.",
      "Handled requirements, Figma-to-WordPress implementation, deployment and hosting, domains/DNS, payment integrations and post-launch maintenance.",
    ],
  },
  {
    role: "Associate CMS Developer",
    company: "Geeks of Kolachi",
    period: "Oct 2024 – Dec 2024",
    summary:
      "Delivered end-to-end CMS websites including custom functionality, payment integrations and third-party tool integrations.",
    highlights: [
      "Built custom WordPress shortcodes and implemented Figma designs as responsive, functional CMS websites.",
      "Maintained and debugged live websites while coordinating requirements and revisions with clients; delivered 10+ CMS projects.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Avancera Solutions",
    period: "Jul 2023 – Sep 2024",
    summary:
      "Built CMS websites from scratch and developed foundational experience in frontend implementation and real-world debugging.",
    highlights: [
      "Collaborated with senior developers on production websites.",
      "Received Employee of the Month recognition.",
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
