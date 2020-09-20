import { Producto } from './producto';
import { Venta } from './venta';

export interface DetalleVenta {
    id: number,
    Cantidad: number,
    Punitario: number,
    producto: Producto
    Total: number,
    venta: Venta,
    CreatedAt: Date
}