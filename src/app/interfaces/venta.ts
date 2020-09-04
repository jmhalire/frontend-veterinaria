import { DetalleVenta } from "./detalleVenta";
import { Usuario } from './usuario';

export interface Venta {
    id: number,
    usuario: Usuario,
    CreatedAt: Date,
    detalleVentas: DetalleVenta[]
}