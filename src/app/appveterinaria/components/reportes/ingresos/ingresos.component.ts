import { Component, OnInit } from '@angular/core';
import { Venta } from '@interfaces/venta';
import { VentaService } from '@services/ventas.service';
import { Visita } from '@interfaces/visita';
import { ServiciosService } from '@services/servicios.service';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  public ventas: Venta[];
  public visitas: Visita[]
  public ventasHoy: Venta[];
  public visitasHoy: Visita[];
  public HorasVenta: string[];
  public HorasVisita: string[];
  public totalVentas: number;
  public totalVisitas: number;
  constructor(
    private ventasService: VentaService,
    private servi: ServiciosService
  ){ }

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe(
      res => {
        this.ventas = res;
        this.ventasDeHoy();
      },
      err => {
        console.log(err);
      }
    )
    this.servi.getListVisitas().subscribe(
      res => {
        this.visitas = res;
        this.visitasDeHoy();
      }
    )
  }

  private ventasDeHoy(){
    this.HorasVenta = [];
    this.ventasHoy = [];
    this.totalVentas = 0;
    let hoy = new Date().toLocaleString().split(' ');
    this.ventas.forEach(element => {
      let dato = new Date(element.CreatedAt).toLocaleString().split(' ');      
      if(dato[0]===hoy[0]){
        this.HorasVenta.push(dato[1])
        this.totalVentas += element.Total;
        this.ventasHoy.push(element);
      }
    });
  }

  private visitasDeHoy(){
    this.HorasVisita = [];
    this.visitasHoy = [];
    this.totalVisitas = 0;
    let hoy = new Date().toLocaleString().split(' ');
    this.visitas.forEach(element => {
      let dato = new Date(element.CreatedAt).toLocaleString().split(' ');      
      if(dato[0]===hoy[0]){
        this.HorasVisita.push(dato[1])
        this.totalVisitas += element.Costo;
        this.visitasHoy.push(element);
      }
    });
  }
}
