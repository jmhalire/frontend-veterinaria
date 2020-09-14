import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

//interfaces
import { Articulo } from '@interfaces/articulo';
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

  public getProductos(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>(`${this.url}article/list`, {headers: this.authService.httpOptions()});
  }


  //proveedores
  public createdProveedor(proveedor: Proveedor): Observable<any>{
    return this.http.post<any>(`${this.url}proveedor/save`,proveedor, { headers : this.authService.httpOptions()})
  }
  public getProveedores(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.url}proveedor/list`, {headers: this.authService.httpOptions()});
  }

  public getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.url}categoria/list`, {headers: this.authService.httpOptions()});
  }
}