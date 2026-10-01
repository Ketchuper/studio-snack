import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/shared/Button";
import { getMessages, type Locale } from "@/lib/i18n";

export function PackageOverview({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="package-overview section-padding" aria-labelledby="package-heading"><div className="container package-overview__grid">
    <Reveal><p className="eyebrow coral">{t.package.eyebrow}</p><h2 id="package-heading" className="display-heading">{t.package.heading}</h2><p className="package-overview__intro">{t.package.description}</p><Button href={`/${locale}/price`} variant="dark">{t.package.viewPrice}</Button></Reveal>
    <Reveal delay={100}><div className="package-card"><div className="package-card__top"><span>THE FULL PACKAGE</span><span>01 / 01</span></div><p className="package-card__price">¥20,000<span> / {locale === "ja" ? "1曲・税込" : "song, tax incl."}</span></p><div className="package-card__line" /><ul>{t.package.steps.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></div><p className="package-overview__support">{t.package.support}</p></Reveal>
  </div></section>;
}
