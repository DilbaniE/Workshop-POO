import { Persona } from "./Persona";
import { Direccion } from './Direccion';
export class Empleado extends Persona {
    salario: number
    constructor(nombre: string, edad: number, salario: number, direccion: Direccion) {
        super(nombre,edad, direccion, [])
        this.salario = salario;
    }

    trabajar(){
        console.log("Se trabajan 8 horas al dia")
    }

    override saludar(): void {
        console.log(`Hola ${this.nombre} tu edad es ${this.getEdad()} y el salario es de ${this.salario}`)
    }

    static desdeJson = (data: any): Empleado => new Empleado(data.nombre, data.edad, data.salario, data.direccion)

    objeJson = (): any => ({
        nombre: this.nombre,
        edad: this.getEdad(),
        salario: this.salario,
        direccion: this.direccion,
        vehiculos: this.vehiculos
        
    })
}