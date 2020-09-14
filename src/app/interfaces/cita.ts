import { Cliente } from "./cliente";
import { Mascot } from "./mascot"

export interface Cita {
    id: number,
    Tipo: string,
    cliente: Cliente,
    mascota: Mascot,
    Motivo: string,
    Dia: Date,
    Hora: Date,
    CreatedAt: Date,
}