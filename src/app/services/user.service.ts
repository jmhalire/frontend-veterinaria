import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "@interfaces/user";
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url: string;
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {
      this.url = authService.getBackend();
     }

  public Create(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}user/create`,user, { headers: this.authService.httpOptions()});
  }
  //actualizar
  public updateUser(user: any){
    return this.http.post<any>(`${this.url}user/edit`,user, { headers : this.authService.httpOptions()})
  }

  public getUser():Observable<User>{
    return this.http.get<User>(`${this.url}user`, { headers: this.authService.httpOptions() })
  }
  
  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.url}user/list`, { headers: this.authService.httpOptions() })
  }

  public deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}user/delete/${id}`, { headers: this.authService.httpOptions() });
  }

}
