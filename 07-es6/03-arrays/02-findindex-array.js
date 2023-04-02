let myNums = [4, 5, 7, 3, 4, 2];
let indValue = myNums.findIndex(myNum => {return (myNum === 2)});
console.log(`value ${indValue}`);

let indAndValue = myNums.findIndex((myNum, index) => {
   return(myNum === 5 && index === 1)
});
console.log(`index ${indAndValue}`);

const products = [
   {
      name: 'Fazli',
      price: 500
   },
   {
      name: 'Gopalvog',
      price: 650
   },
   {
      name: 'Amproli',
      price: '450'
   }
];
const objIndex = products.findIndex((product) => {
   return(product.price > 500)
})
console.log(`object value ${objIndex}`);