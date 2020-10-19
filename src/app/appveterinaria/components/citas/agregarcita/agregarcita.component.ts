import { Component, OnInit } from '@angular/core';

import { ClientesService } from "@services/clientes.service";


// interfaces
import { Cliente } from '@interfaces/cliente';
import { Mascot } from '@interfaces/mascot';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiciosService } from '@services/servicios.service';

@Component({
  selector: 'app-agregarcita',
  templateUrl: './agregarcita.component.html',
  styleUrls: ['./agregarcita.component.scss']
})
export class AgregarcitaComponent implements OnInit {

  createdForm : FormGroup
  
  public title: string;
  public message: string
  public clientes: Cliente[];
  public mascotas: Mascot[]
  constructor(
    private builder: FormBuilder,
    private clientService: ClientesService,
    private serviService: ServiciosService
  ) { 
    this.title = 'nueva cita';
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;
      }
    )
    this.formMascot();
  }

  public formMascot(){
    this.createdForm = this.builder.group(
      {
        Tipo: new FormControl('', Validators.required),
        cliente: new FormControl('', Validators.required),
        mascota: new FormControl('',Validators.required),
        Motivo: new FormControl('', Validators.required),
        Dia: new FormControl('', Validators.required),
        Hora: new FormControl('', Validators.required),
      }
    )
  }

  public selectClient(e: any){
    let i = 0;
    while (i<this.clientes.length) {
      if(this.clientes[i].id.toString()===e.target.value.toString()){
        this.mascotas = this.clientes[i].mascotas;
        break;
      }
      i++;
    }
  }

  public created(){
    console.log(this.createdForm.value);
    
    this.serviService.RegistrarCita(this.createdForm.value).subscribe(
      res => {
        this.message = res.message;
        this.formMascot();
        setTimeout(() =>this.message=null, 5000);
      },
      err =>{
        this.message = err.error.message
      }
    )
  }

  //close message
  public closeMessage(){
    this.message = null;
  }
}
