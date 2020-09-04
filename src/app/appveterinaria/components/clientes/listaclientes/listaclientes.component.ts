import { Component, OnInit, Input } from '@angular/core';

import { ClientesService } from "@services/clientes.service";
import { MessageService } from '@services/message.service';

//interfaces
import { Cliente } from "@interfaces/cliente";

import { search } from "../../../../animations/animations";


@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss'],
  animations: [ search]
})
export class ListaclientesComponent implements OnInit {

  public clientes: Cliente[]
  public titleList: string
  public messageDate: string;
  public message: boolean;
  public openClose: boolean

  public texto: string
  constructor(private clientService: ClientesService, private messageService: MessageService) { 
    this.titleList = 'LISTA DE CLIENTES'
    this.clientes = [];
    this.message = false;
    this.openClose = false;
    this.texto = 'Abrir'
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => {
        
      }
    )

    this.messageDate = this.messageService.getMessage();
    if(this.messageDate.length>0){
      this.message = true;
      localStorage.removeItem('message');
    }
  }

  public handlefuntion(){
    this.openClose = !this.openClose
    if(this.openClose){
      this.texto = 'Cerrar'
    } else{
      this.texto = 'Abrir'
    }
  }
  
}
