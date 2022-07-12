var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = "red";
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 30));
circleList.push(new Circle("green", 40));
circleList.push(new Circle("black", 50));
function showCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
