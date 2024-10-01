interface Vehiculo{
    modelo: string
    marca: string

    encender(): void
    apagar(): void
}

class Moto implements Vehiculo {
    modelo: string
    marca: string

    constructor(modelo: string, marca: string){
        this.modelo = modelo
        this.marca = marca
    }
    encender(): void {
        console.log("encender moto");
    }

    apagar(): void{
        console.log("apagar moto");
    }

}

class Carro implements Vehiculo {
    modelo: string
    marca: string
    constructor(modelo: string, marca: string){
        this.modelo = modelo
        this.marca = marca
    }

    encender(): void {
        console.log("encender carro");
    }

    apagar(): void{
        console.log("apagar carro");
    }

}

const vehiculo = new Carro("2023", "mazda")
vehiculo.encender()
vehiculo.apagar()

const vehiculo2 =new Moto("2024", "zuzuky")
vehiculo2.encender()
vehiculo2.apagar()