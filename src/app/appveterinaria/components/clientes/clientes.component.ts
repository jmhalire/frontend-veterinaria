import { Component, OnInit, ViewChild, Host } from '@angular/core';

//interfaces
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public datos: Option[];
  constructor() {
    this.datos = [
      { nombre: 'lista de clientes', clase: 'btn-dark', url: 'lista' },
      { nombre: 'nuevo cliente', clase: 'btn-cyan', url: 'nuevo-cliente' },
      { nombre: 'deudores', clase: 'btn-warning', url: 'lista-deudores' },
    ]
   }

  ngOnInit(): void {

  }


}
