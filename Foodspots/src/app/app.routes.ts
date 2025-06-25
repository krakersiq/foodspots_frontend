import { Routes } from '@angular/router';
import { Startseite } from './startseite/startseite';
import { Uebersicht } from './uebersicht/uebersicht';

export const routes: Routes = [
    {  path: '', component: Startseite },
    {  path: 'uebersicht', component: Uebersicht }
];