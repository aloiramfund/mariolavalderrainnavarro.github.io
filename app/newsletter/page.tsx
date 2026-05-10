import { BeehiivEmbed } from "@/components/BeehiivEmbed";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: "Newsletter",
  description: "Suscríbete a Aloiramfund para recibir oportunidades de financiación de impacto."
};

export default function NewsletterPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container newsletter-layout">
          <div>
            <p className="kicker">Aloiramfund</p>
            <h1>Recibe oportunidades de financiación que merecen una segunda mirada.</h1>
            <p className="lead">Análisis breve, criterio institucional y señales útiles para proyectos de impacto, FemTech, clima y economía regenerativa.</p>
            <NewsletterForm source="newsletter_page" cta="Recibir el checklist" />
          </div>
          <div>
            <BeehiivEmbed />
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container proof-grid">
          <article><h3>Para decidir mejor</h3><p>Convocatorias, encaje estratégico y alertas que importan.</p></article>
          <article><h3>Para preparar propuestas</h3><p>Relato, evidencia, alianzas y estructura financiable.</p></article>
          <article><h3>Para llegar a call con contexto</h3><p>La agenda aparece cuando ya hay intención clara.</p></article>
        </div>
      </section>
    </main>
  );
}
