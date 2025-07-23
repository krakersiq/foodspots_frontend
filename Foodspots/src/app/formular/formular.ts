import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foodspot } from '../shared/foodspot';
import { Backend } from '../shared/backend';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formular.html',
  styleUrl: './formular.css',
})
export class Formular {
  foodspot: Foodspot = {
    name: '',
    stadt: '',
    kueche: '',
    bewertung_geschmack: undefined,
    bewertung_preis: undefined,
    bewertung_ambiente: undefined,
    kommentar: '',
  };

  constructor(private router: Router, private backend: Backend) {}

  formData = {
    name: '',
    kueche: '',
    stadt: '',
    bewertung_geschmack: undefined,
    bewertung_preis: undefined,
    bewertung_ambiente: undefined,
    kommentar: '',
  };

  onSubmit() {
    this.backend.create(this.foodspot).then(() => {
      console.log('Neuer Foodspot wurde hinzugefügt', this.formData);
      this.router.navigate(['/uebersicht']);
    });
  }
}
