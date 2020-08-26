import { Component, OnInit } from '@angular/core';
import { VeterinariaService } from "@services/veterinaria.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public clientes: any[]
  public titleList: string
  constructor(private veteService: VeterinariaService) {
    this.titleList = 'LISTA DE CLIENTES'
    this.clientes = [];
   }

  ngOnInit(): void {

    this.clientes =  this.veteService.getListaClientes()
    console.log(this.clientes);
    
  }

}
