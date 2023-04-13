import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  
}
