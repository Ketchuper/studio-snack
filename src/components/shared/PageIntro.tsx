import { type ReactNode } from "react";

export function PageIntro({ eyebrow, title, description, children, image }: { eyebrow: string; title: string; description: string; children?: ReactNode; image?: string }) {
  return <section className={`page-intro ${image ? "page-intro--image" : ""}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.82), rgba(17,17,17,.18)), url(${image})` } : undefined}>
    <div className="container page-intro__inner"><p className="eyebrow coral">{eyebrow}</p><h1 className="display-heading display-heading--natural page-intro__heading">{title}</h1><p className="page-intro__description">{description}</p>{children}</div>
  </section>;
}
