"use client";
/* eslint-disable @next/next/no-img-element */

import { ArrowRight, Check, ChevronRight, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

const PHONE_DISPLAY = "07 05 54 08 64";
const PHONE_LINK = "+212705540864";

export type FaqItem = {
  q: string;
  a: string;
};

export type SeoServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  benefits: string[];
  areas: string[];
  details: { title: string; text: string }[];
  faqs?: FaqItem[];
  canonicalPath: string;
};

const otherServices = [
  { href: "/conseils-nettoyage-casablanca", label: "Conseils et préparation du devis" },
  { href: "/femme-de-menage-casablanca", label: "Femme de ménage à domicile" },
  { href: "/nettoyage-vitres-casablanca", label: "Nettoyage Vitres & Baies" },
  { href: "/nettoyage-facades-alucobond-casablanca", label: "Façades Alucobond" },
  { href: "/nettoyage-panneaux-solaires-casablanca", label: "Panneaux Solaires (+30%)" },
  { href: "/nettoyage-enseignes-magasins-casablanca", label: "Enseignes & Logos" },
  { href: "/nettoyage-vitrines-magasins-casablanca", label: "Vitrines Magasins" },
  { href: "/nettoyage-vitres-bureaux-casablanca", label: "Vitres Bureaux" },
];

export function SeoServicePage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  whatsappMessage,
  benefits,
  areas,
  details,
  faqs,
  canonicalPath,
}: SeoServicePageProps) {
  const whatsappUrl = `https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main id="top">
      <header className="topbar shell">
        <a className="brand" href="/" aria-label="VITRIX - accueil">
          <img
            className="brand-logo"
            src="/vitrix-logo-transparent.png"
            alt="VITRIX - Nettoyage Vitres, Façades & Panneaux Solaires"
            width="900"
            height="166"
          />
        </a>
        <div className="header-actions">
          <a className="phone-link" href={`tel:${PHONE_LINK}`} aria-label={`Appeler le ${PHONE_DISPLAY}`}>
            <Phone size={17} aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="button button-sm button-green" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            <span>Devis WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Breadcrumb Navigation for SEO */}
      <nav className="shell" aria-label="Fil d'ariane" style={{ marginTop: "14px", marginBottom: "-10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--muted)" }}>
          <a href="/" style={{ color: "var(--blue)", fontWeight: "600" }}>Accueil</a>
          <ChevronRight size={14} />
          <span>{eyebrow}</span>
        </div>
      </nav>

      <section className="seo-hero section">
        <div className="shell seo-hero-grid">
          <div>
            <p className="eyebrow blue">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-lead">{intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} aria-hidden="true" />
                Demander mon devis WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={`tel:${PHONE_LINK}`}>
                <Phone size={19} aria-hidden="true" />
                Appeler maintenant
              </a>
            </div>
            <div className="trust-row">
              {benefits.map((benefit) => (
                <span key={benefit}>
                  <Check size={17} />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
          <div className="image-frame seo-image">
            <img src={image} alt={imageAlt} width="1440" height="960" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell seo-content">
          <div>
            <p className="eyebrow blue">MÉTHODE EXPERTE VITRIX</p>
            <h2>Une intervention rapide, soignée et sans contrainte</h2>
            <p>
              Pour toute intervention à Casablanca, Bouskoura et région, il vous suffit de nous envoyer
              quelques photos ou vidéos sur WhatsApp. Nous vous transmettons un devis précis sous 24h avec
              des créneaux d&apos;intervention flexibles.
            </p>
          </div>
          <div className="seo-cards">
            {details.map((item) => (
              <article key={item.title}>
                <ShieldCheck size={22} style={{ color: "var(--blue)" }} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="faq section">
          <div className="shell">
            <div className="section-heading centered">
              <p className="eyebrow blue">FOIRE AUX QUESTIONS</p>
              <h2>Questions Fréquentes</h2>
            </div>
            <div className="faq-grid" style={{ marginTop: "28px" }}>
              {faqs.map((faq) => (
                <article key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Cross-Linking Grid for SEO Juice */}
      <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="shell">
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <p className="eyebrow blue">AUTRES SERVICES VITRIX</p>
            <h2 style={{ fontSize: "24px", marginTop: "6px" }}>Découvrez nos autres prestations spécialisées</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {otherServices
              .filter((s) => s.href !== canonicalPath)
              .map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "9px 16px",
                    borderRadius: "99px",
                    background: "white",
                    border: "1px solid var(--line)",
                    fontSize: "12.5px",
                    fontWeight: "700",
                    color: "var(--navy)",
                    boxShadow: "0 2px 8px rgba(8,40,74,.04)",
                  }}
                >
                  <Sparkles size={14} style={{ color: "var(--blue)" }} />
                  {s.label}
                </a>
              ))}
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div className="shell value-inner">
          <p className="eyebrow">ZONES D&apos;INTERVENTION</p>
          <h2>Casablanca et alentours</h2>
          <p>{areas.join(" • ")}</p>
        </div>
      </section>

      <section className="final-cta section">
        <div className="shell final-inner">
          <div>
            <p className="eyebrow">DEVIS RAPIDE ET GRATUIT</p>
            <h2>Envoyez vos photos sur WhatsApp et recevez votre estimation VITRIX sous 24h.</h2>
          </div>
          <div className="final-actions">
            <a className="button button-green" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Devis WhatsApp
            </a>
            <a className="button button-outline-white" href={`tel:${PHONE_LINK}`}>
              <Phone size={19} /> Appeler
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="/" aria-label="VITRIX - accueil">
            <img className="brand-logo" src="/vitrix-logo-transparent.png" alt="VITRIX" width="900" height="166" />
          </a>
          <p>Nettoyage professionnel de vitres, façades & panneaux solaires à Casablanca.</p>
        </div>
      </footer>

      <nav className="mobile-sticky" aria-label="Contact rapide">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={20} /> WhatsApp
        </a>
        <a href={`tel:${PHONE_LINK}`}>
          <Phone size={19} /> Appeler
        </a>
      </nav>
    </main>
  );
}
