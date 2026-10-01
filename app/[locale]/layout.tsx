import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyBookingCTA } from "@/components/layout/StickyBookingCTA";
import { isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/metadata";
import { studio } from "@/content/studio";
import "../globals.css";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export const metadata: Metadata = { metadataBase: new URL(siteUrl), icons: { icon: "/images/brand/studio-snack-logo.png" } };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: studio.name,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/studio/studio-room.jpg`,
    telephone: studio.phoneDisplay,
    priceRange: "¥20,000 per song (tax included)",
    address: { "@type": "PostalAddress", streetAddress: "室川2-1-9 ハイビスカスビル404号室", addressLocality: "沖縄市", addressRegion: "沖縄県", postalCode: studio.postalCode, addressCountry: "JP" },
    sameAs: [studio.instagram],
  };
  return <html lang={locale}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <a className="skip-link" href="#main-content">{locale === "ja" ? "本文へ移動" : "Skip to content"}</a>
    <Header locale={locale} />
    <main id="main-content">{children}</main>
    <Footer locale={locale} />
    <StickyBookingCTA locale={locale} />
  </body></html>;
}
