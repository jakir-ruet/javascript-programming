function myDefaultFunction(test = "this default parameter") {
      console.log(`the result ${test}`)
}
myDefaultFunction()
myDefaultFunction("Hello this is not default parameter")
console.log("=============================")

function myRestParameter(a, b, ...c) {
      console.log(`The rest parameter is a = ${a} b = ${b} c = ${c}`)
}

myRestParameter(1, 2, 3, 4, 5, 6, 7, 8, 9)