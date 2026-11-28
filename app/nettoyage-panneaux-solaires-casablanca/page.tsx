import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const path = "/nettoyage-panneaux-solaires-casablanca";
const url = `https://www.vitres.online${path}`;
const title = "Nettoyage de panneaux solaires à Casablanca | VITRIX";
const description =
  "Nettoyage de panneaux solaires à Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Lavage à l’eau déminéralisée pour villas et entreprises. Devis sur WhatsApp.";
const image = "/service-panneaux-solaires.jpg";
const imageAlt = "Lavage de panneaux solaires photovoltaïques";
const areas = ["Casablanca", "Bouskoura", "Dar Bouazza", "Nouaceur", "Daroua"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
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
  name: "Nettoyage de panneaux solaires photovoltaïques",
  serviceType: "Lavage et entretien de panneaux solaires",
  url,
  description,
  provider: { "@id": "https://www.vitres.online/#organization" },
  areaServed: areas.map((name) => ({ "@type": "Place", name })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <SeoServicePage
        eyebrow="SOLAIRE & PHOTOVOLTAÏQUE"
        title="Nettoyage de panneaux solaires à Casablanca"
        intro="VITRIX, entreprise de nettoyage à Casablanca, assure le lavage de panneaux photovoltaïques pour les villas et les sites professionnels. Nous intervenons aussi à Bouskoura, Dar Bouazza, Nouaceur et Daroua."
        image={image}
        imageAlt={imageAlt}
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes panneaux solaires. Ville ou quartier :"
        canonicalPath={path}
        benefits={["Eau déminéralisée", "Brosses douces", "Passage ponctuel ou entretien périodique"]}
        areas={areas}
        details={[
          {
            title: "Retirer les dépôts sur le verre",
            text: "Poussière, sable, fientes et embruns peuvent masquer une partie des modules. À Dar Bouazza, par exemple, signalez les dépôts visibles après un épisode de vent côtier.",
          },
          {
            title: "Choisir une méthode adaptée aux panneaux",
            text: "L’équipe utilise de l’eau déminéralisée et des brosses douces adaptées au verre. Si vous avez la référence du module ou sa notice d’entretien, transmettez-la avec votre demande pour tenir compte des consignes du fabricant.",
          },
          {
            title: "Évaluer l’accès à votre installation",
            text: "Nous examinons les conditions d’accès et la disposition des panneaux avant de confirmer l’intervention. Précisez s’il s’agit d’une terrasse de villa, d’une toiture de bâtiment professionnel ou d’une installation au sol.",
          },
          {
            title: "Planifier un passage ou un entretien régulier",
            text: "Un lavage ponctuel peut répondre à un encrassement visible. Pour un site où les dépôts reviennent souvent, demandez un calendrier d’entretien adapté à son exposition et à vos contraintes d’accès.",
          },
        ]}
        faqs={[
          {
            q: "Quel est le prix du nettoyage de panneaux solaires à Casablanca ?",
            a: "Le prix dépend du nombre de panneaux, de la hauteur, de l’accès au toit et des dépôts à retirer. Précisez si vous souhaitez un seul passage ou un entretien périodique pour obtenir un devis correspondant à votre installation.",
          },
          {
            q: "Quelles informations envoyer pour un devis de lavage photovoltaïque ?",
            a: "Sur WhatsApp, indiquez votre ville et quartier, le nombre approximatif de modules, le type de toiture et vos disponibilités. Joignez une vue prise depuis un endroit sûr qui montre les panneaux et, si possible, leur accès.",
          },
          {
            q: "À quelle fréquence faut-il entretenir les panneaux photovoltaïques ?",
            a: "L’exposition et l’état du verre comptent davantage qu’un délai fixe. La poussière d’une zone de travaux, les embruns près du littoral ou des fientes visibles peuvent justifier un passage plus tôt.",
          },
          {
            q: "La pluie suffit-elle pour nettoyer une installation solaire ?",
            a: "La pluie peut évacuer une partie de la poussière, mais certains dépôts restent accrochés au verre. Si des traces ou des fientes sont encore visibles, envoyez une photo pour évaluer la situation.",
          },
          {
            q: "Quel gain de production peut-on attendre après le nettoyage ?",
            a: "L’effet dépend de l’encrassement initial et des conditions d’ensoleillement. En cas de baisse persistante après le lavage, demandez à votre installateur photovoltaïque de vérifier le fonctionnement du système.",
          },
          {
            q: "Dans quelles villes pouvez-vous nettoyer mes panneaux solaires ?",
            a: "Nous traitons les demandes à Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Indiquez le quartier et le type de bâtiment pour que nous puissions vérifier l’accès et les créneaux.",
          },
        ]}
      />
    </>
  );
}
