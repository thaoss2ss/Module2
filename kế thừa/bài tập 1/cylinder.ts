import {Circle} from './Circle';

export class Cylinder extends Circle {
    protected height: number = 1.0;

    constructor(height: number, radius: number, color: string) {
        super(radius, color);
        this.height = height;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(value: number): void {
        this.height = value;
    }

    getArea(): number {
        return super.getArea();
    }

    getVolume(): number {
        return this.height * super.getArea() * this.getRadius() * this.getRadius();
    }

    public toString(): string {
        return "Hình trụ có chiều cao là " + this.getHeight() + " Thể tích là " + this.getVolume();
    }
}
