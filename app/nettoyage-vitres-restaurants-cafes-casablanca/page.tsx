import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Vitres Restaurants & Cafés Casablanca | VITRIX";
const description =
  "VITRIX nettoie les vitrines, baies vitrées et terrasses de restaurants et cafés à Casablanca (Gauthier, Maarif, Ain Diab). Devis express sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitres-restaurants-cafes-casablanca" },
  keywords: [
    "nettoyage vitres restaurant Casablanca",
    "lavage vitres café Casablanca",
    "nettoyage baie vitrée terrasse restaurant",
    "entretien vitrine café Maarif",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-vitres-restaurants-cafes-casablanca",
    images: [{ url: "/clean-office-cafe-glass.webp", width: 1200, height: 900, alt: "Nettoyage de vitrine de restaurant à Casablanca" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="RESTAURANTS, CAFÉS & TERRASSES"
      title="Nettoyage de Vitres pour Restaurants & Cafés à Casablanca"
      intro="Des vitrines et baies vitrées impeccables pour offrir une vue agréable à vos clients et une façade accueillante du petit-déjeuner au dîner."
      image="/clean-office-cafe-glass.webp"
      imageAlt="Vitrines propres d'un restaurant ou café à Casablanca"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage des vitres de mon restaurant / café à Casablanca."
      canonicalPath="/nettoyage-vitres-restaurants-cafes-casablanca"
      benefits={["Façade et terrasse accueillantes", "Passages matinaux avant l'ouverture", "Devis express sur WhatsApp"]}
      areas={["Racine", "Gauthier", "Maarif", "Bourgogne", "Ain Diab", "Anfa", "Casablanca"]}
      details={[
        { title: "Intervention Avant l'Ouverture", text: "Nous nettoyons tôt le matin pour que vos baies soient étincelantes avant l'arrivée des premiers clients." },
        { title: "Traces de Doigts & Graisses", text: "Élimination des projections, traces de mains, buée et résidus gras fréquents dans le secteur CHR." },
        { title: "Baies Vitrées de Terrasses", text: "Nettoyage des parois vitrées télescopiques et pare-vent extérieurs pour une vue dégagée." },
        { title: "Passages Rapprochés", text: "Possibilité de passages 2 à 3 fois par semaine pour les établissements à fort passage." },
      ]}
      faqs={[
        {
          q: "Nettoyez-vous aussi les enseignes de restaurants ?",
          a: "Oui, nous pouvons décrasser vos enseignes lumineuses de façade et vos panneaux de menu en même temps que vos vitrines.",
        },
      ]}
    />
  );
}
