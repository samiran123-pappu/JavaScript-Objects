const obj1 = {
    name: "John",
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

const obj2 = {
    name: "Jane",
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};


console.log(obj1.sayHello());
console.log(obj2.sayHello());