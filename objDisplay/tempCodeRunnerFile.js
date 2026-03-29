// Create an Object


const person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function(){
        return this.name + " " + this.city;
    }
}


let text = "";
for(let x in person){
    text += person[x] +  " ";
}
console.log(text)