import { CalEmbed } from "@/components/CalEmbed";

export const metadata = {
  title: "Agenda",
  description: "Agenda una consulta con Mariola Valderraín Navarro."
};

export default function AgendaPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Call</p>
          <h1>Agenda una conversación cuando ya tengas claro el encaje.</h1>
          <p className="lead">La newsletter filtra contexto; la llamada sirve para concretar estrategia, tiempos y posibilidades reales.</p>
          <CalEmbed />
        </div>
      </section>
    </main>
  );
}
