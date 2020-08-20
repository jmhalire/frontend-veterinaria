import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public titleList: string
  constructor() {
    this.titleList = 'LISTA DE CLIENTES'
   }

  ngOnInit(): void {
  }

}
