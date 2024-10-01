import { Vehiculo } from "./Vehiculo";
export class Coche extends Vehiculo{
    constructor(public nombre: string){
        super();
    }
    arrancar(): void {
        console.log(`El coche ${this.nombre} está arrancando`);
    }
    
}