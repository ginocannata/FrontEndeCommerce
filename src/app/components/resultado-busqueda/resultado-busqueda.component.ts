import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { BuscadorService } from 'src/app/service/buscador.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {
  productosEncontrados: Producto[]=[];
  constructor(
    private route: ActivatedRoute,
    private productosService:ProductosService,
    private buscadorService:BuscadorService,
    private carritoService:CarritoService
  ) { }

  ngOnInit(): void {
    const busqueda=this.route.snapshot.paramMap.get('busqueda');
    if(busqueda){
      this.buscarProductos(busqueda);
    }
  }
  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
  buscarProductos(busqueda:string){
    this.buscadorService.buscarProductos(busqueda).subscribe((productos:any) =>{
      this.productosEncontrados = productos.map((producto:any) => {
        return {
          id: producto.id,
          nombre: producto.title, // asignar title a nombre
          descripcion: producto.description,
          imagenUrl: producto.image, // asignar image a imagenUrl
          precio: producto.price // asignar price a precio
        };
      });
    })
  }

}
