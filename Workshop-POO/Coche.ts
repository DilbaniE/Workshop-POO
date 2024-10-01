import { Vehiculo } from "./Vehiculo";
export class Coche extends Vehiculo{
    arrancar(): void {
        console.log("El coche esta arrancando");
    }
    
}