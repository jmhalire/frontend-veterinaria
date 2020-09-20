import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@services/auth.service";

import { Venta } from '@interfaces/venta';
import { Categoria } from '@interfaces/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VentaService {

  private url: string;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.url = authService.getBackend();
  }
  
  // guardar una venta realizada
  public saveVenta(dato: Venta | any){
    return this.http.post<any>(`${this.url}venta/save`, dato,{headers: this.authService.httpOptions()})
  }

  // guardar una venta realizada
  public getVentas(): Observable<Venta[]>{
    return this.http.get<Venta[]>(`${this.url}venta/list`,{headers: this.authService.httpOptions()})
  }

  //obtener una venta
  public getVenta(id: string): Observable<Venta>{
    return this.http.get<Venta>(`${this.url}venta/${id}`,{headers: this.authService.httpOptions()})
  }
  
}


