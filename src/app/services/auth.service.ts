import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { User } from "@interfaces/user";
import { LoginResponse } from "@interfaces/loginResponse";
import { Usuario } from "@interfaces/usuario";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {
   }

  /**
   * signin
   */
  public signin(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.getBackend()}user/signin`, user);
  }

  public getDateUser(): Observable<Usuario> {
    //return this.http.get<Usuario>(`${this.urlBackend}profile`,this.httpOptions())
    return this.http.get<any>('https://jmhalire-api.herokuapp.com/other', { headers: this.httpOptions()});
  }

  public loggedIn(){  
    return !!localStorage.getItem('token'); //si existe devuelve un true o false
  }

  public logout(){
    localStorage.removeItem('token');
  }

  public httpOptions(): HttpHeaders {
    return new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
  }

  public getBackend(): string{
    return 'http://localhost:8080/';
  }

}
