/*
 * Terres Nomades — itinéraire jour par jour, circuit "Expédition" (10 jours).
 * Contenu à valider/affiner par le fondateur — structure et design n'en dépendent pas.
 * icon: 'car' | 'mountain' | 'yurt' | 'lake'
 * photo: true ajoute un emplacement photo après cette étape.
 */
window.ITINERARY = [
  { day: 1, icon: 'car', title: 'Arrivée à Bichkek', text: "Accueil à l'aéroport, transfert et installation. Briefing du circuit avec votre chauffeur autour d'un thé.", photo: false },
  { day: 2, icon: 'mountain', title: 'Gorges d’Ala-Archa', text: "Départ pour le parc national d'Ala-Archa : marche d'acclimatation au pied des glaciers du Tian Shan.", photo: true },
  { day: 3, icon: 'car', title: 'Route vers Issyk-Kul', text: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde.", photo: false },
  { day: 4, icon: 'mountain', title: 'Canyon de Skazka', text: "Marche dans les formations rocheuses ocres du canyon Skazka (« le conte de fées »).", photo: true },
  { day: 5, icon: 'mountain', title: 'Vallée de Jyrgalan', text: "Route vers Jyrgalan, village de montagne au bout de la vallée, rencontre avec des familles d'éleveurs.", photo: false },
  { day: 6, icon: 'lake', title: 'Sources chaudes', text: "Marche en vallée puis détente aux sources chaudes naturelles, au pied des sommets.", photo: true },
  { day: 7, icon: 'car', title: 'Route vers Tash Rabat', text: "Longue traversée vers Tash Rabat, ancien caravansérail de pierre sur la route de la soie.", photo: false },
  { day: 8, icon: 'lake', title: 'Lac de Kel-Suu', text: "Excursion vers Kel-Suu, lac confidentiel proche de la frontière, accès en zone réglementée.", photo: true },
  { day: 9, icon: 'yurt', title: 'Lac de Song-Köl', text: "Route vers Song-Köl et nuit en yourte chez une famille d'éleveurs, au bord du lac d'altitude.", photo: true },
  { day: 10, icon: 'car', title: 'Retour et départ', text: "Redescente vers Bichkek et transfert vers l'aéroport. Fin du séjour.", photo: false },
];
