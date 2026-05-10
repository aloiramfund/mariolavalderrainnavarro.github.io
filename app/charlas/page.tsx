export const metadata = { title: "Charlas" };

const talks = [
  ["Podcast Ecocreando", "Regeneración, impacto y cambio sistémico."],
  ["Podcast UCM Políticas", "Políticas públicas, juventud e innovación social."],
  ["Capital Radio", "Financiación, emprendimiento y liderazgo femenino."],
  ["Youth Speak Forum", "Liderazgo joven y acción climática."],
  ["Pitch Mulching Regenerativo", "Agricultura regenerativa y modelos financiables."],
  ["Dubái, COP28", "Acción climática, alianzas y visibilidad internacional."],
  ["Cruz Roja Alcalá de Henares", "Charla inspiracional para jóvenes."],
  ["Scouts del Colegio Viator", "Taller de impacto social."]
];

export default function CharlasPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Charlas</p>
          <h1>Divulgación, análisis y liderazgo público en impacto.</h1>
        </div>
      </section>
      <section className="section soft">
        <div className="container card-grid">
          {talks.map(([title, text]) => (
            <article className="card" key={title}><span className="meta">Intervención</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
