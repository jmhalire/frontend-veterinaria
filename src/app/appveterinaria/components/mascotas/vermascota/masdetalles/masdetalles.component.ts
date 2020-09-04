import { Component, OnInit, Input } from '@angular/core';

//interfaces
import { Visita } from '@interfaces/visita';
import { Vacuna } from '@interfaces/vacuna';
import { Reserva } from '@interfaces/reserva';

@Component({
  selector: 'app-masdetalles',
  templateUrl: './masdetalles.component.html',
  styleUrls: ['./masdetalles.component.scss']
})
export class MasdetallesComponent implements OnInit {

  @Input('visitas') visitas: Visita[];
  @Input('vacunas') vacunas: Vacuna[];
  @Input('reservas') reservas: Reserva[];

  constructor() { }

  ngOnInit(): void {
  }

}
