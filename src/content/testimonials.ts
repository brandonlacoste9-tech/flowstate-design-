import type { LocalizedString } from "./types";

export type Testimonial = {
  id: string;
  quote: LocalizedString;
  name: string;
  role: LocalizedString;
};

export const testimonials: Testimonial[] = [
  {
    id: "marie",
    quote: {
      en: "Our booking calendar filled from the site within weeks. It finally looks as polished as the shop floor.",
      fr: "Notre calendrier de réservations s’est rempli via le site en quelques semaines. Enfin aussi soigné que le salon.",
    },
    name: "Marie L.",
    role: {
      en: "Owner, local salon",
      fr: "Propriétaire, salon local",
    },
  },
  {
    id: "julian",
    quote: {
      en: "Clear structure, bilingual from day one, and the launch didn’t drag. Exactly what a seed-stage team needs.",
      fr: "Structure claire, bilingue dès le premier jour, lancement sans traîner. Exactement ce qu’une équipe early-stage demande.",
    },
    name: "Julian R.",
    role: {
      en: "Founder, SaaS",
      fr: "Fondateur, SaaS",
    },
  },
  {
    id: "camille",
    quote: {
      en: "They treated my personal brand like a product — calm visuals, strong story, and a contact flow that actually converts.",
      fr: "Ils ont traité ma marque perso comme un produit — visuel calme, histoire forte, et un parcours contact qui convertit vraiment.",
    },
    name: "Camille D.",
    role: {
      en: "Coach & creator",
      fr: "Coach et créatrice",
    },
  },
];
