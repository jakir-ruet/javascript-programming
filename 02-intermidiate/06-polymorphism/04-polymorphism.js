class Animal{
    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }

    eats(){
        console.log(`This is ${this.name}, weight is ${this.weight}`)
    }
}

class Cow extends Animal{
    eats() {
        super.eats();
        console.log(`This is ${this.name}, weight is ${this.weight}`)
    }
}


// let animal = new Animal("Cow", "150kg")
// animal.eats()
let cow = new Cow("Goat", "100kg")
cow.eats()
