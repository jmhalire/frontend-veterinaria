import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//services
import { UserService } from "@services/user.service";
//interfaces
import { User } from "@interfaces/user";

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss']
})
export class ListausuariosComponent implements OnInit {

  public message: string;
  public users: User[];
  public selectUser: number;
  //@ViewChild('option') option: ElementRef
  constructor(
    private userService: UserService
  ) {
    this.selectUser = 0;
   }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res
      }
    )
  }

  public messageUser(value: string){
    this.userService.getUsers().subscribe(
      res => {
        this.users = res
        this.message = value;
        setTimeout(() => {this.message = null}, 5000);
      }
    )
  }
  public closeMessage(){
    this.message = null;
  }
}
