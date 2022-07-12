import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private width: number = 1.0;
    private height: number = 1.0;

    constructor(width: number, height: number, color: string, filled: boolean) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        this.width = width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    public getArea(): number {
        return this.height*this.width;
    }
    public getPerimeter(): number {
        return 2* (this.width+this.height);
    }
    public toString(): string {
        return "A Rectangle with width="
            + this.getWidth()
            + " and length="
            + this.getHeight()
            + ", which is a subclass of "
            + super.toString();
    }
}