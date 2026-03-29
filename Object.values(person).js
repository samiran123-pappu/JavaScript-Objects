// Using Object.values()
// Object.values() creates an array from the property values:

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);
console.log(myArray)
// Stringify the Array
let text = myArray.toString();
console.log(text)

