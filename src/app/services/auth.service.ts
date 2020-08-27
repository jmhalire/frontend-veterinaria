import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "@interfaces/user";
import { LoginResponse } from "@interfaces/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBackend: string
  constructor( private http: HttpClient ) {
    this.urlBackend = 'http://localhost:3200/user/'
   }

  /**
   * signin
   */
  public signin(user: User) {
    return this.http.post<LoginResponse>(`${this.urlBackend}signin`, user);
  }
}
