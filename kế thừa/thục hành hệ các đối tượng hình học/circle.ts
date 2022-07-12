import {Shape} from "./Shape";

export class Circle extends Shape {
    private radius: number = 1.0;

    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled);
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
    public setRadius(value: number):void {
        this.radius = value;
    }
    public getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
    public toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
            + super.toString();
    }
}