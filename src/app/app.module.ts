import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagine/home/home.component';
import { CarrelloComponent } from './pagine/carrello/carrello.component';
import { VenditaComponent } from './pagine/vendita/vendita.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RegistrazioneComponent } from './pagine/registrazione/registrazione.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { NgxUiLoaderConfig, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';
import{ NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CategoriaComponent } from './pagine/categoria/categoria.component'
import { AuthGuard } from './utility/auth.guard';
import { ProdottoComponent } from './pagine/prodotto/prodotto.component';
import { DashboardComponent } from './pagine/dashboard/dashboard.component';
import { ManageProdottiComponent } from './pagine/manage-prodotti/manage-prodotti.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { AggiungiProdottoComponent } from './pagine/aggiungi-prodotto/aggiungi-prodotto.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ManagecategoriaComponent } from './pagine/managecategoria/managecategoria.component';
import { AggiungiCategoriaComponent } from './pagine/aggiungi-categoria/aggiungi-categoria.component';
import { ManageOrdineComponent } from './pagine/manage-ordine/manage-ordine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrelloComponent,
    VenditaComponent,
    RegistrazioneComponent,
    CategoriaComponent,
    ProdottoComponent,
    DashboardComponent,
    ManageProdottiComponent,
    AggiungiProdottoComponent,
    ManagecategoriaComponent,
    AggiungiCategoriaComponent,
    ManageOrdineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls:['http://localhost:8080'],
        sendAccessToken: true
      }
    }),
    FormsModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
