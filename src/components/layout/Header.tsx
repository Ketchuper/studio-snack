"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { track } from "@/lib/analytics";
import { getMessages, type Locale } from "@/lib/i18n";

const nav = ["home", "price", "access", "about", "contact"] as const;

export function Header({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const suffix = pathname.replace(/^\/(ja|en)/, "") || "";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={`/${locale}`} className="brand" aria-label="STUDIO SNACK home" onClick={() => setOpen(false)}>
          <Image src="/images/brand/studio-snack-logo.png" alt="STUDIO SNACK" width={185} height={93} priority className="brand__image" />
        </Link>
        <nav className={`primary-nav ${open ? "primary-nav--open" : ""}`} aria-label="Main navigation">
          {nav.map((key) => {
            const href = `/${locale}${key === "home" ? "" : `/${key}`}`;
            const current = pathname === href;
            return <Link href={href} key={key} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{t.nav[key]}</Link>;
          })}
          <div className="locale-switch" aria-label="Language">
            <Link href={`/ja${suffix}`} lang="ja" aria-current={locale === "ja" ? "page" : undefined} onClick={() => { track("locale_change", { to: "ja" }); setOpen(false); }}>JP</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/en${suffix}`} lang="en" aria-current={locale === "en" ? "page" : undefined} onClick={() => { track("locale_change", { to: "en" }); setOpen(false); }}>EN</Link>
          </div>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? t.nav.close : t.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={27} /> : <List size={27} />}</button>
      </div>
    </header>
  );
}
