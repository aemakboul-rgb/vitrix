import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, CalendarDays, House, MapPin, Phone, Sparkles } from "lucide-react";
import menagePhoto from "../../public/femme-menage-vitrix.png";
import logo from "../../public/vitrix-logo-transparent.png";
import MenageForm from "./form";
import { menageCities, phone, phoneDisplay } from "./service";
import "./menage.css";

const url = "https://www.vitres.online/femme-de-menage-casablanca";
const title = "Femme de ménage à Casablanca et alentours | VITRIX";
const description = "Ménage à domicile pour appartement, maison ou villa à Casablanca, Bouskoura, Dar Bouazza, Nouaceur et Daroua. Passage ponctuel ou régulier, devis sur WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title,
    description,
    url,
    images: [{ url: "/femme-menage-vitrix.png", alt: "Illustration du ménage à domicile VITRIX" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/femme-menage-vitrix.png"],
  },
};

const serviceData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  name: "Ménage à domicile",
  serviceType: "Ménage ponctuel et régulier à domicile",
  url,
  description,
  provider: { "@id": "https://www.vitres.online/#organization" },
  areaServed: menageCities.map((name) => ({ "@type": "Place", name })),
};

const tasks = [
  { room: "Salon et chambres", detail: "Dépoussiérage du mobilier accessible et entretien des surfaces." },
  { room: "Cuisine", detail: "Nettoyage du plan de travail, de l’évier et des surfaces accessibles." },
  { room: "Salle de bain", detail: "Nettoyage de la douche ou de la baignoire, du lavabo, des WC et du miroir." },
  { room: "Sols", detail: "Aspiration ou balayage, puis lavage adapté au revêtement." },
];

const questions = [
  {
    question: "Combien coûte une femme de ménage à Casablanca ?",
    answer: "Le tarif dépend de la surface, des pièces à nettoyer, du travail demandé et de la fréquence. Indiquez votre ville et vos priorités pour recevoir un devis adapté à votre logement.",
  },
  {
    question: "Peut-on demander un ménage régulier chaque semaine ?",
    answer: "Oui. Indiquez le jour et la fréquence souhaités dans votre demande. VITRIX vous confirme les créneaux disponibles avant de convenir d’une intervention.",
  },
  {
    question: "Dois-je prévoir les produits et le matériel de ménage ?",
    answer: "Précisez si vous avez des produits ou du matériel sur place et si vous souhaitez leur utilisation. Nous confirmons avec vous ce qu’il faut prévoir avant le passage.",
  },
  {
    question: "Puis-je demander le nettoyage des vitres avec le ménage ?",
    answer: "Signalez les fenêtres et baies vitrées dans votre demande. Nous pouvons évaluer le nettoyage des vitres séparément selon la surface et l’accès.",
  },
  {
    question: "Le formulaire confirme-t-il une réservation ?",
    answer: "Le formulaire prépare un message pour VITRIX. Envoyez-le sur WhatsApp pour convenir des tâches, du devis et du créneau disponible.",
  },
];

export default function Page() {
  return (
    <main className="mg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <header className="mg-header">
        <div className="mg-shell mg-nav">
          <a href="/" aria-label="VITRIX, accueil">
            <Image className="mg-logo" src={logo} alt="VITRIX" sizes="145px" />
          </a>
          <nav aria-label="Sur cette page">
            <a href="#prestations">Prestations</a>
            <a href="#zones">Nos villes</a>
            <a href="#questions">Questions</a>
          </nav>
          <a className="mg-call" href={`tel:${phone}`}><Phone size={17} aria-hidden="true" /> {phoneDisplay}</a>
        </div>
      </header>

      <section className="mg-hero">
        <div className="mg-shell mg-hero-grid">
          <div className="mg-intro">
            <p className="mg-kicker"><MapPin size={16} aria-hidden="true" /> Casablanca et villes voisines</p>
            <h1>Femme de ménage <em>à domicile</em></h1>
            <p className="mg-lead">Confiez le ménage de votre maison, appartement ou villa à VITRIX. Pour un passage ponctuel ou un entretien régulier, choisissez votre ville et demandez un devis.</p>
            <a className="mg-text-link mg-jump" href="#demande">Préparer mon devis <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <MenageForm />
          <div className="mg-hero-image">
            <Image
              src={menagePhoto}
              alt="Illustration d’une femme de ménage VITRIX lavant le sol d’un salon"
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 53vw, 620px"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="mg-shell mg-section" id="prestations" aria-labelledby="mg-prestations">
        <h2 id="mg-prestations">Un ménage adapté à votre logement</h2>
        <div className="mg-options">
          <article>
            <Sparkles size={25} aria-hidden="true" />
            <h3>Ménage ponctuel</h3>
            <p>Un passage avant de recevoir, au retour d’un séjour ou quand vous avez besoin d’un coup de main. Indiquez les pièces et les tâches prioritaires.</p>
          </article>
          <article>
            <CalendarDays size={25} aria-hidden="true" />
            <h3>Ménage régulier</h3>
            <p>Un entretien de votre logement selon le rythme qui vous convient. Précisez le jour et la fréquence souhaités pour vérifier les disponibilités.</p>
          </article>
        </div>
        <div className="mg-task-panel">
          <div>
            <h3>Qu’est-ce qui peut être inclus ?</h3>
            <p>Choisissez les tâches selon vos besoins. Le détail de la prestation est convenu avec vous avant l’intervention.</p>
          </div>
          <ul className="mg-task-list">
            {tasks.map(({ room, detail }) => (
              <li key={room}><strong>{room}</strong><span>{detail}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mg-coverage" id="zones" aria-labelledby="mg-zones">
        <div className="mg-shell mg-coverage-grid">
          <div>
            <MapPin size={27} aria-hidden="true" />
            <h2 id="mg-zones">Où intervient VITRIX ?</h2>
            <p>Choisissez votre ville et indiquez votre quartier pour vérifier les disponibilités près de chez vous.</p>
            <a className="mg-text-link" href="#demande">Choisir ma ville <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <ul className="mg-cities">
            {menageCities.map((city) => <li key={city}><House size={18} aria-hidden="true" />{city}</li>)}
          </ul>
        </div>
      </section>

      <section className="mg-shell mg-section mg-faq" id="questions" aria-labelledby="mg-questions">
        <div>
          <h2 id="mg-questions">Questions sur le ménage à domicile</h2>
          <p>Tarif, matériel et organisation du passage.</p>
        </div>
        <div className="mg-answers">
          {questions.map(({ question, answer }) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <footer className="mg-footer">
        <div className="mg-shell">
          <a href="/">Accueil VITRIX</a>
          <a href="/nettoyage-vitres-casablanca">Nettoyage de vitres</a>
          <a href="/nettoyage-panneaux-solaires-casablanca">Nettoyage de panneaux solaires</a>
          <a href="/conseils-nettoyage-casablanca">Guide pour préparer un devis</a>
        </div>
      </footer>
    </main>
  );
}
