import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Proveedor } from '@interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private url: string;
  constructor(
    private http: HttpClient, 
    private authService: AuthService
    ) {
    this.url = authService.getBackend();
  }

  /* ==================/////////////  METODO PARA PROCESOS DE PROVEEDORES \\\\\\\\\\\\\\\\\\\\\========================== */
  //getListProveeds
  public getListaProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.url}proveed/list`, { headers: this.authService.httpOptions()});
  }

  //getProveedor
  public getProveed(id: string): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.url}proveed/${id}`, { headers : this.authService.httpOptions()})
  }

  //crear un nuevo proveedor
  public createdProveed(proveed: Proveedor){
    return this.http.post<any>(`${this.url}proveed/add`,proveed, { headers : this.authService.httpOptions()})
  }

  //editarProveedor
  public editProveed(proveed: Proveedor){
    return this.http.post<any>(`${this.url}proveed/edit`,proveed, { headers : this.authService.httpOptions()})
  }

  //eliminar proveedor
  public deleteProveed(id: number){
    return this.http.delete<any>(`${this.url}proveed/delete/${id}`, { headers : this.authService.httpOptions()})
  }

  //count proveedor
  public countProveed(): Observable<any>{
    return this.http.get<any>(`${this.url}proveed/count`, { headers : this.authService.httpOptions()} );
  }
}
