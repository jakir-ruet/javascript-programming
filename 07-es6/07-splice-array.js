let myNums = [5, 6, 4, 3, 9, 6, 5, 3];
let newMyNums = myNums.splice(1, 2, 10, 11, 12);
console.log(myNums);
console.log(newMyNums);

// here remove two element from index 1 (6, 4) and insert 10, 11, 12