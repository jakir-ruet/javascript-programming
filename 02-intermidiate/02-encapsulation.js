class mobilePhone{
    //declare private field for encapsulation
    #warranty
    constructor(name, model, company, warranty) {
        this.name = name
        this.model = model
        this.company = company
        this.#warranty = warranty
    }
    phoneDetails(){
        this.#warrantyVoid()
        console.log(`This my phone ${this.name}, model is ${this.model}, company is ${this.company}`)
    }
    //declare private method for encapsulation
    #warrantyVoid(){
        console.log(`warranty period is ${this.#warranty}`)
    }
}

let myPhone = new mobilePhone("Nokia", "Nokia-4.2", "Nokia", 3)
myPhone.phoneDetails()
//myPhone.#warrantyVoid()