"use client";

import { trackEvent } from "@/lib/tracking";

export function CalEmbed() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/";

  return (
    <div className="cal-wrap">
      <a
        className="btn"
        href={calUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("click_cal", { event_category: "conversion" })}
      >
        Abrir agenda
      </a>
      <iframe src={calUrl} title="Agenda Cal.com" loading="lazy" />
    </div>
  );
}
