import { Direccion } from './Direccion';

export class Persona{
    nombre: string
    private edad: number
    direccion: Direccion

    constructor(nombre: string, edad: number, direccion: Direccion ) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
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
    
}

