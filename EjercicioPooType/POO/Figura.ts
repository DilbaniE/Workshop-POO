class FiguraGeometrica {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }

    calcularArea(){
        //implementacion 
        console.log("calculo del area")
    }
}

class Circulo extends FiguraGeometrica {
    radio: number
    constructor(name: string, radio: number){
        super(name)
        this.radio = radio
    }

    //Sobreescribir calcularArea de las super clase
    //Cuando invoque calcularArea, se va invocar este metodo y No el del padre.
    override calcularArea(): void{
        const area = Math.PI * this.radio * this.radio
        console.log("Area del circulo", area);
        
    }
}

//porque invococalcular area? R: por que esta en la clase padre
const circulo1 = new Circulo("circulo", 2);
circulo1.calcularArea()