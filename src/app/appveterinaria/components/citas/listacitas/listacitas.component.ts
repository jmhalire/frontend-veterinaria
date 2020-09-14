import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '@services/servicios.service';
import { Cita } from '@interfaces/cita';

@Component({
  selector: 'app-listacitas',
  templateUrl: './listacitas.component.html',
  styleUrls: ['./listacitas.component.scss']
})
export class ListacitasComponent implements OnInit {

  public title: string;
  public citas: Cita[];
  constructor(
    private servi: ServiciosService
  ) {
    this.title = 'Lista de citas'
   }

  ngOnInit(): void {
    this.servi.getListCitas().subscribe(
      res => {
        this.citas = res
      },
      err=>console.log(err)
      
    )
  }

}
