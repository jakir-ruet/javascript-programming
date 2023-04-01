let circles = [10, 30, 50];
let areas = [];
let area = 0;
for (let i = 0; i < circles.length; i++){
   area = Math.floor(Math.PI * circles[i] * circles[i]);
   areas.push(`using loop ${area}`);
}
console.log(areas);

//using map
function circleArea(r) {
   return (
      Math.floor(Math.PI * r * r)
   )
}
let circleAreas = circles.map(circleArea);
console.log(`using map ${circleAreas}`);