import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '@services/clientes.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.scss']
})
export class AgregarclienteComponent implements OnInit {

  createdForm : FormGroup
  public title: string;
  public message: string;

  constructor(
    private builder: FormBuilder, 
    private clientService: ClientesService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) {
    this.title = 'AGRGAR NUEVO CLIENTE';
  }

  ngOnInit(): void {
    this.createdForm = this.builder.group(
      {
        Nombres: new FormControl('', Validators.required),
        Apellidos: new FormControl('', Validators.required),
        Email: new FormControl('',Validators.required),
        Celular: new FormControl('', Validators.required),
        Direccion: new FormControl('', Validators.required),
        Estado: 1
      }
    )
  }

  public created(){
    this.clientService.createdClient(this.createdForm.value).subscribe(
      res => {
        if(res.value){
          console.log(res.message);
          localStorage.setItem('message', res.message)
          this.router.navigate(['../lista'],{relativeTo: this.activeRouter})
        }
      },
      err =>{
        this.message = err.error.message
        
      }
    )
  }

  

}
