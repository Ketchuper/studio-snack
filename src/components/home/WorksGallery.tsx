"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "@phosphor-icons/react";
import { Reveal } from "@/components/motion/Reveal";
import { works } from "@/content/works";
import { track } from "@/lib/analytics";
import { getMessages, type Locale } from "@/lib/i18n";

export function WorksGallery({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="works section-padding" aria-labelledby="works-heading"><div className="container">
    <Reveal><div className="section-topline"><span className="eyebrow coral">{t.works.eyebrow}</span><span className="section-topline__rule" /></div><div className="works__intro"><h2 id="works-heading" className="display-heading">{t.works.heading}</h2><p>{t.works.description}</p></div></Reveal>
    <div className="works__grid">{works.map((work, index) => <Reveal key={work.id} delay={Math.min(index % 3, 2) * 80} className={index === 0 ? "work-item work-item--featured" : "work-item"}>
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-card" aria-label={`${work.artist} — ${work.title}: ${t.works.watch}`} onClick={() => track("work_video_click", { id: work.id })}>
        <div className="work-card__thumb"><Image src={`https://i.ytimg.com/vi/${work.id}/hqdefault.jpg`} alt="" fill sizes={index === 0 ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 50vw, 25vw"} /><span className="work-card__play"><Play size={22} weight="fill" aria-hidden="true" /></span><span className="work-card__watch">YOUTUBE <ArrowUpRight size={15} aria-hidden="true" /></span></div>
        <div className="work-card__info"><div><span className="work-card__label">{t.works.label}</span><h3>{work.artist}</h3><p>{work.title}</p></div><ArrowUpRight size={21} aria-hidden="true" /></div>
      </a>
    </Reveal>)}</div>
  </div></section>;
}
