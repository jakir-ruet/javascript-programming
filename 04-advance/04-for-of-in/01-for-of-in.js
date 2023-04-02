//for of
console.log("=========for of=========")
const items = ["items1", "items2", "items3", "items4"]
for (let item of items) {
   console.log(`result 'for of' in array, ${item}`)
}
console.log("=========for in=========")
//for in
let myDetails = {
   id: 54003,
   name: "Jakir",
   point: 5.00
}
for (let x in myDetails) {
   console.log(`result 'for in' in object, ${x} : ${myDetails[x]}`)
}
// 'for in' vs 'for of'
// for in iterates over all enumerable propeties of an object. it doesn't iterate over a collection such as 'Array', 'Map' or 'set'
// for of iterates a collection, rather than object.