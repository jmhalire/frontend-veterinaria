import { Injectable } from '@angular/core';
//interfaces
import { Venta } from '@interfaces/venta';
import { Pormeses } from "@interfaces/pormeses";
import { Visita } from '@interfaces/visita';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private url: string;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.url = authService.getBackend();
  }

  //'report/ingreso-meses'
  ///report/ingreso-hoy
  //report/visitas-meses

  //reporte de ingresos por meses
  public getIngresoMeses(): Observable<any>{
    return this.http.get<any>(`${this.url}report/ingreso-meses`, { headers : this.authService.httpOptions()} );
  }

  public getIngresoHoy(): Observable<any>{
    return this.http.get<any>(`${this.url}report/ingreso-hoy`, { headers : this.authService.httpOptions()} );
  }

  public getVisitaMeses(): Observable<any>{
    return this.http.get<any>(`${this.url}report/visita-meses`, { headers : this.authService.httpOptions()} );
  }

}
