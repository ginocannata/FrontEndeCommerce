import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/model/producto';
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
    private productosService:ProductosService
  ) { }

  ngOnInit(): void {
    const busqueda=this.route.snapshot.paramMap.get('busqueda');
    if(busqueda){
      this.buscarProductos(busqueda);
    }
  }
  buscarProductos(busqueda:string){
    this.productosService.getProductos().subscribe((productos:Producto[]) =>{
      this.productosEncontrados = productos.filter(p =>p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    })
  }

}
