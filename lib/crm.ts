import type { SubscribePayload } from "@/lib/validation";

export async function saveLeadToCrm(payload: SubscribePayload) {
  if (!process.env.CRM_URL) {
    return { skipped: true };
  }

  const response = await fetch(process.env.CRM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.CRM_API_KEY ? { Authorization: `Bearer ${process.env.CRM_API_KEY}` } : {})
    },
    body: JSON.stringify({
      ...payload,
      source: payload.source ?? "web",
      funnel: "linkedin-web-newsletter-email-call",
      createdAt: new Date().toISOString()
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`CRM error ${response.status}: ${text}`);
  }

  return response.json().catch(() => ({ ok: true }));
}
