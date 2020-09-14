import { DetalleVenta } from "./detalleVenta";
import { User } from './user';
import { Cliente } from './cliente';

export interface Venta {
    id: number,
    usuario: User,
    cliente: Cliente
    detalleVentas: DetalleVenta[],
    Total: number,
    CreatedAt: Date
}