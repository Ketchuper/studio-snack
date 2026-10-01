import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/PageIntro";
import { Button } from "@/components/shared/Button";
import { Reveal } from "@/components/motion/Reveal";
import { equipment, software } from "@/content/equipment";
import { isLocale, getMessages } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; return pageMetadata(isLocale(locale) ? locale : "ja", "about"); }
export default async function AboutPage({ params }: Props) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = getMessages(locale);
  return <><PageIntro eyebrow={t.about.eyebrow} title={t.about.heading} description={t.about.intro} image="/images/studio/studio-room.jpg" />
    <section className="section-padding"><div className="container about-profile"><Reveal><div className="about-profile__image"><Image src="/images/studio/studio-console.jpg" alt={locale === "ja" ? "スタジオの制作環境" : "Studio production room"} fill sizes="(max-width: 800px) 100vw, 50vw" /></div></Reveal><Reveal delay={100}><div><span className="eyebrow coral">{t.about.bioTitle}</span><h2 className="display-heading">Tough Saki</h2><p>{t.profile.body}</p><Button href={`/${locale}/contact`} event="cta_reservation_click">{t.common.reserve}</Button></div></Reveal></div></section>
    <section className="soft-section section-padding"><div className="container"><Reveal><span className="eyebrow coral">STUDIO SETUP</span><h2 className="display-heading">{t.about.equipmentTitle}</h2><p className="section-description">{t.about.equipmentIntro}</p></Reveal><div className="equipment-grid"><Reveal><div className="equipment-card"><h3>{t.about.gear}</h3>{equipment.map((group) => <div className="equipment-group" key={group.category}><span>{group.category}</span><p>{group.items.join(" / ")}</p></div>)}</div></Reveal><Reveal delay={100}><div className="equipment-card"><h3>{t.about.software}</h3>{software.map((group) => <div className="equipment-group" key={group.category}><span>{group.category}</span><p>{group.items.join(" / ")}</p></div>)}</div></Reveal></div><p className="text-note">{t.about.gearNote}</p></div></section>
  </>;
}
