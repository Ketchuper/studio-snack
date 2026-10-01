export type AnalyticsEvent = "cta_reservation_click" | "cta_tour_click" | "work_video_click" | "locale_change";

export function track(event: AnalyticsEvent, detail?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("studio-snack:analytics", { detail: { event, ...detail } }));
  // Attach an analytics provider to this event when the owner selects one.
}
