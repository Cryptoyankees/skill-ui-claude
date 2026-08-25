/*
 * Terres Nomades — pricing data (single source of truth).
 * Edit values here only; nothing else in the site should hardcode a price.
 *
 * SEJOUR_PRICING: the operator's real price for the stay itself, per person,
 * by group size. This is what the traveler pays IN CASH, ON SITE, directly
 * to the driver — Terres Nomades never touches this money and adds no margin.
 *
 * BOOKING_FEE_PER_PERSON: Terres Nomades' only revenue. A flat booking &
 * French-speaking assistance fee, paid online, per person, unaffected by
 * trip duration, month, or group size (a group of 4 pays 4 x this amount,
 * automatically — never a percentage of the séjour price).
 */
const SEJOUR_PRICING = {
  7:  { 2: 1100, 3: 850,  4: 750  },
  8:  { 2: 1250, 3: 950,  4: 850  },
  9:  { 2: 1400, 3: 1050, 4: 950  },
  10: { 2: 1550, 3: 1150, 4: 1050 },
};

const BOOKING_FEE_PER_PERSON = 150;

/** "À partir de" reference price shown on circuit pages: the 4-person rate. */
function sejourFromPrice(duration) {
  return SEJOUR_PRICING[duration] ? SEJOUR_PRICING[duration][4] : null;
}
