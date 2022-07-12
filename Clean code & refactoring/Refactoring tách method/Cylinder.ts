export class Cylinder {
    public static getVolume(radius: number, height: number): number {
        let baseArea = this.getBaseArea(radius);
        let perimeter = this.getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }

    private static getPerimeter(radius: number) {
        return  2 * Math.PI * radius;

    }

    private static getBaseArea(radius: number) {
         return Math.PI * radius * radius;

    }
}