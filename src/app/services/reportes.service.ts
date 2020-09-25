import { Injectable } from '@angular/core';
//interfaces
import { Venta } from '@interfaces/venta';
import { Pormeses } from "@interfaces/pormeses";
import { Visita } from '@interfaces/visita';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor() { 
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
  public datosFecha(datos: Pormeses[]): Pormeses[] {
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
      let dato : Pormeses = {
        nombreMes: fec[mes-1],
        nroMes: mes,
        anio: anio,
        acumulado: 0
      }
      mes -= 1
      datos.push(dato)
      datos;
    }
    return datos
  }

  //calculoDatos para obtener total de ingrsos por mese
  public calculoDatos(datos: Pormeses[],ventas: Venta[]): Pormeses[] {
    ventas.forEach((element, index)=> {
      let dat = new Date(element.CreatedAt).toLocaleString().split(' ')[0].split('/');
      for (let i = 0; i < datos.length; i++) {
        if(datos[i].nroMes.toString()===dat[1].toString() && 
          datos[i].anio.toString()===dat[2].toString()){
          datos[i].acumulado += element.Total;
        }
      }
    });
    return datos;
  }

  //calculo para obtener numero de clientes que visitan por meses
  public calculoClientesXmeses(datos: Pormeses[],visitas: Visita[]): any{
    visitas.forEach((visita,index)=>{
      let dat = new Date(visita.CreatedAt).toLocaleString().split(' ')[0].split('/');
      for (let i = 0; i < datos.length; i++) {
        if(datos[i].nroMes.toString()===dat[1].toString() && 
          datos[i].anio.toString()===dat[2].toString()){
          datos[i].acumulado += 1;
        }
      }
    });
    return datos;
  }

  //bacgroundColor
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
  public getlabels(datos: Pormeses[]): string[] {
    let labels: string[] = []
    for (let i = 0; i < datos.length; i++) {
      let dato = `${datos[i].nombreMes} del ${datos[i].anio}`;
      labels.push(dato)      
    }
    return labels;
  }

}
