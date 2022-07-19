let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let firstEven = myNum.find(x => x % 2 === 0)
console.log(`using function ${firstEven}`)

//using function
const evenNumber = (value) => {
   if (value % 2 === 0) {
      return value
   }
}
let firstEvenInFunction = myNum.find(evenNumber)
let firstEvenInFunctionIndex = myNum.find(evenNumber)
console.log(`using function by value ${firstEvenInFunction}`)
console.log(`using function by index ${firstEvenInFunctionIndex}`)

//using object
const myPeople = [
   {
      id: 11,
      name: "Fahmid",
      point: 25
   },
   {
      id: 12,
      name: "Tahmid",
      point: 25
   },
   {
      id: 13,
      name: "Touhida",
      point: 27
   },
   {
      id: 14,
      name: "Jakir",
      point: 30
   }
]
console.log(myPeople.find(x => x.point > 27))