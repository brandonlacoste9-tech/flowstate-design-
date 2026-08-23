import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "look",
    title: {
      en: "We look",
      fr: "On lit",
    },
    body: {
      en: "If you have a live site, we read it. Hours, rooms, phone, how you actually take tables. If you don’t, we start from what you can prove.",
      fr: "Si vous avez un site, on le lit. Heures, salles, téléphone, comment vous prenez vraiment les tables. Sinon, on part de ce que vous pouvez prouver.",
    },
  },
  {
    id: "design",
    title: {
      en: "We design",
      fr: "On dessine",
    },
    body: {
      en: "A look that belongs to your room — not a template with your logo dropped in. You see it on a preview, not a 40-page PDF.",
      fr: "Un look qui appartient à votre salle — pas un modèle avec votre logo collé dessus. Vous le voyez en aperçu, pas dans un PDF de 40 pages.",
    },
  },
  {
    id: "build",
    title: {
      en: "We build",
      fr: "On construit",
    },
    body: {
      en: "Next.js. Fast on a phone. Your OpenTable, your order link, your photos. We do not invent a second address or a price that is not on your board.",
      fr: "Next.js. Rapide sur téléphone. Votre OpenTable, votre lien de commande, vos photos. On n’invente pas une deuxième adresse ni un prix absent de votre carte.",
    },
  },
  {
    id: "hand",
    title: {
      en: "You decide",
      fr: "Vous décidez",
    },
    body: {
      en: "You get a preview. Your old site can stay up until you say switch. Then we put the new one on your domain — flowstate-webdesign.com is ours; yours stays yours.",
      fr: "Vous recevez un aperçu. L’ancien site peut rester jusqu’au basculement. Ensuite on met le nouveau sur votre domaine — flowstate-webdesign.com est le nôtre; le vôtre reste le vôtre.",
    },
  },
];
