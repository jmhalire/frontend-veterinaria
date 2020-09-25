import { Component, Input, OnInit } from '@angular/core';
import { Chart } from "chart.js";

import { Venta } from '@interfaces/venta';
import { ReportesService } from '@services/reportes.service';
import { VentaService } from '@services/ventas.service';
import { Pormeses } from '@interfaces/pormeses';
import { ServiciosService } from '@services/servicios.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {

  public graph: any;
  public datos: Pormeses[];
  public datosFecha: Pormeses[];
  public datosCalc: Pormeses[];
  constructor(
    private reportService: ReportesService,
    private serviService: ServiciosService,
  ) {
    this.graph = [];
    this.datos = [];
  }

  ngOnInit(): void {
    this.serviService.getListVisitas().subscribe(
      res => {
        this.datosFecha = this.reportService.datosFecha(this.datos);
        this.datosCalc = this.reportService.calculoClientesXmeses(this.datosFecha,res);
        this.graphBar();
      }
    )
  }

  public graphBar() {
    let data = [];
    this.datosCalc.forEach(element => {
      data.push(element.acumulado)
    });
    var ctx = <HTMLCanvasElement>document.getElementById('bar');
    this.graph = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportService.getlabels(this.datosFecha),
        datasets: [
          {
            label: 'cantidad de visitas del mes',
            data: data,
            backgroundColor: this.reportService.backgroundColor(),
            borderColor: this.reportService.borderColor(),
            borderWidth: 2
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: { boxWidth: 20, fontColor: 'black', padding: 1 }
        }
      }
    });
  }
}
