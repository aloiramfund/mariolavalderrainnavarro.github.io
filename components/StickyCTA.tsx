import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="sticky-cta">
      <span>Financiación, convocatorias y estrategia de impacto.</span>
      <Link href="/newsletter">Recibir oportunidades</Link>
    </div>
  );
}
