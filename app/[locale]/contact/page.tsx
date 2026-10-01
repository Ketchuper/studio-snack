import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/shared/PageIntro";
import { ContactContent } from "@/components/shared/ContactContent";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { getMessages } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }>; searchParams: Promise<{ intent?: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; return pageMetadata(isLocale(locale) ? locale : "ja", "contact"); }
export default async function ContactPage({ params, searchParams }: Props) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const t = getMessages(locale);
  const { intent } = await searchParams;
  return <><PageIntro eyebrow={t.contact.eyebrow} title={t.contact.heading} description={t.contact.intro} /><ContactContent locale={locale} tour={intent === "tour"} /></>;
}
