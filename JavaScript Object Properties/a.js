const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};
let a = "firstName";
console.log(person[a]);  
// Dot notation
console.log(person.firstName);

// Bracket notation
console.log(person["lastName"]);

// Expression
console.log(person[Object.keys(person)[0]]);
