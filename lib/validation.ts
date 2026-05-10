export type SubscribePayload = {
  email: string;
  name?: string;
  source?: string;
};

export function normalizeSubscribePayload(input: unknown): SubscribePayload {
  if (!input || typeof input !== "object") {
    throw new Error("Payload inválido");
  }

  const body = input as Record<string, unknown>;
  const email = String(body.email ?? "").trim().toLowerCase();
  const name = String(body.name ?? "").trim();
  const source = String(body.source ?? "web").trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Email inválido");
  }

  return {
    email,
    name: name || undefined,
    source: source || "web"
  };
}
