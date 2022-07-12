import {Edible} from "../lớp animal và interface Edible/interface Edible/Edible";

export abstract class Fruit implements Edible
{
    abstract howToEat(): string;
}