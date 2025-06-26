import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { routes } from './app.routes';
import { Startseite } from './startseite/startseite';
import { Uebersicht } from './uebersicht/uebersicht';
import { Formular } from './formular/formular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'Die besten Foodspots der Welt';
}
