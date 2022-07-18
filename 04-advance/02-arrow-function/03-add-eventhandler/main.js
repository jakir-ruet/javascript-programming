let inputData = document.querySelector('#txtInputData');
let display = document.querySelector('#display');
let result = document.querySelector('#result');

//display the result using the function
function resultDisplay(){
   display.innerHTML = this.value;
   let self = this;
   setTimeout(function(){
      result.innerHTML =  `The result ${self.value}`;
   }, 1000);
}
inputData.addEventListener('keyup', resultDisplay);

// //display the result using the arrow function
// let resultDisplay = () => {
//    display.innerHTML = this.value;
//    //this keyword is not applicable in arrow function
// }
// inputData.addEventListener('keyup', resultDisplay);
