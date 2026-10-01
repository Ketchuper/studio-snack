"use client";

import { InstagramLogo, PhoneCall } from "@phosphor-icons/react";
import { studio } from "@/content/studio";
import { getMessages, type Locale } from "@/lib/i18n";

export function ContactContent({ locale, tour = false }: { locale: Locale; tour?: boolean }) {
  const t = getMessages(locale);
  return <section className="section-padding"><div className="container contact-grid">
    <div className="contact-direct"><p className="eyebrow coral">GET IN TOUCH</p><h2 className="display-heading">{t.contact.directTitle}</h2><p>{tour ? t.contact.tourHint : t.contact.intro}</p>
      <a href={studio.phoneHref} className="contact-option"><PhoneCall size={28} weight="light" aria-hidden="true" /><span><small>{t.contact.phone}</small><strong>{studio.phoneDisplay}</strong></span><span aria-hidden="true">↗</span></a>
      <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="contact-option"><InstagramLogo size={28} weight="light" aria-hidden="true" /><span><small>{t.contact.instagram}</small><strong>@tough_saki</strong></span><span aria-hidden="true">↗</span></a>
    </div>
    <div className="contact-form-panel"><span className="eyebrow coral">BOOKING FORM</span><h2>{t.contact.formTitle}</h2><p className="form-status" role="status">{t.contact.formStatus}</p>
      <form onSubmit={(event) => event.preventDefault()}><div className="form-row"><label>{t.contact.name}<input type="text" name="name" autoComplete="name" /></label><label>{t.contact.contactMethod}<input type="text" name="contact" autoComplete="email" /></label></div><div className="form-row"><label>{t.contact.people}<input type="number" min="1" name="people" /></label><label>{t.contact.songs}<input type="number" min="1" name="songs" /></label></div><label>{t.contact.preferred}<input type="text" name="preferred" /></label><label>{t.contact.message}<textarea name="message" rows={5} defaultValue={tour ? (locale === "ja" ? "無料見学を希望します。" : "I'd like to book a free studio tour.") : ""} /></label><button type="button" disabled>{t.contact.submit}</button><p className="form-privacy">{t.contact.privacy}</p></form>
    </div>
  </div></section>;
}
