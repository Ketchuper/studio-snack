import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { OceanInterlude } from "@/components/home/OceanInterlude";
import { PackageOverview } from "@/components/home/PackageOverview";
import { WorksGallery } from "@/components/home/WorksGallery";
import { FirstRecordingFlow } from "@/components/home/FirstRecordingFlow";
import { ToughSakiProfile } from "@/components/home/ToughSakiProfile";
import { FinalCTA } from "@/components/home/FinalCTA";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { locale } = await params; return pageMetadata(isLocale(locale) ? locale : "ja", "home"); }
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <><Hero locale={locale} /><OceanInterlude locale={locale} /><PackageOverview locale={locale} /><WorksGallery locale={locale} /><FirstRecordingFlow locale={locale} /><ToughSakiProfile locale={locale} /><FinalCTA locale={locale} /></>;
}
