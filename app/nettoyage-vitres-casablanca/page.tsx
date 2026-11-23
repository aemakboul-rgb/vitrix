import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage de Vitres Casablanca | Devis Express WhatsApp | VITRIX";
const description =
  "VITRIX assure le nettoyage professionnel de vitres à Casablanca pour vitrines, commerces, bureaux, restaurants et baies vitrées de villas. Devis express sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitres-casablanca" },
  keywords: [
    "nettoyage vitres Casablanca",
    "laveur de vitres Casablanca",
    "nettoyage vitrines magasins Casablanca",
    "nettoyage vitres bureaux Casablanca",
    "nettoyage baie vitrée Casablanca",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-vitres-casablanca",
    images: [{ url: "/service-vitrines.jpg", width: 1200, height: 900, alt: "Nettoyage professionnel de vitres à Casablanca" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="NETTOYAGE VITRES & BAIES VITRÉES"
      title="Nettoyage Professionnel de Vitres à Casablanca"
      intro="Un service rapide, soigné et sans traces pour vitrines de magasins, bureaux d'entreprises, restaurants et grandes baies vitrées à Casablanca."
      image="/service-vitrines.jpg"
      imageAlt="Nettoyage professionnel d'une vitrine de magasin à Casablanca"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour un nettoyage de vitres à Casablanca."
      canonicalPath="/nettoyage-vitres-casablanca"
      benefits={["Résultat zéro trace garanti", "Passages ponctuels ou contrat régulier", "Casablanca & alentours"]}
      areas={["Maarif", "Gauthier", "Sidi Maârouf", "Ain Sebaa", "Bourgogne", "Bouskoura", "Dar Bouazza"]}
      details={[
        { title: "Pour Professionnels & Particuliers", text: "Vitrines de magasins, bureaux, agences, restaurants, cafés, villas et baies vitrées complexes." },
        { title: "Estimation Express WhatsApp", text: "Envoyez 2 ou 3 photos sur WhatsApp pour recevoir une estimation claire sous quelques minutes avant intervention." },
        { title: "Finition Cristal Sans Trace", text: "Raclettes professionnelles et eau purifiée pour éliminer traces de doigts, calcaire, gras et poussière incrustée." },
        { title: "Horaires Ultra Flexibles", text: "Intervention possible tôt le matin avant ouverture ou en soirée selon le rythme de votre commerce." },
      ]}
      faqs={[
        {
          q: "Comment calculer le prix d'un nettoyage de vitres à Casablanca ?",
          a: "Le tarif dépend de la surface totale en m², de la hauteur d'accès et de l'état de saleté. En nous envoyant des photos sur WhatsApp, vous obtenez un devis immédiat.",
        },
        {
          q: "Proposez-vous des abonnements pour les commerces ?",
          a: "Oui, nous mettons en place des contrats de passage hebdomadaire, bimensuel ou mensuel pour garantir des vitres éclatantes toute l'année avec un tarif réduit.",
        },
      ]}
    />
  );
}
