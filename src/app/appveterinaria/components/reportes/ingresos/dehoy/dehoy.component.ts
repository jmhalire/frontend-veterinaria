import { Component, OnInit, Input } from '@angular/core';
import { Chart } from "chart.js";

//interface
import { Venta } from "@interfaces/venta";
import { Visita } from '@interfaces/visita';

@Component({
  selector: 'app-dehoy',
  templateUrl: './dehoy.component.html',
  styleUrls: ['./dehoy.component.scss']
})
export class DehoyComponent implements OnInit {

  @Input('ventasHoy') ventasHoy:Venta[];
  @Input('visitasHoy') visitasHoy:Visita[];
  @Input('HorasVenta') HorasVenta: string[];
  @Input('HorasVisita') HorasVisita: string[];
  @Input('totalVentas') totalVentas: number;
  @Input('totalVisitas') totalVisitas: number;

  public graph: any;
  constructor(
  ) { }

  ngOnInit(): void {
    this.graphPie();
  }

  public graphPie() {

    var ctx = <HTMLCanvasElement>document.getElementById('pie');
    this.graph = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['ventas', 'visitas'],
        datasets: [
          {
            label: 'Ingreso total S/.',
            data: [this.totalVentas,this.totalVisitas],
            backgroundColor: ['rgba(180, 100, 10, 1)','rgba(100, 50, 140, 1)'],
            borderWidth: 2
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'top',
          labels: { boxWidth: 20, fontColor: 'black', padding: 5 }
        }
      }
    });
  }

}
