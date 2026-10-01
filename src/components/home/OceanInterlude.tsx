import Image from "next/image";
import { getMessages, type Locale } from "@/lib/i18n";

export function OceanInterlude({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <section className="ocean-interlude" aria-label={locale === "ja" ? "沖縄から生まれる音楽" : "Music from Okinawa"}>
    <Image src="/images/okinawa/ocean-interlude.png" alt="" fill sizes="100vw" className="ocean-interlude__image" />
    <div className="ocean-interlude__shade" />
    <div className="container ocean-interlude__content"><h2>{t.ocean.title}</h2><p>{t.ocean.body}</p></div>
  </section>;
}
