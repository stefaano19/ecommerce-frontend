import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { CarrelloComponent } from './pagine/carrello/carrello.component';
import { VenditaComponent } from './pagine/vendita/vendita.component';
import { AuthGuard } from './utility/auth.guard';
import { RegistrazioneComponent } from './pagine/registrazione/registrazione.component';
import { CategoriaComponent } from './pagine/categoria/categoria.component';
import { ProdottoComponent} from './pagine/prodotto/prodotto.component';
import { AdminComponent } from './pagine/admin/admin.component';
import { DashboardComponent } from './pagine/dashboard/dashboard.component';
import { ManageProdottiComponent } from './pagine/manage-prodotti/manage-prodotti.component';
import { ManagecategoriaComponent } from './pagine/managecategoria/managecategoria.component';
import { ManageOrdineComponent } from './pagine/manage-ordine/manage-ordine.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'prodottiM',
    component:ManageProdottiComponent,
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:"vendita", 
    component:VenditaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"registrazione",
    component:RegistrazioneComponent
  },
  {
    path: 'prodotti',
    component: ProdottoComponent
  },
  {
  path: "categoria",
    component: CategoriaComponent
  },
  {
    path:'carrello',
    component:CarrelloComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorieM',
    component:ManagecategoriaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'ordiniM',
    component:ManageOrdineComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"**",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
