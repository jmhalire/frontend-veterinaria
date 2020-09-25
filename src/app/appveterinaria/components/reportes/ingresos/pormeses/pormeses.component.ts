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
  @Input('ventas') ventas:Venta[];
  public datos: Pormeses[];
  public datosFecha: Pormeses[];
  constructor(
    private reportService: ReportesService
  ) {
    this.graph = [];
    this.datos = [];
  }

  ngOnInit(): void {
    this.datosFecha = this.reportService.datosFecha(this.datos);
    this.graphBar();
  }
  
  public graphBar() {
    
    let datos : Pormeses[] = this.reportService.calculoDatos(this.datosFecha,this.ventas);
    let data = []
    datos.forEach(element => {
      data.push(element.acumulado)
    });

    var ctx = <HTMLCanvasElement>document.getElementById('bar');
    this.graph = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.reportService.getlabels(this.datosFecha),
        datasets: [
          {
            label: 'Ingreso total S/.',
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
