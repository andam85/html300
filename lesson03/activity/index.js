const dog = {
  name: 'ted',
  breed: 'poodle',
  color: 'brown',
  barkLevel : 7,
  energyLevel : 2,
  patMethod: function(){
       return this.energyLevel+1;
  };

  }

console.log(dog.breed);
