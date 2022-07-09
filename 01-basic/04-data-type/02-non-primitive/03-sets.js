let myArray = [3, 5, 3, 2, 5];
console.log(myArray);

let mySet = new Set(myArray);
console.log(mySet.add(10));
console.log(mySet.delete(2));
console.log(mySet.has(10));
console.log(mySet);
//set to array conversion
console.log(Array.from(new Set(myArray)));

