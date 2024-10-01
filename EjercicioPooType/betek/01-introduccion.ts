// let y const 
let nombre: string = "";
nombre = " Dilba";
nombre = "Salo";

const edad: number = 0;
//edad = 3 sale error no puede cambiar de valor un const
const universidad = "IU"

let semestre:number | undefined = undefined;
let estatura: number | null = null

let tipoSangre:any = ""
tipoSangre = 1
tipoSangre = "B+"
tipoSangre = true

let estadoCivil : number | string = ""
estadoCivil = 1
estadoCivil = "Married"

console.log("nombre", nombre)


export type Producto = { 
nombre: string,
precio: number,
disponibilidad: boolean
}

function describirProducto(producto: Producto) {
return(`nombre del producto ${producto.nombre} y el precio es  ${producto.precio} el producto disponible ${producto.disponibilidad} `)
    
}
const product1:Producto={nombre:"pollo",precio: 2000,disponibilidad: true}
describirProducto(product1)

console.log(describirProducto({nombre:"arroz", precio:2000, disponibilidad:true}))