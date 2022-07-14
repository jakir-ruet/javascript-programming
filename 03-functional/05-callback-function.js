//Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.
//A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
function doHomework(subject, myCallback) {
  console.log(`Starting my ${subject} homework.`);
  myCallback();
}

doHomework('Mathematics', function() {
  console.log('Finished my homework');
});

doHomework('Physics' , function(){
   console.log('Then start Physics homework');
});

//another example
console.log('another example');
let myObject = {
   name: 'Jakir',
   designation: 'CEO',
   age: 32,
   email: 'jakir.ruet.bd@gmail.com'
}

function myDetails(mySelf, myCallbackObject){
   console.log(mySelf.name + ' ' + (mySelf.age) + ' ' + mySelf.designation);
   //myCallbackObject section
   if (mySelf.age >= 18) {
      myCallbackObject(mySelf.email)
   }
   else{
      console.log('You are below of eighteen');
   }
}
myDetails(myObject, function(email){
   console.log('Please sent us email to' + ' ' + email);
});

//another example
console.log('another more example');
function upperLowerCase(data, callbackOne, callbackTwo){
   console.log('Welcome to Sun IT Limited' + ' ' + data);
   callbackOne(data);
   callbackTwo(data);
}

upperLowerCase('talking from callback function', function(data){
   let dataCallbackOne = data.toUpperCase();
   console.log(dataCallbackOne);
   console.log(data.length);
},function(data){
   let dataCallbackTwo = data.toLowerCase();
   console.log(dataCallbackTwo);
});