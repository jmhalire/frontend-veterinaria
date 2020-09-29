import { Component, OnInit } from '@angular/core';
import { User } from '@interfaces/user';
import { ClientesService } from '@services/clientes.service';
import { MascotasService } from '@services/mascotas.service';
import { ServiciosService } from '@services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public admin: boolean;
  public fecha: string;
  public hora: string;
  public second: string;
  public city: any;
  public date: Date;
  public countClient: number;
  public countMascot: number;
  public countVisita: number;

  constructor(
    private servi: ServiciosService,
    private clientService: ClientesService,
    private mascotService: MascotasService
  ) { }

  ngOnInit(): void {  
    this.isAdmin();
    this.getDatosSitema()
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

  public getDatosSitema(): void{
    this.clientService.countClient().subscribe(
      res => {
        this.countClient = res.count;
      },
      err=>console.log(err)
    );
    this.mascotService.countMascota().subscribe(
      res => {
        this.countMascot = res.count;
      },
      err => console.log(err)
      
    );
    this.servi.countVisita().subscribe(
      res => {
        this.countVisita = res.count;
      }
    )
  }

  public isAdmin(){
    let user = <User>JSON.parse(localStorage.getItem('user'));
    if(user.Role==='ADMIN'){
      this.admin = true;
    }
    else{
      this.admin = false
    }
  }
}
