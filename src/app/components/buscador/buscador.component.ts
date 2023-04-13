import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { BuscadorService } from 'src/app/service/buscador.service';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  public searchInput: FormControl = new FormControl('');
  productosEncontrados: Producto[] = [];
  public busqueda:string='';


  @Output() public porductoSeleccionado = new EventEmitter<Producto>();

  constructor(private buscadorService:BuscadorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }
  public buscarProducto():void{
    console.log('Buscando producto...');
    const busqueda = this.searchInput.value.trim();
    if(busqueda!==''){
  
      this.buscadorService.buscarProductos(busqueda).subscribe((productos)=>{
        this.productosEncontrados=productos;
    
        this.router.navigate(['/resultado-busqueda', busqueda]);
      }
      )
    }
  }
  public seleccionarProducto(producto:Producto):void{
    this.porductoSeleccionado.emit(producto);
    this.productosEncontrados=[];
    this.searchInput.setValue('');
  }
}
