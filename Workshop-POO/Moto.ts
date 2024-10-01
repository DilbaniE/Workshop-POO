import { Vehiculo } from "./Vehiculo";
export class Moto extends Vehiculo {
    constructor(public nombre: string){
        super();
    }
   arrancar(): void {
       console.log(`La moto ${this.nombre} está arrancando`);
   }
  
}