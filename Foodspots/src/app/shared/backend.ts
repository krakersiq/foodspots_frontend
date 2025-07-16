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
    console.log('Alle Foodspots wurden erfolgreich aus dem Backend geladen: (getAll) : ', foodspots);
    return foodspots;
  }

  async getOne(id: string): Promise<Foodspot> {
    let response = await fetch(this.apiURL + '/foodspots/' + id);
    let foodspot = await response.json();
    console.log('Einzelner Foodspot wurde erfolgreich aus dem Backend geladen (getOne) : ', foodspot);
    return foodspot;
  }

  async create(foodspot: Foodspot): Promise<Foodspot> {
    let response = await fetch(this.apiURL + '/foodspots', {
      method: 'POST',
      body: JSON.stringify(foodspot),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let newFoodspot = await response.json();
    console.log('Neuer Foodspot in service (create): ', newFoodspot);
    return newFoodspot;
  }

  async update(id: string, foodspot: Foodspot): Promise<Foodspot> {
    let response = await fetch(this.apiURL + '/foodspots/' + id, {
      method: 'PATCH',
      body: JSON.stringify(foodspot),
      headers: {
        'Content-Type': 'application/json',
      },      
    });
    let updatedFoodspot = await response.json();
    console.log('Aktualisierter Foodspot in service (update): ', updatedFoodspot);
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
