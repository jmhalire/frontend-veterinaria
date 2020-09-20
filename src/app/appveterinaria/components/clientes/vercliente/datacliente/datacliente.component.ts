import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '@interfaces/cliente';

@Component({
  selector: 'app-datacliente',
  templateUrl: './datacliente.component.html',
  styleUrls: ['./datacliente.component.scss']
})
export class DataclienteComponent implements OnInit {

  public title: string;
  public Cel: string;
  @Input('cliente') cliente: Cliente;
  constructor() { 
    this.title = 'Datos del cliente'
  }

  ngOnInit(): void {
    console.log(this.cliente[0]);
    
    setTimeout(()=>{
      this.Cel = `tel:${this.cliente.Celular}`;
    },100)
  }

}
