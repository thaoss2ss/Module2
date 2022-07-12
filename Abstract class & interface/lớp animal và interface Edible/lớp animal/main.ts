import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Apple} from "../../Fruits/Apple";
import {Orange} from "../../Fruits/Orange";

console.log("---Animal---")
let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken){
        console.log(item.howToEat());
    }
})
console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howToEat())
})