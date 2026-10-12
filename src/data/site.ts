export const site = {
  name: "Syed Salman Ali",
  initials: "SSA",
  role: "Full Stack Developer",
  title: "Syed Salman Ali | Full Stack Developer",
  description:
    "Full Stack Developer building production web applications with React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL, plus payment integrations and custom WordPress, WooCommerce and Shopify solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Karachi, Pakistan",
  availability:
    "Available for professional opportunities and selected development projects.",
  email: "syedmsalman101@gmail.com",
  phone: "+92 307 9283471",
  phoneHref: "tel:+923079283471",
  cvPath: "/cv/Syed-Salman-Ali-CV.pdf",
  cvFileName: "Syed-Salman-Ali-CV.pdf",
  linkedin: "https://www.linkedin.com/in/syed-salman-ali-dev/",
  linkedinLabel: "linkedin.com/in/syed-salman-ali-dev",
  github: "https://github.com/syedsalmandev",
  githubLabel: "github.com/syedsalmandev",
} as const;

export const nav = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "Expertise", href: "/#expertise", id: "expertise" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

export const stats = [
  { value: "3+ Years", label: "Professional Experience" },
  { value: "50+", label: "Delivered Web Projects" },
  { value: "Full Stack", label: "Next.js • NestJS • PostgreSQL" },
  { value: "Payments", label: "Fiserv • CardPointe • WooCommerce" },
] as const;
