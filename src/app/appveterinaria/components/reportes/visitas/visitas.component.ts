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
  //message
  public message: string;
  constructor(
    private reportService: ReportesService
  ) {
    this.graph = [];
  }

  ngOnInit(): void {
    this.reportService.getVisitaMeses().subscribe(
      res => {
        this.graphBar(res)
        console.log(res);
      },
      err => {
        this.message = err.error.message;
      }
    )
  }

  public graphBar(visitasMeses) {
    let data = [];
    visitasMeses.datos.forEach(element => {
      data.push(element.acumulado)
    });
    var ctx = <HTMLCanvasElement>document.getElementById('bar');
    this.graph = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: visitasMeses.labels,
        datasets: [
          {
            label: 'cantidad de visitas del mes',
            data: data,
            backgroundColor: visitasMeses.backgroundColor,
            borderColor: visitasMeses.borderColor,
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

  public closeMessage(){
    this.message = null;
  }
}
