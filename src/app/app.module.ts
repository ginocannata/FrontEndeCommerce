import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';
import { PagoComponent } from './components/pago/pago.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { GraciasComponent } from './components/gracias/gracias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListaDeProductosComponent,
    CarritoDeComprasComponent,
    PagoComponent,
    BuscadorComponent,
    ResultadoBusquedaComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
