export class Circle {
    protected radius: number = 1.0;
    protected color: string = "red";

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number): void {
        this.radius = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    public toString(): string {
        return "Hình tròn có bán kính ="
            + this.getRadius() + "Màu " + this.getColor()
            + "Diện tích =" + this.getArea();
    }
}