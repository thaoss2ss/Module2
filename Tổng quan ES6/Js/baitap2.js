const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


];

let valueOfInventory = inventory.filter((value) => { return value.type === "machine"});

console.log(valueOfInventory);

let totalMachineValue = valueOfInventory.reduce(function(total, currentValue) {
    return total + currentValue.value;
},0)

console.log(totalMachineValue);


