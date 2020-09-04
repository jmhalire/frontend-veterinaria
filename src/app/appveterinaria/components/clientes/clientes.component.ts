import { Component, OnInit, ViewChild, Host } from '@angular/core';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  @ViewChild(ListaclientesComponent) list: ListaclientesComponent;
  constructor() {

   }

  ngOnInit(): void {

  }


}
