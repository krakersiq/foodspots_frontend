import { Component, inject, OnInit } from '@angular/core';
import { Foodspot } from '../shared/foodspot';
import { Backend } from '../shared/backend';
import { RouterLink, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-uebersicht',
  standalone: true,
  imports: [RouterLink],
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

  ngOnInit(): void {
    this.bs
      .getAll()
      .then((response) => (this.foodspots = response))
      .then((foodspots) =>
        console.log('Diese Foodspots befinden sich in der Tabelle: ', foodspots)
      );
  }
  
  berechneDurchschnitt(foodspot: Foodspot): number {
    const geschmack = Number (foodspot.bewertung_geschmack) || 0;
    const preis = Number (foodspot.bewertung_preis) || 0;
    const ambiente = Number (foodspot.bewertung_ambiente) || 0;

    const durchschnitt = (geschmack + preis + ambiente) / 3;
    return Math.round(durchschnitt * 10) / 10;
  }

  onClickBearbeiten(foodspot: Foodspot) {
    this.router.navigate(['/bearbeiten', foodspot._id]);
  }

  onClickDelete(foodspot: Foodspot) {
    this.bs.getOne(String(foodspot._id))
    .then(
      response => {
        this.foodspot = response;
        this.showDeleteModal = true;
      }
    )
  }

  cancelDelete() {
    this.showDeleteModal = false;
  }

  deleteFoodspot() {
    const id = this.foodspot._id;
    console.log('Lösche Foodspot mit ID: ', id);
    this.bs.deleteOne(String(id)).then(() => {
      console.log('Foodspot wurde gelöscht');
      this.bs.getAll().then((response) => (this.foodspots = response));
      this.showDeleteModal = false;
    });
  }
}