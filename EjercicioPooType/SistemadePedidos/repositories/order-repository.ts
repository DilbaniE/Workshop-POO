import { Orden } from "../models/order";

export class OrderRepository{

    private ordenes: Orden[]

    constructor(){
        this.ordenes =[]
    }

    agregarOrden(orden: Orden){
        this.ordenes.push(orden)
    }
    
}