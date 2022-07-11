let myArray = [3, 5, 6, 2, 6, 9, 10];
// console.log(`The array = ${myArray}`);
// console.log(`The maximum value =   ${Math.max(...myArray)}`);
// console.log(`The lowest value =  ${Math.min(...myArray)}`);

const minMax = arr => {
   let min = arr[0];
   let max = arr[0];
   for (let element of arr){
      if (element < min){
         min = element
      }
      if (element > max){
         max = element
         //max = 3
      }
   }
   return {
      min,
      max
   }
   
}
console.log(minMax([2,3, 4]))