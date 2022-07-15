function Worker(name, designation, wage) {
    this.name = name
    this.designation = designation
    this.wage = wage

    //Abstracted variable here
    let bonus = 1000

    //Abstracted method here
    let calWage = function () {
        let totalWage = wage + bonus
        console.log(`Total Payable = ${totalWage}`)
    }

    this.empDetails = function () {
        console.log(`Name is ${this.name}, Designation is ${this.designation}`)
        calWage()
    }
}

let empDetails = new Worker("Jakir", "Manager", 5000)
empDetails.empDetails()