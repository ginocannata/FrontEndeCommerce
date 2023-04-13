import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  private API_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  buscarProductos(busqueda: string):Observable<Producto[]> {
    const URL = `${this.API_URL}?q=${busqueda}`;
    return this.http.get<Producto[]>(URL);
  }
}
