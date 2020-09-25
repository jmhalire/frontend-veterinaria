import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '@services/inventario.service';

//interface
import { Categoria } from "@interfaces/categoria";
import { Proveedor } from '@interfaces/proveedor';
@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.scss']
})
export class NuevoproductoComponent implements OnInit {

  public formArticulo: FormGroup;
  public message: string;
  public title: string
  public categorias: Categoria[];
  public proveedores: Proveedor[];
  constructor(
    private builder: FormBuilder,
    private inventario: InventarioService
  ) {
    this.title = 'Registrar nuevo producto'
  }

  ngOnInit(): void {
    this.inventario.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      }
    )
    this.inventario.getCategorias().subscribe(
      res => {
        this.categorias = res;
      }
    )
    this.formArticulo = this.builder.group(
      {
        proveedor: new FormControl('', Validators.required),
        categoria: new FormControl('', Validators.required),
        Codigo: new FormControl('', Validators.required),
        Nombre: new FormControl('', Validators.required),
        Pcompra: new FormControl('', Validators.required),
        Particulo: new FormControl('', Validators.required),
        Stock: new FormControl('', Validators.required),
      }
    )
  }

  //guardar nuevo articulo
  public created() {
    this.inventario.saveProducto(this.formArticulo.value).subscribe(
      res => {
        this.message = res.message;
        this.formArticulo.reset();
        setTimeout(() => {
          this.message = null;
        },4000)
      }
    )
  }

  //closet message
  public closeMessage() {
    this.message = null;
  }
}