export const site = {
  name: "Syed Salman Ali",
  initials: "SSA",
  role: "CMS & Full Stack Developer",
  title: "Syed Salman Ali | CMS & Full Stack Developer",
  description:
    "CMS & Full Stack Developer specializing in Shopify, WordPress, WooCommerce, React, Next.js, custom development, APIs and scalable web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Karachi, Pakistan",
  availability:
    "Available for professional opportunities and selected development projects.",
  email: "syedmsalman101@gmail.com",
  phone: "+92 307 9283471",
  phoneHref: "tel:+923079283471",
  cvPath: "/cv/Syed-Salman-Ali-CV.pdf",
  cvFileName: "Syed-Salman-Ali-CV.pdf",
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
  { value: "50+", label: "Web & CMS Projects" },
  { value: "Shopify + WooCommerce", label: "Ecommerce Development" },
  { value: "Full Stack", label: "Frontend • APIs • Applications" },
] as const;
