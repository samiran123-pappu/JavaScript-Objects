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


obj1.sayHello()
obj2.sayHello()