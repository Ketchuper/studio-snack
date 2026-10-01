import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/PageIntro";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/motion/Reveal";
import { isLocale, getMessages } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; return pageMetadata(isLocale(locale) ? locale : "ja", "price"); }
export default async function PricePage({ params }: Props) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = getMessages(locale);
  return <><PageIntro eyebrow={t.price.eyebrow} title={t.price.heading} description={t.price.intro} image="/images/studio/studio-mic.jpg" />
    <section className="section-padding"><div className="container price-layout"><Reveal><div className="price-lead"><span className="eyebrow coral">THE FULL PACKAGE</span><h2>{t.price.packageTitle}</h2><p className="price-lead__amount">¥20,000 <small>{t.price.perSong} / {t.common.tax}</small></p><p>{t.price.note}</p><Button href={`/${locale}/contact`} event="cta_reservation_click">{t.common.reserve}</Button></div></Reveal><Reveal delay={100}><div className="price-includes"><p className="eyebrow">{t.price.includes}</p><ol>{t.package.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></Reveal></div></section>
    <section className="soft-section section-padding"><div className="container split-info"><Reveal><span className="eyebrow coral">FIRST TIME?</span><h2 className="display-heading display-heading--natural">{t.flow.heading}</h2></Reveal><Reveal delay={100}><p>{t.price.prepro}</p><div className="info-box"><h3>{t.price.conditions}</h3><p>{t.price.conditionsBody}</p></div></Reveal></div></section>
    <section className="section-padding"><div className="container center-cta"><p className="eyebrow coral">FREE STUDIO TOUR</p><h2 className="display-heading">{t.price.tourHeading}</h2><p>{t.price.tourBody}</p><Button href={`/${locale}/contact?intent=tour`} event="cta_tour_click">{t.common.tour}</Button></div></section>
  </>;
}
