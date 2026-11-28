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
  return <main><MenageForm />
    <section className="shell section" style={{ maxWidth: 850, lineHeight: 1.8 }} aria-labelledby="menage-faq">
      <h2 id="menage-faq">Questions sur le ménage à domicile</h2>
      <h3>Comment demander une femme de ménage ?</h3>
      <p>Remplissez le formulaire en indiquant votre ville, votre quartier, votre type de logement et la fréquence souhaitée. Votre demande sera préparée dans WhatsApp pour que vous puissiez la vérifier et l’envoyer.</p>
      <h3>Quel est le prix d’une prestation de ménage ?</h3>
      <p>Le devis dépend du logement, des tâches demandées et de la durée de l’intervention. Contactez VITRIX pour obtenir une estimation adaptée à vos besoins.</p>
      <h3>Dans quelles villes intervenez-vous ?</h3>
      <p>Nous recevons vos demandes à Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Les disponibilités sont à confirmer selon votre adresse et vos besoins.</p>
      <p><a href="/conseils-nettoyage-casablanca">Conseils pour préparer votre demande de devis</a> · <a href="/">Découvrir les services VITRIX</a></p>
    </section>
  </main>;
}
