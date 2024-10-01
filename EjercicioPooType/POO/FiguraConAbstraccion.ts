abstract class FiguraConAbstraccion {
    nombre: string
    constructor(nombre: string) {
       this.nombre = nombre 
    }
    //lo implementa la clase hija
    abstract calcularArea(): void;
    imprimirNombre(){
        console.log("nombre figura", this.nombre);
        
    }
}

class Circulo2 extends FiguraConAbstraccion{
    //implementacion del metodo abstracto de la clase padre(FiguraConAbstracion)
    calcularArea() {
        const area = this.radio * this.radio * Math.PI
        console.log("El area del circulo es", area);
        
    }
    radio: number
    constructor(name: string, radio: number){
       super(name)
       this.radio = radio
    }
}

const circulo = new Circulo2("circulo1", 2)
circulo.calcularArea();
circulo.imprimirNombre();