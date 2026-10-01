import ja from "@/messages/ja.json";
import en from "@/messages/en.json";

export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];
export type Messages = typeof ja;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return (locale === "en" ? en : ja) as Messages;
}

export function localizedPath(locale: Locale, route = "") {
  return `/${locale}${route}`;
}
