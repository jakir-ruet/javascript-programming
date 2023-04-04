// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// create a JavaScript Set by:
// 1. Passing an Array to new Set()
// 2. Create a new Set and use add() to add values
// 3. Create a new Set and use add() to add variables

// A Set has no keys. keys() returns the same as values().

// const mySet = new Set('Jakir', 'Jasim', 'Karim');
const mySet = new Set(['Jakir', 45, 'Jasim', false, 'Karim', {a: 33, b: 25}]);
console.log(mySet);
mySet.add('Jakir'); // not add due set is unique value
mySet.add('Jakia'); // it add due set is unique value
console.log(mySet);

// using the forEach
let userName = '';
mySet.forEach(function (value) {
   userName += value + ', ';
});
console.log(`for each result ${userName}`);

// using the iterator by values
const myIterators = mySet.values();
let userNameIterator = '';

for (const myIterator of myIterators){
   userNameIterator += myIterator + ', ';
}
console.log(`iterator value result ${userNameIterator}`);

// using the iterator by entries
const myEntries = mySet.entries();
let userNameEntries = '';
for (const myEntry of myEntries) {
   userNameEntries += myEntry + ', ';
}
// A Set has no keys. >> entries() returns [value,value] pairs instead of [key,value] pairs.
// This makes Sets compatible with Maps:
console.log(`iterator entries result ${userNameEntries}`);
