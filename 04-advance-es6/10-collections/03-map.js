// cleate a list of user as an object
let jakir = { name: 'Jakir Ahmed' },
   jasim = { name: 'Jasim Ahmed' },
   jakia = { name: 'Jakia Ahmed' };

let designation = new Map([
   [jakir, 'Software Developer'],
   [jasim, 'Software Engineer'],
   [jakia, 'Scram Master']
]);

// itetate over map key values
for (const employeeName of designation.keys()) {
   console.log(employeeName.name);
}
// iterate over map values
for (const employeeDesignation of designation.values()) {
   console.log(employeeDesignation);
}

// iterate over map elements
for (const employeeEntries of designation.entries()) {
   console.log(`${employeeEntries[0].name}: ${employeeEntries[1]}`);
}