import {Point2D} from "./point2D";

export class Point3D extends Point2D {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    getZ(): number {
        return this.z;
    }

    setZ(value: number) {
        this.z = value;
    }

    getXYZ(): object {
        return {x: this.getX(), y: this.getY(), z: this.z}
    }

    setXYZ(x: number, y: number, z: number): void {
        this.setXY(x, y)
        this.z = z
    }
}
