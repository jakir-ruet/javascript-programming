// Primitive data type
    // String	represents sequence of characters e.g. "hello"
    // Number	represents numeric values e.g. 100
    // Boolean	represents boolean value either false or true
    // Undefined	represents undefined value
    // Null	represents null i.e. no value at all

var myString = "this a string data type"
console.log(myString)

var myNumber = 100
console.log(myNumber)

var myBoolean = true
console.log(myBoolean)

var myUndefined
console.log(myUndefined)

var myNull = null
console.log(myNull)
console.log("=====================")


// Non-primitive (reference) data type
    // Object	represents instance through which we can access members
    // Array	represents group of similar values
    // RegExp	represents regular expression
    // function a block of code designed to perform a particular task

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
     setProp: function(color, height)
     {
        this.color = color
        this.height = height
     }
}
console.log(myObj)
console.log(myObj.name)
myObj.details()
myObj.setProp("red", 34)
console.log(myObj);

