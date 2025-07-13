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

  async getOne(id: string): Promise<Foodspot> {
    let response = await fetch(this.apiURL + '/foodspots/' + id);
    let foodspot = await response.json();
    console.log('foodspot in service (getOne) : ', foodspot);
    return foodspot;
  }

  async create(foodspot: Foodspot): Promise<Foodspot> {
    const response = await fetch(this.apiURL + '/foodspots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodspot),
    });
    const newFoodspot = await response.json();
    console.log('Neuer Foodspot in service (create): ', newFoodspot);
    return newFoodspot;
  }

  async update(id: string, foodspot: Foodspot): Promise<Foodspot> {
    const response = await fetch(this.apiURL + '/foodspots/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodspot),
    });
    const updatedFoodspot = await response.json();
    console.log(
      'Aktualisierter Foodspot in service (update): ',
      updatedFoodspot
    );
    return updatedFoodspot;
  }

  async deleteOne(id: string): Promise<{ message: string }> {
    let response = await fetch(this.apiURL + '/foodspots/' + id, {
      method: 'DELETE',
    });
    let message = await response.json();
    console.log('Antwort vom Backend (deleteOne): ', message);
    return message;
  }
}
