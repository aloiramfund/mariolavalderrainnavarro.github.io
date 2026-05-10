import { NextResponse } from "next/server";
import { createBeehiivSubscriber } from "@/lib/beehiiv";
import { siteConfig } from "@/lib/config";
import { saveLeadToCrm } from "@/lib/crm";
import { sendAutoReply, sendInternalLeadNotification } from "@/lib/mailer";
import { normalizeSubscribePayload } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const payload = normalizeSubscribePayload(await req.json());

    const [crmResult, beehiivResult] = await Promise.allSettled([
      saveLeadToCrm(payload),
      createBeehiivSubscriber(payload)
    ]);

    if (crmResult.status === "rejected") {
      console.error("CRM lead save failed", crmResult.reason);
      return NextResponse.json(
        { success: false, message: "No se ha podido guardar el lead." },
        { status: 502 }
      );
    }

    if (beehiivResult.status === "rejected") {
      console.error("Beehiiv subscription failed", beehiivResult.reason);
      return NextResponse.json(
        { success: false, message: "No se ha podido crear la suscripción." },
        { status: 502 }
      );
    }

    const emailResults = await Promise.allSettled([
      sendAutoReply(payload),
      sendInternalLeadNotification(payload)
    ]);

    emailResults.forEach((result) => {
      if (result.status === "rejected") {
        console.error("Email notification failed", result.reason);
      }
    });

    return NextResponse.json({
      success: true,
      leadMagnetUrl: siteConfig.leadMagnetUrl
    });
  } catch (error) {
    console.error("Subscribe API error", error);
    return NextResponse.json(
      { success: false, message: "Revisa el email e inténtalo de nuevo." },
      { status: 400 }
    );
  }
}
