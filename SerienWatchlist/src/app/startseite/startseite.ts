import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-startseite',
  imports: [RouterModule],
  templateUrl: './startseite.html',
  styleUrl: './startseite.css'
})
export class Startseite {
  protected title = 'SerienWatchlist';

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/uebersicht']);
  }
}
