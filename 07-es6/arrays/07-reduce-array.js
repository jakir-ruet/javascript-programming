let myNums = [7, 4, 6, 3];
let sum = myNums.reduce((preValue, curValue) => {
   console.log(`pre value ${preValue}`);
   console.log(`cur value ${curValue}`);
   return (preValue + curValue);
}, 0)
console.log(`sum using reduce ${sum}`);

const student = [
   {
      name: 'Jakir Ahmed',
      mark: 35
   },
   {
      name: 'Jasim Hasan',
      mark: 40
   },
   {
      name: 'Kabir Ahmed',
      mark: 45
   }
];
const goodStudent = student.reduce((preValue, curValue) => {
   if (curValue.mark > preValue) {
      return (curValue.mark)
   }
   return preValue;
}, 0);
console.log(`good student ${goodStudent}`);

const output = student.reduce((preValue, curValue, idx, myArray) => {
   const shortNameAlp = curValue.name.split(' ');
   console.log(shortNameAlp);
   let nameCode = `${shortNameAlp[0][0]}${shortNameAlp[1][0]}`;
   console.log(nameCode);
   if (idx === myArray.length - 1) {
      nameCode = + '.';
   }
   else {
      nameCode += ', ';
   }
   return (preValue + nameCode);
}, '');
console.log(output)