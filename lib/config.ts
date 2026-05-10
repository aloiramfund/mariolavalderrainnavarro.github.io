export const siteConfig = {
  name: "Mariola Valderraín Navarro",
  email: "aloiramfund@gmail.com",
  phone: "+34 666 305 194",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34666305194",
  linkedin: "https://www.linkedin.com/in/mariola-valderrain-navarro/",
  instagram: "https://www.instagram.com/mariolavn/",
  beehiivUrl: "https://aloiramfund.beehiiv.com/",
  leadMagnetUrl: process.env.LEAD_MAGNET_URL ?? "/pdf/checklist-financiacion-impacto.pdf"
};

export const navItems = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/insights", label: "Insights" },
  { href: "/especializacion", label: "Especialización" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/agenda", label: "Agenda" }
];
