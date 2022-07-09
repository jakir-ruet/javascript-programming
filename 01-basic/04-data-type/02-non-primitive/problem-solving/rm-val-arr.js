function removeDuplicate(arr){
   let newArr = [];
   for (let val of arr){
      if(!newArr.includes(val)){
         newArr.push(val);
      }
   }
   return newArr
}
//newArr = [1, 2]
//
console.log(removeDuplicate([1, 2, 2]))