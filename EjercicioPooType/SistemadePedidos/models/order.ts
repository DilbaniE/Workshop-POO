import { OrdenItem } from "./orderItem";

export class Orden{
    id: number;
    items: OrdenItem[];
    total: number;

    constructor(id:number, items: OrdenItem[]){
        this.id = id;
        this.items = items;
        this.total = this.calcularTotal();
    }

    private calcularTotal(){
        return 0;
    }
}