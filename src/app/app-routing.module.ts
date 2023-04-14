import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoDeComprasComponent } from './components/carrito-de-compras/carrito-de-compras.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeProductosComponent } from './components/lista-de-productos/lista-de-productos.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { PagoComponent } from './components/pago/pago.component';
import { GraciasComponent } from './components/gracias/gracias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrito', component: CarritoDeComprasComponent },
  { path: 'lista', component: ListaDeProductosComponent },
  { path: 'resultado-busqueda/:busqueda', component: ResultadoBusquedaComponent},
  {path: 'pago', component: PagoComponent},
  {path:'gracias', component: GraciasComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
