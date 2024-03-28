import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { CategoriaI } from 'src/app/modelos/categorias.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})    
export class EditarComponent implements OnInit {

  datosproducto: ProductoI = {} as ProductoI;
  editarForm: FormGroup;
  id: number | null = null;
  showAlert = false;
  showAlert2 = false;
  message = "";  
  message2 = "";  
  categorias: CategoriaI[] = [];

  constructor(
    private activateRouter: ActivatedRoute, 
    private router: Router, 
    private api: ApiService, 
    private alertservice: AlertasService
  ) { 
    this.editarForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl(''),
      categoryId: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
      imageFile: new FormControl(null)
    });
  } 

  ngOnInit(): void {
    // Obtener la lista de categorías
    this.api.GetAllCategories().subscribe(categories => {
      this.categorias = categories;

      // Obtener el ID del producto de la URL
      let productoId = this.activateRouter.snapshot.paramMap.get('id');
      if (productoId !== null) {
        // Convertir el ID a número y asignarlo a this.id
        this.id = parseInt(productoId); // Convertir a número
        // Obtener la información del producto utilizando el ID
        this.api.GetSingleProducto(this.id).subscribe(data => {
          // Asignar la información del producto a datosproducto
          this.datosproducto = data;
          // Rellenar el formulario con la información del producto
          this.editarForm.patchValue({
            title: data.title,
            price: data.price,
            description: data.description,
            imageUrl: data.images.length > 0 ? data.images[0] : '',
            imageFile: null
          });

          // Buscar la categoría del producto en la lista de categorías y seleccionarla en el formulario
          const categoriaSeleccionada = this.categorias.find(categoria => categoria.id === data.category.id);
          if (categoriaSeleccionada) {
            this.editarForm.patchValue({
              categoryId: categoriaSeleccionada.id.toString() // Convertir a string
            });
          }
        });
      } else {
        console.error('El ID del producto es nulo');
      }
    });

    // Suscripción a los mensajes de alerta
    this.alertservice.alert$.subscribe((res: any ) =>{
      this.message = res.message; 
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false;
      }, res.time);
    });   
    
    this.alertservice.alerta$.subscribe((res: any ) =>{
      console.log("Mensaje recibido:", res);
      this.message2 = res.message2; 
      console.log("Mensaje2:", this.message2);
      this.showAlert2 = true
      setTimeout(() => {
        this.showAlert2 = false;
      }, res.time2);
    });   
  }
  
  postForm() {
    if (this.editarForm.valid && this.id !== null) {
      const producto: ProductoI = {
        ...this.editarForm.value,
        id: this.id
      };
      this.api.PutProducts(this.id, producto).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('El formulario no es válido o el ID es nulo');
    }
  } 

  delete() {
    let id: number | null = this.datosproducto.id; // Convertir a number
  
    if (id !== null) {
      if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        this.api.DeleteProduct(id).subscribe(data => {
          console.log(data);
          this.alertservice.showAlert2({ message2: "Producto eliminado", time2: 3000 });
        }, error => {
          console.error('Error al eliminar el producto:', error);
          this.alertservice.showAlert({ message: "Error al eliminar el producto", time: 3000 });
        });
      } else {
        this.alertservice.showAlert({ message: "La eliminación del producto ha sido cancelada", time: 3000 });
      }
    } else {
      console.error('No se proporcionó un ID de producto válido.');
    }
  }

  updateCategoryOnChange(event: any) {
    const categoryId = event.target.value;
    if (categoryId !== null && categoryId !== undefined) {
      this.editarForm.patchValue({
        categoryId: categoryId
      });
    }
  }

  // Método para actualizar una categoría
  updateCategory(id: number, newName: string) {
    this.api.UpdateCategory(id, { name: newName }).subscribe((updatedCategory: CategoriaI) => {
      console.log('Categoría actualizada:', updatedCategory);
      // Aquí puedes manejar la respuesta actualizada como desees
    }, error => {
      console.error('Error al actualizar la categoría:', error);
      // Aquí puedes manejar el error como desees, por ejemplo, mostrando un mensaje al usuario
    });
  } 

  doSomething() {
    this.alertservice.showAlert({ message: "Se ha modificado correctamente el producto", time: 3000 });
  }
  
  doSomething1() {
    this.delete();
  }
  
  confirmDelete() {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.delete();
    }
  }

  salir(){
    this.router.navigate(["dashboard"]);
  }
}
