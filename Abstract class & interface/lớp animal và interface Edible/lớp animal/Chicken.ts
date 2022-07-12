import {Animal} from "./Animal";
import {Edible} from "../interface Edible/Edible";

export class Chicken extends Animal {
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }
    howToEat(): string {
        return "Could be fried";
    }

}