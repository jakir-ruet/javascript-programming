
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


class mobilePhoneWithID extends mobilePhone{
    _id = -1
    constructor(name, model) {
        super(name, model);
        let set_id = () =>
        {
            this._id++
        }
        set_id()
    }
}

let inst1 = new mobilePhoneWithID("Phone1", "iOS")
// { _id: -1 }
let inst2 = new mobilePhoneWithID("Phone2", "Nokia")
console.log(inst1._id, inst2._id)