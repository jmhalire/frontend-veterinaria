import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AuthService } from './auth.service';

//interfaces
import { Cliente } from '@interfaces/cliente'
import { Mascot } from "@interfaces/mascot";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  constructor(private http: HttpClient, private authService: AuthService) {

   }


}
