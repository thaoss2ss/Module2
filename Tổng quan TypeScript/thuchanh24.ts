class Circle {
    color: string ="red";
    radius: number = 20;
    constructor(color:string, radius:number){
        this.color = color;
        this.radius = radius;
    }
}
let circleList: Circle[] = [];
circleList.push(new Circle("yellow",30));
circleList.push(new Circle("green",40));
circleList.push(new Circle("black",50));

function showCircle(circle: Circle){
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
