import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Façades Alucobond & Magasins Casablanca | VITRIX";
const description =
  "Nettoyage professionnel de façades en Alucobond, bardages métalliques et devantures commerciales à Casablanca. Rénovation de l'image de votre magasin. Devis express sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-facades-alucobond-casablanca" },
  keywords: [
    "nettoyage façade alucobond Casablanca",
    "nettoyage façade magasin Casablanca",
    "lavage bardage métallique Casablanca",
    "entretien façade commerciale Casablanca",
    "nettoyage panneau composite Casablanca",
    "société nettoyage façade Casablanca",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-facades-alucobond-casablanca",
    images: [{ url: "/service-facades-alucobond.jpg", width: 1200, height: 900, alt: "Nettoyage de façade alucobond à Casablanca" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage de Façades Commerciales & Alucobond",
      serviceType: "Nettoyage de façades et bardages",
      provider: {
        "@type": "LocalBusiness",
        name: "VITRIX",
        telephone: "+212705540864",
        url: "https://vitres.online",
      },
      areaServed: ["Casablanca", "Maarif", "Sidi Maârouf", "Ain Sebaa", "Centre-ville", "Bouskoura"],
      description,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment nettoyer une façade en Alucobond sans l'abîmer ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'Alucobond nécessite des produits au pH neutre et des brosses souples non abrasives pour ne pas altérer le thermolaquage ni rayer les panneaux d'aluminium composites. VITRIX maîtrise cette technique.",
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous en hauteur pour les façades de plusieurs étages ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, nous disposons de perches télescopiques haute portée et d'équipements de sécurité adaptés pour laver vos façades et bardages en hauteur sans nacelle encombrante.",
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
        eyebrow="FAÇADES COMMERCIALES & ALUCOBOND"
        title="Nettoyage de Façades en Alucobond & Bardages à Casablanca"
        intro="Redonnez tout son éclat à la devanture de votre commerce. Nettoyage en profondeur des panneaux composites Alucobond, bardages métalliques et vitrines à Casablanca."
        image="/service-facades-alucobond.jpg"
        imageAlt="Nettoyage et rénovation de façade commerciale alucobond à Casablanca"
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de ma façade en Alucobond à Casablanca."
        canonicalPath="/nettoyage-facades-alucobond-casablanca"
        benefits={["Décrassage complet sans rayures", "Produits spécifiques anti-pollution", "Intervention rapide partout à Casablanca"]}
        areas={["Maarif", "Gauthier", "Sidi Maârouf", "Ain Sebaa", "Centre-ville", "Bourgogne", "Bouskoura"]}
        details={[
          {
            title: "Rénovation de l'Image de Marque",
            text: "L'Alucobond terne ou encrassé par la pollution urbaine vieillit votre établissement. Un décrassage professionnel redonne l'aspect du neuf à votre devanture.",
          },
          {
            title: "Technique Douce Respectueuse",
            text: "Nos détergents doux décollent la crasse tenace, le calcaire et les dépôts de gaz d'échappement sans agresser le vernis des panneaux composites.",
          },
          {
            title: "Boutiques, Banques & Showrooms",
            text: "Une solution pensée pour les boutiques de prêt-à-porter, agences bancaires, concessions, cliniques et sièges d'entreprises.",
          },
          {
            title: "Pack Façade + Vitres",
            text: "Combinez le nettoyage de vos panneaux Alucobond avec le lavage de vos vitrines pour une façade 100% éclatante d'un seul coup.",
          },
        ]}
        faqs={[
          {
            q: "Quels types de salissures pouvez-vous éliminer sur l'Alucobond ?",
            a: "Nous éliminons les traces noires de pollution, la poussière incrustée, les coulures d'eau de pluie, les dépôts d'oxydation et les résidus de rubans adhésifs ou d'affiches.",
          },
          {
            q: "Faut-il couper l'activité de mon magasin pendant le nettoyage ?",
            a: "Non, nos équipes interviennent rapidement et proprement, soit avant vos heures d'ouverture, soit en journée sans bloquer l'accès à vos clients.",
          },
          {
            q: "Comment recevoir un devis gratuit ?",
            a: "Prenez 2 ou 3 photos de votre façade de magasin et envoyez-les sur notre WhatsApp au 07 05 54 08 64. Vous recevez un tarif clair sous quelques minutes.",
          },
        ]}
      />
    </>
  );
}
