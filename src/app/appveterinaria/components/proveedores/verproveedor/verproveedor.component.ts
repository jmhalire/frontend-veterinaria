import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProveedoresService } from '@services/proveedores.service';
import { MessageService } from '@services/message.service';

// interfaces
import { Proveedor } from '@interfaces/proveedor';
import { Producto } from '@interfaces/producto'

@Component({
  selector: 'app-verproveedor',
  templateUrl: './verproveedor.component.html',
  styleUrls: ['./verproveedor.component.scss']
})
export class VerproveedorComponent implements OnInit {

  updatedForm: FormGroup
  public proveedor: Proveedor;
  public productos: Producto[];

  public loading: boolean;
  public message: boolean;

  public messageDate: string;

  public title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private proveedService: ProveedoresService,
    private messageService: MessageService,
    private builder: FormBuilder
  ) { 
    this.loading = false; //para mostrar los datos
    this.message = false;

    this.title = 'DATOS DE LA PROVEEDOR';
  }

  ngOnInit(): void {
    this.getDatos(); 
  }

  public formGrup() {
    this.updatedForm = this.builder.group(
      {
        id: this.proveedor.id,
        Nombre: new FormControl(this.proveedor.Nombre, Validators.required),
        Direccion: new FormControl(this.proveedor.Direccion, Validators.required),
        Telefono: new FormControl(this.proveedor.Telefono, Validators.required),
        Email: new FormControl(this.proveedor.Email, Validators.required)
      }
    );
  }

  //metodo para eliminar proveedor
  public deleted() {
    this.proveedService.deleteProveed(this.proveedor.id).subscribe(
      res => {
        const message = `el proveedor "${this.proveedor.Nombre}" fue Eliminado del sistema`;
        localStorage.setItem('message', message)
        this.router.navigate(['../../lista'], { relativeTo: this.route })

      },
      err => console.log(err)
    )
  }
  //metodo para actualizar
  public updated() {
    this.proveedService.editProveed(this.updatedForm.value).subscribe(
      res => {
        localStorage.setItem('message', res.message)

        this.loading = true;

        this.getDatos();

      }
    )
  }

  public getDatos() {
    const idProveedor = this.route.snapshot.paramMap.get('id');
    this.proveedService.getProveed(idProveedor.toString()).subscribe(
      res => {
        this.proveedor = res;
        this.productos = res.productos;
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
