import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientesService } from '@services/clientes.service';
import { ServiciosService } from '@services/servicios.service';

import { Mascot } from '@interfaces/mascot';
import { Cliente } from '@interfaces/cliente';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.scss']
})
export class VisitaComponent implements OnInit {

  public vacunas: any[]
  public mascotas: Mascot[];
  public clientes: Cliente[];
  public title: string;
  public message: string
  @ViewChild('vacuna') vacuna: ElementRef;

  @ViewChild('client') client: ElementRef;
  @ViewChild('mascot') mascot: ElementRef;
  @ViewChild('motivo') motivo: ElementRef;
  @ViewChild('sintoma') sintoma: ElementRef;
  @ViewChild('diagnostico') diagnostico: ElementRef;
  @ViewChild('tratamiento') tratamiento: ElementRef;
  @ViewChild('costo') costo: ElementRef;
  @ViewChild('noPago') noPago: ElementRef;
  @ViewChild('siPago') siPago: ElementRef;

  constructor(
    private clientService: ClientesService,
    private service: ServiciosService
  ) {
    this.title = 'REGISTRAR NUEVA VISITA'
    this.vacunas = []
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)

    )
  }

  public addVacuna() {
    this.vacunas.push('new');
  }
  public remove() {
    let last = this.vacuna.nativeElement.lastElementChild;
    last.parentNode.removeChild(last)
    this.vacunas.pop()
  }

  public selectClient(e: any) {
    this.mascotas = this.clientes[e.target.value].mascotas;
  }


  //generar nueva visita
  public RegistrarVisita() {
    let datosVisita = this.datosVisita();
    let datosVacuna = this.datosVacuna();

    this.service.RegistrarVisita(datosVisita).subscribe(
      res => {
        if (datosVacuna.length > 0) {
          this.service.RegistrarVacuna(datosVacuna).subscribe(
            res => {
              this.message = res.message
              this.resetForm();
            }
          )
        }
        else {
          this.message = res.message;
          this.resetForm();
        }
      },
      err => console.log(err)

    )
  }


  public datosVisita(): any {
    let checked: string;
    if (this.siPago.nativeElement.checked) {
      checked = 'SI';
    } else {
      checked = 'NO';
    }
    const visita = {
      Motivo: this.motivo.nativeElement.value,
      Sintomas: this.sintoma.nativeElement.value,
      Diagnostico: this.diagnostico.nativeElement.value,
      Tratamiento: this.tratamiento.nativeElement.value,
      Costo: this.costo.nativeElement.value,
      EstaPagado: checked,
      mascota: this.mascotas[this.mascot.nativeElement.value].id,
      cliente: this.clientes[this.client.nativeElement.value].id
    }
    return visita;

  }

  public datosVacuna(): any[] {
    let vacunas: any[]
    vacunas = [];
    let value1: HTMLInputElement;
    let value2: HTMLInputElement;
    if (this.vacunas.length > 0) {
      let hijos = this.vacuna.nativeElement.children;
      for (let i = 0; i < hijos.length; i++) {
        const element = hijos[i].children[1];
        const subElement1 = element.children[0];
        const subElement2 = element.children[1];
        value1 = subElement1.children[1];
        value2 = subElement2.children[1];
        let vacuna = {
          Tipo: value1.value,
          Observacion: value2.value,
          mascota: this.mascotas[this.mascot.nativeElement.value].id
        }
        vacunas.push(vacuna)
      }
    }
    return vacunas;
  }

  //formateamos el formulario
  private resetForm(){
    this.motivo.nativeElement.value = "No hay";
    this.sintoma.nativeElement.value = "No hay";
    this.diagnostico.nativeElement.value = "No hay";
    this.tratamiento.nativeElement.value = "No hay";
    this.costo.nativeElement.value = "0";
    this.vacunas = [];
  }
  //close message
  public closeMessage() {
    this.message = null;
  }
}
