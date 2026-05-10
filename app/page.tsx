import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">LinkedIn → Web → Newsletter → Email → Call</p>
            <h1>Convierte atención en oportunidades de financiación.</h1>
            <p className="lead">Aloiramfund es el punto de entrada para organizaciones, fundadoras y proyectos que necesitan entender qué fondos, alianzas y marcos regulatorios pueden activar.</p>
            <NewsletterForm source="home_hero" cta="Recibir el checklist" />
          </div>
          <div className="hero-photo" aria-label="Mariola Valderraín Navarro" />
        </div>
      </section>

      <section className="section dark">
        <div className="container metrics">
          <div><strong>Top 50</strong><span>World Women Impact</span></div>
          <div><strong>+12K</strong><span>LinkedIn</span></div>
          <div><strong>Beehiiv</strong><span>Newsletter como canal principal</span></div>
          <div><strong>Call</strong><span>Solo tras intención clara</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">Funnel de conversión</p>
            <h2>Sin blog. Sin contenido por contenido. Cada página empuja a suscripción.</h2>
          </div>
          <div className="conversion-steps">
            <p><strong>1. LinkedIn:</strong> autoridad y distribución.</p>
            <p><strong>2. Web:</strong> captura con formulario propio y popup.</p>
            <p><strong>3. Beehiiv:</strong> relación por email y nurturing.</p>
            <p><strong>4. Agenda:</strong> llamada cuando el lead ya entiende el valor.</p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container cta-panel">
          <h2>Recibe oportunidades y criterios para financiar impacto.</h2>
          <p>Un recurso inicial y después análisis accionable desde Aloiramfund.</p>
          <Link className="btn" href="/newsletter">Ir a la newsletter</Link>
        </div>
      </section>
    </main>
  );
}
