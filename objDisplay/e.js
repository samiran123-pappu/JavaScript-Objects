const person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function(){
        return this.name + " " + this.city;
    }

}

let a  = JSON.stringify(person);
let a1  = person.toString();
let a3 = Object.values(person)
console.log(a)
console.log(a1)
console.log(a3)