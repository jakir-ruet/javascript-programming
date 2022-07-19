let school = {
	name: 'Sun Program School',
	course: ['Python', 'JavaScript', 'NodeJS', 'ExpressJS', 'Django'],
	details: function(){
		//importing the out of scope object
		let self = this;
		// this.course.forEach(function(a){
		// 	console.log(`Name is ${self.name} section ${a}`);
		// });
		//or
		//using the arrow function 
		this.course.forEach((a) => console.log(`${this.name} has ${a}`));
	},
};
school.details();