import { Component, OnInit, Input } from '@angular/core';
import { Chart } from "chart.js";

//interface
@Component({
  selector: 'app-dehoy',
  templateUrl: './dehoy.component.html',
  styleUrls: ['./dehoy.component.scss']
})
export class DehoyComponent implements OnInit {

  @Input('datosHoy') datosHoy: any;

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
            data: [this.datosHoy.ventasHoy.totalVentas,this.datosHoy.visitasHoy.totalVisitas],
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
