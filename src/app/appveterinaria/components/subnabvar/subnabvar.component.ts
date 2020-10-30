import { Component, OnInit, Input } from '@angular/core';

//interfaces
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-subnabvar',
  templateUrl: './subnabvar.component.html',
  styleUrls: ['./subnabvar.component.scss']
})
export class SubnabvarComponent implements OnInit {

  @Input('datos') datos: Option[];
  constructor() { }

  ngOnInit(): void {
  }

}
