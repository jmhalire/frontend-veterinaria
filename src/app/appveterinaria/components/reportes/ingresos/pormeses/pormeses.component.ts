import { Component, OnInit, Input } from '@angular/core';
import { Chart } from "chart.js";

//services
import { VentaService } from '@services/ventas.service';
import { ReportesService } from "@services/reportes.service";

//interface
import { Venta } from "@interfaces/venta";
import { Pormeses } from '@interfaces/pormeses';

@Component({
  selector: 'app-pormeses',
  templateUrl: './pormeses.component.html',
  styleUrls: ['./pormeses.component.scss']
})
export class PormesesComponent implements OnInit {

  public graph: any;
  @Input('datosXmeses') datosXmeses:any;
  constructor(
    private reportService: ReportesService
  ) {
    this.graph = [];
  }

  ngOnInit(): void {
    this.graphBar();
  }
  
  public graphBar() {
    
    //let datos : Pormeses[] = this.reportService.calculoDatos(this.datosFecha,this.ventas);
    let data = []
    this.datosXmeses.datos.forEach(element => {
      data.push(element.acumulado)
    });

    var ctx = <HTMLCanvasElement>document.getElementById('bar');
    this.graph = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.datosXmeses.labels,
        datasets: [
          {
            label: 'Ingreso total S/.',
            data: data,
            backgroundColor: this.datosXmeses.backgroundColor,
            borderColor: this.datosXmeses.borderColor,
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
