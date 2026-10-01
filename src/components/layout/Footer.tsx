import Image from "next/image";
import Link from "next/link";
import { getMessages, type Locale } from "@/lib/i18n";
import { studio } from "@/content/studio";

export function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <Link href={`/${locale}`} className="footer-logo"><Image src="/images/brand/studio-snack-logo.png" alt="STUDIO SNACK" width={170} height={85} /></Link>
        <p>{t.footer.description}</p>
      </div>
      <nav aria-label="Footer navigation" className="footer-nav">
        <Link href={`/${locale}`}>{t.nav.home}</Link><Link href={`/${locale}/price`}>{t.nav.price}</Link><Link href={`/${locale}/access`}>{t.nav.access}</Link><Link href={`/${locale}/about`}>{t.nav.about}</Link><Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
      </nav>
      <div className="footer-contact"><p>{t.footer.address}</p><a href={studio.phoneHref}>{studio.phoneDisplay}</a><a href={studio.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a></div>
    </div>
    <div className="container footer-bottom"><span>{t.footer.copyright} {new Date().getFullYear()}</span><span>GOOD MUSIC. GOOD PEOPLE. OKINAWA.</span></div>
  </footer>;
}
