//this has no relationship with function, only it has co-related with object.
let obj = {
   name: 'this keyword testing object',
   details: function () {
      console.log('The output of object using obj' + ' ' + this.name);
   }
}
obj.details(); //print here overall object

function thisTestingFunction() {
   console.log(this);
}
thisTestingFunction(); //it will print window due to no object here

function thisTestingFunctionOne() {
   function innerFunction() {
      console.log(this)
   }
   innerFunction();
}
thisTestingFunctionOne(); //this also print window due to no object here

function thisTestingFunctionTwo() {
   function innerFunction() {
      console.log(this)
   }
   new innerFunction(); //here print object due to use new keyword
}
thisTestingFunctionTwo(); //this also print window due to no object here

