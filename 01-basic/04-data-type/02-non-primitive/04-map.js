// declare a map
let myMap = new Map();
console.log('Check the map', myMap);
myMap.set('myKey', 'myValue');
myMap.set(1, 500);
myMap.set(true, false)
console.log(myMap.get('myKey'));
console.log(myMap.get(1));
console.log(myMap.get(true))

// inserting the key-value manually
myMap = new Map([
   ['name', 'Jakir'],
   [2, 350]
])
console.log('manual key values');
console.log(myMap.get('name'));

console.log('for loop in map');
for(let [key, value] of myMap.entries()){
console.log(`key is ${key} & value is ${value}`);
};

console.log('for each loop in map');
myMap.forEach((value, key) => {
console.log(`key is ${key} & value is ${value}`);
});

console.log(myMap.size)
console.log(myMap.has('name'))
for (let values of myMap.values()){
   console.log(values)
}