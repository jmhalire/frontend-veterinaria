import { Articulo } from './articulo';

export interface Proveedor{
    id: number,
    Nombre: string,
    Direccion: string,
    Telefono: string,
    Email: string,
    CreatedAt: Date,
    articulos: Articulo[],
    UpdatedAt: Date
}