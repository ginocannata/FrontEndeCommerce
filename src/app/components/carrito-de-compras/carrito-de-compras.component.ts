import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto';
import { CarritoService } from '../../service/carrito.service';
import { ProductosService } from 'src/app/service/productos.service';



@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
  productosEnCarrito: Producto[] = [];
  totalProductos: number = 0;
  totalPagar: number = 0;



  constructor(private carritoService: CarritoService, private productoService:ProductosService) { }

  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.calcularTotalPagar();

    for (let producto of this.productosEnCarrito) {
    this.productoService.obtenerProducto(producto.id).subscribe(respuesta => {
      producto.nombre = respuesta.title;
      producto.imagenUrl = respuesta.image;
      producto.precio = respuesta.price;
    });
    this.calcularTotalProductos();
  }
  
  }
  eliminarProducto(producto: Producto) {
    const index = this.productosEnCarrito.indexOf(producto);
    if (index >= 0) {
      this.productosEnCarrito.splice(index, 1);
    }
    this.calcularTotalPagar();
  }
  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
    this.actualizarTotalProductos();
  }
  actualizarTotalProductos() {
    this.totalProductos = this.productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0);
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
    this.productosEnCarrito = this.carritoService.obtenerProductos();
    this.calcularTotalProductos();
    this.calcularTotalPagar();
  }

}



