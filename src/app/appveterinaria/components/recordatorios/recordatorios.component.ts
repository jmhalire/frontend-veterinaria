import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss']
})
export class RecordatoriosComponent implements OnInit {

  public title: string;
  constructor() { 
    this.title = 'RECORDATORIOS'
  }

  ngOnInit(): void {
  }

}
