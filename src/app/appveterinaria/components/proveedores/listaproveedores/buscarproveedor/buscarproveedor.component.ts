import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
//import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-buscarproveedor',
  templateUrl: './buscarproveedor.component.html',
  styleUrls: ['./buscarproveedor.component.scss']
})
export class BuscarproveedorComponent implements OnInit {

  public title: string
  public nombre: string;
  
  @Output('nameProveed') nameProveed = new EventEmitter<string>();
  constructor() {
    this.title = 'Busqueda'
   }

  ngOnInit(): void {
  }

  public changeInput(e:any){
    this.nameProveed.emit(this.nombre)
  }
}

