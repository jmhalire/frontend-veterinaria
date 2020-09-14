import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscarmascota',
  templateUrl: './buscarmascota.component.html',
  styleUrls: ['./buscarmascota.component.scss']
})
export class BuscarmascotaComponent implements OnInit {

  public title:string
  public nombre: string;
  
  @Output('nameMascot') nameMascot = new EventEmitter<string>();
  constructor() {
    this.title = 'Busqueda'
   }

  ngOnInit(): void {
      
  }

  public changeInput(e:any){
    this.nameMascot.emit(this.nombre)
  }

}
