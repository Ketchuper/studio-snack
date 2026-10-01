import { ChatCircleDots, FileText, Microphone, SlidersHorizontal, VinylRecord } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion/Reveal";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [ChatCircleDots, FileText, Microphone, SlidersHorizontal, VinylRecord];

export function FirstRecordingFlow({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="recording-flow section-padding" aria-labelledby="flow-heading"><div className="container">
    <Reveal><div className="recording-flow__intro"><div><p className="eyebrow coral">{t.flow.eyebrow}</p><h2 id="flow-heading" className="display-heading display-heading--natural">{t.flow.heading}</h2></div><p>{t.flow.intro}</p></div></Reveal>
    <div className="flow-steps">{t.flow.items.map((item, index) => {
      const Icon = icons[index];
      return <Reveal key={item.title} delay={index * 60} className="flow-step"><div className="flow-step__icon"><Icon size={37} weight="thin" aria-hidden="true" /></div><div className="flow-step__number">{String(index + 1).padStart(2, "0")}</div><h3>{item.title}</h3><p>{item.body}</p></Reveal>;
    })}</div>
  </div></section>;
}
