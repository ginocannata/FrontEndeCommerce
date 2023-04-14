import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { CarritoService } from 'src/app/service/carrito.service';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  productosEnCarrito: Producto[] = [];
  totalPagar: number = 0;
  formPago!: FormGroup;

  constructor(
    private carritoService:CarritoService,
    private pagoService:PagoService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.calcularTotalPagar();

    this.formPago = this.formBuilder.group({
      nombre: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      fechaExpiracion: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      codigoSeguridad: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]]
    });
  }
  calcularTotalPagar():void{
    this.totalPagar = this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }
  onSubmit(): void {
    if (this.formPago.valid) {
      this.pagoService.realizarPago(this.formPago.value, this.totalPagar).subscribe(() => {
        this.carritoService.vaciarCarrito();
        alert('Pago realizado con éxito');
      });
    }
    this.router.navigate(['/gracias']);
  }

}
