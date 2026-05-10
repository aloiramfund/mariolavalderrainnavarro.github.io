import { siteConfig } from "@/lib/config";

export function FloatingWhatsApp() {
  const text = encodeURIComponent("Hola Mariola, he visto tu web y me gustaría hacerte una consulta.");

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  );
}
