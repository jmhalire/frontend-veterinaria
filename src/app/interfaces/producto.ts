import { Proveedor } from "./proveedor";
import { Categoria } from './categoria';
export interface Producto{
    id: number,
    Nombre: string,
    Pcompra: number,
    Particulo: number,
    Stock: number,
    proveedor: Proveedor,
    categoria: Categoria,
    CreatedAt: Date,
    UpdatedAt: Date
}