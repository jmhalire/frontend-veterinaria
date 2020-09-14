import { Articulo } from './articulo';
import { Venta } from './venta';

export interface DetalleVenta {
    id: number,
    Cantidad: number,
    Punitario: number,
    producto: Articulo
    Total: number,
    venta: Venta,
    CreatedAt: Date
}