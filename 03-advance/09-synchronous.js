const taskOne = () => {
   console.log("This is task one")
}
const taskTwo = () => {
   console.log("This is task Two")
}
const dataLoading = () => {
   console.log("This is task Three")
}
const taskThree = () => {
   setTimeout(dataLoading, 1000)
   //console.log("This is task Three")
}
const taskFour = () => {
   console.log("This is task Four")
}

taskOne()
taskTwo()
taskThree()
taskFour()