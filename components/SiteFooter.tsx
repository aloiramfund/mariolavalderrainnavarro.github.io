import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>Contacto</h4>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
        </div>
        <div>
          <h4>Sígueme</h4>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <h4>Políticas</h4>
          <Link href="/cookies">Cookies</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Mariola Valderraín Navarro.</div>
    </footer>
  );
}
