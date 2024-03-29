import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaProductosI } from 'src/app/modelos/listaproductos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productos: ListaProductosI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.GetAllProducts(1).subscribe(data => {
      // Convertir el id de number a string para que coincida con el tipo definido en ListaProductosI
      this.productos = data.map(producto => ({
        ...producto,
        id: String(producto.id)
      }));
    });
  }

  editarproducto(id: any){
    this.router.navigate(['editar', id]);
  }

  nuevoproducto() {
    this.router.navigate(['nuevo']);
  }
}
