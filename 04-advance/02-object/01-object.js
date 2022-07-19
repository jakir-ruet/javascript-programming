// //object declaration two ways
// let obj = {};
// let objNew = new Object;

// console.log(obj);
// console.log(objNew);

let carObject = {
   name: 'Toyota-Red',
   model: 'T50RD-HFB',
   brand: 'Toyota',
   origin: 'Japan',
   details: function () {
      console.log('Details of car ' + ' ' + this.name + ' ' + this.model + ' ' + this.brand + ' ' + this.origin);
   }
}

//how to include property/function from outside of object.
carObject.release = 2002;
console.log(carObject.release);

console.log(carObject);
console.log(carObject.brand); //dot notation
console.log(carObject['brand']); //bracket notation

//using the props
for (let props in carObject) {
   console.log(props);
}

