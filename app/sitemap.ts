import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/price", "/access", "/about", "/contact"].flatMap((path) =>
    (["ja", "en"] as const).map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      alternates: { languages: { ja: `${siteUrl}/ja${path}`, en: `${siteUrl}/en${path}` } },
      changeFrequency: "monthly" as const,
      priority: path ? 0.7 : 1,
    })),
  );
}
