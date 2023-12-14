import { RouterModule, Routes } from '@angular/router';
import { ListeVetementsComponent } from './vetement/liste-vetements/liste-vetements.component';
import { AjouterVetementComponent } from './vetement/ajouter-vetement/ajouter-vetement.component';
import { ModifierVetementComponent } from './vetement/modifier-vetement/modifier-vetement.component';
import { SupprimerVetementComponent } from './vetement/supprimer-vetement/supprimer-vetement.component';
import { ListeSellersComponent } from './seller/liste-sellers/liste-sellers.component';
import { AjouterSellerComponent } from './seller/ajouter-seller/ajouter-seller.component';
import { ModifierSellerComponent } from './seller/modifier-seller/modifier-seller.component';
import { SupprimerSellerComponent } from './seller/supprimer-seller/supprimer-seller.component';
import { SupprimerCategorieComponent } from './categorie/supprimer-categorie/supprimer-categorie.component';
import { ModifierCategorieComponent } from './categorie/modifier-categorie/modifier-categorie.component';
import { AjouterCategorieComponent } from './categorie/ajouter-categorie/ajouter-categorie.component';
import { ListeCategoriesComponent } from './categorie/liste-categories/liste-categories.component';

export const routes: Routes = [
  { path: 'vetements', component: ListeVetementsComponent },
  { path: 'vetements/ajouter', component: AjouterVetementComponent },
  { path: 'vetements/modifier', component: ModifierVetementComponent },
  { path: 'vetements/supprimer', component: SupprimerVetementComponent },

  { path: 'seller', component: ListeSellersComponent },
  { path: 'seller/ajouter', component: AjouterSellerComponent },
  { path: 'seller/modifier', component: ModifierSellerComponent },
  { path: 'seller/supprimer', component: SupprimerSellerComponent },

  { path: 'categorie', component: ListeCategoriesComponent },
  { path: 'categorie/ajouter', component: AjouterCategorieComponent },
  { path: 'categorie/modifier', component: ModifierCategorieComponent },
  { path: 'categorie/supprimer', component: SupprimerCategorieComponent },

  
  // Définissez d'autres routes pour vos autres composants
];

export const AppRoutes = RouterModule.forRoot(routes);
