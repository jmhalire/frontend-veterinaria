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
  public selectDelete(index: number){
    this.selectUser = index;    
  }

  public deleted(){
    this.userService.deleteUser(this.users[this.selectUser].id).subscribe(
      res => {
        this.message = res.message;
        this.userService.getUsers().subscribe(
          res => {
            this.users = res
          }
        )
      },
      err => console.log(err)
    )
  }

  public closeMessage(){
    this.message = null;
  }
}
