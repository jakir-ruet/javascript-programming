
import { slop, c, pi } from "./components/external.js";
// import * as constValues from "./components/external.js"; // use as object for all values

const areaCircle = (radius) => {
   return (pi * radius * radius)
};
let result = areaCircle(5);
console.log(`the result ${result}`);

const yValue = (x) => {
   console.log(x);
   return (slop * x + c)
};
console.log(yValue(3));
