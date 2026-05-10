import type { SubscribePayload } from "@/lib/validation";

const BEEHIIV_API_BASE = "https://api.beehiiv.com/v2";

type BeehiivPost = {
  id: string;
  title?: string;
  subtitle?: string;
  slug?: string;
  web_url?: string;
  url?: string;
  publish_date?: number;
  created?: number;
};

type BeehiivPostsResponse = {
  data?: BeehiivPost[];
};

function getBeehiivEnv() {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    throw new Error("Faltan BEEHIIV_API_KEY o BEEHIIV_PUBLICATION_ID");
  }

  return { apiKey, publicationId };
}

export async function createBeehiivSubscriber(payload: SubscribePayload) {
  const { apiKey, publicationId } = getBeehiivEnv();

  const response = await fetch(`${BEEHIIV_API_BASE}/publications/${publicationId}/subscriptions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: payload.email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: "web",
      referring_site: process.env.NEXT_PUBLIC_SITE_URL ?? "web",
      custom_fields: [
        ...(payload.name ? [{ name: "name", value: payload.name }] : []),
        { name: "source", value: payload.source ?? "web" }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Beehiiv error ${response.status}: ${text}`);
  }

  return response.json();
}

export async function getBeehiivPosts() {
  try {
    const { apiKey, publicationId } = getBeehiivEnv();
    const response = await fetch(`${BEEHIIV_API_BASE}/publications/${publicationId}/posts`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      next: { revalidate: 900 }
    });

    if (!response.ok) {
      throw new Error(`Beehiiv posts error ${response.status}`);
    }

    const json = (await response.json()) as BeehiivPostsResponse;
    return json.data ?? [];
  } catch {
    return [];
  }
}
