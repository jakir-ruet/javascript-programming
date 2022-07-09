let myArray = [3, 5, 3, 2, 5];
console.log(`The array is ${myArray}`);

let mySet = new Set(myArray);
console.log(mySet.add(10));
console.log(mySet.delete(2));
console.log(mySet.has(10));
console.log(`The set is ${mySet}`);
//set to array conversion
console.log(`Converted array is ${Array.from(new Set(myArray))}`);

