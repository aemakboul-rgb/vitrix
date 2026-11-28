import type { Metadata } from "next";

const path = "/conseils-nettoyage-casablanca";
const title = "Devis de nettoyage à Casablanca | Le guide VITRIX";
const description = "Quels détails envoyer pour un devis de lavage de panneaux solaires, de vitres ou de ménage à domicile ? Les listes utiles et les points à vérifier.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", title, description, url: path, images: ["/hero-window-cleaning.webp"] },
};

export default function Page() {
  return (
    <main className="shell section" style={{ maxWidth: 800, lineHeight: 1.8 }}>
      <nav aria-label="Fil d’Ariane"><a href="/">← Accueil VITRIX</a></nav>
      <h1>Comment préparer un devis de nettoyage à Casablanca ?</h1>
      <p>Commencez par indiquer votre ville, votre quartier et le résultat attendu. Les informations utiles diffèrent ensuite selon le service. Voici quoi envoyer et ce que vous pouvez vérifier avant de confirmer.</p>
      <div className="faq-grid" style={{ marginBlock: 28 }}>
        <article>
          <h2>Pour des panneaux solaires</h2>
          <p>Donnez le nombre approximatif de modules et indiquez s’ils se trouvent au sol, sur un toit-terrasse ou sur une toiture inclinée. Une photo prise depuis un endroit sûr et une indication sur l’accès sont utiles. Précisez si vous souhaitez enlever un dépôt visible ou discuter d’un entretien régulier.</p>
          <p><a href="/nettoyage-panneaux-solaires-casablanca">Nettoyage de panneaux solaires et critères du devis →</a></p>
        </article>
        <article>
          <h2>Pour des fenêtres, baies ou vitrines</h2>
          <p>Comptez les surfaces vitrées et précisez les faces à nettoyer. Une baie intérieure accessible ne demande pas la même préparation qu’une vitrine en hauteur. Signalez aussi les dépôts particuliers, par exemple le calcaire ou des résidus d’autocollant, et les horaires d’ouverture si c’est un commerce.</p>
          <p><a href="/nettoyage-vitres-casablanca">Nettoyage de vitres pour logement ou commerce →</a></p>
        </article>
        <article>
          <h2>Pour un ménage à domicile</h2>
          <p>Indiquez le type de logement, les pièces prioritaires et le rythme souhaité. Par exemple, un passage ponctuel axé sur la cuisine et la salle de bain demande un devis différent d’un entretien régulier de toutes les pièces. Si le matériel ou les produits sont un point important pour vous, précisez-le.</p>
          <p><a href="/femme-de-menage-casablanca#demande">Formulaire de devis pour une femme de ménage →</a></p>
        </article>
        <article>
          <h2>Avant de confirmer un devis</h2>
          <p>Vérifiez les tâches comprises, les surfaces ou pièces concernées, la date envisagée et le montant final. Pour des passages réguliers, demandez si le prix correspond à une visite ou à plusieurs. Si une partie du travail dépend d’un accès à confirmer, faites préciser ce point à l’avance.</p>
        </article>
      </div>
      <p>VITRIX reçoit vos demandes à Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Les disponibilités dépendent de votre quartier et du service.</p>
      <p><a className="button button-green" href="https://wa.me/212705540864" target="_blank" rel="noreferrer">Envoyer les détails sur WhatsApp</a></p>
    </main>
  );
}
