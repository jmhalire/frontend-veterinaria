import { Mascot } from "./mascot";
import { Vacuna } from './vacuna';
import { Cliente } from './cliente';

export interface Visita {
    id: number,
    Motivo: string,
    Sintomas: string,
    Diagnostico: string,
    Tratamiento: string,
    Costo: number,
    EstaPagado: string,
    mascota: Mascot,
    cliente: Cliente
    vacunas: Vacuna[]
    CreatedAt: Date
}