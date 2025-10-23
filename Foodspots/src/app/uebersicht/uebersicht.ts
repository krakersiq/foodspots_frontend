import { Component, inject, OnInit } from '@angular/core';
import { Foodspot } from '../shared/foodspot'; //Datenstruktur von Foodspots
import { Backend } from '../shared/backend'; //BackendService zum Daten einholen
import { RouterLink, Router, RouterModule } from '@angular/router'; //navigieren der Seiten

@Component({
  selector: 'app-uebersicht',
  standalone: true,
  imports: [RouterLink], //RouterLink wird importiert, um die Navigation zu ermöglichen
  templateUrl: './uebersicht.html',
  styleUrls: ['./uebersicht.css'],
})

export class Uebersicht implements OnInit {

  private bs = inject(Backend);
  foodspots: Foodspot[] = [];
  foodspot!: Foodspot;
  showDeleteModal: boolean = false;
  showEditModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void { //wird immer geladen wenn Seuite geöffnet wird
    this.bs
      .getAll()
      .then((response) => (this.foodspots = response))
      .then((foodspots) =>
        console.log('Diese Foodspots befinden sich in der Tabelle: ', foodspots)
      );
  }
  
  berechneDurchschnitt(foodspot: Foodspot): number { //const - constante fest gebundene Variable
    const geschmack = Number (foodspot.bewertung_geschmack) || 0;
    const preis = Number (foodspot.bewertung_preis) || 0;
    const ambiente = Number (foodspot.bewertung_ambiente) || 0;

    const durchschnitt = (geschmack + preis + ambiente) / 3; //addiere alle Bewertungen und teile diese durch 3
    return Math.round(durchschnitt * 10) / 10; //"gib zurück", auf eine Nachkommastellen aufgerundet
  }

  onClickBearbeiten(foodspot: Foodspot) {
    this.router.navigate(['/bearbeiten', foodspot._id]); // wenn bearbeiten geklickt wird dann wird man zum Bearbeiten Formular navigiert
  }

  onClickDelete(foodspot: Foodspot) {
    this.bs.getOne(String(foodspot._id)) //nimm den Foodspot, der gelöscht werden soll
    .then(
      response => {
        this.foodspot = response; //Foodspot wird geladen
        this.showDeleteModal = true; //Modal wird angezeigt
      }
    )
  }

  cancelDelete() {
    this.showDeleteModal = false; //modal wird geschlossen
  }

  deleteFoodspot() {
    const id = this.foodspot._id; //Id des zu löschenden Foodspots wird entnommen
    console.log('Lösche Foodspot mit ID: ', id); //Foodspot wird in Konsole angezeigt, der gelöscht werden soll (onclickDelete)
    this.bs.deleteOne(String(id)).then(() => {
      console.log('Foodspot wurde gelöscht'); //Konsolenausgabe, wenn Foodspot gelöscht wurde
      this.bs.getAll().then((response) => (this.foodspots = response)); //lade die aktualisierte Liste der Foodspots neu
      this.showDeleteModal = false; //modal schließen
    });
  }
}