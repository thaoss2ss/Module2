import {Shape} from "./Shape";

export class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;
    haftP: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number, haftParimeter: number = (side1 + side2 + side3) / 2) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.haftP = haftParimeter;
    }

    getInfo(): object {
        return {name: this.name, color: this.color, side1: this.side1, side2: this.side2, side3: this.side3};
    }
    getSide1(): number {
        return this.side1;
    }
    getSide2(): number {
        return this.side2;
    }
    getSide3(): number {
        return this.side3;
    }
    getHaftParimeter(): number {
        return this.haftP;
    }
    getArea(): string {
        return "Diện tích tam giác là :"+ (Math.sqrt(this.haftP*(this.haftP-this.side1)*(this.haftP-this.side2)*(this.haftP-this.side3)));
    }
    getParimeter(): string {
        return "Chu vi tam giác là :"+ (this.side1+this.side2+this.side3);
    }

}