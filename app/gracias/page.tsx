import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "Gracias",
  description: "Gracias por suscribirte a Aloiramfund."
};

export default function GraciasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container cta-panel">
          <p className="kicker">Suscripción recibida</p>
          <h1>Gracias. Ya estás dentro de Aloiramfund.</h1>
          <p className="lead">Puedes descargar el checklist y, si ya tienes una oportunidad concreta, pasar a agenda.</p>
          <div className="actions">
            <a className="btn" href={siteConfig.leadMagnetUrl}>Descargar checklist</a>
            <Link className="btn secondary" href="/agenda">Ver agenda</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
