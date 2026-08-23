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
    name: {
      en: "Joe’s Italian Kitchen",
      fr: "Joe’s Italian Kitchen",
    },
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
    previewUrl: "https://wellington-diner.netlify.app",
    name: {
      en: "Wellington Diner",
      fr: "Wellington Diner",
    },
    title: {
      en: "Wellington Diner — the room on Wellington, not a chain",
      fr: "Wellington Diner — la salle sur Wellington, pas une chaîne",
    },
    summary: {
      en: "A rebuild of wellingtondiner.com, live at wellington-diner.netlify.app. Jeff’s diner at 1385 Wellington Street West. Menu, hours, the host who does not take tables.",
      fr: "Une refonte de wellingtondiner.com, en ligne sur wellington-diner.netlify.app. Le diner de Jeff au 1385 Wellington Street West. Menu, heures, l’hôte qui ne prend pas de tables.",
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
      en: "The rebuild is live at wellington-diner.netlify.app. We did not invent a second address, and we did not let a chatbot take reservations.",
      fr: "La refonte est en ligne sur wellington-diner.netlify.app. Nous n’avons pas inventé une deuxième adresse, et nous n’avons pas laissé un robot prendre des réservations.",
    },
  },
  {
    slug: "scarolies",
    niche: ["restaurant", "rebuild", "italian"],
    year: "2026",
    featured: true,
    accent: "#6b1c23",
    image: "/work/scarolies.jpg",
    liveUrl: "http://www.scarolies.com/",
    previewUrl: "https://scarolies.netlify.app",
    name: {
      en: "Scarolie’s",
      fr: "Scarolie’s",
    },
    title: {
      en: "Scarolie’s — pasta emporium in Pointe-Claire",
      fr: "Scarolie’s — emporium de pâtes à Pointe-Claire",
    },
    summary: {
      en: "A rebuild of scarolies.com, live at scarolies.netlify.app. 950 St-Jean Blvd. Pasta, pizza, grill. Tables on TB Dine or (514) 694-8611.",
      fr: "Une refonte de scarolies.com, en ligne sur scarolies.netlify.app. 950, boul. Saint-Jean. Pâtes, pizza, grillades. Tables sur TB Dine ou au (514) 694-8611.",
    },
    challenge: {
      en: "One room in Pointe-Claire. Online reservations go through TB Dine on their live site — not a form we should invent. Hours, the card, family takeaway plates, and a phone that actually rings the restaurant.",
      fr: "Une salle à Pointe-Claire. Les réservations en ligne passent par TB Dine sur leur site — pas un formulaire à inventer. Heures, la carte, les plats familiaux, et un téléphone qui sonne vraiment au resto.",
    },
    approach: {
      en: "We rebuilt around their photos, their menu, and their booker. The maître can talk hours and the board. Tables stay on TB Dine or the phone. Bilingual EN/FR, like their live pages.",
      fr: "Nous avons reconstruit autour de leurs photos, leur menu et leur outil de réservation. Le maître parle heures et carte. Les tables restent sur TB Dine ou le téléphone. Bilingue EN/FR, comme leurs pages.",
    },
    outcome: {
      en: "The rebuild is live at scarolies.netlify.app. We did not replace their live site, and we did not take tables ourselves.",
      fr: "La refonte est en ligne sur scarolies.netlify.app. Nous n’avons pas remplacé leur site, et nous n’avons pas pris les tables nous-mêmes.",
    },
  },
  {
    slug: "mednam",
    niche: ["clinic", "rebuild", "healthcare"],
    year: "2026",
    featured: true,
    accent: "#0f6b6b",
    image: "/work/mednam.jpg",
    liveUrl: "https://cliniquemednam.com/en/",
    previewUrl: "https://mednam.netlify.app",
    name: {
      en: "Clinique MedNam",
      fr: "Clinique MedNam",
    },
    title: {
      en: "Clinique MedNam — GMF-U in Lachine",
      fr: "Clinique MedNam — GMF-U à Lachine",
    },
    summary: {
      en: "A rebuild of cliniquemednam.com, live at mednam.netlify.app. University family medicine group. 2000 Rue Notre-Dame, suite 301. Portal, RVSQ, GAP — not a fake booking form.",
      fr: "Une refonte de cliniquemednam.com, en ligne sur mednam.netlify.app. GMF universitaire. 2000, rue Notre-Dame, bureau 301. Portail, RVSQ, GAP — pas un faux formulaire de rendez-vous.",
    },
    challenge: {
      en: "A clinic site has to send patients to the tools they already use: the MedFar portal, RVSQ, GAP, GAMF, and the phone tree. Email cannot book or renew. RAMQ prices are not ours to invent.",
      fr: "Un site de clinique doit envoyer les patients vers les outils qu’ils ont déjà : portail MedFar, RVSQ, GAP, GAMF, et l’arbre téléphonique. Le courriel ne réserve pas et ne renouvelle pas. Les tarifs RAMQ ne sont pas à inventer.",
    },
    approach: {
      en: "We rebuilt around Lachine, the hours they print, and the doors that actually exist. Appointments go to the portal or Quebec’s services. The assistant orients — it does not book a slot and does not impersonate Navig.",
      fr: "Nous avons reconstruit autour de Lachine, des heures qu’ils impriment, et des portes qui existent. Les rendez-vous vont au portail ou aux services du Québec. L’assistant oriente — il ne prend pas de plage et n’imite pas Navig.",
    },
    outcome: {
      en: "The rebuild is live at mednam.netlify.app. Their live site stays until they switch. We did not overlay a Clinika login or invent a price.",
      fr: "La refonte est en ligne sur mednam.netlify.app. Leur site reste jusqu’au basculement. Nous n’avons pas collé un login Clinika ni inventé un tarif.",
    },
  },
  {
    slug: "brasserie-le-manoir",
    niche: ["restaurant", "rebuild", "brasserie"],
    year: "2026",
    featured: true,
    accent: "#3d4a32",
    image: "/work/brasserie-manoir.jpg",
    liveUrl: "https://www.brasseriemanoir.com/",
    previewUrl: "https://brasserie-le-manoir.netlify.app",
    name: {
      en: "Brasserie Le Manoir",
      fr: "Brasserie Le Manoir",
    },
    title: {
      en: "Brasserie Le Manoir — four rooms, phone for a table",
      fr: "Brasserie Le Manoir — quatre salles, table au téléphone",
    },
    summary: {
      en: "A rebuild of brasseriemanoir.com, live at brasserie-le-manoir.netlify.app. Pointe-Claire, NDG, Lachine, and Petit Manoir in Pierrefonds. Call the room you want.",
      fr: "Une refonte de brasseriemanoir.com, en ligne sur brasserie-le-manoir.netlify.app. Pointe-Claire, NDG, Lachine et Petit Manoir à Pierrefonds. Appelez la salle que vous voulez.",
    },
    challenge: {
      en: "Four brasseries, different hours, different phones. Tables are reserved by calling that location — not a chain booking widget. Ready-to-eat meals are a separate door.",
      fr: "Quatre brasseries, des heures et des téléphones différents. Les tables se réservent en appelant cette salle — pas un widget de chaîne. Le prêt-à-manger est une autre porte.",
    },
    approach: {
      en: "We rebuilt the family as four rooms. Their menu, their photos. Breakfast through late night. No invented OpenTable. You call Pointe-Claire, NDG, Lachine, or Pierrefonds.",
      fr: "Nous avons reconstruit la famille en quatre salles. Leur menu, leurs photos. Du déjeuner jusqu’au tard. Pas d’OpenTable inventé. On appelle Pointe-Claire, NDG, Lachine ou Pierrefonds.",
    },
    outcome: {
      en: "The rebuild is live at brasserie-le-manoir.netlify.app. Their live site stays until they switch. We did not take tables on the preview.",
      fr: "La refonte est en ligne sur brasserie-le-manoir.netlify.app. Leur site reste jusqu’au basculement. Nous n’avons pas pris de tables sur l’aperçu.",
    },
  },
  {
    slug: "sante-kildare",
    niche: ["clinic", "rebuild", "healthcare"],
    year: "2026",
    featured: true,
    accent: "#1a5f4a",
    image: "/work/sante-kildare.jpg",
    liveUrl: "https://www.santekildare.ca/",
    previewUrl: "https://santekildare.netlify.app",
    name: {
      en: "Santé Kildare",
      fr: "Santé Kildare",
    },
    title: {
      en: "Santé Kildare — GMF in Côte-Saint-Luc",
      fr: "Santé Kildare — GMF à Côte-Saint-Luc",
    },
    summary: {
      en: "A rebuild of santekildare.ca, live at santekildare.netlify.app. Family medicine since 2011. 5555 Westminster, suite 200. Sofy, Ocean, GAP — not a fake booking form.",
      fr: "Une refonte de santekildare.ca, en ligne sur santekildare.netlify.app. Médecine familiale depuis 2011. 5555 Westminster, bureau 200. Sofy, Ocean, GAP — pas un faux formulaire de rendez-vous.",
    },
    challenge: {
      en: "Registered patients book on Sofy. GAP for this territory is 811 option 3. The clinic does not invent a public walk-in queue or RAMQ prices. Email is not a booking door.",
      fr: "Les patients inscrits réservent sur Sofy. Le GAP de ce territoire est le 811 option 3. La clinique n’invente pas une file walk-in publique ni des tarifs RAMQ. Le courriel n’est pas une porte de rendez-vous.",
    },
    approach: {
      en: "We rebuilt around the doors they already print: Sofy, Ocean, RVSQ, GAP, the phone. Hours and the team as they name them. The assistant orients — it does not book a slot.",
      fr: "Nous avons reconstruit autour des portes qu’ils impriment déjà : Sofy, Ocean, RVSQ, GAP, le téléphone. Heures et équipe comme ils les nomment. L’assistant oriente — il ne prend pas de plage.",
    },
    outcome: {
      en: "The rebuild is live at santekildare.netlify.app. Their WordPress stays until they switch. We did not invent an email inbox or a walk-in line.",
      fr: "La refonte est en ligne sur santekildare.netlify.app. Leur WordPress reste jusqu’au basculement. Nous n’avons pas inventé une boîte courriel ni une file walk-in.",
    },
  },
  {
    slug: "intermezzo-vernon",
    niche: ["restaurant", "rebuild", "wine-cellar"],
    year: "2026",
    featured: true,
    accent: "#4a1520",
    image: "/work/intermezzo-vernon.jpg",
    liveUrl: "https://intermezzowinecellar.com/",
    previewUrl: "https://intermezzo-vernon.netlify.app",
    name: {
      en: "Intermezzo",
      fr: "Intermezzo",
    },
    title: {
      en: "Intermezzo — two restaurants in Vernon, one phone",
      fr: "Intermezzo — deux restos à Vernon, un téléphone",
    },
    summary: {
      en: "A rebuild of intermezzowinecellar.com, live at intermezzo-vernon.netlify.app. Downtown wine cellar on 34th, Castle Bistro at Swan Lake. One number: (250) 542-3853.",
      fr: "Une refonte de intermezzowinecellar.com, en ligne sur intermezzo-vernon.netlify.app. Cave à vin au centre-ville, Castle Bistro à Swan Lake. Un numéro : (250) 542-3853.",
    },
    challenge: {
      en: "Two rooms, one phone. Downtown takes some tables on TB Dine — wine cellar and large parties are a call. Castle Bistro has no phone of its own. You call downtown and ask for Castle. Hours are not the same at both rooms.",
      fr: "Deux salles, un téléphone. Au centre-ville, une partie des tables passe par TB Dine — cave et grands groupes, on appelle. Castle Bistro n’a pas de ligne. On appelle le centre-ville et on demande Castle. Les heures ne sont pas les mêmes.",
    },
    approach: {
      en: "We rebuilt them as two rooms, not one restaurant. Their plates. Downtown daily 1–9. Castle Wednesday–Sunday from 4. TB Dine where they already use it. No invented booking widget on Greenhow Road.",
      fr: "Nous les avons reconstruites en deux salles, pas un seul resto. Leurs assiettes. Centre-ville tous les jours 13 h–21 h. Castle mercredi–dimanche dès 16 h. TB Dine là où ils l’utilisent déjà. Pas de widget inventé sur Greenhow.",
    },
    outcome: {
      en: "The rebuild is live at intermezzo-vernon.netlify.app. Their live site stays until they switch. We did not put a phone on Castle that isn’t there.",
      fr: "La refonte est en ligne sur intermezzo-vernon.netlify.app. Leur site reste jusqu’au basculement. Nous n’avons pas mis de téléphone à Castle s’il n’y en a pas.",
    },
  },
  {
    slug: "clinique-mdcm",
    niche: ["clinic", "rebuild", "healthcare"],
    year: "2026",
    featured: true,
    accent: "#1e4a6e",
    image: "/work/clinique-mdcm.jpg",
    liveUrl: "https://mdcmclinic.com/",
    previewUrl: "https://clinique-mdcm-gmf.netlify.app",
    name: {
      en: "Clinique MDCM",
      fr: "Clinique MDCM",
    },
    title: {
      en: "Clinique MDCM — two GMFs, NDG and Westmount",
      fr: "Clinique MDCM — deux GMF, NDG et Westmount",
    },
    summary: {
      en: "A rebuild of mdcmclinic.com, live at clinique-mdcm-gmf.netlify.app. NDG since 2009, Westmount with the St. Catherine group. Pomelo, GAP, Bonjour Santé — this site does not book a slot.",
      fr: "Une refonte de mdcmclinic.com, en ligne sur clinique-mdcm-gmf.netlify.app. NDG depuis 2009, Westmount avec le groupe Sainte-Catherine. Pomelo, GAP, Bonjour Santé — ce site ne prend pas de plage.",
    },
    challenge: {
      en: "Two sites, four booking doors. Registered patients go to Pomelo. GAP is collective inscription, not a walk-in. Acute care 0–18 is Bonjour Santé. Specialists have their own page. After 16:00 and weekends they publish urgent care only. Email is not a booking door.",
      fr: "Deux sites, quatre portes de rendez-vous. Les patients inscrits vont sur Pomelo. Le GAP est une inscription collective, pas un walk-in. Soins aigus 0–18 : Bonjour Santé. Les spécialistes ont leur page. Après 16 h et les week-ends, ils publient urgences seulement. Le courriel n’est pas une porte de rendez-vous.",
    },
    approach: {
      en: "We rebuilt around NDG and Westmount as they print them. Hours, phones, the four doors. HPV at both sites; contraception at Westmount only. The assistant orients — it does not book a slot and does not impersonate Pomelo.",
      fr: "Nous avons reconstruit NDG et Westmount comme ils les impriment. Heures, téléphones, les quatre portes. HPV aux deux sites ; contraception à Westmount seulement. L’assistant oriente — il ne prend pas de plage et n’imite pas Pomelo.",
    },
    outcome: {
      en: "The rebuild is live at clinique-mdcm-gmf.netlify.app. Their live site stays until they switch. We did not invent a walk-in queue or a RAMQ price.",
      fr: "La refonte est en ligne sur clinique-mdcm-gmf.netlify.app. Leur site reste jusqu’au basculement. Nous n’avons pas inventé une file walk-in ni un tarif RAMQ.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured);
}

export function getWorkHref(study: CaseStudy) {
  return study.previewUrl ?? study.liveUrl;
}

export function getWorkHost(study: CaseStudy) {
  const href = getWorkHref(study);
  if (!href) return "";
  try {
    return new URL(href).host.replace(/^www\./, "");
  } catch {
    return href.replace(/^https?:\/\//, "");
  }
}
