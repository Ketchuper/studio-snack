"use client";

import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "coral" | "outline" | "dark" | "light";
  event?: AnalyticsEvent;
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "coral", event, className = "", external = false }: Props) {
  return (
    <Link
      href={href}
      className={`button button--${variant} ${className}`}
      onClick={() => event && track(event)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span><ArrowUpRight size={18} weight="bold" aria-hidden="true" />
    </Link>
  );
}
