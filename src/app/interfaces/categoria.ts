import { Articulo } from './articulo';

export interface Categoria{
    id: number,
    Nombre: string,
    Descripcion: string,
    articulos: Articulo[]
    CreatedAt: Date,
    UpdatedAt: Date
}