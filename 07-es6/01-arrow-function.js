function addNormanFunction(a, b) {
   return (a + b);
}
let result = addNormanFunction(3, 4);
console.log(`normal function result ${result}`);

// using the arrow function
let addArrowFunction = (a, b) => {
   return (a + b);
};
console.log(`arrow function result ${addArrowFunction(4, 5)}`);