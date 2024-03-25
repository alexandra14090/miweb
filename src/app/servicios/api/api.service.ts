import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaProductosI } from 'src/app/modelos/listaproductos.interface';
import { ProductoI } from 'src/app/modelos/producto.interface';
import { Response } from 'express';

@Injectable({ 
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://api.escuelajs.co/api/v1/products"

  constructor(private http: HttpClient) { }

  GetAllProducts(page: number): Observable<ListaProductosI[]>{
    let direccion = `${this.url}?page=${page}`;
    return this.http.get<ListaProductosI[]>(direccion)    
  }

  GetSingleProducto(id: string): Observable<ProductoI> {
    let direccion = `${this.url}/${id}`;
    return this.http.get<ProductoI>(direccion);
  }

  PutProducts(id: string, form: ProductoI):Observable<Response>{
    let direccion = `${this.url}/${id}`;
    return this.http.put<Response>(direccion, form);  
  }  

  DeleteProduct(id: string): Observable<boolean> {
    let direccion = `${this.url}/${id}`;
    return this.http.delete<boolean>(direccion);
  }
  
}   


  