import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ProductosService } from 'src/app/service/productos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private productosService: ProductosService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
  }


} 
