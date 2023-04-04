// An object to emulate a map by mapping a key to a value of any type. But using an object as a map has some side effects:
// 1. An object always has a default key like the prototype.
// 2. A key of an object must be a string or a symbol, you cannot use an object as a key.
// 3. An object does not have a property that represents the size of the map.

// We can create a JavaScript Map by:
// 1. Passing an Array to new Map()
// 2. Create a Map and use Map.set()

const fruits = new Map([
   ['a', 100],
   ['b', 150],
   ['c', 200],
   ['d', 250]
]);
// NB: here the key use any types such we use here instead of 'a' is '4343'.
console.log(fruits);
// The set() method can also be used to change existing Map values:
fruits.set('a', 101);
console.log(fruits);
console.log(fruits.get('b', 300));
console.log(fruits.size);
