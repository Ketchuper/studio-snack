import type { Metadata } from "next";
import { getMessages, type Locale } from "@/lib/i18n";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://studio-snack.vercel.app";
export type PageKey = "home" | "price" | "access" | "about" | "contact";

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const messages = getMessages(locale);
  const path = page === "home" ? "" : `/${page}`;
  const key = `${page}Title` as keyof typeof messages.meta;
  const descriptionKey = `${page}Description` as keyof typeof messages.meta;
  return {
    title: messages.meta[key],
    description: messages.meta[descriptionKey],
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: { ja: `${siteUrl}/ja${path}`, en: `${siteUrl}/en${path}`, "x-default": `${siteUrl}/ja${path}` },
    },
    openGraph: {
      title: messages.meta[key],
      description: messages.meta[descriptionKey],
      url: `${siteUrl}/${locale}${path}`,
      siteName: "STUDIO SNACK",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      images: [{ url: `${siteUrl}/images/studio/studio-room.jpg`, width: 1840, height: 1212, alt: "STUDIO SNACK recording studio" }],
    },
  };
}
