import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarcliente',
  templateUrl: './buscarcliente.component.html',
  styleUrls: ['./buscarcliente.component.scss']
})
export class BuscarclienteComponent implements OnInit {

  public title: string
  constructor() {
    this.title = 'Busqueda'
   }

  ngOnInit(): void {
  }

}
