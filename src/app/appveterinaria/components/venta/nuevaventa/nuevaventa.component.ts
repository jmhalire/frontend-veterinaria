import { Component, OnInit } from '@angular/core';

//servicios
import { VentaService } from "@services/ventas.service";
import { ServiciosService } from "@services/servicios.service";

//interfaces
import { Producto } from '@interfaces/producto';
import { ClientesService } from '@services/clientes.service';
import { Cliente } from '@interfaces/cliente';
import { Visita } from '@interfaces/visita';
import { Categoria } from "@interfaces/categoria";
import { InventarioService } from '@services/inventario.service';

@Component({
  selector: 'app-nuevaventa',
  templateUrl: './nuevaventa.component.html',
  styleUrls: ['./nuevaventa.component.scss']
})
export class NuevaventaComponent implements OnInit {

  public message: string;
  public selectProducts: Producto[];
  public productos: Producto[];
  public categorias: Categoria[];
  public clientes: Cliente[];
  public visitas: Visita[];
  public TotalArticle: number;
  public TotalServices: number;
  public Total: number;
  constructor(
    private inventario: InventarioService,
    private clientService: ClientesService,
    private ventaService: VentaService,
    private serviService: ServiciosService
  ) {
    this.selectProducts = [];
    this.visitas = [];
    this.TotalArticle = 0;
    this.TotalServices = 0;
    this.Total = 0;
    this.message = null;
  }

  ngOnInit(): void {
    this.getDatosServer();
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

  public selectCategoria(e: any) {
    this.productos = [];
    this.productos = this.categorias[e.target.value].productos;
  }

  // el producto seleccionado se agrega al la factura
  public selectProduct() {
    const prod = <HTMLSelectElement>document.getElementById('product')
    this.selectProducts.push(this.productos[prod.value])
    setTimeout(() => {
      this.TotalArticulo();
    }, 100)
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
    this.selectProducts.splice(e, 1);
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
  public Guardar() {

    //datos de detalle venta
    let DetVenta: any[];
    DetVenta = [];
    const ele = <any>document.getElementById('lista')
    const child = ele.children
    for (let i = 0; i < child.length; i++) {
      const cant = child[i].children[0].children[3].children[0].value;
      const sub = child[i].children[0].children[5].children[0].value;
      let detalle = {
        producto: this.selectProducts[i].id,
        Cantidad: cant,
        Punitario: this.selectProducts[i].Particulo,
        Total: sub
      };
      DetVenta.push(detalle);
    }

    //datos de la venta
    if (DetVenta.length > 0) {
      const c = <HTMLInputElement>document.getElementById('client')
      let vent = {
        usuario: 0,
        cliente: this.clientes[c.value].id,
        detalleVentas: DetVenta,
        Total: this.Total,
      }

      //enviando datos de la venta ala servidor
      this.ventaService.saveVenta(vent).subscribe(
        res => {
          if (res.message) {
            this.message = res.message;
            //enviando datos de pagos sobre los servicios pendientes
            if (this.visitas.length > 0) {
              let idVisitas = [];
              this.visitas.forEach(visita => {
                idVisitas.push(visita.id)
              });
              this.serviService.updatedVisita(idVisitas).subscribe(
                res => {
                  this.message += `y ${res.message}`;
                  this.reiniciar();
                  this.getDatosServer();
                },
                err => this.message = err
              )
            }
            else{
              this.reiniciar();
              this.getDatosServer();
            }
          }
        },
        err => {
          this.message = err;
        }
      )
    }

  }

  //reinicia
  public reiniciar() {
    this.selectProducts = [];
    this.visitas = [];
    this.TotalArticle = 0;
    this.TotalServices = 0;
    this.Total = 0;
  }

  //close message
  public closeMessage() {
    this.message = null;
  }


  //obetenemos los datos del servoidor
  public getDatosServer() {
    this.clientService.getListaClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.log(err)
    )
    this.inventario.getCategorias().subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)

    );
  }
}
