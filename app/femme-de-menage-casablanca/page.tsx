import type { Metadata } from "next";
import MenageForm from "./form";

const title = "Femme de ménage à Casablanca | Service de ménage à domicile | VITRIX";
const description = "Vous cherchez une femme de ménage à Casablanca ? Contactez VITRIX pour votre ménage à domicile, à Bouskoura, Dar Bouazza, Nouaceur et Daroua. Devis par WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/femme-de-menage-casablanca" },
  openGraph: { title, description, url: "https://www.vitres.online/femme-de-menage-casablanca" },
};

export default function Page() {
  return <main><MenageForm /></main>;
  /* <SeoServicePage
      eyebrow="MÉNAGE À DOMICILE"
      title="Femme de ménage à Casablanca"
      intro="Vous cherchez une aide pour le ménage de votre maison ou appartement ? Contactez VITRIX pour nous présenter vos besoins et recevoir un devis adapté."
      image="/clean-office-cafe-glass.webp"
      imageAlt="Intérieur propre et lumineux"
      whatsappMessage="Bonjour VITRIX, je souhaite un devis pour une femme de ménage à domicile."
      canonicalPath="/femme-de-menage-casablanca"
      benefits={["Ménage de maison et appartement", "Devis adapté à vos besoins", "Contact direct par WhatsApp"]}
      areas={["Casablanca", "Bouskoura", "Dar Bouazza", "Nouaceur", "Daroua"]}
      details={[
        { title: "Ménage à domicile", text: "Présentez-nous votre logement et les tâches de ménage souhaitées pour préparer une intervention adaptée." },
        { title: "Maison ou appartement", text: "Que vous habitiez une maison ou un appartement, indiquez-nous la surface et les pièces concernées." },
        { title: "Selon vos besoins", text: "Précisez vos disponibilités et la fréquence souhaitée lors de votre demande de devis." },
        { title: "Demande simple", text: "Contactez-nous sur WhatsApp avec votre quartier, votre besoin et, si possible, des photos." },
      ]}
      faqs={[
        { q: "Comment demander une femme de ménage à Casablanca ?", a: "Contactez VITRIX par WhatsApp ou par téléphone et indiquez votre quartier, le type de logement et vos besoins." },
        { q: "Quel est le prix du ménage à domicile ?", a: "Le tarif dépend du logement, des tâches demandées et de la durée de l'intervention. Contactez-nous pour un devis personnalisé." },
        { q: "Dans quelles zones intervenez-vous ?", a: "Contactez-nous pour une intervention à Casablanca, Bouskoura, Dar Bouazza, Nouaceur ou Daroua." },
      ]}
    /> */
}
