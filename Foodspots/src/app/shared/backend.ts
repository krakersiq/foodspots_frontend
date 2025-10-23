import { Injectable } from '@angular/core';
import { Foodspot } from './foodspot';

@Injectable({
  providedIn: 'root',
})

export class Backend {
  apiURL = 'http://localhost:3000/api';

  constructor() {}

  async getAll(): Promise<Foodspot[]> { //lädt alle Foodspots vom Backend
    let response = await fetch(this.apiURL + '/foodspots'); //GET-Anfrage an das Backend
    let foodspots = await response.json(); //Antwort aus backend wird von json in js umgewandelt - json ist text und wir brauchen js Objekte und Arrays
    console.log('Alle Foodspots wurden erfolgreich aus dem Backend geladen: (getAll) : ', foodspots);
    return foodspots; //gibt Foodspots als Arrays zurück
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

  async deleteOne(id: string): Promise<{ message: string }> { // Löscht einen Foodspot anhand der ID
    let response = await fetch(this.apiURL + '/foodspots/' + id, {  //delete Anfrage an das Backend
      method: 'DELETE',
    });
    let message = await response.json(); //Antwort aus backend wird von json in js umgewandelt
    console.log('Antwort vom Backend (deleteOne): ', message);
    return message; // Rückgabe Message vom Backend
  }
}
