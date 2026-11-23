import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Enseignes Lumineuses & Logos Casablanca | VITRIX";
const description =
  "Nettoyage professionnel d'enseignes lumineuses, caissons, lettrages 3D et panneaux publicitaires à Casablanca. Ravivez la visibilité de votre magasin. Devis WhatsApp rapide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-enseignes-magasins-casablanca" },
  keywords: [
    "nettoyage enseigne lumineuse Casablanca",
    "nettoyage logo magasin Casablanca",
    "lavage caisson lumineux Casablanca",
    "entretien enseigne publicitaire Casablanca",
    "nettoyage devanture magasin Casablanca",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-enseignes-magasins-casablanca",
    images: [{ url: "/service-facades-alucobond.jpg", width: 1200, height: 900, alt: "Nettoyage d'enseigne lumineuse et logo à Casablanca" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage d'Enseignes Lumineuses & Logos Commerciaux",
      serviceType: "Nettoyage d'enseignes et panneaux publicitaires",
      provider: {
        "@type": "LocalBusiness",
        name: "VITRIX",
        telephone: "+212705540864",
        url: "https://vitres.online",
      },
      areaServed: ["Casablanca", "Maarif", "Gauthier", "Ain Sebaa", "Centre-ville"],
      description,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Peut-on nettoyer une enseigne lumineuse électrique en toute sécurité ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous utilisons des techniques d'application contrôlée et des produits isolants non conducteurs qui éliminent la poussière et les insectes sans risque de court-circuit pour vos modules LED ou néons.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SeoServicePage
        eyebrow="ENSEIGNES, LOGOS & DEVANTURES"
        title="Nettoyage d'Enseignes Lumineuses & Logos à Casablanca"
        intro="Redonnez vie à l'identité visuelle de votre commerce. Nettoyage soigné des caissons lumineux, lettres en relief (3D), néons et panneaux publicitaires à Casablanca."
        image="/service-facades-alucobond.jpg"
        imageAlt="Nettoyage d'enseigne lumineuse et logo de magasin à Casablanca"
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de mon enseigne / logo de magasin à Casablanca."
        canonicalPath="/nettoyage-enseignes-magasins-casablanca"
        benefits={["Éclairage et couleurs ravivés", "Technique sécurisée pour composants LED", "Devis instantané sur WhatsApp"]}
        areas={["Maarif", "Centre-ville", "Gauthier", "Ain Diab", "Bourgogne", "Ain Sebaa", "Casablanca"]}
        details={[
          {
            title: "Visibilité Maximale de Nuit comme de Jour",
            text: "Une enseigne couverte de poussière ou ternie perd plus de 40% de sa luminosité. Notre nettoyage redonne un impact visuel percutant pour attirer les passants.",
          },
          {
            title: "Tous Types d'Enseignes",
            text: "Caissons lumineux en plexiglas, lettrages découpés en inox, acrylique, lettres boîtiers avec rétro-éclairage LED et bâches tendues.",
          },
          {
            title: "Dépoussiérage & Anti-Mousse",
            text: "Élimination des fientes, toiles d'araignées, insectes accumulés et traces d'humidité incrustées dans les reliefs du lettrage.",
          },
          {
            title: "Intervention Sans Échafaudage Lourd",
            text: "Grâce à notre matériel haute portée télescopique, nous intervenons rapidement sans perturber la circulation devant votre boutique.",
          },
        ]}
        faqs={[
          {
            q: "Nettoyez-vous l'intérieur des caissons lumineux ?",
            a: "Lorsque les caissons sont ouvrants et accessibles, nous pouvons dépoussiérer les plaques diffusantes internes et retirer les insectes accumulés pour une diffusion de lumière parfaite.",
          },
          {
            q: "Quel est le délai pour une intervention à Casablanca ?",
            a: "Nous intervenons généralement dans les 24 à 48 heures suivant la validation de votre devis sur WhatsApp.",
          },
        ]}
      />
    </>
  );
}
