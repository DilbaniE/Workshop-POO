export class Persona {
    nombre: string
    private edad: number

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    public getEdad(): number{
        return this.edad;
    }
    saludar(){
        console.log(`Tu nombre es: ${this.nombre} y tienes ${this.edad}`)
    }

    
}

