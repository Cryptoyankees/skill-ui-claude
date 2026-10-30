// src/data/materiel.ts
// Source unique de vérité pour les pages affiliation (pilier /materiel + pages dédiées).
// À COMPLÉTER PLUS TARD : les champs `affiliateUrl` et `image` de chaque produit (laissés "" pour l'instant).
// Tant que `affiliateUrl` est vide, le bouton affiche "Bientôt disponible" (cf. BRIEF).
// Tant que `image` est vide, la fiche produit s'affiche sans photo (pas d'image cassée).

export interface Produit {
  id: string;
  nom: string;
  reference?: string;
  pourQui: string;
  description: string;
  points_forts: string[];
  points_faibles: string[];
  prix: string;            // affichage, jamais figé exactement
  plateforme: "Amazon" | "Decathlon" | "Chapka";
  affiliateUrl: string;    // "" tant que le lien n'est pas prêt
  image: string;           // URL de la photo produit, "" tant qu'elle n'est pas prête
  recommande?: boolean;
}

export interface Categorie {
  slug: string;
  type: "comparatif" | "top" | "fiche";
  titre: string;
  titreCourt: string;
  icone: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  verdict: string;
  produits: Produit[];
}

export const categories: Categorie[] = [
  // ---------------------------------------------------------------- GOURDE
  {
    slug: "gourde",
    type: "comparatif",
    titre: "Quelle gourde choisir pour le Kirghizstan ?",
    titreCourt: "Gourde",
    icone: "gourde",
    metaTitle: "Quelle gourde pour le Kirghizstan ? Filtrante ou réutilisable",
    metaDescription:
      "Boire l'eau des sources en sécurité et s'hydrater sur les pistes : comparatif de gourdes filtrantes et réutilisables pour le Kirghizstan.",
    intro:
      "Au Kirghizstan, l'eau du robinet n'est pas potable et tu passeras tes journées près de rivières et de sources de montagne. Deux besoins à couvrir : une gourde filtrante pour boire l'eau en sécurité (le risque santé n°1 du voyage), et une gourde réutilisable pour s'hydrater sur les longues journées de piste.",
    verdict:
      "Pour boire l'eau des sources sans risque, la LifeStraw suffit — l'OKO pour une filtration renforcée. Côté hydratation au quotidien, l'inox isotherme garde la température, la gourde Decathlon mise sur la légèreté et le petit prix.",
    produits: [
      {
        id: "lifestraw-go",
        nom: "LifeStraw (gourde filtrante)",
        reference: "",
        pourQui: "Boire l'eau des sources en sécurité",
        description:
          "Gourde filtrante simple et fiable : élimine bactéries, parasites et microplastiques. Parfaite pour boire l'eau des sources d'altitude.",
        points_forts: ["Filtration efficace", "Marque de référence", "Facile à utiliser"],
        points_faibles: ["Ne filtre pas les virus (inutile en montagne)"],
        prix: "~51 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B0hlpccpf",
        image: "",
        recommande: true,
      },
      {
        id: "oko",
        nom: "OKO (gourde filtrante)",
        reference: "",
        pourQui: "La filtration renforcée",
        description:
          "Gourde filtrante à filtration avancée pour une eau sûre même d'origine douteuse. Un cran au-dessus pour les voyageurs prudents.",
        points_forts: ["Filtration avancée", "Polyvalente"],
        points_faibles: ["Plus chère"],
        prix: "~69 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B02zlUdJN",
        image: "",
      },
      {
        id: "gourde-inox-1l",
        nom: "Gourde isotherme inox 1 L",
        reference: "",
        pourQui: "Garder la température toute la journée",
        description:
          "Gourde isotherme en inox, robuste : garde les boissons chaudes ou fraîches toute la journée. À remplir d'eau déjà filtrée ou potable.",
        points_forts: ["Isotherme", "Très robuste", "1 L"],
        points_faibles: ["Plus lourde", "Ne filtre pas l'eau"],
        prix: "~31 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B02p2e7VW",
        image: "",
      },
      {
        id: "gourde-decathlon-1-2l",
        nom: "Gourde réutilisable 1,2 L",
        reference: "",
        pourQui: "Le petit prix et la légèreté",
        description:
          "Grande gourde réutilisable, légère et économique, pour s'hydrater sur les pistes. À remplir d'eau déjà filtrée ou potable.",
        points_forts: ["Très bon marché", "Grande contenance", "Légère"],
        points_faibles: ["Non isotherme", "Ne filtre pas l'eau"],
        prix: "~8,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.448064147811188181455690&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fgourde-rando-mh500-bouchon-ouverture-rapide-1-2-litre-plastique-ecozen-bleu%2f345418%2fm8798181",
        image: "",
      },
    ],
  },

  // ---------------------------------------------------------------- DRAP DE SAC
  {
    slug: "drap-de-sac",
    type: "comparatif",
    titre: "Quel drap de sac pour dormir en yourte ?",
    titreCourt: "Drap de sac",
    icone: "drap",
    metaTitle: "Drap de sac (sac à viande) pour le Kirghizstan",
    metaDescription:
      "Un drap de sac pour les nuits en yourte et en guesthouse : hygiène et chaleur d'appoint. Deux options comparées.",
    intro:
      "En yourte comme en guesthouse simple, un drap de sac (ou « sac à viande ») est l'accessoire malin : une barrière d'hygiène et quelques degrés de chaleur en plus, pour un poids négligeable dans le sac.",
    verdict:
      "Pour un bon compromis prix/confort, la version Decathlon en coton est difficile à battre.",
    produits: [
      {
        id: "drap-sac-coton",
        nom: "Drap de sac coton / microfibre",
        reference: "",
        pourQui: "Le choix polyvalent",
        description:
          "Drap-sac léger qui s'utilise comme sac à viande : hygiène et chaleur d'appoint pour les nuits en yourte et en guesthouse.",
        points_forts: ["Léger", "Facile à laver"],
        points_faibles: ["Chaleur d'appoint limitée"],
        prix: "~25-30 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B001qHKiv",
        image: "",
      },
      {
        id: "drap-sac-decathlon-confort",
        nom: "Drap de sac confort (coton)",
        reference: "",
        pourQui: "Le meilleur rapport qualité/prix",
        description:
          "Version confort en coton, agréable et facile d'entretien, pour protéger son sac de couchage.",
        points_forts: ["Petit prix", "Coton confortable", "Compact"],
        points_faibles: ["Non isolant par temps très froid"],
        prix: "~17,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480614848472544899124740&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fdrap-de-sac-de-couchage-en-coton-confort%2f324944%2fc335m8584370",
        image: "",
        recommande: true,
      },
    ],
  },

  // ---------------------------------------------------------------- SAC DE TREK
  {
    slug: "sac-de-trek",
    type: "comparatif",
    titre: "Quel sac à dos de trek pour le Kirghizstan ?",
    titreCourt: "Sac de trek",
    icone: "sac",
    metaTitle: "Sac à dos de trek pour le Kirghizstan : comparatif",
    metaDescription:
      "Choisir son sac à dos pour un voyage 4x4 et trek au Kirghizstan : trois sacs comparés, du budget au grand confort.",
    intro:
      "Entre les transferts en 4x4, les nuits en yourte et les excursions à pied, il te faut un sac robuste et bien porté. Voici trois options selon ton budget et ta pratique.",
    verdict:
      "Pour la plupart des voyageurs, le Simond MT100 offre le meilleur rapport qualité/prix. Le MT900 et le North Face Terra visent les treks plus engagés.",
    produits: [
      {
        id: "simond-mt900-symbium",
        nom: "Simond MT900 Symbium 50+10 L",
        reference: "",
        pourQui: "L'itinérance longue",
        description:
          "Sac de trek grande capacité (50+10 L), portage confortable et robuste pour les treks de plusieurs jours.",
        points_forts: ["Grande capacité", "Portage confort", "Robuste"],
        points_faibles: ["Plus cher"],
        prix: "~149,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480617068860977628949469&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fsac-a-dos-de-trekking-homme-50-10l-mt900-symbium%2f342061%2fc162c71c392m8751963",
        image: "",
      },
      {
        id: "simond-mt100-easyfit",
        nom: "Simond MT100 Easyfit 50 L",
        reference: "",
        pourQui: "Le meilleur rapport qualité/prix",
        description:
          "Sac de trek 50 L accessible et bien conçu : largement suffisant pour un voyage au Kirghizstan.",
        points_forts: ["Excellent rapport qualité/prix", "50 L polyvalent"],
        points_faibles: ["Moins de réglages que le MT900"],
        prix: "~69,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.448065383651817448631994&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fsac-a-dos-de-trekking-homme-50-l-mt100-easyfit%2f309807%2fc71c382m8559690",
        image: "",
        recommande: true,
      },
      {
        id: "north-face-terra-65",
        nom: "The North Face Terra 65",
        reference: "The North Face Terra 65",
        pourQui: "Le grand volume polyvalent",
        description:
          "Sac à dos 65 L polyvalent, dos ventilé et bon maintien pour les longues journées de portage.",
        points_forts: ["Grand volume", "Dos ventilé", "Marque réputée"],
        points_faibles: ["Volumineux pour un usage léger"],
        prix: "~179,90 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B09FmpM31",
        image: "",
      },
    ],
  },

  // ---------------------------------------------------------------- POWERBANK
  {
    slug: "powerbank",
    type: "comparatif",
    titre: "Quelle batterie externe pour le Kirghizstan ?",
    titreCourt: "Batterie externe",
    icone: "powerbank",
    metaTitle: "Batterie externe (powerbank) pour le Kirghizstan",
    metaDescription:
      "En montagne, l'électricité manque. Comparatif de deux batteries externes Anker 20 000 mAh pour tenir les jours sans prise.",
    intro:
      "En yourte et sur les alpages, tu peux passer plusieurs jours sans prise électrique. Une batterie externe de 20 000 mAh est le minimum pour garder téléphone, appareil photo et GPS chargés.",
    verdict:
      "Pour le simple dépannage, la version compacte suffit. Si tu voyages avec plus de matériel (ou un ordinateur portable), la 87 W à câble intégré est l'investissement malin.",
    produits: [
      {
        id: "anker-solo-20k",
        nom: "Anker Solo 20 000 mAh",
        reference: "",
        pourQui: "Le dépannage essentiel",
        description:
          "Batterie externe 20 000 mAh compacte : plusieurs recharges pour tenir les jours sans électricité.",
        points_forts: ["Compacte", "20 000 mAh", "Prix contenu"],
        points_faibles: ["Puissance de charge standard"],
        prix: "~30 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B073uRAg9",
        image: "",
      },
      {
        id: "anker-20k-87w",
        nom: "Anker 20 000 mAh 87 W (câble USB-C intégré)",
        reference: "Anker Batterie Externe 20000mAh 87W Max avec Câble USB C Intégré",
        pourQui: "Le voyageur bien équipé",
        description:
          "20 000 mAh, charge rapide 87 W et câble USB-C intégré : recharge même un ordinateur portable, sans câble à oublier.",
        points_forts: ["Charge rapide 87 W", "Câble USB-C intégré", "Recharge un PC portable"],
        points_faibles: ["Un peu plus chère"],
        prix: "~42,99 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B0bsmp3xt",
        image: "",
        recommande: true,
      },
    ],
  },

  // ---------------------------------------------------------------- DOUDOUNE
  {
    slug: "doudoune",
    type: "comparatif",
    titre: "Quelle doudoune pour les nuits d'altitude au Kirghizstan ?",
    titreCourt: "Doudoune",
    icone: "doudoune",
    metaTitle: "Doudoune compacte pour le Kirghizstan : notre choix",
    metaDescription:
      "Même en été, les nuits en altitude descendent vite. Une doudoune compacte et pliable adaptée aux soirées en yourte.",
    intro:
      "Les nuits en yourte et en altitude descendent vite en température, même en plein été. Une doudoune compacte qui se plie dans sa poche est la pièce à ne pas oublier.",
    verdict:
      "La Simond -3 °C pliable coche toutes les cases : chaude, légère et minuscule une fois rangée. Disponible en coupe homme et femme.",
    produits: [
      {
        id: "doudoune-simond-homme",
        nom: "Doudoune Simond -3 °C pliable (homme)",
        reference: "",
        pourQui: "Les soirées fraîches en altitude",
        description:
          "Doudoune compacte qui se plie dans sa poche, pour les nuits fraîches en yourte et en altitude.",
        points_forts: ["Très compacte", "Chaude jusqu'à -3 °C", "Légère"],
        points_faibles: ["Pas conçue pour le grand froid hivernal"],
        prix: "~64,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480617933670747566873155&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fdoudoune-de-trekking-legere-en-duvet-3degc-homme-xplore-bleu-electrique%2f378507%2fc59c59m8990692",
        image: "",
        recommande: true,
      },
      {
        id: "doudoune-simond-femme",
        nom: "Doudoune Simond -3 °C pliable (femme)",
        reference: "",
        pourQui: "Les soirées fraîches en altitude",
        description:
          "La même doudoune compacte -3 °C, en coupe femme.",
        points_forts: ["Très compacte", "Chaude jusqu'à -3 °C", "Légère"],
        points_faibles: ["Pas conçue pour le grand froid hivernal"],
        prix: "~64,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480615328482937049223331&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fdoudoune-de-trekking-legere-en-duvet-3degc-femme-xplore-bleu-marine%2f378580%2fc43c43m8991916",
        image: "",
      },
    ],
  },

  // ---------------------------------------------------------------- CHAUSSURES (TOP 5)
  {
    slug: "chaussures-randonnee",
    type: "top",
    titre: "Les meilleures chaussures de randonnée pour le Kirghizstan",
    titreCourt: "Chaussures de rando",
    icone: "chaussure",
    metaTitle: "Chaussures de randonnée pour le Kirghizstan : notre top",
    metaDescription:
      "Notre sélection de chaussures de randonnée pour les sentiers et pistes du Kirghizstan, du modèle premium à la valeur sûre à petit prix.",
    intro:
      "Sur les sentiers d'Altyn-Arashan, de Jeti-Oguz ou autour de Song-Köl, de bonnes chaussures imperméables et déjà faites à tes pieds font toute la différence. Voici notre sélection, du premium au petit prix.",
    verdict:
      "La Salomon X Ultra Gore-Tex est le choix premium le plus sûr. Pour un excellent rapport qualité/prix, la Quechua MH500 fait parfaitement le travail.",
    produits: [
      {
        id: "salomon-x-ultra-gtx",
        nom: "Salomon X Ultra Gore-Tex (homme)",
        reference: "",
        pourQui: "Le choix premium",
        description:
          "Chaussure de randonnée imperméable Gore-Tex : accroche et maintien pour les pistes exigeantes.",
        points_forts: ["Imperméable Gore-Tex", "Excellente accroche", "Maintien premium"],
        points_faibles: ["Prix plus élevé"],
        prix: "~139,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480610001418132398336366&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fchaussures-impermeables-de-randonnee-gore-tex-salomon-x-ultra-pioneer-2-gtx%2fX8880883%2fm8880883",
        image: "",
        recommande: true,
      },
      {
        id: "salomon-saliba-homme",
        nom: "Salomon Saliba (homme, 40-46)",
        reference: "Salomon Saliba homme",
        pourQui: "Le confort polyvalent",
        description:
          "Chaussure de randonnée polyvalente et confortable, bon maintien sur terrains variés.",
        points_forts: ["Confortable", "Polyvalente", "Bon maintien"],
        points_faibles: ["Moins technique que la X Ultra"],
        prix: "~109,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.44806325847122210599967&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fchaussures-impermeables-de-randonnee-montagne-salomon-saliba-homme%2f360171%2fm9012752",
        image: "",
      },
      {
        id: "salomon-saliba-femme",
        nom: "Salomon Saliba (femme, 37-42)",
        reference: "Salomon Saliba femme",
        pourQui: "Le confort polyvalent (coupe femme)",
        description:
          "Version femme de la Saliba : confort et maintien sur les sentiers.",
        points_forts: ["Confortable", "Polyvalente", "Coupe femme"],
        points_faibles: ["Moins technique que la X Ultra"],
        prix: "~109,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.448068468430068559801481&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fchaussures-de-randonnee-montagne-femme-salomon-saliba-grise%2f366888%2fc3c252m8950046",
        image: "",
      },
      {
        id: "quechua-nh500-homme",
        nom: "Quechua NH500 (homme)",
        reference: "",
        pourQui: "La valeur sûre à petit prix",
        description:
          "Chaussure de randonnée imperméable, modèle basse et légère : la valeur sûre à petit prix.",
        points_forts: ["Imperméable", "Excellent rapport qualité/prix", "Légère et souple"],
        points_faibles: ["Moins de maintien à la cheville qu'un modèle tige mi-haute"],
        prix: "~59,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.4480616350034661188489149&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fchaussures-de-randonnee-impermeables-homme-nh500-basses-wp-noir-fume%2f361242%2fc382m8930404",
        image: "",
        recommande: true,
      },
      {
        id: "quechua-mh500-femme",
        nom: "Quechua MH500 (femme)",
        reference: "",
        pourQui: "La valeur sûre à petit prix (coupe femme)",
        description:
          "Version femme, imperméable et confortable, excellent rapport qualité/prix.",
        points_forts: ["Imperméable", "Excellent rapport qualité/prix", "Coupe femme"],
        points_faibles: ["Durabilité moindre que le premium"],
        prix: "~59,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.448064483566137100021702&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fchaussure-de-randonnee-impermeable-femme-mh500-light-marron%2f351471%2fc222c391m8853686",
        image: "",
      },
    ],
  },

  // ---------------------------------------------------------------- JUMELLES (FICHE)
  {
    slug: "jumelles",
    type: "fiche",
    titre: "Quelles jumelles emporter au Kirghizstan ?",
    titreCourt: "Jumelles",
    icone: "jumelles",
    metaTitle: "Jumelles pour le Kirghizstan : notre recommandation",
    metaDescription:
      "Observer les aigles, les bouquetins et les grands paysages du Kirghizstan : notre recommandation de jumelles compactes.",
    intro:
      "Entre les rapaces en vol, les troupeaux sur les alpages et les panoramas de montagne, une paire de jumelles légère transforme l'observation. Pas besoin de matériel coûteux : un modèle compact x10 suffit largement.",
    verdict:
      "Compactes, abordables et faciles à régler, les Tasco Essential x10 sont parfaites pour un voyage d'aventure.",
    produits: [
      {
        id: "tasco-essential-x10",
        nom: "Jumelles Tasco Essential x10",
        reference: "Jumelles de randonnée Tasco Essential, grossissement x10",
        pourQui: "L'observation en voyage",
        description:
          "Jumelles de randonnée compactes, grossissement x10 avec réglage : parfaites pour observer la faune (aigles, bouquetins) et les paysages.",
        points_forts: ["Compactes et légères", "Grossissement x10", "Prix abordable"],
        points_faibles: ["Pas pour l'observation très longue distance"],
        prix: "~44,99 €",
        plateforme: "Decathlon",
        affiliateUrl: "https://click.linksynergy.com/link?id=s%2ajrViienhs&offerid=2079203.448062013193752073931938&type=2&murl=https%3a%2f%2fwww.decathlon.fr%2fp%2fjumelles-randonnee-avec-reglage-tasco-essential-adulte-grossissement-x10%2fX8653015%2fm8653015",
        image: "",
        recommande: true,
      },
    ],
  },

  // ---------------------------------------------------------------- DRONE
  {
    slug: "drone",
    type: "comparatif",
    titre: "Quel drone emporter au Kirghizstan ?",
    titreCourt: "Drone",
    icone: "drone",
    metaTitle: "Drone pour le Kirghizstan : lequel choisir ?",
    metaDescription:
      "Filmer les paysages du Kirghizstan en drone : deux options comparées, et ce qu'il faut savoir sur la réglementation locale.",
    intro:
      "Les paysages kirghizes se prêtent magnifiquement aux prises de vue aériennes. Mais attention : la réglementation drone est stricte (zones frontalières, aéroports, sites sensibles) — renseigne-toi avant chaque vol et ne survole jamais des personnes sans leur accord.",
    verdict:
      "Pour voyager léger et rester sous la barre réglementaire des 250 g, le DJI Mini 3 est le choix idéal. Le modèle supérieur vise ceux qui veulent le maximum de qualité d'image.",
    produits: [
      {
        id: "dji-lito-1",
        nom: "DJI Lito 1",
        reference: "DJI Lito 1",
        pourQui: "La qualité d'image maximale",
        description:
          "Drone performant pour des images aériennes de haute qualité.",
        points_forts: ["Qualité d'image", "Autonomie"],
        points_faibles: ["Prix élevé", "Plus lourd (réglementation plus stricte)"],
        prix: "~1 269 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B02uPwAsR",
        image: "",
      },
      {
        id: "dji-mini-3",
        nom: "DJI Mini 3",
        reference: "DJI Mini 3",
        pourQui: "Le voyage léger",
        description:
          "Drone compact de moins de 249 g, vidéo 4K : léger, discret et idéal en voyage. Reste sous le seuil réglementaire le plus souple.",
        points_forts: ["Moins de 249 g", "Vidéo 4K", "Compact et léger"],
        points_faibles: ["Moins robuste au vent que les gros modèles"],
        prix: "~439 €",
        plateforme: "Amazon",
        affiliateUrl: "https://link.amazon/B006QgXeY",
        image: "",
        recommande: true,
      },
    ],
  },

  // ---------------------------------------------------------------- ASSURANCE (FICHE)
  {
    slug: "assurance-voyage-kirghizstan",
    type: "fiche",
    titre: "Quelle assurance voyage pour le Kirghizstan ?",
    titreCourt: "Assurance voyage",
    icone: "assurance",
    metaTitle: "Assurance voyage Kirghizstan : altitude et rapatriement",
    metaDescription:
      "Au Kirghizstan, une assurance couvrant la haute altitude et le rapatriement est indispensable. Ce qu'elle doit couvrir et notre recommandation.",
    intro:
      "Beaucoup d'étapes se font entre 2 500 et 3 500 m, loin de tout. Une évacuation depuis une zone isolée coûte une fortune sans couverture adaptée : l'assurance n'est pas une option, c'est une nécessité. Vérifie qu'elle couvre explicitement la haute altitude, le rapatriement et les activités en 4x4.",
    verdict:
      "La formule Cap Aventure de Chapka est pensée pour ce type de voyage : altitude, rapatriement et activités sportives inclus.",
    produits: [
      {
        id: "chapka-cap-aventure",
        nom: "Chapka — Cap Aventure",
        reference: "Chapka Cap Aventure",
        pourQui: "Le voyage d'aventure en altitude",
        description:
          "Assurance voyage couvrant la haute altitude, le rapatriement et les activités en 4x4 : la couverture adaptée au terrain kirghize.",
        points_forts: ["Couvre la haute altitude", "Rapatriement", "Activités sportives incluses"],
        points_faibles: ["À souscrire avant le départ"],
        prix: "Selon durée et profil",
        plateforme: "Chapka",
        affiliateUrl: "",
        image: "",
        recommande: true,
      },
    ],
  },
];
