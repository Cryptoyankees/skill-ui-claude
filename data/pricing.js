/*
 * Joltoo Aventures — pricing data (single source of truth).
 * Edit values here only; nothing else in the site should hardcode a price.
 *
 * SEJOUR_PRICING: the operator's real price for the stay itself, per person,
 * by group size. This is what the traveler pays IN CASH, ON SITE, directly
 * to the driver — Joltoo Aventures never touches this money and adds no margin.
 *
 * RESERVATION_FEE_PER_PERSON: Joltoo Aventures' own apporteur d'affaires fee,
 * paid online (paiement.html) only once the client has accepted their
 * personalized devis. Entirely separate from the séjour price above.
 */
const SEJOUR_PRICING = {
  7:  { 2: 1100, 3: 850,  4: 750  },
  8:  { 2: 1250, 3: 950,  4: 850  },
  9:  { 2: 1400, 3: 1050, 4: 950  },
  10: { 2: 1550, 3: 1150, 4: 1050 },
};

const RESERVATION_FEE_PER_PERSON = 150;

/** "À partir de" reference price shown on circuit pages: the 4-person rate. */
function sejourFromPrice(duration) {
  return SEJOUR_PRICING[duration] ? SEJOUR_PRICING[duration][4] : null;
}
