import { Proveedor } from "./proveedor";
import { Categoria } from './categoria';
export interface Articulo{
    id: number,
    Codigo: string,
    Nombre: string,
    Pcompra: number,
    Particulo: number,
    Stock: number,
    proveedor: Proveedor,
    categoria: Categoria,
    CreatedAt: Date,
    UpdatedAt: Date
}