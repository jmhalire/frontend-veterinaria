import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//SERVICE
import { UserService } from "@services/user.service";
import { User } from '@interfaces/user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public formUpdate: FormGroup
  @Input('i') i: any;
  @Input('user') user: User;
  @Output('emitMessage') emitMessage = new EventEmitter<string>();
  public showConfigDelete: boolean;
  public showEdit: boolean;
  public otherRole: string;
  constructor(
    private userService: UserService,
    private builder: FormBuilder,
  ) {
    this.showConfigDelete = false;
    this.showEdit = false;
  }

  ngOnInit(): void {
    this.formUpdate = this.builder.group({
      Names : new FormControl(this.user.Names, Validators.required),
      FirstName: new FormControl(this.user.FirstName, Validators.required),
      LastName: new FormControl(this.user.LastName, Validators.required),
      Celular : new FormControl(this.user.Celular, Validators.required),
      Address : new FormControl(this.user.Address, Validators.required),
      Email : new FormControl(this.user.Email, [Validators.email, Validators.required]),
      Role : new FormControl(this.user.Role, Validators.required)
    });
    if(this.user.Role=="ADMIN"){
      this.otherRole = 'GENERAL';
    }else{
      this.otherRole = 'ADMIN';
    }
  }

  public deleted() {
    this.userService.deleteUser(this.user.id).subscribe(
      res => {
        this.emitMessage.emit(res.message)
        this.showConfigDelete = false

      },
      err => console.log(err)
    )
  }

  public confirDeleted() {
    this.showConfigDelete = true;
  }

  public cancelDelete() {
    this.showConfigDelete = false
  }

  //actualizacion de datos updatedUser
  public updatedUser(){
    this.showEdit = true;
  }
  public sendUpdateUser(){
    this.userService.updateUser(this.formUpdate.value).subscribe(
      res => {
        this.emitMessage.emit(res.message)
        this.formUpdate.reset();
        this.showEdit = false;
      }
    )
  }
  public cancelUpdate(){
    this.showEdit = false;
  }
}
