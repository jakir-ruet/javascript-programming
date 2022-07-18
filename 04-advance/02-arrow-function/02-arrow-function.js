let school = {
   name: 'Sun Program Lab',
   lang: ['JavaScript', 'NodeJS', 'Python', 'ReactJS', 'React Native'],
   listLng: function(){
      this.lang.forEach(function(a){
         console.log(`${this.name} is our ${a}`);
      });
   },
};

school.lang();