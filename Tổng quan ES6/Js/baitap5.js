
/*let testArray = [1,2,100,100,6];
let array = [3,4,5];

testArray = [...testArray.splice(0,2),...array];

console.log(testArray);

// phần 2

testArray = [...testArray.slice(0,2),...array];

console.log(testArray);*/



let customerOrder = []


function recordOrders(time) {


    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})


}


recordOrders(new Date, "coffee", "yaourt", "pizza")


console.log(customerOrder)



