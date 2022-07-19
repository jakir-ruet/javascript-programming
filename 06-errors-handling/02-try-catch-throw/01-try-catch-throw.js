document.querySelector("#checkButton").addEventListener("click", function () {
   // //checking the button
   // alert("button is working")

   //taking value from text box & store in variable
   var num = document.querySelector("#checkValue").value;
   //console.log(num)

   //applying the try catch
   try {
      if (num < 15) {
         throw `Enter the greater the 15`
      }
      else if (num > 20) {
         throw "Enter less than 20 number"
      }
   }
   catch (err) {
      console.log(err)
   }
})