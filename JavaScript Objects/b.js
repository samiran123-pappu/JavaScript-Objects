const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}


person.firstName = "Jane"; // Changing Properties
person.firstNam1e = "Janedfgn"; // Adding New Properties
delete person.lastName; // Deleting Properties
console.log(person.firstName);
console.log(person.firstNam1e);
console.log(person["lastName"]);
console.log(person.age);
console.log(person.eyeColor);