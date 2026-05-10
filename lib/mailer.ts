import type { SubscribePayload } from "@/lib/validation";
import { siteConfig } from "@/lib/config";

type EmailMessage = {
  to: string;
  subject: string;
  text: string;
};

async function sendEmail(message: EmailMessage) {
  if (!process.env.EMAIL_API) {
    return { skipped: true };
  }

  const response = await fetch(process.env.EMAIL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.EMAIL_API_KEY ? { Authorization: `Bearer ${process.env.EMAIL_API_KEY}` } : {})
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL ?? siteConfig.email,
      ...message
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email API error ${response.status}: ${text}`);
  }

  return response.json().catch(() => ({ ok: true }));
}

export function sendAutoReply(payload: SubscribePayload) {
  return sendEmail({
    to: payload.email,
    subject: "Tu checklist de financiación de impacto",
    text: `Hola${payload.name ? ` ${payload.name}` : ""},\n\nGracias por sumarte a Aloiramfund.\n\nAquí tienes el recurso prometido: ${process.env.NEXT_PUBLIC_SITE_URL ?? ""}${siteConfig.leadMagnetUrl}\n\nUn abrazo,\nMariola`
  });
}

export function sendInternalLeadNotification(payload: SubscribePayload) {
  return sendEmail({
    to: process.env.INTERNAL_LEAD_EMAIL ?? siteConfig.email,
    subject: "Nuevo lead newsletter desde la web",
    text: `Nuevo lead del funnel:\n\nNombre: ${payload.name ?? "-"}\nEmail: ${payload.email}\nFuente: ${payload.source ?? "web"}`
  });
}
