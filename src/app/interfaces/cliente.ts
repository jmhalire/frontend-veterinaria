import { Mascot } from './mascot';
import { Venta } from './venta';
import { Visita } from './visita';

export interface Cliente {
    id: number,
    Nombres: string,
    Apellidos: string,
    Email: string,
    Celular: string,
    Direccion: string,
    mascotas: Mascot[],
    ventas: Venta[],
    visitas: Visita[],
    CreatedAt: Date,
    UpdatedAt: Date
}
