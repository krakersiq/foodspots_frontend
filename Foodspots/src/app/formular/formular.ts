import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formular',
  imports: [],
  templateUrl: './formular.html',
  styleUrl: './formular.css'
})

export class Formular {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/formular']);
  }

}

