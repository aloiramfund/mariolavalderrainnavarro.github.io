import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { CapturePopup } from "@/components/CapturePopup";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCTA } from "@/components/StickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mariola Valderraín Navarro | Aloiramfund",
    template: "%s | Mariola Valderraín Navarro"
  },
  description: "Sistema de captación basado en newsletter para financiación de impacto, innovación social y economía regenerativa.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://mariolavalderrainnavarro.com")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="es">
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
        {clarityId && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`}
          </Script>
        )}
        <SiteHeader />
        {children}
        <SiteFooter />
        <CapturePopup />
        <StickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
