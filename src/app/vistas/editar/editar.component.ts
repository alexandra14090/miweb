import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})    
export class EditarComponent implements OnInit {

  datosproducto: ProductoI = {} as ProductoI;
  editarForm: FormGroup;
  id: string | null = null; // Definir la variable 'id'

  constructor(private activateRouter: ActivatedRoute, private router: Router, private api: ApiService) { 
    this.editarForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  } 

  ngOnInit(): void {
    let productoId = this.activateRouter.snapshot.paramMap.get('id');
    if (productoId !== null) {
      this.id = productoId; // Asignar el valor de 'productoId' a 'id'
      this.api.GetSingleProducto(productoId).subscribe(data => {
        this.datosproducto = data;
        this.editarForm.patchValue(data); // Llena el formulario con los datos del producto
      });
    } else {
      console.error('El ID del producto es nulo');
    }
  }

  postForm() {
    if (this.editarForm.valid && this.id !== null) { // Verificar que 'id' no sea nulo
      const producto: ProductoI = this.editarForm.value;
      this.api.PutProducts(this.id, producto).subscribe(response => {
        console.log(response); // Manejar la respuesta del servidor
      });
    } else {
      console.error('El formulario no es válido o el ID es nulo');
    }
  } 

  delete() {
    // Obtener el id del producto desde tus datos
    let id: string | null = this.datosproducto.id;
    
    // Verificar que se haya obtenido un id válido
    if (id !== null) {
      // Llamar al método DeleteProduct del servicio ApiService
      this.api.DeleteProduct(id).subscribe(data => {
        console.log(data);
      });
    } else {
      console.error('No se proporcionó un ID de producto válido.');
    }
  }
  
}
