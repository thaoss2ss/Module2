export class Point2D {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    setX(x: number): void {
        this.x = x;
    }

    getY(): number {
        return this.y;
    }

    setY(y: number): void {
        this.y = y;
    }

    getXY(): object {
        return {x: this.x, y: this.y};
    }

    setXY(x: number, y: number): void {
        this.setX(x);
        this.setY(y);
    }

}