class mobilePhone{
    constructor(name, model) {
        this.name = name
        this.model = model
    }
    brand(b){
        return b
    }
    static company (c){
        return c
    }
}

let myPhone = new mobilePhone('Nokia', 'Nokia-4.2')
console.log(myPhone)
console.log("this is my phone detail", myPhone, myPhone.brand("iOS"), mobilePhone.company("Nokia"))

module.exports = { mobilePhone }