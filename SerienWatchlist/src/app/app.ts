import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { routes } from './app.routes';
import { Startseite } from './startseite/startseite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
