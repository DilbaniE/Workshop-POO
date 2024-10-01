interface Shape{
    area(): number;
}

class Circulo implements Shape{
    constructor(private radius: number){}
        area(): number{
            return Math.PI * this.radius * this.radius;
        }
}

class Square implements Shape{
    constructor(private side: number){}
        area(): number{
            return this.side * this.side;
        }
}

class AreaCalculator{
    calculateArea(Shape: Shape): number{
        return Shape.area();
    }
}

const circule1: Circulo = new Circulo(5);
