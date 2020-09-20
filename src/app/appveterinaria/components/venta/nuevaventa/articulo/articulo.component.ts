import { Component, OnInit, Input, Host, Output, EventEmitter } from '@angular/core';

//interfaces
import { Producto } from '@interfaces/producto';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  @Input('producto') producto: Producto;
  @Input('index') index: any;
  @Output('deleted') deleted = new EventEmitter()
  public subtotal: number;

  constructor() {
   }

  ngOnInit(): void {
    this.subtotal = this.producto.Particulo;
  }

  public Cantidad(e: any){
    const can = e.target.value;
    this.subtotal = can*this.producto.Particulo
  }

  public delete(){
    //console.log(e);
    this.deleted.emit(this.index)
  }
}

