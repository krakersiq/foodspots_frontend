import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Foodspot } from '../shared/foodspot';
import { Backend } from '../shared/backend';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bearbeiten',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bearbeiten.html',
  styleUrl: './bearbeiten.css',
})

export class Bearbeiten implements OnInit {

  private bs = inject(Backend);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  foodspot!: Foodspot;
  id: string | null = '';
  form = new FormGroup({
    nameControl: new FormControl<string>(''),
    stadtControl: new FormControl<string>(''),
    kuecheControl: new FormControl<string>(''),
    bewertung_geschmackControl: new FormControl<number | undefined>(undefined),
    bewertung_preisControl: new FormControl<number | undefined>(undefined),
    bewertung_ambienteControl: new FormControl<number | undefined>(undefined),
    kommentarControl: new FormControl<string>('')
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.id);
    this.bs
      .getOne(this.id!)
      .then( response => {
        this.foodspot = response;
        this.form.patchValue({
          nameControl: this.foodspot?.name,
          stadtControl: this.foodspot?.stadt,
          kuecheControl: this.foodspot?.kueche,
          bewertung_geschmackControl: this.foodspot?.bewertung_geschmack,
          bewertung_preisControl: this.foodspot?.bewertung_preis,
          bewertung_ambienteControl: this.foodspot?.bewertung_ambiente,
          kommentarControl: this.foodspot?.kommentar,
        })
        return this.foodspot;
      })
      .then((foodspot) => console.log('Foodspot in Bearbeiten:', foodspot));
  }

  update(): void {
    const values = this.form.value;
    this.foodspot.name = values.nameControl!;
    this.foodspot.stadt = values.stadtControl!;
    this.foodspot.kueche = values.kuecheControl!;
    this.foodspot.bewertung_geschmack = values.bewertung_geschmackControl!;
    this.foodspot.bewertung_preis = values.bewertung_preisControl!;
    this.foodspot.bewertung_ambiente = values.bewertung_ambienteControl!;
    this.foodspot.kommentar = values.kommentarControl!;

    this.bs.update(this.id!, this.foodspot)
    .then( 
      () => console.log('Foodspot wurde aktualisiert', this.foodspot))
    .then(
      () => this.router.navigate(['/uebersicht']))
    }


  cancel(): void {
    this.router.navigate(['/uebersicht']);
  }
}