//interface
//type
//class

//interface

// interface User{
//    name
//    age
//    email
//    details(): void
// }

// let user1: User;

// user1 = {
//    name: 'Tahmid',
//    age: 9,
//    email: 'tm.ahad.07@gmail.com',
//    details: () => console.log('hello')
// }

// //type

// type type1 = string | number;
// type type2 = string[]

// let a: type1 = 4;
// let b: type1 = 'string';
// let c: type2 = ['tahmid'];

//generic

class HashTable<K, V>{
   keys: K[]
   values: V[]
   set(key: K, value: V){
      this.keys.push(key);
      this.values.push(value)
   }
   get(key){
      return this.values[this.keys.indexOf(key)];
   }
}
const hash1 = new HashTable<string, number>()

hash1.set('key1', 5)
