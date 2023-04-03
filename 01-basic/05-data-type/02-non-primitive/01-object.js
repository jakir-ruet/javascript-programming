// By object literal
console.log("==============By object literal=============");
var methodName = "setProps"    
let myObj = {
     name: "Toyoto", 
     model: 500, 
     weight: 850,
     details: function()
     {
         //console.log(`name = ${this.name}, model = ${this.model}, weight = ${this.weight}`)
         const { name, model, weight } = this
         console.log(`name = ${name}, model = ${model}, weight = ${weight}`)
     },

     [ methodName ]: function(color, height)
     {
        this.color = color
        this.height = height
     }
}
console.log(myObj)
console.log(myObj.name)
myObj.details()
myObj.setProps("red", 56)
console.log(myObj);

// By creating instance of Object
console.log("=============By creating instance of Object==============");
var myInstance = new Object()
myInstance.id = 054003
myInstance.name = "Jakir"
myInstance.salary = 50000
console.log(myInstance);

// By using an Object constructor
console.log("============By using an Object constructor==========");
function myConstrutor(first, last, age) {
    this.firstName = first
    this.lastName = last
    this.age = age
}
// create a object
var myConstrutor1 = new myConstrutor("Jakir", "Ahmed", 35)
console.log(myConstrutor1)

myConstrutor1.name = function(){
    return this.firstName + " " + this.lastName
}
console.log(myConstrutor1.name());