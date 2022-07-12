export class Shape {
    protected name: string;
    protected color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
    getName(): string {
        return this.name;
    }
    getColor(): string {
        return this.color;
    }

}