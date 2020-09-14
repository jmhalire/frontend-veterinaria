import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Mascot } from '@interfaces/mascot';
import { MascotasService } from '@services/mascotas.service';
import { MessageService } from '@services/message.service';
import { search } from "@animations/animations";

@Component({
  selector: 'app-listamascotas',
  templateUrl: './listamascotas.component.html',
  styleUrls: ['./listamascotas.component.scss'],
  animations: [search]
})
export class ListamascotasComponent implements OnInit {

  public mascotas: Mascot[]
  public title: string
  public message: boolean;
  public messageDate: string
  public openClose: boolean
  public texto: string
  @ViewChild('listMascot') listMascot: ElementRef;

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

  public nameMascot(e: string) {
    //console.log(this.listClient.nativeElement.classList);
    let query = e.toLowerCase();
    requestAnimationFrame(() => {
      this.mascotas.forEach((item, index) => {
        const poke = item.Nombres.toLowerCase().indexOf(query) > -1;
        let pokes = this.listMascot.nativeElement.children[index]
        if (poke) {
          pokes.classList.remove('d-none');
          //this.NroDePokemons += 1;
        } else {
          pokes.classList.add('d-none');
        }
      });
    });
  }
}
