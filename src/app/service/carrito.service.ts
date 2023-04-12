import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: Producto[] = [];

  agregarAlCarrito(producto: Producto): void {
    const itemExistente = this.productos.find((item) => item.id === producto.id);

    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.productos.push({ ...producto, cantidad: 1 });
    }
  }

  eliminarDelCarrito(producto: Producto): void {
    const itemIndex = this.productos.findIndex((item) => item.id === producto.id);

    if (itemIndex !== -1) {
      const item = this.productos[itemIndex];
      item.cantidad--;

      if (item.cantidad === 0) {
        this.productos.splice(itemIndex, 1);
      }
    }
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  obtenerCantidadTotal(): number {
    return this.productos.reduce((total, item) => total + item.cantidad, 0);
  }

  obtenerPrecioTotal(): number {
    return this.productos.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  vaciarCarrito(): void {
    this.productos = [];
  }
  getProductos(): Producto[] {
    return this.productos;
  }
  actualizarProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos[index] = producto;
    }
  }
}

