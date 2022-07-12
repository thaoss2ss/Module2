import {Point2D} from "./point2D";
import {Point3D} from "./point3D";

let point1 = new Point2D(10, 20);
let point2 = new Point3D(10, 20, 30);

console.log(point1);
console.log(point2);

console.log(point1.getXY());
console.log(point2.getXYZ());

point1.setXY(30,30);
console.log(point1.getXY());

point2.setXYZ(100,100,100);
console.log(point2.getXYZ());