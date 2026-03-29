// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// JSON.stringify() is included in JavaScript and supported in all browsers.



// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let text = JSON.stringify(person);

// Display the Object
console.log(text);