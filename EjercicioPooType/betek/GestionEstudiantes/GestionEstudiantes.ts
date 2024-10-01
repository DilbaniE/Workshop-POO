import { Estudiante } from "./Estudiante";

export class GestionEstudiantes{

    estudiantes: Array<Estudiante>

    agregarEstudiante(estudiante: Estudiante): void{
        this.estudiantes.push(estudiante);
    }





}