import { Component, OnInit } from '@angular/core';
import { ReportesService } from '@services/reportes.service';
import { ServiciosService } from '@services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public fecha: string;
  public hora: string;
  public second: string;
  public city: any;
  public date: Date;
  constructor(
    private servi: ServiciosService
  ) { }

  ngOnInit(): void {  
    this.date = new Date();
    this.fecha = this.date.toLocaleDateString();
    this.getDatesHours();  
    this.weather();
  }

  public weather() {
    this.city = {main:{temp:'-',temp_min:'-',temp_max:'-',feels_like:'-'},weather:[{description:'-'}]}
    this.servi.getWeather().subscribe(
      res => { 
        this.city = res;
        console.log(res);

      },
      err => {
        console.log(err);
        
      }
    )
  }

  public getDatesHours(): void{
    this.date = new Date();
    let hour = this.date.toLocaleTimeString().split(':');
    this.hora = `${hour[0]} : ${hour[1]}`
    this.second = hour[2];
    setTimeout(() => {
      this.getDatesHours();
    }, 1000);
    
    //console.log(da.toLocaleString().split(' '));

  }
}
