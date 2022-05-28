// in javascript class is special type of code block
// in class four pillars Abstraction, Encapsulation, Inheritance & Polymorphism
class Employee {
    constructor(id, name, address){
        this.id = id
        this.name = name
        this.address = address
    }
    age(){
        let date = new Date()
        return date.getFullYear()
    }
}
const myEmployee = new Employee(54003, "Jakir", "Rajshahi")
const empAge = myEmployee.age()
console.log(myEmployee)
console.log(empAge)