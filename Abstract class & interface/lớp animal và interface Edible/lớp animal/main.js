"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Tiger");
var Chicken_1 = require("./Chicken");
var Apple_1 = require("../../Fruits/Apple");
var Orange_1 = require("../../Fruits/Orange");
console.log("---Animal---");
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log('---Fruits-----');
var fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (item) {
    console.log(item.howToEat());
});
