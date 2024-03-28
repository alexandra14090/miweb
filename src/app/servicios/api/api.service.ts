import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { CategoriaI } from 'src/app/modelos/categorias.interface';

@Injectable({ 
  providedIn: 'root'
})  
export class ApiService {
  private apiUrl = "https://api.escuelajs.co/api/v1/products";
  private categoriesUrl = "https://api.escuelajs.co/api/v1/categories";

  constructor(private http: HttpClient) { }

  GetAllProducts(page: number): Observable<ProductoI[]> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get<ProductoI[]>(url);   
  }

  GetAllCategories(): Observable<CategoriaI[]> {
    return this.http.get<CategoriaI[]>(this.categoriesUrl);
  } 

  GetCategoriaById(id: number): Observable<CategoriaI> {
    const url = `${this.categoriesUrl}/${id}`; 
    return this.http.get<CategoriaI>(url);
  }

  UpdateCategory(id: number, form: { name: string }): Observable<CategoriaI> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.put<CategoriaI>(url, form);
  }

  GetSingleProducto(id: number): Observable<ProductoI> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProductoI>(url);
  }

  PutProducts(id: number, form: ProductoI): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    form.categoryId = Number(form.categoryId);
    return this.http.put<any>(url, form);  
  }  

  DeleteProduct(id: number): Observable<boolean> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<boolean>(url);
  }
  
  PostProduct(producto: ProductoI): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error creando producto:', error);
        return throwError(error); 
      })
    );
  }
}
