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
}
