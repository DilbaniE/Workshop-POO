import { Producto } from "../models/Producto";



export class ProductoRepository{

    private productos: Producto[]; // esta es la base de datos de productos

    constructor(){
        this.productos = [];
        this.inicializarProductos();
    }

    private inicializarProductos(){
        this.productos.push(new Producto({id:1,nombre:'Libro 1 - Luis Perez',precio: 100,descripcion:'Libro de la vida'}));
        this.productos.push(new Producto({id:2,nombre:'Libro 2 - Carlos Perez',precio: 200,descripcion:'Libro de la vida'}));
        this.productos.push(new Producto({id:3,nombre:'Asador',precio: 600,descripcion:'Libro de la vida'}));
        this.productos.push(new Producto({id:4,nombre:'Carpa',precio: 900,descripcion:'Libro pequeño'}));
    }

    agregarProducto(producto: Producto){
        this.productos.push(producto);
    }

    listarProductos(){

        this.productos.forEach( producto => {
            console.log( `Producto `);
            
        })

    }


}