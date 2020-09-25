import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '@services/inventario.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  public data: any[]
  public type: string;
  public height : number;
  public width: number;
  public columnNames: string[]
  public options: any;
  public productFavory: any[];
  public valor: number;
  constructor(
    private inventService: InventarioService
  ) {
    this.valor = 650;
    this.width = 1050;
    this.height = 550;
    this.type = 'PieChart';
    this.columnNames = ['Nombre_Producto', 'Cantidad'];
    this.options = {
      colors: ['#43382f','#0098c3','#fcb045','#ab4a05','#064e4e','#ff0000','#00366d','#060d4e','#5a3300','#fcb045'],
      is3D: true
    };
  }

  ngOnInit(): void {
    this.inventService.getReportProductFavory().subscribe(
      res => {
        this.productFavory = res;
        this.data = [];
        this.productFavory.forEach(element => {
          let dat = []
          dat.push(element.producto_Nombre);
          dat.push(parseInt(element.ProductCantidad));
          this.data.push(dat);
        });
        console.log(this.data);
        
      }
    )
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let screenWidth = event.target.innerWidth
    if(screenWidth>500 && screenWidth<650){
      if(screenWidth<this.valor){
        this.width -= 3;
        this.height -= 3;
      }
      else{
        this.width += 3;
        this.height += 3;
      }
      this.valor = screenWidth;
      
    }
    if(screenWidth>=650){
      this.width = 1050;
      this.height = 550;
    }
  }
}
