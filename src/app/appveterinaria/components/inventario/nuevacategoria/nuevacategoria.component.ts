import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InventarioService } from '@services/inventario.service';

@Component({
  selector: 'app-nuevacategoria',
  templateUrl: './nuevacategoria.component.html',
  styleUrls: ['./nuevacategoria.component.scss']
})
export class NuevacategoriaComponent implements OnInit {

  public createdForm: FormGroup;
  public message: string;
  public title: string
  constructor(
    private builder: FormBuilder,
    private inventario: InventarioService
  ) {
    this.title = 'Registrar nueva categoria de producto';
   }

  ngOnInit(): void {
    this.createdForm = this.builder.group(
      {
        Nombre : new FormControl('', Validators.required),
        Descripcion: new FormControl('', Validators.required),
      }
    )
  }
  //guardar producto
  public created(){
    this.inventario.saveCategoria(this.createdForm.value).subscribe(
      res => {
        this.message = res.message;
        this.createdForm.reset();
      }
    )
  }

  //closet message
  public closeMessage(){
    this.message = null;
  }

}
