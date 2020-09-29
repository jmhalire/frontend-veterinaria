import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Visita } from '@interfaces/visita';
import { Cita } from "@interfaces/cita";
import { Observable } from 'rxjs';

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

  //actualizar estado de una visita
  public updatedVisita(datos: any[]){
    return this.http.post<any>(`${this.url}visita/update`,datos, { headers : this.authService.httpOptions()})
    
  }

  //obtenemos la lista de visitas
  public getListVisitas(){
    return this.http.get<Visita[]>(`${this.url}visita/lista`, { headers : this.authService.httpOptions()})
  }

  //obtenemos la lista de visitas
  public countVisita(){
    return this.http.get<any>(`${this.url}visita/count`, { headers : this.authService.httpOptions()})
  }

  //metodo para el reporte de vistas de clientes por meses
  public getClientMonth(): Observable<any>{
    return this.http.get<any>(`${this.url}report/client-for-month`, { headers : this.authService.httpOptions()})
  }

  //regfistrar una vacuna
  public RegistrarVacuna(datos: any){
    return this.http.post<any>(`${this.url}vacuna/add`,datos, { headers : this.authService.httpOptions()})
  }


  //   ========================== CITAS   ==========================
  public getListCitas(){
    return this.http.get<Cita[]>(`${this.url}cita/pendientes`, { headers : this.authService.httpOptions()})
  }

  public RegistrarCita(datos: any){
    return this.http.post<any>(`${this.url}cita/add`,datos, { headers : this.authService.httpOptions()})
  }

  //actualizar estado de citas
  public updatedCita(id: string): Observable<any>{
    return this.http.get<any>(`${this.url}cita/updated-state/${id}`,{ headers : this.authService.httpOptions()})
  }

  //acceso a la api de weather
  public getWeather(): Observable<any>{
    return this.http.get<any>(`${this.url}weather`);
  }
}
