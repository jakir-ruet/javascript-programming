class mobilePhone{
    constructor(name, model, company) {
        this.name = name
        this.model = model
        this.company = company
    }
}

class myPhone extends mobilePhone{
    constructor(name, model, company, warranty) {
        super(name, model, company);
        this.warranty = warranty
    }
    detailMobile(){
        console.log(`PC Name = ${this.name}, Model = ${this.model}, Company = ${this.company}, Warranty = ${this.warranty}`)
    }
}

let nokia = new myPhone("Nokia", "Nokia-4.2", "Nokia", 365)
let iphone = new myPhone("Apple", "13 Pro Max Mini", "Apple", 365)
nokia.detailMobile()
iphone.detailMobile()