import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//services
import { UserService } from '@services/user.service';

//interfaces
import { User } from "@interfaces/user";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public title: string;
  public user: User;
  constructor(
    private userService: UserService
  ) {
    this.title = 'INFORMACION PERSONAL DEL USUARIO';
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      res => {
        console.log(res);
        this.user = res
      }
    )
  }

}
