//every datatype in javascript is a object

// const arrToObject = arr => {
//    let obj = {}
//    for (let i in arr){
//       obj[i] = arr[i]
//    }
//    return obj
// }

// console.log(arrToObject([1, 2, 3]))

//for in loop -> key

let obj = {
   name: 'Tahmid',
   age: 9
};
let arr = [1, 3, 5]
for (let keys in obj){
   console.log(keys);
};
for (let ind in arr){
   console.log(ind);
};
for (let el of arr) {
   console.log(el)
}