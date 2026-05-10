export const metadata = { title: "Sobre mí" };

export default function SobreMiPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Sobre mí</p>
          <h1>Estrategia de impacto con creatividad, disciplina y lectura institucional.</h1>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>Quién soy como persona</h2>
            <p>Mi forma de trabajar nace de una mezcla poco obvia: creatividad, disciplina y sensibilidad por los sistemas complejos. El bachillerato de artes me enseñó a mirar los problemas desde ángulos distintos y a convertir ideas abstractas en propuestas comprensibles.</p>
            <p>Durante años, el taekwondo me dio estructura mental: constancia, foco, resiliencia y respeto por el proceso. Esa experiencia sigue estando en mi manera de diseñar estrategia: observar, decidir, entrenar, ajustar y ejecutar.</p>
            <p>Hoy aplico esa combinación a financiación, innovación social y economía regenerativa, para que las buenas ideas encuentren arquitectura institucional, financiera y narrativa.</p>
          </div>
          <aside className="card">
            <span className="meta">Autoridad</span>
            <ul className="check-list">
              <li>COP28 en Dubái.</li>
              <li>Finalista Ashoka Changemakers.</li>
              <li>Reconocimiento al liderazgo en Vitoria.</li>
              <li>Jurado Premios Emprende Coca-Cola.</li>
              <li>Premios UCM y Docta UCM.</li>
              <li>HERA FemTech FPDI.</li>
              <li>MBA UCM y Fast MBA IEA.</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
