import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '@interfaces/producto';
import { InventarioService } from '@services/inventario.service';

@Component({
  selector: 'app-verproducto',
  templateUrl: './verproducto.component.html',
  styleUrls: ['./verproducto.component.scss']
})
export class VerproductoComponent implements OnInit {

  @ViewChild('newStock') newStock: ElementRef;
  public message: string;
  public producto: Producto;
  constructor(
    private route: ActivatedRoute,
    private inventService: InventarioService
  ) { }

  ngOnInit(): void {
    this.getDates();
  }

  public updatedStock(){
    let date = {
      id: this.producto.id,
      stock: this.newStock.nativeElement.value
    }
    this.inventService.updatedStockProduct(date).subscribe(
      res => {
        this.message = res.message;
        this.getDates();
        setTimeout(()=>this.message=null,5000);
      }
    )
  }

  public getDates(){
    const Id = this.route.snapshot.paramMap.get('id');
    this.inventService.getProducto(Id).subscribe(
      res => {
        this.producto = res;
      }
    )
  }

  public closeMessage(){
    this.message = null
  }

}
