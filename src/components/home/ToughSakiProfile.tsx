import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/shared/Button";
import { getMessages, type Locale } from "@/lib/i18n";

export function ToughSakiProfile({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="profile-band" aria-labelledby="profile-heading">
    <div className="profile-band__image"><Image src="/images/studio/studio-room.jpg" alt={locale === "ja" ? "STUDIO SNACKのスタジオ内観" : "Inside STUDIO SNACK"} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
    <div className="profile-band__copy"><Reveal><p className="eyebrow coral">{t.profile.eyebrow}</p><h2 id="profile-heading" className="display-heading">{t.profile.heading}</h2><p>{t.profile.body}</p><Button href={`/${locale}/about`} variant="dark">{t.common.details}</Button></Reveal></div>
    <div className="profile-band__quote"><span>Music<br />With<br />People.</span><small>OKINAWA / STUDIO SNACK</small></div>
  </section>;
}
