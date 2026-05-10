"use client";

import { useEffect, useState } from "react";
import { NewsletterForm } from "@/components/NewsletterForm";

export function CapturePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("newsletter_popup_closed")) return;

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      if (progress >= 0.3) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-backdrop" role="dialog" aria-modal="true" aria-label="Suscripción a newsletter">
      <div className="popup-card">
        <button
          className="popup-close"
          type="button"
          aria-label="Cerrar"
          onClick={() => {
            sessionStorage.setItem("newsletter_popup_closed", "true");
            setShow(false);
          }}
        >
          ×
        </button>
        <p className="kicker">Aloiramfund</p>
        <h2>Recibe oportunidades de financiación antes de decidir tu siguiente movimiento.</h2>
        <NewsletterForm source="scroll_popup" cta="Quiero el checklist" />
      </div>
    </div>
  );
}
