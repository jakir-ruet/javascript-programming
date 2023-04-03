let arr = [4, 5, 6, 9, 6, 7, 3, 2];
// arr.forEach(function(element, index, arr){
//    console.log('element ' + element + 'index ' + index + ' array' + arr);
// });

function makingForEach(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
   }
}
makingForEach(arr, function (element) {
   console.log('Element' + ' ' + element + ' ' + 'Index' + ' ' + arr);
});