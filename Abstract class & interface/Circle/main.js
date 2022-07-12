"use strict";
exports.__esModule = true;
var ComparableCircle_1 = require("./ComparableCircle");
var circles = [];
circles[0] = new ComparableCircle_1.ComparableCircle(10);
circles[1] = new ComparableCircle_1.ComparableCircle(20);
circles[2] = new ComparableCircle_1.ComparableCircle(30);
var result = circles[2].compareTo(circles[1]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
