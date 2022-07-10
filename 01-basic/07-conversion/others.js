let str = '1 + 2 * 2'

let num = Number(str);//NaN
let num2 = eval(str);//5
console.log(`${num}\n${num2}`)

let obj1 = {
   name: 'Tahmid',
   age: 9
};
let str2 = String(obj1);// [object object]
let str3 = JSON.stringify(obj1)// '{ "name": "Tahmid", ag... }'
console.log(str2, str3)

//array to string
let str4 = '12345'
let arr = Array(str4);//['123tahmid']
let arr2 = Array.from(str4);// ['1', '2', '3', 'tahmid']
console.log(arr);
console.log(arr2);

//set to array 
let set1 = new Set([1, 2, 3, 4, 5])

let arr3 = Array(set1); // Set[]
let arr4 = Array.from(set1);//[1,2,3,4,5]
console.log(arr3, arr4)