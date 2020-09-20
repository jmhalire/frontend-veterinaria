import { Producto } from './producto';

export interface Categoria{
    id: number,
    Nombre: string,
    Descripcion: string,
    productos: Producto[]
    CreatedAt: Date,
    UpdatedAt: Date
}