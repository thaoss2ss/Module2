import {Circle} from "./Circle";
import {Comparable} from "./Comparable";

export class ComparableCircle extends Circle implements Comparable{

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.getRadius() > o.getRadius()) return 1;
        else if (this.getRadius() < o.getRadius()) return -1;
        else return 1;
    }
}