import { Injectable } from '@angular/core';
import { Venta } from '@interfaces/venta';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private datos: any[];
  constructor() { 
    this.datos = []; 
    this.datosFecha();
  }

  private nombreMeses() {
    return [
      'Enero','Febero','Marzo','Abril','Mayo','Junio',
      'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
    ]
  }

  /**
   * fechaNombres
   */
  public datosFecha(): void {
    const fec = this.nombreMeses();
    let dat = new Date().toLocaleDateString();
    let fecha = dat.split('/');
    let mes =  parseInt(fecha[1]);
    let anio = parseInt( fecha[2]);
    for (let i = 0; i < 12; i++) {
      if(mes===0){
        mes = 12;
        anio = anio - 1;
      }
      let dato = {
        nombreMes: fec[mes-1],
        nroMes: mes,
        anio: anio,
        costo: 0
      }
      mes -= 1
      this.datos.push(dato)
      this.datos;
    }
  }

  /**
   * calculoDatos
   */
  public calculoDatos(ventas: Venta[]): any {
    ventas.forEach((element, index)=> {
      let dat = new Date(element.CreatedAt).toLocaleString().split(' ')[0].split('/');
      for (let i = 0; i < this.datos.length; i++) {
        if(this.datos[i].nroMes.toString()===dat[1].toString() && 
          this.datos[i].anio.toString()===dat[2].toString()){
          this.datos[i].costo += element.Total;
        }
      }
    });
    return this.datos.reverse();
  }

  /**
   * bacgroundColor
   */
  public backgroundColor() {
    let colors = [];
    for (let i = 0; i < 12; i++) {
      colors.push('rgba(0, 139, 139, 0.5)');  
    }
    return colors
  }

  /**
   * borderColor
   */
  public borderColor() {
    let colors = [];
    for (let i = 0; i < 12; i++) {
      colors.push('rgba(0, 150, 150, 1)');  
    }
    return colors
  }

  /**
   * labels
   */
  public getlabels() {
    let labels = []
    for (let i = 0; i < this.datos.length; i++) {
      let dato = `${this.datos[i].nombreMes} del ${this.datos[i].anio}`;
      labels.push(dato)      
    }
    return labels;
  }

}
