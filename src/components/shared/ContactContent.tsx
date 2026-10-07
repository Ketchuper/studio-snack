"use client";

import { ChatCircleDots, InstagramLogo, PhoneCall } from "@phosphor-icons/react";
import { studio } from "@/content/studio";
import { getMessages, type Locale } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import { Button } from "@/components/shared/Button";

export function ContactContent({ locale, tour = false }: { locale: Locale; tour?: boolean }) {
  const t = getMessages(locale);
  return <section className="section-padding"><div className="container contact-grid">
    <div className="contact-direct"><p className="eyebrow coral">GET IN TOUCH</p><h2 className="display-heading">{t.contact.directTitle}</h2><p>{tour ? t.contact.tourHint : t.contact.intro}</p>
      <a href={studio.lineUrl} target="_blank" rel="noopener noreferrer" className="contact-option" onClick={() => track("cta_reservation_click", { placement: "contact_line" })}><ChatCircleDots size={28} weight="light" aria-hidden="true" /><span><small>{t.contact.line}</small><strong>LINE</strong></span><span aria-hidden="true">↗</span></a>
      <a href={studio.phoneHref} className="contact-option"><PhoneCall size={28} weight="light" aria-hidden="true" /><span><small>{t.contact.phone}</small><strong>{studio.phoneDisplay}</strong></span><span aria-hidden="true">↗</span></a>
      <a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="contact-option"><InstagramLogo size={28} weight="light" aria-hidden="true" /><span><small>{t.contact.instagram}</small><strong>@tough_saki</strong></span><span aria-hidden="true">↗</span></a>
    </div>
    <div className="contact-line-panel">
      <span className="eyebrow coral">{t.contact.lineGuideEyebrow}</span>
      <h2>{tour ? t.contact.tourLineTitle : t.contact.lineGuideTitle}</h2>
      <p>{tour ? t.contact.tourLineBody : t.contact.lineGuideBody}</p>
      <ul className="contact-line-details">
        {(tour ? t.contact.tourDetails : t.contact.bookingDetails).map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
      <p className="contact-line-note">{t.contact.lineNote}</p>
      <Button href={studio.lineUrl} external event={tour ? "cta_tour_click" : "cta_reservation_click"}>
        {tour ? t.contact.tourLineButton : t.contact.lineGuideButton}
      </Button>
    </div>
  </div></section>;
}
