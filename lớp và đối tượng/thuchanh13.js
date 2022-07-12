class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}
let shape = new Shape('red',false);
console.log(shape);


/*class Circle {
    constructor(radius,color,filled) {
        this.radius = radius;
        this.color = color;
        this.filled = filled;
    }
    getArea() {
        return this.radius*this.radius*Math.PI;
    }
    getPerimeter() {
        return this.radius*2*Math.PI;
    }
}
let circle = new Circle(3.5, "indigo", false);
console.log(circle.getPerimeter());
console.log(circle);*/


class Rectangle {
    constructor(width, height,color, filled) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.filled = filled;
    }
    getArea() {
        return this.width*this.height;
    }
    getPerimeter() {
        return 2*(this.width+this.height)
    }
}
let rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle.getPerimeter());
console.log(rectangle);

class Square {
    constructor(color, filled,side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let square = new Square("yellow", true, 5.8);

console.log(square);