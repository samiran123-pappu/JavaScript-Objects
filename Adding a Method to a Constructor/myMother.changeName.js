// Constructor Function for Person Objects
function Person(firstName,lastName,age,eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

// Create a Person Object
const myMother = new Person("Sally","Rally",48,"green");


myMother.changeName = function(name){
    this.lastName = name;
}

// Change Name
myMother.changeName("Doe");
console.log(myMother.lastName)