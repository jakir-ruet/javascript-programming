const groceryList = [
   {
      itemName: 'Banana', price: 35, category: 'Fruit'
   },
   {
      itemName: 'Apple', price: 45, category: 'Fruit'
   },
   {
      itemName: 'Olive Oil', price: 100, category: 'Oil'
   },
   {
      itemName: 'Energy Plus', price: 30, category: 'Biscuits'
   }
];
console.log(groceryList[0]);
const [itemName, price, category] = groceryList;
console.log(itemName);

for (let i = 0; i <= groceryList.length; i++){
   console.log(itemName, price, category);
}