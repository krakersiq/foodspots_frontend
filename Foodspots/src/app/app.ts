import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { Startseite } from './startseite/startseite';
import { Uebersicht } from './uebersicht/uebersicht';
import { Formular } from './formular/formular';
import { Registrierung } from './registrierung/registrierung';
import { Bearbeiten } from './bearbeiten/bearbeiten';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Startseite, Uebersicht, Formular, Bearbeiten ], /* , Registrierung, Login */
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'Die besten Foodspots der Welt';
}
