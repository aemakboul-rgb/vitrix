import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Vitrines Magasins Casablanca | Devis Rapide | VITRIX";
const description =
  "Nettoyage professionnel de vitrines de magasins à Casablanca: boutiques de mode, showrooms et commerces. Donnez une image éclatante à votre vitrine. Devis sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitrines-magasins-casablanca" },
  keywords: [
    "nettoyage vitrines magasins Casablanca",
    "vitrines boutiques Casablanca",
    "lavage vitrine commerce Casablanca",
    "entretien vitrine magasin Maarif",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-vitrines-magasins-casablanca",
    images: [{ url: "/service-vitrines.jpg", width: 1200, height: 900, alt: "Nettoyage de vitrine de magasin à Casablanca" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="VITRINES & DEVANTURES COMMERCIALES"
      title="Nettoyage de Vitrines de Magasins à Casablanca"
      intro="Des vitrines éclatantes sans la moindre trace pour les boutiques, showrooms et commerces qui souhaitent valoriser leurs produits dès le premier coup d'œil."
      image="/service-vitrines.jpg"
      imageAlt="Nettoyage professionnel de vitrine de magasin à Casablanca"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de la vitrine de mon magasin à Casablanca."
      canonicalPath="/nettoyage-vitrines-magasins-casablanca"
      benefits={["Façade commerciale plus attractive", "Passages réguliers adaptés", "Devis express par photos WhatsApp"]}
      areas={["Maarif", "Gauthier", "Centre-ville", "Bourgogne", "Ain Sebaa", "Sidi Maârouf", "Casablanca"]}
      details={[
        { title: "Impact Direct sur les Ventes", text: "Une vitrine limpide et impeccable met en valeur vos collections et inspire confiance aux passants dès la rue." },
        { title: "Horaires Adaptés à Votre Commerce", text: "Nous intervenons avant l'ouverture de votre boutique pour ne jamais gêner vos clients ou vos employés." },
        { title: "Dépoussiérage des Cadres & Rainures", text: "Nous ne nettoyons pas seulement la vitre, mais également les contours en aluminium, joints et seuils d'entrée." },
        { title: "Tarifs Préférentiels Contrat", text: "Des forfaits économiques pour les commerces nécessitant un nettoyage hebdomadaire ou bimensuel." },
      ]}
      faqs={[
        {
          q: "Proposez-vous aussi le lavage de la façade ou de l'enseigne du magasin ?",
          a: "Oui ! Nous combinons le nettoyage de la vitrine avec celui de votre façade Alucobond et de votre enseigne lumineuse pour une devanture complète comme neuve.",
        },
      ]}
    />
  );
}
