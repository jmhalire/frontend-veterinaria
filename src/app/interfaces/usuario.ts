import { Venta } from './venta';

export interface Usuario {
    id: number,
    Names: string,
    FirstName: string,
    LastName: string,
    Celular: string,
    Address: string,
    Email: string,
    Role: string,
    CreatedAt: Date,
    UpdatedAt: Date,
    ventas: Venta[]
}