import Link from "next/link";

export const metadata = { title: "Especialización" };

export default function EspecializacionPage() {
  return (
    <main>
      <section className="page-hero dark-page">
        <div className="container">
          <p className="kicker">Metodología clínica</p>
          <h1>Orden, criterio y financiación para proyectos que necesitan escalar.</h1>
          <div className="service-list">
            <article className="service-item"><span>001</span><div><h2>Fundraising</h2><p>Estrategias para fondos públicos, europeos, filantrópicos y corporativos.</p></div></article>
            <article className="service-item"><span>002</span><div><h2>Análisis regulatorio</h2><p>Traducción de prioridades institucionales en oportunidades financiables.</p></div></article>
            <article className="service-item"><span>003</span><div><h2>FemTech y alianzas</h2><p>Preparación de propuestas para redes, jurados, instituciones e inversores.</p><div className="micro-case">Caso: HERA, iniciativa FemTech reconocida en el entorno FPDI.</div></div></article>
          </div>
          <Link className="btn" href="/newsletter">Entrar por newsletter</Link>
        </div>
      </section>
    </main>
  );
}
