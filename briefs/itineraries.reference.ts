// src/data/itineraries.ts
// Contenu des itinéraires Joltoo Aventures — alimente le composant Timeline.
// Aucun emoji. `description` = texte rédigé de l'étape (voix de marque).
// `activities` = puces courtes optionnelles. `icon` = indice rendu SVG.

export type DayIcon =
  | "mountain" | "lake" | "jeep" | "hike" | "yurt" | "culture" | "springs";

export interface ItineraryDay {
  day: number;
  title: string;         // le trajet du jour
  description: string;   // résumé rédigé de l'étape
  activities: string[];  // puces courtes (optionnel)
  overnight: string;     // lieu de la nuit ("—" le dernier jour)
  icon: DayIcon;
  photo?: string;        // emplacement photo (à remplir plus tard)
}

export interface Itinerary {
  slug: string;
  duration: number;
  name: string;
  summary: string;
  fromPricePer4: number;
  days: ItineraryDay[];
}

export const itineraries: Itinerary[] = [
  {
    slug: "7-jours",
    duration: 7,
    name: "L'essentiel",
    summary:
      "Une première immersion dense : lac Issyk-Kul, vallées de montagne, canyon rouge et nuit en yourte à Song-Köl. Le meilleur du Kirghizstan en une semaine.",
    fromPricePer4: 750,
    days: [
      {
        day: 1,
        title: "Bichkek → Tour de Burana → Chon-Kemin",
        description:
          "Départ de Bichkek et première mise en jambes historique au pied de la tour de Burana, minaret millénaire dressé seul dans la steppe, vestige de l'ancienne cité de Balasagun sur la route de la Soie. Le 4x4 met ensuite le cap sur la vallée verdoyante de Chon-Kemin, première respiration au milieu des montagnes, où l'on passe la première nuit chez l'habitant.",
        activities: ["Tour de Burana", "Vallée de Chon-Kemin"],
        overnight: "Chon-Kemin",
        icon: "culture",
      },
      {
        day: 2,
        title: "Chon-Kemin → Issyk-Kul → Karakol",
        description:
          "Grande journée de route panoramique le long d'Issyk-Kul, deuxième plus grand lac de montagne au monde, dont l'eau ne gèle jamais malgré l'altitude. Entre les sommets enneigés qui plongent vers la rive et l'immensité bleue, la route file vers l'est jusqu'à Karakol, ville-carrefour au caractère russe et dungane marqué.",
        activities: ["Route panoramique le long du lac Issyk-Kul"],
        overnight: "Karakol",
        icon: "lake",
      },
      {
        day: 3,
        title: "Karakol → Altyn-Arashan → Karakol",
        description:
          "Cap sur Altyn-Arashan, la « source dorée » : une piste 4x4 spectaculaire remonte une vallée glaciaire encaissée jusqu'à un plateau d'altitude cerné de pics. On marche au fil de la rivière, puis on se détend dans les sources chaudes naturelles face aux montagnes, avant de redescendre passer la nuit à Karakol.",
        activities: [
          "Excursion 4x4 vers Altyn-Arashan",
          "Marche dans la vallée",
          "Sources chaudes naturelles",
        ],
        overnight: "Karakol",
        icon: "springs",
      },
      {
        day: 4,
        title: "Karakol → Jeti-Oguz → Kok-Jaiyk",
        description:
          "Découverte de Jeti-Oguz, les « Sept Taureaux » : d'immenses falaises de grès rouge qui émergent des sapins, l'un des paysages emblématiques du pays. La journée se poursuit par la randonnée dans la vallée sauvage de Kok-Jaiyk, tapis d'alpages et de forêts où l'on passe la nuit au plus près de la nature.",
        activities: [
          "Jeti-Oguz (les Sept Taureaux)",
          "Vallée de Kok-Jaiyk",
          "Randonnée",
        ],
        overnight: "Kok-Jaiyk",
        icon: "hike",
      },
      {
        day: 5,
        title: "Kok-Jaiyk → Barskoon → Skazka → Bokonbaevo",
        description:
          "Journée de contrastes : d'abord les cascades de Barskoon, qui dévalent une vallée verte parsemée de sapins, puis le canyon de Skazka, le « canyon des contes de fées », un dédale de roches rouges et ocre sculptées par le vent au bord du lac. En fin de journée, sur la rive sud, un chasseur d'aigles donne une démonstration de cette tradition nomade encore vivante. Nuit à Bokonbaevo.",
        activities: [
          "Cascades de Barskoon",
          "Canyon de Skazka",
          "Démonstration de chasse à l'aigle",
        ],
        overnight: "Bokonbaevo",
        icon: "culture",
      },
      {
        day: 6,
        title: "Bokonbaevo → Kochkor → Song-Köl",
        description:
          "Route vers les hauteurs jusqu'au lac Song-Köl, joyau perché à plus de 3000 m, entouré de pâturages d'été où les éleveurs installent leurs yourtes. On y retrouve le vrai rythme nomade : chevaux en liberté, troupeaux, silence immense. Possibilité d'une balade à cheval avant la nuit sous la yourte, bercé par le froid vif de l'altitude.",
        activities: ["Route vers Song-Köl", "Balade à cheval (option)"],
        overnight: "Yourte à Song-Köl",
        icon: "yurt",
      },
      {
        day: 7,
        title: "Song-Köl → Kochkor → Bichkek",
        description:
          "Dernière matinée face au lac, le temps d'un ultime regard sur les alpages, puis longue descente panoramique par les cols jusqu'à Bichkek. Fin du circuit.",
        activities: ["Matinée à Song-Köl", "Retour à Bichkek"],
        overnight: "—",
        icon: "jeep",
      },
    ],
  },

  {
    slug: "8-jours",
    duration: 8,
    name: "Grand tour",
    summary:
      "Un jour de plus pour respirer : une journée complète à Song-Köl, au rythme des alpages et des éleveurs nomades.",
    fromPricePer4: 850,
    days: [
      {
        day: 1,
        title: "Bichkek → Burana → Canyon de Konorchek → Chon-Kemin",
        description:
          "Après la tour de Burana, vestige de la route de la Soie, cap sur le canyon de Konorchek pour une randonnée de 2 à 3 heures au milieu de cheminées de roche rouge, un décor quasi désertique et spectaculaire. On rejoint ensuite la vallée verte de Chon-Kemin pour la première nuit.",
        activities: ["Tour de Burana", "Randonnée à Konorchek (2–3 h)"],
        overnight: "Chon-Kemin",
        icon: "hike",
      },
      {
        day: 2,
        title: "Chon-Kemin → Issyk-Kul → Karakol",
        description:
          "Journée de route panoramique le long d'Issyk-Kul, immense lac de montagne aux eaux qui ne gèlent jamais, encadré de sommets enneigés. Arrivée à Karakol, ville-étape à l'ambiance singulière au pied du Tian Shan.",
        activities: ["Route panoramique le long d'Issyk-Kul"],
        overnight: "Karakol",
        icon: "lake",
      },
      {
        day: 3,
        title: "Karakol → Altyn-Arashan → Karakol",
        description:
          "Excursion 4x4 vers le plateau d'altitude d'Altyn-Arashan, par une piste de montagne mémorable. Randonnée possible dans la vallée cernée de pics avant de redescendre à Karakol pour la nuit.",
        activities: ["Excursion 4x4 en montagne", "Randonnée (option)"],
        overnight: "Karakol",
        icon: "jeep",
      },
      {
        day: 4,
        title: "Karakol → Jeti-Oguz → Kok-Jaiyk",
        description:
          "Les falaises rouges de Jeti-Oguz, puis la vallée de Kok-Jaiyk : randonnée au milieu des alpages et des forêts d'altitude, loin de tout. Nuit au cœur de la nature.",
        activities: ["Jeti-Oguz", "Randonnée à Kok-Jaiyk"],
        overnight: "Kok-Jaiyk",
        icon: "hike",
      },
      {
        day: 5,
        title: "Kok-Jaiyk → Barskoon → Skazka → Bokonbaevo",
        description:
          "Cascades de Barskoon nichées dans la verdure, puis le canyon de Skazka et ses formations rouges au bord du lac. La journée se clôt par une démonstration de chasse à l'aigle, art nomade transmis de génération en génération. Nuit à Bokonbaevo.",
        activities: ["Cascades de Barskoon", "Canyon de Skazka", "Chasse à l'aigle"],
        overnight: "Bokonbaevo",
        icon: "culture",
      },
      {
        day: 6,
        title: "Bokonbaevo → Kochkor → Song-Köl",
        description:
          "Montée vers le lac Song-Köl, à plus de 3000 m, terrain d'estive des éleveurs. On entre dans l'univers nomade : yourtes éparpillées, chevaux en liberté, horizon sans fin. Cheval en option avant la première nuit sous la yourte.",
        activities: ["Route vers Song-Köl", "Cheval (option)"],
        overnight: "Yourte à Song-Köl",
        icon: "yurt",
      },
      {
        day: 7,
        title: "Song-Köl, journée complète",
        description:
          "Une journée entière pour vivre le lac au ralenti : marche le long des rives, randonnée sur les crêtes douces, ou cheval avec les bergers. Le temps de goûter vraiment au silence et au quotidien nomade, loin des circuits pressés. Seconde nuit en yourte.",
        activities: ["Marche / randonnée", "Cheval (option)", "Rencontre avec les éleveurs"],
        overnight: "Yourte à Song-Köl",
        icon: "mountain",
      },
      {
        day: 8,
        title: "Song-Köl → Bichkek",
        description:
          "Descente panoramique des hauts plateaux vers Bichkek par les cols. Fin du circuit.",
        activities: ["Retour à Bichkek"],
        overnight: "—",
        icon: "jeep",
      },
    ],
  },

  {
    slug: "9-jours",
    duration: 9,
    name: "Nomade",
    summary:
      "On pousse vers le sud jusqu'au caravansérail de Tash-Rabat, sur la route de la Soie, avec deux nuits en yourte à Song-Köl.",
    fromPricePer4: 950,
    days: [
      {
        day: 1,
        title: "Bichkek → Burana → Canyon de Konorchek → Chon-Kemin",
        description:
          "Tour de Burana puis randonnée de 2 à 3 heures dans le canyon de Konorchek et ses cheminées de roche rouge, avant de rejoindre la vallée de Chon-Kemin pour la première nuit chez l'habitant.",
        activities: ["Tour de Burana", "Randonnée à Konorchek (2–3 h)"],
        overnight: "Chon-Kemin",
        icon: "hike",
      },
      {
        day: 2,
        title: "Chon-Kemin → Issyk-Kul → Karakol",
        description:
          "Route panoramique le long du lac Issyk-Kul jusqu'à Karakol, entre eaux turquoise et sommets enneigés.",
        activities: ["Route le long d'Issyk-Kul"],
        overnight: "Karakol",
        icon: "lake",
      },
      {
        day: 3,
        title: "Karakol → Altyn-Arashan → Karakol",
        description:
          "Piste 4x4 vers le plateau d'Altyn-Arashan, cerné de pics, avec randonnée possible dans la vallée avant le retour à Karakol.",
        activities: ["Excursion 4x4 vers Altyn-Arashan", "Randonnée (option)"],
        overnight: "Karakol",
        icon: "jeep",
      },
      {
        day: 4,
        title: "Karakol → Jeti-Oguz → Kok-Jaiyk",
        description:
          "Les Sept Taureaux de Jeti-Oguz, puis randonnée dans la vallée sauvage de Kok-Jaiyk au milieu des alpages. Nuit en pleine nature.",
        activities: ["Jeti-Oguz", "Randonnée à Kok-Jaiyk"],
        overnight: "Kok-Jaiyk",
        icon: "hike",
      },
      {
        day: 5,
        title: "Kok-Jaiyk → Barskoon → Skazka → Bokonbaevo",
        description:
          "Cascades de Barskoon, canyon de Skazka aux teintes rouges, et démonstration de chasse à l'aigle en fin de journée. Nuit à Bokonbaevo, sur la rive sud d'Issyk-Kul.",
        activities: ["Cascades de Barskoon", "Canyon de Skazka", "Chasse à l'aigle"],
        overnight: "Bokonbaevo",
        icon: "culture",
      },
      {
        day: 6,
        title: "Bokonbaevo → Song-Köl",
        description:
          "Route panoramique vers le lac Song-Köl, à plus de 3000 m d'altitude, cœur battant de la vie nomade en été. Cheval en option, puis première nuit sous la yourte face au lac.",
        activities: ["Route vers Song-Köl", "Cheval (option)"],
        overnight: "Yourte à Song-Köl",
        icon: "yurt",
      },
      {
        day: 7,
        title: "Song-Köl, journée complète",
        description:
          "Journée entière au bord du lac : randonnées, marche sur les alpages, cheval avec les éleveurs et immersion dans leur quotidien. Le point culminant de l'expérience nomade. Seconde nuit en yourte.",
        activities: ["Randonnée et marche", "Cheval (option)", "Vie nomade"],
        overnight: "2ᵉ nuit en yourte à Song-Köl",
        icon: "mountain",
      },
      {
        day: 8,
        title: "Song-Köl → Naryn → Tash-Rabat",
        description:
          "Route de montagne spectaculaire vers le sud, jusqu'au caravansérail de Tash-Rabat, halte de pierre du XVe siècle sur la route de la Soie, blotti dans une vallée isolée à 3200 m. Nuit à proximité, dans un décor hors du temps.",
        activities: ["Route de montagne", "Caravansérail de Tash-Rabat"],
        overnight: "Près de Tash-Rabat",
        icon: "culture",
      },
      {
        day: 9,
        title: "Tash-Rabat → Bichkek",
        description:
          "Longue route retour à travers les paysages changeants du centre du pays jusqu'à Bichkek. Fin du circuit.",
        activities: ["Retour à Bichkek"],
        overnight: "—",
        icon: "jeep",
      },
    ],
  },

  {
    slug: "10-jours",
    duration: 10,
    name: "Expédition",
    summary:
      "Le circuit complet : une nuit en pleine montagne à Altyn-Arashan, deux nuits à Song-Köl et une halte à Tash-Rabat. L'immersion la plus profonde.",
    fromPricePer4: 1050,
    days: [
      {
        day: 1,
        title: "Bichkek → Burana → Canyon de Konorchek → Chon-Kemin",
        description:
          "Tour de Burana, vestige de la route de la Soie, puis randonnée de 2 à 3 heures dans le canyon de Konorchek et ses cheminées rouges. Nuit dans la vallée verte de Chon-Kemin.",
        activities: ["Tour de Burana", "Randonnée à Konorchek (2–3 h)"],
        overnight: "Chon-Kemin",
        icon: "hike",
      },
      {
        day: 2,
        title: "Chon-Kemin → Issyk-Kul → Karakol",
        description:
          "Journée de route panoramique le long d'Issyk-Kul, lac immense aux eaux libres de glace, jusqu'à Karakol au pied du Tian Shan.",
        activities: ["Route le long d'Issyk-Kul"],
        overnight: "Karakol",
        icon: "lake",
      },
      {
        day: 3,
        title: "Karakol → Altyn-Arashan",
        description:
          "Montée en 4x4 vers Altyn-Arashan par une piste vertigineuse, jusqu'au plateau d'altitude cerné de sommets. Randonnée et exploration de la vallée, sources chaudes en option, puis nuit sur place, en pleine montagne, coupé du monde.",
        activities: ["Piste 4x4 en montagne", "Exploration de la vallée", "Sources chaudes (option)"],
        overnight: "Altyn-Arashan",
        icon: "springs",
      },
      {
        day: 4,
        title: "Altyn-Arashan → Karakol",
        description:
          "Randonnée matinale dans la lumière rasante du plateau, moment fort du séjour, puis descente tranquille vers Karakol pour la nuit.",
        activities: ["Randonnée matinale", "Retour à Karakol"],
        overnight: "Karakol",
        icon: "hike",
      },
      {
        day: 5,
        title: "Karakol → Jeti-Oguz → Kok-Jaiyk",
        description:
          "Les falaises rouges de Jeti-Oguz puis la vallée de Kok-Jaiyk : randonnée au milieu des alpages et des forêts, loin des foules. Nuit en pleine nature.",
        activities: ["Jeti-Oguz", "Randonnée à Kok-Jaiyk"],
        overnight: "Kok-Jaiyk",
        icon: "hike",
      },
      {
        day: 6,
        title: "Kok-Jaiyk → Barskoon → Skazka → Bokonbaevo",
        description:
          "Cascades de Barskoon dans la verdure, canyon de Skazka aux roches sculptées, et démonstration de chasse à l'aigle en fin de journée. Nuit à Bokonbaevo.",
        activities: ["Cascades de Barskoon", "Canyon de Skazka", "Chasse à l'aigle"],
        overnight: "Bokonbaevo",
        icon: "culture",
      },
      {
        day: 7,
        title: "Bokonbaevo → Song-Köl",
        description:
          "Route panoramique vers le lac Song-Köl, à plus de 3000 m, où les éleveurs passent l'été. Cheval en option, puis première nuit sous la yourte au milieu des pâturages.",
        activities: ["Route vers Song-Köl", "Cheval (option)"],
        overnight: "Yourte à Song-Köl",
        icon: "yurt",
      },
      {
        day: 8,
        title: "Song-Köl, journée complète",
        description:
          "Journée entière autour du lac : randonnée, marche sur les crêtes, cheval avec les bergers et partage du quotidien nomade. Le sommet de l'expérience. Seconde nuit en yourte.",
        activities: ["Randonnée autour du lac", "Cheval (option)", "Vie nomade"],
        overnight: "2ᵉ nuit à Song-Köl",
        icon: "mountain",
      },
      {
        day: 9,
        title: "Song-Köl → Tash-Rabat",
        description:
          "Route de montagne panoramique vers le sud jusqu'au caravansérail de Tash-Rabat, halte de pierre du XVe siècle sur la route de la Soie, isolée dans sa vallée à 3200 m. Nuit à proximité.",
        activities: ["Route de montagne", "Caravansérail de Tash-Rabat"],
        overnight: "Près de Tash-Rabat",
        icon: "culture",
      },
      {
        day: 10,
        title: "Tash-Rabat → Bichkek",
        description:
          "Dernière grande route à travers le centre du pays jusqu'à Bichkek. Fin du circuit.",
        activities: ["Retour à Bichkek"],
        overnight: "—",
        icon: "jeep",
      },
    ],
  },
];

export const getItinerary = (slug: string) =>
  itineraries.find((i) => i.slug === slug);
