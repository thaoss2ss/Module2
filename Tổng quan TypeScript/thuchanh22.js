var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
function distance1(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new Circle(9);
var circle2 = new Circle(5);
console.log(distance(circle1, circle2, 24));
