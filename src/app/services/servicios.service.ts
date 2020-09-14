import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Visita } from '@interfaces/visita';
import { Cita } from "@interfaces/cita";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url: string;
  constructor(private http: HttpClient, private authService: AuthService) { 
    this.url = authService.getBackend();
  }

  // =  = =   = =  = ===========     VICITAS     ================================ 
  //registrar nueva visita
  public RegistrarVisita(datos: any){
    return this.http.post<any>(`${this.url}visita/add`,datos, { headers : this.authService.httpOptions()})
    
  }

  //regfistrar una vacuna
  public RegistrarVacuna(datos: any){
    return this.http.post<any>(`${this.url}vacuna/add`,datos, { headers : this.authService.httpOptions()})
  }

  //obtenemos la lista de visitas
  public getListVisitas(){
    return this.http.get<Visita[]>(`${this.url}visita/lista`, { headers : this.authService.httpOptions()})
  }


  //   ========================== CITAS   ==========================
  public getListCitas(){
    return this.http.get<Cita[]>(`${this.url}cita/lista`, { headers : this.authService.httpOptions()})
  }

  public RegistrarCita(datos: any){
    return this.http.post<any>(`${this.url}cita/add`,datos, { headers : this.authService.httpOptions()})
    
  }
}
