class Libro{
    id:string
    name:string
    autor:string

    constructor(id:string, name:string, autor:string){
        //this: Es una palabra reservada para acceder a los atributos
        this.id = id
        this.name = name
        this.autor = autor
    } 
}

// objeto
const libro1 = new Libro("01", "Principito", "Luis")
const libro2 = new Libro("02", "El sapo", "Rafael Pombo")