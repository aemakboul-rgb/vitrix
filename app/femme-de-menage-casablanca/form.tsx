"use client";

import { type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { menageCities, whatsapp } from "./service";

export default function MenageForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const details = String(fields.get("details") ?? "").trim();
    const message = [
      "Bonjour VITRIX, je souhaite un devis pour le ménage à domicile.",
      `Ville : ${fields.get("ville")}`,
      `Quartier : ${fields.get("quartier")}`,
      `Logement : ${fields.get("logement")}`,
      `Fréquence : ${fields.get("frequence")}`,
      `Nom : ${fields.get("nom")}`,
      `Téléphone : ${fields.get("telephone")}`,
      ...(details ? [`Précisions : ${details}`] : []),
    ].join("\n");

    window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    (window as Window & { gtag_report_conversion?: () => void }).gtag_report_conversion?.();
  }

  return (
    <section className="mg-quote" id="demande" aria-labelledby="mg-devis">
      <h2 id="mg-devis">Demander un devis</h2>
      <p>Décrivez votre besoin, puis envoyez votre demande sur WhatsApp.</p>
      <form method="post" onSubmit={submit}>
        <div className="mg-fields">
          <label>Ville
            <select name="ville" required defaultValue="">
              <option value="" disabled>Votre ville</option>
              {menageCities.map((city) => <option key={city}>{city}</option>)}
            </select>
          </label>
          <label>Quartier
            <input name="quartier" required maxLength={95} placeholder="Votre quartier" />
          </label>
          <label>Type de logement
            <select name="logement" required defaultValue="">
              <option value="" disabled>Choisir</option>
              <option>Appartement</option><option>Maison</option><option>Villa</option><option>Autre</option>
            </select>
          </label>
          <label>Fréquence
            <select name="frequence" required defaultValue="">
              <option value="" disabled>Choisir</option>
              <option>Ponctuelle</option><option>Régulière</option><option>À discuter</option>
            </select>
          </label>
          <label>Nom
            <input name="nom" required autoComplete="name" maxLength={100} placeholder="Votre nom" />
          </label>
          <label>Téléphone
            <input name="telephone" type="tel" required autoComplete="tel" maxLength={30} placeholder="06 00 00 00 00" />
          </label>
        </div>
        <label>Précisions <span>(facultatif)</span>
          <textarea name="details" rows={2} maxLength={600} placeholder="Surface, pièces, jour souhaité…" />
        </label>
        <button className="mg-submit" type="submit">
          <MessageCircle size={20} aria-hidden="true" /> Continuer sur WhatsApp
        </button>
        <p className="mg-note">Vous pourrez relire et envoyer le message dans WhatsApp.</p>
      </form>
      <a className="mg-direct" href={whatsapp} target="_blank" rel="noreferrer">Écrire directement sur WhatsApp</a>
    </section>
  );
}
