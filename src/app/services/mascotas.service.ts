import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Mascot } from '@interfaces/mascot';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private url: string;
  constructor(private http: HttpClient, private authService: AuthService) { 
    this.url = authService.getBackend();
  }

  /* ==================///////////////////////  METODO PARA PROCESOS DE MASCOTAS \\\\\\\\\\\\\\\\\\\\\========================== */
  //getListMascotas
  public getListaMascotas(): Observable<Mascot[]> {
    return this.http.get<Mascot[]>(`${this.url}mascot/list`, { headers: this.authService.httpOptions()});
  }

  //get mascota
  public getMascota(id: string): Observable<Mascot> {
    return this.http.get<Mascot>(`${this.url}mascot/${id}`, { headers : this.authService.httpOptions()})
  }

  //crear una nueva mascota
  public createdMascota(mascota: Mascot | any){
    return this.http.post<any>(`${this.url}mascot/add`,mascota, { headers : this.authService.httpOptions()})
  }

  //editar mascota
  public editMascota(mascota: Mascot | any){
    return this.http.post<any>(`${this.url}mascot/edit`,mascota, { headers : this.authService.httpOptions()})
  }

  //eliminar mascota
  public deleteMascota(id: number){
    return this.http.delete<any>(`${this.url}mascot/delete/${id}`, { headers : this.authService.httpOptions()})
  }

  //cantidad de mascotas
  public countMascota(){
    return this.http.get<any>(`${this.url}mascot/count`, { headers : this.authService.httpOptions()})
  }

  public getEspecies(){
    return [ 'Canino', 'Felino', 'Otro'];
  }

  public getGeneros(){
    return ['Macho', 'Hembra', 'Indefinido'];
  }
}
