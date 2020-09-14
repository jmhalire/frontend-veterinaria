import { Venta } from './venta';

export interface User {
    id: number,
    Email: string,
    Password: string
    Names: string,
    FirstName: string,
    LastName: string,
    Celular: string,
    Address: string,
    Role: string,
    CreatedAt: Date,
    UpdatedAt: Date,
    ventas: Venta[]
}
