# Brief de construction — Site « Joltoo Aventures »

> À coller dans Claude Code. Utilise les skills installées (design / frontend / web) pour la qualité visuelle et la structure. Ce document est la source de vérité : marque, design, pages, logique de réservation, pricing, SEO.

---

## 1. Contexte & objectif

**Joltoo Aventures** est un intermédiaire francophone qui connecte des voyageurs français avec un opérateur local kirghize (guide + flotte de 4x4) pour des circuits aventure au Kirghizstan.

**Modèle** : apporteur d'affaires (micro-entreprise BNC). Le site NE vend PAS le voyage et N'ENCAISSE PAS le prix du séjour.

- **Le prix du guide est le prix final** que le client lui paie **en espèces sur place** (la marge du guide est déjà dedans, c'est son prix plancher). **Aucun pré-paiement du voyage.**
- **Le seul revenu du fondateur = des frais de réservation & d'assistance francophone**, payés en ligne pour confirmer la demande. C'est la rémunération de SON service (site, réservation en français, coordination, assistance avant/pendant).
- Ces frais seront fixes et par personne, payés en ligne. **IMPORTANT v1 : ne RIEN afficher sur ces frais pour l'instant** (ni montant, ni mention) — tant que le prestataire de paiement et la page de génération de devis ne sont pas en place. Le montant et le mécanisme seront ajoutés en v2.
- Le prix du séjour affiché sur le site = **le prix du guide** (pas de marge cachée ajoutée dedans). Les frais de réservation sont affichés **à part**, en toute transparence.

**Objectif du site v1** :
1. Convertir le visiteur en **demande de réservation** (formulaire multi-étapes).
2. Ranker en SEO sur les requêtes « voyage Kirghizstan », « Kirghizstan 4x4 », etc.
3. Générer des revenus d'**affiliation** (assurance voyage + matériel — revenu passif secondaire, pas un pilier).

**Hors périmètre v1** (à prévoir plus tard, ne pas construire maintenant) : encaissement en ligne des frais via Stripe (nécessite CGV qualifiant le paiement comme « frais de réservation/assistance », PAS un acompte sur le voyage → à cadrer juridiquement avant activation), espace client, back-office. En v1, le formulaire envoie une demande par e-mail ; le paiement des frais peut être ajouté juste après.

---

## 2. Stack technique recommandée

- **Framework** : Astro (idéal SEO + perf + pages statiques + îlots interactifs) OU Next.js si préférence. Priorité au SEO et à la vitesse.
- **Styling** : Tailwind CSS avec design tokens ci-dessous.
- **Formulaire** : envoi via un service simple (Formspree, Resend, ou route API → e-mail). Pas de base lourde en v1.
- **Images** : composant image optimisé (formats AVIF/WebP, lazy-loading, tailles responsives). Les photos sont lourdes (iPhone) → pipeline de compression obligatoire.
- **Déploiement** : Vercel ou Netlify.
- **i18n** : FR uniquement en v1, mais structurer proprement pour ajouter EN plus tard.

---

## 3. Identité de marque

- **Nom** : Joltoo Aventures
- **Baseline** : « L'aventure kirghize en 4x4, pensée et réservée en français »
- **Ton** : authentique, incarné, aventurier mais rassurant. On tutoie ou vouvoie de façon cohérente (choisir le **vouvoiement** pour le côté premium/confiance). Pas corporate, pas « agence ». On parle en « on » (le fondateur a fait le voyage lui-même).
- **Angle différenciant** : expérience vécue réelle + prix justes + interface 100 % francophone (le chauffeur est anglophone, l'assistance avant/pendant est en français, à assumer avec transparence).

---

## 4. Design system

### Palette (ambiance brut / aventure : terre, montagne, feutre nomade)
```
--ink:     #14140f   /* fond sombre chaud (hero, footer) */
--slate:   #1e2a2c   /* ardoise crépuscule (blocs sombres, récap) */
--paper:   #f6f2e9   /* canvas clair chaud (corps de page) */
--card:    #fffdf8   /* cartes */
--stone:   #8a8577   /* texte secondaire */
--tan:     #b8824a   /* ocre steppe (accents, eyebrows) */
--sand:    #e8e0d0   /* texte sur fond sombre */
--madder:  #a8402c   /* rouge feutre shyrdak (CTA, accents forts) */
--line:    #e2daca   /* bordures claires */
```
Turquoise lac (#6f9b93) autorisé en accent ponctuel (rappel des lacs d'altitude).

### Typographie
- **Titres / labels** : `Oswald` (uppercase, condensé, feel expédition/signalétique).
- **Corps** : `Inter`.
- Eyebrows en Oswald uppercase, `letter-spacing` large (~0.3em), couleur `--tan`.

### Motif signature
Lignes **topographiques** (courbes de niveau SVG, opacité faible) + traitement « coordonnées / altitude » réelles (ex. `N 42°33′ · ALT. 3016 M — SONG-KÖL`) comme éléments structurants. Vrai au sujet, pas décoratif.

### Principes visuels
- **Photo-driven** : les vraies photos portent le site (voir §8). Grandes images plein cadre, peu de texte par-dessus.
- Beaucoup d'air, sombre + clair alternés, transitions douces (fade/translate au scroll).
- Mobile-first, responsive strict.
- Éviter le look « template » : compositions asymétriques, hero fort, typographie affirmée.

---

## 4bis. Références visuelles (patterns UX à reprendre)

**Référence principale : atalante.fr** — s'inspirer de leurs *patterns UX* (qui rassurent et convertissent sur le voyage d'aventure), MAIS sur une structure mono-destination légère, et avec NOTRE direction artistique (palette terre/ardoise/feutre + vraies photos). Ne pas cloner leur charte, leurs couleurs ni leurs visuels : reprendre les schémas d'interface, pas l'habillage.

Patterns à reprendre d'Atalante :
- **Hero fort** plein écran (vidéo courte OU grande photo) avec accroche émotionnelle + recherche/CTA.
- **Cartes de circuits** : photo, durée, **niveau de difficulté (échelle 1–5)**, badges type « yourte incluse », « 4x4 privé », « nuit chez l'habitant ». → chez nous, SANS prix affiché sur la carte (voir §7).
- Section **« choisissez votre terrain de jeu »** → adapter en **« choisissez votre expérience »** (steppe, montagne, canyon rouge, lac d'altitude, forêt) avec vignettes photo.
- **Bandeau d'avis clients** (les nôtres + avis TripAdvisor du guide), format témoignage avec nom, date, lieu.
- Blocs **« pourquoi nous »** / réassurance (incarnation : voyage vécu ; transparence langue ; prix justes ; assistance FR).
- **« Demander un devis »** très visible dans la nav et en fin de page → pointe vers /reserver.
- Footer riche : colonnes (Voyager / Le carnet / La marque / Suivre), newsletter, mentions légales.

Différence clé à conserver : Atalante affiche « à partir de X€/pers » partout (ils sont TO assumé). **Nous, on n'affiche pas les prix sur les cartes** (apporteur d'affaires, prix/pers trompeur). Garder cette ligne.

Ce qu'on NE reproduit PAS d'Atalante (hors périmètre, inutile pour mono-destination) : moteur de recherche multi-critères à facettes, base de centaines de voyages, espace client, système de devis/paiement en ligne, gestion des départs datés.

---

## 5. Arborescence des pages

1. **/** — Landing (page principale de conversion), avec le résumé des 4 circuits.
2. **/circuits/7-jours**, **/circuits/8-jours**, **/circuits/9-jours**, **/circuits/10-jours** — une page dédiée par durée, avec l'itinéraire jour par jour (voir §6.5 + contenus §6.6).
3. **/reserver** — Tunnel de demande de réservation (multi-étapes)
4. **/carnet** — Blog SEO (index + articles)
5. **/materiel** — Page matériel & affiliation
6. **/mentions-legales**, **/cgv** — Légal (apporteur d'affaires)

---

## 6. Spécification page par page

### 6.1 Landing (/)
Sections dans l'ordre :
1. **Nav** fixe transparente → devient opaque au scroll. Liens : Circuits, Options, Carnet, Matériel, + bouton CTA « Réserver ».
2. **Hero** plein écran : photo de la piste de montagne sinueuse (IMG_3033) en fond, overlay sombre dégradé, titre fort (« Le pays des nomades »), sous-titre, 2 CTA (« Voir les circuits » / « Préparer mon voyage »), méta coordonnées/altitude/saison.
2bis. **Bloc manifeste / intro** (juste sous le hero, fond clair ou sombre, texte centré, respiration) — texte à intégrer tel quel :
   > Nichée au cœur de l'Asie centrale, le Kirghizstan reste l'un des derniers grands terrains d'aventure encore méconnus. Ici, les sommets du Tian Shan veillent sur des pâturages d'altitude à perte de vue et des lacs d'un bleu irréel. Le pays vit toujours au rythme de ses éleveurs nomades : on dort en yourte, on partage le thé et le quotidien des familles, on croise les troupeaux de chevaux en liberté sur les alpages. Loin des circuits balisés, cette destination confidentielle se découvre en 4x4, au plus près des grands espaces et des rencontres — une aventure brute et authentique.

   Traitement : titre court en Oswald au-dessus (ex. « Un autre monde »), paragraphe en Inter, largeur de lecture confinée (~60ch), éventuellement une photo pleine largeur (IMG_3092 chevaux, ou IMG_2758 vallée) juste après.
3. **Bande preuve** (fond `--madder`) : 10 jours de piste · 4x4 chauffeur privé · 100 % réservé en français · nuit en yourte.
4. **Circuits** : 4 cartes (7/8/9/10 j) avec photo, badge durée, titre, description courte. **NE PAS afficher les prix sur ces cartes** (trompeur car par pers / à partir de). CTA vers /reserver.
5. **Options** : 3 cartes avec photo — Cheval à Song-Köl, Journée pêche, Guide francophone.
6. **Section « pourquoi nous »** : incarnation (voyage vécu), transparence langue, prix justes, assistance FR.
7. **Galerie photo** : mosaïque des plus belles images (voir §8).
8. **Carnet** (aperçu blog) : 3 articles mis en avant, dont la checklist matériel.
9. **Matériel / affiliation** : bloc renvoyant vers /materiel.
10. **CTA final** : bande sombre « Prêt pour la piste ? » → /reserver.
11. **Footer** : marque, colonnes (Voyager / Carnet / Suivre), mention « Apporteur d'affaires », liens légaux.

### 6.2 Tunnel de réservation (/reserver)
Formulaire **multi-étapes, 4 étapes, SANS paiement**. Collecte : contact + dates + préférences. (Vol/passeport PAS demandés en v1.)

- **Hero court** avec photo (IMG_3033) + titre « Composez votre expédition » + mention « Sans engagement, aucun paiement ».
- **Barre de progression** 4 étapes : Circuit → Options → Dates → Contact.
- **Récap latéral sticky** (fond `--slate`) qui se met à jour en direct : circuit, voyageurs, options, date. Affiche une **estimation** clairement labellisée « prix/pers · à partir de · devis exact sous 24 h ».

**Étape 1 — Circuit** : 4 cartes avec photo (voir mapping §8), badge durée, titre, description. Sélection unique + carte « Sur mesure ». Compteur de voyageurs (1–12, défaut 2).

**Étape 2 — Options** (multi-sélection) : Cheval Song-Köl (+120 €/pers), Journée pêche (+90 €/pers), Guide francophone (sur devis). Vignette photo par option.

**Étape 3 — Dates** : **vrai calendrier interactif**, sélection de la date de départ, navigation mois par mois, **restreint à mai → septembre 2026** (hors saison grisé/désactivé). Case à cocher « dates flexibles ± quelques jours ».

**Étape 4 — Contact** : prénom, nom, e-mail, tél/WhatsApp, pays (défaut France), message facultatif.

**Écran de confirmation** : coche verte, message rassurant (« aucun paiement, on revient sous 24 h »), récapitulatif complet. Le formulaire envoie un e-mail au fondateur + accusé au client.

### 6.3 Carnet / blog (/carnet)
Index + articles (voir plan SEO §9). Chaque article : maillage interne vers /reserver + liens affiliés contextuels. Contenu original + vraies photos (Google favorise l'original).

### 6.4 Matériel (/materiel)
Grille de catégories (chaussures, sac, doudoune, powerbank, gourde filtrante, **assurance voyage**). Chaque item = lien affilié. Mention transparente : « certains liens sont affiliés, sans surcoût pour vous ». Assurance voyage = item prioritaire (meilleure commission). Revenu passif secondaire (voir §10).

### 6.5 Pages par durée (/circuits/7-jours … /circuits/10-jours)
Une page dédiée par durée (7, 8, 9, 10 jours), en plus du résumé présent sur la landing. Objectif : détailler l'itinéraire jour par jour + capter le SEO longue traîne (« itinéraire Kirghizstan 7 jours », etc.).

Structure de chaque page :
1. **Hero** : grande photo (voir mapping §8, une par durée), titre (« Kirghizstan en 7 jours — L'essentiel »), sous-titre court, badge durée, CTA « Réserver ce circuit » → /reserver (pré-sélectionne le bon circuit).
2. **Intro courte** : 2–3 phrases sur l'esprit du circuit (dans la voix de la marque).
3. **Timeline jour par jour** — le cœur de la page. Contenu exact dans §6.6.
   - Design : une **frise verticale** (timeline) où chaque jour est une étape. Numéro de jour en gros (Oswald), titre de l'étape (le trajet), puis les activités en liste courte, et la mention hébergement (« Nuit à … »).
   - **Sans aucun emoji.** À la place, un **traitement graphique soigné entre chaque étape** : trait de liaison vertical avec un point/nœud à chaque jour, alternance possible gauche/droite, icônes en trait fin discrètes (montagne, yourte, marche, 4x4, lac) dessinées en SVG maison — dans les tons du design system (`--tan`, `--madder`). Le motif topographique peut servir de fond léger.
   - Chaque étape = carte ou bloc aéré, séparé du suivant par le connecteur visuel. Respiration verticale généreuse.
   - Prévoir des **emplacements photo entre les étapes** (placeholders propres) : on ajoutera plus de photos par lieu plus tard.
4. **Bloc « inclus / non inclus »** : inclus = 4x4 privé + chauffeur + carburant + hébergement (guesthouses/yourtes) + repas pendant le circuit. Non inclus = vols internationaux, hôtel à Bichkek, transferts aéroport, guide francophone, upgrade hôtel (proposés en options).
5. **Options** (rappel) : cheval Song-Köl, journée pêche, guide francophone, transfert A/R + SIM.
6. **CTA final** → /reserver.

Note : les pages 8/9/10 j partagent la même structure, seul le contenu de la timeline change. Construire un **composant Timeline réutilisable** alimenté par un fichier de données (`itineraries.ts` / un fichier par durée), pour que le contenu soit éditable sans toucher au design.

### 6.6 Contenu des itinéraires (transmis par l'opérateur, nettoyé — sans emoji)

Reformuler légèrement dans la voix de la marque si besoin, mais garder la structure et les lieux. Hébergement indiqué en fin de chaque jour.

**7 jours — « L'essentiel »**
- **Jour 1 — Bichkek → Tour de Burana → Chon-Kemin** : tour de Burana, vallée de Chon-Kemin. Nuit à Chon-Kemin.
- **Jour 2 — Chon-Kemin → Issyk-Kul → Karakol** : route panoramique le long du lac Issyk-Kul. Nuit à Karakol.
- **Jour 3 — Karakol → Altyn-Arashan → Karakol** : excursion 4x4 vers Altyn-Arashan, marche dans la vallée de montagne, sources chaudes. Nuit à Karakol.
- **Jour 4 — Karakol → Jeti-Oguz → Kok-Jaiyk** : visite de Jeti-Oguz (les Sept Taureaux), exploration de la vallée de Kok-Jaiyk, randonnée. Nuit à Kok-Jaiyk.
- **Jour 5 — Kok-Jaiyk → Barskoon → Canyon de Skazka → Bokonbaevo** : cascades de Barskoon, canyon de Skazka, spectacle de chasse à l'aigle. Nuit à Bokonbaevo.
- **Jour 6 — Bokonbaevo → Kochkor → Song-Köl** : route vers le lac Song-Köl, balade à cheval en option. Nuit en yourte à Song-Köl.
- **Jour 7 — Song-Köl → Kochkor → Bichkek** : matinée à Song-Köl, retour à Bichkek. Fin du circuit.

**8 jours**
- **Jour 1 — Bichkek → Tour de Burana → Canyon de Konorchek → Chon-Kemin** : 2–3 h de randonnée à Konorchek. Nuit à Chon-Kemin.
- **Jour 2 — Chon-Kemin → Issyk-Kul → Karakol** : route panoramique le long d'Issyk-Kul. Nuit à Karakol.
- **Jour 3 — Karakol → Altyn-Arashan → Karakol** : excursion 4x4 en montagne, randonnée en option à Altyn-Arashan. Nuit à Karakol.
- **Jour 4 — Karakol → Jeti-Oguz → Kok-Jaiyk** : randonnée et paysages de montagne. Nuit à Kok-Jaiyk.
- **Jour 5 — Kok-Jaiyk → Barskoon → Canyon de Skazka → Bokonbaevo** : cascades de Barskoon, canyon de Skazka, spectacle d'aigle. Nuit à Bokonbaevo.
- **Jour 6 — Bokonbaevo → Kochkor → Song-Köl** : route vers Song-Köl, cheval en option. Nuit en yourte.
- **Jour 7 — Song-Köl, journée complète** : marche/randonnée ou cheval. Nuit en yourte.
- **Jour 8 — Song-Köl → Bichkek** : retour à Bichkek. Fin du circuit.

**9 jours**
- **Jour 1 — Bichkek → Tour de Burana → Canyon de Konorchek → Chon-Kemin** : randonnée à Konorchek (2–3 h). Nuit à Chon-Kemin.
- **Jour 2 — Chon-Kemin → Issyk-Kul → Karakol** : route panoramique le long d'Issyk-Kul. Nuit à Karakol.
- **Jour 3 — Karakol → Altyn-Arashan → Karakol** : excursion 4x4 vers Altyn-Arashan, randonnée en option. Nuit à Karakol.
- **Jour 4 — Karakol → Jeti-Oguz → Kok-Jaiyk** : randonnée et nature de montagne. Nuit à Kok-Jaiyk.
- **Jour 5 — Kok-Jaiyk → Barskoon → Canyon de Skazka → Bokonbaevo** : cascades de Barskoon, canyon de Skazka, spectacle d'aigle. Nuit à Bokonbaevo.
- **Jour 6 — Bokonbaevo → Song-Köl** : route panoramique vers Song-Köl, cheval en option. Nuit en yourte à Song-Köl.
- **Jour 7 — Song-Köl, journée complète** : journée entière au lac, randonnée et marche, cheval en option. 2ᵉ nuit en yourte à Song-Köl.
- **Jour 8 — Song-Köl → Naryn → Tash-Rabat** : route de montagne panoramique, visite du caravansérail de Tash-Rabat. Nuit près de Tash-Rabat.
- **Jour 9 — Tash-Rabat → Bichkek** : retour à Bichkek. Fin du circuit.

**10 jours — « Expédition »**
- **Jour 1 — Bichkek → Tour de Burana → Canyon de Konorchek → Chon-Kemin** : randonnée à Konorchek (2–3 h). Nuit à Chon-Kemin.
- **Jour 2 — Chon-Kemin → Issyk-Kul → Karakol** : route panoramique le long d'Issyk-Kul. Nuit à Karakol.
- **Jour 3 — Karakol → Altyn-Arashan** : excursion 4x4 en montagne, randonnée et exploration de la vallée, sources chaudes en option. Nuit à Altyn-Arashan.
- **Jour 4 — Altyn-Arashan → Karakol** : randonnée matinale à Altyn-Arashan, retour à Karakol. Nuit à Karakol.
- **Jour 5 — Karakol → Jeti-Oguz → Kok-Jaiyk** : randonnée à Jeti-Oguz et dans la vallée de Kok-Jaiyk. Nuit à Kok-Jaiyk.
- **Jour 6 — Kok-Jaiyk → Cascades de Barskoon → Canyon de Skazka → Bokonbaevo** : randonnée aux cascades de Barskoon, visite du canyon de Skazka, spectacle d'aigle. Nuit à Bokonbaevo.
- **Jour 7 — Bokonbaevo → Song-Köl** : route panoramique vers Song-Köl, cheval en option. Nuit en yourte.
- **Jour 8 — Song-Köl, journée complète** : randonnée et marche autour du lac, cheval en option. 2ᵉ nuit à Song-Köl.
- **Jour 9 — Song-Köl → Tash-Rabat** : route de montagne panoramique, visite du caravansérail de Tash-Rabat. Nuit près de Tash-Rabat.
- **Jour 10 — Tash-Rabat → Bichkek** : retour à Bichkek. Fin du circuit.

---

## 7. Frais de réservation (ce qui s'affiche et s'encaisse)

Le site N'AFFICHE PAS de marge cachée dans le prix du séjour. Deux montants distincts, clairement séparés :

- **Prix du séjour** = le prix de l'opérateur, **payable en espèces sur place**. Par personne, dégressif selon la taille du groupe (2/3/4). Affiché en « à partir de » (tarif 4 personnes) sur les pages, JAMAIS sur les cartes de la landing.
- **Frais de réservation & d'assistance** = le seul revenu du site (payés en ligne, v2). **NE PAS afficher en v1** : aucun montant ni mention de frais sur le site tant que le paiement et la page devis ne sont pas prêts.

Grille de prix opérateur (par personne, pour estimation dans le tunnel — stocker dans `pricing.ts`, NE PAS afficher sur les cartes) :

| Durée | 2 pers | 3 pers | 4 pers |
|------|--------|--------|--------|
| 7 j  | 1 100 € | 850 € | 750 € |
| 8 j  | 1 250 € | 950 € | 850 € |
| 9 j  | 1 400 € | 1 050 € | 950 € |
| 10 j | 1 550 € | 1 150 € | 1 050 € |

Inclus : 4x4 privé + chauffeur + carburant + hébergement guesthouses/yurtes + repas pendant le circuit. Non inclus (options) : vols, hôtel Bichkek, transferts aéroport, guide francophone, upgrade hôtel.
Recommandation opérateur : max 3–4 pers/jeep ; au-delà, plusieurs véhicules + un seul guide francophone pour le groupe.

En v2 (quand les frais seront affichés), prévoir près des frais le wording : « Frais de réservation et d'assistance francophone — le prix du séjour se règle sur place, en espèces, auprès de votre chauffeur. » En v1, afficher uniquement, sur les pages durée, que le prix du séjour se règle sur place en espèces (sans mentionner de frais de réservation).

---

## 8. Photos disponibles (10 fichiers iPhone, à intégrer)

Fichiers fournis (voir dossier uploads). Mapping recommandé :

| Fichier | Contenu | Usage |
|---------|---------|-------|
| IMG_3033 | Piste de montagne sinueuse (col) | **Hero landing + hero réservation** |
| IMG_3092 | Chevaux sauvages, collines dorées | Option cheval / galerie / section émotion |
| IMG_3056 | Yourtes Song-Köl + pic rocheux | Circuit 8 j (Grand tour) / galerie |
| IMG_3053 | Yourtes plaine verte + montagnes | Galerie / section yourte |
| IMG_2902 | Canyon rouge (Skazka) | Circuit 7 j (L'essentiel) |
| IMG_2797 | Vallée nomade, yourtes, pic | Circuit 9 j (Nomade) |
| IMG_2758 | Vallée forestière + rivière | Circuit 10 j (Expédition) / option pêche |
| IMG_2822 | Vallée verte forestière | Option pêche / galerie |
| IMG_2746 | UAZ 452 crème (le vrai 4x4) | **Section preuve / 4x4 authentique** |
| IMG_2712 | Cheval sellé + yourte + chien | Option cheval / ambiance nomade |

**Pipeline obligatoire** : corriger l'orientation EXIF, générer plusieurs tailles (thumb ~760px, hero ~1600px), compresser (WebP/AVIF, qualité ~72), lazy-load. Ne jamais servir les originaux (3–5 Mo chacun).

---

## 9. Plan de contenu SEO (à créer progressivement, 1–2/mois)

**Prioritaires (couvrent 80 % du trafic utile)** :
1. « Voyage au Kirghizstan : budget complet » (poste par poste)
2. « Quand partir au Kirghizstan ? Mois par mois »
3. « Checklist matériel Kirghizstan » (pilier affiliation)
4. « Kirghizstan en 4x4 : itinéraire de 10 jours » (transactionnel → /reserver)

**Ensuite** : sécurité, visa/vol/arrivée Bichkek, dormir en yourte, pages-lieux (Song-Köl, Issyk-Kul, Ala-Archa, Tash Rabat, canyon Skazka), « 7 vs 10 vs 14 jours », récit d'expérience.

Règles : 1 article = 1 intention de recherche, titre = requête exacte, maillage interne vers circuits, vraies photos, CTA de fin vers /reserver.

---

## 10. Affiliation

- Programmes prioritaires : **assurance voyage** (Heymondo / Chapka / SafetyWing — meilleure commission), puis matériel (Amazon Partenaires, Decathlon, une marque outdoor via Awin/Effiliation).
- Liens affiliés dans /materiel + contextuels dans les articles.
- Mention légale de transparence obligatoire.
- Ne pas surcharger de liens (préserver la confiance = préserver les réservations, qui valent plus qu'un clic).

---

## 11. Légal / conformité

- Positionnement **apporteur d'affaires** (le site ne vend pas le forfait → hors immatriculation Atout France). Le wording doit refléter ça : on met en relation, on ne vend pas le voyage. Mention « Apporteur d'affaires » en footer.
- **CGV** : formulaire = demande sans engagement ; conditions d'annulation ; le contrat de voyage est entre le client et l'opérateur local ; paiement du séjour sur place.
- **Transparence langue** : indiquer clairement « chauffeur anglophone, assistance francophone à distance ». Ne jamais promettre un guide francophone par défaut (c'est une option sur devis).
- Mentions légales, RGPD (formulaire = données perso : consentement, finalité, pas de partage).

---

## 12. Copy / wording (ton)

- Rassurer sur : l'authenticité (voyage vécu), la transparence (langue, paiement cash), le prix juste.
- Le récap tunnel doit répéter « demande, pas paiement » et « solde en espèces sur place ».
- Éviter le jargon agence. Phrases courtes. Vocabulaire d'aventure sobre (piste, col, alpage, yourte, steppe).

---

## 13. Definition of Done (v1)

- [ ] Landing responsive, photo-driven, design system respecté.
- [ ] **4 pages par durée** (/circuits/7-jours → 10-jours) avec timeline jour par jour, sans emoji, connecteurs graphiques soignés entre étapes, emplacements photo prévus. Composant Timeline réutilisable + contenu dans fichiers de données.
- [ ] Tunnel /reserver fonctionnel : 4 étapes, calendrier mai–sept, récap live, envoi e-mail, écran de confirmation.
- [ ] Prix jamais affichés sur les cartes de la landing ; prix du séjour en « à partir de » sur les pages durée ; AUCUN frais de réservation affiché en v1 (ni montant, ni mention).
- [ ] Pipeline images optimisé (aucune image > ~250 Ko servie).
- [ ] Structure blog + page matériel prêtes (contenu pouvant venir après).
- [ ] Fichier `pricing` centralisé et modifiable.
- [ ] Pages légales présentes.
- [ ] SEO de base : meta titles/descriptions, sitemap, données structurées (Trip/Product si pertinent), Open Graph avec les vraies photos.
- [ ] Performances : Lighthouse > 90 sur mobile.

---

## 14. Notes pour l'agent

- Commence par le **design system + composants de base** (nav, hero, carte, bouton, section), puis la **landing**, puis le **tunnel /reserver**, puis blog/matériel/légal.
- Réutilise l'esthétique déjà validée (voir palette + Oswald/Inter + motif topo).
- Nom confirmé : « Joltoo Aventures ». Domaine live : joltooaventures.com (principal), avec .fr/.store/.info redirigés dessus. Logo à venir : prévoir un simple wordmark texte en attendant, facile à remplacer.
- Garde tout **facilement éditable** (prix, textes, liens affiliés, photos dans des fichiers de contenu/config séparés).
