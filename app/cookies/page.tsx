export const metadata = { title: "Política de cookies" };

export default function CookiesPage() {
  return <LegalPage title="Política de cookies" text="Esta web puede utilizar cookies técnicas y analíticas, incluyendo Google Analytics y Microsoft Clarity, para medir tráfico, conversión y comportamiento agregado." />;
}

function LegalPage({ title, text }: { title: string; text: string }) {
  return <main><section className="section"><div className="container card"><p className="kicker">Políticas</p><h1>{title}</h1><p>{text}</p><p>Puedes bloquear o eliminar cookies desde la configuración de tu navegador.</p></div></section></main>;
}
