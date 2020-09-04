import { Component, OnInit } from '@angular/core';
import { Mascot } from '@interfaces/mascot';
import { MascotasService } from '@services/mascotas.service';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-listamascotas',
  templateUrl: './listamascotas.component.html',
  styleUrls: ['./listamascotas.component.scss']
})
export class ListamascotasComponent implements OnInit {

  public mascotas: Mascot[]
  public title: string
  public message: boolean;
  public messageDate: string

  public openClose: boolean

  public texto: string
  constructor(
    private mascotService: MascotasService,
    private messageService: MessageService
    ) {
    this.title = 'LISTA DE MASCOTAS'
    this.message = false;
    this.openClose = false;
    this.texto = 'Abrir';
   }

  ngOnInit(): void {
    this.mascotService.getListaMascotas().subscribe(
      res => {
        this.mascotas = res;
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
