import type { Metadata } from "next";
import { SeoServicePage } from "../seo-page";

const title = "Nettoyage Panneaux Solaires Casablanca | Gain +30% Rendement | VITRIX";
const description =
  "Nettoyage professionnel de panneaux solaires photovoltaïques à Casablanca, Bouskoura et Dar Bouazza. Lavage à l'eau pure osmosée, regagnez jusqu'à 30% d'énergie. Devis gratuit sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/nettoyage-panneaux-solaires-casablanca" },
  keywords: [
    "nettoyage panneaux solaires Casablanca",
    "lavage panneau solaire Casablanca",
    "entretien photovoltaïque Casablanca",
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
      areaServed: ["Casablanca", "Bouskoura", "Dar Bouazza", "Mohammedia", "Nouaceur"],
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
            text: "À cause du sable, de la poussière et des fientes d'oiseaux, vos panneaux solaires perdent entre 15% et 30% de leur rendement électrique. Un nettoyage à l'eau pure permet de retrouver 100% de la puissance.",
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
        title="Nettoyage Professionnel de Panneaux Solaires à Casablanca"
        intro="Maximisez votre production d'électricité solaire. Un nettoyage spécialisé à l'eau pure osmosée pour villas, toitures d'entreprises, usines et fermes solaires."
        image="/service-panneaux-solaires.jpg"
        imageAlt="Nettoyage professionnel de panneaux solaires photovoltaïques à Casablanca"
        whatsappMessage="Bonjour VITRIX, je souhaite un devis pour le nettoyage de mes panneaux solaires à Casablanca."
        canonicalPath="/nettoyage-panneaux-solaires-casablanca"
        benefits={["+15% à +30% de production d'énergie", "Eau déminéralisée 100% anti-rayures", "Casablanca, Bouskoura & Dar Bouazza"]}
        areas={["Casablanca", "Bouskoura Ville Verte", "Dar Bouazza", "California", "Ain Sebaa", "Mohammedia", "Nouaceur"]}
        details={[
          {
            title: "Rentabilité Immédiate",
            text: "La saleté accumulée agit comme un écran occultant. Un simple lavage permet de rentabiliser instantanément votre investissement en électricité solaire produite.",
          },
          {
            title: "Eau Pure Déminéralisée",
            text: "Zéro calcaire, zéro trace et zéro produit abrasif. Nous préservons l'intégrité du verre antireflet et la garantie constructeur de vos panneaux.",
          },
          {
            title: "Villas & Parcs Industriels",
            text: "Intervention sur toitures de villas privées, hangars industriels, sièges d'entreprises et installations au sol en toute sécurité.",
          },
          {
            title: "Contrats d'Entretien Périodique",
            text: "Planifiez 2 à 4 passages annuels selon l'exposition de votre site pour maintenir une production énergétique optimale toute l'année.",
          },
        ]}
        faqs={[
          {
            q: "À quelle fréquence faut-il nettoyer les panneaux solaires à Casablanca ?",
            a: "Dans la région de Casablanca et Bouskoura, en raison de l'humidité et de la poussière côtière/urbaine, un nettoyage tous les 3 à 6 mois est fortement recommandé pour éviter une perte d'énergie continue.",
          },
          {
            q: "Peut-on nettoyer les panneaux solaires avec un Kärcher ou de l'eau du robinet ?",
            a: "Non ! La haute pression peut endommager les joints d'étanchéité des cellules, et l'eau du robinet laisse des dépôts de calcaire indélébiles qui diminuent la transparence. VITRIX utilise exclusivement de l'eau pure et des brosses spécifiques.",
          },
          {
            q: "Comment recevoir un devis rapide ?",
            a: "Envoyez le nombre de panneaux et une photo de votre toiture sur notre WhatsApp (+212 7 05 54 08 64) pour une estimation sous quelques minutes.",
          },
        ]}
      />
    </>
  );
}
