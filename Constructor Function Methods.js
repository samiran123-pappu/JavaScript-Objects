function Person(name, age) {
  this.name = name;
  this.age = age;
  this.ageInDays = function () {
    return this.age * 365;
  };
}
const person1 = new Person("Alice", 25);
person1.sge = function(){
    console.log("Hello");
}
console.log(person1.name);
console.log(person1.ageInDays());