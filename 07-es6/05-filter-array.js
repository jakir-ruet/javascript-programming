let myNums = [3, 4, 6, 2, 6, 8, 9];
function checkEven(myNum) {
   if (myNum % 2 === 0)
      return true;
   else
      return false;
}
let evenNum = myNums.filter(checkEven);
evenNum.sort();
console.log(evenNum);

let myCities = [
   {
      name: 'Rajshahi',
      population: 2000
   },
   {
      name: 'Dhaka',
      population: 5000
   },
   {
      name: 'Chottorgam',
      population: 3000
   }
];

let bigCities = [];
for (let i = 0; i < myCities.length; i++){
   if (myCities[i].population > 2000) {
      bigCities.push(myCities[i]);
   }
}
console.log(bigCities);