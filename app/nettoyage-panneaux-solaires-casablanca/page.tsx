import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage & Lavage de Panneaux Solaires à Casablanca | VITRIX";
const description =
  "Nettoyage professionnel de panneaux solaires photovoltaïques à Casablanca, Bouskoura et Dar Bouazza. Lavage à l'eau pure, brosses douces et devis rapide par WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-panneaux-solaires-casablanca" },
  keywords: [
    "nettoyage panneaux solaires Casablanca",
    "lavage panneau solaire Casablanca",
    "entretien photovoltaïque Casablanca",
    "nettoyage photovoltaïque Casablanca",
    "prix nettoyage panneaux solaires Casablanca",
    "devis nettoyage panneaux solaires Casablanca",
    "nettoyage panneaux solaires Bouskoura",
    "nettoyage panneau solaire Dar Bouazza",
    "société nettoyage panneaux solaires Maroc",
  ],
  openGraph: {
    title,
    description,
    url: "https://vitres.online/nettoyage-panneaux-solaires-casablanca",
    images: [{ url: "/service-panneaux-solaires.jpg", width: 1200, height: 900, alt: "Nettoyage de panneaux solaires à Casablanca" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Nettoyage de Panneaux Solaires Photovoltaïques",
      serviceType: "Nettoyage et entretien de panneaux solaires",
      provider: {
        "@type": "LocalBusiness",
        name: "VITRIX",
        telephone: "+212705540864",
        url: "https://vitres.online",
      },
      areaServed: ["Casablanca", "Bouskoura", "Dar Bouazza"],
      description,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi nettoyer ses panneaux solaires à Casablanca ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La poussière, le sable, les embruns et les fientes d'oiseaux réduisent la lumière qui atteint les modules. Un nettoyage professionnel à l'eau pure aide à limiter les pertes liées à l'encrassement.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle technique utilise VITRIX pour ne pas rayer les panneaux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous utilisons de l'eau déminéralisée et des brosses télescopiques à poils doux spécialement conçues pour le photovoltaïque, sans aucun produit corrosif ni nettoyeur haute pression agressif.",
          },
        },
        {
          "@type": "Question",
          name: "Comment est calculé le prix d'un nettoyage de panneaux solaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le devis dépend notamment du nombre de panneaux, de l'accessibilité de la toiture, de la hauteur, du niveau d'encrassement et de la zone d'intervention. Envoyez une photo sur WhatsApp pour recevoir une estimation adaptée.",
          },
        },
        {
          "@type": "Question",
          name: "Dans quelles zones intervenez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VITRIX intervient à Casablanca, Bouskoura et Dar Bouazza pour les villas, commerces, bureaux et installations photovoltaïques.",
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
        eyebrow="SOLAIRE & PHOTOVOLTAÏQUE"
        title="Nettoyage & Lavage de Panneaux Solaires à Casablanca"
        intro="Entretien photovoltaïque à l'eau pure pour villas, toitures d'entreprises et installations solaires à Casablanca, Bouskoura et Dar Bouazza."
        image="/service-panneaux-solaires.jpg"
        imageAlt="Nettoyage professionnel de panneaux solaires photovoltaïques à Casablanca"
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes panneaux solaires à Casablanca."
        canonicalPath="/nettoyage-panneaux-solaires-casablanca"
        benefits={["Eau déminéralisée sans calcaire", "Brosses douces adaptées au photovoltaïque", "Casablanca, Bouskoura & Dar Bouazza"]}
        areas={["Casablanca", "Bouskoura Ville Verte", "Dar Bouazza", "California", "Ain Sebaa"]}
        details={[
          {
            title: "Production préservée",
            text: "La poussière, le sable, les embruns et les fientes créent un voile sur le verre. Un lavage régulier aide vos modules à recevoir la lumière dans de meilleures conditions.",
          },
          {
            title: "Eau Pure Déminéralisée",
            text: "Zéro calcaire, zéro trace et zéro produit abrasif. Nous préservons l'intégrité du verre antireflet et la garantie constructeur de vos panneaux.",
          },
          {
            title: "Villas, entreprises & toitures",
            text: "Intervention sur toitures de villas privées, commerces, bureaux et installations photovoltaïques, avec une méthode adaptée à l'accès de votre site.",
          },
          {
            title: "Contrats d'Entretien Périodique",
            text: "Planifiez 2 à 4 passages annuels selon l'exposition de votre site pour maintenir une production énergétique optimale toute l'année.",
          },
        ]}
        faqs={[
          {
            q: "À quelle fréquence faut-il nettoyer les panneaux solaires à Casablanca ?",
            a: "La fréquence dépend de l'exposition au sable, à la poussière, aux embruns ou aux fientes d'oiseaux. Après un échange sur WhatsApp et quelques photos, VITRIX peut vous conseiller un rythme d'entretien adapté à votre installation.",
          },
          {
            q: "Peut-on nettoyer les panneaux solaires avec un Kärcher ou de l'eau du robinet ?",
            a: "Non ! La haute pression peut endommager les joints d'étanchéité des cellules, et l'eau du robinet laisse des dépôts de calcaire indélébiles qui diminuent la transparence. VITRIX utilise exclusivement de l'eau pure et des brosses spécifiques.",
          },
          {
            q: "Comment recevoir un devis rapide ?",
            a: "Envoyez le nombre de panneaux et une photo de votre toiture sur notre WhatsApp (+212 7 05 54 08 64) pour une estimation sous quelques minutes.",
          },
          {
            q: "Comment est calculé le prix du nettoyage des panneaux solaires ?",
            a: "Le devis tient compte du nombre de panneaux, de la hauteur, de l'accès au toit, de l'état d'encrassement et de votre zone d'intervention : Casablanca, Bouskoura ou Dar Bouazza. Envoyez une photo pour une estimation adaptée.",
          },
          {
            q: "Intervenez-vous à Bouskoura et Dar Bouazza ?",
            a: "Oui. VITRIX intervient à Casablanca, Bouskoura et Dar Bouazza pour les villas, commerces, bureaux et installations photovoltaïques.",
          },
        ]}
      />
    </>
  );
}
