import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

//services
import { UserService } from "@services/user.service";

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.scss']
})
export class NuevousuarioComponent implements OnInit {

  public formSignup: FormGroup
  public title: string
  public message: string;
  constructor(
    private builder: FormBuilder,
    private userService: UserService
  ) {
    this.title = 'Nuevo usuario'
   }

  ngOnInit(): void {
    this.formSignup = this.builder.group({
      Names : new FormControl('', Validators.required),
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Celular : new FormControl('', Validators.required),
      Address : new FormControl('', Validators.required),
      Email : new FormControl('', [Validators.email, Validators.required]),
      Password : new FormControl('', Validators.required),
      Role : new FormControl('', Validators.required)
    })
  }


  public created(){
    this.userService.Create(this.formSignup.value).subscribe(
      res => {
        this.message = res.message;
        this.formSignup.reset();
      }
    )
  }

  public closeMessage(){
    this.message = null;
  }
}
