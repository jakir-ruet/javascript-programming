let arr = [4, 5, 6];
let reduceArr = arr.reduce(function(preValue, postValue){
   return preValue * postValue;
});
console.log(`using reduce is ${reduceArr}`);