import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const canonicalPath = "/nettoyage-vitres-casablanca";
const siteUrl = "https://www.vitres.online";
const url = `${siteUrl}${canonicalPath}`;
const title = "Nettoyage de vitres à Casablanca | Devis VITRIX";
const description =
  "Lavage de vitres, vitrines et baies vitrées à Casablanca. VITRIX intervient pour les logements, commerces et bureaux. Demandez votre devis sur WhatsApp.";
const image = "/service-vitrines.jpg";
const imageAlt = "Nettoyage des vitres d’une boutique";
const cities = ["Casablanca", "Bouskoura", "Dar Bouazza", "Nouaceur", "Daroua"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    siteName: "VITRIX",
    locale: "fr_MA",
    title,
    description,
    url,
    images: [{ url: image, alt: imageAlt }],
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  name: "Nettoyage de vitres à Casablanca",
  serviceType: "Nettoyage de vitres, vitrines et baies vitrées",
  url,
  description,
  provider: { "@id": `${siteUrl}/#organization` },
  areaServed: cities.map((name) => ({ "@type": "Place", name })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <SeoServicePage
        eyebrow="VITRES, VITRINES ET BAIES VITRÉES"
        title="Nettoyage de vitres à Casablanca"
        intro="Vous cherchez une entreprise de nettoyage de vitres ? VITRIX assure le lavage des fenêtres et baies vitrées des logements, ainsi que l’entretien des vitrines de magasins, bureaux et restaurants."
        image={image}
        imageAlt={imageAlt}
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour un nettoyage de vitres à Casablanca."
        canonicalPath={canonicalPath}
        benefits={["Logements et locaux professionnels", "Passage ponctuel ou régulier", "Devis adapté à vos vitrages"]}
        areas={cities}
        details={[
          {
            title: "Fenêtres et baies vitrées des logements",
            text: "Pour une maison, un appartement ou une villa, précisez le nombre de fenêtres ou de baies et les faces à nettoyer. Signalez les vitrages fixes et les traces de calcaire afin que le devis tienne compte de ces surfaces.",
          },
          {
            title: "Entretien de vitrines et de vitres de bureaux",
            text: "Pour un magasin, un restaurant ou un bureau, indiquez le linéaire de vitrine ou le nombre de vitrages et vos contraintes d’ouverture. Précisez si vous souhaitez un nettoyage ponctuel ou un entretien régulier.",
          },
          {
            title: "Accès aux vitrages extérieurs",
            text: "Indiquez l’étage, la hauteur approximative et l’accès depuis le sol, une terrasse ou un balcon. Une photo de la zone suffit pour décrire un vitrage difficile d’accès sans monter en hauteur.",
          },
          {
            title: "Préparer votre devis sur WhatsApp",
            text: "Envoyez votre ville, votre quartier, deux ou trois photos et le nombre de surfaces à laver. Mentionnez les cadres ou rails si vous souhaitez les inclure pour convenir du périmètre de l’intervention.",
          },
        ]}
        faqs={[
          {
            q: "Quel est le prix d’un nettoyage de vitres à Casablanca ?",
            a: "Le tarif dépend du nombre et de la taille des vitrages, du nettoyage d’une ou des deux faces, de la hauteur et de l’état des surfaces. Pour obtenir une estimation, envoyez des photos et les dimensions approximatives.",
          },
          {
            q: "Peut-on faire nettoyer uniquement les vitres extérieures ?",
            a: "Précisez si vous souhaitez uniquement la face extérieure ou un lavage intérieur et extérieur. Nous examinons l’accès et les surfaces à traiter lors de la préparation du devis.",
          },
          {
            q: "Comment organiser un nettoyage régulier de vitrine ?",
            a: "Indiquez la fréquence souhaitée et les plages qui conviennent à votre commerce. VITRIX vous confirme les modalités et les créneaux selon l’adresse et la prestation.",
          },
          {
            q: "Quelles villes desservez-vous en dehors de Casablanca ?",
            a: "Vous pouvez demander un devis à Bouskoura, Dar Bouazza, Nouaceur et Daroua. Donnez votre quartier et le type de vitrage pour vérifier les possibilités d’intervention.",
          },
        ]}
      />
    </>
  );
}
