import { Component, OnInit } from '@angular/core';
import { VentaService } from "@services/ventas.service";

//interfaces
import { Articulo } from '@interfaces/articulo';
import { ClientesService } from '@services/clientes.service';
import { Cliente } from '@interfaces/cliente';
import { Visita } from '@interfaces/visita';
import { DetalleVenta } from "@interfaces/detalleVenta";
import { Categoria } from "@interfaces/categoria";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nuevaventa',
  templateUrl: './nuevaventa.component.html',
  styleUrls: ['./nuevaventa.component.scss']
})
export class NuevaventaComponent implements OnInit {

  public message: string;

  public articulos: Articulo[];
  public productos: Articulo[];
  public categorias: Categoria[];
  public clientes: Cliente[];
  public visitas: Visita[];
  public TotalArticle: number;
  public TotalServices: number;
  public Total: number;
  constructor(
    private ventaService: VentaService,
    private clientService: ClientesService
  ) {
    this.articulos = [];
    this.visitas = [];
    this.TotalArticle = 0;
    this.TotalServices = 0;
    this.Total = 0;
    this.message = null;
  }

  ngOnInit(): void {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)
    )
    this.ventaService.getCategorias().subscribe(
      res=>{
        this.categorias = res;
      },
      err=>console.log(err)
      
    );
  }

  //a un cliente seleccionado le asignamos sus visitas
  public selectClient(e: any) {
    this.visitas = [];
    this.clientes[e.target.value].visitas.forEach(element => {
      if (element.EstaPagado === 'NO') {
        this.visitas.push(element)
      }
    });
    this.TotalServicios();
  }

  public selectCategoria(e: any){
    this.productos = [];
    this.productos = this.categorias[e.target.value].articulos;
    console.log(this.productos);
    
  }

  // el producto seleccionado se agrega al la factura
  public selectProduct() {
    const prod = <HTMLSelectElement>document.getElementById('product')
    this.articulos.push(this.productos[prod.value])
    setTimeout(()=>{
      this.TotalArticulo();
    },100)    
  }

  //si existe cambio en la cantidad de productos a vender entonces cambia la suma total de precios
  public TotalArticulo() {
    this.TotalArticle = 0;
    const ele = <any>document.getElementById('lista')
    const child = ele.children
    for (let i = 0; i < child.length; i++) {
      const sub = child[i].children[0].children[5].children[0].value;
      const subtotal = parseFloat(sub)
      this.TotalArticle += subtotal;
    }
    setInterval(() => {
      this.Total = 0
      this.Total = this.TotalArticle + this.TotalServices;
    }, 300)
  }

  public TotalServicios() {
    this.TotalServices = 0;
    this.visitas.forEach(element => {
      this.TotalServices += element.Costo;
    });
    setInterval(() => {
      this.Total = 0
      this.Total = this.TotalArticle + this.TotalServices;
    }, 250)
  }

  // si el usuario o vendedor decide retirar el producto seleccionado
  public delete(e: any) {
    this.articulos.splice(e, 1);
    setTimeout(() => {
      this.TotalArticulo();
    }, 200)
  }

  //si se quiere retirar el costo del servicio del cliente
  public deleteService(i: any) {
    this.visitas.splice(i, 1);
    setTimeout(() => {
      this.TotalServicios();
    }, 200)

  }

  //generando la venta
  public Guardar(){
    let DetVenta: any[];
    DetVenta = [];
    const ele = <any>document.getElementById('lista')
    const child = ele.children
    for (let i = 0; i < child.length; i++) {
      const cant = child[i].children[0].children[3].children[0].value;
      const sub = child[i].children[0].children[5].children[0].value;
      console.log(cant);
      let detalle =  {
        Cantidad: cant,
        Punitario: this.articulos[i].Particulo,
        producto: i+1,
        Total: sub
      };
      DetVenta.push(detalle);
    }
    const c = <HTMLInputElement>document.getElementById('client')
    let vent = {
      usuario: 0,
      cliente: this.clientes[c.value].id,
      detalleVentas: DetVenta,
      Total: this.Total,
    }

    //enviando datos al servidor
    this.ventaService.saveVenta(vent).subscribe(
      res => {
        if(res.message){
          this.message = res.message;
          this.reiniciar();
        }
      },
      err=>{
        this.message = err;
      }
    )
  }

  //reinicia
  public reiniciar(){
    this.articulos = [];
    this.visitas = [];
    this.TotalArticle = 0;
    this.TotalServices = 0;
    this.Total = 0;
  }

  //close message
  public closeMessage(){
    this.message = null;
  }
}
