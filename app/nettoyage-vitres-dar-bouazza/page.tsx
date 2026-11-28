import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Vitres, Façades & Baies Dar Bouazza | VITRIX";
const description =
  "Nettoyage professionnel de vitres, baies vitrées et façades à Dar Bouazza et Tamaris. Élimination des embruns marins et du sable. Devis rapide sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-vitres-dar-bouazza" },
  keywords: [
    "nettoyage vitres Dar Bouazza",
    "nettoyage baie vitrée Tamaris",
    "lavage vitres villa Dar Bouazza",
    "enlèvement sel embruns vitres Casablanca",
  ],
  openGraph: {
    title,
    description,
    url: "https://www.vitres.online/nettoyage-vitres-dar-bouazza",
    images: [{ url: "/service-vitrines.jpg", width: 1200, height: 900, alt: "Nettoyage de vitres et baies vitrées à Dar Bouazza" }],
  },
};

export default function Page() {
  return (
    <SeoServicePage
      eyebrow="DAR BOUAZZA & TAMARIS"
      title="Nettoyage de Vitres & Baies Vitrées à Dar Bouazza"
      intro="Service spécialisé bord de mer pour éliminer le voile de sel, les embruns marins et le sable sur les baies vitrées de villas et commerces à Dar Bouazza."
      image="/service-vitrines.jpg"
      imageAlt="Nettoyage professionnel de vitres de villa à Dar Bouazza et Tamaris"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de vitres / baies à Dar Bouazza."
      canonicalPath="/nettoyage-vitres-dar-bouazza"
      benefits={["Traitement anti-sel et embruns", "Villas, résidences & commerces", "Devis instantané sur WhatsApp"]}
      areas={["Dar Bouazza", "Tamaris", "Oued Merzeg", "Plage Jack Beach", "Casablanca Ouest"]}
      details={[
        { title: "Élimination du Sel & Calcaire Marin", text: "En bord de mer, l'air iodé forme un dépôt blanc corrosif sur le verre. Notre lavage élimine ce voile et redonne une transparence totale." },
        { title: "Baies Vitrées Vue Mer", text: "Profitez à 100% de votre panorama sans aucune trace, reflet opaque ou coulure de condensation saline." },
        { title: "Panneaux Solaires Côtier", text: "Lavage des panneaux photovoltaïques encrassés par le mélange humidité marine et sable pour relancer la production d'énergie." },
        { title: "Restaurants & Lounges de Plage", text: "Intervention rapide pour les établissements CHR de Dar Bouazza et Tamaris souhaitant une terrasse éclatante." },
      ]}
      faqs={[
        {
          q: "Comment protéger les vitres du sel après le nettoyage ?",
          a: "Nos produits de finition déposent un film hydrophobe protecteur invisible qui retarde l'adhérence des embruns marins et facilite l'évacuation de l'eau.",
        },
      ]}
    />
  );
}
