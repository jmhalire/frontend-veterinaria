import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  private graph: any[]
  constructor() { 
    this.graph = []
  }

  ngOnInit(): void {
  }

  public graphPie() {
    var ctx = <HTMLCanvasElement>document.getElementById('pie');
    this.graph = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 10],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255,1)',
              'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 3
          }
        ]
      },
      options: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            boxWidth: 20,
            fontColor: 'black',
            padding: 8
          }
        }
      }
    });
  }
}
