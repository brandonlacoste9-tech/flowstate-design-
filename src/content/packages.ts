import type { Package } from "./types";

export const packages: Package[] = [
  {
    id: "rebuild",
    name: {
      en: "Rebuild",
      fr: "Refonte",
    },
    priceFrom: {
      en: "Quote after we look at your live site",
      fr: "Devis après lecture de votre site actuel",
    },
    highlighted: true,
    description: {
      en: "You already have a website. We rebuild it in Next.js — your facts, your photos, a new design. Hours, prices, and booking stay as you actually run them.",
      fr: "Vous avez déjà un site. Nous le reconstruisons en Next.js — vos faits, vos photos, un nouveau design. Heures, prix et réservations restent comme vous les gérez vraiment.",
    },
    features: [
      {
        en: "We start from your live pages, not a blank moodboard",
        fr: "On part de vos pages en ligne, pas d’un moodboard vide",
      },
      {
        en: "New design — we do not clone a template over your name",
        fr: "Nouveau design — on ne plaque pas un modèle sur votre nom",
      },
      {
        en: "We do not invent prices, hours, or a booking tool you don’t have",
        fr: "On n’invente pas les prix, les heures, ni un outil de réservation que vous n’avez pas",
      },
      {
        en: "EN, plus FR when you need it",
        fr: "EN, plus FR quand vous en avez besoin",
      },
      {
        en: "Preview you can click through before anything goes live",
        fr: "Aperçu cliquable avant toute mise en ligne",
      },
    ],
  },
  {
    id: "new",
    name: {
      en: "New site",
      fr: "Site neuf",
    },
    priceFrom: {
      en: "Quote from a conversation",
      fr: "Devis après une conversation",
    },
    description: {
      en: "No site yet — or the old one is not worth saving. We design and build a new one from your name, your rooms, your phone.",
      fr: "Pas encore de site — ou l’ancien ne vaut pas la peine. Nous concevons et construisons à partir de votre nom, vos salles, votre téléphone.",
    },
    features: [
      {
        en: "Home, work, contact — only the pages you need",
        fr: "Accueil, travail, contact — seulement les pages utiles",
      },
      {
        en: "Your photos. We do not generate fake plates or fake trucks",
        fr: "Vos photos. On ne génère pas de fausses assiettes ni de faux camions",
      },
      {
        en: "Phone and email that actually reach you",
        fr: "Téléphone et courriel qui vous joignent vraiment",
      },
      {
        en: "Mobile-first, fast, ready to host",
        fr: "Mobile d’abord, rapide, prêt à héberger",
      },
      {
        en: "EN / FR when the work needs both",
        fr: "EN / FR quand le projet a besoin des deux",
      },
    ],
  },
  {
    id: "custom",
    name: {
      en: "Custom",
      fr: "Sur mesure",
    },
    priceFrom: {
      en: "Let’s scope it",
      fr: "À définir ensemble",
    },
    description: {
      en: "A maître who knows the board. Music. Gift cards you already sell. Directories, clinics, something that is not a five-page brochure.",
      fr: "Un maître qui connaît la carte. De la musique. Les cartes-cadeaux que vous vendez déjà. Annuaires, cliniques, autre chose qu’une brochure de cinq pages.",
    },
    features: [
      {
        en: "We wire tools you already have (OpenTable, Toast, Mobi2go) — we do not fake them",
        fr: "On branche les outils que vous avez déjà (OpenTable, Toast, Mobi2go) — on ne les invente pas",
      },
      {
        en: "Chat or voice that answers hours and menu — and does not take tables unless you do",
        fr: "Chat ou voix pour heures et menu — qui ne prend pas de tables si vous ne le faites pas",
      },
      {
        en: "Phased delivery if the whole thing cannot ship at once",
        fr: "Livraison par étapes si tout ne peut pas partir d’un coup",
      },
      {
        en: "Ongoing care after launch, if you want it",
        fr: "Suivi après lancement, si vous le voulez",
      },
    ],
  },
];
