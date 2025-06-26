import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Uebersicht } from './uebersicht/uebersicht';
import { Formular } from './formular/formular';

export const routes: Routes = [
    {  path: '', component: Startseite },
    {  path: 'uebersicht', component: Uebersicht },
    {  path: 'formular', component: Formular }
];