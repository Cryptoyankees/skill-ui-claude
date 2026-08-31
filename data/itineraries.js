/*
 * Terres Nomades — contenu des 4 circuits (source de vérité pour les pages
 * /circuits/*). Édite ce fichier uniquement — le design n'en dépend pas.
 *
 * Ce contenu a été rédigé à partir des étapes déjà connues du site
 * (Ala-Archa, Issyk-Kul, canyon Skazka, Jyrgalan, sources chaudes, Song-Köl,
 * Tash Rabat, Kel-Suu). À relire/ajuster par le fondateur.
 *
 * Schéma (voir brief itinéraires) :
 * ItineraryDay { day, title, description, activities[], overnight, icon, photo? }
 * icon: 'mountain' | 'lake' | 'jeep' | 'hike' | 'yurt' | 'culture' | 'springs'
 * Itinerary { slug, duration, name, summary, fromPricePer4, days[] }
 */
window.ITINERARIES = [
  {
    slug: "7-jours",
    duration: 7,
    name: "L'essentiel",
    summary: "Le format le plus court pour découvrir le Kirghizstan sans se disperser : gorges glaciaires, lac Issyk-Kul et canyon aux couleurs ocres, en 4x4 privé.",
    fromPricePer4: 750,
    heroImage: "images/circuit-essentiel.jpg",
    heroAlt: "Canyon Skazka aux formations rocheuses ocres",
    badges: ["4x4 privé"],
    difficulty: 2,
    days: [
      { day: 1, title: "Arrivée à Bichkek", description: "Accueil à l'aéroport de Manas, transfert et installation. Premier contact avec votre chauffeur autour d'un thé, briefing du circuit.", activities: ["Accueil aéroport", "Briefing du circuit"], overnight: "Bichkek", icon: "jeep", photo: "images/bichkek-tour-horloge-centre-ville.jpg", photoAlt: "Bichkek, la capitale du Kirghizstan, au pied du Tian Shan" },
      { day: 2, title: "Bichkek → Ala-Archa → Bichkek", description: "Journée dans le parc national d'Ala-Archa, aux portes de la capitale : marche d'acclimatation au pied des glaciers du Tian Shan.", activities: ["Marche en gorge", "Pique-nique en altitude"], overnight: "Bichkek", icon: "hike", photo: "images/vallee-ala-archa-riviere-kirghizstan.jpg", photoAlt: "Rivière serpentant dans la vallée d'Ala-Archa, au pied du Tian Shan" },
      { day: 3, title: "Bichkek → Issyk-Kul", description: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde après le Titicaca.", activities: ["Route panoramique"], overnight: "Rives de l'Issyk-Kul", icon: "jeep", photo: "images/baie-issyk-kul-elevage-poissons-kirghizstan.jpg", photoAlt: "Baie turquoise du lac Issyk-Kul" },
      { day: 4, title: "Issyk-Kul → Canyon Skazka", description: "Marche dans les formations rocheuses ocres du canyon Skazka, le « conte de fées », sculpté par l'érosion.", activities: ["Marche photo", "Formations rocheuses"], overnight: "Rives de l'Issyk-Kul", icon: "mountain", photo: "images/canyon-skazka-formations-rocheuses-kirghizstan.jpg", photoAlt: "Formations rocheuses ocres du canyon Skazka" },
      { day: 5, title: "Rives de l'Issyk-Kul", description: "Journée plus tranquille au bord du lac, entre villages de pêcheurs et plages sauvages.", activities: ["Détente au bord du lac"], overnight: "Rives de l'Issyk-Kul", icon: "lake" },
      { day: 6, title: "Issyk-Kul → Bichkek", description: "Retour vers la capitale par la route de montagne, derniers panoramas sur le Tian Shan.", activities: ["Route de montagne"], overnight: "Bichkek", icon: "jeep", photo: "images/4x4-route-campagne-kirghizstan.jpg", photoAlt: "4x4 sur une piste de la campagne kirghize" },
      { day: 7, title: "Bichkek → Départ", description: "Transfert vers l'aéroport de Bichkek. Fin du séjour.", activities: [], overnight: "—", icon: "jeep", photo: "images/bichkek-place-ala-too-manas.jpg", photoAlt: "Place Ala-Too et statue de Manas, Bichkek" },
    ],
  },
  {
    slug: "8-jours",
    duration: 8,
    name: "Grand tour",
    summary: "Le circuit L'essentiel, prolongé d'une bascule au-dessus de 3 000 m jusqu'au lac de Song-Köl, avec une nuit en yourte chez une famille d'éleveurs.",
    fromPricePer4: 850,
    heroImage: "images/circuit-grand-tour.jpg",
    heroAlt: "Camp de yourtes blanches au bord du lac Song-Köl",
    badges: ["4x4 privé", "Yourte incluse"],
    difficulty: 3,
    days: [
      { day: 1, title: "Arrivée à Bichkek", description: "Accueil à l'aéroport de Manas, transfert et installation. Premier contact avec votre chauffeur autour d'un thé, briefing du circuit.", activities: ["Accueil aéroport", "Briefing du circuit"], overnight: "Bichkek", icon: "jeep", photo: "images/bichkek-tour-horloge-centre-ville.jpg", photoAlt: "Bichkek, la capitale du Kirghizstan, au pied du Tian Shan" },
      { day: 2, title: "Bichkek → Ala-Archa → Bichkek", description: "Journée dans le parc national d'Ala-Archa, aux portes de la capitale : marche d'acclimatation au pied des glaciers du Tian Shan.", activities: ["Marche en gorge", "Pique-nique en altitude"], overnight: "Bichkek", icon: "hike", photo: "images/vallee-ala-archa-riviere-kirghizstan.jpg", photoAlt: "Rivière serpentant dans la vallée d'Ala-Archa, au pied du Tian Shan" },
      { day: 3, title: "Bichkek → Issyk-Kul", description: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde après le Titicaca.", activities: ["Route panoramique"], overnight: "Rives de l'Issyk-Kul", icon: "jeep", photo: "images/baie-issyk-kul-elevage-poissons-kirghizstan.jpg", photoAlt: "Baie turquoise du lac Issyk-Kul" },
      { day: 4, title: "Issyk-Kul → Canyon Skazka", description: "Marche dans les formations rocheuses ocres du canyon Skazka, le « conte de fées », sculpté par l'érosion.", activities: ["Marche photo", "Formations rocheuses"], overnight: "Rives de l'Issyk-Kul", icon: "mountain", photo: "images/canyon-skazka-formations-rocheuses-kirghizstan.jpg", photoAlt: "Formations rocheuses ocres du canyon Skazka" },
      { day: 5, title: "Issyk-Kul → Cols du Tian Shan", description: "Franchissement des cols d'altitude en direction de Song-Köl, au-dessus de 3 000 m.", activities: ["Cols de montagne", "Panoramas d'altitude"], overnight: "En route", icon: "mountain", photo: "images/vallee-suusamyr-alpage-kirghizstan.jpg", photoAlt: "Steppe d'altitude et alpage du Tian Shan" },
      { day: 6, title: "Cols → Song-Köl", description: "Arrivée au lac de Song-Köl et nuit en yourte chez une famille d'éleveurs, au milieu des alpages.", activities: ["Nuit en yourte", "Troupeaux en liberté"], overnight: "Yourte à Song-Köl", icon: "yurt", photo: "images/jeune-berger-cheval-steppe-kirghizstan.jpg", photoAlt: "Jeune berger kirghize à cheval, troupeaux en liberté" },
      { day: 7, title: "Song-Köl → Bichkek", description: "Redescente vers la capitale par les vallées, derniers arrêts photo.", activities: [], overnight: "Bichkek", icon: "jeep", photo: "images/4x4-route-campagne-kirghizstan.jpg", photoAlt: "4x4 sur une piste de la campagne kirghize" },
      { day: 8, title: "Bichkek → Départ", description: "Transfert vers l'aéroport de Bichkek. Fin du séjour.", activities: [], overnight: "—", icon: "jeep", photo: "images/bichkek-place-ala-too-manas.jpg", photoAlt: "Place Ala-Too et statue de Manas, Bichkek" },
    ],
  },
  {
    slug: "9-jours",
    duration: 9,
    name: "Nomade",
    summary: "Une journée de plus pour pousser jusqu'à Jyrgalan et ses villages d'éleveurs, avec une halte aux sources chaudes avant de rejoindre Song-Köl.",
    fromPricePer4: 950,
    heroImage: "images/circuit-nomade.jpg",
    heroAlt: "Campement de montagne près de Jyrgalan",
    badges: ["4x4 privé", "Yourte incluse", "Nuit chez l'habitant"],
    difficulty: 4,
    days: [
      { day: 1, title: "Arrivée à Bichkek", description: "Accueil à l'aéroport de Manas, transfert et installation. Premier contact avec votre chauffeur autour d'un thé, briefing du circuit.", activities: ["Accueil aéroport", "Briefing du circuit"], overnight: "Bichkek", icon: "jeep", photo: "images/bichkek-tour-horloge-centre-ville.jpg", photoAlt: "Bichkek, la capitale du Kirghizstan, au pied du Tian Shan" },
      { day: 2, title: "Bichkek → Ala-Archa → Bichkek", description: "Journée dans le parc national d'Ala-Archa, aux portes de la capitale : marche d'acclimatation au pied des glaciers du Tian Shan.", activities: ["Marche en gorge", "Pique-nique en altitude"], overnight: "Bichkek", icon: "hike", photo: "images/vallee-ala-archa-riviere-kirghizstan.jpg", photoAlt: "Rivière serpentant dans la vallée d'Ala-Archa, au pied du Tian Shan" },
      { day: 3, title: "Bichkek → Issyk-Kul", description: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde après le Titicaca.", activities: ["Route panoramique"], overnight: "Rives de l'Issyk-Kul", icon: "jeep", photo: "images/baie-issyk-kul-elevage-poissons-kirghizstan.jpg", photoAlt: "Baie turquoise du lac Issyk-Kul" },
      { day: 4, title: "Issyk-Kul → Canyon Skazka", description: "Marche dans les formations rocheuses ocres du canyon Skazka, le « conte de fées », sculpté par l'érosion.", activities: ["Marche photo", "Formations rocheuses"], overnight: "Rives de l'Issyk-Kul", icon: "mountain", photo: "images/canyon-skazka-formations-rocheuses-kirghizstan.jpg", photoAlt: "Formations rocheuses ocres du canyon Skazka" },
      { day: 5, title: "Issyk-Kul → Jyrgalan", description: "Route vers Jyrgalan, village de montagne au bout de la vallée, rencontre avec des familles d'éleveurs.", activities: ["Rencontre éleveurs"], overnight: "Jyrgalan", icon: "jeep", photo: "images/cavaliers-galop-steppe-kirghizstan.jpg", photoAlt: "Cavaliers kirghizes au galop, rencontre avec des familles d'éleveurs" },
      { day: 6, title: "Jyrgalan → Sources chaudes", description: "Marche en vallée puis détente aux sources chaudes naturelles, au pied des sommets.", activities: ["Randonnée", "Bain thermal"], overnight: "Jyrgalan", icon: "springs" },
      { day: 7, title: "Jyrgalan → Song-Köl", description: "Longue route à travers les cols du Tian Shan en direction du lac d'altitude de Song-Köl.", activities: ["Cols de montagne"], overnight: "En route", icon: "mountain", photo: "images/vallee-suusamyr-alpage-kirghizstan.jpg", photoAlt: "Steppe d'altitude et alpage du Tian Shan" },
      { day: 8, title: "Arrivée à Song-Köl", description: "Nuit en yourte chez une famille d'éleveurs, au bord du lac de Song-Köl.", activities: ["Nuit en yourte", "Troupeaux en liberté"], overnight: "Yourte à Song-Köl", icon: "yurt", photo: "images/camp-yourtes-vallee-kirghizstan.jpg", photoAlt: "Camp de yourtes traditionnelles au Kirghizstan" },
      { day: 9, title: "Song-Köl → Bichkek → Départ", description: "Redescente vers Bichkek et transfert vers l'aéroport. Fin du séjour.", activities: [], overnight: "—", icon: "jeep", photo: "images/bichkek-place-ala-too-manas.jpg", photoAlt: "Place Ala-Too et statue de Manas, Bichkek" },
    ],
  },
  {
    slug: "10-jours",
    duration: 10,
    name: "Expédition",
    summary: "Le circuit complet : jusqu'au caravansérail de Tash Rabat et au lac confidentiel de Kel-Suu, en plus de Jyrgalan et Song-Köl.",
    fromPricePer4: 1050,
    heroImage: "images/circuit-expedition.jpg",
    heroAlt: "Forêt de sapins et rivière de montagne",
    badges: ["4x4 privé", "Yourte incluse", "Nuit chez l'habitant"],
    difficulty: 5,
    days: [
      { day: 1, title: "Arrivée à Bichkek", description: "Accueil à l'aéroport de Manas, transfert et installation. Premier contact avec votre chauffeur autour d'un thé, briefing du circuit.", activities: ["Accueil aéroport", "Briefing du circuit"], overnight: "Bichkek", icon: "jeep", photo: "images/bichkek-tour-horloge-centre-ville.jpg", photoAlt: "Bichkek, la capitale du Kirghizstan, au pied du Tian Shan" },
      { day: 2, title: "Bichkek → Ala-Archa → Bichkek", description: "Journée dans le parc national d'Ala-Archa, aux portes de la capitale : marche d'acclimatation au pied des glaciers du Tian Shan.", activities: ["Marche en gorge", "Pique-nique en altitude"], overnight: "Bichkek", icon: "hike", photo: "images/vallee-ala-archa-riviere-kirghizstan.jpg", photoAlt: "Rivière serpentant dans la vallée d'Ala-Archa, au pied du Tian Shan" },
      { day: 3, title: "Bichkek → Issyk-Kul", description: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde après le Titicaca.", activities: ["Route panoramique"], overnight: "Rives de l'Issyk-Kul", icon: "jeep", photo: "images/baie-issyk-kul-elevage-poissons-kirghizstan.jpg", photoAlt: "Baie turquoise du lac Issyk-Kul" },
      { day: 4, title: "Issyk-Kul → Canyon Skazka", description: "Marche dans les formations rocheuses ocres du canyon Skazka, le « conte de fées », sculpté par l'érosion.", activities: ["Marche photo", "Formations rocheuses"], overnight: "Rives de l'Issyk-Kul", icon: "mountain", photo: "images/canyon-skazka-formations-rocheuses-kirghizstan.jpg", photoAlt: "Formations rocheuses ocres du canyon Skazka" },
      { day: 5, title: "Issyk-Kul → Jyrgalan", description: "Route vers Jyrgalan, village de montagne au bout de la vallée, rencontre avec des familles d'éleveurs.", activities: ["Rencontre éleveurs"], overnight: "Jyrgalan", icon: "jeep", photo: "images/cavaliers-galop-steppe-kirghizstan.jpg", photoAlt: "Cavaliers kirghizes au galop, rencontre avec des familles d'éleveurs" },
      { day: 6, title: "Jyrgalan → Sources chaudes", description: "Marche en vallée puis détente aux sources chaudes naturelles, au pied des sommets.", activities: ["Randonnée", "Bain thermal"], overnight: "Jyrgalan", icon: "springs" },
      { day: 7, title: "Jyrgalan → Tash Rabat", description: "Longue traversée vers Tash Rabat : visite de l'ancien caravansérail de pierre sur la route de la soie.", activities: ["Route de la soie", "Caravansérail"], overnight: "Tash Rabat", icon: "culture" },
      { day: 8, title: "Tash Rabat → Kel-Suu → Tash Rabat", description: "Excursion vers Kel-Suu, lac confidentiel proche de la frontière, accès en zone réglementée.", activities: ["Zone réglementée", "Lac secret"], overnight: "Tash Rabat", icon: "lake" },
      { day: 9, title: "Tash Rabat → Song-Köl", description: "Route vers Song-Köl et nuit en yourte chez une famille d'éleveurs, au bord du lac d'altitude.", activities: ["Nuit en yourte"], overnight: "Yourte à Song-Köl", icon: "yurt", photo: "images/jeune-berger-cheval-steppe-kirghizstan.jpg", photoAlt: "Jeune berger kirghize à cheval, troupeaux en liberté" },
      { day: 10, title: "Song-Köl → Bichkek → Départ", description: "Redescente vers Bichkek et transfert vers l'aéroport. Fin du séjour.", activities: [], overnight: "—", icon: "jeep", photo: "images/bichkek-place-ala-too-manas.jpg", photoAlt: "Place Ala-Too et statue de Manas, Bichkek" },
    ],
  },
];

window.getItinerary = function (slug) {
  return window.ITINERARIES.find(function (it) { return it.slug === slug; });
};
