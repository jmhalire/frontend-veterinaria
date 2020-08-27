import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//service
import { AuthService } from "@services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup

  public message: string
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private buider: FormBuilder
  ) { }

  ngOnInit(): void {

    this.signinForm = this.buider.group(
      {
        Email: new FormControl('',Validators.compose([Validators.email,Validators.required])),
        Password: new FormControl('',Validators.required),
      }
    )
  }
  public signin() {
    this.authService.signin(this.signinForm.value).subscribe(
      res => { 
        if(res.value==true){
          localStorage.setItem('datosUser',JSON.stringify(res));
          console.log(res);
        }  
        else{
          this.message = res.message;
          this.signinForm.reset();
        } 
      },
      err => console.log(err)
    );
  }
  public closeMessage(){
    this.message = null;
  }

  // var miObjeto = { 'marcado': 'html5', 'estilo': 'css3', 'comportamiento': 'js' };
  // // Guardo el objeto como un string
  // localStorage.setItem('datos', JSON.stringify(miObjeto));

  // // Obtengo el string previamente salvado y luego
  // var guardado = localStorage.getItem('datos');

  // console.log('objetoObtenido: ', JSON.parse(guardado));
}
