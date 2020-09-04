import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { MascotasService } from '@services/mascotas.service';

@Component({
  selector: 'app-vacuna',
  templateUrl: './vacuna.component.html',
  styleUrls: ['./vacuna.component.scss']
})
export class VacunaComponent implements OnInit {

  @ViewChild('tipo') tipo: ElementRef;
  @ViewChild('observacion') observacion: ElementRef;

  @Input('index') index: number;
  ngOnInit(): void {
  }

  public datos(): any{
    const vacuna = {
      Tipo: this.tipo.nativeElement.value,
      Observacion: this.observacion.nativeElement.value
    }
    return vacuna
  }
}
