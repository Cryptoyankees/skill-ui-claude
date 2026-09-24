/*
 * Joltoo Aventures — grille tarifaire interne (source unique).
 * Ne pas modifier les valeurs directement ici en clair : décoder la
 * chaîne ci-dessous, éditer le JSON, ré-encoder en base64, remplacer.
 * python3 -c "import json,base64;print(json.loads(base64.b64decode('...')))"
 * python3 -c "import json,base64;print(base64.b64encode(json.dumps({...},separators=(',',':')).encode()).decode())"
 */
const _pd = JSON.parse(atob('eyJzIjp7IjciOnsiMiI6MTEwMCwiMyI6ODUwLCI0Ijo3NTB9LCI4Ijp7IjIiOjEyNTAsIjMiOjk1MCwiNCI6ODUwfSwiOSI6eyIyIjoxNDAwLCIzIjoxMDUwLCI0Ijo5NTB9LCIxMCI6eyIyIjoxNTUwLCIzIjoxMTUwLCI0IjoxMDUwfX0sImYiOjE1MH0='));
const SEJOUR_PRICING = _pd.s;
const RESERVATION_FEE_PER_PERSON = _pd.f;

/** "À partir de" reference price shown on circuit pages: the 4-person rate. */
function sejourFromPrice(duration) {
  return SEJOUR_PRICING[duration] ? SEJOUR_PRICING[duration][4] : null;
}
