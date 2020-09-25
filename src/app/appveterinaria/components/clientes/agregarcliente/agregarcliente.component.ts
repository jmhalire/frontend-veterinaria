import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '@services/clientes.service';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregarcliente',
  templateUrl: './agregarcliente.component.html',
  styleUrls: ['./agregarcliente.component.scss']
})
export class AgregarclienteComponent implements OnInit {

  createdForm : FormGroup
  public title: string;
  public message: string;
  public sendClient: boolean;

  constructor(
    private builder: FormBuilder, 
    private clientService: ClientesService,
    ) {
    this.title = 'AGRGAR NUEVO CLIENTE';
    this.sendClient = false;
  }

  ngOnInit(): void {
    this.createdForm = this.builder.group(
      {
        Nombres: new FormControl('', Validators.required),
        Apellidos: new FormControl('', Validators.required),
        Email: new FormControl('-',Validators.required),
        Celular: new FormControl('-', Validators.required),
        Direccion: new FormControl('-', Validators.required),
        Estado: 1
      }
    )
  }

  public created(){
    this.sendClient = true;
    this.clientService.createdClient(this.createdForm.value).subscribe(
      res => {
        this.message = res.message;
        this.sendClient = false;
        this.createdForm.reset();
        setTimeout(() => {this.message = null}, 5000);
      },
      err=>{
        this.message = err.error.message
        
      }
    )
  }

  public closeMessage(){
    this.message = null;
  }

  

}
