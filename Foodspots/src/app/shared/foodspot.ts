export interface Foodspot {
  _id?: String;
  name: String;
  stadt: String;
  kueche: String;
  bewertung_geschmack: Number | undefined;
  bewertung_preis: Number | undefined;
  bewertung_ambiente: Number | undefined;
  kommentar: String;
}
