
let allSides = [5, 5, 5]
class Polygon {
        constructor(allSides){
        this.sideA = allSides[0];
        this.sideB = allSides[1];
        this.sideC = allSides[2];
        this.allSides = allSides
    }
    get countSides (){ return this.allSides.length }
    // get perimeter() { return this.sideA + this.sideB + this.sideC}
    get perimeter() {return this.allSides.reduce((a, b) => a + b)}
    // get perimeter() { return this.sideA + this.sideB + this.sideC || allSides.reduce((a, b) => a + b)}
}

class Triangle extends Polygon{
    get isValid() { 
        return ((this.sideA + this.sideB) > this.sideC && (this.sideB + this.sideC) > this.sideA && (this.sideA + this.sideC) > this.sideB) ? true : false
    }
}

class Square extends Polygon{
    constructor(allSides){
        super(allSides)
        this.sideD = allSides[3]
    }
    get area() { return this.sideA * this.sideA};
    get isValid() { return (this.perimeter/4 === this.sideA) ? true: false};
}




