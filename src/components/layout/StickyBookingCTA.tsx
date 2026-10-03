"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { track } from "@/lib/analytics";
import { studio } from "@/content/studio";
import { getMessages, type Locale } from "@/lib/i18n";

export function StickyBookingCTA({ locale }: { locale: Locale }) {
  return <div className="sticky-cta"><a href={studio.lineUrl} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_reservation_click", { placement: "sticky" })}><span>{getMessages(locale).common.reserve}</span><ArrowRight size={20} weight="bold" aria-hidden="true" /></a></div>;
}
