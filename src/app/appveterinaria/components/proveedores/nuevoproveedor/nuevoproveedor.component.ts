import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

//services
import { InventarioService } from "@services/inventario.service";
import { ProveedoresService } from '@services/proveedores.service';

@Component({
  selector: 'app-nuevoproveedor',
  templateUrl: './nuevoproveedor.component.html',
  styleUrls: ['./nuevoproveedor.component.scss']
})
export class NuevoproveedorComponent implements OnInit {

  createdForm: FormGroup;
  public title: string;
  public message: string;
  constructor(
    private builder: FormBuilder,
    private proveedService: ProveedoresService,
  ) {
    this.title = "registrar nuevo proveedor"
   }

  ngOnInit(): void {
    this.createdForm = this.builder.group(
      {
        Nombre : new FormControl('', Validators.required),
        Direccion: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        Telefono: new FormControl('', Validators.required)
      }
    )
  }

  public created(){
    console.log(this.createdForm.value);
    this.proveedService.createdProveed(this.createdForm.value).subscribe(
      res => {
        this.message = res.message;
        this.complete();
      },
      error => {
        this.message = error.error.message;
        this.complete();
      }
    )
    //this.signinForm.reset();
  }

  public closeMessage(){
    this.message = null;
  }

  private complete(){
    this.createdForm.reset();
    setTimeout(() => {
      this.message = null;
    }, 10000);
  }
}
