import { Component, OnInit, Input } from '@angular/core';
import { Mascot } from '@interfaces/mascot';

@Component({
  selector: 'app-datamascota',
  templateUrl: './datamascota.component.html',
  styleUrls: ['./datamascota.component.scss']
})
export class DatamascotaComponent implements OnInit {

  @Input() nameClient: string;
  @Input() mascotas: Mascot[];
  constructor() { }

  ngOnInit(): void {

  }

}
