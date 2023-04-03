// function student(name, position){
//    console.log(`${name} is a ${position} boy`);
// }
// student('Rahim', 'First');
// student('Karim', 'Second');
// student('Fahim', 'Third');

// function FCConverter(c){
//    let f = ((9 * c / 5) + 32);
//    return f;
// }
//    let result = FCConverter(50);
//    console.log(`The value of Fahrenheit is = ${result}`);

// let user1 = { name: 'John', position: 'First', author: true };

// let user2 = (() => {
//    let user = {...user1}
//    delete user.author;
//    return user;
// })()
// console.log(user2)

//function using spread and arguments

// const sum = (...nums) => {
//    console.log(nums)
//    let result = 0;
//    for (let number of nums) {
//       result += number;
//    }
//    return result;
// }
// let result = sum(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(result);

// function sum2(){
//    let result = 0;
//    console.log(arguments)
//    for (let number in arguments) {
//       number = Number(arguments[number]);
//       result += number;
//    }
//    return result;
// }
// console.log(sum2(1, 3, 2, 4));

//Differences between arguments and array
let testArguments = {'0': 1, '1': 2, '2': 3};
let testArray = [1, 2, 3]
testArray.push(4)
testArguments.push() //error show here due to push method not available
console.log(testArguments[1])
demo(2, 4, 4)