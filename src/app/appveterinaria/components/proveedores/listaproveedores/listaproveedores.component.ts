import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProveedoresService } from "@services/proveedores.service";
import { MessageService } from '@services/message.service';

//interfaces
import { Proveedor } from "@interfaces/proveedor";

import { search } from "@animations/animations";

@Component({
  selector: 'app-listaproveedores',
  templateUrl: './listaproveedores.component.html',
  styleUrls: ['./listaproveedores.component.scss'],
  animations: [search]
})
export class ListaproveedoresComponent implements OnInit {

  //carga de datos 
  private lenBus: number;
  public proveedores: Proveedor[]
  public titleList: string
  public messageDate: string;
  public message: boolean;
  public openClose: boolean
  public texto: string
  public color: string;
  //public NroDePokemons: number;
  @ViewChild('listProveed') listProveed: ElementRef;

  constructor(private proveedService: ProveedoresService, private messageService: MessageService) {
    this.titleList = 'LISTA DE PROVEEDORES'
    this.message = false;
    this.openClose = false;
    this.texto = 'Abrir'
    this.color = 'btn-primary';
    this.lenBus = 0;
   }

  ngOnInit(): void {
    this.proveedService.getListaProveedores().subscribe(
      res => {
        this.proveedores = res;       
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

  public handlefuntion(){
    this.openClose = !this.openClose
    if (this.openClose) {
      this.texto = 'Cerrar'
      this.color = 'btn-warning'
    } else {
      this.texto = 'Abrir'
      this.color = 'btn-primary'
    }
  }

  
  public nameProveed(e: string) {
    //console.log(this.listClient.nativeElement.classList);
    let query = e.toLowerCase();
    requestAnimationFrame(() => {
      this.proveedores.forEach((item, index) => {
        const poke = item.Nombre.toLowerCase().indexOf(query) > -1;
        let pokes = this.listProveed.nativeElement.children[index]
        if (poke) {
          pokes.classList.remove('d-none');
        } else {
          pokes.classList.add('d-none');
          this.lenBus += 1;
        }
      });
    });
    if(this.proveedores.length <= this.lenBus){
      requestAnimationFrame(() => {
        this.proveedores.forEach((item, index) => {
          let pokes = this.listProveed.nativeElement.children[index]
          pokes.classList.remove('d-none');
        });
      });  
    }
    this.lenBus = 0;
  }

}
