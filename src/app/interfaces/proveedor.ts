import { Producto } from './producto';

export interface Proveedor{
    id: number,
    Nombre: string,
    Direccion: string,
    Telefono: string,
    Email: string,
    CreatedAt: Date,
    productos: Producto[],
    UpdatedAt: Date
}