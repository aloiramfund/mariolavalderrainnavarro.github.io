"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/tracking";

type NewsletterFormProps = {
  source?: string;
  cta?: string;
  compact?: boolean;
};

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ source = "web", cta = "Recibir oportunidades", compact = false }: NewsletterFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        name: formData.get("name"),
        source
      })
    });

    const data = (await response.json().catch(() => null)) as { leadMagnetUrl?: string; message?: string } | null;

    if (!response.ok) {
      setState("error");
      setError(data?.message ?? "No se ha podido completar la suscripción. Inténtalo de nuevo.");
      return;
    }

    trackEvent("newsletter_signup", {
      event_category: "conversion",
      source
    });

    setState("success");
    window.location.href = data?.leadMagnetUrl ?? "/pdf/checklist-financiacion-impacto.pdf";
  }

  return (
    <form className={compact ? "newsletter-form compact" : "newsletter-form"} onSubmit={onSubmit}>
      {!compact && (
        <label>
          Nombre
          <input name="name" type="text" autoComplete="name" placeholder="Tu nombre" />
        </label>
      )}
      <label>
        Email profesional
        <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
      </label>
      <button className="btn" disabled={state === "loading"} type="submit">
        {state === "loading" ? "Enviando..." : cta}
      </button>
      {state === "error" && <p className="form-error">{error}</p>}
      {state === "success" && <p className="form-success">Listo. Te llevo al recurso.</p>}
    </form>
  );
}
