import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCategoriesComponent } from "./categorie/liste-categories/liste-categories.component";
import { ListeVetementsComponent } from "./vetement/liste-vetements/liste-vetements.component";
import { ListeSellersComponent } from "./seller/liste-sellers/liste-sellers.component";
//import { vetementRoutes } from './vetement/vetement-routing.module';

const routes: Routes = [
  //...vetementRoutes,
  // ... intégrez d'autres routes de module ici
];

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [ListeCategoriesComponent, ListeVetementsComponent, ListeSellersComponent]
})
export class AppComponent {
  title = 'gestion_vetement';
}
