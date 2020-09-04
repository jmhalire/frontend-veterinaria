import { Mascot } from "./mascot";

export interface Vacuna{
    id: number,
    Tipo: string,
    Observacion: string,
    CreatedAt: Date,
    UpdatedAt: Date,
    mascota: Mascot
}