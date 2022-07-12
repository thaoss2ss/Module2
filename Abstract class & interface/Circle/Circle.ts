export class Circle {
    private _radius: number ;
    constructor(radius: number){
        this._radius = radius;
    }
    getRadius(): number {
        return this._radius;
    }
    setRadius(value: number): void {
        this._radius = value;
    }
    ToString(): string {
        return "Hình tròn bán kính là : "+ this.getRadius();
    }
}

