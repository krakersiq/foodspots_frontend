import { Component, inject, OnInit } from '@angular/core';
import { Foodspot } from '../shared/foodspot';
import { Backend } from '../shared/backend';

@Component({
  selector: 'app-uebersicht',
  imports: [],
  templateUrl: './uebersicht.html',
  styleUrl: './uebersicht.css',
})
export class Uebersicht implements OnInit {
  private bs = inject(Backend);
  foodspots: Foodspot[] = [];
  foodspot!: Foodspot;

  ngOnInit(): void {
    this.bs
      .getAll()
      .then((response) => (this.foodspots = response))
      .then((foodspots) =>
        console.log(' foodspots in TableComponent : ', foodspots)
      );
  }

  onClick(foodspot: Foodspot) {
    console.log('Foodspot wurde angeklickt: ', foodspot);
  }

  deleteFoodspot(foodspot: Foodspot) {
    const id = foodspot._id;
    this.bs.deleteOne(String(id)).then(() => {
      console.log('Foodspot wurde gelöscht');
      this.bs.getAll().then((response) => (this.foodspots = response));
    });
  }
}
