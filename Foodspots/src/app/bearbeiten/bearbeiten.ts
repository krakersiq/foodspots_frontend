import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Foodspot } from '../shared/foodspot';
import { Backend } from '../shared/backend';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bearbeiten', //Name der Komponente
  standalone: true, //benutzt man damit man keine ngModules schreiben muss, damit ich 
  imports: [ReactiveFormsModule],
  templateUrl: './bearbeiten.html',
  styleUrl: './bearbeiten.css',
})

export class Bearbeiten implements OnInit {

  private bs = inject(Backend);
  private router = inject(Router);
  
  foodspot!: Foodspot;
  id: string | null = '';
  form = new FormGroup({
    name: new FormControl<string>(''),
    stadt: new FormControl<string>(''),
    kueche: new FormControl<string>(''),
    bewertung_geschmack: new FormControl<number | undefined>(undefined),
    bewertung_preis: new FormControl<number | undefined>(undefined),
    bewertung_ambiente: new FormControl<number | undefined>(undefined),
    kommentar: new FormControl<string>('')
  });

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void { // 
    this.id = this.route.snapshot.paramMap.get('id'); //Foodspot wird per ID geladen 
    console.log('ID:', this.id); // Konsolenausgabe zur Kontrolle
    this.bs
      .getOne(this.id!)
      .then( response => {
        this.foodspot = response;
        this.form.patchValue({
          name: this.foodspot?.name,
          stadt: this.foodspot?.stadt,
          kueche: this.foodspot?.kueche,
          bewertung_geschmack: this.foodspot?.bewertung_geschmack,
          bewertung_preis: this.foodspot?.bewertung_preis,
          bewertung_ambiente: this.foodspot?.bewertung_ambiente,
          kommentar: this.foodspot?.kommentar,
        })
        return this.foodspot;
      })
      .then((foodspot) => console.log('Foodspot wird aktuell bearbeitet:', foodspot)); //Konsolenausgabe, Foodspot wird gerade bearbeitet
  }

  // UPDATE, ausgewählter Foodspot wird nach klicken in Bearbeiten-Formular getan
  update(): void {
    const values = this.form.value; //aktuelle Werte des Foodspots werden entnommen
    this.foodspot.name = values.name!;
    this.foodspot.stadt = values.stadt!;
    this.foodspot.kueche = values.kueche!;
    this.foodspot.bewertung_geschmack = values.bewertung_geschmack!;
    this.foodspot.bewertung_preis = values.bewertung_preis!;
    this.foodspot.bewertung_ambiente = values.bewertung_ambiente!;
    this.foodspot.kommentar = values.kommentar!;

    this.bs.update(this.id!, this.foodspot) //aktualisierte Wertte werden zurück ans Backed gesendet
    .then( () => this.router.navigate(['/uebersicht'])) 
    console.log('Foodspot wurde aktualisiert:', values); //Konsolenausgabe, Foodspot wurde aktualisiert
    }

  // Abbrechen-Button navigiert zurück zur Übersicht
  cancel(): void {
    this.router.navigate(['/uebersicht']);
  }
}