import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { CarritoService } from '../../service/carrito.service';



@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
  productosEnCarrito: Producto[]= [];
  totalProductos: number = 0;
  totalPagar: number = 0;


  constructor(private carritoService:CarritoService) { }

  eliminarProducto(producto: Producto) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index >= 0) {
      this.productosEnCarrito.splice(index, 1);
    }
  }
  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
    this.actualizarTotalProductos();
  }
  actualizarTotalProductos() {
    this.totalProductos = this.productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0);
  }
  
  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.getProductos();
    this.calcularTotalProductos();
    this.calcularTotalPagar();
  }
  calcularTotalProductos(): void {
    this.totalProductos = this.productosEnCarrito.reduce((total, producto) => {
      return total + producto.cantidad;
    }, 0);
  }
  calcularTotalPagar(): void {
    this.totalPagar = this.productosEnCarrito.reduce((total, producto) => {
      return total + (producto.cantidad * producto.precio);
    }, 0);
  }
  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.productosEnCarrito = this.carritoService.getProductos();
    this.calcularTotalProductos();
    this.calcularTotalPagar();
  }
  
  }
  


