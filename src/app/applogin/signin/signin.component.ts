import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//service
import { AuthService } from "@services/auth.service";

import { signin } from "../../animations/animations";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [signin]
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup

  public message: string
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  constructor(
    private authService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.signinForm = this.builder.group(
      {
        Email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
        Password: new FormControl('', Validators.required),
      }
    )
  }
  public signin() {
    if (this.signinForm.value.Email === '')
      this.email.nativeElement.focus();
    else if (this.signinForm.value.Password === '') {
      this.password.nativeElement.focus();
    }
    else {
      this.authService.signin(this.signinForm.value).subscribe(
        res => {
          if (res.value == true) {
            this.signinForm.reset();
            localStorage.setItem('token', res.token);
            this.router.navigate(['/veterinaria'])
          }
          else {
            this.message = res.message;
            this.signinForm.reset();
          }
        },
        err => console.log(err)
      );
    }
  }
  public closeMessage() {
    this.message = null;
  }

  // var miObjeto = { 'marcado': 'html5', 'estilo': 'css3', 'comportamiento': 'js' };
  // // Guardo el objeto como un string
  // localStorage.setItem('datos', JSON.stringify(miObjeto));

  // // Obtengo el string previamente salvado y luego
  // var guardado = localStorage.getItem('datos');

  // console.log('objetoObtenido: ', JSON.parse(guardado));
}
