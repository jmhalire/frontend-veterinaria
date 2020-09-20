import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss']
})
export class VisitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dat = new Date().toLocaleString();
    console.log(dat);
    
  }

}
