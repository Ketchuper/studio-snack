"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { track } from "@/lib/analytics";
import { getMessages, type Locale } from "@/lib/i18n";

export function StickyBookingCTA({ locale }: { locale: Locale }) {
  return <div className="sticky-cta"><Link href={`/${locale}/contact`} onClick={() => track("cta_reservation_click", { placement: "sticky" })}><span>{getMessages(locale).common.reserve}</span><ArrowRight size={20} weight="bold" aria-hidden="true" /></Link></div>;
}
