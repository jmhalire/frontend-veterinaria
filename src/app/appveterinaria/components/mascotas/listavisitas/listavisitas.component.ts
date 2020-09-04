import { Component, OnInit } from '@angular/core';
import { Visita } from '@interfaces/visita';
import { ServiciosService } from '@services/servicios.service';

@Component({
  selector: 'app-listavisitas',
  templateUrl: './listavisitas.component.html',
  styleUrls: ['./listavisitas.component.scss']
})
export class ListavisitasComponent implements OnInit {

  public title: string;
  public visitas: Visita[];
  constructor(private service: ServiciosService) {
    this.title = 'LISTA DE TODAS LAS VISITAS'
   }

  ngOnInit(): void {
    this.service.getListVisitas().subscribe(
      res => {
        this.visitas = res;
        console.log(this.visitas);
      }
    )
  }

}
