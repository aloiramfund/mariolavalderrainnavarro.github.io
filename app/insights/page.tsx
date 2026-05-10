import { getBeehiivPosts } from "@/lib/beehiiv";

export const metadata = {
  title: "Insights",
  description: "Últimos análisis de Aloiramfund desde Beehiiv."
};

export default async function InsightsPage() {
  const posts = await getBeehiivPosts();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Insights</p>
          <h1>Newsletters indexables, no blog.</h1>
          <p className="lead">Este apartado lista contenidos publicados en Beehiiv para que la web sea útil, escaneable y orientada a conversión.</p>
        </div>
      </section>
      <section className="section soft">
        <div className="container card-grid">
          {posts.length === 0 ? (
            <article className="card">
              <span className="meta">Aloiramfund</span>
              <h3>Configura Beehiiv para activar los insights</h3>
              <p>Añade BEEHIIV_API_KEY y BEEHIIV_PUBLICATION_ID en Vercel para listar automáticamente tus publicaciones.</p>
            </article>
          ) : (
            posts.map((post) => (
              <a className="card" href={post.web_url ?? post.url ?? "#"} key={post.id} target="_blank" rel="noreferrer">
                <span className="meta">Newsletter</span>
                <h3>{post.title ?? "Aloiramfund"}</h3>
                <p>{post.subtitle ?? "Leer análisis completo en Beehiiv."}</p>
              </a>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
