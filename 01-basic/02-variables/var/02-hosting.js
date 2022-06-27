//hoisting scope in var occured

carName = "Toyoto"
var carName;
console.log(carName);

//javascript think & rearrange these code as follows:

// var carName;
// carName = 'undefined'; //assign undefined as default values.
// carName = 'Toyoto'; //then putting or taking the car name into this variable
// console.log(carName);