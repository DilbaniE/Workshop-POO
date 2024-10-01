import { Direccion } from './Direccion';
import { Vehiculo } from './Vehiculo';

export class Persona{
    nombre: string
    private edad: number
    direccion: Direccion
    vehiculos: Vehiculo[]

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] ) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = vehiculos
    }

    public getEdad(): number{
        return this.edad;
    }
    saludar(){
        console.log(`Tu nombre es: ${this.nombre} y tienes ${this.edad} y la ciudad es ${this.direccion}`)
    }

    ciudad(){
        console.log(`la ciudad es ${this.direccion.ciudad}`);
    }

    crearPersonaJson(): any {
        return{
            nombre: this.nombre,
            edad: this.edad,
            direccion: this.direccion
        };
    }
    
}

