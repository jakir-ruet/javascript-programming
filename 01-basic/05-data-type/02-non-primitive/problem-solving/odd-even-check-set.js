let oddEvenSet = new Set([9, 7, 5, 3, 5, 6]);
console.log(oddEvenSet);
// checking the odd even number in array
oddEvenSet.forEach(
   value =>{
      if (value % 2 === 0) {
         console.log(true);
      }
      else{
         console.log(false);
      }
   }
);

// const cbFunc = value => console.log(value % 2 === 0);
// oddEvenSet.forEach(cbFunc);

// oddEvenSet.forEach(value => console.log(value % 2 === 0));