import { Component, OnInit, Output, Host, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Cliente } from "@interfaces/cliente";
import { Venta } from "@interfaces/venta";
import { Mascot } from "@interfaces/mascot";

//services
import { ClientesService } from "@services/clientes.service";
import { MessageService } from '@services/message.service';
@Component({
  selector: 'app-vercliente',
  templateUrl: './vercliente.component.html',
  styleUrls: ['./vercliente.component.scss']
})
export class VerclienteComponent implements OnInit {

  updatedForm: FormGroup
  public cliente: Cliente;
  public mascotas: Mascot[];
  public ventas: Venta[];
  public loading: boolean;
  public message: boolean
  public messageDate: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientesService,
    private messageService: MessageService,
    private builder: FormBuilder
  ) {
    this.loading = true;
    this.message = false;
  }

  ngOnInit(): void {
    this.getDatos();
  }

  public formGrup() {
    this.updatedForm = this.builder.group(
      {
        id: this.cliente.id,
        Nombres: new FormControl(this.cliente.Nombres, Validators.required),
        Apellidos: new FormControl(this.cliente.Apellidos, Validators.required),
        Email: new FormControl(this.cliente.Email, Validators.compose([Validators.email, Validators.required])),
        Celular: new FormControl(this.cliente.Celular, Validators.required),
        Direccion: new FormControl(this.cliente.Direccion, Validators.required),
      }
    );
  }


  //metodo para eliminar cliente
  public deleted() {
    this.clientService.deleteClient(this.cliente.id).subscribe(
      res => {
        if (res.message) {
          const message = `El cliente "${this.cliente.Nombres}" a sido Eliminado del sistema`;
          localStorage.setItem('message', message)
          this.router.navigate(['../../lista'], { relativeTo: this.route })
        }
      },
      err => console.log(err)
    )
  }

  //metodo para actuakizar
  public updated() {
    this.clientService.editClient(this.updatedForm.value).subscribe(
      res => {        
        localStorage.setItem('message', res.message)
        this.loading = true;
        this.getDatos();
      }
    )
  }

  //obtener datos decliente y sus mascotas
  public getDatos() {
    const Id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(Id).subscribe(
      res => {
        this.cliente = res;
        this.mascotas = res.mascotas;
        this.formGrup();
        this.loading = false;
        this.messageDate = this.messageService.getMessage();
        if (this.messageDate.length > 0) {
          this.message = true;
          localStorage.removeItem('message');
        }
      }
    );
  }

}
