import { Component, OnInit, Input } from '@angular/core';
import { Mascot } from '@interfaces/mascot';
import { Cliente } from '@interfaces/cliente';

@Component({
  selector: 'app-detallesmascota',
  templateUrl: './detallesmascota.component.html',
  styleUrls: ['./detallesmascota.component.scss']
})
export class DetallesmascotaComponent implements OnInit {

  @Input('cliente') cliente: Cliente;
  @Input('mascota') mascota: Mascot;

  public title: string;

  constructor() {
    this.title = 'DATOS DE LA MASCOTA';
   }

  ngOnInit(): void {
  }

}
