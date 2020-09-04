import { Mascot } from './mascot';
import { Venta } from './venta';

export interface Cliente {
    id: number,
    Nombres: string,
    Apellidos: string,
    Email: string,
    Celular: string,
    Direccion: string,
    mascotas: Mascot[],
    ventas: Venta[],
    CreatedAt: Date,
    UpdatedAt: Date
}
