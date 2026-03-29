const fruits = {a: "Banana", b: "Orange", c: "Apple"};

const myArray = Object.values(fruits);

let text = "";
for( let [key, value] of Object.entries(fruits)){
    text += key + " : " + value + " , ";

}

console.log(text)
console.log(myArray)