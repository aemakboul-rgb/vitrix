import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Vitres, Façades & Solaire Bouskoura | VITRIX";
const description =
  "Nettoyage professionnel de baies vitrées, vitres et panneaux solaires pour villas, commerces et bureaux à Bouskoura (Ville Verte, Bouskoura Golf). Devis WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitres-bouskoura" },
  keywords: [
    "nettoyage vitres Bouskoura",
    "nettoyage baie vitrée villa Bouskoura",
    "nettoyage panneaux solaires Bouskoura",
    "lavage vitres Bouskoura Ville Verte",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-vitres-bouskoura",
    images: [{ url: "/service-vitrines.jpg", width: 1200, height: 900, alt: "Nettoyage de vitres et villas à Bouskoura" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="BOUSKOURA & VILLE VERTE"
      title="Nettoyage de Vitres, Baies & Solaire à Bouskoura"
      intro="Service haut de gamme pour villas de prestige, résidences privées, bureaux et commerces à Bouskoura et Ville Verte."
      image="/service-vitrines.jpg"
      imageAlt="Nettoyage de baies vitrées de villa à Bouskoura"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes baies vitrées / panneaux solaires à Bouskoura."
      canonicalPath="/nettoyage-vitres-bouskoura"
      benefits={["Villas de prestige & grandes baies", "Nettoyage combiné vitres + panneaux solaires", "Devis express par photos"]}
      areas={["Bouskoura Ville Verte", "Bouskoura Golf City", "Victoria", "Casablanca Sud"]}
      details={[
        { title: "Grandes Baies Vitrées de Villas", text: "Nettoyage spécialisé des baies à galandage, verrières et fenêtres grande hauteur sans aucune trace résiduelle." },
        { title: "Panneaux Solaires Résidentiels", text: "Décrassage de vos panneaux photovoltaïques en toiture pour maximiser l'autoconsommation électrique de votre villa." },
        { title: "Commerces & Bureaux à Bouskoura", text: "Entretien des vitrines de commerces et devantures d'agences dans les centres d'affaires de Bouskoura." },
        { title: "Équipe Respectueuse & Ponctuelle", text: "Intervention soignée et discrète dans votre propriété avec matériel sécurisé et bâches de protection." },
      ]}
      faqs={[
        {
          q: "Proposez-vous un pack combiné Vitres + Panneaux Solaires pour les villas à Bouskoura ?",
          a: "Oui ! C'est notre formule la plus demandée à Bouskoura : nous nettoyons l'ensemble des baies vitrées et vos panneaux solaires en toiture lors de la même intervention à tarif avantageux.",
        },
      ]}
    />
  );
}
