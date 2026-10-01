import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/PageIntro";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/motion/Reveal";
import { studio } from "@/content/studio";
import { isLocale, getMessages } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; return pageMetadata(isLocale(locale) ? locale : "ja", "access"); }
export default async function AccessPage({ params }: Props) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = getMessages(locale);
  return <><PageIntro eyebrow={t.access.eyebrow} title={t.access.heading} description={t.access.intro} />
    <section className="access-section section-padding"><div className="container access-grid"><Reveal><div className="access-photo"><Image src="/images/studio/studio-mic.jpg" alt={locale === "ja" ? "STUDIO SNACKの録音スペース" : "STUDIO SNACK recording space"} fill sizes="(max-width: 800px) 100vw, 55vw" /></div></Reveal><Reveal delay={100}><div className="access-info"><span className="eyebrow coral">OKINAWA CITY</span><h2>{t.access.addressLabel}</h2><p className="access-address">{t.access.address}</p><Button href={studio.mapUrl} external variant="dark">{t.access.map}</Button></div></Reveal></div></section>
    <section className="soft-section section-padding"><div className="container center-cta"><p className="eyebrow coral">STUDIO TOUR</p><h2 className="display-heading">{t.access.tourTitle}</h2><p>{t.access.tourBody}</p><Button href={`/${locale}/contact?intent=tour`} event="cta_tour_click">{t.common.tour}</Button></div></section>
  </>;
}
