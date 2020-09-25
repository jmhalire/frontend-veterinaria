import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '@services/clientes.service';
import { Cliente } from '@interfaces/cliente';
import { MascotasService } from '@services/mascotas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregarmascota',
  templateUrl: './agregarmascota.component.html',
  styleUrls: ['./agregarmascota.component.scss']
})
export class AgregarmascotaComponent implements OnInit {

  datosMacot : FormGroup
  public title: string;
  public clientes: Cliente[];
  public Especies: any[];
  public Generos: any[];
  public message: string;
  public sendMascot: boolean;
  constructor(
    private clientService: ClientesService,
    private mascotService: MascotasService,
    private builder: FormBuilder
    ) {
    this.title = 'AGREGAR NUEVA MASCOTA';
    this.sendMascot = false;
  }

  ngOnInit(): void {
    this.datosMacot = this.builder.group(
      {
        Nombres: new FormControl('', Validators.required),
        Especie: new FormControl('', Validators.required),
        Sexo: new FormControl('',Validators.required),
        cliente: new FormControl('', Validators.required)
      }
    )

    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;     
      }
    )
    this.Especies = this.mascotService.getEspecies();
    this.Generos = this.mascotService.getGeneros();    
  }

  public created(){
    this.sendMascot = true;
    this.mascotService.createdMascota(this.datosMacot.value).subscribe(
      res => {
        this.message = res.message;
        this.datosMacot.reset();
        this.sendMascot = false;
        setTimeout(() => { this.message = null}, 5000);
      },
      err =>{
        this.message = err.error.message
        console.log(err);
        
      }
    )
  }

  public closeMessage(){
    this.message = null;
  }

}
