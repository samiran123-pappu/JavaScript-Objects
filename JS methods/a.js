// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

// Display data from the object:
console.log(person.name());