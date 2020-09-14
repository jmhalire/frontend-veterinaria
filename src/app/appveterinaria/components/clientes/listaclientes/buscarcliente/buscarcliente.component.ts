import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-buscarcliente',
  templateUrl: './buscarcliente.component.html',
  styleUrls: ['./buscarcliente.component.scss'],
})
export class BuscarclienteComponent implements OnInit {

  public title: string
  public nombre: string;
  
  @Output('nameClient') nameClient = new EventEmitter<string>();
  constructor() {
    this.title = 'Busqueda'
   }

  ngOnInit(): void {
      
  }

  public changeInput(e:any){
    this.nameClient.emit(this.nombre)
  }

}
