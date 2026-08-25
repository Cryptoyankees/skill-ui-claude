/*
 * Terres Nomades — itinéraire jour par jour, circuit "Grand tour" (8 jours).
 * Contenu à valider/affiner par le fondateur — structure et design n'en dépendent pas.
 * icon: 'car' | 'mountain' | 'yurt' | 'lake'
 * photo: true ajoute un emplacement photo après cette étape.
 */
window.ITINERARY = [
  { day: 1, icon: 'car', title: 'Arrivée à Bichkek', text: "Accueil à l'aéroport, transfert et installation. Briefing du circuit avec votre chauffeur autour d'un thé.", photo: false },
  { day: 2, icon: 'mountain', title: 'Gorges d’Ala-Archa', text: "Départ pour le parc national d'Ala-Archa : marche d'acclimatation au pied des glaciers du Tian Shan.", photo: true },
  { day: 3, icon: 'car', title: 'Route vers Issyk-Kul', text: "Transfert en 4x4 vers les rives du lac Issyk-Kul, deuxième plus grand lac alpin du monde.", photo: false },
  { day: 4, icon: 'mountain', title: 'Canyon de Skazka', text: "Marche dans les formations rocheuses ocres du canyon Skazka (« le conte de fées »).", photo: true },
  { day: 5, icon: 'mountain', title: 'Cols du Tian Shan', text: "Franchissement des cols d'altitude en direction de Song-Köl, au-dessus de 3 000 m.", photo: false },
  { day: 6, icon: 'yurt', title: 'Lac de Song-Köl', text: "Nuit en yourte chez une famille d'éleveurs, au bord du lac d'altitude de Song-Köl.", photo: true },
  { day: 7, icon: 'car', title: 'Retour vers Bichkek', text: "Redescente vers la capitale par les vallées, derniers arrêts photo.", photo: false },
  { day: 8, icon: 'car', title: 'Départ', text: "Transfert vers l'aéroport de Bichkek. Fin du séjour.", photo: false },
];
