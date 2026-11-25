import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conseils de nettoyage : panneaux solaires, vitres et ménage | VITRIX",
  description: "Comment préparer un devis de nettoyage de panneaux solaires, de vitres ou de ménage à domicile à Casablanca et ses environs ? Les conseils VITRIX.",
  alternates: { canonical: "/conseils-nettoyage-casablanca" },
};

export default function Page() {
  return <main className="shell section" style={{maxWidth:800,lineHeight:1.8}}>
    <a href="/">← Accueil VITRIX</a>
    <h1>Nettoyage à Casablanca : comment préparer votre demande de devis ?</h1>
    <p>Pour un nettoyage de panneaux solaires, de vitres ou un ménage à domicile, quelques informations permettent de mieux comprendre votre besoin et de préparer une estimation adaptée.</p>
    <h2>Nettoyage de panneaux solaires</h2>
    <p>Indiquez le nombre de panneaux, leur emplacement, la hauteur et les possibilités d’accès. Une photo de l’installation et de la toiture permet de mieux évaluer l’intervention. La fréquence d’entretien dépend notamment de l’exposition à la poussière, au sable et aux fientes. Pour votre sécurité, évitez de monter sur une toiture ou de manipuler les équipements électriques vous-même.</p>
    <p><a href="/nettoyage-panneaux-solaires-casablanca">Découvrir le nettoyage de panneaux solaires →</a></p>
    <h2>Nettoyage de vitres et vitrines</h2>
    <p>Précisez s’il s’agit de fenêtres, de baies vitrées ou d’une vitrine, ainsi que le nombre de surfaces et leur accessibilité. Signalez les traces ou dépôts particuliers et indiquez si vous souhaitez un passage ponctuel ou régulier.</p>
    <p><a href="/nettoyage-vitres-casablanca">Découvrir le nettoyage de vitres →</a></p>
    <h2>Femme de ménage à domicile</h2>
    <p>Pour une maison, une villa ou un appartement, indiquez votre ville et quartier, le type de logement, les tâches souhaitées et vos disponibilités. Le prix dépend du travail demandé et de la durée de l’intervention : contactez-nous pour un devis personnalisé.</p>
    <p><a href="/femme-de-menage-casablanca">Demander un devis de ménage →</a></p>
    <h2>Nos zones d’intervention</h2>
    <p>VITRIX reçoit vos demandes pour Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Contactez-nous pour vérifier les disponibilités selon votre adresse et votre besoin.</p>
    <p><a href="https://wa.me/212705540864" target="_blank" rel="noreferrer">Contacter VITRIX sur WhatsApp</a> · <a href="tel:+212705540864">07 05 54 08 64</a></p>
  </main>;
}
