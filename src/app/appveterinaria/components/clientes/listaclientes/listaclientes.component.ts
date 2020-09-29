import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ClientesService } from "@services/clientes.service";
import { MessageService } from '@services/message.service';

//interfaces
import { Cliente } from "@interfaces/cliente";

import { search } from "@animations/animations";


@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss'],
  animations: [search]
})
export class ListaclientesComponent implements OnInit {

  //carga de datos 
  private lenBus: number;
  public clientes: Cliente[]
  public titleList: string
  public messageDate: string;
  public message: boolean;
  public openClose: boolean
  public texto: string
  public color: string;
  //public NroDePokemons: number;
  @ViewChild('listClient') listClient: ElementRef;
  constructor(private clientService: ClientesService, private messageService: MessageService) {
    this.titleList = 'LISTA DE CLIENTES'
    this.message = false;
    this.openClose = false;
    this.texto = 'Abrir'
    this.color = 'btn-primary';
    this.lenBus = 0;
    
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;       
      },
      err => {
        this.message = err;
      }
    )


    this.messageDate = this.messageService.getMessage();
    if (this.messageDate.length > 0) {
      this.message = true;
      localStorage.removeItem('message');
    }
  }

  public handlefuntion() {
    this.openClose = !this.openClose
    if (this.openClose) {
      this.texto = 'Cerrar'
      this.color = 'btn-warning'
    } else {
      this.texto = 'Abrir'
      this.color = 'btn-primary'
    }
  }

  public nameClient(e: string) {
    //console.log(this.listClient.nativeElement.classList);
    let query = e.toLowerCase();
    requestAnimationFrame(() => {
      this.clientes.forEach((item, index) => {
        const poke = item.Nombres.toLowerCase().indexOf(query) > -1;
        let pokes = this.listClient.nativeElement.children[index]
        if (poke) {
          pokes.classList.remove('d-none');
        } else {
          pokes.classList.add('d-none');
          this.lenBus += 1;
        }
      });
    });
    if(this.clientes.length <= this.lenBus){
      requestAnimationFrame(() => {
        this.clientes.forEach((item, index) => {
          let pokes = this.listClient.nativeElement.children[index]
          pokes.classList.remove('d-none');
        });
      });  
    }
    this.lenBus = 0;
  }
}
