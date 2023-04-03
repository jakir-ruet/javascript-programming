const taskOne = () => {
   console.log("This is task one")
}

const taskTwo = (callback) => {
   console.log("This is task Two")
   callback()
}

//setting asynchronous 
const taskThree = (callback) => {
   setTimeout(dataLoading = () => {
      console.log("This is task Three")
      callback()
   }, 1000)
   //console.log("This is task Three")
}

const taskFour = () => {
   console.log("This is task Four")
}

taskOne()
taskTwo(function myCallback() {
   taskThree(function myCallback2() {
      taskFour()
   })
})