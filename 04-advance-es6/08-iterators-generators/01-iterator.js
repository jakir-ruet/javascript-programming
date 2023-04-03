// An object is an iterator when it implements an interface (or API) that answers two questions:
// 1. Is there any element left?
// 2. If there is, what is the element?
// -----------------------------------------------
// Since ES6 provides built-in iterators for the collection types  
// Array, 
// Set, and 
// Map,
// you don’t have to create iterators for these objects.

const myArray = [3, 5, 4, 6, 7, 9];
// calling the symbol.iterator() method
const arrayIterator = myArray[Symbol.iterator]();
console.log(arrayIterator);
// looping
for (let i of myArray[Symbol.iterator]()) {
   console.log(i);
}

const myStr = ['Jakir', 'Rahim', 'Karim'];
// calling the symbol.iterator() method
const strIterator = myStr[Symbol.iterator]();
console.log(strIterator);

for (let j of myStr[Symbol.iterator]()) {
   console.log(j);
}
