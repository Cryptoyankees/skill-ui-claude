/*
 * Joltoo Aventures — pricing data (single source of truth).
 * Edit values here only; nothing else in the site should hardcode a price.
 *
 * SEJOUR_PRICING: the operator's real price for the stay itself, per person,
 * by group size. This is what the traveler pays IN CASH, ON SITE, directly
 * to the driver — Joltoo Aventures never touches this money and adds no margin.
 *
 * v1: no online fee of any kind is charged or displayed. The form only
 * sends a booking request; Joltoo Aventures' own fee model comes in v2,
 * once a payment provider and quote flow are in place.
 */
const SEJOUR_PRICING = {
  7:  { 2: 1100, 3: 850,  4: 750  },
  8:  { 2: 1250, 3: 950,  4: 850  },
  9:  { 2: 1400, 3: 1050, 4: 950  },
  10: { 2: 1550, 3: 1150, 4: 1050 },
};

/** "À partir de" reference price shown on circuit pages: the 4-person rate. */
function sejourFromPrice(duration) {
  return SEJOUR_PRICING[duration] ? SEJOUR_PRICING[duration][4] : null;
}
