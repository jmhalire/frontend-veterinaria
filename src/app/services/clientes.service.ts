import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Cliente } from '@interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.url = authService.getBackend();
  }

  /* ==================/////////////  METODO PARA PROCESOS DE CLIENTES \\\\\\\\\\\\\\\\\\\\\========================== */
  //getListClients
  public getListaClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}client/list`, { headers: this.authService.httpOptions()});
  }

  //getCliente
  public getClient(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}client/${id}`, { headers : this.authService.httpOptions()})
  }

  //crear un nuevo cliente
  public createdClient(client: Cliente){
    return this.http.post<any>(`${this.url}client/add`,client, { headers : this.authService.httpOptions()})
  }

  //editarCliente
  public editClient(client: Cliente){
    return this.http.post<any>(`${this.url}client/edit`,client, { headers : this.authService.httpOptions()})
  }

  //eliminar cliente
  public deleteClient(id: number){
    return this.http.delete<any>(`${this.url}client/delete/${id}`, { headers : this.authService.httpOptions()})
  }
}
