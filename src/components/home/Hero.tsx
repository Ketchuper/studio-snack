import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { getMessages, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero__copy">
      <p className="eyebrow hero__eyebrow">{t.hero.eyebrow}</p>
      <h1 id="hero-title" className="hero__lead">{t.hero.lead}</h1>
      <p className="hero__count">{t.hero.count}</p>
      <div className="hero__price-wrap"><span className="hero__price">¥20,000</span><span className="hero__tax">({t.common.tax})</span></div>
      <p className="hero__package">{t.hero.package}</p>
      <p className="hero__description">{t.hero.description}</p>
      <div className="hero__actions"><Button href={`/${locale}/contact`} event="cta_reservation_click">{t.common.reserve}</Button><Button href={`/${locale}/contact?intent=tour`} variant="outline" event="cta_tour_click">{t.common.tour}</Button></div>
    </div>
    <div className="hero__visual">
      <Image src="/images/studio/studio-console.jpg" alt={locale === "ja" ? "STUDIO SNACKの録音・ミックス設備" : "Recording and mixing equipment at STUDIO SNACK"} fill priority sizes="(max-width: 800px) 100vw, 58vw" className="hero__image" />
      <div className="hero__visual-tint" />
      <span className="hero__script">{t.hero.script}</span>
      <span className="hero__vertical">STUDIO SNACK / OKINAWA</span>
    </div>
  </section>;
}
