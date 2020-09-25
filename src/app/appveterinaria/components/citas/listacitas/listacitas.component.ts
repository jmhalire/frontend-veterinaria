import { Component, OnInit, ɵinitServicesIfNeeded } from '@angular/core';
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
  public message: string;
  constructor(
    private servi: ServiciosService
  ) {
    this.title = 'Lista de citas'
   }

  ngOnInit(): void {
    this.getDatos();
  }

  private getDatos(){
    this.servi.getListCitas().subscribe(
      res => {
        this.citas = res
      },
      err=>console.log(err)
      
    )
  }

  public endCita(value){
    this.servi.updatedCita(value).subscribe(
      res => {
        this.message = res.message;
        this.getDatos();
        setTimeout(() => this.message=null, 5000);
      }
    )
  }

  public closeMessage(){
    this.message = null;
  }
}
