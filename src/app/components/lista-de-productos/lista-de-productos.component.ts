import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.css']
})
export class ListaDeProductosComponent implements OnInit {
  productos: any;
  constructor(private producosService:ProductosService, private carritoService:CarritoService) { }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos():void{
    this.producosService.getProductos().subscribe(
      productos=> this.productos = productos
    )
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
  

}
