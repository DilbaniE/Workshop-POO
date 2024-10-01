import { MetodoPago } from "../models/metodo-pago";

export class EfectyMetodoPago implements MetodoPago{
    procesarPago(totalOrden: number): void {
        console.log(`Efecty metodo pago ${totalOrden}`)
    }
}