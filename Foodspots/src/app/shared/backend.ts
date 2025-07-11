import { Injectable } from '@angular/core';
import { Foodspot } from './foodspot';

@Injectable({
  providedIn: 'root',
})
export class Backend {
  apiURL = 'http://localhost:3000/api';

  constructor() {}

  async getAll(): Promise<Foodspot[]> {
    let response = await fetch(this.apiURL + '/foodspots');
    let foodspots = await response.json();
    console.log('foodspots in service (getAll) : ', foodspots);
    return foodspots;
  }

  async create(foodspot: Foodspot): Promise<Foodspot> {
    const response = await fetch(this.apiURL + '/foodspots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodspot)
    });
    const newFoodspot = await response.json();
    console.log('Neuer Foodspot in service (create): ', newFoodspot);
    return newFoodspot;
  }
}
