export class Estudiante{
    nombre: string;
    edad: number;
    calificaciones: Array<number>;
   
    constructor(nombre:string, edad:number, calificaciones:Array<number>){
        this.nombre = nombre
        this.edad = edad
        this.calificaciones = calificaciones 
    }

    
    calcularPromedioCalificaciones():number{

        let sumaNotas = 0;
        const totalNotas = this.calificaciones.length;

        for(let i=0; i< totalNotas; i++){
            const calificaciones = this.calificaciones[i]
            sumaNotas = sumaNotas + calificaciones;
        }

        const promedio = sumaNotas / totalNotas;
        return promedio;
    }

    agregarEstudiante(){
        
    }
}