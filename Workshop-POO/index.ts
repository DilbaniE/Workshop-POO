import { Persona } from "./Persona";
import { Empleado } from "./Empleado";
import { Direccion } from './Direccion';
import { crearPersonaJson } from './Util';
import { Moto } from "./Moto";
import { Coche } from "./Coche";
import { Vehiculo } from "./Vehiculo";

// persona

const direccion: Direccion = {
    calle: "calle 80",
    ciudad: "Cali",
    pais: "Colombia"
};

//Vehiculo
const carro = new Coche("Toyota");
const moto = new Moto("Zuzuky")

const persona1 = new Persona("Dilbani", 25, direccion, [carro, moto])
persona1.saludar();
persona1.ciudad();

const persona2 = new Persona("Luis", 45, direccion, [carro, moto])
persona2.saludar();
persona2.ciudad();

const persona3 = new Persona("Raul", 75, direccion, [carro, moto])
persona3.saludar();
persona3.ciudad();

const persona4 = new Persona("Camila", 25, direccion, [carro, moto])
persona4.saludar();
persona4.ciudad();

const persona5 = new Persona("Luisa", 55, direccion, [carro, moto])
persona5.saludar();
persona5.ciudad();

const persona6 = new Persona("Viviana", 35, direccion, [carro, moto])
persona6.saludar();
persona6.ciudad();

const persona7 = new Persona("Flor", 75, direccion, [carro, moto])
persona7.saludar();
persona7.ciudad();

const persona8 = new Persona("Jaime", 28, direccion, [carro, moto])
persona8.saludar();
persona8.ciudad();
const persona9 = new Persona("Carlos", 85, direccion, [carro, moto])
persona9.saludar();
persona9.ciudad();

const persona10 = new Persona("Juana", 15, direccion, [carro, moto])
persona10.saludar();
persona10.ciudad();
persona10.crearPersonaJson();

// Empleado 
const empleado = new Empleado("Dilbani Enriquez", 25, 1590000, direccion)
empleado.saludar();
empleado.trabajar();

const empleado1 = new Empleado("Luis", 45, 6350000, direccion)
empleado1.saludar();
empleado1.ciudad();

const empleado2 = new Empleado("Fanny", 65, 3500000, direccion)
empleado2.saludar();
empleado2.ciudad();

const empleado3 = new Empleado("Jaime", 75, 5500000, direccion)
empleado3.saludar();
empleado3.ciudad();

const empleado4 = new Empleado("Luis", 45, 2500000, direccion)
empleado4.saludar();
empleado4.ciudad();

const empleado5 = new Empleado("Fran", 85, 2700000, direccion)
empleado5.saludar();
empleado5.ciudad();

const empleado6 = new Empleado("Jose", 75, 4500000, direccion)
empleado6.saludar();
empleado6.ciudad();

const empleado7 = new Empleado("Olga", 45, 1500000, direccion)
empleado7.saludar();
empleado7.ciudad();

const empleado8 = new Empleado("Camila", 29, 1800000, direccion)
empleado8.saludar();
empleado8.ciudad();

const empleado9 = new Empleado("Ramro", 35, 1340000, direccion)
empleado9.saludar();
empleado9.ciudad();

const empleado10 = new Empleado("Jass", 34, 4500000, direccion)
empleado10.saludar();
empleado10.ciudad();

 //Moto
 moto.arrancar();
carro.arrancar();