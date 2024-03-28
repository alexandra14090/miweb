import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { Router } from '@angular/router';
import { CategoriaI } from 'src/app/modelos/categorias.interface';
import { ProductService } from 'src/app/servicios/product/product.service'; // Importa el servicio ProductService

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})    
export class NuevoComponent implements OnInit {

  nuevoForm: FormGroup;
  categorias: CategoriaI[] = [];

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private alert: AlertasService,
    private router: Router,
    private productService: ProductService // Inyecta el servicio ProductService
  ) { 
    this.nuevoForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      categoryId: ['', Validators.required]
    });
  } 

  ngOnInit(): void {
    this.api.GetAllCategories().subscribe(data => {
      this.categorias = data;
    });
  }

  crearProducto(): void {
    if (this.nuevoForm.valid) {
      const producto = this.nuevoForm.value;
      // Llama al método createProduct del servicio ProductService para crear un nuevo producto
      this.productService.createProduct(producto).subscribe(
        (data) => {
          console.log('Producto creado:', data);
          this.alert.showAlert({ message: 'Se ha agregado correctamente el producto', time: 3000 });
          this.nuevoForm.reset();
          this.router.navigate(['dashboard']); // Redirige a la página de dashboard después de crear el producto
        },
        (error) => {
          console.error('Error creando producto:', error);
          this.alert.showAlert({ message: 'Hubo un error al agregar el producto', time: 3000 });
        }
      );
    }
  }

  salir(): void {
    this.router.navigate(['dashboard']);
  }
}
