export interface Foodspot {
  _id?: string;
  name: string;
  stadt: string;
  kueche: string;
  bewertung_geschmack: number | undefined;
  bewertung_preis: number | undefined;
  bewertung_ambiente: number | undefined; //number soll erst im Formular definiert werden, deswegen undefined
  kommentar: string;
}
