import { Producto } from "./Producto";

export class OrdenItem {
    producto: Producto;
    cantidad: number;

    // Hacer el el contructor
    constructor(producto: Producto, cantidad: number) {
        this.producto = producto;
        this.cantidad = cantidad;
    }


}