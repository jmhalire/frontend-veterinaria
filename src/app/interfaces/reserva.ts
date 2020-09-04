import { Mascot } from "./mascot";

export interface Reserva{
    idReserva: number,
    Descripcion: string,
    mascota: Mascot,
    CreatedAt: Date
}