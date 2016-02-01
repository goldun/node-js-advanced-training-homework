"use strict";

const MILLIMETRE_SYMBOL = "mm";
const CENTIMETRE_SYMBOL = "cm";
const METRE_SYMBOL = "m";

const SQUARE_MILLIMETRE_SYMBOL = String.fromCharCode(parseInt("339F",16));
const SQUARE_CENTIMETRE_SYMBOL = String.fromCharCode(parseInt("33A0",16));
const SQUARE_METRE_SYMBOL = String.fromCharCode(parseInt("33A1",16));



class Shape {

    constructor(perimeter, area) {
        this.perimeter = perimeter;
        this.area = area;
    }

    /*get perimeter() {
        return this.perimeter;
    }

    get area() {
        return this.area;
    }*/

    getPerimeter (unit) {
        if (!!unit) {
            switch (unit) {
                case MILLIMETRE_SYMBOL:
                    return this.perimeter * 1000;
                case CENTIMETRE_SYMBOL:
                    return this.perimeter * 100;
                case METRE_SYMBOL:
                    return this.perimeter;
                default:
                    //TODO throw an exception;
            }
        } else {
            return this.perimeter;
        }
    }

    getArea (unit) {
        if (!!unit) {
            switch (unit) {
                case MILLIMETRE_SYMBOL:
                    return this.area * 1000000;
                case CENTIMETRE_SYMBOL:
                    return this.area * 10000;
                case METRE_SYMBOL:
                    return this.area;
                default:
                //TODO throw an exception;
            }
        } else {
            return this.area;
        }
    }
}

class Rectangle extends Shape {

    constructor(width, height) {
        var perimeter = (width + height) * 2;
        var area = width*height;
        super(perimeter, area);
    }
}

class Circle extends Shape {

    constructor(radius) {
        var perimeter = 2*Math.PI*radius;
        var area = Math.PI*Math.pow(radius, 2);
        super(perimeter, area);
    }
}

class Triangle extends Shape {

    constructor(sideA, sideB, sideC) {
        var perimeter = sideA + sideB + sideC;
        var p = perimeter/2;
        var area = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
        super(perimeter, area);
    }
}

class Trapezoid extends Shape {

    constructor(baseA, baseB, sideC, sideD) {
        var perimeter = baseA + baseB + sideC + sideD;
        var area = (baseA+ baseB)/2*Math.sqrt(Math.pow(sideC, 2)-Math.pow((Math.pow((baseB-baseA), 2) + Math.pow(sideC, 2) - Math.pow(sideD, 2))/(2*(baseB-baseA)), 2));
        super(perimeter, area);
    }
}

function calculateAreaAndPerimeter(name, shape){
    console.log(name + " perimeter:" + shape.getPerimeter(MILLIMETRE_SYMBOL) + MILLIMETRE_SYMBOL);
    console.log(name + " area:" + shape.getArea(MILLIMETRE_SYMBOL) +  SQUARE_MILLIMETRE_SYMBOL);
    console.log(name + " perimeter:" + shape.getPerimeter(CENTIMETRE_SYMBOL) + CENTIMETRE_SYMBOL);
    console.log(name + " area:" + shape.getArea(CENTIMETRE_SYMBOL) +  SQUARE_CENTIMETRE_SYMBOL);
    console.log(name + " perimeter:" + shape.getPerimeter() + METRE_SYMBOL);
    console.log(name + " area:" + shape.getArea() +  SQUARE_METRE_SYMBOL);
}

let shapes = new Map();
shapes.set("rectangle", new Rectangle(2, 5));
shapes.set("circle", new Circle(6));
shapes.set("triangle", new Triangle(2, 5, 4));
shapes.set("trapezoid", new Trapezoid(22, 12, 14, 14));

for (let shapeName of shapes.keys()) {
    calculateAreaAndPerimeter(shapeName, shapes.get(shapeName));
}






