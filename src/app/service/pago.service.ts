import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = 'https://my.api.mockaroo.com/pago.json?key=6edf8200';

  constructor(private http: HttpClient) { }

  realizarPago(datosPago: any, monto: number): Observable<any> {
    const payload = {
      nombre: datosPago.nombre,
      numeroTarjeta: datosPago.numeroTarjeta,
      fechaExpiracion: datosPago.fechaExpiracion,
      codigoSeguridad: datosPago.codigoSeguridad,
      monto: monto
    };
    return this.http.post<any>(this.apiUrl, payload);
  }
}
