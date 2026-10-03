import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { studio } from "@/content/studio";
import { getMessages, type Locale } from "@/lib/i18n";

export function FinalCTA({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="final-cta" aria-labelledby="final-heading"><Image src="/images/okinawa/ocean-interlude.png" alt="" fill sizes="100vw" /><div className="final-cta__shade" /><div className="final-cta__inner"><div><p className="eyebrow">STUDIO SNACK / OKINAWA</p><h2 id="final-heading">{t.finalCta.heading}</h2><p>{t.finalCta.body}</p></div><div className="final-cta__actions"><Button href={studio.lineUrl} external event="cta_reservation_click">{t.common.reserve}</Button><Button href={studio.lineUrl} external variant="light" event="cta_tour_click">{t.common.tour}</Button></div></div></section>;
}
