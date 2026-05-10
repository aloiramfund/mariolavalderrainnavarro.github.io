export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  const win = window as typeof window & {
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
  };

  win.gtag?.("event", eventName, params);
}
