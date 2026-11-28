"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  Clock3,
  Coffee,
  Dumbbell,
  FileCheck2,
  GalleryVerticalEnd,
  House,
  Images,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  Sun,
  Timer,
  Utensils,
  Zap,
} from "lucide-react";

const PHONE_DISPLAY = "07 05 54 08 64";
const PHONE_LINK = "+212705540864";
const WHATSAPP_MESSAGE =
  "Bonjour VITRIX, je souhaite recevoir un devis gratuit pour mes vitres, façades ou panneaux solaires.";
const WHATSAPP_URL = `https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type CardItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
  tag?: string;
  tagType?: "blue" | "green" | "amber";
  accent?: boolean;
};

type GoogleAdsWindow = Window & {
  gtag_report_conversion?: (url?: string) => boolean;
};

const heroServices = [
  {
    id: "vitrines",
    tabTitle: "1. Vitres & Vitrines",
    icon: Store,
    title: "Vitrines & Baies Vitrées",
    badgeTop: "Sans traces garanties",
    badgeBottom: "Commerces & Villas",
    image: "/service-vitrines.jpg",
    alt: "Nettoyage professionnel de vitrines de magasins à Casablanca",
    stats: "Éclat 100%",
    statsSub: "Zéro reflet trouble",
  },
  {
    id: "facades",
    tabTitle: "2. Façades & Enseignes",
    icon: Building2,
    title: "Façades Alucobond & Enseignes",
    badgeTop: "Rénovation & Décrassage",
    badgeBottom: "Devantures de Magasins",
    image: "/service-facades-alucobond.jpg",
    alt: "Nettoyage de façade alucobond et enseignes à Casablanca",
    stats: "Image Pro",
    statsSub: "Devanture éclatante",
  },
  {
    id: "solaire",
    tabTitle: "3. Panneaux Solaires",
    icon: Sun,
    title: "Panneaux Solaires",
    badgeTop: "+30% Rendement",
    badgeBottom: "Villas & Entreprises",
    image: "/service-panneaux-solaires.jpg",
    alt: "Nettoyage de panneaux solaires photovoltaïques à Casablanca",
    stats: "+30% Énergie",
    statsSub: "Plein rendement solaire",
  },
];

const services: CardItem[] = [
  {
    title: "Vitrines & Baies Vitrées",
    description: "Nettoyage haute précision des vitrines de boutiques, showrooms et baies vitrées sans aucune trace.",
    icon: Store,
    tag: "Transparence totale",
    tagType: "blue",
  },
  {
    title: "Façades Commerciales & Alucobond",
    description: "Décrassage et rénovation complète des panneaux composites Alucobond, bardages et devantures de magasins.",
    icon: Building2,
    tag: "Image de marque",
    tagType: "blue",
  },
  {
    title: "Enseignes, Logos & Panneaux",
    description: "Nettoyage soigné des enseignes lumineuses, caissons, lettrages 3D et panneaux publicitaires pour raviver vos couleurs.",
    icon: Sparkles,
    tag: "Visibilité maximale",
    tagType: "blue",
  },
  {
    title: "Panneaux Solaires Photovoltaïques",
    description: "Lavage spécialisé à l'eau pure. Élimine poussière et dépôts pour regagner jusqu'à +30% de rendement énergétique.",
    icon: Sun,
    tag: "Gain énergie +30%",
    tagType: "amber",
    accent: true,
  },
  {
    title: "Vitres de Bureaux & Espaces Pro",
    description: "Entretien des cloisons vitrées, baies d'entreprises et locaux professionnels pour un cadre de travail lumineux.",
    icon: GalleryVerticalEnd,
    tag: "Espaces pro",
    tagType: "blue",
  },
  {
    title: "Contrats d'Entretien Régulier",
    description: "Passages programmés (hebdomadaire, bimensuel ou mensuel) à tarifs préférentiels pour une propreté constante.",
    icon: RefreshCw,
    tag: "Sérénité 365j",
    tagType: "green",
  },
];

const businessTypes: CardItem[] = [
  { title: "Magasins & Boutiques", icon: ShoppingBag },
  { title: "Villas (Solaire & Baies)", icon: Sun },
  { title: "Showrooms & Façades", icon: Images },
  { title: "Bureaux & Sièges Pro", icon: Building2 },
  { title: "Restaurants & Cafés", icon: Coffee },
  { title: "Toitures Solaires Industrielles", icon: Zap },
  { title: "Salles de sport & Cliniques", icon: Dumbbell },
  { title: "Locaux Commerciaux", icon: Store },
];

const seoLinks = [
  { href: "/femme-de-menage-casablanca", title: "Femme de ménage à domicile", text: "Ménage pour maison, appartement ou villa : demandez votre devis." },
  { href: "/nettoyage-panneaux-solaires-casablanca", title: "Panneaux Solaires Casablanca", text: "Nettoyage photovoltaïque à l'eau pure. Gain +30% de rendement." },
  { href: "/nettoyage-facades-alucobond-casablanca", title: "Façades Alucobond Casablanca", text: "Décrassage et rénovation de panneaux composites et bardages." },
  { href: "/nettoyage-enseignes-magasins-casablanca", title: "Enseignes & Logos Magasin", text: "Lavage d'enseignes lumineuses, caissons et lettres 3D." },
  { href: "/nettoyage-vitres-casablanca", title: "Nettoyage Vitres Casablanca", text: "Service complet pour vitres, vitrines et baies vitrées sans traces." },
  { href: "/nettoyage-vitrines-magasins-casablanca", title: "Vitrines Magasins & Showrooms", text: "Nettoyage de vitrines commerciales avant ouverture." },
  { href: "/nettoyage-vitres-bureaux-casablanca", title: "Vitres de Bureaux & Agences", text: "Sièges d'entreprises, cloisons vitrées et locaux professionnels." },
  { href: "/nettoyage-vitres-bouskoura", title: "Bouskoura (Villas & Solaire)", text: "Grandes baies vitrées de villas et toitures photovoltaïques." },
  { href: "/nettoyage-vitres-dar-bouazza", title: "Dar Bouazza & Tamaris (Anti-Sel)", text: "Traitement bord de mer contre les embruns marins et le sable." },
  { href: "/nettoyage-vitres-restaurants-cafes-casablanca", title: "Restaurants & Cafés CHR", text: "Façades vitrées propres pour terrasses et salles de restauration." },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="VITRIX - accueil">
      <img
        className="brand-logo"
        src="/vitrix-logo-transparent.png"
        alt="VITRIX - Nettoyage Vitres, Façades & Panneaux Solaires"
        width="900"
        height="166"
      />
    </a>
  );
}

export default function Home() {
  const [activeHeroTab, setActiveHeroTab] = useState<number>(0);

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    (window as GoogleAdsWindow).gtag_report_conversion?.();
    const data = new FormData(event.currentTarget);
    const lines = [
      WHATSAPP_MESSAGE,
      "",
      `🎯 Service : ${data.get("service") || "Non précisé"}`,
      `👤 Nom : ${data.get("name") || ""}`,
      `📞 Téléphone / WhatsApp : ${data.get("phone") || ""}`,
      `🏢 Établissement / Propriété : ${data.get("business") || ""}`,
      `📍 Quartier / Localisation : ${data.get("location") || ""}`,
      data.get("message") ? `💬 Détails : ${data.get("message")}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main id="top">
      <header className="topbar shell">
        <Brand />
        <div className="header-actions">
          <a
            id="phone_click_header"
            className="phone-link"
            href={`tel:${PHONE_LINK}`}
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
          >
            <Phone size={17} aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            id="whatsapp_click_header"
            className="button button-sm button-green"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            <span><span className="header-cta-prefix">Devis </span>WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="badge">
              <span className="status-dot" /> Devis Express WhatsApp • Casablanca & Région
            </div>
            <h1 id="hero-title">
              Nettoyage Vitres, Façades & <em>Panneaux Solaires</em>
            </h1>
            <p className="hero-lead">
              VITRIX vous accompagne pour le ménage à domicile et le nettoyage professionnel de vitres, façades et panneaux solaires à Casablanca et alentours.
            </p>
            <div className="hero-tags">
              <span className="hero-tag"><Store size={14} /> Vitres & Vitrines</span>
              <span className="hero-tag"><Building2 size={14} /> Façades Alucobond & Enseignes</span>
              <span className="hero-tag highlight"><Sun size={14} /> Panneaux Solaires (+30% énergie)</span>
              <a className="hero-tag" href="/femme-de-menage-casablanca"><House size={14} /> Femme de ménage</a>
            </div>
            <div className="hero-actions">
              <a
                id="whatsapp_click_hero"
                className="button button-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Obtenir mon devis sur WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                id="phone_click_hero"
                className="button button-secondary"
                href={`tel:${PHONE_LINK}`}
              >
                <Phone size={19} aria-hidden="true" />
                Appeler maintenant
              </a>
            </div>
            <div className="trust-row" aria-label="Nos engagements">
              <span><Timer size={17} /> Devis express en quelques minutes</span>
              <span><ShieldCheck size={17} /> Intervention Casablanca & Alentours</span>
              <span><Check size={17} /> Service ponctuel ou contrat régulier</span>
            </div>
            <div className="hero-proof" aria-label="Points forts VITRIX">
              <span><strong>+30%</strong><small>Rendement solaire max</small></span>
              <span><strong>Alucobond</strong><small>Façades, logos & enseignes</small></span>
              <span><strong>24h</strong><small>Intervention rapide</small></span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-tabs" role="tablist" aria-label="Choisir un service à afficher">
              {heroServices.map((item, idx) => {
                const TabIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeHeroTab === idx}
                    className={`hero-tab-btn ${activeHeroTab === idx ? "active" : ""} ${item.id === "solaire" ? "tab-solaire" : ""}`}
                    onClick={() => setActiveHeroTab(idx)}
                  >
                    <TabIcon size={15} />
                    <span>{item.tabTitle}</span>
                  </button>
                );
              })}
            </div>

            <div className="image-frame">
              <img
                key={heroServices[activeHeroTab].image}
                src={heroServices[activeHeroTab].image}
                alt={heroServices[activeHeroTab].alt}
                width="1440"
                height="1080"
                fetchPriority="high"
                decoding="async"
              />
              <div className="image-shine" aria-hidden="true" />
              <div className="visual-badge visual-badge-top">
                {heroServices[activeHeroTab].badgeTop}
              </div>
              <div className={`visual-badge visual-badge-bottom ${activeHeroTab === 2 ? "badge-amber" : ""}`}>
                {heroServices[activeHeroTab].badgeBottom}
              </div>
            </div>
            <div className="floating-card">
              <span className={`floating-icon ${activeHeroTab === 2 ? "amber" : activeHeroTab === 1 ? "navy" : ""}`}>
                {activeHeroTab === 2 ? <Sun size={20} /> : activeHeroTab === 1 ? <Building2 size={20} /> : <Sparkles size={20} />}
              </span>
              <span>
                <strong>{heroServices[activeHeroTab].stats}</strong>
                <small>{heroServices[activeHeroTab].statsSub}</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pôles d'Excellence avec Photos et Boutons Dédiés */}
      <section className="pillars section" id="nos-services" aria-labelledby="pillars-title">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow blue">NOS SERVICES PHARES</p>
            <h2 id="pillars-title">Une solution adaptée à vos besoins</h2>
            <p>Découvrez nos services et demandez votre devis personnalisé.</p>
          </div>

          <div className="pillars-grid">
            <article className="pillar-card">
              <div className="pillar-img-wrap">
                <img src="/femme-menage-vitrix.png" alt="Service de femme de ménage à domicile VITRIX" width="800" height="550" loading="lazy" />
                <span className="pillar-badge">Ménage à domicile</span>
              </div>
              <div className="pillar-body">
                <div className="pillar-header"><span className="icon-box green"><House size={22} /></span><h3>Femme de ménage</h3></div>
                <p>Un service de ménage pour votre maison, appartement ou villa, selon vos besoins.</p>
                <ul className="pillar-features"><li><Check size={16} /> Ménage ponctuel ou régulier</li><li><Check size={16} /> Choisissez votre ville</li><li><Check size={16} /> Devis adapté à votre logement</li></ul>
                <a className="button button-sm button-green pillar-btn" href="/femme-de-menage-casablanca">Découvrir et demander un devis <ArrowRight size={16} /></a>
              </div>
            </article>
            {/* Service 1: Vitrines & Baies Vitrées */}
            <article className="pillar-card">
              <div className="pillar-img-wrap">
                <img
                  src="/service-vitrines.jpg"
                  alt="Nettoyage vitrines de magasins et baies vitrées Casablanca"
                  width="800"
                  height="550"
                  loading="lazy"
                />
                <span className="pillar-badge">Vitrines & Verres</span>
              </div>
              <div className="pillar-body">
                <div className="pillar-header">
                  <span className="icon-box"><Store size={22} /></span>
                  <h3>Vitrines & Baies Vitrées</h3>
                </div>
                <p>Lavage professionnel sans trace pour magasins, showrooms, vitres de bureaux et baies vitrées de villas. Traitement anti-poussière et clarté absolue.</p>
                <ul className="pillar-features">
                  <li><Check size={16} /> Vitrines de boutiques & commerces</li>
                  <li><Check size={16} /> Baies vitrées et cloisons vitrées</li>
                  <li><Check size={16} /> Finition impeccable sans traces</li>
                </ul>
                <a
                  className="button button-sm button-secondary pillar-btn"
                  href={`https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes vitrines / vitres.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> Devis Vitrines WhatsApp
                </a>
              </div>
            </article>

            {/* Service 2: Façades & Enseignes */}
            <article className="pillar-card">
              <div className="pillar-img-wrap">
                <img
                  src="/service-facades-alucobond.jpg"
                  alt="Nettoyage de façade commerciale alucobond et enseigne Casablanca"
                  width="800"
                  height="550"
                  loading="lazy"
                />
                <span className="pillar-badge badge-navy">Façades & Enseignes</span>
              </div>
              <div className="pillar-body">
                <div className="pillar-header">
                  <span className="icon-box"><Building2 size={22} /></span>
                  <h3>Façades Alucobond & Logos</h3>
                </div>
                <p>Décrassage et rénovation complète des panneaux Alucobond, enseignes lumineuses, caissons et logos de magasins pour valoriser votre image de marque.</p>
                <ul className="pillar-features">
                  <li><Check size={16} /> Panneaux Alucobond & bardages métalliques</li>
                  <li><Check size={16} /> Enseignes lumineuses et logos 3D</li>
                  <li><Check size={16} /> Élimination des traces de pollution</li>
                </ul>
                <a
                  className="button button-sm button-secondary pillar-btn"
                  href={`https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour VITRIX, je souhaite un devis pour le nettoyage de ma façade commerciale / enseigne.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> Devis Façade WhatsApp
                </a>
              </div>
            </article>

            {/* Service 3: Panneaux Solaires */}
            <article className="pillar-card pillar-card-highlight">
              <div className="pillar-img-wrap">
                <img
                  src="/service-panneaux-solaires.jpg"
                  alt="Nettoyage de panneaux solaires photovoltaïques à Casablanca"
                  width="800"
                  height="550"
                  loading="lazy"
                />
                <span className="pillar-badge badge-amber">+30% Rendement</span>
              </div>
              <div className="pillar-body">
                <div className="pillar-header">
                  <span className="icon-box amber"><Sun size={22} /></span>
                  <h3>Panneaux Solaires</h3>
                </div>
                <p>Lavage spécialisé à l&apos;eau pure osmosée pour éliminer poussières, sable et fientes. Augmentez directement votre production d&apos;électricité jusqu&apos;à 30%.</p>
                <ul className="pillar-features">
                  <li><Check size={16} /> Villas résidentielles, fermes & hangars</li>
                  <li><Check size={16} /> Eau déminéralisée sans produits abrasifs</li>
                  <li><Check size={16} /> Gain immédiat sur votre facture électrique</li>
                </ul>
                <a
                  className="button button-sm button-green pillar-btn"
                  href={`https://wa.me/${PHONE_LINK.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes panneaux solaires (+30% rendement).")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> Devis Solaire WhatsApp
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div className="shell value-inner">
          <p className="eyebrow">IMAGE & RENDEMENT ÉNERGÉTIQUE</p>
          <h2>Une façade éclatante et des panneaux solaires à pleine puissance.</h2>
          <p>Nous éliminons poussière, calcaire, pollution et fientes pour sublimer votre devanture commerciale et rentabiliser votre installation solaire.</p>
        </div>
      </section>

      <section className="services section" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <p className="eyebrow blue">NOS PRESTATIONS EXPERTES</p>
            <h2 id="services-title">Toutes nos prestations pour professionnels & particuliers</h2>
            <p>Chaque prestation est estimée selon vos surfaces, l&apos;accès et la périodicité souhaitée.</p>
          </div>
          <div className="service-grid">
            {services.map(({ title, description, icon: Icon, tag, tagType, accent }) => (
              <article className={`service-card ${accent ? "service-card-accent" : ""}`} key={title}>
                <div>
                  <span className={`icon-box ${tagType === "amber" ? "amber" : tagType === "green" ? "green" : ""}`}>
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                {tag && (
                  <span className={`service-tag ${tagType || "blue"}`}>
                    {tag}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact section" aria-labelledby="impact-title">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow blue">POURQUOI FAIRE APPEL À VITRIX ?</p>
            <h2 id="impact-title">Un impact direct sur votre image et vos économies</h2>
            <p>Découvrez pourquoi le nettoyage professionnel régulier est un investissement gagnant.</p>
          </div>
          <div className="impact-grid">
            <article className="impact-card solar">
              <span className="impact-stat">+30%</span>
              <span className="icon-box amber"><Sun size={24} /></span>
              <h3>Rendement Énergétique Solaire</h3>
              <p>À Casablanca et sa région, le sable et la poussière forment une couche qui bloque les rayons. Un lavage spécialisé à l&apos;eau pure vous fait regagner immédiatement jusqu&apos;à 30% d&apos;électricité produite.</p>
            </article>
            <article className="impact-card facade">
              <span className="impact-stat">1er</span>
              <span className="icon-box"><Building2 size={24} /></span>
              <h3>Façades, Enseignes & Logos Éclatants</h3>
              <p>Votre devanture commerciale (Alucobond, enseigne lumineuse, panneau d&apos;affichage) est le premier contact avec vos clients. Une façade propre inspire immédiatement confiance et dynamise vos visites.</p>
            </article>
            <article className="impact-card quality">
              <span className="impact-stat">100%</span>
              <span className="icon-box green"><ShieldCheck size={24} /></span>
              <h3>Technique Pro & Sécurité Totale</h3>
              <p>Équipements télescopiques haute portée, raclettes professionnelles et produits écologiques adaptés sans aucun risque de rayure sur vos vitres, vos cellules photovoltaïques ou vos finitions métalliques.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="difference section" aria-labelledby="difference-title">
        <div className="shell difference-grid">
          <div className="difference-image">
            <img
              src="/before-after-glass.webp"
              alt="Avant et après nettoyage professionnel d'une vitrine et façade à Casablanca"
              width="1500"
              height="844"
              loading="lazy"
              decoding="async"
            />
            <span className="before-label">AVANT</span>
            <span className="after-label">APRÈS</span>
            <span className="split-line" aria-hidden="true" />
          </div>
          <div className="difference-copy">
            <p className="eyebrow blue">AVANT / APRÈS</p>
            <h2 id="difference-title">Un résultat éclatant dès le premier passage</h2>
            <p className="difference-lead">La différence est immédiate : vitres limpides, enseignes ravivées et panneaux solaires nettoyés en profondeur.</p>
            <div className="promise-grid">
              {[
                { title: "Méthode propre et soignée", icon: ShieldCheck },
                { title: "Devis clair avant intervention", icon: FileCheck2 },
                { title: "Horaires flexibles sans gêne", icon: Clock3 },
                { title: "Contrat régulier économique", icon: RefreshCw },
              ].map(({ title, icon: Icon }) => (
                <span key={title}><Icon size={18} /><strong>{title}</strong></span>
              ))}
            </div>
            <a id="whatsapp_click_before_after" className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Demander mon devis <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading centered process-heading">
            <p className="eyebrow blue">SIMPLE ET RAPIDE</p>
            <h2 id="process-title">Comment ça marche&nbsp;?</h2>
            <p>Quelques photos sur WhatsApp suffisent pour recevoir une estimation rapide et sur-mesure.</p>
          </div>
          <ol className="steps">
            <li><span>01</span><div><strong>Envoyez vos photos</strong><p>Partagez les photos de vos vitres, façades ou panneaux sur WhatsApp.</p></div></li>
            <li><span>02</span><div><strong>Recevez votre devis</strong><p>Nous préparons une offre transparente adaptée à vos surfaces.</p></div></li>
            <li><span>03</span><div><strong>Intervention rapide</strong><p>Nous intervenons au créneau qui vous convient, sans perturber votre activité.</p></div></li>
          </ol>
          <div className="process-action">
            <a id="whatsapp_click_process" className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Envoyer mes photos sur WhatsApp
            </a>
          </div>
          <div className="audience-wrap" aria-labelledby="businesses-title">
            <div>
              <p className="eyebrow blue">SECTEURS COUVERTS</p>
              <h3 id="businesses-title">Pour qui intervenons-nous&nbsp;?</h3>
            </div>
            <div className="audience-chips">
              {businessTypes.map(({ title, icon: Icon }) => (
                <span key={title}><Icon size={17} /><strong>{title}</strong></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="recurring section" aria-labelledby="recurring-title">
        <div className="shell recurring-card">
          <div className="recurring-icon"><CalendarCheck size={38} /></div>
          <div>
            <p className="eyebrow">FORMULES D&apos;ENTRETIEN</p>
            <h2 id="recurring-title">Une propreté et un rendement impeccables toute l&apos;année</h2>
            <p>Optez pour un passage régulier : hebdomadaire, bimensuel ou mensuel pour vos vitrines, façades et panneaux solaires.</p>
          </div>
          <a id="whatsapp_click_recurring" className="button button-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Demander une offre d&apos;entretien <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="local-pages section" aria-labelledby="local-pages-title">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow blue">SERVICES ET ZONES D&apos;INTERVENTION</p>
            <h2 id="local-pages-title">Intervention à Casablanca et région</h2>
            <p>Consultez nos zones et services pour une estimation personnalisée.</p>
          </div>
          <div className="seo-link-grid">
            {seoLinks.map((item) => (
              <a href={item.href} key={item.href}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="quote section" id="devis" aria-labelledby="quote-title">
        <div className="shell quote-grid">
          <div className="quote-copy">
            <p className="eyebrow blue">DEVIS GRATUIT ET SANS ENGAGEMENT</p>
            <h2 id="quote-title">Demandez votre estimation</h2>
            <p>Indiquez vos besoins ci-dessous. Nous vous répondons rapidement sur WhatsApp pour fixer votre devis.</p>
            <div className="direct-contact">
              <a id="whatsapp_click_form_side" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={21} />
                <span><small>Réponse rapide sur</small><strong>WhatsApp</strong></span>
              </a>
              <a id="phone_click_form_side" href={`tel:${PHONE_LINK}`}>
                <Phone size={21} />
                <span><small>Appelez-nous au</small><strong>{PHONE_DISPLAY}</strong></span>
              </a>
            </div>
          </div>
          <form id="quote_form" className="quote-form" onSubmit={handleQuoteSubmit}>
            <div className="field-row">
              <label>Nom
                <input name="name" type="text" placeholder="Votre nom" autoComplete="name" required />
              </label>
              <label>Téléphone / WhatsApp
                <input name="phone" type="tel" placeholder="06 XX XX XX XX" autoComplete="tel" required />
              </label>
            </div>
            <label>Service souhaité
              <select name="service" defaultValue="Pack Complet (Vitres + Façade + Enseigne)" required>
                <option value="Femme de ménage à domicile">Femme de ménage à domicile</option>
                <option value="Pack Complet (Vitres + Façade + Enseigne)">Pack Complet (Vitres + Façade + Enseigne)</option>
                <option value="Nettoyage Vitrines & Baies Vitrées">Nettoyage Vitrines & Baies Vitrées</option>
                <option value="Façades Commerciales (Alucobond & Devantures)">Façades Commerciales (Alucobond, Bardage)</option>
                <option value="Enseignes Lumineuses, Logos & Panneaux">Enseignes Lumineuses, Logos & Panneaux</option>
                <option value="Nettoyage Panneaux Solaires (Rendement +30%)">Nettoyage Panneaux Solaires (Gain rendement +30%)</option>
                <option value="Contrat d'entretien régulier">Contrat d&apos;entretien régulier (Passages programmés)</option>
              </select>
            </label>
            <label>Type d&apos;établissement / Propriété
              <select name="business" defaultValue="" required>
                <option value="" disabled>Sélectionnez</option>
                <option>Magasin / Boutique commerciale</option>
                <option>Villa / Résidence (avec panneaux solaires)</option>
                <option>Maison / Appartement</option>
                <option>Showroom / Espace commercial</option>
                <option>Restaurant / Café</option>
                <option>Bureau / Siège d&apos;entreprise</option>
                <option>Toiture solaire industrielle / Hangar</option>
                <option>Clinique / Salle de sport</option>
                <option>Autre établissement</option>
              </select>
            </label>
            <label>Quartier / Localisation
              <input name="location" type="text" placeholder="Ex. Maarif, Bouskoura, Sidi Maârouf, Dar Bouazza..." required />
            </label>
            <label>Message / Précisions <small>(facultatif)</small>
              <textarea name="message" rows={3} placeholder="Dimensions, nombre de vitrines, panneaux solaires ou détails de la façade..." />
            </label>
            <button id="quote_form_submit" className="button button-primary form-submit" type="submit">
              Recevoir mon devis sur WhatsApp <Send size={18} />
            </button>
            <p className="form-note">
              <ShieldCheck size={14} /> Vos informations sont strictement confidentielles.
            </p>
          </form>
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-title">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow blue">QUESTIONS FRÉQUENTES</p>
            <h2 id="faq-title">Nettoyage Vitres, Façades & Panneaux Solaires</h2>
            <p>Tout ce que vous devez savoir avant de commander votre intervention VITRIX.</p>
          </div>
          <div className="faq-grid">
            <article>
              <h3>Pourquoi est-il indispensable de nettoyer les panneaux solaires ?</h3>
              <p>À Casablanca et sa région, le sable, la poussière et les fientes d&apos;oiseaux créent un voile occultant qui réduit de 15% à 30% l&apos;énergie produite. Un nettoyage professionnel à l&apos;eau déminéralisée permet de retrouver 100% de la puissance de votre installation sans risquer de rayer les cellules.</p>
            </article>
            <article>
              <h3>Nettoyez-vous les façades Alucobond et les enseignes lumineuses ?</h3>
              <p>Oui ! Nous sommes équipés pour décrasser les panneaux composites Alucobond, les bardages métalliques, les caissons lumineux, les lettres 3D et les logos de magasins pour redonner un éclat neuf à votre devanture.</p>
            </article>
            <article>
              <h3>Comment obtenir un devis rapidement ?</h3>
              <p>Envoyez simplement quelques photos ou vidéos de vos vitrines, façades ou panneaux solaires directement sur notre WhatsApp. Nous évaluons les dimensions et l&apos;accès pour vous fournir un devis immédiat.</p>
            </article>
            <article>
              <h3>Proposez-vous des passages réguliers avec contrat ?</h3>
              <p>Oui, nous proposons des formules d&apos;entretien périodique (hebdomadaire, bimensuel ou mensuel) idéales pour garder une vitrine propre et des panneaux solaires au top de leur rendement toute l&apos;année à des tarifs préférentiels.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <div className="shell final-inner">
          <div>
            <p className="eyebrow">CASABLANCA ET ENVIRONS</p>
            <h2>Prêt à redonner vie à vos façades et maximiser votre énergie ?</h2>
          </div>
          <div className="final-actions">
            <a id="whatsapp_click_final" className="button button-green" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Devis WhatsApp
            </a>
            <a id="phone_click_final" className="button button-outline-white" href={`tel:${PHONE_LINK}`}>
              <Phone size={19} /> Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Brand />
          <p>Nettoyage professionnel de vitres, façades commerciales & panneaux solaires à Casablanca.</p>
        </div>
      </footer>

      <nav className="mobile-sticky" aria-label="Contact rapide">
        <a id="whatsapp_click_sticky" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle size={20} /> Devis WhatsApp
        </a>
        <a id="phone_click_sticky" href={`tel:${PHONE_LINK}`}>
          <Phone size={19} /> Appeler
        </a>
      </nav>
    </main>
  );
}
