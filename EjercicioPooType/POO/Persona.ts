class Persona {
    name: string
    age: number
    lastname: string

    //sobrecarga de constructores: deinicion de las firmas
    constructor(name: string);
    constructor(name:string, ege:number);
    constructor(name:string, age:number, lastname: string )

    //implementacion del constructor
    // ? = opcional
    constructor(name:string, age?:number, lastname?:string){
        this.name = name
        if(age){
            this.age =  age
        }
        if (lastname) {
            this.lastname = lastname
        }
    }
}

const persona1 = new Persona("Dilbani")
const persona2 = new Persona("Dil", 26)
const persona3 = new Persona("Bani", 26, "Enriquez")