const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let a = "firstName";
  let b = "lastName";
  let c = "age";
  let d = "eyeColor";
  let e = (a in person) ? ("found") : "Not Found";
  delete person.lastName; 

  let f =  b in person ? "ok" : "Not ok";
  console.log(f);
  
  console.log(e);
  
  console.log(person[a]);
  console.log(person[b]);
  console.log(person[c]);
  console.log(person[d]);
  
  console.log(person["firstName"]);
  console.log(person["lastName"]);
  console.log(person["age"]);
  console.log(person["eyeColor"]);