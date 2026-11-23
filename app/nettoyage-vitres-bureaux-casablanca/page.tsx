import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Vitres de Bureaux Casablanca | Espaces Pro | VITRIX";
const description =
  "Nettoyage professionnel de vitres pour bureaux, sièges sociaux et agences à Casablanca (Casanearshore, Sidi Maârouf, Maarif). Devis rapide sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitres-bureaux-casablanca" },
  keywords: [
    "nettoyage vitres bureaux Casablanca",
    "lavage vitres Casanearshore",
    "nettoyage vitres Sidi Maarouf",
    "entretien vitres entreprises Casablanca",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-vitres-bureaux-casablanca",
    images: [{ url: "/clean-office-cafe-glass.webp", width: 1200, height: 900, alt: "Nettoyage de vitres de bureaux à Casablanca" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="BUREAUX, AGENCES & SIÈGES SOCIAUX"
      title="Nettoyage de Vitres de Bureaux à Casablanca"
      intro="Un environnement de travail lumineux et soigné pour vos équipes et vos visiteurs. Intervention ponctuelle ou contrat régulier sans interruption de travail."
      image="/clean-office-cafe-glass.webp"
      imageAlt="Vitres de bureaux impeccablement nettoyées à Casablanca"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage des vitres de mes bureaux à Casablanca."
      canonicalPath="/nettoyage-vitres-bureaux-casablanca"
      benefits={["Luminosité maximale pour vos équipes", "Horaires flexibles sans gêne de travail", "Contrat annuel ou passage ponctuel"]}
      areas={["Sidi Maârouf", "Casanearshore", "Maarif", "Ain Sebaa", "Anfa", "Gauthier", "Casablanca"]}
      details={[
        { title: "Cloisons & Baies Vitrées", text: "Nettoyage des baies extérieures ainsi que des cloisons vitrées intérieures de vos salles de réunion." },
        { title: "Intervention Discrète & Silencieuse", text: "Créneaux programmés avant l'arrivée des collaborateurs ou en fin de journée pour préserver le calme du bureau." },
        { title: "Facturation Entreprise B2B", text: "Contrats formels avec facturation adaptée aux exigences administratives de votre société." },
        { title: "Matériel Haute Performance", text: "Aucune éclaboussure sur les moquettes ou le matériel informatique grâce à notre méthode par raclage microfibre." },
      ]}
      faqs={[
        {
          q: "Pouvez-vous intervenir les week-ends pour les entreprises ?",
          a: "Oui, nous pouvons planifier les interventions le samedi ou en dehors des heures de bureau pour un confort total de vos équipes.",
        },
      ]}
    />
  );
}
