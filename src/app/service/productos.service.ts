import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private API_URL='https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }
  getProductos():Observable<any>{
    return this.http.get(this.API_URL);
  }
  obtenerProducto(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  buscarProducto(busqueda:string): Observable<Producto[]>{
    const URL = `${this.API_URL}?q=${busqueda}`;
    return this.http.get<Producto[]>(URL);

  }
}
