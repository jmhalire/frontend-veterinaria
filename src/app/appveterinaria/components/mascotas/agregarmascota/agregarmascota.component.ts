import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  createdForm : FormGroup
  public title: string;
  public clientes: Cliente[];
  public Especies: any[];
  public Generos: any[];
  public message: string;

  @ViewChild('nombres') nombres: ElementRef;
  @ViewChild('especie') especie: ElementRef;
  @ViewChild('sexo') sexo: ElementRef;
  @ViewChild('peso') peso: ElementRef;
  @ViewChild('cliente') cliente: ElementRef;


  constructor(
    private clientService: ClientesService,
    private mascotSerice: MascotasService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) {
    this.title = 'AGREGAR NUEVA MASCOTA'
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;       
      }
    )
    this.Especies = this.mascotSerice.getEspecies();
    this.Generos = this.mascotSerice.getGeneros();
  }

  public created(){
    let  DatosMascota: any = {
      Nombres : this.nombres.nativeElement.value,
      Especie : this.Especies[this.especie.nativeElement.value].nombre,
      Sexo : this.Generos[this.sexo.nativeElement.value].nombre,
      cliente : this.cliente.nativeElement.value,
    }

    this.mascotSerice.createdMascota(DatosMascota).subscribe(
      res => {
        if(res.value){
          console.log(res.message);
          localStorage.setItem('message', res.message)
          this.router.navigate(['../lista'],{relativeTo: this.activeRouter})
        }
      },
      err =>{
        this.message = err.error.message
        
      }
    )
  }

}
