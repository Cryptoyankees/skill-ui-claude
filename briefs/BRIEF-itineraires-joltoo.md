# Brief — Pages itinéraires (Joltoo Aventures)

> Objectif unique : construire les 4 pages par durée à partir du contenu déjà fourni. Le site et le design system existent déjà — ne rien recommencer.

---

## 0. Le contenu est déjà fourni — NE PAS le réécrire

Le fichier `src/data/itineraries.ts` existe déjà et contient les 4 circuits (7, 8, 9, 10 jours) entièrement rédigés. **Utilise-le tel quel comme source de contenu.** Ne réécris pas les textes, ne réinvente pas les journées.

Forme des données (déjà en place) :
```ts
interface ItineraryDay {
  day: number;          // 1, 2, 3…
  title: string;        // le trajet ("Karakol → Altyn-Arashan → Karakol")
  description: string;  // texte rédigé de l'étape (à afficher en prose)
  activities: string[]; // puces courtes optionnelles
  overnight: string;    // "Karakol" | "Yourte à Song-Köl" | "—" (dernier jour)
  icon: "mountain" | "lake" | "jeep" | "hike" | "yurt" | "culture" | "springs";
  photo?: string;       // emplacement photo optionnel (souvent vide pour l'instant)
}
interface Itinerary {
  slug: string;         // "7-jours"
  duration: number;     // 7
  name: string;         // "L'essentiel"
  summary: string;      // intro courte
  fromPricePer4: number;// 750 (prix opérateur "à partir de", tarif 4 pers)
  days: ItineraryDay[];
}
```
Helper dispo : `getItinerary(slug)`.

---

## 1. Ce qu'il faut construire

1. Un **composant Timeline réutilisable** (le design de la frise jour par jour).
2. **4 pages** générées depuis les données : `/circuits/7-jours`, `/circuits/8-jours`, `/circuits/9-jours`, `/circuits/10-jours`.
   - En Astro : une route dynamique `src/pages/circuits/[slug].astro` avec `getStaticPaths()` qui mappe sur `itineraries`.
3. Brancher ces pages à la nav et aux cartes circuits de la landing (chaque carte → sa page durée).

---

## 2. Design de la Timeline (le cœur)

- **Frise verticale** : chaque jour = une étape reliée à la suivante.
- **AUCUN emoji.** À la place, un **connecteur graphique soigné** : trait vertical continu (couleur `--line` ou `--tan` atténué) avec un **nœud** à chaque étape (petit cercle plein `--madder`, ou numéro de jour dedans).
- **Numéro de jour** en gros, police Oswald (ex. « JOUR 03 » ou « 03 » en `--tan`).
- **Titre de l'étape** (le `title`, le trajet) en Oswald, sous ou à côté du numéro.
- **Description** (le `description`) en Inter, largeur de lecture confortable.
- **Activités** (`activities`) : petites puces discrètes sous la description (optionnel, style léger).
- **Hébergement** (`overnight`) : mention distincte en bas de l'étape, style « Nuit à … » (icône lit/yourte fine facultative). Si `overnight === "—"`, afficher « Fin du circuit ».
- **Icône SVG fine** par étape, mappée sur le champ `icon` (mountain/lake/jeep/hike/yurt/culture/springs) — trait fin, dans les tons `--tan`/`--madder`. Crée un petit set d'icônes SVG maison cohérentes.
- **Emplacements photo** entre les étapes : si `day.photo` est renseigné, l'afficher pleine largeur ; sinon, prévoir un emplacement propre (ou rien, pas de placeholder cassé). On ajoutera des photos par lieu plus tard.
- **Respiration verticale généreuse**, alternance gauche/droite possible sur desktop (mais rester lisible et 100 % responsive : sur mobile, tout en colonne simple).
- Le motif topographique du design system peut servir de fond très léger.

---

## 3. Structure de chaque page durée

1. **Hero** : grande photo (voir mapping ci-dessous), titre « Kirghizstan en 7 jours — L'essentiel » (nom depuis `name`), sous-titre = `summary`, badge durée. CTA « Réserver ce circuit » → `/reserver` (pré-sélectionne le bon circuit via le slug).
2. **Ligne d'infos clés** : durée, « à partir de {fromPricePer4} €/pers » (préciser « base 4 personnes, payable sur place »), saison mai–septembre.
3. **Timeline jour par jour** (le composant ci-dessus, alimenté par `getItinerary(slug).days`).
4. **Bloc inclus / non inclus** :
   - Inclus : 4x4 privé + chauffeur + carburant + hébergement (guesthouses/yurtes) + repas pendant le circuit.
   - Non inclus (options) : vols internationaux, hôtel à Bichkek, transferts aéroport, guide francophone, upgrade hôtel.
5. **Rappel options** : cheval à Song-Köl, journée pêche, guide francophone, transfert A/R + SIM.
6. **Note paiement (v1, sans frais)** : indiquer simplement « Le prix du séjour se règle sur place, en espèces, auprès de votre chauffeur. » NE PAS mentionner de frais de réservation tant que le paiement et la page devis ne sont pas en place.
7. **CTA final** → `/reserver`.
8. **Liens vers les autres durées** (« Aussi disponible en 8, 9, 10 jours ») pour le maillage interne.

---

## 4. Mapping photo hero (une par durée)

Utilise les photos déjà dans le projet :
- **7 jours** → IMG_2902 (canyon rouge de Skazka)
- **8 jours** → IMG_3056 (yourtes de Song-Köl)
- **9 jours** → IMG_2797 (vallée nomade)
- **10 jours** → IMG_2758 (vallée forestière + rivière) ou IMG_3033 (col 4x4)

Toutes optimisées (WebP/AVIF, tailles responsives, lazy-load).

---

## 5. SEO

- `title` / meta description par page (ex. « Kirghizstan en 7 jours en 4x4 — itinéraire jour par jour | Joltoo Aventures »).
- Cible : « itinéraire Kirghizstan 7 jours », « circuit Kirghizstan 10 jours », etc.
- Le texte des `description` (contenu unique et riche) sert le référencement — l'afficher en vrai texte, pas en image.
- Open Graph avec la photo hero de chaque page. Données structurées (TouristTrip) si possible.

---

## 6. Règles

- Contenu depuis `itineraries.ts` uniquement, jamais en dur dans le markup.
- Respecte le design system existant (palette --ink/--slate/--paper/--tan/--madder/--sand, Oswald + Inter, motif topo).
- Mobile-first, responsive strict.
- Ne touche pas au reste du site (landing, tunnel, footer…).

Commence par le composant Timeline (montre-moi le rendu sur le circuit 7 jours), puis décline les 4 pages une fois le design validé.
