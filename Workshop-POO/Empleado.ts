import { Persona } from "./Persona";

export class Empleado extends Persona {
    salario: number
    constructor(nombre: string, edad: number, salario: number) {
        super(nombre,edad)
        this.salario = salario;
    }

    trabajar(){
        console.log("Se trabajan 8 horas al dia")
    }
}