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
  showDeleteModal: boolean = false;

  ngOnInit(): void {
    this.bs
      .getAll()
      .then((response) => (this.foodspots = response))
      .then((foodspots) =>
        console.log(' foodspots in TableComponent : ', foodspots)
      );
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
