import { Cliente } from './cliente';
import { Visita } from "./visita";
import { Vacuna } from "./vacuna"
import { Reserva } from './reserva';
import { Cita } from './cita';

export interface Mascot {
    id: number,
    Nombres: string,
    Especie: string,
    Sexo: string,
    cliente: Cliente,
    visitas: Visita[],
    vacunas: Vacuna[],
    reservas: Reserva[],
    citas: Cita[],
    UpdatedAt: Date,
    CreatedAt: Date
}