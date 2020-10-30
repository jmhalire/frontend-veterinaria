import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

//interfaces
import { Producto } from '@interfaces/producto';
import { Categoria } from "@interfaces/categoria";
import { Proveedor } from "@interfaces/proveedor";

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private url: string;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.url = authService.getBackend();
  }

  //Articulos
  public saveProducto(product: Producto): Observable<any>{
    return this.http.post<any>(`${this.url}article/save`,product, { headers : this.authService.httpOptions()})
  }
  //lista de productos
  public getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}article/list`, {headers: this.authService.httpOptions()});
  }
  //lista de productos
  public getProducto(id: string): Observable<Producto>{
    return this.http.get<Producto>(`${this.url}article/${id}`, {headers: this.authService.httpOptions()});
  }
  //para el reporte de los 5 productos mas vendidos
  public getReportProductFavory(): Observable<any>{
    return this.http.get<any>(`${this.url}report/top_10_product`, {headers: this.authService.httpOptions()})
  }
  //actualizar sctock del producto
  public updatedStockProduct(dato: any): Observable<any>{
    return this.http.post<any>(`${this.url}article/updated-stock`,dato,{headers: this.authService.httpOptions()})
  }

  //categorias
  public saveCategoria(dato: Categoria | any){
    return this.http.post<any>(`${this.url}categoria/save`, dato,{headers: this.authService.httpOptions()})
  }
  public getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.url}categoria/list`, {headers: this.authService.httpOptions()});
  }
}