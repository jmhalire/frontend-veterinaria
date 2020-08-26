import { Component, OnInit } from '@angular/core';
import { VeterinariaService } from "@services/veterinaria.service";

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {

  public mascotas: any[]
  public titleList: string
  constructor(private veteService: VeterinariaService) { 
    this.titleList = 'LISTA DE MASCOTAS'
  }

  ngOnInit(): void {

    this.mascotas = this.veteService.getListaMascotas();
  }

}
