import { Component, OnInit } from '@angular/core';
import { Venta } from '@interfaces/venta';
import { VentaService } from '@services/ventas.service';
import { Visita } from '@interfaces/visita';
import { ServiciosService } from '@services/servicios.service';
import { ReportesService } from '@services/reportes.service';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  public message: string;
  //datos
  public datosXmeses: any;
  public datosHoy: any;
  constructor(
    private reportService: ReportesService
  ){ }

  ngOnInit(): void {
    this.reportService.getIngresoMeses().subscribe(
      res => {
        this.datosXmeses = res;
      },
      error => {
        this.message = error.error.message;
      }
    );
    this.reportService.getIngresoHoy().subscribe(
      res => {
        this.datosHoy = res;
      }
    )
  };



  public closeMessage(){
    this.message = null;
  }
}
