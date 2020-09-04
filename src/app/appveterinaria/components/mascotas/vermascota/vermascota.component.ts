import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MascotasService } from '@services/mascotas.service';
import { MessageService } from '@services/message.service';

// interfaces
import { Mascot } from '@interfaces/mascot';
import { Cliente } from '@interfaces/cliente';
import { Visita } from '@interfaces/visita';
import { Vacuna } from '@interfaces/vacuna';
import { Reserva } from '@interfaces/reserva';


@Component({
  selector: 'app-vermascota',
  templateUrl: './vermascota.component.html',
  styleUrls: ['./vermascota.component.scss']
})
export class VermascotaComponent implements OnInit {

  updatedForm: FormGroup
  public mascota: Mascot;
  public cliente: Cliente;
  public visitas: Visita[];
  public vacunas: Vacuna[];
  public reservas: Reserva[];

  public loading: boolean;
  public message: boolean;

  public duenio: string;

  public messageDate: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mascotService: MascotasService,
    private messageService: MessageService,
    private builder: FormBuilder
  ) {
    this.loading = true;
    this.message = false;
  }

  ngOnInit(): void {
    this.getDatos();

  }

  public formGrup() {
    this.updatedForm = this.builder.group(
      {
        idMascota: this.mascota.id,
        Nombres: new FormControl(this.mascota.Nombres, Validators.required),
        Especie: new FormControl(this.mascota.Especie, Validators.required),
        Sexo: new FormControl(this.mascota.Sexo, Validators.required)
      }
    );
  }


  //metodo para eliminar cliente
  public deleted() {
    this.mascotService.deleteMascota(this.mascota.id).subscribe(
      res => {
        const message = `la mascota "${this.mascota.Nombres}" fue Eliminado del sistema`;
        localStorage.setItem('message', message)
        this.router.navigate(['../../lista'], { relativeTo: this.route })

      },
      err => console.log(err)
    )
  }

  //metodo para actuakizar
  public updated() {
    this.mascotService.editMascota(this.updatedForm.value).subscribe(
      res => {
        localStorage.setItem('message', res.message)

        this.loading = true;

        this.getDatos();

      }
    )
  }

  public getDatos() {
    const idMascota = this.route.snapshot.paramMap.get('id');

    this.mascotService.getMascota(idMascota.toString()).subscribe(
      res => {
        this.mascota = res;
        this.cliente = res.cliente;
        this.visitas = res.visitas;
        this.vacunas = res.vacunas;
        this.reservas = res.reservas;
        this.duenio = `${this.cliente.Nombres}  ${this.cliente.Apellidos}`;
        this.formGrup();
        this.loading = false;

        this.messageDate = this.messageService.getMessage();
        if(this.messageDate.length>0){
          this.message = true;
          localStorage.removeItem('message');
        }
      }
    );
  }
}
