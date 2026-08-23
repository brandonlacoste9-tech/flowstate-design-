import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "joes-italian-kitchen",
    niche: ["restaurant", "rebuild", "hospitality"],
    year: "2026",
    featured: true,
    accent: "#7a1f24",
    image: "/work/joes-italian.jpg",
    liveUrl: "https://joesitaliankitchen.ca",
    title: {
      en: "Joe’s Italian Kitchen — three rooms, one family",
      fr: "Joe’s Italian Kitchen — trois salles, une famille",
    },
    summary: {
      en: "A rebuild of joesitaliankitchen.ca. Almonte, Wellington West, and Little Italy — OpenTable per room, their pinsa, their board.",
      fr: "Une refonte de joesitaliankitchen.ca. Almonte, Wellington West et Little Italy — OpenTable par salle, leur pinsa, leur carte.",
    },
    challenge: {
      en: "The live WordPress site is English, three open rooms, and a closed Camelot page. Reservations are OpenTable, not a form. The dine-in HTML does not print dollar prices. Preston has no order-online or gift-card button.",
      fr: "Le WordPress en ligne est en anglais, trois salles ouvertes, une page Camelot fermée. Les réservations passent par OpenTable, pas un formulaire. Le HTML sur place n’imprime pas de prix. Preston n’a ni commande en ligne ni carte-cadeau.",
    },
    approach: {
      en: "We rebuilt the family as three rooms, not one restaurant. Their photos and logo. Wine-and-gold type on a damask menu board. OpenTable links they already use. No invented prices, no fake booking, no order button on Preston.",
      fr: "Nous avons reconstruit la famille en trois salles, pas un seul resto. Leurs photos et leur logo. Typo bordeaux et or sur un menu damassé. Leurs liens OpenTable. Pas de prix inventés, pas de fausse réservation, pas de bouton commander à Preston.",
    },
    outcome: {
      en: "A Next.js preview they can put live when they want. Their WordPress can stay until they say otherwise. This is a rebuild of their site — not a claim that we already replaced it.",
      fr: "Un aperçu Next.js qu’ils peuvent mettre en ligne quand ils veulent. Leur WordPress peut rester jusqu’à nouvel ordre. C’est une refonte de leur site — pas une prétention qu’on l’a déjà remplacé.",
    },
  },
  {
    slug: "wellington-diner",
    niche: ["restaurant", "rebuild", "diner"],
    year: "2026",
    featured: true,
    accent: "#c45c26",
    image: "/work/wellington-diner.jpg",
    liveUrl: "https://www.wellingtondiner.com/",
    title: {
      en: "Wellington Diner — the room on Wellington, not a chain",
      fr: "Wellington Diner — la salle sur Wellington, pas une chaîne",
    },
    summary: {
      en: "A rebuild of wellingtondiner.com. Jeff’s diner at 1385 Wellington Street West. Menu, hours, the host who does not take tables.",
      fr: "Une refonte de wellingtondiner.com. Le diner de Jeff au 1385 Wellington Street West. Menu, heures, l’hôte qui ne prend pas de tables.",
    },
    challenge: {
      en: "A neighbourhood diner with a live site, a real email, and a real phone. Reservations are not something a chatbot should pretend to take. Similar names nearby are easy to mix up.",
      fr: "Un diner de quartier avec un vrai site, un vrai courriel, un vrai téléphone. Un robot ne devrait pas prétendre prendre des réservations. Les noms voisins se confondent facilement.",
    },
    approach: {
      en: "We rebuilt around the diner as it is: the storefront, the plates they photograph, the hours they print. The host answers menu and hours. Tables stay with the diner — phone or walking in — not a fake booking form.",
      fr: "Nous avons reconstruit le diner tel qu’il est : la devanture, les assiettes qu’ils photographient, les heures qu’ils impriment. L’hôte répond menu et heures. Les tables restent au diner — téléphone ou walk-in — pas un faux formulaire.",
    },
    outcome: {
      en: "A Next.js preview of their diner. We did not invent a second address, and we did not let a chatbot take reservations.",
      fr: "Un aperçu Next.js de leur diner. Nous n’avons pas inventé une deuxième adresse, et nous n’avons pas laissé un robot prendre des réservations.",
    },
  },
  {
    slug: "the-toronto-plumber",
    niche: ["trades", "rebuild", "local-service"],
    year: "2026",
    featured: true,
    accent: "#1d4e89",
    image: "/work/toronto-plumber.jpg",
    liveUrl: "https://thetorontoplumber.ca/",
    title: {
      en: "The Toronto Plumber — a trades site that can be called",
      fr: "The Toronto Plumber — un site de métier qu’on peut appeler",
    },
    summary: {
      en: "A rebuild of thetorontoplumber.ca. Phone first. Truck, tickets, the work they actually do.",
      fr: "Une refonte de thetorontoplumber.ca. Le téléphone d’abord. Le camion, les tickets, le travail qu’ils font vraiment.",
    },
    challenge: {
      en: "A plumber’s site has to be callable on a phone. Hours, service area, and proof (tickets, truck) matter more than agency atmosphere. Inventing licences or neighbourhoods they didn’t print would be a lie.",
      fr: "Le site d’un plombier doit se composer au téléphone. Heures, zone, preuves (tickets, camion) comptent plus que l’ambiance agence. Inventer des licences ou des quartiers qu’ils n’impriment pas serait un mensonge.",
    },
    approach: {
      en: "We rebuilt around the call: big phone, their truck photo, the tickets they already show. Copy stays with what their live site prints. No invented Red Seal claims we couldn’t source from them.",
      fr: "Nous avons reconstruit autour de l’appel : gros téléphone, photo du camion, tickets qu’ils montrent déjà. Les textes restent sur ce que leur site imprime. Pas de sceau Red Seal inventé.",
    },
    outcome: {
      en: "A Next.js preview built to be used with a thumb on a cracked phone. Their live site stays the source of truth until they switch.",
      fr: "Un aperçu Next.js pensé pour un pouce sur un téléphone. Leur site en ligne reste la source jusqu’à ce qu’ils basculent.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured).slice(0, 3);
}
