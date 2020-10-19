import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public title: string
  public nombre: string;
  
  @Output('name') name = new EventEmitter<string>();
  constructor() {
    this.title = 'Busqueda'
   }

  ngOnInit(): void {
      
  }

  public changeInput(e:any){
    this.name.emit(this.nombre)
  }

}
